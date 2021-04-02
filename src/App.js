import "./App.css";
import Login from "./pages/login";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./utility/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
