/******************************
        TIME UPDATE
*******************************/

const updateTime = () => {
  let time = new Date();
  let hours = time.getHours();
  let period = "AM";
  let minutes = time.getMinutes();
  if (hours >= 13) {
    hours -= 12;
    period = "PM";
  }
  document.querySelector("#hrs").innerHTML = hours < 10 ? "0" + hours : hours;
  document.querySelector("#mins").innerHTML =
    minutes < 10 ? "0" + minutes : minutes;
  document.querySelector("#period").innerHTML = period;
  //   console.log(time.toLocaleTimeString());
};
updateTime();
setInterval(updateTime, 1000);

/******************************
            TASKS
*******************************/

let strTask = localStorage.getItem("task");
// console.log(strTask);
let taskInput = document.querySelector("#taskInput");
let task = document.querySelector("#task");
// get default task
if (strTask === "" || strTask === null) {
  taskInput.style.display = "inline-block";
  task.style.display = "none";
} else {
  //   console.log("red");
  task.style.display = "block";
  task.innerHTML = strTask;
  taskInput.style.display = "none";
}

const setTask = (e) => {
  let val = e.target.value;
  if (val !== "") {
    localStorage.setItem("task", val);
    // console.log(val);
    task.innerHTML = val;
    task.style.display = "block";
    e.target.style.display = "none";
  }
};
taskInput.addEventListener("blur", setTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    setTask(e);
  }
});
task.addEventListener("dblclick", (e) => {
  e.target.style.display = "none";
  taskInput.value = e.target.innerHTML;
  taskInput.style.display = "inline-block";
});

/******************************
        IMAGE SWITCHER
*******************************/

let strDate = localStorage.getItem("date");
let date = new Date();
let body = document.querySelector(".main-body");
if (date.getDate().toString() === strDate) {
  let imageUrl = localStorage.getItem("imageUrl");
  if (imageUrl.includes("http")) {
    body.style.backgroundImage = `url(${imageUrl})`;
    document.querySelector("#sub_cat").innerHTML = JSON.parse(
      localStorage.getItem("wall_details")
    ).sub_category;
  } else {
    body.style.backgroundImage = `url('wallpapers/${imageUrl}')`;
  }
} else {
  let pageNo = Math.floor(Math.random() * 500) + 1;
  let indexNo = Math.floor(Math.random() * 10) + 1;
  fetch(
    `https://wall.alphacoders.com/api2.0/get.php?auth=0d52ba4842faf8b1e6fbff7313e786d5&method=category&id=3&page=${pageNo}&info_level=2`
  )
    .then((data) => data.json())
    .then((wall) => {
      const pic = wall.wallpapers[indexNo].url_image;
      if (pic === "") {
        let num = Math.floor(Math.random() * 30) + 1;
        localStorage.setItem("imageUrl", `${num}.jpg`);
        body.style.backgroundImage = `url('wallpapers/${num}.jpg')`;
      } else {
        localStorage.setItem("imageUrl", `${pic}`);
        body.style.backgroundImage = `url(${pic})`;
        localStorage.setItem(
          "wall_details",
          JSON.stringify(wall.wallpapers[indexNo])
        );
        document.querySelector("#sub_cat").innerHTML =
          wall.wallpapers[indexNo].sub_category;
      }
      localStorage.setItem("task", "");
      localStorage.setItem("date", date.getDate().toString());
    })
    .catch((err) => console.log("not working", err));
}

/******************************
        FAVOURITE IMAGE
*******************************/

document
  .querySelector("#favourite_pic")
  .addEventListener("click", function (e) {
    const pic = JSON.parse(localStorage.getItem("wall_details"));
    localStorage.setItem(
      "all_favs",
      JSON.stringify(
        JSON.parse(localStorage.getItem("all_favs"))
          ? localStorage.getItem("all_favs").push(pic)
          : pic
      )
    );
  });
