import {gql} from "@apollo/client";

// Mutation to approve or decline a Medium that applied to an assignment
const MUTATE_QUEUED_USER_STATUS = gql`
   mutation SetQueuedUserStatus($authorId: ID!, $id: ID!, $status: [Int]!) {
      save_assignmentQueue_assignmentQueue_Entry(authorId: $authorId, id: $id, assigneeStatus: $status) {
        assignment {
          id
        }
        assignee {
          id
          name
        },
        assigneeStatus {
          id
          title
        }
      }
    }
`;

export default MUTATE_QUEUED_USER_STATUS;
