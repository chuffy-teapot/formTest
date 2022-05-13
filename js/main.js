let list = document.getElementById("list");
let INP = document.querySelector(".input");
let BTN = document.querySelector(".btn");
let form = document.querySelector(".form")


function foo() {
  if (!INP.value) return;

  let li = document.createElement("li");
  let div = document.createElement("div");
  let span = document.createElement("span");
  let check = document.createElement("input");
  let del = document.createElement("button");

  check.setAttribute("type", "checkbox")
  del.setAttribute("onclick", "rem()")


  span.textContent = INP.value;

  li.className = "list__item";
  div.className = "list__box";
  del.className = "delete__btn"
  span.className = "list__item-span";
  check.className = "checkbox";


  del.append("delete")
  div.append(check);
  div.append(span);
  li.append(div);
  li.append(del);
  list.prepend(li);

  INP.value = "";

  if (list.childNodes.length !== 1) {
    form.style.borderBottomLeftRadius = "0px";
    form.style.borderBottomRightRadius = "0px";
  } else {
    form.style.borderBottomLeftRadius = "10px";
    form.style.borderBottomRightRadius = "10px";
  }

}

const rem = () => {
  let btn = document.querySelectorAll(".delete__btn");

  console.log(btn.parentNode);
}