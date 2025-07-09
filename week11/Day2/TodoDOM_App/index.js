document.querySelector("form").addEventListener("submit", getdata);

let todoAr = JSON.parse(localStorage.getItem("todos")) || [];
let favAr = JSON.parse(localStorage.getItem("fav")) || [];

displayTable(todoAr);
// window.addEventListener("load", (event) => {
// });

function getdata(e) {
  e.preventDefault();

  let name = document.querySelector("#task").value;
  let priority = document.querySelector("#priority").value;

  let taskObj = { name, priority };

  todoAr.push(taskObj);
  localStorage.setItem("todos", JSON.stringify(todoAr));
  //   console.log(taskObj);
  displayTable(todoAr);
}
//  <tr>
//             <thdoc>Task</th>
//             <th>Priority</th>
//             <th>Favourite</th>
//           </tr>

function displayTable(todoAr) {
  document.querySelector("tbody").innerText = "";
  todoAr.forEach((el) => {
    const row = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = el.name;

    const td2 = document.createElement("td");
    td2.innerText = el.priority;

    if (el.priority == "High") {
      td2.style.backgroundColor = "red";
      td2.style.opacity = "0.7";
    } else {
      td2.style.backgroundColor = "green";
      td2.style.opacity = "0.7";
    }

    const td3 = document.createElement("button");
    td3.innerText = "Favourite";
    td3.addEventListener("click", () => {
      favAr.push(el);
      localStorage.setItem("fav", JSON.stringify(favAr));
    });

    row.append(td1, td2, td3);
    document.querySelector("tbody").append(row);
  });
}
