import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
  return (
    <div className={css.feedbackWrapper}>
      <ul>
        {Object.entries(feedback).map(([name, count]) => (
          <li className={css.item} key={name}>
            {name}: {count}
          </li>
        ))}
      </ul>
      <p className={css.item}>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedbackPercentage}%</p>
    </div>
  );
};
export default Feedback;

Feedback.propTypes = {
  feedback: PropTypes.object,
  totalFeedback: PropTypes.number,
  positiveFeedbackPercentage: PropTypes.number,
};