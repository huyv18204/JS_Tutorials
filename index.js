const button = document.getElementById("btn-add");
const value = document.getElementById("value");
const tbody = document.getElementById("tbody");

let todoList = [
  {
    name: "React",
    status: false,
  },
  {
    name: "Redux",
    status: false,
  },
];

function renderTable() {
  tbody.innerHTML = "";
  todoList.forEach((item, index) => {
    tbody.innerHTML += `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${item.name}</td>
        <td>
        
        <span class="badge bg-${item.status ? "success" : "danger"}">${
      item.status ? "Finished" : "Unfinished"
    }</span>

        </td>
        <td>
         <button onClick="toggleStatus(${index})" class="btn btn-warning ${
      !item.status ? "" : "d-none"
    }">Success</button>
          <button onClick="Delete(${index})" class="btn btn-danger">Delele</button>
        </td>
      </tr>
    `;
  });
}

button.addEventListener("click", () => {
  if (value.value.trim() !== "") {
    todoList.push({ name: value.value, status: false });
    renderTable();
    value.value = "";
  }
});

function Delete(id) {
  if (confirm("Are you sure delete?")) {
    todoList.splice(id, 1);
    renderTable();
  }
}

function toggleStatus(id) {
  if (confirm("Are you change status?")) {
    todoList[id].status = !todoList[id].status;
    renderTable();
  }
}

renderTable();
