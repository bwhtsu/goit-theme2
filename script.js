// 1.Створіть слайдер на сторінці, який показує зображення. При переміщенні слайдера виконуйте деякі дії, наприклад, змінюйте розмір зображення. Використайте debounce для того, щоб ці дії виконувалися не занадто часто при швидкому переміщенні слайдера.


const sliderInputRef = document.querySelector('.slider__input');
const sliderImageRef = document.querySelector('.slider__image');

sliderInputRef.addEventListener("input", _.debounce((event) => {
    const value = event.target.value;
    sliderImageRef.style.width = `${value}%`
}, 100));


// ================================================================================

// 2.Потрібно забезпечити плавне переміщення об'єкту при русі мишкою. Рішення: використовуйте метод debounce з бібліотеки lodash. Встановіть час затримки в мілісекундах, наприклад 100мс, і передайте функцію, яка буде виконуватися при переміщенні мишкою.

const boxRef = document.getElementById("box");
const task2Ref = document.querySelector('.task2');

task2Ref.addEventListener('mousemove', _.debounce((event) => {
    boxRef.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
}, 100));

