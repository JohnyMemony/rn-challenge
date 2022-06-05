import createCompleteTodo from './completeTodo/completeTodo';
import { todosVar } from '../../apollo-client';

export const todoMutations = {
  completeTodo: createCompleteTodo(todosVar),
}
