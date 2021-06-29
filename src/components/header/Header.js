import "./header.css";
import Logo from "../Logo";
import { Link } from "react-router-dom";

function Header() {


 return (
  <div>
   <header>
    <div className='container'>
     <div className='header-content'>
      <Logo />
      <h1>
       <Link to='/'>
        الدولية <span>للسيارات</span>
       </Link>
      </h1>
     </div>
    </div>
   </header>
  </div>
 );
}

export default Header;
