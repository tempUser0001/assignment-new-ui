/**
 * ## view
 * @compnent
 * renders main app view
 */
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions/favorites";
import * as api from "../axios/api";
import { Header } from "./header";
import { SvgSection } from "./svgSection";
import { FavSection } from "./favSection";

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: {},
      view: "searchView",
      filterValue: ""
    };
    this.searchString = this.searchString.bind(this);
    this.filterString = this.filterString.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  /**
   * ## searchString
   * @method
   * @param {string} value - search itunes api for value
   *                         filter results to match artist name and remove duplicates
   *                         map to new object
   *                         set albums in state
   */
  searchString(value) {
    api.searchApi(value).then(result => {
      const collections = [];
      this.setState({
        albums: [...result]
          .filter(item => {
            if (
              item.artistName.toLowerCase().includes(value.toLowerCase()) &&
              !collections.includes(item.collectionId)
            ) {
              collections.push(item.collectionId);
              return true;
            }
            return false;
          })
          .map(item => ({
            collection: item.collectionName,
            collectionId: item.collectionId,
            artist: item.artistName.toUpperCase(),
            image: item.artworkUrl100.replace("100x100", "300x300"),
            preview: item.previewUrl
          }))
      });
      this.setState({ albumCount: this.state.albums.length });
      const albumList = [...this.state.albums];
      while (this.state.albums.length < 9 && this.state.albums.length > 0) {
        this.setState({
          albums: [...this.state.albums, ...albumList]
        });
      }
    });
  }

  /**
   * ## filterString
   * @method
   * @param {string} value - call redux filter action with value
   */
  filterString(value) {
    this.setState({ filterValue: value });
    this.props.action.filterFavorites(value);
  }

  /**
   * ## componentWillUpdate
   * @method
   * @param {array} nextProps
   * @param {array} nextState - unsets and sets favorites on search results
   *                            so add button is displayed or removed
   */
  componentWillUpdate(nextProps, nextState) {
    nextState.albums.length &&
      nextState.albums
        .filter(album => album.isFavorite === true)
        .forEach(album => (album.isFavorite = false));
    nextProps.favorites.length &&
      nextProps.favorites.forEach(favorite => {
        nextState.albums
          .filter(album => favorite.collectionId === album.collectionId)
          .forEach(album => (album.isFavorite = true));
      });
  }

  /**
   * ## toggleView
   * @method
   * toggle for updating the view type
   */
  toggleView() {
    this.setState({
      view: this.state.view === "searchView" ? "favoriteView" : "searchView"
    });
  }

  /**
   * ## toggleFavorite
   * @method
   * toggle favorite and maintain filter
   */
  toggleFavorite(album) {
    album.isFavorite
      ? this.props.action.removeFavorite(album)
      : this.props.action.addFavorite(album);
    this.state.filterValue.length > 0 &&
      this.props.action.filterFavorites(this.state.filterValue);
  }

  render() {
    return (
      <main className={this.state.view}>
        <Header
          searchString={this.searchString}
          filterString={this.filterString}
          albumCount={this.state.albumCount}
          view={this.state.view}
          toggleView={this.toggleView}
        />
        <SvgSection albums={this.state.albums} action={this.toggleFavorite} />
        <FavSection
          favorites={this.props.favorites}
          action={this.toggleFavorite}
        />
      </main>
    );
  }
}

/**
 * ## mapStateToProps
 * @method
 * @param {object} state - updates favorites prop and filters if filterString is defined as the last item in albums
 */
const mapStateToProps = state => {
  const { albums } = state;
  const lastItem = albums.slice(-1);
  const filterString =
    lastItem.length && lastItem[0].hasOwnProperty("filterString")
      ? albums.pop().filterString
      : undefined;
  return {
    favorites: filterString
      ? albums.filter(item =>
          item.artist.toLowerCase().includes(filterString.toLowerCase())
        )
      : albums
  };
};

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
