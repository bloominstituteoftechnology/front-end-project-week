import React, { createElement, Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import expect from 'expect';
import sizer from '../src';

const FIXED_PARENT_WIDTH = 300;
const FIXED_PARENT_HEIGHT = 200;

class FixedParent extends Component {
  render() {
    return <div style={{width: FIXED_PARENT_WIDTH, height: FIXED_PARENT_HEIGHT}}>{this.props.children}</div>;
  }
}

class Child extends Component {
  render() {
    const { width, height } = this.props;

    return <div>{width} x {height}</div>;
  }
}

describe('react-sizer', function() {
  let node;

  beforeEach(function() {
    node = document.getElementById('react-sizer-test-div');
    if (node) {
      node.innerHTML = '';
    }
    else {
      node = document.createElement('div');
      node.setAttribute('id', 'react-sizer-test-div');
      document.body.appendChild(node);
    }
    node.style.margin = 0;
    node.style.padding = 0;
  });

  afterEach(function() {
    unmountComponentAtNode(node);
  });

  describe('initial render', function() {
    it('renders a child of a fixed sized parent with the correct width and height', function(done) {
      const SizerChild = sizer({
        updateSizeCallback: () => {
          expect(node.textContent).toEqual(FIXED_PARENT_WIDTH + ' x ' + FIXED_PARENT_HEIGHT);
          done();
        }
      })(Child);

      render((<FixedParent><SizerChild/></FixedParent>), node);
    });

    it('supports changing the width and height props', function(done) {
      const SizerChild = sizer({
        widthProp: 'myWidth',
        heightProp: 'myHeight',
        updateSizeCallback: () => {
          expect(node.textContent).toEqual(FIXED_PARENT_WIDTH + ' x ' + FIXED_PARENT_HEIGHT);
          done();
        }
      })(function(props) {
        const { myWidth, myHeight } = props;

        return <div>{myWidth} x {myHeight}</div>;
      });

      render((<FixedParent><SizerChild/></FixedParent>), node);
    });
  });
});
