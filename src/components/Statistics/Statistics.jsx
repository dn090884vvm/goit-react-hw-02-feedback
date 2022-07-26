import { Statselement, StatsElementText } from './Statistic.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <Statselement>
        <StatsElementText>Good:</StatsElementText> {good}
      </Statselement>
      <Statselement>
        <StatsElementText>Neutral:</StatsElementText> {neutral}
      </Statselement>
      <Statselement>
        <StatsElementText>Bad:</StatsElementText> {bad}
      </Statselement>
      <Statselement>
        <StatsElementText>Total:</StatsElementText> {total}
      </Statselement>
      <Statselement>
        <StatsElementText> Positive Feedback:</StatsElementText>
        {positivePercentage
          ? ` ${positivePercentage}`
          : '  There is no any good mark at the moment to count this indicator in '}
        %
      </Statselement>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
