
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Vendors from "./pages/Vendors";
import Billers from "./pages/Billers";
import Items from "./pages/Items";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/" exact component={Login} />
          <div>
        <Navbar />
        
          <Route path="/home" exact component={Home} />
          <Route path="/vendors" exact component={Vendors} />
          <Route path="/billers" exact component={Billers} />
          <Route path="/items" exact component={Items} />
          <Footer />
          </div>
          
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;