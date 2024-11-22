export const categories = [
  {
    id: 1,
    name: "pizza",
    image: require("../assets/images/icons8-pizza-96.png"),
  },
  //complete this categories with Burger, Italian, Chinese, Noodles
  {
    id: 2,
    name: "Burger",
    image: require("../assets/images/burgerIcon.png"),
  },
  {
    id: 3,
    name: "Italian",
    image: require("../assets/images/icons8-spaghetti-96.png"),
  },
  {
    id: 4,
    name: "Chinese",
    image: require("../assets/images/icons8-takeout-box-96.png"),
  },
  {
    id: 5,
    name: "Noodles",
    image: require("../assets/images/icons8-spaghetti-96.png"),
  },
  {
    id: 6,
    name: "Sweets",
    image: require("../assets/images/icons8-cupcake-emoji-96.png"),
  },
];

export const featured = {
  id: 1,
  title: "Hot and Spicy",
  description: "Soft and tender fried chicken",
  restaurants: [
    {
      id: 1,
      name: "Papa Jhons",
      image: require("../assets/images/papa-jhons.jpg"),
      description: "Hot and spicy pizzas",
      lng: 38.2145602,
      lat: -85.5324269,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "Giant Pizza",
          description: "Cheezy Tomato pizza",
          price: 50,
          image: require("../assets/images/pizza.jpeg"),
        },
        {
          id: 2,
          name: "Vegan Pizza",
          description: "Cheezy garlic pizza",
          price: 10,
          image: require("../assets/images/veganPizza.jpeg"),
        },
        {
          id: 3,
          name: "Magarita Pizza",
          description: "tomato pizza",
          price: 10,
          image: require("../assets/images/pizzaJamon.webp"),
        },
      ],
    },
    {
      id: 2,
      name: "KFC",
      image: require("../assets/images/alitassss.webp"),
      description: "Fried chicken",
      lng: 38.2145602,
      lat: -85.5324269,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "Fried Chicken",
          description: "Cheezy garlic pizza",
          price: 10,
          image: require("../assets/images/pollo-frito.webp"),
        },
        {
          id: 2,
          name: "Wings",
          description: "Cheezy garlic pizza",
          price: 10,
          image: require("../assets/images/alitassss.webp"),
        },
        {
          id: 3,
          name: "nuggets",
          description: "Cheezy garlic pizza",
          price: 10,
          image: require("../assets/images/nuggets.jpeg"),
        },
      ],
    },
  ],
};
