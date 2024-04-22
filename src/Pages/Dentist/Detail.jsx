import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../Context/GlobalProvider'; // Asegúrate de que el path sea correcto
import styles from './Detail.module.scss'; // Asegúrate de tener este archivo SCSS

const Detail = () => {
  const { id } = useParams();
  const { theme } = useContext(GlobalContext);
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setDentist(data);
    };

    fetchData();
  }, [id]);

  if (!dentist) {
    return <p>Loading...</p>;
  }

  return (
    
    <div className={`${styles.body} ${styles[theme]}`}>
      
      <div className={`${styles.detail} ${styles[theme]}`}>
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="Dentist" />
      <h1>Dentista id: {dentist.id}</h1>
      <p><strong>Nombre:</strong> {dentist.name}</p>
      <p><strong>Email:</strong> {dentist.email}</p>
      <p><strong>Teléfono:</strong> {dentist.phone}</p>
      <p><strong>Página web:</strong> {dentist.website}</p>
    </div>
    </div>
  );
};

export default Detail;
