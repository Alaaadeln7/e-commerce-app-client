import { ListFilter, Search } from "lucide-react";
import ProductList from "./ProductList";
import { useState } from "react";

const ShopProduct = () => {
  const [category, setCategory] = useState("");
  return (
    <div className="shop-product">
      <div className="container">
        <div className="content">
          <div className="head flex justify-around items-center space-x-2 flex-wrap gap-10">
            {/* left side */}
            <div className="left flex justify-center items-center space-x-5 flex-wrap gap-4">
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
            <div className="flex space-x-5 flex-wrap gap-5">
              <div className="flex justify-center items-center space-x-3  border-b-2 border-gray-400 py-4 sm:w-full px-5">
                <Search />
                <input
                  className="outline-none bg-transparent"
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
