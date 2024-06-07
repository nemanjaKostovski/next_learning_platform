import BlogCard from "./components/BlogCard";

export default function Blog() {
  const blog = [
    {
      imageSrc: "/blog1.jpg",
      title: "Blog 1 title",
      desc: "Do consectetur",
      date: "01/30/2022",
      duration: "4min",
    },
    {
      imageSrc: "/blog2.jpg",
      title: "Blog 2 title",
      desc: "Do consectetur",
      date: "01/30/2022",
      duration: "4min",
    },
    {
      imageSrc: "/blog3.jpg",
      title: "Blog 3 title",
      desc: "Do consectetur",
      date: "01/30/2022",
      duration: "4min",
    },
    {
      imageSrc: "/blog4.jpg",
      title: "Blog 4 title",
      desc: "Do consectetur",
      date: "01/30/2022",
      duration: "4min",
    },
    {
      imageSrc: "/blog5.jpg",
      title: "Blog 5 title",
      desc: "Do consectetur",
      date: "01/30/2022",
      duration: "4min",
    },
    {
      imageSrc: "/blog6.jpg",
      title: "Blog 6 title",
      desc: "Do consectetur",
      date: "01/30/2022",
      duration: "4min",
    },
  ];
  return (
    <section className="plr mb-20 flex flex-col items-center">
      <h1 className="pb-20 pt-28 text-center text-6xl font-bold">Blog</h1>
      <BlogCard items={blog} />
      <button className="btn btn--primary ml-3 mt-2 h-10 rounded">
        Load more articles
      </button>
    </section>
  );
}
