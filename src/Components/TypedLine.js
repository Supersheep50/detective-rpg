// src/components/TypedLine.js
import { Typewriter } from 'react-simple-typewriter';

function TypedLine({ text, speed = 50 }) {
  return (
    <Typewriter
      words={[text]}
      loop={false}
      cursor
      cursorStyle="_"
      typeSpeed={speed}
      deleteSpeed={0}
    />
  );
}

export default TypedLine;
