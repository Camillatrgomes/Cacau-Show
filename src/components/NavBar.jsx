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
import produto01 from "../assets/produto01.png";
import produto02 from "../assets/produto02.png";

function NavBar({abrirCarrinho}) {
  return (
    <>
      <section className="hidden lg:block">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A0D00] text-white">
          <div className="absolute left-6 top-6">
            <img
              src={logo}
              alt=""
              className="size-32 left-12 align-start fixed"
            />
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
                className="w-96 pl-16 pr-6 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/50 focus:outline-none focus:border-white/50"
              />
            </div>

            <div className="relative inline-block group top-3">
            <a className="hover:text-[#cacaca]" href="#">
              <FontAwesomeIcon icon={faLocationDot} /> Encontre uma loja
            </a>

{/*REVER SOBRE O MODAL COM CEP
<div className="absolute top-full -left-6  mb-2 
                                    opacity-0 group-hover:opacity-100 
                                    pointer-events-none 
                                    transition-all duration-300 
                                    "
              >
                <div className="bg-gray-300 rounded-2xl w-96 h-40">
                  <div className="text-md grid grid-cols-2 gap-8 p-6 cursor-pointer">
                     <input
                type="search"
                placeholder="Coloque seu CEP"
                className="w-72 pl-6 pr-6 py-3 bg-white border border-black/20 rounded text-black focus:outline-none"
              />
              </div>
              </div>
            </div>*/}
            
        </div>

            <button className="bg-[#9C7561] hover:bg-[#835c49] text-white text-md rounded shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer" >
              Faça o Login
            </button>

            <button className="bg-[#AC4D53] hover:bg-[#822a30] text-white text-md rounded shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
              <FontAwesomeIcon icon={faHeart} /> Cacau Lovers
            </button>
          </div>

          <div
            className="flex justify-start
           gap-18 ml-58 mt-6 pb-4 text-lg"
          >
            {/*MODAL 01 - TRUFAS*/}
            <div className="relative inline-block group top-3">
              <a
                href="#"
                className="flex items-center gap-1 hover:bg-[#AC4D53] p-3 rounded-t-lg transition"
              >
                Trufas <FontAwesomeIcon icon={faAngleDown} />
              </a>

              <div
                className="absolute top-full -left-6  mb-2 
                                    opacity-0 group-hover:opacity-100 
                                    pointer-events-none group-hover:pointer-events-auto
                                    transition-all duration-300 
                                    "
              >
                <div className="bg-[#AC4D53] border rounded-2xl w-4xl text-white ">
                  <div className="text-md grid grid-cols-2 gap-8 p-6 cursor-pointer">
                    <a>Chocolates</a>
                    <a>Tabletes</a>
                    <a>Bombons</a>
                    <a>Kits e Presentes</a>
                    <a>Moda</a>
                    <a>Mesa e Cozinha</a>
                    <img src={produto01} alt="" />
                    <img src={produto02} alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/*MODAL 02 - Dia dos Pais*/}
            <div className="relative inline-block group top-3">
              <a
                href="#"
                className="flex items-center gap-1 hover:bg-[#AC4D53] p-3 rounded-t-lg transition"
              >
                Dia dos Pais <FontAwesomeIcon icon={faAngleDown} />
              </a>

              <div className="absolute top-full -left-22  mb-2 opacity-0 group-hover:opacity-100  pointer-events-none group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-[#AC4D53] border rounded-2xl w-4xl text-white ">
                  <div className="text-md grid grid-cols-2 gap-8 p-6 cursor-pointer">
                    <a>Chocolates</a>
                    <a>Tabletes</a>
                    <a>Bombons</a>
                    <a>Kits e Presentes</a>
                    <a>Moda</a>
                    <a>Mesa e Cozinha</a>
                    <img src={produto01} alt="" />
                    <img src={produto02} alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/*MODAL 03 - Produtos*/}
            <div className="relative inline-block group top-3">
              <a
                href="#"
                className="flex items-center gap-1 hover:bg-[#AC4D53] p-3 rounded-t-lg transition"
              >
                Produtos <FontAwesomeIcon icon={faAngleDown} />
              </a>
              <div className="absolute top-full -left-52  mb-2 opacity-0 group-hover:opacity-100  pointer-events-none group-hover:pointer-events-auto transition-all duration-300">
                <div className="bg-[#AC4D53] border rounded-2xl w-4xl text-white ">
                  <div className="text-md grid grid-cols-2 gap-8 p-6 cursor-pointer">
                    <a>Chocolates</a>
                    <a>Tabletes</a>
                    <a>Bombons</a>
                    <a>Kits e Presentes</a>
                    <a>Moda</a>
                    <a>Mesa e Cozinha</a>
                    <img src={produto01} alt="" />
                    <img src={produto02} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative inline-block group top-3">
              <a
                href="#"
                className="flex items-center gap-1 hover:bg-[#AC4D53] p-3 rounded-t-lg transition hover:border-b-2"
              >
                Sobre nós
              </a>
            </div>
            <div className="relative inline-block group top-3">
              <a
                href="#"
                className="flex items-center gap-1 hover:bg-[#AC4D53] p-3 rounded-t-lg transition hover:border-b-2"
              onClick={abrirCarrinho}>
                <FontAwesomeIcon icon={faCartShopping} /> Meu carrinho
              </a>
            </div>
          </div>
        </nav>
      </section>
      {/*MOBILE*/}
      <section className="max-md:block md:hidden">
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
              <div
                className="absolute top-full right-0  mb-2 
                                opacity-0 group-hover:opacity-100 
                                pointer-events-none group-hover:pointer-events-auto
                                transition-all duration-300 
                                whitespace-nowrap"
              >
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
  );
}

export default NavBar