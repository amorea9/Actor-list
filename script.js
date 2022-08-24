fetch("actors.json")
  .then((res) => res.json())
  .then((data) => handleActor(data));

function handleActor(data) {
  console.log(data);
  data.forEach(showActor);
}

function showActor(actor) {
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector(".name").textContent = actor.fullname;
  clone.querySelector(".movie").textContent = actor.movie;
  const parent = document.querySelector(".actors_container");
  parent.appendChild(clone);
}

document.querySelector(".actors_card").addEventListener("click", popUp);
//or alert?
function popUp() {
  console.log("hello");
}
