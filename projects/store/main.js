// Получение всех необходимых элементов
const surnameInput = document.querySelector('input[name="surname"]');
const nameInput = document.querySelector('input[name="name"]');

const checkboxes = document.querySelectorAll('.checkbox');
const quantityInputs = document.querySelectorAll('.count-choice');


const resultCount = document.querySelector('.result-count');
const orderButton = document.querySelector('.btn');


function updateTotal() {
    let total = 0;

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            total += parseInt(checkbox.value) * parseInt(quantityInputs[index].value);
        }
        else {
            total = total;
        }
    });

    resultCount.textContent = total + " руб.";
}

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", updateTotal);
    quantityInputs[index].addEventListener("change", updateTotal);
});

// Функция для обработки изменения значение в input
function handleQuantityChange(index) {
    let quantity = quantityInputs[index].value;
    console.log(quantity);

    // Проверка на отрицательные числа и наличие ведущих нулей
    if (!/^[1-9][0-9]*$/.test(quantity)) {
        quantityInputs[index].value = 0; 
        checkboxes[index].checked = false;// Сбрасываем чекбокс
        quantity = 0; // Устанавливаем quantity в 0 для дальнейших расчётов
    } else {
        quantity = parseInt(quantity); // Обновляем quantity
    }

    quantityInputs[index].value = quantity; // Обновляем значение в поле
    updateTotal(); // Обновляем итоги
}

// Обработка события выбора чекбокса
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            quantityInputs[index].value = 1; // Устанавливаем количество на 1
        } else {
            quantityInputs[index].value = 0; // Обнуляем количество
        }
        updateTotal(); // Обновляем итог
    });

    // Изменение значения quantityInputs также обновляет итог
    quantityInputs[index].addEventListener('input', () => handleQuantityChange(index));
});


orderButton.addEventListener("click", () =>{
    let surname = surnameInput.value.trim();
    let name = nameInput.value.trim();
    let price = resultCount.textContent;

    alert(`Заказчик: ${surname} ${name}\nИтого: ${price}`);
});