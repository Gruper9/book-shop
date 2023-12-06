import { bookService } from './book.service.js'

window.onInit = onInit
window.onDeleteBook = onDeleteBook
window.onAddBook = onAddBook
window.onSetPrice = onSetPrice
window.onOpenModal = onOpenModal
window.onCloseModal = onCloseModal

function onInit() {
    renderBooks()
}

function renderBooks() {
    var books = bookService.getBooks()
    const strHtml = books.map(book =>
        `<div class="book">
    <img src="img/book.jpeg">
    <h2 class="book-name">${book.name}</h2>
    <span class="price">price:${book.price}</span>
    <button class="delete-btn"onclick="onDeleteBook('${book.id}')">x</button>
    <div class="book-btn">
    <button onclick="onSetPrice('${book.id}')">Update</button>
    <button onclick="onOpenModal('${book.id}')">Read</button>
    </div>
    </div>`
    ).join('')

    const elShop = document.querySelector('.shop')
    elShop.innerHTML = strHtml
}

function onDeleteBook(bookIdx) {
    bookService.deleteBook(bookIdx)
    renderBooks()
}

function onAddBook() {
    const bookName = prompt('please enter book name')
    const bookPrice = +prompt('please enter book price')
    bookService.addBook(bookName, bookPrice)
    renderBooks()
}

function onSetPrice(idx) {
    const newPrice = +prompt('enter the new price')
    bookService.setPrice(idx, newPrice)
    renderBooks()
}

function onOpenModal(idx) {
    const book = bookService.getBookById(idx)
    const elModal = document.querySelector('.modal')
    elModal.classList.remove('close')
    elModal.innerHTML =
        `<h2>${book.name}</h2>
        <h3>description: </h3>
        <p class="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quaerat labore delectus libero mollitia sit voluptas odio porro incidunt distinctio quod omnis temporibus, 
        ducimus accusantium atque suscipit dolorum ea!
        Quaerat eaque necessitatibus ut expedita in veritatis aperiam est, 
        ipsam obcaecati sint mollitia eveniet aut fuga distinctio explicabo, 
        ab vitae suscipit vel.
        </p>
        <button onclick="onCloseModal()">close</button>
`
}

function onCloseModal() {
    const elModal = document.querySelector('.modal')
    elModal.classList.add('close')
}
