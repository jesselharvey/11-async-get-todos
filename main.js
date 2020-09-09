const data = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json())
  .then((data) => {
    // console.log(data.map((item) => item.title))

    return (document.getElementById("main").innerHTML = data
      .map((item) => `<li>${item.title}</li>`)
      .join(""))
  })
// const todos = fetch("https://jsonplaceholder.typicode.com/todos")
// .then((resp) => resp.json())
// .then((data) => {
//   console.log(data.map((item) => item.title))
//   return (document.querySelector(".container").innerHTML = data.map(
//     (item) => item.title
//   ))
// })
// .catch((err) => console.log("error:", err))
// .then((title) => {
//   console.log(title.join("\n"))
//   return (document.querySelector(
//     ".container"
//   ).innerHTML = title.join("\n"))
// })
// console.log(todos)
// document.querySelector(".container").innerHTML =
