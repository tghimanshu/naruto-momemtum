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
  taskInput.style.display = "inline-block";)
});

/******************************
        IMAGE SWITCHER
*******************************/

let strDate = localStorage.getItem("date");
let date = new Date();
let body = document.querySelector(".main-body");
// console.log(`strDate -> ${strDate}\n date -> ${date.getDate().toString()}`);
if (date.getDate().toString() === strDate) {
  //   console.log("True");
  let imageUrl = localStorage.getItem("imageUrl");
  body.style.backgroundImage = `url('wallpapers/${imageUrl}')`;
} else {
  localStorage.setItem("task", "");
  let num = Math.floor(Math.random() * 30) + 1;
  localStorage.setItem("imageUrl", `${num}.jpg`);
  localStorage.setItem("date", date.getDate().toString());
  body.style.backgroundImage = `url('wallpapers/${num}.jpg')`;
}
