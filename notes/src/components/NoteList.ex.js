import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Markdown from 'markdown-to-jsx';
import { CSVLink, CSVDownload } from 'react-csv';


var placeholder = document.createElement("li");
placeholder.className = "placeholder";

export default class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
    }
    componentDidMount = () => {
        console.log("props", this.props)
        this.setState({
            notes: this.props.notes
        })
    }
    componentWillReceiveProps = (newProps) => {
        console.log("newp", newProps)
        this.setState({
            notes: newProps.notes
        })
    }
    dragStart(e) {
        this.dragged = e.currentTarget;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.dragged);
    }
    dragEnd(e) {
        this.dragged.style.display = 'block';
        this.dragged.parentNode.removeChild(placeholder);

        // update state
        var data = this.state.notes;
        var from = Number(this.dragged.dataset.id);
        var to = Number(this.over.dataset.id);
        if (from < to) to--;
        data.splice(to, 0, data.splice(from, 1)[0]);
        this.setState({ notes: data });
    }
    dragOver(e) {
        e.preventDefault();
        this.dragged.style.display = "none";
        if (e.target.className === 'placeholder') return;
        this.over = e.target;
        e.target.parentNode.insertBefore(placeholder, e.target);
    }
    render() {
        var listItems = this.state.notes.map((item, i) => {
            return (
                <li data-id={i}
                    key={i}
                    draggable='true'
                    onDragEnd={this.dragEnd.bind(this)}
                    onDragStart={this.dragStart.bind(this)}>
                    <Link to={`/notes/${item.id}`} key={item.id} className="noDecoration">
                        <Card key={item.i}>
                            <CardBody>
                                <CardTitle>{item.title}</CardTitle>
                                <CardText><Markdown>{item.text}</Markdown></CardText>
                            </CardBody>
                        </Card>
                    </Link></li>
            )
        });
        return (
            <div className="notelist">
                <ul onDragOver={this.dragOver.bind(this)}>
                    {listItems}
                </ul>
                <h6><CSVLink className="download-link" seperator="," data={this.props.notes} target="_blank">Download</CSVLink></h6>
            </div>
        )
    }
}