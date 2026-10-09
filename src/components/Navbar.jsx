import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <h2>TechFest 2026</h2>

      <div>
        <Link to="/">Home</Link>{" "}
        <Link to="/events">Events</Link>{" "}
        <Link to="/registration">Registration</Link>{" "}
        <Link to="/gallery">Gallery</Link>{" "}
        <Link to="/contact">Contact</Link>{" "}

        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;