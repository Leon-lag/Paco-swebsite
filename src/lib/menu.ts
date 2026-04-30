export interface MenuItem {
  name: string;
  description: string;
  price?: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: "Popular Items",
    items: [
      {
        name: "The Ogden Burrito",
        description:
          "Our signature burrito packed with your choice of meat, rice, beans, and all the fixings.",
      },
      {
        name: "Chile Verde Burrito",
        description:
          "Tender pork simmered in tangy chile verde sauce, wrapped in a warm flour tortilla with rice and beans.",
      },
      {
        name: "Texano Burrito",
        description:
          "A Texas-sized burrito loaded with seasoned meat, cheese, peppers, and our special Texano sauce.",
      },
    ],
  },
  {
    name: "Tacos",
    items: [
      {
        name: "Mini Carne Asada Tacos",
        description:
          "Tender grilled carne asada on soft corn tortillas, topped with cilantro and onion.",
      },
      {
        name: "Mini Tacos De Carnitas",
        description:
          "Slow-cooked pulled pork on mini corn tortillas with fresh cilantro and onion.",
      },
      {
        name: "2 Steak Tacos",
        description:
          "Two generous steak tacos with your choice of toppings on soft tortillas.",
      },
      {
        name: "Shrimp Tacos",
        description:
          "Seasoned shrimp on soft tortillas with cabbage slaw, pico de gallo, and creamy chipotle sauce.",
      },
    ],
  },
  {
    name: "Burritos",
    items: [
      {
        name: "Breakfast Burrito Meat Lovers",
        description:
          "Loaded with eggs, bacon, sausage, ham, cheese, and crispy potatoes in a warm flour tortilla.",
      },
      {
        name: "Chile Verde Burrito",
        description:
          "Tender pork in tangy chile verde sauce, rice, and beans wrapped in a flour tortilla.",
      },
      {
        name: "Texano Burrito",
        description:
          "Our famous Texas-style burrito with seasoned meat, cheese, peppers, and special sauce.",
      },
    ],
  },
  {
    name: "Plates",
    items: [
      {
        name: "Enchilada Plate",
        description:
          "Three enchiladas smothered in your choice of sauce, served with rice and beans.",
      },
      {
        name: "Rolled Tacos",
        description:
          "Crispy rolled tacos served with guacamole, sour cream, and salsa.",
      },
    ],
  },
  {
    name: "Breakfast",
    items: [
      {
        name: "Breakfast Burrito Meat Lovers",
        description:
          "Eggs, bacon, sausage, ham, cheese, and crispy potatoes in a warm flour tortilla.",
      },
      {
        name: "Breakfast Burrito",
        description:
          "Eggs, potatoes, cheese, and your choice of meat wrapped in a warm flour tortilla.",
      },
    ],
  },
];
