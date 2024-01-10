import React from "react";
import "./header.css";

export function Header() {
  return (
    <header>
      <div className="title">
        <p className="title-text">Админка фильмотеки</p>
      </div>
      <div className="container-author">
        <p className="author">Ну сделал абсолютно точно Макар Линкер</p>
      </div>
    </header>
  );
}
