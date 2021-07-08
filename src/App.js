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
import ForgotPassword from "./pages/forgotPassword";
import confirmRegister from "./pages/register/confirmRegister";
import ResetPassword from "./pages/forgotPassword/confirmResetPassword";
import PassingTest from "./pages/PassingTest";
import TestExam from "./pages/testExam";
import Contact from "./pages/contact";
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
          <Route path="/test" exact component={Test} />
          <Route path="/prices" exact component={Pricing} />
          <Route path="/features" exact component={Features} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/regitrationConfirm/:id" component={confirmRegister} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/passingTest" component={PassingTest} />
          <Route exact path="/testExam" component={TestExam} />
          <Route exact path="/contact" component={Contact} />
          <Route
            path="/confirmResetPassword/:token"
            component={ResetPassword}
          />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
