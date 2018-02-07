/**
 * ## album
 * @component
 * renders an album
 */
import React from "react";
import { SharedDefs } from "./svgShared";
import { SvgAlbum } from "./svgAlbum";

let playing = false;
let player = null;
let lastUrl = "";

export class SvgSection extends React.Component {
  constructor(props) {
    super(props);
    this.onClickAction = this.onClickAction.bind(this);
    this.onClickRotate = this.onClickRotate.bind(this);
    this.state = {
      svgList: false
    };
  }

  componentDidMount() {
    this.setState({ svgList: document.querySelector("#svgList") });
  }

  /**
   * ## onClickRotate
   * @method
   * rotates the elements in the DOM
   */
  onClickRotate(e) {
    const clickPoint =
      window.innerWidth > window.innerHeight
        ? e.clientX > window.innerWidth >> 1
        : e.clientY > window.innerHeight >> 1;
    if (this.state.svgList) {
      if (clickPoint) {
        this.state.svgList.appendChild(
          this.state.svgList.removeChild(this.state.svgList.firstElementChild)
        );
      } else {
        this.state.svgList.insertBefore(
          this.state.svgList.lastElementChild,
          this.state.svgList.firstElementChild
        );
      }
    }
  }

  /**
   * ## onClickAction
   * @method
   * @param {object} album - performs supplied action with album
   */
  onClickAction(album) {
    this.props.action(album);
  }

  /**
   * ## playURL
   * @method
   * @param {string} url - plays a single audio instance
   */
  playURL(url, callback) {
    if (playing && lastUrl === url) {
      player.pause();
      playing = false;
      return;
    }
    lastUrl = url;
    playing && player.pause();
    player = new Audio(url);
    playing = true;
    player.addEventListener("ended", () => {
      playing = false;
      callback();
    });
    player.addEventListener("pause", () => {
      callback();
    });
    player.play();
  }

  render() {
    const listAlbums = Object.keys(this.props.albums).map((key, idx) => (
      <SvgAlbum
        key={key}
        idx={idx}
        album={this.props.albums[key]}
        action={this.onClickAction}
        play={this.playURL}
      />
    ));

    return (
      <section className="svgSection">
        <SharedDefs />
        <ul className="svgList" id="svgList" onClick={this.onClickRotate}>
          {listAlbums}
        </ul>
      </section>
    );
  }
}
