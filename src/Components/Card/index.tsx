import { Product } from "../../Common/Models/product"

const Card = ({prod}: {prod: Product}) => {
    return (
        <div className="bg-white w-56 h-60">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{prod.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg " 
                        src={prod.images?.[0]} alt={prod.title} />
                <div className="absolute cursor-pointer top-0 right-0 flex justify-center align-middle bg-secondary w-6 h-6 rounded-full font-bold m-2">+</div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{prod.title}</span>
                <span className="test-lg font-medium">{prod.price}</span>
            </p>
        </div>
    )
}

export default Card