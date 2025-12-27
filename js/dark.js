const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// При загрузке страницы проверяем сохранённую тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
  themeIcon.src = savedTheme === 'dark-theme' ? './img/moon.png' : './img/sun.png';
}

// При клике меняем тему и сохраняем выбор
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    themeIcon.src = './img/moon.png';
    localStorage.setItem('theme', 'dark-theme'); // сохраняем в localStorage
  } else {
    themeIcon.src = './img/sun.png';
    localStorage.setItem('theme', ''); // сохраняем светлую тему (удаляем)
  }
});