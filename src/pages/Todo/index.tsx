import { useState } from 'react';

interface ITodo {
  id: number;
  text: string;
  check: boolean;
}

const Todo = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(1);
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  console.log(todoList);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todo: ITodo = {
      id: count,
      text,
      check: false,
    };

    setTodoList(todoList.concat(todo));
    setCount(count + 1);
    setText('');
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          data-testid="new-todo-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button data-testid="new-todo-add-button" type="submit">
          추가
        </button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" />
              <span>{todo.text}</span>
              <button data-testid="modify-button" type="button">
                수정
              </button>
              <button data-testid="delete-button" type="button">
                삭제
              </button>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Todo;
