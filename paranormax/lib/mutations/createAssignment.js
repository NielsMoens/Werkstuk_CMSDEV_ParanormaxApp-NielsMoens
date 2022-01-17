import {gql} from "@apollo/client";

const MUTATE_CREATE_ASSIGNMENT = gql`
   mutation createNewAssignment($title: String!) {
    save_assigments_default_Entry(
    title: $title
    assigmentStatus: 539
    authorId: 1
  ) {
    id
  }
}
`;

export default MUTATE_CREATE_ASSIGNMENT;
