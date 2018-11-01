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
        dot: {...this.props.dot, bgColor: this.props.color},
        bgColor: 'green'
    }

    highlight = () => {

        this.setState({lit: !this.state.lit});
        this.props.selectDot(this.state.dot.dotID)
    }

    saveBG = () => {
        this.setState({color: this.props.bgColor})
    }

    render(){
        return (
         <div className={`circle ${this.props.number} ${this.state.lit ? 'lit' : ''}`} 
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
    

    
    render(){
        console.log(this.props.subtopics)
        return (
            <MinMap color={this.state.color}>
                {this.props.dots.map(dot => (
                    <NoteDot number={dot.number} dot={dot} color={this.state.color} selectDot={this.props.selectDot} />
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

