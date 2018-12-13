import styled from "styled-components";
import TextTruncate from "react-text-truncate";

export const HeaderWrap = styled.div`
  height: 35px;
  width: 100%;
  h2 {
    margin: 0;
    font-weight: bold;
    border-bottom: 1px solid #000000;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
export const WrappedText = styled(TextTruncate)`
  line-height: 2rem;
  padding: 1%;
`;
