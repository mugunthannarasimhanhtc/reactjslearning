import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import classes from "./MainNavigation.module.css"

function MainNavigation() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  console.log(splitLocation[1]);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>IMS Dashboard</div>
      <nav>
        <ul>
          <li className={splitLocation[1] === "" ? "active" : ""}>
            <Link to='/'>Home</Link>
          </li>
          <li className={splitLocation[1] === "putaway" ? "active" : ""}>
            <Link to='/putaway'>Putaway</Link>
          </li>
          <li className={splitLocation[1] === "picking" ? "active" : ""}>
            <Link to='/picking'>Picking</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
