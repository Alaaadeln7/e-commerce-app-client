import image from "../../assets/images/blogOne.jpeg";
export default function BlogItem() {
  return (
    <article className="flex sm:flex-nowrap flex-wrap ">
      {/* <img src={image} alt={title} /> */}
      <img className="max-w-[400px]" src={image} alt="imaeg" />
      <div className="flex flex-col max-w-[400px] ml-7 gap-6 ">
        <h1 className="text-2xl font-semibold">title blog</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          similique assumenda illum! Minima maiores totam quod. Architecto
          inventore, obcaecati repudiandae nam quo eos libero et pariatur at
          corporis! Distinctio, nesciunt!
        </p>
        <button className="btn btn-primary w-6/12">show now</button>
      </div>
    </article>
  );
}
