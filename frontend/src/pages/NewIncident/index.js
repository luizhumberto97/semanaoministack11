import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident(){
  const [title,setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  //Pegar o id
  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e){
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    };

    try{
      await api.post('incidents', data, {
        headers:{
          Authorization: ongId,
        }
      })
      history.push('/profile');
    }catch(err){
      alert('Erro ao cadastrar caso, tente novamente')
    }
  }


  return(
    <div className="new-incident-container">
      <div className="content">
      <section>
      <img src={logoImg} alt="Be THe HEro"/>

      <h1>Cadastrar novo caso</h1>
      <p>DEscreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
      <Link className="back-link" to="/profile">
          <FiArrowLeft size={16} color="#E02041" />
          Voltar para home
        </Link>
      </section>

      <form onSubmit={handleNewIncident} action="">
        <input type="text" 
          placeholder="Título do caso"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea type="email" 
          placeholder="Descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
          />
        <input type="text" 
          placeholder="Valor em reais"
          value={value}
          onChange={e => setValue(e.target.value)}
          />
        

        <button className="button" type="submit">Cadastrar</button>
      </form>

      </div>
    </div>
  )
}