import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar';
import NoteList from '../NoteList/NoteList';
import NewNote from '../NewNote/NewNote';
import ViewNote from '../ViewNote/ViewNote';
import EditNote from '../EditNote/EditNote';
import './MainContainer.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

const notesArray = {
    notes: [
        {
            tags: ["bacon", "spicy"],
            title: "Bacon Ipsum 1",
            content: "Spicy jalapeno bacon ipsum dolor amet t-bone shankle drumstick swine beef. Bresaola pork belly burgdoggen jowl cupim. Kielbasa doner boudin burgdoggen shoulder ball tip pork belly tenderloin. Pig jerky doner pancetta chuck spare ribs bresaola. Beef picanha buffalo beef ribs rump ribeye bresaola bacon, pork chop meatball cupim tail strip steak sausage leberkas.",
            id: 0
        },
        {
            tags: ["bacon", "beef"],
            title: "Bacon Ipsum 2",
            content: "Beef ham hock spare ribs strip steak shoulder venison sirloin picanha beef ribs cow brisket. Short loin cow venison, chicken porchetta prosciutto pork sirloin turkey flank chuck. Capicola prosciutto shankle, kielbasa shoulder ham hock ham pastrami pork boudin ball tip cupim. Ham hock shank short loin cupim turducken. Meatball ham hock capicola jowl tri-tip short loin. Pig short ribs boudin filet mignon ribeye biltong shoulder meatball porchetta.",
            id: 1
        },
        {
            tags: ["bacon", "burgdoggen"],
            title: "Bacon Ipsum 3",
            content: "Burgdoggen cupim pancetta ham hock beef corned beef capicola pig. Meatloaf boudin andouille ham hock salami drumstick fatback pork sausage capicola. Chuck bresaola turducken cow porchetta. Kielbasa turkey cow kevin. Ball tip chuck shoulder tri-tip porchetta landjaeger sirloin. Capicola salami jerky corned beef cow.",
            id: 2
        },
        {
            tags: ["bacon", "brisket"],
            title: "Bacon Ipsum 4",
            content: "Brisket cow landjaeger ham hock chicken short ribs. Beef ribs leberkas short ribs corned beef landjaeger ball tip, flank ham hock fatback pancetta. Swine kevin short loin pancetta t-bone rump, pastrami sirloin turducken venison ham leberkas. Beef picanha sirloin, chicken spare ribs pork belly cupim hamburger corned beef t-bone fatback. Venison jowl sausage, brisket meatloaf bresaola rump. Filet mignon ham pork loin meatloaf tri-tip t-bone frankfurter beef pancetta andouille buffalo kielbasa.",
            id: 3
        },
        {
            tags: ["bacon", "shoulder"],
            title: "Bacon Ipsum 5",
            content: "Shoulder brisket boudin shank. Turducken pig tri-tip chuck ball tip, sausage andouille beef short ribs swine pork belly salami. Fatback ribeye tenderloin, hamburger tail short ribs leberkas sausage pancetta ground round filet mignon meatball strip steak drumstick andouille. Ground round spare ribs drumstick, prosciutto frankfurter meatloaf meatball leberkas shank pastrami bacon salami tail venison.",
            id: 4
        },
        {
            tags: ["bacon", "ground round"],
            title: "Bacon Ipsum 6",
            content: "Ground round pork jerky, fatback bacon sausage shankle rump pastrami filet mignon beef ribs doner shoulder. Shank turkey beef ribs landjaeger kielbasa doner alcatra tri-tip. Ham flank turkey, pastrami chicken pancetta jerky shoulder boudin doner pork chop bacon beef ribs meatloaf ground round. Ham pastrami picanha leberkas jerky fatback capicola pork chop short ribs shankle pig burgdoggen brisket landjaeger swine. Doner shank beef ribs rump boudin pig ham buffalo spare ribs meatloaf. Kielbasa boudin spare ribs shank tri-tip.",
            id: 5
        },
        {
            tags: ["bacon", "tongue"],
            title: "Bacon Ipsum 7",
            content: "Tongue beef meatloaf alcatra swine doner. Venison t-bone tenderloin, corned beef capicola landjaeger shank pork loin short loin porchetta frankfurter pig salami burgdoggen turducken. Pork chop doner meatball, sausage shank spare ribs burgdoggen tail bresaola. Meatloaf ham hock bacon venison andouille, pancetta tongue burgdoggen pig cow ham beef ribs.",
            id: 6
        },
        {
            tags: ["bacon", "frankfurter"],
            title: "Bacon Ipsum 8",
            content: "Frankfurter pork loin capicola turkey. Chicken beef ribs salami swine rump kevin hamburger chuck fatback capicola andouille alcatra spare ribs. Pork chop pork loin cow, sirloin bresaola ham ham hock meatball ribeye corned beef fatback tongue. Pork belly biltong cow shank leberkas. Porchetta tri-tip bacon, flank andouille frankfurter leberkas pork belly ribeye kevin. Ribeye shoulder swine tenderloin short ribs ball tip.",
            id: 7
        },
        {
            tags: ["bacon", "chuck"],
            title: "Bacon Ipsum 9",
            content: "Chuck ball tip biltong drumstick bresaola andouille. Shoulder prosciutto cow, capicola sausage kielbasa tri-tip jowl drumstick ball tip leberkas doner. Bacon spare ribs doner porchetta tri-tip. Short loin sirloin frankfurter turkey biltong brisket pig hamburger tri-tip alcatra shank salami ham hock fatback boudin. Landjaeger pig picanha meatball pork chop, burgdoggen short loin.",
            id: 8
        }
    ]
};

const routes = [
    {
        path: '/',
        component: NoteList,
        exact: true
    },
    {
        path: '/new',
        component: NewNote,
        exact: true,
        initialData: notesArray  
    },
    {
        path: '/view/:id',
        component: ViewNote,
        exact: false,
        initialData: notesArray
    },
    {
        path: '/edit/:id',
        component: EditNote,
        exact: true,
        initialData: notesArray
        // fetchInitialData: (id) => fetchSettings(id),
    },
]


class MainContainer extends Component {
    constructor() {
        super();
        this.state = {

        }
    }    

    render() {
        return (
            <Router>
                <div className="main-container">
                    <SideBar />
                    {routes.map(({path,component: C, exact, initialData}) => (
                        <Route 
                            path={path}
                            key={path}
                            render={(props) => <C {...props} initialData={initialData} />}
                            exact={exact}
                        />
                    ))}

                    {/* <Route exact path="/" component={NoteList}/>
                    <Route exact path="/new" component={NewNote} />
                    <Route path="/view/:id" component={ViewNote} />
                    <Route exact path="/edit" component={EditNote} /> */}
                </div>
            </Router>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         notes: state.notes
//     };
// };

export default MainContainer;