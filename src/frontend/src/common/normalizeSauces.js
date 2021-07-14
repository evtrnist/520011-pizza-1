const sauceMap = [
  {
    name: "Томатный",
    value: "tomato",
  },
  {
    name: "Сливочный",
    value: "creamy",
  },
];

export default (item, index) => {
  const { id, name, price } = item;

  return {
    id,
    name,
    price,
    isChecked: index === 0,
    value: sauceMap.find((item) => name === item.name).value,
  };
};
