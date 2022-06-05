import { createMockReactiveVar } from "../createMockReactiveVar";
import { TodoItem } from '../../types/todo';

export const mockTodosVar = createMockReactiveVar<TodoItem[]>([]);
