import Image from "next/image"; 
import Logo from "../../assets/svg/logo.svg"

export default function NavBar() {
  return (
    <nav className="p-4 px-8">
    <div className="container mx-auto flex justify-between items-center">
      <div>
        <a href="/"><Image src={Logo} alt="Logo do site"/></a>
      </div>
      <ul className="flex space-x-6 text-custom-20 font-bold">
        <li className="cursor-pointer hover:opacity-50">Sobre</li>
        <li className="cursor-pointer hover:opacity-50">Resenha</li>
        <li className="cursor-pointer hover:opacity-50">Contato</li>
      </ul>
    </div>
  </nav>
  )
}