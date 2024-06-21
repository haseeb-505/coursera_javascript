// create empty array of books
let books_array = [];

// creating a function to add the data in the above array in the form of dictionary/objects
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber,
        };
        books_array.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill all the fields correctly!');
    }
}

// to show the books on the html page
function showbooks() {
    const booksDiv = books_array.map((book, index) => `<h1>book Number: ${index + 1}</h1>
    <p><strong>Book Name: </strong>${book.name}</p>
    <p><strong>Author Name: </strong>${book.authorName}</p>
    <p><strong>Book Description: </strong>${book.bookDescription}</p>
    <p><strong>No. of Pages: </strong>${book.pagesNumber}</p>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

// to clear the input form
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';

}



