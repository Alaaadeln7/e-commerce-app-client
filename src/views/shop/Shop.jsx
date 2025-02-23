import "./shop.css";
import ShopProduct from "../shopProduct/ShopProduct";

const Shop = () => {
  return (
    <>
      <div className="shop-head">
        <div className="container">
          <div className="content">
            <h1 className="text-black text-4xl sm:text-6xl mt-16 sm:mt-10">
              Gift for your skin
            </h1>
            <p className="text-black max-w-[500px] mt-16 sm:mt-5">
              Aliquip fugiat ipsum nostrud ex et eu incididunt quis minim dolore
              excepteur voluptate
            </p>
          </div>
        </div>
      </div>
      <ShopProduct />
    </>
  );
};

export default Shop;
