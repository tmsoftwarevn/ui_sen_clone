"use client"; // Required for Next.js with Framer Motion
import { motion } from "framer-motion";

const ListBlog = () => {
  // Array of 10 blog items with different images
  const blogs = [
    {
      id: 1,
      title: "Blog Post 1",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      category: "Cooking"
    },
    {
      id: 2,
      title: "Blog Post 2",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "https://images.pexels.com/photos/227428/pexels-photo-227428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      category: "Technology"
    },
    {
      id: 3,
      title: "Blog Post 3",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "https://images.pexels.com/photos/1546160/pexels-photo-1546160.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      category: "Health"
    },
    {
      id: 4,
      title: "Blog Post 4",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "https://images.pexels.com/photos/1666079/pexels-photo-1666079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      category: "Lifestyle"
    },
    {
      id: 5,
      title: "Blog Post 5",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "https://images.pexels.com/photos/1823829/pexels-photo-1823829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      category: "Business"
    },
    {
      id: 6,
      title: "Blog Post 6",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      category: "Food"
    },
    {
      id: 7,
      title: "Blog Post 7",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "https://images.pexels.com/photos/3184199/pexels-photo-3184199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      category: "Travel"
    },
    {
      id: 8,
      title: "Blog Post 8",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      category: "Science"
    },
    {
      id: 9,
      title: "Blog Post 9",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "https://images.pexels.com/photos/1154417/pexels-photo-1154417.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      category: "Education"
    },
    {
      id: 10,
      title: "Blog Post 10",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl: "https://images.pexels.com/photos/3769709/pexels-photo-3769709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      category: "Sports"
    }
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
        {/* Loop through the blogs array to render each card */}
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            //className="rounded shadow-lg flex flex-col"
            className={`rounded  flex flex-col ${index % 2 === 0 ? "" : "mt-40"}`} // Apply different margin-top based on index
            initial={{ opacity: 0, y: 200 }} // Start with opacity 0 and y translation (bottom to top)
            whileInView={{
              opacity: 1, // Fade-in
              y: 0, // Slide to normal position (top)
            }}
            viewport={{ once: true, amount: 0.2 }} // Triggers when the card enters 20% of the viewport
            transition={{ duration: 0.7 }} // Fast duration for the animation
            
          >
            <a href="#" />
            <div className="relative overflow-hidden h-[350px]"> {/* Ensure uniform aspect ratio */}
              <a href="#">
                {/* Apply the scale animation to the image */}
                <motion.img
                  className="w-full h-full object-cover" // Ensure the image covers the area without overflowing
                  src={blog.imageUrl} // Dynamic image URL
                  alt={blog.title}
                  initial={{ scale: 1.5 }} // Image starts with a scale of 1.5
                  whileInView={{
                    scale: 1, // Scale to normal size when in view
                    transition: { duration: 0.7 }, // Smooth transition when scaling
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{
                    scale: 1.2, // Scale the image on hover
                    transition: { duration: 0.3 }, // Smooth transition for hover effect
                  }}
                />
              </a>
              <a href="#!">
                <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                  {blog.category}
                </div>
              </a>
            </div>
            <div className="px-6 py-4 mb-auto">
              <a
                href="#"
                className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
              >
                {blog.title}
              </a>
              <p className="text-gray-500 text-sm">
                {blog.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ListBlog;
