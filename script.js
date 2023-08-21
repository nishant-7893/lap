const data = [
  {
    id: 1,
    name: "HP",
    img: "./images/hp.jpg",
    description: `HP Laptop 15s, 12th Gen Intel Core i5-1235U, 15.6-inch (39.6 cm),
        FHD, 8GB DDR4, 512GB SSD, Intel Iris Xe Graphics, Backlit KB, Thin
        & Light (Win 11, MSO 2021, Silver, 1.69 kg), fq5111TU`,
    price: 45000,
    quantity: 10,
    rating: 3.9,
  },
  {
    id: 2,
    name: "Dell",
    img: "./images/dell.jpg",
    description: `Dell 15 Laptop, Intel Core i3-1115G4, 8GB/1TB + 256GB SSD/15.6" (39.62cm) FHD, Comfortview to Reduce Harmful Blue Light/Mo...
    Dell 15 Laptop, Intel Core i3-1115G4, 8GB/1TB + 256GB SSD/15.6" (39.62cm) FHD, Comfortview to Reduce Harmful Blue Light/Mobile Connect/Windows 11 + MSO'21/15 Mon`,
    price: 55000,
    quantity: 20,
    rating: 4.6,
  },
  {
    id: 3,
    name: "apple",
    img: "./images/Apple.jpg",
    description: `Apple Laptop 15s, 12th Gen Intel Core i5-1235U, 15.6-inch (39.6 cm),
        FHD, 8GB DDR4, 512GB SSD, Intel Iris Xe Graphics, Backlit KB, Thin
        & Light (Win 11, MSO 2021, Silver, 1.69 kg), fq5111TU`,
    price: 155000,
    quantity: 5,
    rating: 4.5,
  },
  {
    id: 4,
    name: "asus",
    img: "./images/asus.jpg",
    description: `ASUS Vivobook 15, Intel Core i5-1235U 12th Gen, 15.6" (39.62 cm) FHD, Thin and Light Laptop (8GB RAM/512GB SSD/Windows 11 Home/Office 2021/Backlit Keyboard/Quiet Blue/1.7 kg), X1502ZA-EJ532WS
    5.05.0 out of 5 stars (100% 4+ stars)`,
    price: 54950,
    quantity: 8,
    rating: 3.8,
  },
  {
    id: 5,
    name: "acer",
    img: "./images/acer.jpg",
    description: `Acer Aspire Lite 11th Gen Intel Core i5-1155G7 Thin and Light Laptop (8 GB RAM/512GB SSD/Intel Iris Xe Graphics, Win 11 Home) AL15-51, 39.62cm (15.6") Full HD Display, Metal Body, Steel Gray, 1.59 Kg
    3.33.3 out of 5 stars (52% 4+ stars)`,
    price: 40999,
    quantity: 8,
    rating: 5,
  },
];
const container = document.querySelector(".container");
const productList = document.querySelector(".products");
const categ = document.querySelector(".category");
// console.log(categ);

const printData = (prod) => {
  const updatedData = prod.map(
    (item, index) =>
      `
      
      <div class="laptop">
        <div class="img">
          <img src="${item.img}" />
        </div>
        <div class="product-details">
          <span>${item.description}</span>
          <span>₹${item.price}</span>
          <span>Quantity:${item.quantity}</span>
          <span>Rating:${item.rating} </span>

        </div>
      </div>
      `
  );
  productList.innerHTML = updatedData;
};

const selectCategory = () => {
  let e = document.getElementById("selects");
  let value = e.value;
  //   console.log(value);

  if (value == "low") {
    data.sort((a, b) => a.price - b.price);
  } else if (value == "high") {
    data.sort((a, b) => b.price - a.price);
  } else if (value == "quantity-low") {
    data.sort((a, b) => a.quantity - b.quantity);
  } else if (value == "quantity-high") {
    data.sort((a, b) => b.quantity - a.quantity);
  } else if (value == "rating-low") {
    data.sort((a, b) => a.rating - b.rating);
  } else if (value == "rating-high") {
    data.sort((a, b) => b.rating - a.rating);
  }
  printData(data);
};
