export const handleDarkMode = () => {
    const dark = document.querySelector('.header__darkButton')
    const html = document.querySelector('html')
  
    dark.addEventListener('click', () => {
      html.classList.toggle('dark__mode')
        
      if (html.classList.contains('dark__mode')) {
        localStorage.setItem('@openMusic:darkMode', 'true')
        dark.innerHTML = `🌙`
      } else {
        localStorage.setItem('@openMusic:darkMode', 'false')
        dark.innerHTML = `🔆`
      }
    })  
    const darkModePreference = localStorage.getItem('@openMusic:darkMode')
    if (darkModePreference === 'true') {
      html.classList.add('dark__mode')
      dark.innerHTML = `🌙`
    } else {
        dark.innerHTML = `🔆`
    }
  };

