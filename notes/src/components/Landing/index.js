import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

import styled from "styled-components";
import "./landing.css";

import undraw_browser from "../images/undraw_browser.svg";
import undraw_creation from "../images/undraw_creation.svg";
import undraw_designer from "../images/undraw_designer.svg";
import undraw_frameworks from "../images/undraw_frameworks.svg";
import undraw_responsive from "../images/undraw_responsive.svg";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  min-width: 100vw;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Landing = () => {
  return (
    <Container>
      <div className="hero">
        <div className="hero__overlay hero__overlay--gradient" />
        <div className="hero__mask" />
        <div className="hero__inner">
          <div className="container">
            <div className="hero__content">
              <div className="hero__content__inner" id="navConverter">
                <h1 className="hero__title">
                  A light-weight note taking application
                </h1>
                <p className="hero__text">
                  Lambda Notes is a React-based note taking app that uses Redux
                  for state management and Google's Firebase for authentication.
                </p>
                <Link to={ROUTES.SIGN_UP} className="button button__accent">
                  Sign Up
                </Link>
                <Link to={ROUTES.ABOUT} className="button hero__button">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="steps landing__section">
        <div className="container">
          <h2>Who uses Lambda Notes?</h2>
          <p>This is certainly not a comprehensive list.</p>
        </div>
        <div className="container">
          <div className="steps__inner">
            <div className="step">
              <div className="step__media">
                <img alt="" src={undraw_designer} className="step__image" />
              </div>
              <h4>Developers</h4>
              <p className="step__text">
                Keep track of development progess and ideas for the next billion
                dollar idea.
              </p>
            </div>
            <div className="step">
              <div className="step__media">
                <img alt="" src={undraw_responsive} className="step__image" />>
              </div>
              <h4>Students</h4>
              <p className="step__text">
                A place to store all of the notes you take during class.
              </p>
            </div>
            <div className="step">
              <div className="step__media">
                <img alt="" src={undraw_creation} className="step__image" />
              </div>
              <h4>Makers</h4>
              <p className="step__text">
                A great place to offload all of the ideas for your next digital
                nomad job board.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="expanded landing__section">
        <div className="container">
          <div className="expanded__inner">
            <div className="expanded__media">
              <img alt="" src={undraw_browser} className="expanded__image" />
            </div>
            <div className="expanded__content">
              <h2 className="expanded__title">
                Blazing fast rendering with the virtual DOM
              </h2>
              <p className="expanded__text">
                Lambda Notes is built on React whose component based structure
                maximizes reusablity and makes codebase more maintainable. In
                addition, the unidirectional data flow increases app performance
                and the API friendly library works seamlessly with and is
                extendable across numerous frameworks to leverage advanced UI
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="expanded landing__section">
        <div className="container">
          <div className="expanded__inner">
            <div className="expanded__media">
              <img alt="" src={undraw_frameworks} className="expanded__image" />
            </div>
            <div className="expanded__content">
              <h2 className="expanded__title">
                Lightening fast, highly performant, and more scalable
              </h2>
              <p className="expanded__text">
                Lambda Notes uses Node.js on the backend which utilizes Google's
                V8 JS engine.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cta cta--reverse">
        <div className="container">
          <div className="cta__inner">
            <h2 className="cta__title">Get started now</h2>
            <p className="cta__sub cta__sub--center">
              Sign up to use Lambda Notes now.
            </p>
            <Link to={ROUTES.SIGN_UP} className="button button__accent">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="footer footer--dark">
        <div className="container">
          <div className="footer__inner">
            <a href="index.html" className="footer__textLogo">
              Lambda Notes
            </a>
            <div className="footer__data">
              <div className="footer__data__item">
                <div className="footer__row">
                  Created by{" "}
                  <a href="https://twitter.com/cpdis" className="footer__link">
                    Colin Dismuke
                  </a>
                </div>
              </div>
              <div className="footer__data__item">
                <div className="footer__row">
                  <a href="https://github.com/cpdis" className="footer__link">
                    GitHub
                  </a>
                </div>
                <div className="footer__row">
                  <a href="https://twitter.com/cpdis" className="footer__link">
                    Twitter
                  </a>
                </div>
                <div className="footer__row">
                  <a href="https://evie.undraw.co/" className="footer__link">
                    Based on Evie
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Landing;
