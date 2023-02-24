import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Home/Footer";
import Header from "../components/shared/Header";
import colors from "../utils/ColorTypes";
import "./styles/pokeInfo.css";

const PokeInfo = () => {
  const { id } = useParams();
  const [poke, setPoke] = useState();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const url = ` https://pokeapi.co/api/v2/pokemon/${id}`;
    axios
      .get(url)
      .then((res) => {
        setPoke(res.data);
        setHasError(false);
      })
      .catch((err) => {
        setHasError(true);
        console.log(err);
      });
  }, [id]);

  const colorTypes = poke?.types[0].type.name;

  if (hasError) {
    return (
      <div className="poke_error-container">
        <section className="header_info">
          <img
            className="header_img-info"
            src="/images/pokedex-pokedex.png"
            alt=""
          />
          <div className="header_black-info">
            <div className="header_circle-info">
              <div className="header_circle-int-info"></div>
            </div>
          </div>
        </section>
        <h1 className="poke_error">The Pokemon with name "{id}"" not found</h1>
        <img className="poke_error-img" src="/images/error.png" alt="" />
      </div>
    );
  } else {
    return (
      <div className="pokeInfo_container">
        <div className="headers">
          <Header />
        </div>
        <header className="pokeInfo_header">
          <div
            className="pokeHeader_img"
            style={{
              background: `linear-gradient(0deg, white 0 20%, ${colors[colorTypes]?.first} 22% 40%, ${colors[colorTypes]?.second} 43% 65%, ${colors[colorTypes]?.third} 68% 100%`,
            }}>
            <img
              className="img"
              src={poke?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </div>
          <h2 className="pokeId" style={{ color: colors[colorTypes]?.third }}>
            #{poke?.id}
          </h2>
          <h1
            className="pokeInfo_name"
            style={{ color: colors[colorTypes]?.third }}>
            {poke?.name}
          </h1>
        </header>
        <div className="pokeInfo_WH">
          <div className="pokeInfo_characteristic">
            <div className="pokeBox_chart">
              <h3
                className="poke_weight"
                style={{ background: colors[colorTypes]?.first }}>
                Weight
              </h3>
              <p className="poke-weight">{poke?.weight}</p>
            </div>
            <div className="pokeBox_chart">
              <h3
                className="poke_height"
                style={{ background: colors[colorTypes]?.first }}>
                Height
              </h3>
              <p className="poke-height">{poke?.height}</p>
            </div>
          </div>
        </div>
        <div className="poke_type-hability">
          <div className="box_TH">
            <h3
              className="type"
              style={{ background: colors[colorTypes]?.first }}>
              Type
            </h3>
            <div className="poke_types-habilites">
              {poke?.types.map((type) => (
                <span className="types" key={type.type.url}>
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>
          <div className="box_TH">
            <h3
              className="hability"
              style={{ background: colors[colorTypes]?.first }}>
              Habilities
            </h3>
            <div className="poke_types-habilites">
              {poke?.abilities.map((ability) => (
                <span className="habilities" key={ability.ability.url}>
                  {ability.ability.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <hr className="Hr" />
        <h1 className="poke_title-stats">Stats</h1>
        <div className="container_stats">
          {poke?.stats.map((stat) => (
            <div className="pokeStat_bar">
              <div className="text_bar">
                <span>{stat.stat.name}</span>
                <p>{stat.base_stat}/150</p>
              </div>
              <div
                className="bar"
                style={{
                  background: `linear-gradient(90deg, #E6901E 0, #FCD676 ${stat.base_stat}%, rgb(231, 231, 231) ${stat.base_stat}% 100%)`,
                }}></div>
            </div>
          ))}
        </div>
        <h2 className="move_title">Special Moves</h2>
        <section className="move_container">
          <div className="poke_moves">
            {poke?.moves.map((move) => (
              <h3 className="poke_name-move">{move.move.name}</h3>
            ))}
          </div>
        </section>
      </div>
    );
  }
};

export default PokeInfo;
