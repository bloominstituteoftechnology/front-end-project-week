import React from 'react';
import { CSVLink } from 'react-csv';
import { ListComponent } from './ListComponent'
import Button from './Button'

var placeholder = document.createElement("li");
placeholder.className = "placeholder";

export default class NoteList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            search: ''
        };
    }
    componentDidMount = () => {
        this.setState({
            notes: this.props.notes
        })
    }
    sort = () => {
        let newState = [...this.state.notes]
        newState = newState.reverse()
        console.log(newState)
        this.setState({
            notes: newState,
            search: ''
        })
    }
    searchNow = () => {
        console.log("fire", this.state.search)
        let newState = [...this.state.notes]
        newState = newState.filter(e => e.title.includes(this.state.search) || e.text.includes(this.state.search))
        console.log(newState)
        this.setState({
            notes: newState,
            search: ''
        })
    }
    onChange = (event) => {
        let newState = [...this.props.notes]
        newState = newState.filter(e => e.title.includes(this.state.search) || e.text.includes(this.state.search))
        console.log(newState)
        this.setState({
            notes: newState,
            search: event.target.value
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
                <div className="search-field"><div><input onChange={this.onChange} id="searchbox" value={this.state.search} type="text" placeholder="Search" /><Button text="search!" class="search-button" function={this.searchNow} /></div><Button class="sort-button" text="Sort Ascending or Descending" function={this.sort} /></div>
                <ul onDragOver={this.dragOver.bind(this)}>
                    {listItems}
                </ul>
                <h6><CSVLink className="download-link" seperator="," data={this.props.notes} target="_blank">Download</CSVLink></h6>
            </div>
        )
    }
}