import { CourseCard } from "./CourseCard";

export const CourseCardCollection = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </>
  );
};
