import "./Logo.css";
import airbnb from "../../../assets/image/airbnb.svg";
import profile from "../../../assets/image/profile.jpg";

function Logo() {
  return (
    <div className="logo">
      <img src={airbnb} alt="aribnb" className="logo-image" />
      <div className="logo_nav">
        <ul className="nav_list">
          <li className="active">Stays</li>
          <li>Experience</li>
          <li>Online Experience</li>
        </ul>
      </div>
      <img src={profile} alt="image" className="profile" />
    </div>
  );
}

export default Logo;
