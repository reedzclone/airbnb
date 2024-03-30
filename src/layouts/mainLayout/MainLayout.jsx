import "./MainLayout.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Booking from "../../components/Booking/Booking";

function MainLayout() {
  return (
    <div className="main">
      <div className="side">
        <Sidebar />
      </div>
      <div className="book">
        <Booking />
      </div>
      {/* <div className="side">
        <Sidebar />
      </div>
      <div className="book">
        <Booking />
      </div> */}
    </div>
  );
}

export default MainLayout;
