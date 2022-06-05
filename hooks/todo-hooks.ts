import { gql, useMutation, useQuery } from '@apollo/client';
import { GET_TODO_ITEMS_QUERY } from '../graphql/queries/todo-queries';
import { useState } from 'react';
import { todoMutations } from '../graphql/mutations/todo';

export function useTodoList() {
  const { refetch } = useQuery(GET_TODO_ITEMS_QUERY);
  const [list, setList] = useState([]);

  const loadList = async () => {
    const { data } = await refetch();

    setList(data.todos);
  };

  return { loadList, items: list };
}

export function useTodoItemCompletedUpdate() {
  const completeTodo = async (id: number) => {
    todoMutations.completeTodo(id);
  };

  return { completeTodo };
}
