import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/SelectTypes.css";

const SelectTypes = ({ setSelectValue }) => {
  const [types, setTypes] = useState();

  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/type";
    axios
      .get(url)
      .then((res) => setTypes(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSelectValue(e.target.value);
  };
  return (
    <select className="select_container" onChange={handleChange}>
      <option className="select_all-pokemons" value="allPokemons">
        All Pokemons
      </option>
      {types?.results.map((type) => (
        <option className="select_option" key={type.url} value={type.url}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default SelectTypes;
