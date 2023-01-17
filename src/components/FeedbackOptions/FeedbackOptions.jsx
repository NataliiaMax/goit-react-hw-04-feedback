import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={style.listFeedback}>
      {Object.keys(options).map(option => {
        return (
          <li className={style.itemFeedback} key={option}>
            <button
              className={style.button}
              type="button"
              name={option}
              key={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
