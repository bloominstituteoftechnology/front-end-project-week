import React from 'react';
import styled from 'styled-components';

const SettingsFormContainer = styled.div`
    padding: 40px;
    color: #414141;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    h2 {
        width: 100%;
    }

    .test {
        color: red;
    }
`

class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            themeColor: '#24b8bd',
        }
    }

    handleChange = event => {
        document.querySelector('.test').style.color = this.state.themeColor
		this.setState({
			themeColor: event.target.value,
        });
        console.log('themeColor :', this.state.themeColor)
        
        
	};

    render() {
        console.log('Settings props :', this.props)
        return (
            <SettingsFormContainer>
                <h2>User Settings</h2>
                <form>
                    <label for="themeColor">Choose your theme color</label>
                    <input type="color" name="themeColor" value={this.state.themeColor} onChange={this.handleChange}/>
                    
                <h2 classNameName="test"> Test header </h2>
                </form>

            </SettingsFormContainer>
        )
    }


}

export default Settings;