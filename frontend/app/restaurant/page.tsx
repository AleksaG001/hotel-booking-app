import React from "react";
import Image from "next/image";

const RestaurantPage = () => {
  const menuItems = [
    {
      category: "Starters",
      items: [
        {
          name: "Bruschetta",
          description:
            "Grilled bread topped with diced tomatoes, garlic, and basil.",
          price: "$8",
        },
        {
          name: "Stuffed Mushrooms",
          description:
            "Mushrooms filled with cheese and herbs, baked to perfection.",
          price: "$10",
        },
        {
          name: "Garlic Bread",
          description: "Crispy garlic bread served with marinara sauce.",
          price: "$6",
        },
        {
          name: "Caesar Salad",
          description:
            "Fresh romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
          price: "$9",
        },
        {
          name: "Caprese Salad",
          description:
            "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
          price: "$12",
        },
      ],
    },
    {
      category: "Main Courses",
      items: [
        {
          name: "Grilled Salmon",
          description:
            "Fresh salmon fillet grilled to perfection, served with a lemon butter sauce.",
          price: "$20",
        },
        {
          name: "Ribeye Steak",
          description:
            "Juicy ribeye steak cooked to your liking, served with garlic mashed potatoes.",
          price: "$25",
        },
        {
          name: "Spaghetti Carbonara",
          description:
            "Classic Italian pasta with pancetta, egg, and Parmesan cheese.",
          price: "$18",
        },
        {
          name: "Chicken Alfredo",
          description:
            "Grilled chicken breast served over fettuccine pasta with Alfredo sauce.",
          price: "$19",
        },
        {
          name: "Vegetarian Lasagna",
          description:
            "Layers of pasta with ricotta, spinach, and marinara sauce, baked with mozzarella.",
          price: "$17",
        },
      ],
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Cheesecake",
          description:
            "Classic cheesecake with a graham cracker crust and strawberry topping.",
          price: "$8",
        },
        {
          name: "Chocolate Lava Cake",
          description:
            "Warm chocolate cake with a gooey center, served with vanilla ice cream.",
          price: "$9",
        },
        {
          name: "Tiramisu",
          description:
            "Traditional Italian dessert with coffee-soaked ladyfingers and mascarpone cream.",
          price: "$8",
        },
        {
          name: "Panna Cotta",
          description: "Creamy vanilla panna cotta with a raspberry coulis.",
          price: "$7",
        },
        {
          name: "Apple Pie",
          description:
            "Homemade apple pie served with a scoop of vanilla ice cream.",
          price: "$6",
        },
      ],
    },
    {
      category: "Beverages",
      items: [
        {
          name: "Espresso",
          description: "Rich and bold espresso shot.",
          price: "$3",
        },
        {
          name: "Cappuccino",
          description: "Espresso with steamed milk and foam.",
          price: "$4",
        },
        {
          name: "Fresh Orange Juice",
          description: "Freshly squeezed orange juice.",
          price: "$5",
        },
        {
          name: "House Wine",
          description: "Red or white wine from our house selection.",
          price: "$7",
        },
        {
          name: "Craft Beer",
          description: "Selection of local craft beers.",
          price: "$6",
        },
      ],
    },
  ];

  return (
    <div className="restaurant-page max-w-6xl mx-auto p-4 space-y-8 mt-6 mb-6">
      <div className="hero-section relative h-[500px] w-full mb-8">
        <Image
          className="object-cover rounded-lg shadow-lg"
          src="/assets/restoran.jpg"
          alt="Restaurant Hero"
          layout="fill"
          priority
        />
      </div>
      <div className="intro-section text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Our Restaurant</h1>
        <p className="text-gray-700">
          Experience gourmet dining with a beautiful ambiance and exceptional
          service.
        </p>
      </div>
      <div className="images-section flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <div className="image-container w-full md:w-1/2 relative h-64 md:h-96">
          <Image
            className="object-cover rounded-lg shadow-lg"
            src="/assets/bar.jpg"
            alt="Restaurant Interior"
            layout="fill"
          />
        </div>
        <div className="image-container w-full md:w-1/2 relative h-64 md:h-96">
          <Image
            className="object-cover rounded-lg shadow-lg"
            src="/assets/hrana.jpg"
            alt="Restaurant Dish"
            layout="fill"
          />
        </div>
      </div>

      <div className="menu-section space-y-8 ">
        <h2 className="text-3xl font-bold text-center ">Our Menu</h2>

        {menuItems.map((category, index) => (
          <div key={index} className="menu-category border-t-4 border-t-accent">
            <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
            <div className="menu-items space-y-4">
              {category.items.map((item, idx) => (
                <div key={idx} className="menu-item flex justify-between">
                  <div>
                    <h4 className="text-xl font-medium">{item.name}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <p className="text-xl font-medium">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;
