import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/courses/all");
        const data = response.data;

        //const shuffledCourses = data.sort(() => 0.5 - Math.random());
        //const selectedCourses = shuffledCourses.slice(0, 5);

        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="m-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 h-screen"></div>
      ) : (
        <>
          <h1>Courses</h1>
          <div className="m-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {courses.map((course) => (
              <Card key={course.id} sx={{ maxWidth: 600 }}>
                <CardContent>
                  <Typography variant="h3" gutterBottom>
                    {course.name}
                  </Typography>
                  <Typography variant="h4" component="div">
                    {course.description}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {course.instructor}
                  </Typography>
                  <Typography variant="body1">
                    {course.duration}
                    <br />
                    {course.price === 0 ? "FREE" : course.price + "€"}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" href={`/course-details/${course.id}`}>
                    Details
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
