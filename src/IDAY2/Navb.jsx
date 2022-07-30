import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav style={{ gap: "10px" }}>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/notfound">Not Found</Link>
      </nav>
    </div>
  );
};
export default Navbar;