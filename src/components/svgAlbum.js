/**
 * ## album
 * @compnent
 * renders an album
 */
import React from "react";
import * as api from "../axios/api";

export class SvgAlbum extends React.Component {
  constructor(props) {
    super(props);
    const colors = ["aqua", "blue", "orange", "purple"];
    const color = colors[props.idx % 4];
    this.state = {
      tracks: [],
      tracksBackup: [],
      filter: "url(#" + color + "Filter)",
      fill: color + "Fill",
      playIcon: "\ue80c"
    };
    this.playPreview = this.playPreview.bind(this);
    this.getTracks = this.getTracks.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }
  /**
   * ## playPreview
   * @method
   * plays audio preview and updates icon
   */
  playPreview(e) {
    e.stopPropagation();
    this.setState({ playIcon: "\ue80d" });
    this.props.play(this.props.album.preview, () => {
      this.setState({ playIcon: "\ue80c" });
    });
  }

  /**
   * ## getTracks
   * @method
   * get the tracks for the album
   */
  getTracks(e) {
    e.stopPropagation();
    if (this.state.tracks.length) {
      this.setState({ tracksBackup: [...this.state.tracks] });
      this.setState({ tracks: [] });
    } else if (this.state.tracksBackup.length) {
      this.setState({ tracks: [...this.state.tracksBackup] });
    } else {
      api.albumApi(this.props.album.collectionId).then(result => {
        this.setState({
          tracks: [...result]
            .filter(item => item.wrapperType === "track")
            .map(item => ({
              trackName: item.trackName,
              trackNumber: item.trackNumber,
              tracktime: (() => {
                let seconds = parseInt(item.trackTimeMillis, 10) / 1000;
                seconds = seconds % 3600;
                const minutes = parseInt(seconds / 60, 10);
                seconds = seconds % 60;
                return minutes + ":" + parseInt(seconds, 10);
              })()
            }))
        });
      });
    }
  }

  /**
   * ## toggleFavorite
   * @method
   * toggles album is favorite
   */
  toggleFavorite(e) {
    e.stopPropagation();
    this.props.action(this.props.album);
  }

  render() {
    const listTracks = Object.keys(this.state.tracks).map(track => (
      <li key={track}>
        {this.state.tracks[track].trackName}
        <p>{this.state.tracks[track].tracktime}</p>
      </li>
    ));
    return (
      <li className="svgAlbum">
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <g clipPath="url(#roundedEdges)">
            <image
              x="0"
              y="0"
              filter={this.state.filter}
              xlinkHref={this.props.album.image}
              width="100"
              height="100"
            />
            <rect width="100" height="25" y="75" className={this.state.fill} />
            <foreignObject
              height="15"
              width="90"
              x="5"
              y="85"
              requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            >
              <p xmlns="http://www.w3.org/1999/xhtml">
                {this.props.album.collection}
              </p>
            </foreignObject>
            <text
              className="icon"
              x="85"
              y="10"
              fill="gold"
              fontSize="10"
              onClick={this.toggleFavorite.bind(this)}
            >
              {this.props.album.isFavorite ? "\ue800" : "\ue801"}
            </text>
            <text
              className="icon"
              x="5"
              y="10"
              fill="#d4247d"
              fontSize="10"
              onClick={this.playPreview.bind(this)}
            >
              {this.state.playIcon}
            </text>
            <text
              className="icon"
              x="85"
              y="77"
              fill="#d4247d"
              fontSize="10"
              onClick={this.getTracks.bind(this)}
            >
              &#xf141;
            </text>
            <foreignObject
              height="59"
              width="90"
              x="5"
              y="12"
              requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            >
              <ol className="trackList">{listTracks}</ol>
            </foreignObject>
            <text
              x="50"
              y="83"
              textAnchor="middle"
              alignmentBaseline="central"
              fill="white"
              fontSize="7"
            >
              {this.props.album.artist.substr(0, 24)}
            </text>
          </g>
        </svg>
      </li>
    );
  }
}
