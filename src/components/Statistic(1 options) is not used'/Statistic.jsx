//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//FIRST OPTION. SAVED FOR MYSELF. Is NOT USED IN CODE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//==================!!!!!!!!!!!!!!!!!!!!!!!======================

import React, { Component } from 'react';

class Statistic extends Component {
  //   static = {
  //     countPositiveFeedbackPercentage: 1,
  //   };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addingGoodMark = () => {
    this.setState(preState => ({ good: (preState.good += 1) }));
  };

  addingNeutralMark = () => {
    this.setState(preState => ({ neutral: (preState.neutral += 1) }));
  };

  addingBadMark = () => {
    this.setState(preState => ({ bad: (preState.bad += 1) }));
  };

  //   countTotalFeedback = (good, neutral, bad) => {
  //     return good + neutral + bad;
  //   };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  //   countPositiveFeedbackPercentage = (good, neutral, bad) => {
  //     const total = good + neutral + bad;
  //     return Math.round((good / total) * 100);
  //   };
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    // const countTotalFeedback = good + neutral + bad;
    // const countPositiveFeedbackPercentage = Math.round(
    //   (good / countTotalFeedback) * 100
    // );
    // const totalMarksCount = this.countTotalFeedback(good, neutral, bad);
    const totalMarksCount = this.countTotalFeedback();
    // const positiveMarksPercentage = this.countPositiveFeedbackPercentage(
    //   good,
    //   neutral,
    //   bad
    // );
    const positiveMarksPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <h2>Please, leave Your feedback</h2>
        <button onClick={this.addingGoodMark}>Good</button>
        <button onClick={this.addingNeutralMark}>Neutral</button>
        <button onClick={this.addingBadMark}>Bad</button>
        <h3>Statistic</h3>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          {/* <li>Total: {this.countTotalFeedback(good, neutral, bad)}</li> */}
          <li>Total: {totalMarksCount}</li>
          {/* <li>
            Positive Feedback:
            {this.countPositiveFeedbackPercentage(good, neutral, bad)} %
          </li> */}
          <li>
            Positive Feedback:
            {positiveMarksPercentage
              ? ` ${positiveMarksPercentage}`
              : '  There is no any good mark at the moment to count this'}
            %
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistic;
