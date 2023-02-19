
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Vendors from "./pages/Vendors";
import AddVendors from "./pages/AddVendors";
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
          <Route path="/addvendors" exact component={AddVendors} />
          <Footer />
          </div>
          
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;