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

  del.append("удалить")
  check.append("сделано")
  edit.append("изменить")
  div.append(check);
  div.append(edit);
  div.append(del);
  li.append(span);
  li.append(div);
  list.prepend(li);

  INP.value = "";

  del.addEventListener("click", () => {
    let con = confirm("вы уверены ?");
    if (con) li.remove();
  })

  edit.addEventListener("click", () => {
    if (li.style.color == "white") {
      return;
    }
    else {
      let newList = prompt("введите значение")

      if (newList !== "" && newList !== null) {
        span.textContent = newList;
      }
    }
  })

  check.addEventListener("click", () => {
    if (li.style.color == "white") {
      li.style.backgroundColor = "#01a1a157";
      li.style.color = "black"
      span.style.textDecoration = "none";
      edit.style.opacity = "1";
      edit.style.cursor = "pointer"
    }
    else {
      li.style.backgroundColor = "#00800081";
      li.style.color = "white"
      span.style.textDecoration = "line-through"
      edit.style.opacity = ".4";
      edit.style.cursor = "default"
    }
  })

  if (list.childNodes.length !== 0) {
    form.style.borderBottomLeftRadius = "0px";
    form.style.borderBottomRightRadius = "0px";
  } else {
    form.style.borderBottomLeftRadius = "10px";
    form.style.borderBottomRightRadius = "10px";
  }
}



console.log("end");