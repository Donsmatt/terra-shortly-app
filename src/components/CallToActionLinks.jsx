import Button from "./Button";
import "../styles/CallToActionLinks.css";

const CallToActionLinks = () => {
  return (
    <ul className="cta-links">
      <li className="cta-link">
        <p>Lengthy URL 1</p>
        <div>
          <a href="#">Shortened URL 1</a> <Button label="Copy" size="small" />
        </div>
      </li>
      <li className="cta-link">
        <p>Lengthy URL 2</p>
        <div>
          <a href="#">Shortened URL 2</a> <Button label="Copy" size="small" />
        </div>
      </li>
      <li className="cta-link">
        <p>Lengthy URL 3</p>
        <div>
          <a href="#">Shortened URL 3</a> <Button label="Copy" size="small" />
        </div>
      </li>
    </ul>
  );
};

export default CallToActionLinks;
