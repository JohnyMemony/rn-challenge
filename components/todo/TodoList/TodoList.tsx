import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { TodoListItem } from './TodoListItem/TodoListItem';
import { useTodoItemCompletedUpdate, useTodoList } from '../../../hooks/todo-hooks';

export const TodoList: React.FC = () => {
  const { loadList, items } = useTodoList();
  const { completeTodo } = useTodoItemCompletedUpdate();

  useEffect(() => {
    loadList();
  }, []);

  const handleItemUpdate = async (id: number) => {
    await completeTodo(id);
    loadList();
  };

  const renderItem = ({ item }: { item: any }) => {
    return <TodoListItem data={item} onUpdate={handleItemUpdate} />
  };

  return (
    <FlatList data={items} renderItem={renderItem} />
  )
};
