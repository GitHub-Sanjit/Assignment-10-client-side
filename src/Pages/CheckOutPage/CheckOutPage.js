import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOutPage = () => {
  const course = useLoaderData();
  // console.log(course);
  return (
    <div>
      <h2>Ready to Purchase : {course.name}</h2>
      <p>You have to Pay : $ {course.price}</p>
    </div>
  );
};

export default CheckOutPage;
