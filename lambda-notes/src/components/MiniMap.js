import React from 'react';
import styled from 'styled-components';

const MinMap = styled.div`
  width: 25%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 105px;
  max-width: 105px;
  justify-items: center;
  margin-bottom: 10px;
  padding: 15px;
  box-shadow: 1px 1px 1px 1px ${props => props.color ? props.color : 'gray'};
  border-radius: 50%;
  position: relative;

`
MinMap.defaultProps = {color: 'gray'}

class NoteDot extends React.Component {
    state = {
        lit: false,
        color: '',
        dot: this.props.dot,
        bgColor: 'green',
        loaded: false,
        notes: []

    }

    highlight = (e) => {

        this.props.selectDot(this.props.dot)
        
        let dotArr = document.querySelectorAll('.circle');
        let dotArr2 = Array.from(dotArr)
        
         if(e.target.classList.contains('lit')){
            dotArr2.forEach(item => item.classList.remove('lit'));
            return;
        } 
        dotArr2.forEach(item => item.classList.remove('lit'));
        e.target.classList.add('lit');
        this.setState({dot: this.props.dot})
        
        /* this.setState({lit: !this.state.lit});
         */
    }

    load = () => {
        if(this.props.submitted){
            this.setState({loaded: !this.state.loaded})
            return;
        } 
        
    }

    saveBG = () => {
        this.setState({color: this.props.bgColor})
    }
    
    static getDerivedStateFromProp(props, state){
        console.log("getDerivedStates Props:" , props.dot,"State:", state.dot)
    }
    componentDidUpdate(props){
        if(props.dot.dotID === props.selectedDot.dotID){
            console.log('DOTcdu:',this.state.dot.dotID, props)
        }
        
    }

    render(){

    
        return (
         <div className={`circle ${this.props.number}`} 
              onClick={this.highlight}
              style={this.state.dot.loaded ? {backgroundColor: this.state.bgColor} : null}></div>
        )
    }
}



export default class MiniMap extends React.Component {
    state = {
        changeTopic: false,
        subtopics: this.props.subtopics,
        color: ''
    }

    changeTopic = () => {
        this.setState({changeTopic: !this.state.changeTopic})
    }

    selectTopic = (color) => () => {
        this.setState({color: color, changeTopic: false});

    }
    /* static getDerivedStateFromProp(props, state){
         console.log("getDerivedStatesMINIMAP Props:" , props.dots,"State:", state.dots)
    } */

    componentDidUpdate(props){
        if(this.props.miniMap.id === this.props.selectedMap.id){
            console.log('MINMAP',this.props.miniMap.id, props)
        }
        
    }
    
    render(){
        
        return (
            <MinMap color={this.state.color} onClick={this.props.selectMap}>
                {this.props.dots.map((dot, index)=> (
                    <NoteDot newNote={this.props.newNote}
                             number={dot.number}
                             submitted={this.props.submitted} 
                             dot={dot} 
                             color={this.state.color}
                             selectedDot={this.props.selectedDot} 
                             selectDot={this.props.selectDot}
                             key={dot.dotID} />
                ))}
                
                
                <div onClick={this.changeTopic} className={`minimap-click1`}></div>
                <div onClick={this.changeTopic} className={`minimap-click2`}></div>
                <div onClick={this.changeTopic} className={`minimap-click3`}></div>
                <div className={`st-menu ${this.state.changeTopic && this.props.subtopics.length > 0 ? '': 'hidden'}`}>
                    {this.state.subtopics ? this.props.subtopics.map(topic => (
                        <div className="topic-tab" onClick={this.selectTopic(topic.color)} >
                                        
                        {topic.subtopic} 
                        <div style={{backgroundColor: topic.color}} 
                             className='swab'>
                        </div>
                    
                        </div>
                    )) : null}
                </div>
            </MinMap>
        )
    }
}

MiniMap.defaultProps = { subtopics: []}

