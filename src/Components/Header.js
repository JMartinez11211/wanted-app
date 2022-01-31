import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="header">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/300px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
        className="logo"
      />
      <h1 id="title">MOST WANTED</h1>
      <nav id="nav">
        <Link to="home"> Home | </Link>
        <Link to="about"> About | </Link>
        <Link to="Field_Offices"> Field Offices </Link>
      </nav>
    </div>
  );
}
