import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const PreviewDiv = Styled.div`
    background-color: #ffffff;
    padding: 10px;
    margin: 0 15px 20px 0;
    border: 1px solid #afafaf;
    border-radius: 1px;
    width: 200px;
    height: 200px;
    h4 {
        font-size: 1.6rem;
        font-weight: bold;
        cursor: pointer;
    }
    hr {
        width: 180px;
        margin: 5px auto;
    }
    p {
        font-size: 1.2rem;
        /* styles for ellipse */
        /* http://hackingui.com/front-end/a-pure-css-solution-for-multiline-text-truncation/ */
        overflow: hidden;
        position: relative;
        line-height: 2rem;
        /* line-height * # of lines */
        max-height: 14rem;
        text-align: justify;
        margin-right: -1rem;
        padding-right: 1rem;
        &:before {
            content: '...';
            position: absolute;
            right: 0;
            bottom: 0;
        }
        &:after {
            content: '';
            position: absolute;
            right: 0;
            width: 1rem;
            height: 1rem;
            margin-top: 0.2rem;
        }
    }
`;

const NotePreview = (props) => {
    return (
        <PreviewDiv>
            <h4>A note!{/*{props.somethingOrOther}*/}</h4>
            <hr />
            <p>{/*{props.somethingOrOther}*/}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum erat sapien, sit amet pellentesque erat lobortis quis. Mauris in magna porttitor ante viverra tincidunt id vel sem. Curabitur elementum, nulla ac dignissim rutrum, velit est euismod nisi, non volutpat lectus enim id purus. Nullam non viverra nibh, non bibendum sem. Maecenas quis auctor enim. Cras lacus felis, vehicula eu nisi vitae, placerat blandit turpis. Vivamus tempor lectus ac blandit pulvinar. Ut sed scelerisque elit. Aenean eu dui ultrices ipsum commodo vehicula non ac lectus. Ut tempor ligula velit, vel fermentum justo faucibus eget. Praesent cursus urna id nibh cursus, id volutpat ante eleifend. Nullam lacinia ac metus at dictum.

Mauris et euismod ex. Pellentesque in eros pretium, semper mauris at, laoreet est. Phasellus nec tincidunt nibh, at maximus dolor. Donec nec diam hendrerit, interdum purus et, vehicula nibh. Pellentesque volutpat metus vehicula sagittis fringilla. Maecenas enim elit, suscipit sed nulla mattis, dapibus mollis enim. Integer sodales porta cursus. Sed finibus dignissim massa, non auctor magna blandit a. In vitae purus convallis, facilisis turpis in, euismod urna. Vivamus quis congue velit. Fusce id tellus volutpat, placerat mi ut, molestie tortor. Suspendisse volutpat turpis nec ante placerat porttitor. Nullam in purus quis arcu lobortis ornare. Integer lorem urna, consequat vitae sapien at, pellentesque vestibulum velit.

Suspendisse scelerisque ullamcorper tincidunt. Suspendisse sodales tellus at lacus vulputate mattis. Ut eros tortor, interdum ut odio ut, ullamcorper euismod turpis. Donec non justo convallis justo egestas dignissim. Phasellus semper est eu justo venenatis mollis. Nullam accumsan ipsum vel elit fermentum, sed congue est dignissim. Etiam vitae ex diam. Pellentesque accumsan dui a placerat condimentum. Suspendisse congue velit et purus mollis pharetra. Nunc auctor mi ante. In finibus eleifend elementum.

Vestibulum hendrerit et est non varius. Vestibulum condimentum ultrices odio, vel consectetur mi semper et. Vestibulum eu rhoncus magna, eu dignissim mauris. Fusce at quam in magna euismod tempor. Nulla elementum tempor lorem, a egestas augue porttitor at. Cras consectetur eget ante at vestibulum. Sed efficitur leo tortor, ac euismod dui aliquet vitae. Fusce et hendrerit massa, non dictum neque. Nam dignissim gravida lacus, vitae porttitor lectus luctus at. Vivamus nulla nunc, bibendum vitae euismod sit amet, porttitor eu eros.

Morbi placerat eget dolor at accumsan. Cras a aliquet velit. Donec eget dolor imperdiet nunc tincidunt consectetur vel ut dolor. Sed tristique lectus vel dui mollis pharetra. Donec convallis lacus nec bibendum semper. Nulla pretium justo vitae velit sagittis blandit et egestas libero. Quisque ac elit tincidunt, congue lectus vitae, bibendum erat. Suspendisse facilisis nec velit nec consequat. Etiam vitae scelerisque dolor. Nunc mattis tempus urna, in suscipit libero lobortis quis. Nunc id pharetra lectus. Sed quis rutrum leo, ac placerat neque. Pellentesque tristique est sit amet orci dapibus, nec convallis dui vehicula. Vivamus suscipit urna venenatis enim mattis, sed fringilla nibh lacinia. Donec accumsan lobortis egestas.</p>
        </PreviewDiv>
    );
};

NotePreview.propTypes = {};

export default NotePreview;
