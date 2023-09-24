import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statictics/Statictics';
import Section from './Section/Section';
import Notificationcount from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = countTotalFeedback();
    return Math.round((good * 100) / positivePercentage);
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          // options={['good', 'neutral', 'bad']}
          options={options}
          onLeaveFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics"></Section>{' '}
      {countTotalFeedback() > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          percentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notificationcount message="There is no feedback" />
      )}
    </>
  );
};

export default App;
