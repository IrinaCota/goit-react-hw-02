import PropTypes from 'prop-types';
import css from './Options.module.css';

const Options = ({
  options,
  onOptionClick,
  isResetButtonVisible,
  handleResetFeedback,
}) => {
  return (
    <div className={css.optionsWrapper}>
      {options.map((item) => (
        <button
          className={css.btn}
          onClick={() => onOptionClick(item)}
          key={item}
        >
          {item}
        </button>
      ))}
      {isResetButtonVisible && (
        <button className={css.btn} onClick={handleResetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;

Options.propTypes = {
  options: PropTypes.array,
  onOptionClick: PropTypes.func,
  isResetButtonVisible: PropTypes.bool,
  handleResetFeedback: PropTypes.func,
};