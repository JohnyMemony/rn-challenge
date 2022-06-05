import gql from 'graphql-tag';

export const GET_TODO_ITEMS_QUERY = gql`
  query GetToDoItems {
    todos @client {
      id
      title
      completed
    }
  }
`;
