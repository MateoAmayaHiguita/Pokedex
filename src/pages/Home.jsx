import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Home/Footer";
import { setNameTrainer } from "../store/slices/trainerName.slice";
import "./styles/home.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setNameTrainer(e.target.name.value.trim()));
    e.target.name.value = "";
    navigate("/pokedex");
  };

  return (
    <div className="home_container">
      <img className="home_img-error" src="/images/pokedex-img.png" alt="" />
      <section className="home_container-title">
        <h2 className="home_title">¡Hi Trainer!</h2>
        <p className="home_subtitle">
          To star this pokedex, give me your name{" "}
        </p>
      </section>
      <form className="home_form" onSubmit={handleSubmit}>
        <input className="home_input" id="name" type="text" />
        <button className="home_button">Start</button>
      </form>
      <Footer />
    </div>
  );
};

export default Home;
