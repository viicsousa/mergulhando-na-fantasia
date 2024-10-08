import Slider from 'react-slick';
import Image from 'next/image';


const books = [
  {title: 'Livro 1', image: './assets/svg/book.svg'},
  {title: 'Livro 2', image: './assets/svg/book.svg'},
  {title: 'Livro 3', image: './assets/svg/book.svg'},
  {title: 'Livro 4', image: './assets/svg/book.svg'},
  {title: 'Livro 5', image: './assets/svg/book.svg'},
  {title: 'Livro 6', image: './assets/svg/book.svg'},
  {title: 'Livro 7', image: './assets/svg/book.svg'}
]
export default function CarouselBooks () {
  
  return (
    <div className='w-full mx-auto my-8'>
      <Slider >
        {books.map((book, index) => (
          <div key={index} className='p-4'>
            <Image
            src={book.image}
            alt={book.title}
            width={200}
            height={300}
            className='mx-auto'
            />
            <h2 className='text-center mt-2'>{book.title}</h2>
          </div>
        ))}
      </Slider>
    </div>
  )
}