import Banner from "../assets/banner.png";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCartShopping,
faPhone,
} from "@fortawesome/free-solid-svg-icons";


function Home() {

    return (
      <section className="relative sm:h-[30vh] lg:h-[50vh]">
        <div className="inset-0 my-16 ">
          <img
            src={Banner}
            alt=""
            className="w-full object-cover"
          />
 
<div className="pt-16 w-full ">
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
                          <button className="bg-[#AC4D53] hover:bg-[#822a30] text-white text-md rounded-2xl shadow-lg transition-all duration-300">
                Cupom de Primeira compra <br />
                <FontAwesomeIcon icon={faCheck} /> Clique aqui para copiar
              </button>

              <button className="bg-[#AC4D53] hover:bg-[#822a30] text-white text-md rounded-2xl shadow-lg transition-all duration-300"><FontAwesomeIcon icon={faCartShopping} /> Frete Grátis à partir de <br />
                R$150,00 em compras
              </button>

              <button className="bg-[#AC4D53] hover:bg-[#822a30] text-white text-md rounded-2xl shadow-lg  transition-all duration-300">
              <FontAwesomeIcon icon={faPhone}  bounce/> Compre pelo Whatsapp
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Home