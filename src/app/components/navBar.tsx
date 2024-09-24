import Image from "next/image"; 
import Logo from "../../assets/svg/logo.svg"

export default function NavBar() {
  return (
    <nav className="p-4 px-8">
    <div className="container mx-auto flex justify-between items-center">
      <div>
        <a href="/"><Image src={Logo} alt="Logo do site" className="w-12 cursor-pointer transform hover:scale-110 transition-transform duration-300"/></a>
      </div>
      <ul className="flex space-x-6 text-lg font-bold">
        <li className="cursor-pointer transform hover:scale-110 transition-transform duration-300">Sobre</li>
        <li className="cursor-pointer transform hover:scale-110 transition-transform duration-300">Resenha</li>
        <li className="cursor-pointer transform hover:scale-110 transition-transform duration-300">Contato</li>
      </ul>
    </div>
  </nav>
  )
}