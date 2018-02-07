import React from "react";
export const FavAlbum = props => (
  <li
    className="favsAlbum"
    style={{ backgroundImage: `url(${props.album.image})` }}
  >
    <h1>
      {props.album.artist}
      <button className="icon" onClick={() => props.action(props.album)} />
    </h1>
    <p>{props.album.collection}</p>
  </li>
);
