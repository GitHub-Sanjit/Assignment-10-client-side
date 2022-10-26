import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const LeftSideNav = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <h2>All Courses : {courses.length}</h2>
    </div>
  );
};

export default LeftSideNav;
