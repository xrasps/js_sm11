let modalShowButton = document.querySelector('.add-button')
let modalHideButton = document.querySelector('.close-button')
let modal = document.querySelector('.modal')

const array = [];

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active')
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active')
})

document.addEventListener('keyup', function (event) {
    if (event.key.toLowerCase() == 'b') {
        document.body.style.background = '#696969'
        
    }

    if (event.key.toLowerCase() == 'w') {
        document.body.style.background = 'white'
    }
})


let inputName = document.getElementById('name')
let inputText = document.getElementById('text')
let errorName = document.querySelector('.error')
let errorText = document.querySelector('.error2')
let submit = document.querySelector('.send')

let isError = false
let isError2 = false

inputName.addEventListener('change', function () {
    if (inputName.value.length < 8) {
        console.log('проверка названия');
        inputName.style.border = '2px solid red'
        errorName.innerHTML = 'введите не менее 8 символов<br><br>'
        isError = true;
    } else {
        inputName.style.border = '2px solid green'
        errorName.innerHTML = ''
        isError = false;
    }
})

inputText.addEventListener('change', function () {
    if (inputText.value.length > 300) {
        inputText.style.border = '2px solid red'
        errorText.innerHTML = 'Не более 300 символа<br><br>'
        isError2 = true;
    } else {
        inputText.style.border = '2px solid green'
        errorText.innerHTML = ''
        isError2 = false;

    }
})

submit.addEventListener('click', function (event) {
    if (inputName.value == '' && inputText.value == '') {
        error.innerHTML = 'Введите название'
        inputName.style.border = '1px solid red'
        error2.innerHTML = 'Введите текст новости'
        inputText.style.border = '1px solid red'

    } else if (inputName.value == '') {
        error.innerHTML = 'Введите название'
        inputName.style.border = '1px solid red'

    } else if (inputText.value == '') {
        error2.innerHTML = 'Введите текст новости<br><br>'
        inputText.style.border = '1px solid red'
    } else if (isError == false && isError2 == false) {
        const newsArray = {
            name: inputName.value,
            text: inputText.value
        }
        array.push(newsArray)
        arrayNews()
        event.preventDefault()
        inputName.value = ''
        inputText.value = ''
    }
}
)

let news = document.getElementById('news')

function arrayNews() {
    news.innerHTML = ''
    if (array.length === 0) {
        news.innerHTML = '<p class="option">Нет новостей</p>'
    }
    for (let x = 0; x < array.length; x++) {
        news.insertAdjacentHTML('beforeend', getNews(array[x]))
    }

}
arrayNews()
function getNews(news) {
    return `
    <div class="news-item">
        <h3 class="h3">${news.name}</h3>
        <p class="news-item__p">
        ${news.text}
        </p>
    </div>
    `
}