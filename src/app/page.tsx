import './globals.css'
import NavBar from './components/navBar';
import TitlePage from './components/titlePage';
import CarouselBooks from './components/carouselBooks';

export default function Home() {
  return (
    <div>
      <NavBar/>
      <TitlePage/>
      <CarouselBooks/>
    </div>
  );
}
