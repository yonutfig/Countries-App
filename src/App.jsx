import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import CountryPage from "./pages/country";
import Api from "./api";
import ThemeProvider from "../themeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: async () => {
      const data = await Api.getAllCountries();
      return {
        countries: data,
      };
    },
  },
  {
    path: "/country/:countryName",
    element: <CountryPage />,
    loader: async ({ params }) => {
      const data = await Api.getCountryByName(params.countryName);
      return {
        country: data,
      };
    },
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />{" "}
    </ThemeProvider>
  );
}

export default App;
