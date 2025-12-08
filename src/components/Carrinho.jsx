import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Carrinho({ aberto, fechar }) {
  if (!aberto) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        onClick={fechar}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div className="relative bg-white w-full max-w-md h-full shadow-2xl p-6">
        <button
          onClick={fechar}
          className="absolute top-4 right-4 text-2xl text-gray-700"
        >
          x
        </button>

        <h2 className="text-xl font-bold text-[#AC4D53]"><FontAwesomeIcon icon={faCartShopping} /> Meu carrinho</h2>
        
      </div>
    </div>
  );
}

export default Carrinho;
