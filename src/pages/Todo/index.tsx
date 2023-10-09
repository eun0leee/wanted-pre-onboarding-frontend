import { useState } from 'react';

interface ITodo {
  id: number;
  text: string;
  checked: boolean;
}

const Todo = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(1);
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [editingTodoId, setEditingTodoId] = useState<number | null>(null);

  console.log(todoList);

  const handleEdit = (id: number) => {
    setEditingTodoId(id);
  };

  const handleUpdate = () => {
    if (text !== '' && editingTodoId !== null) {
      setTodoList(
        todoList.map((todo) =>
          todo.id === editingTodoId ? { ...todo, text } : todo,
        ),
      );
      setEditingTodoId(null);
    }
  };

  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleCheckbox = (id: number) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text === '') {
      confirm('Todo를 입력해주세요! 😀');
    } else {
      const todo: ITodo = {
        id: count,
        text,
        checked: false,
      };

      setTodoList(todoList.concat(todo));
      setCount(count + 1);
      setText('');
    }
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
            <input type="checkbox" onClick={() => handleCheckbox(todo.id)} />
            {editingTodoId === todo.id ? (
              <>
                <input
                  data-testid="modify-input"
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <button data-testid="submit-button" onClick={handleUpdate}>
                  제출
                </button>
                <button
                  data-testid="cancel-button"
                  onClick={() => setEditingTodoId(null)}
                >
                  취소
                </button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <button
                  data-testid="modify-button"
                  type="button"
                  onClick={() => handleEdit(todo.id)}
                >
                  수정
                </button>
                <button
                  data-testid="delete-button"
                  type="button"
                  onClick={() => handleDelete(todo.id)}
                >
                  삭제
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Todo;
