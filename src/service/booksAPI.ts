const API_KEY = 'AIzaSyBRLe2Z3fcBx-sx_FawTOEvG2n3S5HYuYw';
const searchTerm = 'programacao';
const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&langRestrict=pt&key=${API_KEY}`;

// Função para exibir livros no DOM
function displayBooks(books) {
  const bookContainer = document.getElementById('book-container');

  books.forEach(book => {
    // Valida se o volumeInfo existe para evitar erros
    const { volumeInfo } = book;

    if (volumeInfo) {
      const title = volumeInfo.title || 'Título indisponível';
      const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Autor desconhecido';
      const description = volumeInfo.description || 'Sem descrição';

      const bookElement = document.createElement('div');
      bookElement.classList.add('book'); // Adicione uma classe para estilização, se quiser

      bookElement.innerHTML = `
        <h3>${title}</h3>
        <p><b>Autores:</b> ${authors}</p>
        <p><b>Descrição:</b> ${description}</p>
        <hr />
      `;

      bookContainer.appendChild(bookElement);
    }
  });
}

// Requisição à Google Books API
fetch(url)
  .then(response => response.json())
  .then(data => {
    const books = data.items;
    if (books && books.length > 0) {
      displayBooks(books);
    } else {
      console.log('Nenhum livro encontrado.');
    }
  })
  .catch(error => {
    console.error('Erro ao buscar livros:', error);
  });
