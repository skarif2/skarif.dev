import { useState, useEffect, useRef } from 'react';
import './ColorDropdown.css';

interface ColorDropdownProps {
  currentColor?: string;
  setCurrentColor?: (color: string) => void;
}

export const ColorDropdown = ({ 
  currentColor: propCurrentColor, 
  setCurrentColor: propSetCurrentColor 
}: ColorDropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColorState] = useState('var(--theme-lavender)');

  const colors = [
    { name: 'Lavender', value: 'var(--theme-lavender)' },
    { name: 'Pink', value: 'var(--theme-pink)' },
    { name: 'Yellow', value: 'var(--theme-yellow)' },
    { name: 'Green', value: 'var(--theme-green)' },
    { name: 'Blue', value: 'var(--theme-blue)' },
  ];

  const setCurrentColor = propSetCurrentColor || setCurrentColorState;
  const effectiveCurrentColor = propCurrentColor || currentColor;

  useEffect(() => {
    // Load saved color from localStorage
    const savedColor = localStorage.getItem('color');
    if (savedColor) {
      setCurrentColor(savedColor);
    }
  }, []);

  useEffect(() => {
    // Apply color to CSS variable
    if (effectiveCurrentColor) {
      const root = document.querySelector(':root') as HTMLElement;
      root.style.setProperty('--color-primary', effectiveCurrentColor);
    }
  }, [effectiveCurrentColor]);

  useEffect(() => {
    // Click outside to close
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleSelectColor = (color: string) => {
    localStorage.setItem('color', color);
    setCurrentColor(color);
    setOpen(false);
  };

  return (
    <div className="color-dropdown" ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className={`color-dropdown-button ${open ? 'active' : ''}`}
        aria-label="Select theme color"
        title="Select theme color"
      >
        <div 
          className="color-circle" 
          style={{ backgroundColor: effectiveCurrentColor }}
        />
        <svg
          className="dropdown-arrow"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      
      {open && (
        <div className="color-dropdown-results">
          <div className="color-circles">
            {colors.map((color) => (
              <button
                key={color.value}
                className="color-option"
                onClick={() => handleSelectColor(color.value)}
                aria-label={`Select ${color.name} theme`}
                title={color.name}
              >
                <div 
                  style={{ backgroundColor: color.value }} 
                  className="color-circle"
                />
                {effectiveCurrentColor === color.value && (
                  <svg
                    className="check-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 4L6 11L3 8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {!open && <div className="tooltip">Color</div>}
    </div>
  );
};
