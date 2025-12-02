import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';


function Card(){
const produtos= [
    {img: img1,
    label:'Trufa laCreme ao Leite 13,5g',
    button:'Cacau Lovers ',
    labelButton:'Leve 4 e Pague 3 / Leve 10 e Pague 7',
    preco:'R$3,49/un'},

    {img: img2, label:'Trufa laCreme branco 13,5g',
    button:'Cacau Lovers ',
    labelButton:'Leve 4 e Pague 3 / Leve 10 e Pague 7',
    preco:'R$3,49/un'},


    {img: img3, label:'Combo de trufa laCreme 28g',
    button:'Cacau Lovers ',
    labelButton:'Leve 4 e Pague 3 / Leve 10 e Pague 7',
    preco:'R$3,49/un'},
]
    return(
        
        <section id='produtos'>
        <div className='row cards-container grid grid-flow-col inset-y-44'>
        {produtos.map (( produtos,index) => (
            <div key={index} className='w-80 bg-white rounded-2xl overflow-hidden shadow-lg mt-12'>
                <img className='w-full h-72 object-cover -my-8' src={produtos.img} />

                <h3 className='text-lg font-semibold text-gray-900 my-6 pt-8'>{produtos.label}</h3>

                <button className='inline-block bg-[#9C7561] text-white text-md px-3 py-1 rounded-2xl'>{produtos.button} <br /> {produtos.labelButton}</button>
                <p className='text-gray-700 text-2xl py-8'>{produtos.preco}</p>
            </div>
        )) }
        </div>
        </section>
    )
}
export default Card