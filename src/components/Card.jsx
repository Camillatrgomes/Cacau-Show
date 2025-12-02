import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';


function Card(){
const produtos= [
    {img: img1,
    label:'Trufa laCreme ao Leite 13,5g',
    button:'Cacau Lovers ',
    labelButton:'Leve 4 e Pague 3 / Leve 10 e Pague 7',
    precoRiscado:'R$4,49/un',
    preco:'R$3,49/un',
    buttonCarrinho: 'Adicionar ao carrinho'
},

    {img: img2, label:'Trufa laCreme branco 13,5g',
    button:'Cacau Lovers ',
    labelButton:'Leve 4 e Pague 3 / Leve 10 e Pague 7',
    precoRiscado:'R$4,49/un',
    preco:'R$3,49/un',
    buttonCarrinho: 'Adicionar ao carrinho'
},
    


    {img: img3, label:'Combo de trufa laCreme 28g',
    button:'Cacau Lovers ',
    labelButton:'Leve 4 e Pague 3 / Leve 10 e Pague 7',
    precoRiscado:'R$4,49/un',
    preco:'R$3,49/un',
    buttonCarrinho: 'Adicionar ao carrinho'
},
]
    return(
        
        <section className='row'>
        <div className=' cards-container grid grid-flow-col pt-24 gap-x-20'>
        {produtos.map (( produtos,index) => (
            <div key={index} className='w-80 bg-white rounded-2xl shadow-lg mt-24'>
                <img className='w-full h-72 object-cover-my-8' src={produtos.img} />

                <h3 className='text-lg font-semibold text-gray-900 my-6 pt-4 px-3'>{produtos.label}</h3>

                <button className='bg-[#AC4D53] text-white text-md px-5 ml-1 rounded-2xl text-start'>{produtos.button} <br /> {produtos.labelButton}</button>
               
                <div>
                    <p className='text-gray-700 text-md pt-8 px-3'><s>{produtos.precoRiscado}</s></p>
                    <p className='text-gray-700 text-2xl px-3'> {produtos.preco}</p>
                    <button></button>
                </div>

                <button className='bg-[#068421] text-white text-md w-full py-6 rounded-b-lg text-center inset-shadow-sm inset-shadow-black-500'>{produtos.buttonCarrinho}</button>
            </div>
        )) }
        </div>
        </section>
    )
}
export default Card