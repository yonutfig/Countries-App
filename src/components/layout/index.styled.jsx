import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background1};
  min-height: 100vh;
  min-height: 100dvh;
  main {
    display: flex;
    gap: 40px;
    padding: 40px 80px;
  }
`;
export default Container;
