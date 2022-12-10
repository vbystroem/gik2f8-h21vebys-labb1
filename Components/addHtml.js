function addHtml(book) 
{
  let html;

  if (book.coverImage === "") 
  {
    html = 
    `<div class="details_container flex">
      <ul id="details" class="bg-white-400 box-content h-70 w-52 p-4 mb-2 mx-2 last:mb-0 p-3 text-slate-800 cursor-pointer">
        <li class="mb-2">${book.id}</li>
        <li class="text-4xl mb-6">${book.author}</li>
        <li>År: ${book.releaseDate}</li>
        <li>Sidor: ${book.pages}</li>
      </ul>
    </div>`;
  } 
  
  else 
  {
    html = 
    `<div  class="details_container flex">
      <ul id="details" class="bg-white-400 box-content h-70 w-52 p-4 mb-2 mx-2 last:mb-0 p-3 text-slate-800 cursor-pointer">
        <li class="mb-2">${book.id}</li>
        <li class="text-4xl mb-6">${book.author}</li>
        <li>År: ${book.releaseDate}</li>
        <li>Sidor: ${book.pages}</li>
        <img class="mt-8" src=${book.coverImage}> 
      </ul>
    </div>`;
  }

  return html;
}