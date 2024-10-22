import { useState } from 'react';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [bookData, setBookData] = useState(null);

  const searchBooks = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/books?query=${query}`);
      const data = await response.json();
      setBookData(data);
    } catch (error) {
      console.error('Erro ao buscar o livro:', error);
    }
  };

  return (
    <div>
      <form onSubmit={searchBooks}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Buscar por título ou autor"
        />
        <button type="submit">Buscar</button>
      </form>

      {bookData && (
        <div>
          {bookData.items.map((item: any) => (
            <div key={item.id}>
              <h3>{item.volumeInfo.title}</h3>
              <p>{item.volumeInfo.authors.join(', ')}</p>
              <p>{item.volumeInfo.pageCount} páginas</p>
              <img src={item.volumeInfo.imageLinks?.thumbnail} alt="Capa do livro" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookSearch;
