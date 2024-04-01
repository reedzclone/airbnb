import "./BookList.css";
import { Grid, Card, CardContent } from "@mui/material";

// import Data from "../../Data.json";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

// eslint-disable-next-line react/prop-types
function BookList({ onhandleToggleDrawer }) {
  return (
    <Grid container spacing={4}>
      {/* First Card */}
      <Grid item xs={12} sm={6} md={3} className="grid">
        <Card className="card" onClick={onhandleToggleDrawer}>
          <img
            src="https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/v2/LOKANVH4QVBJ3BPA66BXKY6YA4.jpeg?smart=true&auth=49ca7aafa684a8048b4c4a58813a95e81ac87236c444ac70df81d6829a1efee4&width=800&height=533"
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
            src="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/06/Airbnb-interior-design-ideas-Joshua-Tree-House.jpeg"
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
            src="https://i.pinimg.com/736x/70/a8/ab/70a8ab5aa285df3fa6c8b95d497dadcd.jpg"
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
            src="https://hips.hearstapps.com/bestproducts/assets/18/03/1516295489-vale-garden-residence.jpg"
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
            src="https://lh5.googleusercontent.com/p/AF1QipNL62rL3Qa08ZD6qE_k-rEHP-rcXIdmQ0o9pK_0"
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfk52AXedTE5gnZUILkB7QNni3kukJL5CuUyYiDXRjMZAQdprFgj7YaVgbU_tDHf26YdY&usqp=CAU"
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
            src="https://www.kayak.com/rimg/himg/92/45/23/expediav2-2280584-3634716287-870868.jpg?width=968&height=607&crop=true"
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
            src="https://www.stayingcool.com/wp-content/uploads/2019/05/Staying-Cool-Birmingham-Apart-Hotel-penthouse-balcony-2.webp"
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
            src="https://cdn.citybaseapartments.com/blog/cba-media/2020-03/stay_1.jpg?ooMediaId=6246"
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
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/120186434.jpg?k=e90f0699faa2c50da67ec560c749695f49621c42812fe256270c8810aa98fbd1&o=&hp=1"
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
            src="https://image-tc.galaxy.tf/wijpeg-7k0esu99qkbawe4difb9vsyvo/bedroom-image1_standard.jpg?crop=107%2C0%2C1707%2C1280"
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
