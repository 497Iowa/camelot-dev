import React, { useState} from "react";
import styles from "./Lessons.module.css"
// import {Text, StyleSheet} from "react-native";

const Lessons = props => {
  const [lessonText, setLessonTest] = useState([
    {
      title: "Lesson 1",
      text: "To get started, you should know that images are made up of pixels.",
    },
    {
      title: "Lesson 2",
      text: "Now, we're going to try building a basic block with a for loop.",
    },
    {
      title: "Lesson 3",
      text: "Let's introduce you to if statements.",
    }
  ])

  const [status, setStatus] = useState ({
    index: 0,
    disabledPrev: true,
    disabledNext: false
  })

  const togglePrev = (e) => {
    console.log(status)
    let index = status.index - 1;
    let disabledPrev = (index === 0);

    setStatus({
      index: index, 
      disabledPrev: disabledPrev,
      disabledNext: false
    })
  }

  const toggleNext = (e) => {
    let index = status.index + 1;
    let disabledNext = index === (lessonText.length - 1);

    setStatus({
      index: index, 
      disabledPrev: false,
      disabledNext: disabledNext 
    })
  }

  function Prev(props) {
    return (
      <button onClick={props.toggle} disabled={props.active}>Previous</button>
    );
  }
  
  function Next(props) {
    return (
      <button onClick={props.toggle} disabled={props.active}>Next</button>
    );
  }

  return (
    <div className={styles.box}>
      <h1 className={styles.title}>{lessonText[status.index].title}</h1>
      <p>
      {lessonText[status.index].text}
      </p>
      <div>
        <Prev toggle={(e) => togglePrev(e)} active={status.disabledPrev} />
        <Next toggle={(e) => toggleNext(e)} active={status.disabledNext} />
      </div>
    </div>
  );
};

// const styles = StyleSheet.create({
//   baseText: {
//     fontFamily: "Cochin"
//   },
// });

export default Lessons;