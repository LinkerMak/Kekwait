import React, { useState } from "react";
import "./add-movie.css";

const AddMovie = ({
  addMovie = null,
  setStateMovie= null,
  movie=null,
  stateMovie=null,
  editMovie=null,
  showMovie=null,
  setCurMovie = null,
}) => {
  const [formState, setFormState] = useState({});
  if (stateMovie === 'ADD') {
    return (
      <div className="form" id="add-form">
        <p className="title">Создание фильма</p>
        <div>
          <PropsOfFilm
            titleParam='Название фильма'
            inpPlaceholder="Введите название фильма"
            inpValue={formState.title}
            parametr='title'
            setFormState={setFormState}
          />
          <PropsOfFilm
            titleParam='Год выпуска'
            inpPlaceholder="Введите год выпуска"
            inpValue={formState.year}
            parametr='year'
            setFormState={setFormState}
          />
          <PropsOfFilm
            titleParam='Длительность'
            inpPlaceholder="Введите длительность"
            inpValue={formState.runtime}
            parametr='runtime'
            setFormState={setFormState}
          />
          <div className="params">
            <p className="title-param">Жанры</p>
            <input
              className="inp-param"
              placeholder="Введите жанры (через ,)"
              value={formState.genres}
              onChange={(e) => {
                setFormState((prevState) => ({...prevState, genres: e.target.value.split(',')}));
              }}
            />
          </div>
          <div className="params">
            <p className="title-param">Описание</p>
            <textarea
              className="inp-param"
              placeholder="Введите..."
              value={formState.plot}
              onChange={(e) => {
                setFormState((prevState) => ({...prevState, plot: e.target.value}));
              }}
            />
          </div>
          <PropsOfFilm
            titleParam='Укажите ссылку на обложку'
            inpPlaceholder="Введите..."
            inpValue={formState.posterUrl}
            parametr='posterUrl'
            setFormState={setFormState}
          />
          <PropsOfFilm
            titleParam='Укажите список актеров'
            inpPlaceholder="Введите актеров (через ,)"
            inpValue={formState.actors}
            parametr='actors'
            setFormState={setFormState}
          />
          <PropsOfFilm
            titleParam='Режиссер'
            inpPlaceholder="Введите режиссера фильма"
            inpValue={formState.director}
            parametr='director'
            setFormState={setFormState}
          />
        </div>
        <div className="line" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <button className="btn-search">
            <p
              className="text-search"
              onClick={() => {
                setStateMovie(null);
              }}
            >
              Отменить
            </p>
          </button>
          <button className="btn-add">
            <p
              className="btn-add-text"
              onClick={() => {
                addMovie(formState);
              }}
            >
              Сохранить
            </p>
          </button>
        </div>
      </div>
    );
  } else if (stateMovie === 'EDIT'){
    return (
      <div className="form" id="edit-form">
        <p className="title">Редактирование фильма</p>
        <div>
          <PropsOfFilm
            titleParam='Название фильма'
            inpPlaceholder="Введите название фильма"
            inpValue={movie.title}
            parametr='title'
            setFormState={setCurMovie}
          />
          <PropsOfFilm
            titleParam='Год выпуска'
            inpPlaceholder="Введите год выпуска"
            inpValue={movie.year}
            parametr='year'
            setFormState={setCurMovie}
          />
          <PropsOfFilm
            titleParam='Длительность'
            inpPlaceholder="Введите длительность"
            inpValue={movie.runtime}
            parametr='runtime'
            setFormState={setCurMovie}
          />
          <div className="params">
            <p className="title-param">Описание</p>
            <textarea
              className="inp-param"
              placeholder="Введите..."
              value={movie.plot}
              onChange={(e) => {
                setCurMovie((prevState) => ({...prevState, plot: e.target.value}));
              }}
            />
          </div>
          <PropsOfFilm
            titleParam='Укажите ссылку на обложку'
            inpPlaceholder="Введите..."
            inpValue={movie.posterUrl}
            parametr='posterUrl'
            setFormState={setCurMovie}
          />
          <PropsOfFilm
            titleParam='Укажите список актеров'
            inpPlaceholder="Введите актеров (через ,)"
            inpValue={movie.actors}
            parametr='actors'
            setFormState={setCurMovie}
          />
          <PropsOfFilm
            titleParam='Режиссер'
            inpPlaceholder="Введите режиссера фильма"
            inpValue={movie.director}
            parametr='director'
            setFormState={setCurMovie}
          />
        </div>
        <div className="line" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <button className="btn-search">
            <p
              className="text-search"
              onClick={() => {
                setStateMovie(null);
              }}
            >
              Отменить
            </p>
          </button>
          <button className="btn-add" style={{ marginLeft: 5, marginRight: 5 }}>
            <p
              className="btn-add-text"
              onClick={() => {
                editMovie(movie.id);
              }}
            >
              Сохранить
            </p>
          </button>
        </div>
      </div>
    );
  }
};

export default AddMovie;

const PropsOfFilm = ({
  titleParam,
  inpPlaceholder,
  inpValue,
  parametr,
  setFormState
}) => {
  return (
    <div className="params" >
      <p className="title-param">{titleParam}</p>
      <input
        name={parametr}
        className="inp-param"
        placeholder={inpPlaceholder}
        value={inpValue}
        onChange={(e) => {
          setFormState((prevState) => ({...prevState, [e.target.name]: e.target.value}));
        }}
      />
    </div>
  );
}