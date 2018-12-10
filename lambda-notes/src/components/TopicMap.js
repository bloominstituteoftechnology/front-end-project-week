import React from 'react';
import MiniMap from './MiniMap';

const dotsArr = [{number: 'one', dotID: Math.floor(Math.random() * 1000000), bgColor: '', lit: false, loaded: false},
              {number: 'two', dotID: Math.floor(Math.random() * 1000000), bgColor: '', lit: false, loaded: false},
              {number: 'three', dotID: Math.floor(Math.random() * 1000000), bgColor: '', lit: false, loaded: false},
              {number: 'four', dotID: Math.floor(Math.random() * 1000000), bgColor: '', lit: false, loaded: false},
              {number: 'five', dotID: Math.floor(Math.random() * 1000000), bgColor: '', lit: false, loaded: false}
            ]

export default class TopicMap extends React.Component {
    state = {
        title: 'Title',
        notes: [],
        newNote: {'title': '', 'textBody': '', 'tags': []},
        topicNotes: [{'title': 'spaggle', 'textBody': '', 'tags': []}],
        subtopics: [],
        newSubtopic: '',
        miniMaps: [{
            id: Date.now(),
            bgColor: '',
            subtopics: [],
            dots: dotsArr
            
        }],
        selectedDot: {},
        submitting: true,
        selectedMap: {}
    }
    selectDot = (dot) => {
                                      
        
        
        this.setState({selectedDot: dot})
        console.log(this)
        
        
       
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
    addMiniMap = () => {
        this.setState({miniMaps: [...this.state.miniMaps, {
            id: Date.now(),
            bgColor: '',
            subtopics: [],
            dots: [{number: 'one', dotID: Math.floor(Math.random() * 1000000), bgColor: '', lit: false, loaded: false},
            {number: 'two', dotID: Math.floor(Math.random() * 1000000), bgColor: '', lit: false, loaded: false},
            {number: 'three', dotID: Math.floor(Math.random() * 1000000), bgColor: '', lit: false, loaded: false},
            {number: 'four', dotID: Math.floor(Math.random() * 1000000), bgColor: '', lit: false, loaded: false},
            {number: 'five', dotID: Math.floor(Math.random() * 1000000), bgColor: '', lit: false, loaded: false}
          ]
            
        }]})
    }

    selectMap = (selectedMap) => {
        this.setState({selectedMap})
    }

    saveToDot = () => {
        let {title, textBody} = this.state.newNote;
        let updatedDot = {...this.state.selectedDot, title, textBody}
        let newMapDots = this.state.selectedMap.dots.map(dot => {
            if(dot.dotID === this.state.selectedDot.dotID){
                let dotMod = {...dot, title, textBody};
                return dotMod
            }
            return dot
        });
        let newMap = {...this.state.selectedMap, dots: newMapDots}
        let newMiniMaps = this.state.miniMaps.map(map => {
            if(map.id === newMap.id){
                return newMap
            }
            return map
        })

        this.setState({
            selectedDot: updatedDot,
            selectedMap: newMap,
            miniMaps: newMiniMaps,
            newNote: {'title': '', 'textBody': '', 'tags': []}
        })
    }

    static getDerivedStateFromProp(props, state){
        console.log("getDerivedStatesTOPICMAP State:", state.selectedDot)
    }

    /* componentDidUpdate(props){
        console.log('cdu', props)
    } */

    componentDidMount(){
        this.setState({selectedMap: this.state.miniMaps[0]})
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
                {this.state.miniMaps.map(miniMap => <MiniMap miniMap={miniMap} 
                                                             subtopics={this.state.subtopics} 
                                                             selectDot={this.selectDot}
                                                             dots={miniMap.dots}
                                                             newNote={this.state.newNote}
                                                             submitted={this.state.submitting}
                                                             selectMap={()=> this.selectMap(miniMap)}
                                                             selectedDot={this.state.selectedDot}
                                                             selectedMap={this.state.selectedMap}
                                                             key={miniMap.id}/>)
                }
                
                </div>
                <div className='button' onClick={this.addMiniMap}>+Add MiniMap</div>
                <div className="subtopic-area">
                    <table>
                        <tbody>
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
                        </tbody>
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
                     onClick={this.saveToDot}>Save</div>
            
            </div>
        )
    }
}