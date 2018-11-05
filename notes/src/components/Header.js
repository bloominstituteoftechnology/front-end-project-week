import React, { useState } from 'react';

import { SVGIcon, ActionContainer, Actions, StyledHeader, HamburgerContainer, SearchInput, Search, MenuLogoContainer } from '../styles';

const Header = ({searchHandler, refreshList, sortMode, setSortMode, menuToggle}) => {
    const [search, setSearch] = useState('');

    return (
        <StyledHeader>
            <MenuLogoContainer>
                <HamburgerContainer onClick={e => menuToggle()}>
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
                        value={search}
                        name="searchValue"
                        onChange={e => {
                            setSearch(e.target.value);
                            searchHandler(e.target.value);
                        }}
                    />
                    {
                        !search.length ? null
                        : (<svg onClick={() => {
                                setSearch('');
                                searchHandler('');
                            }
                        } focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>)
                    }
                </Search>
                <Actions>
                    <SVGIcon refresh onClick={e => refreshList()}/>
                    <SVGIcon sortView={sortMode} onClick={e => setSortMode()} />
                </Actions>
            </ActionContainer>
        </StyledHeader>
    );
}

export default Header;
