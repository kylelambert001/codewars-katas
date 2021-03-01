const greet = (str) => {
  const name = str[0].toUpperCase() + str.slice(1).toLowerCase() + "!";
  return `Hello ${name}`;
};
