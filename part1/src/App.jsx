import React from "react";

const Header = (props) => {
  return <h1>{props.header}</h1>;
};

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) => (
        <React.Fragment key={part.name}>
          <h3>{part.name}</h3>
          <p>{part.exercise}</p>
        </React.Fragment>
      ))}
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Totally there are {props.parts.reduce((a, v) => a + v.exercises, 0)}{" "}
      exerciese
    </p>
  );
};
const CourseInfo = (props) => {
  return (
    <>
      <Header header={props.course.title} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </>
  );
};

const App = () => {
  const course = {
    title: "Half stack application development",
    parts: [
      {
        name: "Fundamentals of react",
        exercises: 10,
      },
      {
        name: "aa of react",
        exercises: 15,
      },
      {
        name: "bb of react",
        exercises: 20,
      },
    ],
  };

  return (
    <div>
      <CourseInfo course={course} />
    </div>
  );
};

export default App;
