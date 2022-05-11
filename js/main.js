let list = document.getElementById("list");
let INP = document.querySelector(".input");
let BTN = document.querySelector(".btn");
let form = document.querySelector(".form")


console.log(list.childNodes);


function foo() {
  let li;
  let div;
  let span;
  let check;
  let del;
  let rem;


  if (list.childNodes.length <= 15 && INP.value !== "") {
    li = document.createElement("li");
    div = document.createElement("div");
    span = document.createElement("span");
    check = document.createElement("input")
    check.setAttribute("type", "checkbox")
    del = document.createElement("button")
    del.setAttribute("class", "delete__btn")
  }

  try {
    span.textContent = INP.value;

    li.className = "list__item";
    div.className = "list__box";
    span.className = "list__item-span";
    check.className = "checkbox";


    del.append("delete")
    div.append(check);
    div.append(span);
    li.append(div);
    li.append(del);
    list.append(li);

    INP.value = "";
  }
  catch (error) {
    BTN.setAttribute("onclick", " ")
    INP.placeholder = "too many items"
    console.log(error.message)
  }

  if (list.childNodes.length !== 1) {
    form.style.borderBottomLeftRadius = "0px";
    form.style.borderBottomRightRadius = "0px";
  } else {
    form.style.borderBottomLeftRadius = "10px";
    form.style.borderBottomRightRadius = "10px";
  }

  rem = document.querySelector(".delete__btn").addEventListener("click" , () => {
    list.lastElementChild.hidden = "true"
  })
}