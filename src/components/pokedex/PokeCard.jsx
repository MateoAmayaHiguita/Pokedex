import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/PokeCard.css";
import colors from "../../utils/ColorTypes";

const PokeCard = ({ pokemon }) => {
  const [poke, setPoke] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(pokemon.url)
      .then((res) => setPoke(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    navigate(`/pokedex/${poke.id}`);
  };

  const colorTypes = poke?.types[0].type.name;

  return (
    <article
      onClick={handleClick}
      className="card"
      style={{
        background: `linear-gradient(0deg, white 0 65%, ${colors[colorTypes]?.first} 65% 70%, ${colors[colorTypes]?.second} 80% 85%, ${colors[colorTypes]?.third} 95% 100%`,
        borderColor: colors[colorTypes]?.second,
      }}>
      <header className="card_header">
        <img
          className="card_avatar"
          src={poke?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <h2 className="card_name" style={{ color: colors[colorTypes]?.third }}>
        {poke?.name}
      </h2>
      <ul className="card_type-list">
        {poke?.types.map((type) => (
          <li className="card_type-item" key={type.type.name}>
            {type.type.name}
          </li>
        ))}
      </ul>
      <hr className="card_hr" />
      <ul className="card_stat-list">
        {poke?.stats.map((stat) => (
          <li className="card_stat-item" key={stat.stat.url}>
            <span className="card_stat-name">{stat.stat.name}</span>
            <span
              className="card_stat-number"
              style={{ color: colors[colorTypes]?.third }}>
              {stat.base_stat}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PokeCard;
