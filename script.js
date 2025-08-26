// Модальное окно
const modal = document.getElementById('modal');
const openBtn = document.querySelector('.open-modal-btn');
const closeBtn = document.querySelector('.close-btn');

// Открыть
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Закрыть по крестику
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрыть по клику вне окна
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
// Обработка формы во всплывающем окне
const form = document.getElementById('modal-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // не перезагружать страницу

    // Получаем значения (можно отправить на сервер через fetch)
    const name = form.name.value;
    const phone = form.phone.value;
    const message = form.message.value;

    // Показать сообщение об успехе (пока без отправки на сервер)
    successMessage.style.display = 'block';

    // Очистить поля формы
    form.reset();

    // Автоматически закрыть через 3 секунды
    setTimeout(() => {
        document.getElementById('modal').style.display = 'none';
        successMessage.style.display = 'none';
    }, 3000);
});
