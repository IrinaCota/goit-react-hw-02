import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import { useState, useEffect } from "react";


function App() {
const [feedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem('current-feedback', JSON.stringify(feedback));
  }, [feedback]);
  
  return (
    <div>
      <Description />
      <Options />
      <Feedback />
    
    </div>
  );
}

export default App;