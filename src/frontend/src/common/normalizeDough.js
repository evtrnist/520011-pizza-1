const doughMap = [
  {
    name: "Тонкое",
    value: "light",
  },
  {
    name: "Толстое",
    value: "large",
  },
];

export default (items, index) => {
  const { id, name, image, description, price } = items;
  return {
    id,
    name,
    image,
    description,
    price,
    isChecked: index === 0,
    value: doughMap.find((item) => name === item.name).value,
  };
};
