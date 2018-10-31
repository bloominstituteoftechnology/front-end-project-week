import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Header = ({searchHandler, refreshList, sortMode, setSortMode, menuToggle}) => {
    const [search, setSearch] = useState('');

    return (
        <StyledHeader>
            <MenuLogoContainer>
                <div className="hamburger" onClick={e => menuToggle()}>
                    <svg 
                        focusable="false"
                        viewBox="0 0 24 24"
                        fill="#767676"
                    >
                        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                    </svg>
                </div>
                <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" alt="logo" />
                <span className="keep-name">Keep</span>
            </MenuLogoContainer>
            <ActionContainer>
                <Search>
                    <svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                    <input 
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
                    <Action refresh onClick={e => refreshList()}/>
                    <Action sortView={sortMode} onClick={e => setSortMode()} />
                </Actions>
            </ActionContainer>
        </StyledHeader>
    );
}

export default Header;


const Search = styled.div`
    background-color: #F5F5F5;
    width: 100%;
    height: 48px;
    border-radius: 8px;
    margin-right: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border: none;
    svg {
        opacity: .54;
        :hover {opacity: 1};
        margin: 11px 15px;
    }
    input {
        position: absolute;
        left: 64px;
        height: 48px;
        line-height: 48px;
        border: none;
        background-color: transparent;
        outline: none;
        font: normal 16px Roboto,sans-serif;
        width: 60%;

    }
    :focus-within  {
        border: 1px solid rgba(0, 0, 0, 0.12);
        box-shadow: 0 1px 1px rgba(0,0,0,0.24);
        background: white;
    }
`;

const StyledHeader = styled.div`
    width: 100vw;
    height: 64px;
    padding: 8px;
    font-family: 'Roboto';
    display: flex;
    flex-direction: 'row';
    justify-content: 'flex-start';
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    background: white;
    background-color: white;
    border: none;
    border-bottom: 1px solid rgb(218, 220, 224);
`;

const MenuLogoContainer = styled.div`
    height: 48px;
    width: 210px;
    margin-right: 32px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    line-height: 27px;
    .hamburger {
        height: 48px;
        width: 48px;
        padding: 12px;
        margin: 0 4px;
        color: #767676;
        position: relative;
        cursor: pointer;
        svg {
            height: 24px;
            width: 24px;
        }
    }
    img {
        position: relative;
        top: 2px;
    }

    .keep-name {
        font-size: 22px;
        line-height: 24px;
        font-weight: 600;
        padding-left: 8px;
        color: #767676;
        position: relative;
    }
    @media (max-width: 890px) {
        width: 130px;
        img {display: none};
        .keep-name {display: none};
    }
    @media (max-width: 760px) {
        width: 100px;
        img {display: none};
        .keep-name {display: none};
    }
    @media (max-width: 690px) {
        width: 60px;
        img {display: none};
        .keep-name {display: none};
    }
    @media (max-width: 510px) {
        width: 30px;
        img {display: none};
        .keep-name {display: none};
    }
`;

const ActionContainer = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
`;

const Actions = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    right: 16px;
    top: 0;
`;

const Action = styled.div`
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
    background-position: 50%;
    opacity: .54;
    background-position: center;
    background-repeat: no-repeat;
    padding: 24px;
    cursor: pointer;
    :hover {
        opacity: 1;
    }
    ${props => props.refresh && css`
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBkPSJNMTMgOXYyaDdWNGgtMnYyLjc0QzE2LjUzIDUuMDcgMTQuNCA0IDEyIDRjLTIuMjEgMC00LjIxLjktNS42NiAyLjM0UzQgOS43OSA0IDEyYzAgNC40MiAzLjU4IDggOCA4IDIuMjEgMCA0LjIxLS45IDUuNjYtMi4zNGwtMS40Mi0xLjQyQTUuOTggNS45OCAwIDAgMSAxMiAxOGMtMy4zMSAwLTYtMi42OS02LTYgMC0xLjY1LjY3LTMuMTUgMS43Ni00LjI0QTUuOTggNS45OCAwIDAgMSAxMiA2YTYuMDEgNi4wMSAwIDAgMSA1LjE5IDNIMTN6Ii8+Cjwvc3ZnPgo=);
    `}
    ${props => props.settings && css`
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBkPSJNMTMuODUgMjIuMjVoLTMuN2MtLjc0IDAtMS4zNi0uNTQtMS40NS0xLjI3bC0uMjctMS44OWMtLjI3LS4xNC0uNTMtLjI5LS43OS0uNDZsLTEuOC43MmMtLjcuMjYtMS40Ny0uMDMtMS44MS0uNjVMMi4yIDE1LjUzYy0uMzUtLjY2LS4yLTEuNDQuMzYtMS44OGwxLjUzLTEuMTljLS4wMS0uMTUtLjAyLS4zLS4wMi0uNDYgMC0uMTUuMDEtLjMxLjAyLS40NmwtMS41Mi0xLjE5Yy0uNTktLjQ1LS43NC0xLjI2LS4zNy0xLjg4bDEuODUtMy4xOWMuMzQtLjYyIDEuMTEtLjkgMS43OS0uNjNsMS44MS43M2MuMjYtLjE3LjUyLS4zMi43OC0uNDZsLjI3LTEuOTFjLjA5LS43LjcxLTEuMjUgMS40NC0xLjI1aDMuN2MuNzQgMCAxLjM2LjU0IDEuNDUgMS4yN2wuMjcgMS44OWMuMjcuMTQuNTMuMjkuNzkuNDZsMS44LS43MmMuNzEtLjI2IDEuNDguMDMgMS44Mi42NWwxLjg0IDMuMThjLjM2LjY2LjIgMS40NC0uMzYgMS44OGwtMS41MiAxLjE5Yy4wMS4xNS4wMi4zLjAyLjQ2cy0uMDEuMzEtLjAyLjQ2bDEuNTIgMS4xOWMuNTYuNDUuNzIgMS4yMy4zNyAxLjg2bC0xLjg2IDMuMjJjLS4zNC42Mi0xLjExLjktMS44LjYzbC0xLjgtLjcyYy0uMjYuMTctLjUyLjMyLS43OC40NmwtLjI3IDEuOTFjLS4xLjY4LS43MiAxLjIyLTEuNDYgMS4yMnptLTMuMjMtMmgyLjc2bC4zNy0yLjU1LjUzLS4yMmMuNDQtLjE4Ljg4LS40NCAxLjM0LS43OGwuNDUtLjM0IDIuMzguOTYgMS4zOC0yLjQtMi4wMy0xLjU4LjA3LS41NmMuMDMtLjI2LjA2LS41MS4wNi0uNzhzLS4wMy0uNTMtLjA2LS43OGwtLjA3LS41NiAyLjAzLTEuNTgtMS4zOS0yLjQtMi4zOS45Ni0uNDUtLjM1Yy0uNDItLjMyLS44Ny0uNTgtMS4zMy0uNzdsLS41Mi0uMjItLjM3LTIuNTVoLTIuNzZsLS4zNyAyLjU1LS41My4yMWMtLjQ0LjE5LS44OC40NC0xLjM0Ljc5bC0uNDUuMzMtMi4zOC0uOTUtMS4zOSAyLjM5IDIuMDMgMS41OC0uMDcuNTZhNyA3IDAgMCAwLS4wNi43OWMwIC4yNi4wMi41My4wNi43OGwuMDcuNTYtMi4wMyAxLjU4IDEuMzggMi40IDIuMzktLjk2LjQ1LjM1Yy40My4zMy44Ni41OCAxLjMzLjc3bC41My4yMi4zOCAyLjU1eiIvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMuNSIvPgo8L3N2Zz4K);
    `}
    ${props => props.sortView === 'default' && css`
        background-size: 18px 24px;
        background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTExLjYyNyA1MTEuNjI3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTEuNjI3IDUxMS42Mjc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzMzLjU4NCw0MzguNTM2aC03My4wODdjLTIuNjY2LDAtNC44NTMsMC44NTUtNi41NjcsMi41NzNjLTEuNzA5LDEuNzExLTIuNTY4LDMuOTAxLTIuNTY4LDYuNTY0djU0LjgxNSAgICBjMCwyLjY3MywwLjg1NSw0Ljg1MywyLjU2OCw2LjU3MWMxLjcxNSwxLjcxMSwzLjkwMSwyLjU2Niw2LjU2NywyLjU2Nmg3My4wODdjMi42NjYsMCw0Ljg1Ni0wLjg1NSw2LjU2My0yLjU2NiAgICBjMS43MTgtMS43MTksMi41NjMtMy44OTgsMi41NjMtNi41NzF2LTU0LjgxNWMwLTIuNjYzLTAuODQ2LTQuODU0LTIuNTYzLTYuNTY0QzMzOC40NCw0MzkuMzkyLDMzNi4yNSw0MzguNTM2LDMzMy41ODQsNDM4LjUzNnoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNMTk2LjU0LDQwMS45OTFoLTU0LjgxN1Y5LjEzNmMwLTIuNjYzLTAuODU0LTQuODU2LTIuNTY4LTYuNTY3QzEzNy40NDEsMC44NTksMTM1LjI1NCwwLDEzMi41ODcsMEg3Ny43NjkgICAgYy0yLjY2MywwLTQuODU2LDAuODU1LTYuNTY3LDIuNTY4Yy0xLjcwOSwxLjcxNS0yLjU2OCwzLjkwNS0yLjU2OCw2LjU2N3YzOTIuODU1SDEzLjgxNmMtNC4xODQsMC03LjA0LDEuOTAyLTguNTY0LDUuNzA4ICAgIGMtMS41MjUsMy42MjEtMC44NTUsNi45NSwxLjk5Nyw5Ljk5Nmw5MS4zNjEsOTEuMzY1YzIuMDk0LDEuNzA3LDQuMjgxLDIuNTYyLDYuNTY3LDIuNTYyYzIuNDc0LDAsNC42NjUtMC44NTUsNi41NjctMi41NjIgICAgbDkxLjA3Ni05MS4wNzhjMS45MDYtMi4yNzksMi44NTYtNC41NzEsMi44NTYtNi44NDRjMC0yLjY3Ni0wLjg1OS00Ljg1OS0yLjU2OC02LjU4NCAgICBDMjAxLjM5NSw0MDIuODQ3LDE5OS4yMDgsNDAxLjk5MSwxOTYuNTQsNDAxLjk5MXoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNMzg4LjQsMjkyLjM2MkgyNjAuNDk0Yy0yLjY2NiwwLTQuODUzLDAuODU1LTYuNTY3LDIuNTY2Yy0xLjcxLDEuNzExLTIuNTY4LDMuOTAxLTIuNTY4LDYuNTYzdjU0LjgyMyAgICBjMCwyLjY2MiwwLjg1NSw0Ljg1MywyLjU2OCw2LjU2M2MxLjcxNCwxLjcxMSwzLjkwMSwyLjU2Niw2LjU2NywyLjU2NkgzODguNGMyLjY2NiwwLDQuODU1LTAuODU1LDYuNTYzLTIuNTY2ICAgIGMxLjcxNS0xLjcxMSwyLjU3My0zLjkwMSwyLjU3My02LjU2M3YtNTQuODIzYzAtMi42NjItMC44NTgtNC44NTMtMi41NzMtNi41NjNDMzkzLjI1NiwyOTMuMjE4LDM5MS4wNjYsMjkyLjM2MiwzODguNCwyOTIuMzYyeiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik01MDQuNjA0LDIuNTY4QzUwMi44ODksMC44NTksNTAwLjcwMiwwLDQ5OC4wMzYsMEgyNjAuNDk3Yy0yLjY2NiwwLTQuODUzLDAuODU1LTYuNTY3LDIuNTY4ICAgIGMtMS43MDksMS43MTUtMi41NjgsMy45MDUtMi41NjgsNi41Njd2NTQuODE4YzAsMi42NjYsMC44NTUsNC44NTMsMi41NjgsNi41NjdjMS43MTUsMS43MDksMy45MDEsMi41NjgsNi41NjcsMi41NjhoMjM3LjUzOSAgICBjMi42NjYsMCw0Ljg1My0wLjg1NSw2LjU2Ny0yLjU2OGMxLjcxMS0xLjcxNCwyLjU2Ni0zLjkwMSwyLjU2Ni02LjU2N1Y5LjEzNkM1MDcuMTczLDYuNDczLDUwNi4zMTQsNC4yNzksNTA0LjYwNCwyLjU2OHoiIGZpbGw9IiMwMDAwMDAiLz4KCQk8cGF0aCBkPSJNNDQzLjIyLDE0Ni4xODFIMjYwLjQ5NGMtMi42NjYsMC00Ljg1MywwLjg1NS02LjU2NywyLjU3Yy0xLjcxLDEuNzEzLTIuNTY4LDMuOS0yLjU2OCw2LjU2N3Y1NC44MTYgICAgYzAsMi42NjcsMC44NTUsNC44NTQsMi41NjgsNi41NjdjMS43MTQsMS43MTEsMy45MDEsMi41Nyw2LjU2NywyLjU3SDQ0My4yMmMyLjY2MywwLDQuODUzLTAuODU1LDYuNTctMi41NyAgICBjMS43MDgtMS43MTMsMi41NjMtMy45LDIuNTYzLTYuNTY3di01NC44MTZjMC0yLjY2Ny0wLjg1NS00Ljg1OC0yLjU2My02LjU2N0M0NDguMDY5LDE0Ny4wNCw0NDUuODc5LDE0Ni4xODEsNDQzLjIyLDE0Ni4xODF6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
    `}
    ${props => props.sortView === 'alpha' && css`
        background-size: 18px 24px;
        background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDk3LjY4IDk3LjY4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5Ny42OCA5Ny42ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00Mi43Miw2NS41OTZoLTguMDExVjJjMC0xLjEwNS0wLjg5Ni0yLTItMmgtMTYuMTNjLTEuMTA0LDAtMiwwLjg5NS0yLDJ2NjMuNTk2SDYuNTY4Yy0wLjc3LDAtMS40NzIsMC40NDMtMS44MDQsMS4xMzcgICAgQzQuNDMyLDY3LjQyOCw0LjUyOCw2OC4yNSw1LjAxLDY4Ljg1bDE4LjA3NiwyNi45NTVjMC4zOCwwLjQ3MywwLjk1MywwLjc0NiwxLjU1OCwwLjc0NnMxLjE3OC0wLjI3MywxLjU1OC0wLjc0Nkw0NC4yNzgsNjguODUgICAgYzAuNDgyLTAuNiwwLjU3OC0xLjQyMiwwLjI0Ni0yLjExN0M0NC4xOTIsNjYuMDM5LDQzLjQ5LDY1LjU5Niw0Mi43Miw2NS41OTZ6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTkyLjk5OCwzOS4zMTVMNzkuNjY4LDEuNTQxYy0wLjI4Mi0wLjc5OS0xLjAzOC0xLjMzNC0xLjg4Ni0xLjMzNGgtMy44NjFjLTAuMTA2LDAtMC4yMTMsMC4wMDgtMC4zMTcsMC4wMjUgICAgYy0wLjEwNC0wLjAxOC0wLjIxLTAuMDI1LTAuMzE4LTAuMDI1aC0zLjc2Yy0wLjg1LDAtMS42MDUsMC41MzUtMS44ODgsMS4zMzZMNTQuMzYyLDM5LjMxN2MtMC4yMTUsMC42MTEtMC4xMiwxLjI4OSwwLjI1NSwxLjgxOCAgICBjMC4zNzUsMC41MjksMC45ODIsMC44NDQsMS42MzIsMC44NDRoNS43NzRjMC44OCwwLDEuNjU2LTAuNTc0LDEuOTEzLTEuNDE2bDIuNTM1LTguMzI0SDgwLjg5bDIuNTM2LDguMzI0ICAgIGMwLjI1NiwwLjg0MiwxLjAzMywxLjQxNiwxLjkxMywxLjQxNmg1Ljc3MWMwLjY0OCwwLDEuMjU4LTAuMzE0LDEuNjMzLTAuODQ0QzkzLjExOSw0MC42MDQsOTMuMjEzLDM5LjkyNiw5Mi45OTgsMzkuMzE1eiAgICAgTTY4Ljg2NCwyNC4yODNjMi4zOTctNy43Nyw0LjAyLTEzLjE2Niw0LjgyLTE2LjA0MWw0LjkyOCwxNi4wNDFINjguODY0eiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik04Ny4yNTUsODkuODM4SDY5LjQzOGwxOC45MjgtMjcuMjA1YzAuMjMyLTAuMzM2LDAuMzU3LTAuNzM0LDAuMzU3LTEuMTQzdi0zLjQxNmMwLTEuMTA0LTAuODk2LTItMi0yaC0yNi4wNyAgICBjLTEuMTA0LDAtMiwwLjg5Ni0yLDJ2My44NDRjMCwxLjEwNSwwLjg5NiwyLDIsMmgxNi43ODJMNTguNDgxLDkxLjA5NGMtMC4yMzQsMC4zMzYtMC4zNTksMC43MzQtMC4zNTksMS4xNDV2My40NDEgICAgYzAsMS4xMDUsMC44OTYsMiwyLDJoMjcuMTM1YzEuMTA0LDAsMi0wLjg5NSwyLTJ2LTMuODQyQzg5LjI1NSw5MC43MzIsODguMzYxLDg5LjgzOCw4Ny4yNTUsODkuODM4eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=)
    `}
    ${props => props.sortView === 'reverse-alpha' && css`
        background-size: 18px 24px;
        background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDk3Ljc2MSA5Ny43NjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDk3Ljc2MSA5Ny43NjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDIuNzYxLDY1LjU5NkgzNC43NVYyYzAtMS4xMDUtMC44OTYtMi0yLTJIMTYuNjJjLTEuMTA0LDAtMiwwLjg5NS0yLDJ2NjMuNTk2SDYuNjA5Yy0wLjc3LDAtMS40NzIsMC40NDMtMS44MDQsMS4xMzcgICAgYy0wLjMzMywwLjY5NS0wLjIzNywxLjUxOSwwLjI0NiwyLjExN2wxOC4wNzYsMjYuOTU1YzAuMzgsMC40NzMsMC45NTMsMC43NDYsMS41NTgsMC43NDZzMS4xNzgtMC4yNzMsMS41NTgtMC43NDZMNDQuMzE5LDY4Ljg1ICAgIGMwLjQ4Mi0wLjYsMC41NzgtMS40MjIsMC4yNDYtMi4xMTdDNDQuMjMzLDY2LjAzOSw0My41MzEsNjUuNTk2LDQyLjc2MSw2NS41OTZ6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTkzLjA0LDk1LjA5OEw3OS43MSw1Ny4zMjRjLTAuMjgyLTAuNzk5LTEuMDM4LTEuMzM0LTEuODg3LTEuMzM0aC0zLjg2Yy0wLjEwNywwLTAuMjEzLDAuMDA4LTAuMzE4LDAuMDI0ICAgIGMtMC4xMDQtMC4wMTgtMC4yMS0wLjAyNC0wLjMxOC0wLjAyNGgtMy43NmMtMC44NDksMC0xLjYwNCwwLjUzNS0xLjg4NywxLjMzNkw1NC40MDMsOTUuMWMtMC4yMTUsMC42MTEtMC4xMiwxLjI4OSwwLjI1NSwxLjgxOCAgICBzMC45ODMsMC44NDQsMS42MzMsMC44NDRoNS43NzNjMC44OCwwLDEuNjU3LTAuNTc0LDEuOTEzLTEuNDE2bDIuNTM2LTguMzI0aDE0LjQxOWwyLjUzNiw4LjMyNCAgICBjMC4yNTYsMC44NDIsMS4wMzMsMS40MTYsMS45MTMsMS40MTZoNS43NzFjMC42NDksMCwxLjI1OC0wLjMxNCwxLjYzMy0wLjg0NEM5My4xNiw5Ni4zODcsOTMuMjU1LDk1LjcwOSw5My4wNCw5NS4wOTh6ICAgICBNNjguOTA1LDgwLjA2NmMyLjM5OC03Ljc3LDQuMDIxLTEzLjE2Niw0LjgyLTE2LjA0MWw0LjkyOCwxNi4wNDFINjguOTA1eiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik04Ny4yOTcsMzQuMDUzSDY5LjQ3OUw4OC40MDcsNi44NDhjMC4yMzMtMC4zMzYsMC4zNTgtMC43MzQsMC4zNTgtMS4xNDNWMi4yODljMC0xLjEwNC0wLjg5Ni0yLTItMkg2MC42OTQgICAgYy0xLjEwNCwwLTIsMC44OTYtMiwydjMuODQ0YzAsMS4xMDUsMC44OTYsMiwyLDJoMTYuNzgyTDU4LjUyMiwzNS4zMDljLTAuMjMzLDAuMzM2LTAuMzU4LDAuNzM0LTAuMzU4LDEuMTQ2djMuNDQxICAgIGMwLDEuMTA1LDAuODk2LDIsMiwyaDI3LjEzNWMxLjEwNCwwLDItMC44OTUsMi0ydi0zLjg0MkM4OS4yOTcsMzQuOTQ3LDg4LjQwMiwzNC4wNTMsODcuMjk3LDM0LjA1M3oiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
    `}
`;
