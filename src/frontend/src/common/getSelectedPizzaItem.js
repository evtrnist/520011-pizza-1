export default (pizza, name) => {
  return pizza[name] && pizza[name].find((item) => item.isChecked);
};
