# Future Plans

This document outlines the roadmap for the Naruto Themed New Tab project. The current version (Phase 1) provides a functional foundation, and Phase 2 will introduce enhanced features and customization options.

## Phase 1: Foundation (Complete)

- **Core Features**:
    - [x] Time display (12-hour format).
    - [x] Daily task management with local storage persistence.
    - [x] Daily rotating wallpaper from a local collection.
    - [x] Basic responsive design.
- **Documentation**:
    - [x] Comprehensive JSDoc for all JavaScript functions.
    - [x] Detailed README with installation and usage instructions.

## Phase 2: Enhancements (Planned)

### 1. Customization Settings
- **User Interface**: Add a settings cog/icon to open a configuration panel.
- **Features**:
    - Toggle between 12-hour and 24-hour time formats.
    - Option to manually change the wallpaper.
    - Ability to upload custom wallpapers or provide a URL.
    - Toggle visibility of the clock or task sections.

### 2. Weather Integration
- **Feature**: Display current weather information based on the user's location.
- **Implementation**:
    - Use the Geolocation API to get coordinates.
    - Integrate with a free weather API (e.g., OpenWeatherMap).
    - caching weather data to reduce API calls.

### 3. Expanded Task Management
- **Feature**: Support for multiple tasks or a simple todo list.
- **Implementation**:
    - Allow adding multiple items.
    - Checkbox to mark items as complete without deleting them.
    - improved UI for list management.

### 4. Search Bar
- **Feature**: Add a search bar (Google/Bing/DuckDuckGo) directly on the new tab page.

### 5. Quote of the Day
- **Feature**: Display a motivational quote or a Naruto-themed quote.
- **Implementation**:
    - Fetch from an API or use a local array of quotes.

### 6. Code Quality & CI/CD
- **Testing**: Add unit tests for the logic (e.g., time formatting, storage handling).
- **Linting**: Integrate ESLint and Prettier for code consistency.
