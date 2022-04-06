import React, { useState} from "react";
// import styles from "./Lessons.module.css"
// import {Text, StyleSheet} from "react-native";
import data from './LessonData'

const Lessons = props => {
  // const [lessonText, setLessonTest] = useState([
  //   {
  //     title: "Lesson 1",
  //     text: "To get started, you should know that images are made up of pixels.",
  //   },
  //   {
  //     title: "Lesson 2",
  //     text: "Now, we're going to try building a basic block with a for loop.",
  //   },
  //   {
  //     title: "Lesson 3",
  //     text: "Let's introduce you to if statements.",
  //   }
  // ])
  const [lessonText] = useState(data)

  // const showFile = async (e) => {
  //   e.preventDefault()
  //   const reader = new FileReader()
  //   reader.onload = async (e) => { 
  //     const text = (e.target.result)
  //     console.log(text)
  //     alert(text)
  //   };
  //   reader.readAsText(e.target.files[0])
  // }

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
      <button class="button is-small is-outlined" onClick={props.toggle} disabled={props.active}>Previous</button>
    );
  }
  
  function Next(props) {
    return (
      <button class="button is-small is-outlined" onClick={props.toggle} disabled={props.active}>Next</button>
    );
  }

  return (
    <div class="block lessons-msg-block"> 
      <article class="message lessons-msg">
      <div class="message-header">
        <p>{lessonText[status.index].title}</p>
      </div>
      <div class="message-body lessons-msg-body">
        <div>
          {lessonText[status.index].text}
        </div>
        
        <div>
          <Prev toggle={(e) => togglePrev(e)} active={status.disabledPrev} />
          <Next toggle={(e) => toggleNext(e)} active={status.disabledNext} />
        </div>
      </div>
    </article>

    {/* <div className={styles.box}>
      <h1 className={styles.title}>{lessonText[status.index].title}</h1>
      <p>
      {lessonText[status.index].text}
      </p>
      <div>
        <Prev toggle={(e) => togglePrev(e)} active={status.disabledPrev} />
        <Next toggle={(e) => toggleNext(e)} active={status.disabledNext} />
      </div>
    </div> */}
    </div>
  );
};

// const styles = StyleSheet.create({
//   baseText: {
//     fontFamily: "Cochin"
//   },
// });

export default Lessons;