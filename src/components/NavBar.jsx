function NavBar() {
  return (
    <>

     <nav className="fixed top-0 w-full bgHeader h-45">

        <div className="grid grid-flow-col align-center justify-center col-auto">
          <img src="/src/assets/logo.png" alt="" className=" left-1 top-3 fixed" />
        </div>

          <div className="relative inset-y-8 left-30 flex align-center justify-center columns-4 gap-7">

                <input className="w-120 h-10 border-white rounded-4xl " type="search" name="" id="search" placeholder="Buscar Produto" />
                
                <a className="hover:text-[#cacaca]" href="#">Encontre uma loja</a>

                <button className="bg-[#9C7561] hover:bg-[#835c49] text-white text-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">Faça o Login</button>

                <button className="bg-[#9C7561] hover:bg-[#835c49] text-white text-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">Cacau Lovers</button>

          </div>

            <div className="row h-15 mx-auto flex flex-row items-center justify-between gap-8 text-white">
                <a className="hover:text-[#cacaca]" href="#">Trufas</a>
                <a className="hover:text-[#cacaca]" href="#">Dia dos Pais</a>
                <a className="hover:text-[#cacaca]" href="#">Produtos</a>
                <a className="hover:text-[#cacaca]" href="#">Sobre nós</a>
                <button type="submit" className="inset-x-20 flex w-40 rounded-2xl shadow-lg">carrinho</button>
          </div>
    </nav>
    </>
  )
}

export default NavBar