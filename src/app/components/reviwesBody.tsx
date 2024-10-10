import Image from "next/image";
import CoverBook from "../../assets/svg/book.svg";
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
    <div>
      <div>
        <Image src={CoverBook} alt="Coverbook"/>
        <div>
          <title>Lovely War</title>
          <p>Autora: Júlia Berry</p>
          <p> Data da publicação: 5 de março de 2019</p>
          <p>Páginas: 480 </p>
        </div>
        <div>
          Resenha
        </div>
      </div>
      <div>
        <title>Victória</title>
        <p>Criei este site para aprender mais sobre programação, voltado para algo que amo: livros. Aqui, vou compartilhar minhas leituras favoritas e algumas resenhas que escrevi ao longo dos anos. Além de livros, também sou apaixonada por doramas, jogos e séries — coisas que me ajudam a desconectar da realidade e me deixam extremamente feliz. </p>
        <div>
          <Image src={Twitch} alt=""/>
          <Image src={Instagram} alt=""/>
          <Image src={GitHub} alt=""/>
          <Image src={Linkedin} alt=""/>
        </div>
      </div>
      <div>
        <title>Gêneros</title>
        <div>
        <Image src={Romance} alt=""/>
        <Image src={Drama} alt=""/>
        <Image src={Investigation} alt=""/>
        <Image src={Fantasy} alt=""/>
        <Image src={Pray} alt=""/>
        <Image src={Others} alt=""/>
        </div>
      </div>
    </div>
  )
}