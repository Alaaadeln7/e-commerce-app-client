import { ListFilter, Search } from "lucide-react";
import ProductList from "./ProductList";
import { useState } from "react";

const ShopProduct = () => {
  const [category, setCategory] = useState("");
  return (
    <div className="shop-product">
      <div className="container">
        <div className="content">
          <div className="head flex justify-around items-center space-x-2 flex-wrap">
            {/* left side */}
            <div className="left flex justify-center items-center space-x-5">
              <button
                onClick={() => setCategory("")}
                className="btn w-5/12 text-primary hover:bg-primary hover:text-white"
              >
                all product
              </button>

              <button
                onClick={() => setCategory("face")}
                className="btn w-5/12 text-primary hover:bg-primary hover:text-white"
              >
                face
              </button>
              <span>|</span>
              <button
                onClick={() => setCategory("body")}
                className="btn w-5/12 text-primary hover:bg-primary hover:text-white"
              >
                body
              </button>
            </div>
            {/* right side  */}
            <div className="flex space-x-5 flex-wrap">
              <div className="flex justify-center items-center space-x-3  border-b-2 border-gray-400">
                <Search />
                <input
                  className="outline-none"
                  type="text"
                  name=""
                  placeholder="Search Product"
                />
              </div>
              <div className="btn flex">
                <h3>sort by</h3>
                <ListFilter className="filter" />
              </div>
            </div>
          </div>
          <div className="body">
            <ProductList category={category} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
