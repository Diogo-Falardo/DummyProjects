import { getTodo } from "./indexLogin";

export default async function page() {
  const data = await getTodo();
  const { Name, data: DataTodo, Todo } = data.message;

  return (
    <>
      <h1 className="text-green-600">
        Data: <span className="text-red-600">{DataTodo}</span>
      </h1>
      <h1 className="text-green-600">
        Nome: <span className="text-red-600">{Name}</span>
      </h1>
      <ul>
        {Todo.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
}
