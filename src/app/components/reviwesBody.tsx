import Image from "next/image";
import CoverBook from "../../assets/svg/book.svg";
import BackBook from "../../assets/jpeg/bookback.jpg";
import Twitch from "../../assets/png/twitch.png";
import Linkedin from "../../assets/png/linkedin.png";
import Instagram from "../../assets/png/instagram.png";
import GitHub from "../../assets/png/github.png";
import Romance from "../../assets/png/romance.png";
import Pray from "../../assets/png/pray.png";
import Others from "../../assets/png/others.png";
import Investigation from "../../assets/png/investigation.png";
import Fantasy from "../../assets/png/fantasy.png";
import Drama from "../../assets/png/drama.png";


export default function ReviewsBody () {
  return(
    <div className="flex justify-center">
  <div className="grid grid-cols-[80%_20%] gap-4 py-4 w-3/4">
    {/* Coluna 1: Livro */}
    <div className="relative bg-white p-4 rounded-2xl">
  {/* Imagem de fundo com opacidade */}
  <div
    className="absolute inset-0 bg-cover opacity-15 rounded-2xl "
    style={{ backgroundImage: `url(${BackBook.src})` }} // Usando a propriedade src
  ></div>

  {/* Conteúdo */}
  <div className="grid relative z-10 p-2">
   
    <div className="flex">
    <Image src={CoverBook} alt="Coverbook" className="w-60" />
      <div className="px-4">
      <h3 className="text-2xl font-cinzel font-bold text-[#003366] py-4">Lovely War</h3>
      <p className="text-xl py-1"><b>Autora:</b> Júlia Berry</p>
      <p className="text-xl py-1"><b>Data da publicação:</b> 5 de março de 2019</p>
      <p className="text-xl py-1"><b>Páginas:</b> 480</p>
      </div>
    </div>
    <p className="text-xl text-justify p-1"></p>
    
  </div>
</div>

   <div className="flex flex-col gap-4 px-4">
      <div className="bg-white p-4 rounded-2xl">
        <h2 className="text-center text-2xl font-cinzel font-bold text-[#003366] py-4">Victória</h2>
        <p className="text-justify ">
          Criei este site para aprender mais sobre programação, voltado para algo que amo: livros.
          Aqui, vou compartilhar minhas leituras favoritas e algumas resenhas que escrevi ao longo dos
          anos.
        </p>
        <div className="flex gap-4 justify-center items-center py-4">
          <Image src={Twitch} alt="" />
          <Image src={Instagram} alt="" />
          <Image src={GitHub} alt="" />
          <Image src={Linkedin} alt="" />
        </div>
      </div>

      {/* Gêneros */}
      <div className="grid justify-center items-center bg-white p-4 rounded-2xl">
        <h2 className="text-center text-2xl font-cinzel font-bold text-[#003366] p-4">Gêneros</h2>
        <div className="grid grid-cols-3 gap-5 justify-center items-center py-4">
          <Image src={Romance} alt="" />
          <Image src={Drama} alt="" />
          <Image src={Investigation} alt="" />
          <Image src={Fantasy} alt="" />
          <Image src={Pray} alt="" />
          <Image src={Others} alt="" />
        </div>
      </div>
    </div>
  </div>
</div>

  


  )
}