import Navbar from "../Navbar";
import LimitProduct from "../limitProduct/LimitProduct";
import "../home/home.css";
import image7 from "../../assets/images/Image_7.png";
import { CiPlay1 } from "react-icons/ci";
import newOne from "../../assets/images/Image_6.png";
import newTow from "../../assets/images/Image_5.png";
import Footer from "../../components/footer/Footer";
import LazyImage from "../../components/LazyImage";
import free from "../../assets/images/Image_1.png";
import { MoveLeft, MoveRight } from "lucide-react";
import imageOne from "../../assets/images/promotionOne.png";
import imageTwo from "../../assets/images/promotionTwo.png";

const HeaderSection = ({ title, description, image }) => {
  return (
    <header
      className="relative w-full mt-20 min-h-[60vh] flex items-center bg-cover bg-center px-4 md:px-0"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="container mx-auto">
        <div className="max-w-2xl px-4 md:px-12">
          <h1 className="text-3xl md:text-5xl font-semibold text-black">
            {title}
          </h1>
          <p className="text-base md:text-lg font-light mt-4 mb-8 description-style">
            {description}
          </p>
          <button className="btn w-full sm:w-4/12 text-xl bg-primary text-white border-primary hover:bg-primary/80">
            show now
          </button>
        </div>
      </div>
    </header>
  );
};

const PromotionSlice = ({ title, description, image }) => {
  return (
    <div className="w-full md:w-[500px] h-[300px] relative my-5 md:my-10 overflow-hidden">
      <LazyImage
        className="w-full h-full object-cover absolute top-0 left-0"
        src={image}
        alt={title}
      />

      <div className="relative z-10 w-full h-full flex flex-col items-start p-6 md:p-16 space-y-4 md:space-y-6">
        <h3 className="text-2xl text-base-300 md:text-3xl font-semibold">
          {title}
        </h3>
        <p className="text-base-300 md:text-lg opacity-90">{description}</p>
        <button className="bg-primary text-white px-4 md:px-6 py-2 rounded-lg hover:bg-primary/80 transition w-full md:w-6/12">
          Explore
        </button>
      </div>
    </div>
  );
};

const Promotion = () => {
  return (
    <div className="promotion px-4 md:px-0">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-3xl font-semibold text-base-500">
          Event Promotion
        </h1>
        <div className="text-end px-4 md:px-16">
          <a href="#" className="btn text-primary hover:underline">
            show all
            <MoveRight size={16} />
          </a>
        </div>
        <div className="content flex flex-col md:flex-row gap-6 justify-center items-center">
          <PromotionSlice
            title={"Relaxing & Pampering"}
            description={"Pariatur ad nisi ex tempor ea"}
            image={imageOne}
          />
          <PromotionSlice
            title={"Smooth & Bright Skin"}
            description={"Pariatur ad nisi ex tempor ea"}
            image={imageTwo}
          />
        </div>
      </div>
    </div>
  );
};

const Story = () => {
  return (
    <div className="story px-4 md:px-0">
      <div className="flex justify-center items-center my-6 md:my-10 flex-col px-4 md:px-10">
        <h1 className="text-2xl md:text-3xl font-semibold">our story</h1>
        <a href="#" className="btn text-primary hover:underline self-end">
          see all
          <MoveRight size={20} />
        </a>
      </div>
      <div className="image my-6 md:my-10 relative">
        <LazyImage src={image7} alt="story" className="w-full h-auto" />
        <a
          href="#"
          className="absolute bottom-0 left-0  bg-black py-3 flex items-center justify-center text-lg md:text-xl max-w-[200px]"
        >
          watch video <CiPlay1 className="ml-2" />
        </a>
      </div>
    </div>
  );
};

const New = () => {
  return (
    <div className="new my-10">
      <div className="container">
        <div className="content">
          <div className="room roomOne">
            <h1>read what is new</h1>
            <p>
              Sint consequat in ipsum irure adipisicing dolore culpa incididunt.
              Veniam elit magna anim ipsum eiusmod eu
            </p>
            <div className="flex justify-between">
              <button className="btn btn-outline text-primary hover:bg-primary hover:border-primary">
                Explore more
              </button>
              <div className="space-x-4">
                <button className="btn text-primary">
                  <MoveLeft />
                </button>
                <button className="btn text-primary">
                  <MoveRight />
                </button>
              </div>
            </div>
          </div>
          <div className="room border border-base-300">
            <LazyImage src={newOne} alt="new" />
            <h4 className="text-base-900 p-4 text-md py-5 font-sen">
              Anim sint Lorem excepteur commodo{" "}
            </h4>
            <h6 className="p-5">Oct 12, 2022</h6>
          </div>
          <div className="room border border-base-300">
            <LazyImage src={newTow} alt="new" />
            <h4 className="text-base-900 p-4 text-md py-5 font-sen">
              Adipisicing elit proident in elit magna deser{" "}
            </h4>
            <h6 className="p-5">Oct 12, 2022</h6>
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
      <HeaderSection
        title="Gift for your skin"
        description="Aliquip fugiat ipsum nostrud ex et eu incididunt quis minim dolore excepteur voluptate."
        image={free}
      />
      <LimitProduct />
      <Promotion />
      <Story />
      <New />
      <Footer />
    </div>
  );
}
