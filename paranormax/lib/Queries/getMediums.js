import {gql} from "@apollo/client";

//  query to get all user that are assigned to the "mediums" Usergroup
const GET_MEDIUMS = gql`
      query getMediums {
  users(group: "mediums") {
    id
    email
    firstName
    lastName
    photo {
      url
    }
    dateUpdated
    username
  }
}
`;

export default GET_MEDIUMS;