export const theme = {
  colors: {
    primary: '#6C63FF',
    secondary: '#FF6584',
    background: '#121212',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    textSecondary: '#B3B3B3',
    border: '#2D2D2D',
    error: '#FF4B4B',
    success: '#4CAF50',
    warning: '#FFC107',
    overlay: 'rgba(0, 0, 0, 0.7)',
    gradient: {
      primary: 'linear-gradient(135deg, #6C63FF 0%, #4CAF50 100%)',
      secondary: 'linear-gradient(135deg, #FF6584 0%, #FFC107 100%)',
    },
  },
  fonts: {
    primary: "'Inter', sans-serif",
    secondary: "'Poppins', sans-serif",
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    large: '1440px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 6px rgba(0, 0, 0, 0.1)',
    large: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },
  transitions: {
    default: '0.3s ease',
    fast: '0.15s ease',
    slow: '0.5s ease',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '50%',
  },
};

export const lightTheme = {
  background: '#FFFFFF',
  text: '#333333',
  'text-secondary': '#666666',
  primary: '#6C63FF',
  'primary-rgb': '108, 99, 255',
  secondary: '#FF6584',
  surface: '#F8F9FA',
  border: '#E9ECEF',
  heading: '#212529',
  error: '#FF4B4B',
  success: '#4CAF50',
  warning: '#FFC107',
  gradient: {
    primary: 'linear-gradient(135deg, #6C63FF 0%, #4CAF50 100%)',
    secondary: 'linear-gradient(135deg, #FF6584 0%, #FFC107 100%)'
  }
};

export const darkTheme = {
  background: '#121212',
  text: '#FFFFFF',
  'text-secondary': '#B3B3B3',
  primary: '#6C63FF',
  'primary-rgb': '108, 99, 255',
  secondary: '#FF6584',
  surface: '#1E1E1E',
  border: '#2D2D2D',
  heading: '#FFFFFF',
  error: '#FF4B4B',
  success: '#4CAF50',
  warning: '#FFC107',
  gradient: {
    primary: 'linear-gradient(135deg, #6C63FF 0%, #4CAF50 100%)',
    secondary: 'linear-gradient(135deg, #FF6584 0%, #FFC107 100%)'
  }
}; 