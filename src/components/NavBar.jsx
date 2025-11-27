function NavBar() {
  return (
     <nav className="fixed top-0 w-full bg-purple-700 h-16">
        
        <div className="row h-15 mx-auto flex flex-row items-center justify-between gap-8 text-white">
            <a className="hover:text-[#9ab0ce]" href="#livros">Literatura</a>
            <a className="hover:text-[#9ab0ce]" href="#favoritos">Favoritos</a>
            <a className="hover:text-[#9ab0ce]" href="#encomenda">Encomende aqui</a>
      <input className="w-70 border-white rounded-4xl grid grid-flow-col justify-items-end" type="search" name="" id="search" placeholder="Busque aqui o que procura" />
      </div>
    </nav>
  )
}

export default NavBar