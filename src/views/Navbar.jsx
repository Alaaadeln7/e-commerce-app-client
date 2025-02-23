import { Link } from "react-router-dom";
import { ShoppingCart, User, Menu } from "lucide-react";
import useCart from "../hooks/useCart";
import NotificationsButton from "./NotificationsButton";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-base-100 shadow-sm px-6">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <h1 className="text-2xl uppercase">
          <Link to={"/"}>logo</Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to={"/shop"} className="hover:text-primary">
            Shop
          </Link>
          <Link to={"/offers"} className="hover:text-primary">
            Offers
          </Link>
          <Link to={"/our-story"} className="hover:text-primary">
            Our Story
          </Link>
          <Link to={"/blogs"} className="hover:text-primary">
            Blogs
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {!user && (
            <Link to={"/signup"} className="btn btn-ghost flex items-center">
              <User className="w-6 h-6" /> Sign Up
            </Link>
          )}

          {/* Search Bar (Hidden on Small Screens) */}
          <form className="hidden md:block">
            <input
              type="search"
              placeholder="Search"
              className="input input-bordered"
            />
          </form>

          {/* Cart */}
          <Link to={"/cart"} className="flex items-center gap-2">
            <ShoppingCart className="w-6 h-6" />
            <span>Cart({cartItems?.length})</span>
          </Link>


          {user && (
            <>
              <Link
                to={"/profile"}
              >
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={user?.avatar}
                  alt={user?.fullName}
                />
              </Link>
 
              <NotificationsButton />
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
          <div className="w-64 bg-white p-4 flex flex-col space-y-4 shadow-lg">
            <button
              className="self-end text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              ✖
            </button>
            <Link to={"/shop"} className="hover:text-primary">
              Shop
            </Link>
            <Link to={"/offers"} className="hover:text-primary">
              Offers
            </Link>
            <Link to={"/our-story"} className="hover:text-primary">
              Our Story
            </Link>
            <Link to={"/blogs"} className="hover:text-primary">
              Blogs
            </Link>
            {user ? (
              <>
                <Link to="/profile" className="flex items-center gap-2">
                  <img
                    className=""
                    src={user?.avatar}
                    alt={user?.fullName}
                  />
                  <span>{user?.fullName}</span>
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
