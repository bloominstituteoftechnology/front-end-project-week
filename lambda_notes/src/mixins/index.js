export const customLayout = (justify = "flex-start", align = "flex-start") =>
  `display: flex;
  justify-content: ${justify};
  align-items: ${align};`;

export const customButton = () =>
  `margin: 10px 0;
  border-color: #B7B5B7;
  padding: 20px;
  background-color: #23B8BD;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;

  a {
    color: #fff;
  }`;
