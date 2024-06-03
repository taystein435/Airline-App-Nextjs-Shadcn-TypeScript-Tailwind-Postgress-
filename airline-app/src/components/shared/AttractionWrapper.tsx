"use client"
import { Attraction } from "./Attraction";
import { useState, useEffect } from "react";
const AttractionWrapper = () => {
    const [shuffledData, setShuffledData] = useState([]);

    useEffect(() => {
      setShuffledData(shuffleArray(data));
    }, []);
    const shuffleArray = (array:any) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
      
    const data = [
      {
        id: 0,
        name: "London",
        img: "https://images.unsplash.com/photo-1610390370064-4890cf703fd1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9uJTIwYnJpZGdlfGVufDB8fDB8fHwy",
      },
      {
        id: 1,
        name: "Paris",
        img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8fDI%3D",
      },
      {
        id: 2,
        name: "Maldives",
        img: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGRpdmVzfGVufDB8fDB8fHwy",
      },
      {
        id: 3,
        name: "Dubai",
        img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWl8ZW58MHx8MHx8fDI%3D",
      },
      {
        id: 4,
        name: "Newyork",
        img: "https://images.unsplash.com/flagged/photo-1575597255483-55f2afb6f42c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3eW9ya3xlbnwwfHwwfHx8Mg%3D%3D",
      },
      {
        id: 5,
        name: "Instabul",
        img: "https://images.unsplash.com/photo-1593544648982-cf4bbfb8fc38?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluc3RhbmJ1bHxlbnwwfHwwfHx8Mg%3D%3D",
      },
    ];
  return (<>
    <Attraction title="Trending US destinations" data={shuffledData} />
    <Attraction title=" Beach destinations" data={data} />
    <Attraction title="Visit friends & family" data={shuffledData} />

  </>
  
  )
}

export default AttractionWrapper