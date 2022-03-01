import { useState } from "react";
import { Statistics } from "../Statistics";

const Comments = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const Button = (props) => {
    const { onClick, text } = props;
    return <button onClick={onClick}> {text} </button>;
  };

  const Header = (props) => <p>{props.value}</p>;

  const handleGoodClick = () => {
    const newClicks = {
      good: clicks.good + 1,
      neutral: clicks.neutral,
      bad: clicks.bad,
    };
    setClicks(newClicks);
  };

  const handleNeutralClick = () => {
    const newClicks = {
      good: clicks.good,
      neutral: clicks.neutral + 1,
      bad: clicks.bad,
    };
    setClicks(newClicks);
  };

  const handleBadClick = () => {
    const newClicks = {
      good: clicks.good,
      neutral: clicks.neutral,
      bad: clicks.bad + 1,
    };
    setClicks(newClicks);
  };

  return (
    <div>
      <section className="comments-section">
        <div>
          <h2 className="comments-header">
            <Header value="What do you think about my page?" />
          </h2>
          <Button onClick={handleGoodClick} text="Good" />

          <Button onClick={handleNeutralClick} text="Neutral" />

          <Button onClick={handleBadClick} text="Bad" />
        </div>
        <div>
          <Statistics value={clicks} />
        </div>
      </section>
    </div>
  );
};

export default Comments;
