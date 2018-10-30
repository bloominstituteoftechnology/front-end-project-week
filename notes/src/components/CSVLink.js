import { CSVLink } from "react-csv";

// fixing a bug inside of React CSV
class PropDataUpdatedCSVLink extends CSVLink {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillReceiveProps(nextProps) {
        const { data, headers, separator, uFEFF } = nextProps;
        this.setState({ href: this.buildURI(data, uFEFF, headers, separator) });
    }
}

export default PropDataUpdatedCSVLink;