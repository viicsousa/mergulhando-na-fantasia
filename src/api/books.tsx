import { NextApiRequest, NextApiResponse } from 'next';
import { fetchBookDetails } from '../service/booksAPI';

 const BookRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;

  if (!query || typeof query !== 'string') {
    return res.status(400).json({ message: 'Query parameter is required' });
  }

  const bookData = await fetchBookDetails(query);

  if (bookData) {
    return res.status(200).json(bookData);
  } else {
    return res.status(500).json({ message: 'Failed to fetch book data' });
  }
};
export default BookRequest;