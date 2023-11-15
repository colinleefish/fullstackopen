/* eslint-disable react/prop-types */
import "./Course.css";

const Content = ({ name, exercises }) => {
  return (
    <li>
      {name} ({exercises})
    </li>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <h4 className="course-title">{course.name}</h4>
      <ul>
        {course.parts.map((c) => (
          <Content key={c.id} name={c.name} exercises={c.exercises} />
        ))}
      </ul>
      <p>
        total of {course.parts.reduce((x, c) => x + c.exercises, 0)} exercises
      </p>
    </>
  );
};
export default Course;
