const popUp = document.querySelector(".actors_pop_up");
let actor;

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
  clone.querySelector(".name").textContent = `Name: ${actor.fullname}`;
  clone.querySelector(".movie").textContent = `Appeared in: ${actor.movie}`;
  clone.querySelector(".actors_card").addEventListener("click", OpenPopup);

  const parent = document.querySelector(".actors_container");
  parent.appendChild(clone);

  function OpenPopup() {
    document.querySelector(".actors_pop_up").classList.toggle("open");
    console.log("card being clicked");
    popUp.querySelector(".name_pop_up").textContent = actor.fullname;
    popUp.querySelector(".movie_pop_up").textContent = actor.movie;
  }
}
