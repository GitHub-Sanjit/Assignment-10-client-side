import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Home.css';

const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <h2>The Number of Courses : {courses.length}</h2>
      <div className="Card-container">
        {courses.map((course) => (
          <Card key={course.id} style={{ width: "" }}>
            <Card.Img variant="top" src={course.img} />
            <Card.Body>
              <Card.Title>{course.name}</Card.Title>
              <Card.Text>
                {course.description.length > 150 ? (
                  <p>
                    {course.description.slice(0, 150) + "..."}
                    <Link to={`/course/${course.id}`}>Read More</Link>
                  </p>
                ) : (
                  course.description
                )}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
