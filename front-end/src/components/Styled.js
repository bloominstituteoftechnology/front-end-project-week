import styled from 'styled-components'

export const FlexRow = styled.div.attrs({
    justifyContent: props => props.justifyEnd ? `flex-end` : props.justifyBetween ? `space-between` : props.justifyAround ? `space-around` : props.justifyCenter ? `center` : `flex-start`,
    alignItems: props => props.alignEnd ? `flex-end` : props.alignCenter ? `center` : `flex-start`,
    flexWrap: props => props.wrap ? `wrap` : props.wrapReverse ? `wrap-reverse` : `nowrap`,
    padding: props => props.padding ? props.padding + "px" : "0",
    width: props => props.width ? props.width === "full" ? "100%" : props.width : "auto",
    height: props => props.height ? props.height === "full" ? "100%" : props.height : "auto",
    marginTop: props => props.marginTop && typeof parseInt(props.marginTop) === 'number' ? parseInt(props.marginTop) + "px" : props.marginTop ? "10px" : "0",
    marginBottom: props => props.marginBottom && typeof parseInt(props.marginBottom) === 'number' ? parseInt(props.marginBottom) + "px" : props.marginBottom ? "10px" : "0",
    grow: props => ((g = props.grow) => g ? parseFloat(g) > -1 ? g : "1" : "0")()
})`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    flex-wrap: ${props => props.flexWrap};
    padding:${props => props.padding};
    width :${props => props.width};
    height: ${props => props.height};
    margin-top :${props => props.marginTop};
    margin-bottom :${props => props.marginBottom};
    max-width: 100%;
    flex-grow: ${props => props.grow}
`;

export const FlexColumn = styled.div.attrs({
    justifyContent: props => props.justifyEnd ? `flex-end` : props.justifyBetween ? `space-between` : props.justifyAround ? `space-around` : props.justifyCenter ? `center` : `flex-start`,
    alignItems: props => props.alignEnd ? `flex-end` : props.alignCenter ? `center` : `flex-start`,
    flexWrap: props => props.wrap ? `wrap` : props.wrapReverse ? `wrap-reverse` : `nowrap`,
    padding: props => props.padding ? props.padding + "px" : "0",
    width: props => props.width ? props.width === "full" ? "100%" : props.width : "auto",
    height: props => props.height ? props.height === "full" ? "100%" : props.height : "auto",
    marginTop: props => props.marginTop && typeof parseInt(props.marginTop) === 'number' ? parseInt(props.marginTop) + "px" : props.marginTop ? "10px" : "0",
    marginBottom: props => props.marginBottom && typeof parseInt(props.marginBottom) === 'number' ? parseInt(props.marginBottom) + "px" : props.marginBottom ? "10px" : "0",
    grow: props => ((g = props.grow) => g ? parseFloat(g) > -1 ? g : "1" : "0")()
})`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    flex-wrap: ${props => props.flexWrap};
    padding:${props => props.padding};
    width: ${props => props.width};
    height: ${props => props.height};
    margin-top :${props => props.marginTop};
    margin-bottom :${props => props.marginBottom};
    max-width: 100%;
    flex-grow: ${props => props.grow}
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.81);;
`;

export const Paper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.6784313725490196);
    padding: 25px;
    background: white;
    margin: 20px;
    width: ${({width}) => width};
    height: ${({height}) => height};
`;

export const Button = styled.button.attrs({
    background: props => props.primary ? "#EA4C88" : props.inverted ? "#292929" : "transparent",
    color: props => props.primary ? "white" : "#8C8C8C",
    width: props => props.full ? "100%" : "auto"
})`
    background: ${({background}) => background};
    color: ${({color}) => color};
    width: ${({width}) => width};
    padding: 12px;
    min-width: 200px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: ${({border}) => border ? "1px solid #e0e0e0" : "none"};
    border-radius: 6px;
    cursor: pointer;
    
    :hover {
      background: ${props => props.primary ? "#d14578" : props.inverted ? "#191919" : "#ebebeb"};
      color: ${props => props.primary || props.inverted ? "white" : "#292929"};
    }
`;

export const Title = styled.b`
    font-size: 3rem;
    color: ${({color}) => color}
`;

export const Text = styled.p`
    font-size: 1.8rem;
    overflow: hidden;
`;

export const Input = styled.input`
    padding: 20px;
    width: 100%;
    border: 4px dotted #e0e0e0;
    border-radius: 6px;
    box-sizing: border-box;
    margin: 20px 0;
    font-size: 3rem;
    font-weight: bold;
`;

export const TextArea = styled.textarea`
    padding: 20px;
    width: 100%;
    height: 200px;
    border: 4px dotted #e0e0e0;
    margin: 10px 0 40px 0;
    border-radius: 6px;
    box-sizing: border-box;
    font-size: 1.8rem;
`;

export const Search = styled.input`
    padding: 20px;
    height: 38px;
    width: 300px;
    border: none;
    border-radius: 6px;
    box-sizing: border-box;
    background: #c8c7c7;
    font-size: 1.8rem;
`;