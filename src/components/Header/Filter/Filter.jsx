import "./Filter.css";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";

function Filter() {
  return (
    <div className="filter">
      <div className="boxs">
        <div className="small-boxs">
          <WidgetsOutlinedIcon className="wg" />
        </div>
        <div className="small-cover">
          <ElectricBoltOutlinedIcon className="icon-dash" />
        </div>
      </div>

      <div className="filter_params">
        <div className="place">
          <p>Anywhere</p>

          <ExpandMoreOutlinedIcon fontSize="medium" className="icon-dash" />
        </div>
        <div className="date">
          <CalendarTodayOutlinedIcon fontSize="medium" className="icon-dash" />
          <p>June 14 - 12</p>
        </div>
        <div className="guest">
          <div className="minus">-</div>
          <p>4 guests</p>
          <div className="plus">+</div>
        </div>
      </div>

      <div className="filter_icon">
        <FilterAltOutlinedIcon className="icon-dash" />
      </div>
    </div>
  );
}

export default Filter;
