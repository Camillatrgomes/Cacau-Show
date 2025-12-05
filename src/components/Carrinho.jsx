import { use, useState } from "react"


function Carrinho() {
const {aberto, setAberto} = useState(false);
const abrir = () => setAberto(true)
const fechar = () => setAberto(false);

    return (
        <>
        {aberto  (
            <div className="fixed inset-0 z-50 flex justify-end">

            <div onClick={fechar} className="absolute inset-0 bg-black/70 backdrop-blur-sm" >

            <div className="relative bg-white w-full max-w-md h-full shadow-2xl p-6 overflow">

            <button onClick={fechar} className="absolute top-4 right-4 text-2xl" >x</button>
        
            <h2 className="">Meu carrinnho</h2>

            </div>
            </div>
            </div>

        )}
        </>
    )
}

export default Carrinho;