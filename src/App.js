import "./App.css";
import Register from "./pages/register";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./utility/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ConfirmRegister from "./pages/confirmregister";
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/confirmregister" exact component={ConfirmRegister} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
