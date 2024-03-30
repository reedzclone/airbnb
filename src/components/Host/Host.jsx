import "./Host.css";
import host from "../../assets/image/host.jpg";

function Host() {
  return (
    <div className="host-wrapper">
      <p className="host">Host</p>
      <div className="host-top">
        <div className="host-profile-wrapper">
          <img src={host} alt="" />
          <div className="host-profile">
            <p className="host-title">Hosted by Brenda</p>
            <p className="host-title-desc">Joined in August 2014</p>
          </div>
        </div>
        <div className="host-contact">Contact Host</div>
      </div>
      <div className="host-rating">
        <p>2,635 reviews</p>
        <p>Identity verified</p>
        <p>Superhost</p>
      </div>
      <p className="host-desc">
        As a mother of 4, living in Solana Beach for 25+ years, I love to help
        families enjoy our beautiful area. Vacations are special and we do our
        very best to make them affordable, enjoy…
      </p>

      <div className="host-view">View more</div>
    </div>
  );
}

export default Host;
