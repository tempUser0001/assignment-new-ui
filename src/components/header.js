/**
 * ## search
 * @compnent
 * renders search header
 */
import React from "react";

export const Header = props => {
  /**
   * ## keyDown
   * @method
   * @param {event} evt - submits search if enter is pressed
   */
  const keyDown = evt =>
    props.view === "searchView" && evt.keyCode === 13 && onSearch();

  /**
   * ## keyUp
   * @method
   * @param {event} evt - updates favorite filter
   */
  const keyUp = evt =>
    props.view === "favoriteView" && props.filterString(evt.target.value);

  /**
   * ## onSearch
   * @method
   * submits search
   */
  const onSearch = () =>
    props.view === "searchView" &&
    props.searchString(document.getElementById("search").value);

  /**
   * ## toggleView
   * @method
   * toggles the view and clears the input field
   */
  const toggleView = () => {
    document.getElementById("search").value = "";
    props.toggleView();
  };

  return (
    <header>
      <nav
        className="search"
        data-icon={props.view === "favoriteView" ? "\uf0b0" : "\ue810"}
      >
        <input
          id="search"
          className="searchTerm"
          placeholder="artist name..."
          autoComplete="off"
          onKeyUp={keyUp.bind(this)}
          onKeyDown={keyDown.bind(this)}
        />
        <button className="searchButton" onClick={onSearch.bind(this)} />
        <button className="favoritesButton" onClick={toggleView.bind(this)}>
          {props.view === "favoriteView" ? "\ue810" : "\ue800"}
        </button>
      </nav>
      <span>
        {props.albumCount > 0 ? props.albumCount : "No"} albums found.
      </span>
    </header>
  );
};
