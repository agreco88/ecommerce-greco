const products = [
  {
    id: 1,
    name: "iPhone 12 Pro",
    price: 1000,
    category: "celular",
    img: "https://images.unsplash.com/photo-1509741102003-ca64bfe5f069?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    imgAlt: "iPhone 12 with box and accesories",
    stock: 25,
    reviews: { average: 5, totalCount: 1487 },
    description:
      "A superpowerful chip. 5G speed. An advanced dual‑camera system. A Ceramic Shield front that's tougher than any smartphone glass. And a bright, beautiful OLED display. iPhone 12 has it all — in two great sizes.",
  },
  {
    id: 2,
    name: "Samsung S21+",
    price: 800,
    category: "celular",
    img: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    imgAlt: "Silver Samsung S21+ with box",
    stock: 16,
    reviews: { average: 4, totalCount: 1291 },
    description:
      "Super high-resolution camera and 8K video. Galaxy's fastest processor yet. All-day intelligent battery. A striking new design. Everyday just got epic.",
  },
  {
    id: 3,
    name: "iPad Air 2021",
    price: 1200,
    category: "tablet",
    img: "https://images.unsplash.com/photo-1551204570-a10966726988?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2414&q=80",
    imgAlt: "White iPad Air 2021",
    stock: 10,
    reviews: { average: 2, totalCount: 987 },
    description:
      "With A14 Bionic, you have the power to bring your ideas to life. Shoot a 4K video, then edit it right on iPad Air.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        products.filter((product) => {
          return product.category === category;
        })
      );
    }, 1000);
  });
};

export const getProduct = (id) => {
  return new Promise((resolve) => {
    const prod = products.find((p) => p.id === parseInt(id));
    setTimeout(() => {
      resolve(prod);
    }, 1000);
  });
};
