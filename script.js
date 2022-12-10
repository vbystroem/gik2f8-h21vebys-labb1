'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => 
    {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase()));
    }
  ))
);

function renderBookList(bookList) 
{
  const existingElement = document.querySelector('.book-list');
  const root = document.getElementById('root');
  
  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
  
  const bookListClass = document.querySelectorAll(".book-list__item"); 
  
  for (let i = 0; i < bookListClass.length; i++) 
  {
    const bookListItem = bookListClass[i];
    const iteminnerHtml = bookListItem.innerHTML;
  
    bookListItem.addEventListener("mouseover",() => renderDetails(iteminnerHtml));
    bookListItem.addEventListener("mouseout", removeDetails);
  }
}

async function getId(id) 
{
  const result = await fetch(url + "/" + id).then((result) => result.json());
  return result;
}

async function renderDetails(iteminnerHtml) 
{
  for (let i = 1; i <= bookList.length; i++) 
  {
    const details = await getId(i);

    if (iteminnerHtml.toLowerCase().indexOf(details.author.toLowerCase()) >= 0)
    {
      let html;
      html = addHtml(details);
      const currentDetails = document.querySelector(".details_container");
      currentDetails && root.removeChild(currentDetails);
      root.insertAdjacentHTML("beforeend", html);
    }
  }
}

function removeDetails()
{
  const currentDetails = document.querySelector(".details_container");
  root.removeChild(currentDetails);
}  