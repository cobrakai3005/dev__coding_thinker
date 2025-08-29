let todoAr = JSON.parse(localStorage.getItem("todos")) || [];
let favAr = JSON.parse(localStorage.getItem("fav")) || [];

// let taksObj = {
//   id: 1,
//   userId: 1,
//   title: "rttyyuio",
//   completed: false,
// };

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => displayTable(data));

// window.addEventListener("load", (event) => {
// });

function displayTable(arr) {
  console.log(arr);
  arr.forEach((taskObj) => {
    const row = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = taskObj.id;

    const td2 = document.createElement("td");
    td2.innerText = taskObj.title;

    const td3 = document.createElement("td");
    td3.innerText = taskObj.userId;
    const td4 = document.createElement("td");
    td4.innerText = taskObj.completed;

    row.append(td1, td2, td3, td4);
    document.querySelector("tbody").append(row);
  });
}
