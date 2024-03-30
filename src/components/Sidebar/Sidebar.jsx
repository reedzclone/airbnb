import "./Sidebar.css";
import airbnb from "../../assets/image/airbnb.png";
import view from "../../assets/image/window.png";
import tiny from "../../assets/image/tinyhouse.png";
import pan from "../../assets/image/pan.png";
import surfing from "../../assets/image/surfing.png";
import mansion from "../../assets/image/mansion.png";
import luxe from "../../assets/image/luxe.png";
import tree from "../../assets/image/tree.png";
import camping from "../../assets/image/camping.png";
import beachhouse from "../../assets/image/beachhouse.png";
import farm from "../../assets/image/farm.png";
import castle from "../../assets/image/castle.png";
import island from "../../assets/image/island.png";
import vineyard from "../../assets/image/vineyard.png";
import swimming from "../../assets/image/swimming.png";
import skiing from "../../assets/image/skiing.png";
import desert from "../../assets/image/desert.png";

// const link = [
//   {
//     icon: "../assets/image/airbnb.png",
//     alt: "home",
//     title: "All Home",
//   },
//   {
//     icon: "/assets/image/window.png",
//     title: "Amazing Window",
//   },
//   {
//     icon: "/assets/image/tinyhouse.png",
//     title: "Tiny Homes",
//   },
//   {
//     icon: "/assets/image/pan.png",
//     title: "Pan",
//   },
//   {
//     icon: "/assets/image/surfing.png",
//     title: " Surfing",
//   },
//   {
//     icon: "/assets/image/mansion.png",
//     title: "Mansion",
//   },
//   {
//     icon: "/assets/image/luxe.png",
//     title: "Luxe",
//   },
//   {
//     icon: "/assets/image/tree.png",
//     title: "Treehouse",
//   },
//   {
//     icon: "/assets/image/camping.png",
//     title: "Camping",
//   },
//   {
//     icon: "/assets/image/beachhouse.png",
//     title: "Beachhouse",
//   },
//   {
//     icon: "/assets/image/farm.png",
//     title: "Farm",
//   },
//   {
//     icon: "/assets/image/castle.png",
//     title: "Castle",
//   },
//   {
//     icon: "/assets/image/island.png",
//     title: " Island",
//   },
//   {
//     icon: "/assets/image/vineyard.png",
//     title: " Vineyard",
//   },
//   {
//     icon: "/assets/image/swimming.png",
//     title: "Swimming",
//   },
//   {
//     icon: "/assets/image/skiing.png",
//     title: "Skiing",
//   },
//   {
//     icon: "/assets/image/desert.png",
//     title: "Desert",
//   },
// ];

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li className="active">
          <img src={airbnb} alt="" className="image-icon" />
          <span className="text">All Home</span>
        </li>
        <li>
          <img src={view} alt="" className="image-icon" />
          <span className="text">Amazing Window</span>
        </li>
        <li>
          <img src={tiny} alt="" className="image-icon" />
          <span className="text">Tiny Homes</span>
        </li>
        <li>
          <img src={pan} alt="" className="image-icon" />
          <span className="text">pan</span>
        </li>
        <li>
          <img src={surfing} alt="" className="image-icon" />
          <span className="text">Surfing</span>
        </li>
        <li>
          <img src={mansion} alt="" className="image-icon" />
          <span className="text">Mansion</span>
        </li>
        <li>
          <img src={luxe} alt="" className="image-icon" />
          <span className="text">Luxe</span>
        </li>
        <li>
          <img src={tree} alt="" className="image-icon" />
          <span className="text">Treehouse</span>
        </li>
        <li>
          <img src={camping} alt="" className="image-icon" />
          <span className="text">Camping</span>
        </li>
        <li>
          <img src={beachhouse} alt="" className="image-icon" />
          <span className="text">Beachhouse</span>
        </li>
        <li>
          <img src={farm} alt="" className="image-icon" />
          <span className="text">Farm</span>
        </li>
        <li>
          <img src={castle} alt="" className="image-icon" />
          <span className="text">Castle</span>
        </li>
        <li>
          <img src={island} alt="" className="image-icon" />
          <span className="text">Island</span>
        </li>
        <li>
          <img src={vineyard} alt="" className="image-icon" />
          <span className="text">Vineyard</span>
        </li>
        <li>
          <img src={swimming} alt="" className="image-icon" />
          <span className="text">Swimming</span>
        </li>
        <li>
          <img src={skiing} alt="" className="image-icon" />
          <span className="text">Skiing</span>
        </li>
        <li>
          <img src={desert} alt="" className="image-icon" />
          <span className="text">Desert</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
