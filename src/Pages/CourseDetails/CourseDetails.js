import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CourseDetails = () => {
  const course = useLoaderData();
  // console.log(course);
  return (
    <div>
      <h2>This is Course Details page</h2>
      <Card>
        <Card.Img variant="top" src={course.img} />
        <Card.Body>
          <Card.Title>
            <h4>{course.name}</h4>
          </Card.Title>
          <>
            <h5>Created By : {course.author}</h5>
          </>
          <h6>Price: $ {course.price}</h6>
          <Card.Text>
            <u>Course Description</u> : {course.description}
          </Card.Text>
          <Card.Text>
            <u>Course Feature</u> : {course.course_feature}
          </Card.Text>

          <Button variant="outline-secondary">
            <Link to={`/checkOut/${course.id}`}>Get Premium Access</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseDetails;
