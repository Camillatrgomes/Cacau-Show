import logo from "../assets/logo.png";

function Footer(){
    return(
<footer className="bottom-0 left-0 right-0 z-40 bg-[#1A0D00] text-white">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 py-6 px-6">   
                 <img src={logo} alt="" />
            <p>© 2025 | Site desenvolvido para estudos.</p>
        </div>
        </footer>    

    )
}

export default Footer