import gql from "graphql-tag";
import { graphql } from "react-apollo";

export default gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      title
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
