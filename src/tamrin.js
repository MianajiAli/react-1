import { useState } from "react";
export const Tamrini = () => {
  let [courseList, setCourseList] = useState([]);
  let [newCourse, setNewCourse] = useState([]);
  const handelChange = (event) => {
    setNewCourse(event.target.value);
    console.log(2 + newCourse);
  };
  const addCourse = () => {
    // let arr=[]
    // const name = "se"
    // arr.push(name)
    const course ={
      id: courseList.length ===0 ? 1 :[courseList.length-1].id+1,
      courseName: newCourse}
    setCourseList([...courseList, course]);
  };
  const deleteCourse = (courseName) => {
    setCourseList(
      courseList.filter((course) => {
        return courseName !== course;
      })
    );
  };
  return (
    <div>
      <h1>text example</h1>

      <input type="text" onChange={handelChange} />
      <button onClick={addCourse}> add</button>
      <button
        onClick={() => {
          console.log(courseList);
        }}
      >
        {" "}
        da
      </button>

      {courseList.map((course, index) => {
        return (
          <div key={index}>
            <h1>{course.courseName}</h1>
            <button onClick={() => deleteCourse(course)}>x</button>
          </div>
        );
      })}
    </div>
  );
};
