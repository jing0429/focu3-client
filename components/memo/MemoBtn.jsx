export default function MemoBtn({ expand, setExpand }) {
  let expandHandler = () => {
    setExpand(!expand);
  };
  return (
    <div
      className=" absolute left-0 top-20 btn bg-blue-400 dark:bg-gray-700 btn-lg flex items-center justify-center dark:border-white"
      onClick={expandHandler}
    >
      {!expand ? (
        <i className="bi bi-chat-left-text text-2xl dark:text-white"></i>
      ) : (
        <i className="bi bi-x text-2xl dark:text-white"></i>
      )}
    </div>
  );
}
