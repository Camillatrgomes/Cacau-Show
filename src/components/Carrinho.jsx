import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";


function Carrinho({ aberto, fechar }) {
  const produtos = [
    {
      img: img1,
      label: "Trufa laCreme ao Leite 13,5g",
      button: " Cacau Lovers ",
      labelButton: " Leve 4 e Pague 3 / Leve 10 e Pague 7",
      precoRiscado: "R$5,49/un",
      preco: "R$3,49/un",
      buttonCarrinho: " Adicionar ao carrinho",
    }
  ];

  if (!aberto) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-end ">
        <div
          onClick={fechar}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        <div className="relative bg-white w-full max-w-md h-full shadow-2xl">
          <button
            onClick={fechar}
            className="absolute top-4 right-4 text-2xl text-gray-700 cursor-pointer"
          >
            x
          </button>

          <h2 className="text-xl font-bold text-[#AC4D53] pl-6 pt-6">
            <FontAwesomeIcon icon={faCartShopping} /> Meu carrinho
          </h2>


          <div className="max-w-full mx-auto p-8">
            <div className="grid  gap-6 grid-cols-1">
              {produtos.map((produto, index) => (
                <div
                  key={index}
                  className=" bg-white rounded-2xl shadow-lg "
                >
                 <div className="flex relative m-4">
                  <img
                    className="h-48  border shadow bg-amber-100"
                    src={produto.img}
                  />
                  <h3 className="text-center pt-12 text-lg font-semibold text-gray-900 px-3">
                    {produto.label}
                  </h3> 
                  </div>
                    <p className=" text-gray-700 text-lg justify-between px-3 py-3">
                      <s>{produto.precoRiscado}</s> 
                      <strong> {produto.preco}</strong>
                    </p>
                </div>
              ))}
            </div>
          </div>
              <div className="fixed bottom-0 right-0">
          <button className="bg-[#068421] text-white text-md py-6 px-40 rounded-t-lg text-center cursor-pointer"
>Finalizar o pedido</button>
        </div>
        </div>
      </div>
    </>
  );
}

export default Carrinho;
