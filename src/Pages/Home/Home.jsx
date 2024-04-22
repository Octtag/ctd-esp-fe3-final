import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import Card from '../../Components/Card';
import { GlobalContext } from '../../Context/GlobalProvider'; // Asegúrate de que la ruta sea correcta

const Home = () => {
  const { theme, dentists, setDentists } = useContext(GlobalContext);

  useEffect(() => {
    if (dentists.length === 0) { // Sólo cargar dentistas si la lista está vacía
      const fetchData = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users');
          setDentists(response.data);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };

      fetchData();
    }
  }, [dentists, setDentists]);

  return (
    <main className={theme}>
      <h1 style={{margin:0,padding:10,fontSize:18,fontWeight:900}}>Dentistas disponibles</h1>
      <div className='card-grid'>
        {dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
}

export default Home;
