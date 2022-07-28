// import Statistic from './Statistic/Statistic';
import { GlobalStyle } from './GlobalStyle';
import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round((good / total) * 100);
  };

  onFeedbackChanging = feedbackOption => {
    this.setState(prevState => ({
      [feedbackOption]: (prevState[feedbackOption] += 1),
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalMarksCount = this.countTotalFeedback();
    const positiveMarksPercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);
    return (
      <>
        <GlobalStyle />
        <div>
          <Section title="Please, leave Your feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.onFeedbackChanging}
            />
          </Section>

          <Section title="Statistic">
            {totalMarksCount === 0 ? (
              <Notification message="There are no any feedback yet " />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalMarksCount}
                positivePercentage={positiveMarksPercentage}
              />
            )}
          </Section>
        </div>
      </>
    );
  }
}

export default App;
