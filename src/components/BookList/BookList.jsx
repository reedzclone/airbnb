import "./BookList.css";
import { Grid, Card, CardContent } from "@mui/material";

// import Data from "../../Data.json";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import img1 from "../../assets/image/img1.jpg";
import img2 from "../../assets/image/img2.jpg";
import img3 from "../../assets/image/img3.jpg";
import img4 from "../../assets/image/img4.jpg";
import img5 from "../../assets/image/img5.jpg";
import img6 from "../../assets/image/img6.jpg";
import img7 from "../../assets/image/img7.jpg";
import img8 from "../../assets/image/img8.jpg";
import img9 from "../../assets/image/img9.jpg";
import img10 from "../../assets/image/img10.jpg";
import img11 from "../../assets/image/img11.jpg";

// eslint-disable-next-line react/prop-types
function BookList({ onhandleToggleDrawer }) {
  return (
    <Grid container spacing={4}>
      {/* First Card */}
      <Grid item xs={12} sm={6} md={3} className="grid">
        <Card className="card" onClick={onhandleToggleDrawer}>
          <img
            src={img1}
            alt="Image 1"
            style={{ width: "100%" }}
            className="booklist-img"
          />
          <CardContent className="booklist-content">
            <h2 className="booklist-title">Whitefish Estate</h2>
            <p className="booklist-desc extra">
              Whitefish, Montana, United States
            </p>
            <div className="price">
              <div className="prices">
                <span className="price-tag">$10,000</span>
                <span>/night</span>
              </div>
              <div className="rating">
                <StarIcon className="star" fontSize="small" />
                5.0
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="fav-icon">
          <FavoriteBorderOutlinedIcon fontSize="small" className="icon" />
        </div>
      </Grid>

      {/* First Card */}
      <Grid item xs={12} sm={6} md={3} className="grid">
        <Card className="card" onClick={onhandleToggleDrawer}>
          <img
            src={img2}
            alt="Image 1"
            style={{ width: "100%" }}
            className="booklist-img"
          />
          <CardContent className="booklist-content">
            <h2 className="booklist-title">
              Luxury Stay in Weston, Saint James, Barbados
            </h2>
            <p className="booklist-desc">Weston, Saint James, Barbados</p>
            <div className="price">
              <div className="prices">
                <span className="price-tag">$1,500</span>
                <span>/night</span>
              </div>
              <div className="rating">
                <StarIcon className="star" fontSize="small" />
                5.00
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="fav-icon">
          <FavoriteBorderOutlinedIcon fontSize="small" className="icon" />
        </div>
      </Grid>
      {/* First Card */}
      <Grid item xs={12} sm={6} md={3} className="grid">
        <Card className="card" onClick={onhandleToggleDrawer}>
          <img
            src={img3}
            alt="Image 1"
            style={{ width: "100%" }}
            className="booklist-img"
          />
          <CardContent className="booklist-content">
            <h2 className="booklist-title">
              Numer 22 - Lake Como-Design Living & Lake View
            </h2>
            <p className="booklist-desc">Laglio, Lombardia, Italy</p>
            <div className="price">
              <div className="prices">
                <span className="price-tag">$359</span>
                <span>/night</span>
              </div>
              <div className="rating">
                <StarIcon className="star" fontSize="small" />
                4.99
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="fav-icon">
          <FavoriteBorderOutlinedIcon fontSize="small" className="icon" />
        </div>
      </Grid>
      {/* First Card */}
      <Grid item xs={12} sm={6} md={3} className="grid">
        <Card className="card" onClick={onhandleToggleDrawer}>
          <img
            src={img4}
            alt="Image 1"
            style={{ width: "100%" }}
            className="booklist-img"
          />
          <CardContent className="booklist-content">
            <h2 className="booklist-title">
              7,500sq ft Private Beachfront Estate
            </h2>
            <p className="booklist-desc">Dubai, United Arab Emirate</p>
            <div className="price">
              <div className="prices">
                <span className="price-tag">$2,478</span>
                <span>/night</span>
              </div>
              <div className="rating">
                <StarIcon className="star" fontSize="small" />
                4.73
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="fav-icon">
          <FavoriteBorderOutlinedIcon fontSize="small" className="icon" />
        </div>
      </Grid>
      {/* First Card */}
      <Grid item xs={12} sm={6} md={3} className="grid">
        <Card className="card" onClick={onhandleToggleDrawer}>
          <img
            src={img5}
            alt="Image 1"
            style={{ width: "100%" }}
            className="booklist-img"
          />
          <CardContent className="booklist-content">
            <h2 className="booklist-title">
              Bohemian & Spacious / Private Pool and Garden
            </h2>
            <p className="booklist-desc">Tulum, Quintana Roo, Mexico</p>
            <div className="price">
              <div className="prices">
                <span className="price-tag">$199</span>
                <span>/night</span>
              </div>
              <div className="rating">
                <StarIcon className="star" fontSize="small" />
                4.97
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="fav-icon">
          <FavoriteBorderOutlinedIcon fontSize="small" className="icon" />
        </div>
      </Grid>
      {/* First Card */}
      <Grid item xs={12} sm={6} md={3} className="grid">
        <Card className="card" onClick={onhandleToggleDrawer}>
          <img
            src={img6}
            alt="Image 1"
            style={{ width: "100%" }}
            className="booklist-img"
          />
          <CardContent className="booklist-content">
            <h2 className="booklist-title">
              Designer A-Frame Cabin in the Trees
            </h2>
            <p className="booklist-desc">
              Lake Arrowhead, California, United States
            </p>
            <div className="price">
              <div className="prices">
                <span className="price-tag">$225</span>
                <span>/night</span>
              </div>
              <div className="rating">
                <StarIcon className="star" fontSize="small" />
                4.93
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="fav-icon">
          <FavoriteBorderOutlinedIcon fontSize="small" className="icon" />
        </div>
      </Grid>
      {/* First Card */}
      <Grid item xs={12} sm={6} md={3} className="grid">
        <Card className="card" onClick={onhandleToggleDrawer}>
          <img
            src={img7}
            alt="Image 1"
            style={{ width: "100%" }}
            className="booklist-img"
          />
          <CardContent className="booklist-content">
            <h2 className="booklist-title">
              Fully Renovated 2 BR on River w/Pool - Walk to To
            </h2>
            <p className="booklist-desc">Aspen, Colorado, United States</p>
            <div className="price">
              <div className="prices">
                <span className="price-tag">$546</span>
                <span>/night</span>
              </div>
              <div className="rating">
                <StarIcon className="star" fontSize="small" />
                5.0
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="fav-icon">
          <FavoriteBorderOutlinedIcon fontSize="small" className="icon" />
        </div>
      </Grid>
      {/* First Card */}
      <Grid item xs={12} sm={6} md={3} className="grid">
        <Card className="card" onClick={onhandleToggleDrawer}>
          <img
            src={img8}
            alt="Image 1"
            style={{ width: "100%" }}
            className="booklist-img"
          />
          <CardContent className="booklist-content">
            <h2 className="booklist-title">
              Mognolia&apos;s Hillcrest Cottage
            </h2>
            <p className="booklist-desc">Waco, Texas, United States</p>
            <div className="price">
              <div className="prices">
                <span className="price-tag">$500</span>
                <span>/night</span>
              </div>
              <div className="rating">
                <StarIcon className="star" fontSize="small" />
                4.97
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="fav-icon">
          <FavoriteBorderOutlinedIcon fontSize="small" className="icon" />
        </div>
      </Grid>
      {/* First Card */}
      <Grid item xs={12} sm={6} md={3} className="grid">
        <Card className="card" onClick={onhandleToggleDrawer}>
          <img
            src={img9}
            alt="Image 1"
            style={{ width: "100%" }}
            className="booklist-img"
          />
          <CardContent className="booklist-content">
            <h2 className="booklist-title">
              Unique Architecture Cave House by Cycladica
            </h2>
            <p className="booklist-desc">Oia, South Aegean, Greece</p>
            <div className="price">
              <div className="prices">
                <span className="price-tag">$930</span>
                <span>/night</span>
              </div>
              <div className="rating">
                <StarIcon className="star" fontSize="small" />
                4.95
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="fav-icon">
          <FavoriteBorderOutlinedIcon fontSize="small" className="icon" />
        </div>
      </Grid>
      {/* First Card */}
      <Grid item xs={12} sm={6} md={3} className="grid">
        <Card className="card" onClick={onhandleToggleDrawer}>
          <img
            src={img10}
            alt="Image 1"
            style={{ width: "100%" }}
            className="booklist-img"
          />
          <CardContent className="booklist-content">
            <h2 className="booklist-title">ATELIER ArtVillas Costa Rico</h2>
            <p className="booklist-desc">Uvita, Osa, Puntaneras, Costa Rica</p>
            <div className="price">
              <div className="prices">
                <span className="price-tag">$830</span>
                <span>/night</span>
              </div>
              <div className="rating">
                <StarIcon className="star" fontSize="small" />
                4.8
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="fav-icon">
          <FavoriteBorderOutlinedIcon fontSize="small" className="icon" />
        </div>
      </Grid>
      {/* First Card */}
      <Grid item xs={12} sm={6} md={3} className="grid">
        <Card className="card" onClick={onhandleToggleDrawer}>
          <img
            src={img11}
            alt="Image 1"
            style={{ width: "100%" }}
            className="booklist-img"
          />
          <CardContent className="booklist-content">
            <h2 className="booklist-title">
              Mountainside Luxury Cabin with Batulao View
            </h2>
            <p className="booklist-desc">Calacaa, Calabarzon, Philippines</p>
            <div className="price">
              <div className="prices">
                <span className="price-tag">$483</span>
                <span>/night</span>
              </div>
              <div className="rating">
                <StarIcon className="star" fontSize="small" />
                4.87
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="fav-icon">
          <FavoriteBorderOutlinedIcon fontSize="small" className="icon" />
        </div>
      </Grid>
    </Grid>
  );
}

export default BookList;
