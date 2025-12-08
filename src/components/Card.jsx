import { useState } from "react";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function ContadorComLimite() {
  const [quantidade, setQuantidade] = useState(0);
  const max = 55;
  return (
    <div className="w-32 bg-gray-100 border border-gray-300 rounded-md items-center justify-center">
      <button
        className="w-12 h-10 text-[#068421] text-md cursor-pointer text-center"
        onClick={() => setQuantidade(Math.max(0, quantidade - 1))}
        disabled={quantidade === 0}
      >
        -
      </button>

      <span className="w-12 h-12 disabled:bg-gray-300 text-gray-700 text-md text-center">
        {quantidade.toString().padStart(2, "0")}
      </span>

      <button
        className="w-12 h-12 text-[#068421] text-md cursor-pointer text-center"
        onClick={() => setQuantidade(Math.min(max, quantidade + 1))}
        disabled={quantidade >= max}
      >
        +
      </button>
    </div>
  );
}

function Card({ abrirCarrinho }) {
  const produtos = [
    {
      img: img1,
      label: "Trufa laCreme ao Leite 13,5g",
      button: " Cacau Lovers ",
      labelButton: " Leve 4 e Pague 3 / Leve 10 e Pague 7",
      precoRiscado: "R$5,49/un",
      preco: "R$3,49/un",
      buttonCarrinho: " Adicionar ao carrinho",
    },

    {
      img: img2,
      label: "Trufa laCreme branco 13,5g",
      button: " Cacau Lovers ",
      labelButton: " Leve 4 e Pague 3 / Leve 10 e Pague 7",
      precoRiscado: "R$5,49/un",
      preco: "R$3,49/un",
      buttonCarrinho: " Adicionar ao carrinho",
    },
    {
      img: img3,
      label: "Trufa laCreme Gianduia 13,5g",
      button: " Cacau Lovers ",
      labelButton: " Leve 4 e Pague 3 / Leve 10 e Pague 7",
      precoRiscado: "R$5,49/un",
      preco: "R$3,49/un",
      buttonCarrinho: " Adicionar ao carrinho",
    },

    {
      img: img4,
      label: "Trufa Bendito Cacao de Chocolate 70% Cacau 13,5g",
      button: " Cacau Lovers ",
      labelButton: " Leve 4 e Pague 3 / Leve 10 e Pague 7",
      precoRiscado: "R$5,49/un",
      preco: "R$3,49/un",
      buttonCarrinho: " Adicionar ao carrinho",
    },
    {
      img: img5,
      label: "Trufa Bendito Cacao de Chocolate 85% Cacau 13,5g",
      button: " Cacau Lovers ",
      labelButton: " Leve 4 e Pague 3 / Leve 10 e Pague 7",
      precoRiscado: "R$5,49/un",
      preco: "R$3,49/un",
      buttonCarrinho: " Adicionar ao carrinho",
    },
    {
      img: img6,
      label: "Trufa laCreme Kids de Chocolate ao Leite 13,5g",
      button: " Cacau Lovers ",
      labelButton: " Leve 4 e Pague 3 / Leve 10 e Pague 7",
      precoRiscado: "R$5,49/un",
      preco: "R$3,49/un",
      buttonCarrinho: " Adicionar ao carrinho",
    },
  ];

  return (
    <section className="py-12 md:pt-82 md:pb-22">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {produtos.map((produtos, index) => (
            <div key={index} className="w-80 bg-white rounded-2xl shadow-lg ">
              <img
                className="w-full h-72 object-cover border shadow bg-amber-100"
                src={produtos.img}
              />

              <h3 className="text-lg font-semibold text-gray-900 my-8 px-3">
                {produtos.label}
              </h3>

              <button className="bg-[#AC4D53] text-white text-md px-4 ml-1 rounded-2xl text-start cursor-pointer">
                <FontAwesomeIcon icon={faHeart} /> {produtos.button} <br />{" "}
                {produtos.labelButton}
              </button>

              <div className="relative grid grid-flow-col m-4">
                <p className=" text-gray-700 text-md  px-3">
                  <s>{produtos.precoRiscado}</s>
                  <br /> <strong>{produtos.preco}</strong>
                </p>
                <ContadorComLimite />
              </div>

              <button
                className="bg-[#068421] text-white text-md w-full py-6 rounded-b-lg text-center inset-shadow-sm inset-shadow-black-500 cursor-pointer"
                onClick={abrirCarrinho}>
                <FontAwesomeIcon icon={faCartShopping} />
                {produtos.buttonCarrinho}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Card;
