import useTodos from "./hooks/useTodos";

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();

  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos")
  //     .then((res) => setTodos(res.data))
  //     .catch((error) => setError(error));
  // }, []);

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
