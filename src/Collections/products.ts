import { Product } from '../Common/Models/product'
const tempProducts: Product[] = [
    {
        id: 1,
        title: "Cappuccino",
        price: 5.50,
        description: "A classic Italian espresso drink with steamed milk and a frothy top.",
        category: {
          id: 1,
          name: "Drinks",
          image: "https://placeimg.com/640/480/any?r=0.591926261873231"
        },
        images: [
          "https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg"
        ]
    },
    {
        id: 2,
        title: "Colombian Cold Brew",
        price: 4.25,
        description: "Smooth and refreshing cold brew coffee, made with Colombian beans and steeped for 18 hours.",
        category: {
            id: 1,
            name: "Drinks",
            image: "https://placeimg.com/640/480/any?r=0.591926261873231"
        },
        images: [
            "https://images.pexels.com/photos/5947094/pexels-photo-5947094.jpeg"
        ]
    },
    {
        id: 3,
        title: "Latte",
        price: 4.25,
        description: "Smooth and refreshing cold brew coffee, made with Colombian beans and steeped for 18 hours.",
        category: {
            id: 1,
            name: "Drinks",
            image: "https://placeimg.com/640/480/any?r=0.591926261873231"
        },
        images: [
            "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg"
        ]
    },
    {
        id: 4,
        title: "Aguapanela",
        price: 4.25,
        description: "Smooth and refreshing cold brew coffee, made with Colombian beans and steeped for 18 hours.",
        category: {
            id: 1,
            name: "Drinks",
            image: "https://media.istockphoto.com/id/835605062/photo/hot-sugarcane-water-with-lemon.jpg"
        },
        images: [
            "https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg"
        ]
    },
    {
        id: 5,
        title: "Mango Smoothie",
        price: 3.25,
        description: "Soft and cheesy Colombian rolls, perfect for a light breakfast or snack.",
        category: {
            id: 2,
            name: "Drinks",
            image: "https://placeimg.com/640/480/any?r=0.4695465546554655"
        },
        images: [
            "https://images.pexels.com/photos/14509267/pexels-photo-14509267.jpeg"
        ]
    },
    {
        id: 6,
        title: "Pan de Bono",
        price: 4.95,
        description: "A classic Colombian dessert soaked in three milks, with a light and airy texture.",
        category: {
            id: 3,
            name: "Foods",
            image: "https://placeimg.com/640/480/any?r=0.9546546546546547"
        },
        images: [
            "https://images.pexels.com/photos/6053926/pexels-photo-6053926.jpeg"
        ]
    },
    {
        id: 7,
        title: "Arepa con Queso",
        price: 5.95,
        description: "A grilled cornmeal flatbread filled with gooey cheese, a Colombian staple.",
        category: {
            id: 2,
            name: "Foods",
            image: "https://placeimg.com/640/480/any?r=0.4695465546554655"
        },
        images: [
            "https://images.pexels.com/photos/6037915/pexels-photo-6037915.jpeg"
        ]
    },
    {
        id: 8,
        title: "Churros",
        price: 3.75,
        description: "A creamy, custard-like dessert with a rich caramel sauce.",
        category: {
            id: 3,
            name: "Desserts",
            image: "https://placeimg.com/640/480/any?r=0.9546546546546547"
        },
        images: [
            "https://images.pexels.com/photos/12035620/pexels-photo-12035620.jpeg"
        ]
    },
    {
        id: 9,
        title: "Empanada",
        price: 3.75,
        description: "A creamy, custard-like dessert with a rich caramel sauce.",
        category: {
            id: 3,
            name: "Desserts",
            image: "https://placeimg.com/640/480/any?r=0.9546546546546547"
        },
        images: [
            "https://images.pexels.com/photos/5881013/pexels-photo-5881013.jpeg"
        ]
    },
    {
        id: 10,
        title: "Patacones con Hogao",
        price: 3.75,
        description: "A creamy, custard-like dessert with a rich caramel sauce.",
        category: {
            id: 3,
            name: "Desserts",
            image: "https://placeimg.com/640/480/any?r=0.9546546546546547"
        },
        images: [
            "https://images.pexels.com/photos/6210449/pexels-photo-6210449.jpeg"
        ]
    },
    {
        id: 11,
        title: "Tres Leches Cake",
        price: 3.75,
        description: "A creamy, custard-like dessert with a rich caramel sauce.",
        category: {
            id: 3,
            name: "Desserts",
            image: "https://placeimg.com/640/480/any?r=0.9546546546546547"
        },
        images: [
            "https://images.pexels.com/photos/19786218/pexels-photo-19786218/free-photo-of-cheesecake-with-cherry-on-a-plate.jpeg"
        ]
    },
    {
        id: 12,
        title: "Flan de Caramelo",
        price: 3.75,
        description: "A creamy, custard-like dessert with a rich caramel sauce.",
        category: {
            id: 3,
            name: "Desserts",
            image: "https://placeimg.com/640/480/any?r=0.9546546546546547"
        },
        images: [
            "https://images.pexels.com/photos/302468/pexels-photo-302468.jpeg"
        ]
    },
    {
        id: 13,
        title: "Arroz con Leche",
        price: 3.75,
        description: "A creamy, custard-like dessert with a rich caramel sauce.",
        category: {
            id: 3,
            name: "Desserts",
            image: "https://placeimg.com/640/480/any?r=0.9546546546546547"
        },
        images: [
            "https://images.pexels.com/photos/15698321/pexels-photo-15698321/free-photo-of-rice-pudding-in-a-glass.jpeg"
        ]
    },
    {
        id: 14,
        title: "Buñuelos",
        price: 3.75,
        description: "A creamy, custard-like dessert with a rich caramel sauce.",
        category: {
            id: 3,
            name: "Desserts",
            image: "https://placeimg.com/640/480/any?r=0.9546546546546547"
        },
        images: [
            "https://images.pexels.com/photos/3285135/pexels-photo-3285135.jpeg"
        ]
    }
]

export default tempProducts