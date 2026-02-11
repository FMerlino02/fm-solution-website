// Initialize theme before React renders to prevent flash
export const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  const theme = savedTheme || systemPreference;
  
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Call immediately
if (typeof window !== 'undefined') {
  initializeTheme();
}
