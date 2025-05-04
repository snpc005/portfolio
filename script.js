// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Обратная связь для формы
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Сообщение отправлено! Замените на Formspree.');
    e.target.reset();
  });