import { useState } from "react";
import alexander from "../../assets/images/Alexander-removebg-preview.png";
import { CiShoppingCart } from "react-icons/ci";
import "./limitProduct.css";

const LimitProduct = () => {
  const [showBestSeller, setShowBestSeller] = useState(true);

  const bestSiller = [
    {
      id: 1,
      isBestSiller: "Best Seller",
      img: alexander,
      title: "Product Title",
      description: "Deserunt non fugiat aute cons",
      price: 32,
      discount: 50,
      shopIcon: <CiShoppingCart />,
    },
    {
      id: 2,
      isBestSiller: "Best Seller",
      img: alexander,
      title: "Product Title",
      description: "Deserunt non fugiat aute cons",
      price: 32,
      discount: 50,
      shopIcon: <CiShoppingCart />,
    },
    {
      id: 2,
      isBestSiller: "Best Seller",
      img: alexander,
      title: "Product Title",
      description: "Deserunt non fugiat aute cons",
      price: 32,
      discount: 50,
      shopIcon: <CiShoppingCart />,
    },
    {
      id: 2,
      isBestSiller: "Best Seller",
      img: alexander,
      title: "Product Title",
      description: "Deserunt non fugiat aute cons",
      price: 32,
      discount: 50,
      shopIcon: <CiShoppingCart />,
    },
  ];

  return (
    <div className="limtProduct">
      <div className="container">
        <h1>Our Products</h1>
        <div className="btns">
          <button
            className="btn bg-primary text-white w-2/12 hover:bg-primary/80"
            onClick={() => setShowBestSeller(true)}
          >
            Best Seller
          </button>
          <button
            className="btn bg-primary text-white w-2/12 hover:bg-primary/80"
            onClick={() => setShowBestSeller(false)}
          >
            New Product
          </button>
        </div>
        <div className="content">
          {bestSiller.map((product) => (
            <div key={product.id} className="product-card">
              <div className="image">
                <img src={product.img} alt={product.title} />
              </div>
              {showBestSeller && (
                <span className="badge">{product.isBestSiller}</span>
              )}
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <div className="foot">
                <h3 className="price">
                  ${product.price}{" "}
                  <span className="discount">${product.discount}</span>
                </h3>
                <button className="btn btn-outline rounded-full hover:bg-primary hover:border-primary">
                  <div className="text-2xl">{product.shopIcon}</div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LimitProduct;
