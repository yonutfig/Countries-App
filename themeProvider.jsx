import { useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = {
  light: {
    navBackground: "#f5f5f5",
    textColor2: "#848484",
    textColor: "#111517",
  },
  dark: {
    navBackground: "#2b3844",
    textColor: "#f5f5f5",
    background1: "#202c36",
    textColor2: "#fff",
  },
};

// ThemeProvider component
const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <StyledThemeProvider
      theme={
        isDarkMode
          ? { ...theme.dark, toggleMode, isDarkMode }
          : { ...theme.light, toggleMode, isDarkMode }
      }
    >
      {children}
    </StyledThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default ThemeProvider;
