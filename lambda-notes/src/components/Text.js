import React,{Component} from 'react';
import Card from './Card';

class Text extends Component{
    render(){
        return(
            <div className="notes">
                {this.props.notes.map(note=>{
                    return(
                        <Card
                            title={note.title}
                            textBody={note.textBody}
                            key={note.id}
                            note={note}
                            id={note.id}/>
                    )
                })}
            </div>
        )
    }
}
export default Text;