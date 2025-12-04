import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faLocationDot,
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <>

     <nav className="fixed z-50 w-full bgHeader h-45">

        <div className="grid grid-flow-col  justify-center col-auto">
          <img src="/src/assets/logo.png" alt="" className=" left-4 align-middle fixed" />
        </div>

          <div className="relative inset-y-10 left-34 flex justify-center columns-4 gap-7">
                
                <div className='-mr-14 flex items-center opacity-40 '>
                  <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>

                <input className=" w-120 h-10 border-white rounded-4xl " type="search" name="" id="search" placeholder= "      Buscar Produto" />
                
                <a className="hover:text-[#cacaca] pt-3" href="#" ><FontAwesomeIcon icon={faLocationDot}/>  Encontre uma loja</a>

                <button className="bg-[#9C7561] hover:bg-[#835c49] text-white text-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">Faça o Login</button>

                <button className="bg-[#AC4D53] hover:bg-[#822a30] text-white text-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"><FontAwesomeIcon icon={faHeart}/> Cacau Lovers</button>

          </div>

            <div className="relative inset-y-20 left-34 mx-auto flex justify-center gap-28 text-white">
                <a className="hover:text-[#cacaca]" href="#"><FontAwesomeIcon icon={faAngleDown}/>  Trufas</a>
                <a className="hover:text-[#cacaca]" href="#"><FontAwesomeIcon icon={faAngleDown}/>  Dia dos Pais</a>
                <a className="hover:text-[#cacaca]" href=""><FontAwesomeIcon icon={faAngleDown}/>  Produtos</a>
                <a className="hover:text-[#cacaca]" href="#"><FontAwesomeIcon icon={faAngleDown}/>  Sobre nós</a>
                <button type="submit" className="flex w-40 rounded-2xl shadow-lg justify-center inset- "><FontAwesomeIcon icon={faCartShopping} size="2x"/> </button>
          </div>
    </nav>
    </>
  )
}

export default NavBar