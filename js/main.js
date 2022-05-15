let list = document.getElementById("list");
let INP = document.querySelector(".input");
let BTN = document.querySelector(".btn");
let form = document.querySelector(".form")

let array = [];

console.log("start");


function foo() {
  let li = document.createElement("li");
  let div = document.createElement("div");
  let span = document.createElement("span");
  let check = document.createElement("button")
  let del = document.createElement("button")
  let edit = document.createElement("button")

  if (INP.value == "") {
    alert("вы ничего не ввели")
    return
  }

  else if (list.childNodes.length >= 15) {
    alert("слишком много значений");
    return
  }

  span.textContent = INP.value;
  li.className = "list__item";
  div.className = "list__box";
  span.className = "list__item-span";
  del.className = "delete__btn"
  check.className = "check__btn";
  edit.className = "edit__btn"

  const randomId = Math.random() * 15.75;
  li.id = randomId.toFixed(2);

  del.append("удалить")
  check.append("сделано")
  edit.append("изменить")
  div.append(check);
  div.append(edit);
  div.append(del);
  li.append(span);
  li.append(div);
  list.prepend(li);

  const save = () => {
    let data = {
      text: span.textContent,
      id: li.id,
      done: false,
    }
    array.push(data)
    localStorage.setItem("item", JSON.stringify(array));
  }
  save()


  setTimeout(() => {
    li.style.marginTop = "0";
  }, 100);

  INP.value = "";

  del.addEventListener("click", () => {
    if (confirm("вы уверены ?")) {
      li.style.opacity = "0";

      setTimeout(() => {
        li.remove()
      }, 300);

      array = JSON.parse(localStorage.getItem("item"));

      const newList = array.filter(obj => obj.id !== li.id);

      localStorage.setItem("item", JSON.stringify(newList));
    }
  })

  edit.addEventListener("click", () => {
    if (li.style.color == "white") {
      return;
    }
    else {
      let newList = prompt("введите значение");

      if (newList !== "" && newList !== null) {
        array = JSON.parse(localStorage.getItem("item"));

        array.map(obj => {
          if (obj.id == li.id) {
            obj.text = newList;
            span.textContent = newList;
          }
        })

        localStorage.setItem("item", JSON.stringify(array));
      }
    }
  })

  check.addEventListener("click", () => {
    array = JSON.parse(localStorage.getItem("item"));

    array.map(obj => {
      if (obj.id == li.id) {
        if (obj.done == false) {
          obj.done = true;
          li.style.backgroundColor = "#00800081";
          li.style.color = "white"
          span.style.textDecoration = "line-through"
          edit.style.opacity = ".4";
          edit.style.cursor = "default"
        }
        else {
          obj.done = false;
          li.style.backgroundColor = "#01a1a157";
          li.style.color = "black"
          span.style.textDecoration = "none";
          edit.style.opacity = "1";
          edit.style.cursor = "pointer"
        }
      }
    })

    localStorage.setItem("item", JSON.stringify(array));
  })

  if (list.childNodes.length !== 0) {
    form.style.borderBottomLeftRadius = "0px";
    form.style.borderBottomRightRadius = "0px";
  } else {
    form.style.borderBottomLeftRadius = "10px";
    form.style.borderBottomRightRadius = "10px";
  }
}

document.addEventListener("DOMContentLoaded", function spawn() {
  if (localStorage.getItem("item")) {
    array = JSON.parse(localStorage.getItem("item"));

    for (const obj of array) {
      let li = document.createElement("li");
      let div = document.createElement("div");
      let span = document.createElement("span");
      let check = document.createElement("button")
      let del = document.createElement("button")
      let edit = document.createElement("button")

      if (list.childNodes.length >= 15) {
        alert("слишком много значений");
        return
      }

      span.textContent = obj.text;
      li.className = "list__item";
      div.className = "list__box";
      span.className = "list__item-span";
      del.className = "delete__btn"
      check.className = "check__btn";
      edit.className = "edit__btn"

      li.id = obj.id;

      del.append("удалить")
      check.append("сделано")
      edit.append("изменить")
      div.append(check);
      div.append(edit);
      div.append(del);
      li.append(span);
      li.append(div);
      list.prepend(li);


      setTimeout(() => {
        li.style.marginTop = "0";
      }, 100);

      INP.value = "";

      del.addEventListener("click", () => {
        if (confirm("вы уверены ?")) {
          li.style.opacity = "0";

          setTimeout(() => {
            li.remove()
          }, 300);

          array = JSON.parse(localStorage.getItem("item"));

          const newList = array.filter(obj => obj.id !== li.id);

          localStorage.setItem("item", JSON.stringify(newList));
        }
      })

      edit.addEventListener("click", () => {
        if (li.style.color == "white") {
          return;
        }
        else {
          let newList = prompt("введите значение");

          if (newList !== "" && newList !== null) {
            array = JSON.parse(localStorage.getItem("item"));

            array.map(obj => {
              if (obj.id == li.id) {
                obj.text = newList;
                span.textContent = newList;
              }
            })

            localStorage.setItem("item", JSON.stringify(array));
          }
        }
      })

      if (obj.done == true) {
        li.style.backgroundColor = "#00800081";
        li.style.color = "white"
        span.style.textDecoration = "line-through"
        edit.style.opacity = ".4";
        edit.style.cursor = "default"
      }

      check.addEventListener("click", () => {
        if (obj.id == li.id) {
          if (obj.done == false) {
            obj.done = true;
            li.style.backgroundColor = "#00800081";
            li.style.color = "white"
            span.style.textDecoration = "line-through"
            edit.style.opacity = ".4";
            edit.style.cursor = "default"
          }
          else {
            obj.done = false;
            li.style.backgroundColor = "#01a1a157";
            li.style.color = "black"
            span.style.textDecoration = "none";
            edit.style.opacity = "1";
            edit.style.cursor = "pointer"
          }
        }


        localStorage.setItem("item", JSON.stringify(array));
      })

      if (list.childNodes.length !== 0) {
        form.style.borderBottomLeftRadius = "0px";
        form.style.borderBottomRightRadius = "0px";
      } else {
        form.style.borderBottomLeftRadius = "10px";
        form.style.borderBottomRightRadius = "10px";
      }
    }
  }

  console.log("hey");
});




console.log("end");