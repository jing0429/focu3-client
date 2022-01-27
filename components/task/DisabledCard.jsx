const DisabledCard = ({ task }) => {
  let borderColor = `border-[${task.color}]`;
  let classes = "card border-2 h-72 rounded-md  dark:bg-black " + borderColor;
  return (
    <div className="col">
      <div className={classes}></div>
    </div>
  );
};

export default DisabledCard;
