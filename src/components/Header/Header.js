const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Sticky Notes</h1>
      <button
        type="button"
        className="dark-mode-btn"
        onClick={() => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default Header;
