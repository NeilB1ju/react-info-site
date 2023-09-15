import icon from '../assets/reactjs-icon.svg';
import './styles/navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <img src={icon} alt="React Icon" className="nav-icon" />
        <h1>ReactFacts</h1>
      </div>
      <h1 className="nav-right">React Course - Project 1</h1>
    </nav>
  );
}
export default Navbar;
