const ColorBtn = ({ newTask, color, colorHandler, bgClass, borderClass }) => {
  const addClass = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };
  let classes = "p-3 btn border-2  " + borderClass;
  if (newTask.color === color) {
    classes += bgClass;
  }
  let clickHandler = (e) => {
    e.preventDefault();
    colorHandler(color);
  };
  return (
    <button type="button" className={classes} onClick={clickHandler}></button>
  );
};

export default ColorBtn;
