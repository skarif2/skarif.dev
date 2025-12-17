import { useState, useEffect, useRef } from 'react';
import './SettingsPanel.css';

const colors = [
  { name: 'Lavender', value: '#a080f9' },
  { name: 'Pink', value: '#fb81ba' },
  { name: 'Yellow', value: '#ffd479' },
  { name: 'Green', value: '#78d578' },
  { name: 'Blue', value: '#72a8ff' },
];

export function SettingsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [currentColor, setCurrentColor] = useState('Pink');
  const [isDark, setIsDark] = useState(true);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const colorPickerTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Load saved color
    const savedColor = localStorage.getItem('theme-color') || 'Pink';
    setCurrentColor(savedColor);
    
    // Apply saved color
    const color = colors.find(c => c.name === savedColor);
    if (color) {
      document.documentElement.style.setProperty('--color-primary', color.value);
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setIsDark(savedTheme === 'dark');
    document.documentElement.classList.toggle('is-light', savedTheme === 'light');
    document.documentElement.classList.toggle('is-dark', savedTheme === 'dark');
  }, []);

  const handleColorChange = (colorName: string) => {
    setCurrentColor(colorName);
    const color = colors.find(c => c.name === colorName);
    if (color) {
      document.documentElement.style.setProperty('--color-primary', color.value);
      localStorage.setItem('theme-color', colorName);
    }
    setShowColorPicker(false);
    setIsOpen(false); // Close the entire settings panel
  };

  const handleThemeToggle = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.classList.toggle('is-light', newTheme === 'light');
    document.documentElement.classList.toggle('is-dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setShowColorPicker(false);
    }, 100); // 100ms delay before closing
  };

  const handleColorPickerEnter = () => {
    if (colorPickerTimeoutRef.current) {
      clearTimeout(colorPickerTimeoutRef.current);
      colorPickerTimeoutRef.current = null;
    }
    setShowColorPicker(true);
  };

  const handleColorPickerLeave = () => {
    colorPickerTimeoutRef.current = setTimeout(() => {
      setShowColorPicker(false);
    }, 100); // 100ms delay before closing
  };

  return (
    <div 
      className="settings-panel-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="settings-trigger" aria-label="Settings">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 11.5v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 11.5a5 5 0 0 0 10 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16.5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 6.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <div className="settings-icons">
          {/* Theme Toggle Icon */}
          <button 
            className="icon-btn"
            onClick={handleThemeToggle}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>

          {/* Color Picker Icon */}
          <div 
            className="color-picker-wrapper"
            onMouseEnter={handleColorPickerEnter}
            onMouseLeave={handleColorPickerLeave}
          >
            <button 
              className="icon-btn"
              aria-label="Choose color"
              title="Choose color"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
              </svg>
            </button>

            {showColorPicker && (
              <div className="color-dropdown">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    className={`color-option ${currentColor === color.name ? 'active' : ''}`}
                    onClick={() => handleColorChange(color.name)}
                    aria-label={color.name}
                    title={color.name}
                  >
                    <span 
                      className="color-swatch" 
                      style={{ backgroundColor: color.value }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
