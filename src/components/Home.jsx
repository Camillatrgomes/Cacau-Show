import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCartShopping,
faPhone,
} from "@fortawesome/free-solid-svg-icons";


function Home() {

    return (
      <section className="relative h-screen">
        <div className="absolute top-0 bottom-0 left-0 right-0 z-0 ">
          <img
            src="/src/assets/banner.png"
            alt=""
            className="w-full h-full pt-5 object-cover"
          />
          <div className=" w-full">
            <div className="flex gap-6 justify-center pt-24">
              <button className="bg-[#AC4D53] hover:bg-[#822a30] text-white text-md rounded-2xl shadow-lg transition-all duration-300">
                Cupom de Primeira compra <br />
                <FontAwesomeIcon icon={faCheck}/> Clique aqui para copiar
              </button>

              <button className="bg-[#AC4D53] hover:bg-[#822a30] text-white text-md rounded-2xl shadow-lg transition-all duration-300"><FontAwesomeIcon icon={faCartShopping}/> Frete Grátis à partir de <br />
                R$150,00 em compras
              </button>

              <button className="bg-[#AC4D53] hover:bg-[#822a30] text-white text-md rounded-2xl shadow-lg  transition-all duration-300">
              <FontAwesomeIcon icon={faPhone}/> Compre pelo Whatsapp
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Home