const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={className}>{buttonText}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttons-container">
      <Button className="like" buttonText="Like" />
      <Button className="share" buttonText="Share" />
      <Button className="comment" buttonText="Comment" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
