import css from "./Options.module.css";

function Options({ Option, total}) {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={() => Option("good")}>Good</button>
      <button className={css.btn} onClick={() => Option("neutral")}>Neutral</button>
          <button className={css.btn} onClick={() => Option("bad")}>Bad</button>
          {total > 0 ? <button className={css.btn} onClick={() => Option("reset")}>Reset</button> : "" }
      
    </div>
  );
}

export default Options;
