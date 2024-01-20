import { useState, useEffect } from "react";
import products from '../../Collections/products.ts';
import Card from "../../Components/Card";
import { Product } from "../../Common/Models/product.ts";

function Home() {
    const [items, setItems] = useState<Product[]>([]);
    useEffect(() => {
        const fakeCall = async () => {
        setTimeout(() => {
            setItems(products);
        }, 1000);
        };
        fakeCall();
    });

    return (
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {items?.map((item) => <Card prod={item} key={item.id}/>)}
        </div>
    )
}

export default Home;