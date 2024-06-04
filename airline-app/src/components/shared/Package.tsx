/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Button } from "../ui/button";

const data = [
  {
    id: 0,
    butt: "Where will you go?",
    title: "City breaks",
    name: "Check out our fabulous city escapes, and enjoy a few days (or more!) of shopping and skyscrapers.",
    img: "https://images.unsplash.com/photo-1440778303588-435521a205bc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9saWRheSUyMHRyYXZlbHxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    id: 1,
    butt: "Find your 2024 trip",
    title: "Visit loved ones",
    name: "Make 2024 a year to remember, by booking a trip to see the ones you love. ",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8fDI%3D",
  },
  {
    id: 2,
    butt: "Soar into Summer",
    title: "Best Summer",
    name: "Whether you want to spend long days lazing on a Caribbean beach, or keep the kids busy in sunny Florida, we'r.",
    img: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGRpdmVzfGVufDB8fDB8fHwy",
  },
  {
    id: 3,
    butt: "Enjoy Economy",
    title: "Economy",
    name: "With the best crew in the sky. With our Economy, you can afford to be choosy.",
    img: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9saWRheSUyMHRyYXZlbHxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    id: 4,
    butt: "Explore Premium",
    title: "Premium",
    name: "The difference between a good flight and a phenomenal one is in the details.",
    img: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9saWRheSUyMHRyYXZlbHxlbnwwfHwwfHx8Mg%3D%3D",
  },
  {
    id: 5,
    butt: "Discover Upper Class",
    title: "Upper Class",
    name: "We’ve taken the time to consider every last detail of your journey so you don't have to.",
    img: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxob2xpZGF5JTIwdHJhdmVsJTIwc21pbGV8ZW58MHx8MHx8fDI%3D",
  },
];

export const Package = () => {
  return (
    <>
      <p className="text-3xl text-left mt-8 ml-5 md:text-center md:text-5xl lg:text-center lg:text-5xl">
        What's hot?
      </p>
      <div className="p-10  md:flex lg:flex overflow-x-auto">
        {data.map((item) => (
          <div
            key={item.id}
            className=" w-[80vw]  mb-10 md:w-[30vw] lg:w-[30vw] p-5  "
          >
            <img
              src={item.img}
              alt={item.name}
              className="rounded-2xl h-[30vh] w-[80vw] object-cover"
            />
            <p className="text-3xl my-5 text-black">{item.title}</p>
            <p className="text-black mt-2">{item.name}</p>
            <Button
              className="bg-white border-pri rounded-sm w-[80vw] mt-5 mx-auto flex text-pri md:w-[20vw] lg:w-[20vw]"
              variant="outline"
            >
              {item.butt}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};
