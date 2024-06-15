import styled from "styled-components";
import "../../App.css";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.textColor};
`;

export default Container;
