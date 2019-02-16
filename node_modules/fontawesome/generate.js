const VERSION_INCREASE = 0;

const fetch = options => new Promise((resolve, reject) => {
    require("https").get(options, function(response) {
        let body = "";
        if (response.statusCode !== 200) { reject(new Error("Request failed. Status code: " + response.statusCode)); response.resume(); return; }
        response.on("error", err => reject(err));
        response.on("data", chunk => body += chunk);
        response.on("end", () => resolve(body));
    });
});

async function generate() {
    let changelog = await fetch({
        host: "raw.githubusercontent.com",
        path: "/FortAwesome/Font-Awesome/master/CHANGELOG.md"
    });
    let version = (changelog.match(/(?:\n|^)##\s+\[(\d+\.\d+\.\d+)\]/)||[,""])[1];
    if (version.length < 3) {
        throw new Error("Couldn't parse version");
    }
    var packageVersion = version.replace(/\.\d$/, x => "." + (parseInt(x.substr(1)) + VERSION_INCREASE));
    console.log("Font Awesome v" + version + " (package version " + packageVersion + ")");
    
    let source = await fetch({
        host: "pro.fontawesome.com",
        path: "/releases/v" + version + "/css/all.css",
        headers: {
            "Referer": "https://mo-mar.de"
        }
    });
    
    var fa = "/* Unicode mappings for FontAwesome Pro v" + version + " */\nvar fa=function(i){return fa[i.replace(/-./g,function(x){return x.substr(1).toUpperCase()})]};"

    var namecount = 0;
    var main = source.match(/(\}\.fa-[a-z0-9\-]+(?::before,\.fa-[a-z0-9\-]+)*):before\{content:"\\([0-9a-f]+)"/g);
    if (!main) { console.log("Couldn't parse icons"); return process.exit(1); }
    for (var i = 0; i < main.length; i++) {
        var icon = main[i].match(/(\}\.fa-[a-z0-9\-]+(?::before,\.fa-[a-z0-9\-]+)*):before\{content:"\\([0-9a-f]+)"/).slice(1);
        icon[0] = icon[0].substr(5).split(/:before,\.fa-/);
        for (var k = 0; k < icon[0].length; k++) {
            icon[0][k] = icon[0][k].replace(/-./g, function(x) { return x.substr(1).toUpperCase() });
            // fa.500px is not valid JS
            if (icon[0][k].match(/^[^a-z]/)) fa += "fa[\"" + icon[0][k] + "\"]=\"\\u" + icon[1] + "\";";
            else fa += "fa." + icon[0][k] + "=\"\\u" + icon[1] + "\";";
        }
        namecount += icon[0].length;
    }

    fa += "module.exports=fa;";
    require("fs").writeFileSync(__dirname + "/index.js", fa);

    console.log(main.length + " icons parsed (" + namecount + " names)")

    var packageInfo = require("fs").readFileSync(__dirname + "/package.json").toString();
    packageInfo = packageInfo.replace(/(\"version\":\s*\")[\d.]+\"/, "$1"+packageVersion+"\"");
    require("fs").writeFileSync(__dirname + "/package.json", packageInfo);
}

generate()
    .then(() => console.log("Successfully generated new index.js"))
    .catch(err => console.error(err));

