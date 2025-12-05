import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faLocationDot,
  faAngleDown,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <>
<section className="hidden md:block">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A0D00] text-white">

        <div className="absolute left-6 top-4">
          <img src={logo} alt="" className="size-32 left-4 align-start fixed" />
        </div>

<div className="flex items-center justify-center gap-8 pt-4">                
                <div className="relative">
                
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute left-10 top-4 text-white opacity-50"
              />
            
              <input
                type="search"
                placeholder="Buscar Produto"
                className="w-96 pl-16 pr-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-white/50"
              />
            </div>
                
                <a className="hover:text-[#cacaca] pt-3" href="#" ><FontAwesomeIcon icon={faLocationDot}/>  Encontre uma loja</a>

                <button className="bg-[#9C7561] hover:bg-[#835c49] text-white text-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">Faça o Login</button>

                <button className="bg-[#AC4D53] hover:bg-[#822a30] text-white text-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"><FontAwesomeIcon icon={faHeart}/> Cacau Lovers</button>

          </div>

          <div className="flex justify-center gap-12 mt-6 pb-4 text-lg">
            <a href="#" className="flex items-center gap-1 hover:text-gray-300">
              Trufas <FontAwesomeIcon icon={faAngleDown} />
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-gray-300">
              Dia dos Pais <FontAwesomeIcon icon={faAngleDown} />
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-gray-300">
              Produtos <FontAwesomeIcon icon={faAngleDown} />
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-gray-300">
              Sobre nós <FontAwesomeIcon icon={faAngleDown} />
            </a>
            <button className="bg-[#AC4D53] hover:bg-[#822a30] p-3 rounded transition">
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </div>
        </nav>
      </section>
<section className="block md:hidden">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A0D00] text-white flex items-center justify-between px-4 h-18">

          <img src={logo} alt="Logo" className="h-12 left-0" />

          <div className="flex items-center justify-center gap-8 pt-2">                
                <div className="relative">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute top-3 left-10 text-white opacity-50"
              />
              <input
                type="search"
                placeholder="Buscar Produto"
                className="w-48 pl-16 pr-6 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-white/50"
              />
            </div>
            </div>


          <div className="flex items-center gap-3">

              <div className="relative inline-block group">
                <FontAwesomeIcon 
                  icon={faLocationDot} 
                  className=" cursor-pointer hover:text-[#AC4D53] transition" 
                />
                {/* Popup que aparece ao passar o mouse */}
                <div className="absolute top-full right-0  mb-2 
                                opacity-0 group-hover:opacity-100 
                                pointer-events-none group-hover:pointer-events-auto
                                transition-all duration-300 
                                whitespace-nowrap">
                  <div className="bg-black text-white text-sm px-3 py-2 rounded-lg shadow-xl">
                    Encontre uma loja

                  </div>
                </div>
              </div>
            {/* modal menu de hamburguer */}
            <FontAwesomeIcon icon={faBars} />
            
          </div>

        </nav>
              </section>
    </>
  )
}

export default NavBar