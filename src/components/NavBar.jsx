function NavBar() {
  return (
    <>

     <nav className="fixed z-50 w-full bgHeader h-45">

        <div className="grid grid-flow-col  justify-center col-auto">
          <img src="/src/assets/logo.png" alt="" className=" left-4 align-middle fixed" />
        </div>

          <div className="relative inset-y-10 left-34 flex justify-center columns-4 gap-7">

                <input className="w-120 h-10 border-white rounded-4xl " type="search" name="" id="search" placeholder="Buscar Produto" />
                
                <a className="hover:text-[#cacaca] pt-3" href="#" >Encontre uma loja</a>

                <button className="bg-[#9C7561] hover:bg-[#835c49] text-white text-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">Faça o Login</button>

                <button className="bg-[#9C7561] hover:bg-[#835c49] text-white text-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">Cacau Lovers</button>

          </div>

            <div className="relative inset-y-20 left-34 mx-auto flex justify-center gap-28 text-white">
                <a className="hover:text-[#cacaca]" href="#">Trufas</a>
                <a className="hover:text-[#cacaca]" href="#">Dia dos Pais</a>
                <a className="hover:text-[#cacaca]" href="#produtos">Produtos</a>
                <a className="hover:text-[#cacaca]" href="#">Sobre nós</a>
                <button type="submit" className="flex w-40 rounded-2xl shadow-lg">carrinho</button>
          </div>
    </nav>
    </>
  )
}

export default NavBar