const formatToBRL = (value) => {
  let number = Number(value);
  if (!isNaN(number)) {

    let formattedValue = number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    if (!formattedValue.includes(",")) {
      formattedValue += ",00";
    } else {
      const [integerPart, decimalPart] = formattedValue.split(",");
      if (decimalPart.length === 1) {
        formattedValue += "0";
      }
    }

    return formattedValue;
  }
};

export { formatToBRL };
