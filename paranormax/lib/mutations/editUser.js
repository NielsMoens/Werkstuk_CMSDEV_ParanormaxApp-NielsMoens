// import {gql} from "@apollo/client";
//
// // WIP Mutation to edit an existing user TODO
// export const REGISTER_USER = gql`
//   mutation RegisterUser($email: String!, $password: String!) {
//       register(email: $email, password: $password) {
//         jwt
//         jwtExpiresAt
//         refreshToken
//         refreshTokenExpiresAt
//         schema
//         user {
//           ... on User {
//             id
//             email
//             firstName
//             lastName
//             username
//           }
//         }
//       }
//     }
// `;