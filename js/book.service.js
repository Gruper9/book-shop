import { util } from './util.service.js'
export const bookService = {
    getBooks,
    deleteBook,
    addBook,
    setPrice,
    getBookById
}

var gBooks = []
gBooks = _createBooks()
var gId = 101


function getBooks() {
    return gBooks
}

function deleteBook(idx) {
    return gBooks.splice(gBooks.findIndex(book => {
        if (book.id === idx) return book
    }), 1)
}

function addBook(Name, Price) {
    gBooks.push(_createBook(Name, Price))
}

function setPrice(idx, newPrice) {
    gBooks[gBooks.findIndex(book => {
        if (book.id === idx) return book
    })].price = newPrice
}

function getBookById(idx){
    return gBooks.find(book=>{
        if(book.id===idx)return book
    })
}





function _createBook(name = 'Random Book', price = 40) {
    return {
        id: util.makeId(),
        name,
        price
    }
}

function _createBooks() {
    return [_createBook('Harry Potter', 60),
    _createBook('Robin Hood', 40),
    _createBook('Cinderela', 40),
    _createBook('SnowWhite', 50)
    ]
}