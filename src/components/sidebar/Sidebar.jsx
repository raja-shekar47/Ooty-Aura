import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../Buttons/Buttons";
import "./sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <h2>Ooty Connect 🌄</h2>
      <nav>
        <NavLink to="/" end>
          🏠 Home
        </NavLink>
        <NavLink to="visit">📸 Add Post</NavLink>
        <NavLink to="profile">🧍 Profile</NavLink>
        <NavLink to="liked">❤️ Liked Posts</NavLink>
        <NavLink to="shared">🔗 Shared</NavLink>
        <NavLink to="gallery">🖼️ Gallery</NavLink>
      </nav>

      <Button label="Sign Out" onClick={handleSignOut} />
    </aside>
  );
};

export default Sidebar;
