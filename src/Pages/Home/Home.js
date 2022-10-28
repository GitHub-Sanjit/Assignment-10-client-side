import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Home.css";

const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className="Card-container">
        {courses.map((course) => (
          <Card key={course.id} style={{ width: "" }}>
            <Card.Img variant="top" src={course.img} />
            <Card.Body>
              <Card.Title>{course.name}</Card.Title>
              <Card.Text>
                {course.description.length > 150 ? (
                  <>
                    {course.description.slice(0, 150) + "..."}
                    <Link to={`/course/${course.id}`}>Read More</Link>
                  </>
                ) : (
                  course.description
                )}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
