import {gql} from "@apollo/client";

const GET_LOGINDATA = gql`
    query MyQuery {
      entries(section: "assigments") {
        id
        title
      }
    }
    `;

export default GET_LOGINDATA;