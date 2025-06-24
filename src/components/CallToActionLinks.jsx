import Button from "./Button";
import "../styles/CallToActionLinks.css";

const CallToActionLinks = ({ links }) => {
  return (
    <ul className="cta-links">
      {links.map((link, index) => (
        <li className="cta-link" key={index}>
          <p>{link.original}</p>
          <div>
            <a href="#">{link.short}</a> <Button label="Copy" size="small" />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CallToActionLinks;
