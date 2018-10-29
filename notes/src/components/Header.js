import React from 'react';
import styled, { css } from 'styled-components';

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
    z-index: 2;
    background: white;
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
`;

const ActionContainer = styled.div`
    width: 71%;
    height: 100%;
    display: flex;
`;

const Search = styled.div`
    width: 63%;
    height: 48px;
    /* border: 1px solid rgba(0, 0, 0, 0.12); */
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.04);
    margin-right: 16px;
`;

const Actions = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
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
    ${props => props.refresh && css`
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBkPSJNMTMgOXYyaDdWNGgtMnYyLjc0QzE2LjUzIDUuMDcgMTQuNCA0IDEyIDRjLTIuMjEgMC00LjIxLjktNS42NiAyLjM0UzQgOS43OSA0IDEyYzAgNC40MiAzLjU4IDggOCA4IDIuMjEgMCA0LjIxLS45IDUuNjYtMi4zNGwtMS40Mi0xLjQyQTUuOTggNS45OCAwIDAgMSAxMiAxOGMtMy4zMSAwLTYtMi42OS02LTYgMC0xLjY1LjY3LTMuMTUgMS43Ni00LjI0QTUuOTggNS45OCAwIDAgMSAxMiA2YTYuMDEgNi4wMSAwIDAgMSA1LjE5IDNIMTN6Ii8+Cjwvc3ZnPgo=);
    `}
    ${props => props.listView && css`
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGlkPSJsaXN0X3ZpZXdfMjRweCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9ImJvdW5kcyIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjAgMCAyNCAwIDI0IDI0IDAgMjQiPjwvcG9seWdvbj4KICAgICAgICA8cGF0aCBkPSJNMjAsOSBMNCw5IEw0LDUgTDIwLDUgTDIwLDkgWiBNMjAsMTkgTDQsMTkgTDQsMTUgTDIwLDE1IEwyMCwxOSBaIE0zLDMgQzIuNDUsMyAyLDMuNDUgMiw0IEwyLDEwIEMyLDEwLjU1IDIuNDUsMTEgMywxMSBMMjEsMTEgQzIxLjU1LDExIDIyLDEwLjU1IDIyLDEwIEwyMiw0IEMyMiwzLjQ1IDIxLjU1LDMgMjEsMyBMMywzIFogTTMsMTMgQzIuNDUsMTMgMiwxMy40NSAyLDE0IEwyLDIwIEMyLDIwLjU1IDIuNDUsMjEgMywyMSBMMjEsMjEgQzIxLjU1LDIxIDIyLDIwLjU1IDIyLDIwIEwyMiwxNCBDMjIsMTMuNDUgMjEuNTUsMTMgMjEsMTMgTDMsMTMgWiIgaWQ9Imljb24iIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K)
    `}
    ${props => props.settings && css`
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBkPSJNMTMuODUgMjIuMjVoLTMuN2MtLjc0IDAtMS4zNi0uNTQtMS40NS0xLjI3bC0uMjctMS44OWMtLjI3LS4xNC0uNTMtLjI5LS43OS0uNDZsLTEuOC43MmMtLjcuMjYtMS40Ny0uMDMtMS44MS0uNjVMMi4yIDE1LjUzYy0uMzUtLjY2LS4yLTEuNDQuMzYtMS44OGwxLjUzLTEuMTljLS4wMS0uMTUtLjAyLS4zLS4wMi0uNDYgMC0uMTUuMDEtLjMxLjAyLS40NmwtMS41Mi0xLjE5Yy0uNTktLjQ1LS43NC0xLjI2LS4zNy0xLjg4bDEuODUtMy4xOWMuMzQtLjYyIDEuMTEtLjkgMS43OS0uNjNsMS44MS43M2MuMjYtLjE3LjUyLS4zMi43OC0uNDZsLjI3LTEuOTFjLjA5LS43LjcxLTEuMjUgMS40NC0xLjI1aDMuN2MuNzQgMCAxLjM2LjU0IDEuNDUgMS4yN2wuMjcgMS44OWMuMjcuMTQuNTMuMjkuNzkuNDZsMS44LS43MmMuNzEtLjI2IDEuNDguMDMgMS44Mi42NWwxLjg0IDMuMThjLjM2LjY2LjIgMS40NC0uMzYgMS44OGwtMS41MiAxLjE5Yy4wMS4xNS4wMi4zLjAyLjQ2cy0uMDEuMzEtLjAyLjQ2bDEuNTIgMS4xOWMuNTYuNDUuNzIgMS4yMy4zNyAxLjg2bC0xLjg2IDMuMjJjLS4zNC42Mi0xLjExLjktMS44LjYzbC0xLjgtLjcyYy0uMjYuMTctLjUyLjMyLS43OC40NmwtLjI3IDEuOTFjLS4xLjY4LS43MiAxLjIyLTEuNDYgMS4yMnptLTMuMjMtMmgyLjc2bC4zNy0yLjU1LjUzLS4yMmMuNDQtLjE4Ljg4LS40NCAxLjM0LS43OGwuNDUtLjM0IDIuMzguOTYgMS4zOC0yLjQtMi4wMy0xLjU4LjA3LS41NmMuMDMtLjI2LjA2LS41MS4wNi0uNzhzLS4wMy0uNTMtLjA2LS43OGwtLjA3LS41NiAyLjAzLTEuNTgtMS4zOS0yLjQtMi4zOS45Ni0uNDUtLjM1Yy0uNDItLjMyLS44Ny0uNTgtMS4zMy0uNzdsLS41Mi0uMjItLjM3LTIuNTVoLTIuNzZsLS4zNyAyLjU1LS41My4yMWMtLjQ0LjE5LS44OC40NC0xLjM0Ljc5bC0uNDUuMzMtMi4zOC0uOTUtMS4zOSAyLjM5IDIuMDMgMS41OC0uMDcuNTZhNyA3IDAgMCAwLS4wNi43OWMwIC4yNi4wMi41My4wNi43OGwuMDcuNTYtMi4wMyAxLjU4IDEuMzggMi40IDIuMzktLjk2LjQ1LjM1Yy40My4zMy44Ni41OCAxLjMzLjc3bC41My4yMi4zOCAyLjU1eiIvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMuNSIvPgo8L3N2Zz4K);
    `}
`;

const Header = () => {
    return (
        <StyledHeader>
            <MenuLogoContainer>
                <div className="hamburger">
                    {/* <i className="fas fa-bars"></i> */}
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
                <Search></Search>
                <Actions>
                    <Action refresh />
                    <Action listView />
                    <Action settings />
                </Actions>
            </ActionContainer>
        </StyledHeader>
    );
}

export default Header;
