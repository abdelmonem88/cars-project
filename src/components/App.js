import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./header/Header";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Services from "./views/Services/Services";
import Contact from "./views/Contact/Contact";
import Navbar from "./mainNav/MainNav";
import CarsSell from "./views/Services/CarsSell/CarsSell";
import CarsRent from "./views/Services/CarRent/CarRent";

const App = () => {
 return (
  <BrowserRouter>
   <div className='app'>
    <div className='overlay'></div>
    <div className='app__content'>
     <Header />
     <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/about' component={About} />
      <Route path='/services' component={Services} />
      <Route path='/contact' component={Contact} />
      <Route path='/carssell' component={CarsSell} />
      <Route path='/carsrent' component={CarsRent} />
     </Switch>
     <Navbar />
    </div>
   </div>
  </BrowserRouter>
 );
};

export default App;
