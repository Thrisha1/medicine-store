import React from "react";
import Navbar from "./Navbar";
import react, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Category from "./Category";
import Medicine from "./Medicine";
import Footer from "../Footer/Footer.jsx";

function Main() {

  const [Meds, setMeds] = useState([]);

  useEffect(() => {
    fetch(
      "https://63a56e772a73744b008dc6d0.mockapi.io/api/v1/medicines"
    )
      .then((response) => response.json())
      .then((response) => {
        setMeds(response)
        console.log(Meds);
      })
      .catch((err) => console.error(err));
       
  }, []);

  const quan = 1;



  return (
    <div class="flex flex-col">
      <Navbar />
      <Carousel />
      <h1 className="text-3xl m-4">Shop By Category</h1>
      <div class="grid justify-around mx-5 grid-cols-5">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
      <h1 className="text-3xl mt-6 ml-6">Medicine Corner</h1>
      <div class=" grid justify-around mx-5 grid-cols-4 gap-2 ">
       { Meds.map((e)=>(
          <Medicine
          name={e.name}
          desc={e.desc}
          price={e.price}
          img={e.img}
          id={e.id}
          qty={quan}
        />
        ))}
        
        
      </div>
      <Footer/>
    </div>
  );
}

export default Main;
