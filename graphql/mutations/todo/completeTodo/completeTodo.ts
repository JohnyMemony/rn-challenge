import { ReactiveVar } from "@apollo/client";
import { TodoItem } from '../../../../types/todo';

export default function createCompleteTodo (todosVar: ReactiveVar<TodoItem[]>) {
  return (id: number) => {
    const allTodos = todosVar();

    todosVar(allTodos.map((t) => t.id === id ? { ...t, completed: true } : t));
  }
}
