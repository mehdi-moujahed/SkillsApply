import "./App.css";
import Register from "./pages/register";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./utility/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Test from "./pages/test";
import Pricing from "./pages/price";
import Features from "./pages/features";
import Dashboard from "./pages/dashboard";
import confirmRegister from "./pages/register/confirmRegister";
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/test" exact component={Test} />
          <Route path="/prices" exact component={Pricing} />
          <Route path="/features" exact component={Features} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/regitrationConfirm/:id" component={confirmRegister} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
