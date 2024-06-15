import styled from "styled-components";
import { useTheme } from "styled-components";

const Navigation = () => {
  const theme = useTheme();
  return (
    <Container>
      <h1>Where in the world</h1>
      <ToggleButton onClick={theme.toggleMode}>
        {theme.isDarkMode ? "Light Mode" : "Dark Mode"}
      </ToggleButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.navBackground};
  height: 80px;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 24px;
    font-weight: 900;
    color: ${(props) => props.theme.textColor};
  }
`;

const ToggleButton = styled.button`
  appearance: none;
  border: none;
  outline: none;
  background: none;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
`;

export default Navigation;
