fetchdata();
async function fetchdata() {
  try {
    const response = await fetch("http://127.0.0.1:8000/");

    if (!response.ok) {
      throw new Error("Couldnt fetch");
    }

    const data = await response.json();

    let name = data.message.Name;
    let tododata = data.message.data;
    let todoList = data.message.Todo;

    document.getElementById("name").textContent = name;
    document.getElementById("date").textContent = tododata;

    const ul = document.getElementById("todo-ul");

    // for (let i = 0; i < todoList.length; i++) {
    //   const li = document.createElement("li");
    //   li.textContent = todoList[i];
    //   ul.appendChild(li);
    //   console.log(todoList[i]);
    // }

    // todoList.map((item) => console.log(item));
    ul.innerHTML = todoList.map((item) => `<li>${item}</li>`).join("");
  } catch (error) {
    console.error(error);
  }
}
