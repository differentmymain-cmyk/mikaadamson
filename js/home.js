const testimonials = document.querySelectorAll(".testimonial-item");
const prevBtn = document.querySelector(".testimonial-prev");
const nextBtn = document.querySelector(".testimonial-next");

let current = 0;

// Показываем нужный отзыв
function showTestimonial(index) {
  testimonials.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
} 

// Следующий отзыв
function nextTestimonial() {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}

// Предыдущий отзыв
function prevTestimonial() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
}

// Кнопки
nextBtn.addEventListener("click", () => {
  nextTestimonial();
  resetAutoSlide(); // сброс таймера после клика
});

prevBtn.addEventListener("click", () => {
  prevTestimonial();
  resetAutoSlide(); // сброс таймера после клика
});

// Автопереключение каждые 10 секунд
let autoSlide = setInterval(nextTestimonial, 3000);

// Если пользователь кликнул стрелку — сброс таймера, чтобы 10 секунд отсчитывались заново
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextTestimonial, 3000);
}

// Инициализация
showTestimonial(current);



