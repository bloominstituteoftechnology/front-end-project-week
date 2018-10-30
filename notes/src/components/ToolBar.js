import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const ToolBar = ({ notes }) => {
    return (
        <SideBar>
            <Section to='/' exact notes="true">
                <span className="icon" />
                <span className="title"/>
            </Section>
            <Section to='/reminders' reminders="true">
                <span className="icon" />
                <span className="title"/>
            </Section>
            <Seperator />
            <ToolBarLabel />
            <Section to='/tags' tags="true">
                <span className="icon" />
                <span className="title"/>
            </Section>
            <Seperator />
            <Section to='/csv' csv="true">
                <span className="icon" />
                <span className="title"/>
            </Section>
            <Section to='/trash' trash="true">
                <span className="icon" />
                <span className="title"/>
            </Section>
        </SideBar>
    );
}

export default ToolBar;


const SideBar = styled.div`
    width: 280px;
    height: 100%;
    background-color: white;
    padding: 8px 0px;
    position: fixed;
    left: 0;
    a {
        text-decoration: none;
    }
`;

const Section = styled(NavLink)`
    font-family: 'Open Sans';
    letter-spacing: .55px;
    width: 100%;
    height: 48px;
    padding: 4px 0px 4px 24px;
    border-bottom-right-radius: 25px; 
    border-top-right-radius: 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: rgb(32, 33, 36);
    font-size: 13px;
    line-height: 40px;
    font-weight: 600;
    cursor: pointer;
    :hover {
        background-color: #e8e8e8;
    }
    a {
        text-decoration: none;
        opacity: 1;
    }
    &.active {
        background-color: #feefc3;
        span.icon {
            opacity: 1;
        }
    }
    span.title {
        margin-left: 32px;
        letter-spacing: 0.75px;
    }
    span.icon {
        width: 24px;
        height: 24px;
        background-size: 24px 24px;
        opacity: .54;
    }
    ${props => props.notes && css`
        span.icon {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg>')
        }
        span.title:after {
            content: 'Notes'
        }
    `}
    ${props => props.reminders && css`
        span.icon {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"></path></svg>')
        }
        span.title:after {
            content: 'Reminders'
        }
    `}
    ${props => props.tags && css`
        span.icon {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path></svg>')
        }
        span.title:after {
            content: 'Edit tags'
        }
    `}
    ${props => props.csv && css`
        span.icon {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"></path></svg>')
        }
        span.title:after {
            content: 'Export CSV'
        }
    `}
    ${props => props.trash && css`
        span.icon {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>')
        }
        span.title:after {
            content: 'Trash'
        }
    `}
`;

const Seperator = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ddd;
    margin: 8px 0px;
`;

const ToolBarLabel = styled.div`
    margin-top: 15px;
    padding-left: 24px;
    margin-bottom: 5px;
    height: 31px;
    line-height: 31px;
    font-family: 'Roboto';
    font-size: 11px;
    font-weight: 600;
    color: #5f6368;
    letter-spacing: 0.8px;
    &::after {
        content: 'TAGS';
    }
`;

