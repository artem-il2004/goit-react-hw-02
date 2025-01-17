import css from './Feedback.module.css';
function Feedback({ good, neutral, bad, total, positive}) {
  

  return (
    <div className={ css.container}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total Feedback: {total}</p>
      <p>Positive Feedback: {positive}%</p>
    </div>
  );
}

export default Feedback;
