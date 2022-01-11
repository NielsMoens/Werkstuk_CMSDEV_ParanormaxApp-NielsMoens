import {gql} from "@apollo/client";

const GET_ASSIGNMENTS = gql`
    query MyQuery {
      entries(section: "assigments") {
        id
        title
      }
    }
    `;

export default GET_ASSIGNMENTS;