import React, { Component } from 'react';
import styled from 'styled-components';

const Button = props => (
  <button style={{ backgroundColor: props.color }}>{props.name}</button>
);

export default Button;
