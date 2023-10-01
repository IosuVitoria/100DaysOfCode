import "./footer.css";
import logoLinkedin from "../../../assets/linkedin_logo.png"
import logoGithub from "../../../assets/github_logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 Iosu Gómez Valdecantos</p>
        <p>Email: iosugvaldecantos@gmail.com</p>
      </div>
      <div className="footer-social">
        <a href='https://www.linkedin.com/in/iosu-gomez-biologo-analista/'>
          Iosu Gómez - Biólogo y Full Stack Developer <img src={logoLinkedin} alt="logo linkedin" />
        </a>
        <a href='https://github.com/IosuVitoria'>
          IosuVitoria <img src={logoGithub} alt="logo github" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
