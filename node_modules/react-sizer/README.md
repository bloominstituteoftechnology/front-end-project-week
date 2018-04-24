# react-sizer
Simple React HOC to get the size of a component

## installation

```
npm install react-sizer
```

## example

```
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sizer from 'react-sizer';

class MyComponent extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { width, height } = this.props;

    return (
      <div style={{width, height, background: '#f00'}}>
        Hello World
      </div>
    );
  }
}

const MySizedComponent = sizer()(MyComponent);

```

## options

The sizer HOC can be passed several options.

```
const options = {
  getSize: domElement => ({width: domElement.clientWidth, height: domElement.clientHeight}),
  widthProp: 'nameOfPropForInjectedWidth',
  heightProp: 'nameOfPropForInjectedHeight',
  getDisplayName: name => `NameOfComponentToShowInReactDevTools(${name})`,
  updateSizeCallback: () => { /* code to be run after the size has changed */ },
  resizeProps: [ 'one or more prop names', 'that will trigger recomputation of the size when their value changes']
};

class MyComponent extends Component {
  static propTypes = {
    nameOfPropForInjectedWidth: PropTypes.number.isRequired,
    nameOfPropForInjectedHeight: PropTypes.number.isRequired
  };
  
  // ...
}

sizer(options)(MyComponent);
```
