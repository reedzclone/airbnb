import { useState } from "react";
import "./Booking.css";
import { Drawer, Slide } from "@mui/material";
import Container from "@mui/material/Container";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import ProgressBar from "../ProgressBar/ProgressBar";
import Cards from "../Comment/Comment";
import Location from "../Location/Location";
import Host from "../Host/Host";
import HikingOutlinedIcon from "@mui/icons-material/HikingOutlined";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import BookingList from "../BookList/BookList";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
function Booking() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <Container className="booking" maxWidth="m">
      <BookingList onhandleToggleDrawer={handleToggleDrawer} />
      {/* Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleToggleDrawer}
        TransitionComponent={Slide}
      >
        <div
          className="drawer"
          onClick={handleToggleDrawer}
          onKeyDown={handleToggleDrawer}
          style={{ width: "75vw" }} // Adjust width as needed
        >
          {/* Your drawer content goes here */}

          <div className="image-grid">
            <img
              className="first"
              src="https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4="
              alt=""
            />
            <div className="right-side">
              <img
                src="https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4="
                alt=""
                className="right-side-top"
              />
              <img
                src="https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4="
                alt=""
                className="right-side-bottom"
              />
            </div>
          </div>

          <div className="super">Superhost</div>
          <div className="main-side">
            <div className="right-side">
              <div className="title">
                <h2>Whitefish Estate</h2>
                <div className="icons">
                  <div className="title-icon download">
                    <FileUploadOutlinedIcon fontSize="small" />
                  </div>
                  <div className=" title-icon favy">
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                  </div>
                </div>
              </div>
              <p className="description">Whitefish, Montana, United States</p>
              <div className="amenities">
                <div className="ameni">
                  <HikingOutlinedIcon /> &nbsp; 16+ guests
                </div>
                <div className="ameni">
                  <HotelOutlinedIcon /> &nbsp; 8 bedrooms
                </div>
                <div className="ameni">
                  <BedOutlinedIcon /> &nbsp; 8 beds
                </div>
                <div className="ameni">
                  <ShowerOutlinedIcon /> &nbsp; 8 baths
                </div>
              </div>
              <hr />
              <div className="plans">
                <div className="plan">
                  <p className="plan-title">Dedicated workspace</p>
                  <p className="plan-desc">
                    A private room with wifi that’s well-suited for working.
                  </p>
                </div>
                <div className="plan">
                  <p className="plan-title">Self check-in</p>
                  <p className="plan-desc">
                    Check yourself in with the keypad.
                  </p>
                </div>
                <div className="plan">
                  <p className="plan-title">Free cancellation before Jul 25</p>
                  <p className="plan-desc">
                    A private room with wifi that’s well-suited for working.
                  </p>
                </div>
              </div>
              <hr />

              <div className="about">
                <p className="about-title">About this space</p>
                <p className="about-desc">
                  Enjoy a quiet getaway in this charming cottage renovated,
                  designed, and owned by Chip and Joanna Gaines. Originally the
                  carriage house for Hillcrest Estate, this home includes one
                  bedroom, one bath, an office nook and a private back patio.
                  This makes it the perfect getaway for a party of two, or if
                  you’re stopping through town and need a restful place to
                  retreat.
                </p>
                <p className="about-sub-title">The space</p>
                <p className="about-desc">
                  An open living, dining, and kitchen area provide ample room in
                  this cozy cottage. French double doors lead you out to the
                  back patio to enjoy your own private outdoor space. A
                  dedicated, covered parking spot for your use. The parking lot
                  is shared with Hillcrest Estate guests.
                </p>

                <p className="read">Read more</p>
              </div>
              <hr />
              <div className="offer">
                <p className="offer-title">What this place offers</p>
                <div className="offers sec1">
                  <p className="ameni">
                    <HikingOutlinedIcon /> &nbsp;Kitchen
                  </p>
                  <p className="ameni">
                    <HikingOutlinedIcon /> &nbsp;Private patio or balcony
                  </p>
                  <p className="ameni">
                    <HikingOutlinedIcon /> &nbsp;Centrail air conditioning
                  </p>
                </div>
                <div className="offers sec2">
                  <p className="ameni">
                    <HotelOutlinedIcon /> &nbsp;Dedicated workspaces
                  </p>
                  <p className="ameni">
                    <HotelOutlinedIcon /> &nbsp;Wifi
                  </p>
                  <p className="ameni">
                    <BedOutlinedIcon /> &nbsp;Heating
                  </p>
                </div>
                <div className="offers sec3">
                  <p className="ameni">
                    <BedOutlinedIcon /> &nbsp;55” 4k TV
                  </p>
                  <p className="ameni">
                    <BedOutlinedIcon /> &nbsp;1 parking space
                  </p>
                  <p className="ameni">
                    <HotelOutlinedIcon /> &nbsp;Security cameras
                  </p>
                </div>
                <div className="offers sec4">
                  <p className="ameni">
                    <ShowerOutlinedIcon /> &nbsp;Free dryer - in unit
                  </p>
                  <p className="ameni">
                    <ShowerOutlinedIcon /> &nbsp;Free washer - in unit
                  </p>
                  <p className="ameni">
                    <ShowerOutlinedIcon /> &nbsp;Ceiling fans
                  </p>
                </div>
                <p className="view">view more</p>
              </div>
              <hr />
              <div className="review">
                <div className="review-title">
                  <p className="reviews">Reviews</p>
                  <div className="review-rating">
                    <span>
                      <StarIcon fontSize="small" />
                    </span>
                    <p>5.0 — 124 reviews</p>
                  </div>
                </div>
              </div>
              <ProgressBar />
              <Cards />
              <Location />
              <Host />
            </div>
            <div className="left-wrapper">
              <div className="left-side">
                <div className="price-quote">
                  <div className="price-quote-title">
                    <p>
                      $10,000 <span>/ night</span>
                    </p>

                    <div className="price-quote-icons">
                      <span>
                        <StarIcon />
                      </span>
                      <p>5.0</p>
                    </div>
                  </div>
                </div>
                <div className="check-date">
                  <div className="checkin">
                    <div className=" check checkin-title">Check In</div>
                    <div className="check-input checkin-input">6/14/2023</div>
                  </div>
                  <div className="checkout">
                    <div className=" check checkout-title">Check Out</div>
                    <div className="check-input checkout-input">6/14/2023</div>
                  </div>
                </div>
                <div className="no-guest">
                  <div className="no-guest-title">Guest</div>
                  <div className="no-guest-input">1 guest</div>
                </div>
                <hr />
                <div className="price-summary">
                  <div className="sum">
                    <p className="sum-title">6 nights</p>
                    <p className="sum-price">$2,199</p>
                  </div>
                  <div className="sum">
                    <p className="sum-title">Cleaning fee</p>
                    <p className="sum-price">$85</p>
                  </div>
                  <div className="sum">
                    <p className="sum-title">Airbnb service fee</p>
                    <p className="sum-price">$322</p>
                  </div>
                </div>
                <hr />
                <div className="total">
                  <div className="total-title">
                    Total
                    <br />
                    <span>Before taxes</span>
                  </div>
                  <div className="total-price">$2,606</div>
                </div>

                <div className="btn">Reserve</div>
              </div>
              <div className="rare">
                <div>Diamond Image</div>
                <div className="rare-title">
                  <p>This is a rare find</p>

                  <span>
                    Kathryn&apos;s place on Airbnb is usually fully booked
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <Typography variant="h6" component="div" gutterBottom>
            Drawer Content
          </Typography>
          <Typography component="div" gutterBottom>
            This is the content of the drawer.
          </Typography> */}
        </div>
        {/* Close button */}
        <div className="drawer-close">
          {isDrawerOpen && (
            <button
              className="drawer-close-btn"
              onClick={() => setIsDrawerOpen(false)}
            >
              <CloseOutlinedIcon fontSize="small" />
            </button>
          )}
        </div>
      </Drawer>

      {isDrawerOpen && (
        <div
          onClick={handleToggleDrawer}
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            zIndex: 998,
          }}
        />
      )}
    </Container>
  );
}
export default Booking;
