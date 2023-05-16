import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css"

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>IMS Dashboard</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/putaway'>Putaway</Link>
          </li>
          <li>
            <Link to='/picking'>Picking</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
