const bodyRef = document.querySelector('body');
const toggleBtnRef = document.querySelector('.theme-switch__toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const getTheme = localStorage.getItem('theme');
const parsedTheme = JSON.parse(getTheme);

bodyRef.classList.add(parsedTheme);
if (parsedTheme === Theme.DARK) {
  toggleBtnRef.toggleAttribute('checked');
}

toggleBtnRef.addEventListener('change', onChangeTheme);

function onChangeTheme() {
  toggleBtnRef.toggleAttribute('checked');
  bodyRef.classList.toggle('dark-theme');
  checkedTheme();
}

function checkedTheme() {
  if (toggleBtnRef.hasAttribute('checked')) {
    return localStorage.setItem('theme', JSON.stringify(Theme.DARK));
  }
  return localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}
