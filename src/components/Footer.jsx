import '../styles/Footer.css';
import githubIcon from "../assets/github-mark-white.png";
import linkedInIcon from "../assets/LI-Logo-White.png";

function Footer() {
    return (
      <footer className="footer">
        <a href="https://github.com/KRWeidner">
            <img className='icon' src={githubIcon} alt="GitHub Icon"></img>
        </a>
        <a href="https://www.linkedin.com/in/katy-weidner-aa5200156/">
            <img className='icon' src={linkedInIcon} alt="GitHub Icon"></img>
        </a>
        <a href="https://github.com/KRWeidner">
            <img className='icon' src={githubIcon} alt="GitHub Icon"></img>
        </a>
      </footer>
    );
  }
  
  export default Footer;
