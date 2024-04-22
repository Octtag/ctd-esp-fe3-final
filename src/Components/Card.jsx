import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as fasBookmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import styles from "../Styles/Card.module.scss";

const Card = ({ dentist }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some(fav => fav.id === dentist.id));
  }, [dentist.id]);

  const toggleFavorite = (event) => {
    event.stopPropagation(); // Evita que el clic en el botón propague al enlace
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (isFavorite) {
      const filteredFavorites = favorites.filter(fav => fav.id !== dentist.id);
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
      setIsFavorite(false);
    } else {
      localStorage.setItem("favorites", JSON.stringify([...favorites, dentist]));
      setIsFavorite(true);
    }
  };

  return (
    <Link to={`/dentists/${dentist.id}`} className={styles.cardLink}> {/* Agrega Link envolviendo el contenido de la Card */}
      <div className={styles.card}>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="Dentist" />
          <div className={styles.info}>
            <h2>{dentist.name}</h2>
            <p>{dentist.address.city}</p>
            <p>{dentist.company.name}</p>
            <button onClick={toggleFavorite} className={styles.favoriteButton}>
              <FontAwesomeIcon icon={isFavorite ? fasBookmark : farBookmark} />
            </button>
          </div>
      </div>
    </Link>
  );
};

export default Card;
