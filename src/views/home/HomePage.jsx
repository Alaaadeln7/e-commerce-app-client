import Navbar from "../Navbar";
import React from "react";
import Rombica from "../../assets/images/Image 1.jpg";
import Button from "../../components/button/Button";
import LimitProduct from "../limitProduct/LimitProduct";
import "../home/home.css";
import image7 from "../../assets/images/Image 7.jpg";
import { CiPlay1 } from "react-icons/ci";
import newOne from "../../assets/images/newOne.jpeg";
import newTow from "../../assets/images/newTow.jpeg";
import Footer from "../foooter/Footer";
import LazyImage from "../../components/LazyImage";
import free from '../../assets/images/Free.jpeg'

const HeaderSection = () => {
  return (
    <header
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${free})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <div className="container">
        <div className="max-w-2xl px-6 md:px-12">
          <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-500 text-black">
            Gift for your skin
          </h1>
          <p className="text-lg font-light mt-4 mb-8">
            Aliquip fugiat ipsum nostrud ex et eu incididunt quis minim dolore
            excepteur voluptate
          </p>
          <Button />
        </div>
      </div>
    </header>
  );
};

const Promotion = () => {
  return (
    <div className="promotion">
      <div className="container">
        <h1>Event Promtion</h1>
        <div className="content">
          <div className="room roomOne">
            <h3>
              Relaxing & <br /> Pampering
            </h3>
            <p>Pariatur ad nisi ex tempor ea</p>
            <button>Explore</button>
          </div>
          <div className="room roomTow">
            <h3>
              Relaxing & <br /> Pampering
            </h3>
            <p>Pariatur ad nisi ex tempor ea</p>
            <button>Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Story = () => {
  return (
    <div className="story">
      <h1>our story</h1>
      <div className="image">
        <LazyImage src={image7} alt="story" />
        <a href="#">
          watch video <CiPlay1 />
        </a>
      </div>
    </div>
  );
};

const New = () => {
  return (
    <div className="new">
      <div className="container">
        <div className="content">
          <div className="room roomOne">
            <h1>read what's new</h1>
            <p>
              Sint consequat in ipsum irure adipisicing dolore culpa incididunt.
              Veniam elit magna anim ipsum eiusmod eu
            </p>
            <button className="button">Explore more</button>
          </div>
          <div className="room">
            <img src={newOne} alt="new" />
            <h4>Anim sint Lorem excepteur commodo </h4>
            <h6>Oct 12, 2022</h6>
          </div>
          <div className="room">
            <img src={newTow} alt="new" />
            <h4>Adipisicing elit proident in elit magna deser </h4>
            <h6>Oct 12, 2022</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeaderSection />
      <LimitProduct />
      <Promotion />
      <Story />
      <New />
      <Footer />
    </div>
  );
}
