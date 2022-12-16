const productName = prompt("Please type product name");
const goodsQuantity = prompt("Please type product Quantity");
const productCategory = prompt("Please type product category");
const productPrice = prompt("Please type product price");

if (Number.isNaN(parseFloat(goodsQuantity || productPrice))) {
  console.log('Вы ввели некорректные данные');
} else {
  console.log(
    `На складе ${goodsQuantity} единицы товара ${productName} на сумму ${
      goodsQuantity * productPrice} деревянных`
  );
}

