import React, { Component } from 'react';

import { 
    SVGIcon, 
    ActionContainer, 
    Actions, 
    StyledHeader, 
    HamburgerContainer, 
    SearchInput, 
    Search, 
    MenuLogoContainer,
    Settings,
    SettingsRow
} from '../../styles';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            showSettings: false,
        }
    }

    logout = (e) => {
        e.preventDefault();
        this.props.logout();
        this.setState({showSettings: false});
        this.props.history.push('/login')
    }
    
    render() {
        return (
            <StyledHeader>
                <MenuLogoContainer>
                    <HamburgerContainer onClick={e => this.props.menuToggle()}>
                        <SVGIcon hamburger="true" />
                    </HamburgerContainer>
                    <img src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="logo" />
                    <span className="keep-name">Keep</span>
                </MenuLogoContainer>
                <ActionContainer>
                    <Search>
                        <SVGIcon search="true" />
                        <SearchInput
                            type="text" 
                            placeholder="Search"
                            value={this.state.search}
                            name="searchValue"
                            onChange={e => {
                                this.setState({search: e.target.value});
                                this.props.searchHandler(e.target.value);
                            }}
                        />
                        {
                            !this.state.search.length ? null
                            : (<svg onClick={() => {
                                    this.setState({search: ''});
                                    this.props.searchHandler('');
                                }
                            } focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>)
                        }
                    </Search>
                    <Actions>
                        <SVGIcon refresh onClick={e => this.props.getNotes()}/>
                        <SVGIcon sortView={this.props.sortMode} onClick={e => this.props.setSortMode()} />
                        <SVGIcon settings onClick={() => this.setState({showSettings: !this.state.showSettings})}/>
                        <Settings showSettings={this.state.showSettings}>
                            <SettingsRow onClick={(e) => this.logout(e)}>
                                <SVGIcon logout/>
                                <span>Logout</span>
                            </SettingsRow>
                        </Settings>
                    </Actions>
                </ActionContainer>
            </StyledHeader>
        );
    }
}

export default Header;

