document.addEventListener("DOMContentLoaded", ()=>{
    fetch('http:localhost:3000/books')
    .then(resp=>resp.json())
    .then(data=>data.forEach(book=>displayBook(book)))
});

function displayBook(bookInfo){
    const bookContainer = document.getElementById('list')
    const bookTitle = document.createElement('li')
    bookTitle.id = bookInfo.id
    bookTitle.innerText = bookInfo.title
    bookContainer.appendChild(bookTitle)
    bookTitle.addEventListener('click', e=>showDetails(bookInfo))
}

function showDetails(bookInfo){
    const showPanel = document.getElementById('show-panel')
    showPanel.innerText = ''

    const img = document.createElement('img')
    img.src = bookInfo.img_url
    showPanel.appendChild(img)

    const title = document.createElement('h2')
    title.innerText = bookInfo.title
    showPanel.appendChild(title)

    const author = document.createElement('h2')
    author.innerText = bookInfo.author
    showPanel.appendChild(author)

    const description = document.createElement('p')
    description.innerText = bookInfo.description
    showPanel.appendChild(description)

    bookInfo.users.forEach(user => userList(user))
}

function userList(user){
    console.log(user.username)
    const showPanel = document.getElementById('show-panel')
    const usernameLI = document.createElement('li')
    usernameLI.innerText = user.username

    showPanel.appendChild(usernameLI)
}