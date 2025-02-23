
import BlogItem from "./BlogItem";
import Footer from "../../components/footer/Footer";

const Blog = () => {
  return (
    <>
    <section className="mt-20">
      <header className="text-center m-20">
        <h1 className="text-3xl font-bold">promotion</h1>
      </header>
      <div className="w-full flex justify-center items-center flex-col gap-5">
        <BlogItem />
        <BlogItem />
      </div>
    </section>
    <Footer/>
</>
  );
};

export default Blog;
