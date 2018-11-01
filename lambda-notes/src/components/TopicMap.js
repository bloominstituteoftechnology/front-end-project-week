import React from 'react';
import MiniMap from './MiniMap';

export default class TopicMap extends React.Component {
    state = {
        title: 'Title',
        notes: [],
        newNote: {'title': '', 'textBody': '', 'tags': []},
        topicNotes: [{'title': 'spaggle', 'textBody': '', 'tags': []}],
        subtopics: [],
        newSubtopic: ''

    }

    inputHandler = (e) => {
        e.target.name === 'title-input' ?
        this.setState({title: e.target.value}) :
        this.setState({newNote: {...this.state.newNote, [e.target.name]: e.target.value}})
      }

    saveNote = () => {
        let newNote = {...this.state.newNote, id: Date.now()}
        
        this.setState({topicNotes: [...this.state.topicNotes, newNote], newNote: {'title': '', 'textBody': '', 'tags': []} });  
        
    }
    
    

    stInputHandler = (e) => {
        this.setState({newSubtopic: e.target.value})
    }

    addSubTopic = () => {
        let subtopic = this.state.newSubtopic.split('-');
        if(!subtopic[1]){
            alert('Must append topic with a hyphen followed by a color. \n Ex: middleware-green');
        }
        else {
        this.setState({subtopics: [...this.state.subtopics, {subtopic: subtopic[0], 
                                                             color: subtopic[1]}
                                    ],
                       newSubtopic: ''
                                                            });
    }
    }


    render(){
        return (
            <div className="topic-page">
                
                <input name="title-input" 
                       type="text" 
                       id="title-input" 
                       value={this.state.title}
                       onChange={this.inputHandler} />

                <div className="note-map">
                <MiniMap subtopics={this.state.subtopics}/>
                <MiniMap subtopics={this.state.subtopics}/>
                <MiniMap subtopics={this.state.subtopics}/>
                <MiniMap subtopics={this.state.subtopics}/>
                <MiniMap subtopics={this.state.subtopics}/>
                <MiniMap subtopics={this.state.subtopics}/>
                <MiniMap subtopics={this.state.subtopics}/>
                </div>
                <div className="subtopic-area">
                    <table>
                        <tr>
                            <td>
                                <span className="td-txt">SUBTOPICS</span>
                                <div className="add-btn" onClick={this.addSubTopic}>ADD</div>
                            </td>
                            <td className='st-data'>
                                <div className='tab-holder'>
                                {this.state.subtopics.map(topic => 
                                    (<div className="topic-tab">
                                        
                                        {topic.subtopic} 
                                        <div style={{backgroundColor: topic.color}} 
                                             className='swab'>
                                        </div>
                                    
                                    </div>)
                                )}
                                </div>
                                <div className='subtopics-list'>
                                    <textarea id="subtopicTA" 
                                              rows="1" 
                                              value={this.state.newSubtopic}
                                              onChange={this.stInputHandler}>
                                    </textarea>
                                    
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <input name="title" 
                       type="text" 
                       id="title-input" 
                       value={this.state.newNote.title}
                       onChange={this.inputHandler} />
                <textarea name="textBody" 
                          id="textarea2"
                          onChange={this.inputHandler}
                          value={this.state.newNote.textBody}
                          placeholder="New note..."> </textarea>
                
                <div className='button' 
                     onClick={this.saveNote}>Save</div>
            
            </div>
        )
    }
}