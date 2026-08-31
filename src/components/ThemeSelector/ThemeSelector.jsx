function ThemeSelector({ theme, setTheme }) {
  const themes = [
    { name: "midnight", color: "#0f172a" },
    { name: "ocean", color: "#0ea5e9" },
    { name: "violet", color: "#7c3aed" },
    { name: "emerald", color: "#10b981" },
    { name: "sunset", color: "#f97316" },
  ];

  return (
    <div className="theme-selector">
      <span className="theme-label">Card Theme</span>

      <div className="theme-options">
        {themes.map(({ name, color }) => (
          <button
            key={name}
            type="button"
            onClick={() => setTheme(name)}
            className={`theme-option ${theme === name ? "active" : ""}`}
            aria-label={`Select ${name} theme`}
            style={{ background: color }}
          >
            <span className="sr-only">{name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;