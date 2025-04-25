import React from "react";

const Blogs = () => {
  const blogs = [
    { title: "Learn Volleyball in 5 Steps", image: "/images/blog-1.jpg" },
    { title: "Names Celebrated by Cricket", image: "/images/blog-2.jpg" },
    { title: "Easy-to-Learn Badminton Tips", image: "/images/blog-3.jpg" },
  ];

  return (
    <div>
      {/* Blog Section */}
      <section className="px-4 mt-10">
        <h2 className="text-xl font-semibold mb-4">Blogs to Keep You Fit!</h2>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="min-w-[220px] rounded-xl overflow-hidden shadow"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[140px] object-cover"
              />
              <div className="p-3 bg-white">
                <h3 className="text-sm font-medium">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
