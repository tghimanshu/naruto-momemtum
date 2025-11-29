# Naruto Themed New Tab Page

A personalized New Tab page for Chrome, featuring a Naruto theme. This extension replaces the default new tab with a dashboard that displays the current time, a daily focus task, and a rotating wallpaper from the Naruto universe.

## Features

- **Dynamic Wallpaper**: Changes the wallpaper daily to a random Naruto-themed image.
- **Current Time**: Displays the current time in 12-hour format with AM/PM indicator.
- **Daily Task**: Allows you to set a main focus or task for the day.
  - The task resets automatically each new day.
  - Double-click the task to edit it.
  - Press `Enter` or click away to save the task.
- **Persistent Storage**: Uses Local Storage to save your task and the current day's wallpaper, ensuring they persist across new tabs.

## Installation

This project is a Chrome Extension that can be loaded in "Unpacked" mode.

1.  **Clone or Download the Repository**:
    ```bash
    git clone <repository-url>
    ```
    Or download the ZIP file and extract it.

2.  **Open Chrome Extensions Page**:
    - Open Google Chrome.
    - Navigate to `chrome://extensions/` in the address bar.

3.  **Enable Developer Mode**:
    - Toggle the switch labeled **"Developer mode"** in the top right corner of the page.

4.  **Load Unpacked Extension**:
    - Click the **"Load unpacked"** button that appears in the top left.
    - Select the directory containing the project files (the folder where `manifest.json` is located).

5.  **Open a New Tab**:
    - Open a new tab in Chrome, and you should see the Naruto Themed New Tab page.

## Usage

### Setting a Task
- When you first load the page (or on a new day), you will see an input field with the placeholder "Today's Task".
- Type your main goal for the day and press **Enter** or click anywhere outside the input box.
- The text will transform into a display heading.

### Editing a Task
- If you need to change your task, **double-click** on the displayed task text.
- It will revert to an input field, allowing you to edit the text.
- Press **Enter** or click away to save the changes.

### Wallpaper
- The wallpaper is selected randomly from the `wallpapers/` directory.
- It remains the same for the entire day.
- On the next day, a new wallpaper will be automatically selected, and the task will be reset.

## Project Structure

- `index.html`: The main HTML structure of the new tab page.
- `css/styles.css`: Styles for the layout, typography, and background.
- `js/script.js`: Logic for the clock, task management, and wallpaper switching.
- `wallpapers/`: Directory containing the background images.
- `manifest.json`: Configuration file for the Chrome Extension.

## License

[License Name] - See the LICENSE file for details.
