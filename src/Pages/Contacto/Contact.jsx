import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalProvider';
import styles from './Form.module.scss';

const Form = () => {
  const { theme } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false); 
  const validateForm = () => {
    if (formData.name.length <= 5 || !/\S+@\S+\.\S+/.test(formData.email)) {
      setMessage('Por favor verifique su información nuevamente');
      setIsError(true);
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setMessage(`Gracias ${formData.name}, te contactaremos cuando antes vía mail`);
      setIsError(false); 
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    setMessage('');
  };

  return (
    <div className={`${styles.formContainer} ${styles[theme]}`}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre completo:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          placeholder='Mayor a 5 dígitos'
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Ingresa un email válido'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
        {message && <p className={isError ? styles.errorMessage : styles.successMessage}>{message}</p>}
      </form>
    </div>
  );
};

export default Form;

