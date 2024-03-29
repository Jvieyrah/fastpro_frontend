import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPokemons } from '../axios/config';

function PokemonCard(props) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [img, setImg] = useState('');
  const {
    name,
    url,
  } = props;

  const importPokemons = async () => {
    const endpoint = url.slice(25);
    await await getPokemons.get(endpoint)
      .then((response) => {
        const { height, weight, } = response.data;
        const { front_shiny } = response.data.sprites;
        console.log(response);
        setHeight(height);
        setWeight(weight);
        setImg(front_shiny);
      })
  }

  useEffect(() => {
    importPokemons();
  }, [name]);

  return (
    <section className="pokemon-card">
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <p> altura: {height} in</p>
      <p> peso: {weight} lbs</p>
    </section>
  );
}


PokemonCard.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
}.isRequired;


export default PokemonCard;
