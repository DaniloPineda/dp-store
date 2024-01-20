const Card = () => {
    return (
        <div className="bg-white w-56 h-60">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">Drinks</span>
                <img className="w-full h-full object-cover rounded-lg " 
                        src="https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg" alt="cappuccino" />
                <div className="absolute cursor-pointer top-0 right-0 flex justify-center align-middle bg-secondary w-6 h-6 rounded-full font-bold m-2">+</div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">Cappuccino</span>
                <span className="test-lg font-medium">$6.99</span>
            </p>
        </div>
    )
}

export default Card