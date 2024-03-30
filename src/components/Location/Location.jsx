import "./Location.css";

function Location() {
  return (
    <div className="map-wrapper">
      <p className="map">Where you&apos;ll be</p>
      <div className="map-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84717.00787252453!2d-114.45280688575114!3d48.4295375858351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536669ab14afecb5%3A0xccca7a6b8837463e!2sWhitefish%2C%20MT%2059937%2C%20USA!5e0!3m2!1sen!2sng!4v1711802930442!5m2!1sen!2sng"
          width="600"
          height="450"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="map-title">Weston, Saint James, Barbados</div>
      <p className="map-desc">
        The property, given its close proximity to the refreshing hillside town
        of Tagaytay and clear blue beaches of Nasugbu, provides a quick escape
        from the hustle and bustle of city life.
      </p>
      <div className="location-view">View more</div>
      <hr />
    </div>
  );
}

export default Location;
