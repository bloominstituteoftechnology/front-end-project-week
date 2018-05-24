import React from 'react';
import { CSVLink } from 'react-csv';
import { ListComponent } from './ListComponent'

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
        this.setState({
            notes: this.props.notes
        })
    }
    componentWillReceiveProps = (newProps) => {
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
        console.log(e.target)
        e.target.parentNode.insertBefore(placeholder, e.target);
    }
    render() {
        var listItems = this.state.notes.map((item, i) => {
            return (
                <ListComponent onDragEnd={this.dragEnd.bind(this)} onDragStart={this.dragStart.bind(this)} index={i} key={i} item={item} />
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