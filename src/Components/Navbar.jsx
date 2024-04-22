import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalProvider';
import styles from '../Styles/Navbar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
    document.body.classList.toggle('bodyShift'); // Toggle shift class on body or main content
  }

  static contextType = GlobalContext;

  render() {
    const { theme, toggleTheme } = this.context;
    const { isMenuOpen } = this.state;
    const themeClass = theme === 'dark' ? 'dark' : 'light';
    const toggleButtonText = theme === 'dark' ? 'Modo claro' : 'Modo oscuro';

    return (
      <nav className={`${styles.navbar} ${styles[themeClass]}`}>
        <div className={styles.navContent}>
          <Link to="/home">
          <div className={`${styles.logoCont} ${styles[themeClass]}`}>
            <img src="https://simplepassbucket.s3.sa-east-1.amazonaws.com/img/Dientto/diente.png" alt="Logo" />
            <div className={styles.conNombre}>
              <p className={styles.navTitle}>DIENTTO</p>
              <span>Centro odontológico</span>
            </div>
          </div>
          </Link>

          <div className={`${styles.hamburger} ${styles[themeClass]}`} onClick={this.toggleMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
          <div className={`${styles.navItems} ${isMenuOpen ? styles.menuOpen : ''} ${styles[themeClass]}`}>
            <Link to="/home" className={`${styles.navItem} ${styles[themeClass]}`}>Dentistas</Link>
            <Link to="/favs" className={`${styles.navItem} ${styles[themeClass]}`}>Favoritos <FontAwesomeIcon icon={faBookmark} /></Link>
            <Link to="/contacto" className={`${styles.navItem} ${styles[themeClass]}`}>Contáctanos</Link>
            <button onClick={toggleTheme} className={`${styles.navButton} ${styles[themeClass]}`}>
              {toggleButtonText}
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

