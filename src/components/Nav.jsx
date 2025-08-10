import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="users/med">Med</Link>
      <Link to="users/jihen">Jihen</Link>
      <Link to="users/omar">Omar</Link>
    </nav>
  );
}
export default Nav;
