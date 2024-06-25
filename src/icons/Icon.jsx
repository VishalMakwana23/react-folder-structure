import styled from "styled-components";

const IconStyled = styled.span`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    width: ${(props) => props.width}px;
    height: ${(props) => props.width}px;
    display: ${(props) => (props.hidden ? "none" : "inline-block")};
    flex-shrink: 0;
    user-select: none;
    fill: ${(props) => (props.color ? props.color : "inherit")};
    & :hover {
      fill: ${(props) => (props.hoverColor ? props.hoverColor : "default")};
    }
  }
`;

function Icon({ children, color, ...rest }) {
  return (
    <IconStyled {...rest} color={color}>
      {children}
    </IconStyled>
  );
}

export default Icon;
