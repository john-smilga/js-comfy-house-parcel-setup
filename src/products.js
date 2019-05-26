import img1 from "./images/product-1.jpeg";
import img2 from "./images/product-2.jpeg";
import img3 from "./images/product-3.jpeg";
import img4 from "./images/product-4.jpeg";
import img5 from "./images/product-5.jpeg";
import img6 from "./images/product-6.jpeg";
import img7 from "./images/product-7.jpeg";
import img8 from "./images/product-8.jpeg";

export default {
  items: [
    {
      sys: { id: "1" },
      fields: {
        title: "queen panel bed",
        price: 10.99,
        image: { fields: { file: { url: img1 } } }
      }
    },
    {
      sys: { id: "2" },
      fields: {
        title: "king panel bed",
        price: 12.99,
        image: { fields: { file: { url: img2 } } }
      }
    },
    {
      sys: { id: "3" },
      fields: {
        title: "single panel bed",
        price: 12.99,
        image: { fields: { file: { url: img3 } } }
      }
    },
    {
      sys: { id: "4" },
      fields: {
        title: "twin panel bed",
        price: 22.99,
        image: { fields: { file: { url: img4 } } }
      }
    },
    {
      sys: { id: "5" },
      fields: {
        title: "fridge",
        price: 88.99,
        image: { fields: { file: { url: img5 } } }
      }
    },
    {
      sys: { id: "6" },
      fields: {
        title: "dresser",
        price: 32.99,
        image: { fields: { file: { url: img6 } } }
      }
    },
    {
      sys: { id: "7" },
      fields: {
        title: "couch",
        price: 45.99,
        image: { fields: { file: { url: img7 } } }
      }
    },
    {
      sys: { id: "8" },
      fields: {
        title: "table",
        price: 33.99,
        image: { fields: { file: { url: img8 } } }
      }
    }
  ]
};
