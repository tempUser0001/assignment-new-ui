/**
 * ## album
 * @component
 * renders an album
 */
import React from "react";
import { FavAlbum } from "./favAlbum";

export class FavSection extends React.Component {
  constructor(props) {
    super(props);
    this.onClickAction = this.onClickAction.bind(this);
  }

  /**
   * ## onClickAction
   * @method
   * @param {object} album - performs supplied action with album
   */
  onClickAction(album) {
    this.props.action(album);
  }

  render() {
    const listFavorites = Object.keys(this.props.favorites).map((key, idx) => (
      <FavAlbum
        key={key}
        album={this.props.favorites[key]}
        action={this.onClickAction}
      />
    ));

    return (
      <section className="favsSection">
        <ul className="favsList">{listFavorites}</ul>
      </section>
    );
  }
}
