import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalProvider';
import styles from "../Styles/Footer.module.scss";

const Footer = () => {
  const { theme } = useContext(GlobalContext);
  const themeClass = theme === 'dark' ? 'dark' : 'light';

  return (
    <div className={`${styles.contFooter} ${styles[themeClass]}`}>
        <div className={styles.logoCont}>
            <img src="https://simplepassbucket.s3.sa-east-1.amazonaws.com/img/Dientto/diente.png" alt="Logo" />
            <div className={styles.conNombre}>
              <p className={styles.navTitle}>DIENTTO</p>
              <span>Centro odontológico</span>
            </div>
        </div>
        <div className={styles.navItems}>
            <Link to="/dentistas" className={`${styles.navItem} ${styles[themeClass]}`}>Dentistas</Link>
            <Link to="/favs" className={`${styles.navItem} ${styles[themeClass]}`}>Favoritos</Link>
            <Link to="/contacto" className={`${styles.navItem} ${styles[themeClass]}`}>Contáctanos</Link>
        </div>
        <p className={styles.developerText}>Desarrollado por Octavio Gonzalez Manucci</p>
    </div>
  );
}

export default Footer;
