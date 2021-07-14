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

export default (item, index) => {
  const { id, name, image, description, price } = item;
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
