const ingredientsMap = [
  { name: "Грибы", slug: "mushrooms" },
  { name: "Чеддер", slug: "cheddar" },
  { name: "Салями", slug: "salami" },
  { name: "Ветчина", slug: "ham" },
  { name: "Ананас", slug: "ananas" },
  { name: "Бекон", slug: "bacon" },
  { name: "Лук", slug: "onion" },
  { name: "Чили", slug: "chile" },
  { name: "Халапеньо", slug: "jalapeno" },
  { name: "Маслины", slug: "olives" },
  { name: "Томаты", slug: "tomatoes" },
  { name: "Лосось", slug: "salmon" },
  { name: "Моцарелла", slug: "mozzarella" },
  { name: "Пармезан", slug: "parmesan" },
  { name: "Блю чиз", slug: "blue_cheese" },
];

export default (item) => {
  const { id, name, image, price } = item;

  return {
    id,
    name,
    image,
    price,
    value: 0,
    slug: ingredientsMap.find((item) => name === item.name).slug,
  };
};
