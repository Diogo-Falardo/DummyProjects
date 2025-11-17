type todoResponse = {
  message: {
    Name: string;
    Todo: string[];
    data: any;
  };
};

export async function getTodo() {
  const res = await fetch("http://127.0.0.1:8000/", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed fetch");
  }
  return res.json();
}
