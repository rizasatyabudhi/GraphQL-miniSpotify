import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map((value, index) => {
      return (
        <li className="collection-item" key={index}>
          {value.title}
        </li>
      );
    });
  }
  render() {
    console.log(this.props);
    if (this.props.data.loading) {
      return <div>Loading ...</div>;
    }
    return <ul className="collection">{this.renderSongs()}</ul>;
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);
