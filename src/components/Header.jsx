import React from "react";

const Header = () => (
  <header className="p-6 flex justify-between items-center shadow">
    <h1 className="text-2xl font-bold">SoftSell</h1>
    <button
      onClick={() => document.body.classList.toggle("dark")}
      className="text-sm bg-gray-200 dark:bg-gray-800 p-2 rounded"
    >
      Toggle Theme
    </button>
  </header>
);

export default Header;