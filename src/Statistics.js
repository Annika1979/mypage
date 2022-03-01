const Statistic = (props) => {
  return (
    <div>
      <p>
        {props.text} {props.value}{" "}
      </p>
    </div>
  );
};

const Statistics = (props) => {
  let good = props.value.good;
  let neutral = props.value.neutral;
  let bad = props.value.bad;
  let total = good + neutral + bad;

  if (total !== 0) {
    return (
      <div>
        <h3>Results</h3>
        <Statistic text="Good" value={good} />
        <Statistic text="Neutral" value={neutral} />
        <Statistic text="Bad" value={bad} />
        <p>
          <strong> Total votes {total}</strong>
        </p>
      </div>
    );
  } else {
    return (
      <div className="no-votes">
        <p>No votes yet. Go ahead, vote!</p>
      </div>
    );
  }
};

export { Statistic, Statistics };
