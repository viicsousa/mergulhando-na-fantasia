"use client"
import { useState } from "react";
import Image from "next/image"


import Books from "../../assets/svg/book.svg"
import Stars from "../../assets/svg/stars.svg"
import NextE from "../../assets/svg/nextE.svg";
import NextD from "../../assets/svg/nextD.svg";


export default function CarouselBooks () {
  const [currentIndex, setCurrentIndex] = useState(0);
  const books = Array(7).fill(Books);
  const maxVisibleBooks = 5; // Quantos livros mostrar de uma vez

  const handleNext = () => {
    if (currentIndex < books.length -5) {
      setCurrentIndex(currentIndex + 1)
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }
  return (
    <div className="flex justify-center items-center pt-10">
    <div className="bg-white w-2/3 p-4 rounded-2xl ">
      <h2 className="text-2xl font-cinzel font-bold text-[#003366] p-4 py-4">
        Últimas leituras
      </h2>
      <div className="relative flex items-center">
        {/* Lista de livros */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / maxVisibleBooks)}%)`,
            }}
          >
            {books.map((book, index) => (
              <div key={index} className="min-w-[20%] flex-shrink-0 flex flex-col items-center px-2">
                <a>
                  <Image className='cursor-pointer' src={book} alt={`Livro ${index + 1}`} />
                </a>

                <div className="flex justify-center items-center">
                  <Image src={Stars} alt="Estrelas" className="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 bottom-4 left-1/2">
  {/* Botão para livros anteriores */}
  <div className="relative">
    <button
      onClick={handlePrev}
      disabled={currentIndex === 0}
      className="bg-transparent p-2 flex items-center justify-center" // Adiciona estilo ao botão
    >
      <Image src={NextD} alt="Anterior" className="w-6 h-6" />
    </button>
  </div>

  {/* Botão para próximos livros */}
  <div className="relative">
    <button
      onClick={handleNext}
      disabled={currentIndex >= books.length - maxVisibleBooks}
      className="bg-transparent p-2 flex items-center justify-center" // Adiciona estilo ao botão
    >
      <Image src={NextE} alt="Próximo" className="w-6 h-6" />
    </button>
  </div>


      </div>
    </div>
  </div>
  
  )
}