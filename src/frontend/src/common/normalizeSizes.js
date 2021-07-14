const sizesMap = [
  {
    name: "23 см",
    value: "small",
  },
  {
    name: "32 см",
    value: "normal",
  },
  {
    name: "45 см",
    value: "big",
  },
];

export default (item, index) => {
  const { id, name, image, multiplier } = item;
  return {
    id,
    name,
    image,
    multiplier,
    isChecked: index === 1,
    value: sizesMap.find((item) => name === item.name).value,
  };
};
