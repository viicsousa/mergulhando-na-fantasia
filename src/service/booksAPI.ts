export const fetchBookDetails = async (query: string) => {
  const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
  
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erro ao buscar dados do livro');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
