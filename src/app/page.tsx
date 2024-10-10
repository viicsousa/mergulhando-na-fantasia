import './globals.css'
import NavBar from './components/navBar';
import TitlePage from './components/titlePage';
import CarouselBooks from './components/carouselBooks';
import ReviewsBody from './components/reviwesBody';

export default function Home() {
  return (
    <div>
      <NavBar/>
      <TitlePage/>
      <CarouselBooks/>
      <ReviewsBody/>
    </div>
  );
}
