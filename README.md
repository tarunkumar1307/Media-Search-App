# React Redux Media Search

A media search application built with **React, Redux Toolkit, and external media APIs**.
Users can search for a keyword and browse **Photos, Videos, or GIFs** from different APIs in a unified interface.

The application fetches media from multiple sources, normalizes the data, and displays results based on the selected media type tab.

---

## Features

* Search media using a keyword
* Switch between **Photos, Videos, and GIFs**
* Fetch media from multiple APIs
* Global state management using **Redux Toolkit**
* Normalized API data for consistent UI rendering
* Loading and error state handling

---

## Tech Stack

* React
* Redux Toolkit
* Axios
* Vite
* Unsplash API (Photos)
* Pexels API (Videos)
* Giphy API (GIFs)

---

<!-- ## Project Structure

```
src/
 ├── components/
 │   ├── SearchBar
 │   ├── Tabs
 │   └── ResultGrid
 │
 ├── features/
 │   └── searchSlice.js
 │
 ├── services/
 │   └── mediaAPI.js
 │
 ├── store.js
 └── App.jsx
```

--- -->

## How It Works

1. The user enters a search query.
2. Redux stores the **query and active media tab**.
3. Based on the selected tab, the app calls the corresponding API:

   * Unsplash → Photos
   * Pexels → Videos
   * Giphy → GIFs
4. The fetched data is **normalized into a common format**.
5. Results are displayed in a grid layout.

---

## Environment Variables

Create a `.env` file in the root folder and add your API keys:

```
VITE_UNSPLASH_KEY=your_unsplash_key
VITE_PEXELS_KEY=your_pexels_key
VITE_GIPHY_KEY=your_giphy_key
```

---

## Installation

Clone the repository and install dependencies:

```
git clone <repo-url>
cd react-redux-media-search
npm install
npm run dev
```

---

## Status

🚧 Project in development
Currently implemented:

* Redux store configuration
* Search state management
* Media API integration
* Search bar, tabs, and result grid logic

Next steps:

* Result card UI
* Pagination
* Improved UI/UX

---

## License

This project is for learning and portfolio purposes.
