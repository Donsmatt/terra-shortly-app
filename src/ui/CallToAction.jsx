import Button from "../components/Button";
import CallToActionLinks from "../components/CallToACtionLinks";

const CallToAction = () => {
  return (
    <section className="container">
      <div className="cta">
        <div className="cta-input-container">
          <input
            type="text"
            placeholder="Shorten a link here..."
            className="cta-input"
          />
          <Button label="Shorten it!" variant="primary" />
        </div>
        <CallToActionLinks />
      </div>
    </section>
  );
};

export default CallToAction;
