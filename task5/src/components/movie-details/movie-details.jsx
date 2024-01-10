import React from "react";
import { EditIcon } from "../assets/edit-icon";
import "./movie-details.css";

const MovieDetails = ({
  movie,
  callEditMovie
}) => {
  return (
    <div className="movie-details">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p className="id">Id: {movie.id}</p>
        <button
          className="edit-btn"
          onClick={() => {
            callEditMovie();
          }}
        >
          <EditIcon/>
          <p className="edit-text">Редактировать</p>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
        }}
      >
        <img
          className="image"
          src={movie.posterUrl}
          alt="img of film"
        ></img>
        <div className="info">
          <p className="title-of-film">{movie.title}</p>
          <p className="param" style={{ marginTop: 0 }}>
            {movie.director}
          </p>
          <p className="title-param">Параметры</p>
          <PropsOfFilm nameParam='Год производства' value = {movie.year}/>
          <PropsOfFilm nameParam='Длительность' value = {movie.runtime + 'мин.'}/>
          <PropsOfFilm nameParam='Жанры' value = {movie.genres.join(", ")}/>
          <PropsOfFilm nameParam='В главных ролях' value = {movie.actors}/>
        </div>
      </div>
      <p>Описание</p>
      <p>{movie.plot}</p>
    </div>
  );
};

export default MovieDetails;

const PropsOfFilm = ({
  nameParam,
  value
}) => {
  return (
    <div className="container-param">
      <p className="param">{nameParam}</p>
      <p className="param-value">{value}</p>
    </div>
  );
}