import { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { $todo, getTodosFx } from './models/todo';
import Modal from './components/atoms/Modal';

function App() {
  const [isOpened, setOpened] = useState(false);
  const todo = useStore($todo);

  useEffect(() => {
    getTodosFx();
  }, []);

  return (
    <div className="App">
      <ul>
        {todo.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => setOpened(true)}>add open</button>
      <Modal isOpened={isOpened} onClose={() => setOpened(false)} />
    </div>
  );
}

export default App;
