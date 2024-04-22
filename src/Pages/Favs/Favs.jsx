import React, { useEffect, useState, useContext } from "react";
import Card from "../../Components/Card";
import { GlobalContext } from '../../Context/GlobalProvider';
import styles from './Favs.module.scss';

const Favs = () => {
  const [favoriteDentists, setFavoriteDentists] = useState([]);
  const { theme } = useContext(GlobalContext);
  const themeClass = theme === 'dark' ? 'dark' : 'light';

  useEffect(() => {
    const loadedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavoriteDentists(loadedFavorites);
  }, []);

  return (
    <div className={`${styles.bodyFavs} ${styles[themeClass]}`}>
      <h1 className={styles.title}>Dentistas favoritos</h1>
      <div className={`${styles.cardGrid} ${styles[theme]}`}>
        {favoriteDentists.map(dentist => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </div>
  );
};

export default Favs;
