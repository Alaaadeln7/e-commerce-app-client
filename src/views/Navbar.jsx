import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu } from "lucide-react";
import useCart from "../hooks/useCart";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import LazyImage from "../components/LazyImage";

export default function Navbar() {
  const { user } = useAuth();
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed bg-base-300 w-full top-0 z-50 shadow-sm px-6">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <h1 className="text-2xl uppercase text-base-800">
          <Link to={"/"}>logo</Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to={"/shop"}
            className="hover:text-primary text-base-800 transition-colors font-semibold"
          >
            Shop
          </Link>
          <Link
            to={"/offers"}
            className="hover:text-primary text-base-800 transition-colors font-semibold"
          >
            Offers
          </Link>
          <Link
            to={"/our-story"}
            className="hover:text-primary text-base-800 transition-colors font-semibold"
          >
            Our Story
          </Link>
          <Link
            to={"/blogs"}
            className="hover:text-primary text-base-800 transition-colors font-semibold"
          >
            Blogs
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {!user && (
            <Link
              to={"/signup"}
              className="btn btn-ghost flex items-center text-base-800"
            >
              <User className="w-6 h-6" />
              <p className="sm:block hidden">Sign Up</p>
            </Link>
          )}

          {/* Search Bar (Hidden on Small Screens) */}
          <form className="hidden md:block">
            <input
              type="search"
              placeholder="Search"
              className="input input-bordered bg-transparent"
            />
          </form>

          {/* Cart */}
          <Link to={"/cart"} className="flex items-center gap-2 text-base-800">
            <ShoppingCart className="w-6 h-6" />
            <span>Cart({cartItems?.length})</span>
          </Link>

          {user && (
            <>
              <Link to={"/profile"}>
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={user?.avatar}
                  alt={user?.fullName}
                />
              </Link>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden btn btn-ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Drawer) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          <div className="w-64 bg-base-100 p-4 flex flex-col space-y-4 shadow-lg">
            <button
              className="self-end text-base-600"
              onClick={() => setIsMenuOpen(false)}
            >
              ✖
            </button>
            <Link to={"/shop"} className="hover:text-primary transition-colors">
              Shop
            </Link>
            <Link
              to={"/offers"}
              className="hover:text-primary transition-colors"
            >
              Offers
            </Link>
            <Link
              to={"/our-story"}
              className="hover:text-primary transition-colors"
            >
              Our Story
            </Link>
            <Link
              to={"/blogs"}
              className="hover:text-primary transition-colors"
            >
              Blogs
            </Link>
            {user ? (
              <>
                <Link to="/profile" className="flex items-center gap-2">
                  <LazyImage src={user?.avatar} alt={user?.fullName} />
                </Link>
              </>
            ) : (
              <Link to={"/signup"} className="btn btn-primary">
                Sign Up
              </Link>
            )}
          </div>
          <div className="flex-1" onClick={() => setIsMenuOpen(false)}></div>
        </div>
      )}
    </header>
  );
}
