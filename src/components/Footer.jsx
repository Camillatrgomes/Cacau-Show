import logo from "../assets/logo.png";

function Footer(){
    return(

        <footer className="bg-[#1A0D00] flex justify-center items-center h-62 text-white gap-4 fixed">
            <img src={logo} alt="" />
            <p>© 2025 | Site desenvolvido para estudos.</p>

        </footer>             

    )
}

export default Footer