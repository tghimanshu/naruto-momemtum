/**
 * Updates the time displayed on the screen.
 * It fetches the current time, formats the hours and minutes,
 * determines the period (AM/PM), and updates the DOM elements.
 *
 * @returns {void}
 */
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
};

/**
 * Saves the task entered by the user to local storage and updates the UI.
 * This function is triggered when the input field loses focus (blur event)
 * or when the user presses Enter.
 *
 * @param {Event} e - The event object (blur or keypress).
 * @returns {void}
 */
const setTask = (e) => {
  let val = e.target.value;
  let task = document.querySelector("#task");
  if (val !== "") {
    localStorage.setItem("task", val);
    task.innerHTML = val;
    task.style.display = "block";
    e.target.style.display = "none";
  }
};

/**
 * Handles the keypress event on the task input field.
 * If the Enter key is pressed, it calls setTask.
 *
 * @param {KeyboardEvent} e - The keyboard event object.
 * @returns {void}
 */
const handleTaskInputKeypress = (e) => {
  if (e.key === "Enter") {
    setTask(e);
  }
};

/**
 * Handles the double-click event on the task display element.
 * It hides the task display and shows the input field with the current task value,
 * allowing the user to edit the task.
 *
 * @param {MouseEvent} e - The mouse event object.
 * @returns {void}
 */
const handleTaskDoubleClick = (e) => {
  let taskInput = document.querySelector("#taskInput");
  e.target.style.display = "none";
  taskInput.value = e.target.innerHTML;
  taskInput.style.display = "inline-block";
  taskInput.focus();
};

/**
 * Initializes the task system by retrieving the saved task from local storage.
 * It sets up the event listeners for the task input and display elements.
 *
 * @returns {void}
 */
const initializeTasks = () => {
  let strTask = localStorage.getItem("task");
  let taskInput = document.querySelector("#taskInput");
  let task = document.querySelector("#task");

  // get default task
  if (strTask === "" || strTask === null) {
    taskInput.style.display = "inline-block";
    task.style.display = "none";
  } else {
    task.style.display = "block";
    task.innerHTML = strTask;
    taskInput.style.display = "none";
  }

  taskInput.addEventListener("blur", setTask);
  taskInput.addEventListener("keypress", handleTaskInputKeypress);
  task.addEventListener("dblclick", handleTaskDoubleClick);
};

/**
 * Initializes the wallpaper system.
 * It checks if the wallpaper needs to be updated based on the date.
 * If it's a new day, it selects a new random wallpaper and resets the task.
 * Otherwise, it loads the saved wallpaper.
 *
 * @returns {void}
 */
const initializeWallpaper = () => {
  let strDate = localStorage.getItem("date");
  let date = new Date();
  let body = document.querySelector(".main-body");

  if (date.getDate().toString() === strDate) {
    let imageUrl = localStorage.getItem("imageUrl");
    if (imageUrl) {
        body.style.backgroundImage = `url('wallpapers/${imageUrl}')`;
    }
  } else {
    // Reset task for the new day
    localStorage.setItem("task", "");
    // Need to re-initialize task display since we cleared it,
    // but initializeTasks runs separately. However, looking at logic,
    // if we clear task here, initializeTasks should see empty task.
    // Ensure initializeWallpaper runs BEFORE initializeTasks if we rely on that.

    let num = Math.floor(Math.random() * 30) + 1;
    localStorage.setItem("imageUrl", `${num}.jpg`);
    localStorage.setItem("date", date.getDate().toString());
    body.style.backgroundImage = `url('wallpapers/${num}.jpg')`;
  }
};

/**
 * Main initialization function.
 * Sets up the time interval, initializes tasks, and sets the wallpaper.
 *
 * @returns {void}
 */
const init = () => {
  updateTime();
  setInterval(updateTime, 1000);

  // Initialize Wallpaper first as it might reset the task for a new day
  initializeWallpaper();
  initializeTasks();
};

// Start the application
init();
