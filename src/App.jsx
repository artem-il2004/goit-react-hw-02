import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import { useState, useEffect } from "react";
import Notification from './components/Notification/Notification';

function App() {
  const [reviews, setReviews] = useState(
    () => {
      const savedObject = window.localStorage.getItem("reviews");
      if (savedObject !== null) {
        return JSON.parse(savedObject);
      }
      return {
        good: 0,
        neutral: 0,
        bad: 0
      };
    }


  );



  useEffect(() => {
    window.localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  const handleFun = (type) => {
    if (type === "reset") { 
      setReviews({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    } else { 
      setReviews((prev) => ({
        ...prev,
        [type]: prev[type] + 1,
      }));
    }
  };

  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round((reviews.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      <Options Option={handleFun} total={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          good={reviews.good}
          neutral={reviews.neutral}
          bad={reviews.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification/>
      )}
    </>
  );
}

export default App;
