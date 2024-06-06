import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

import { useState, useEffect } from "react";

const initialFeedback = { good: 0, neutral: 0, bad: 0 };

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('saved-feedback'));

    return savedFeedback ? savedFeedback : initialFeedback;
  });
  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const handleResetFeedback = () => {
    setFeedback(initialFeedback);
  };

  useEffect(() => {
    localStorage.setItem('saved-feedback', JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = Math.round(
    (feedback.good / totalFeedback) * 100
  );

  return (
    <div>
      <Description />
      <Options
        options={['good', 'neutral', 'bad']}
        onOptionClick={updateFeedback}
        isResetButtonVisible={totalFeedback > 0}
        handleResetFeedback={handleResetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification message={'No feedback yet'} />
      )}
    </div>
  );
};
export default App;