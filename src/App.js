import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [nama, setNama] = useState();
  const [hasil, setHasil] = useState(null);

  function typing(e) {
    setNama(e.target.value);
  }

  function click() {
    async function getData() {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon/' + nama);
      setHasil(res.data);
    }
    getData();
  }

  return (
    <div className="App">
      <img src="pokemon.png" width="100" alt="" />
      <h1 className="title">PokeWho?</h1>
      <p>Find your Pokemon Now !</p>
      <div className="form">
        <input type="text" placeholder="Enter your Pokemon's name !" onChange={typing} />
        <button onClick={click}> Find </button>
      </div>
      {hasil && (
        <div className="content">
          <h2>Your Pokemon result :</h2>

          <img src={hasil.sprites.other['official-artwork'].front_default} alt="pokemonsimg" width="100" />
          <h3>Name: {hasil.name} </h3>
          <p>ID: {hasil.id} </p>
          <p>Weight: {hasil.weight}</p>
        </div>
      )}
      <footer>
        <i>created by shev &copy;</i>
      </footer>
    </div>
  );
}

export default App;
