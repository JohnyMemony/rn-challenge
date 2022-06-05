import { ApolloClient, InMemoryCache, makeVar, ReactiveVar } from '@apollo/client';
import { TodoItem } from '../types/todo';

const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read() {
            return todosVar();
          }
        },
      }
    }
  }
});

const todosInitialValue: TodoItem[] = [
  { id: 1, title: 'Call carpenter to fix kitchen pipe', completed: false },
  { id: 2, title: 'Pick Melanie from football game', completed: false },
  { id: 3, title: 'Help Andreas with homework', completed: false },
  { id: 4, title: 'Pick Melanie from football game', completed: false },
]

export const todosVar: ReactiveVar<TodoItem[]> = makeVar<TodoItem[]>(
  todosInitialValue
);

export const client = new ApolloClient({
  uri: 'localhost:4000/graphql',
  cache: cache,
});
