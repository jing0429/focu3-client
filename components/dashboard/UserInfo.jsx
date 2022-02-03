const UserInfo = ({ userInfo }) => {
  return (
    <div className="lg:w-1/2 ">
      <h1 className="display-5 dark:text-white text-center  mb-5 ">
        {userInfo.username}
      </h1>
      <h1 className="text-2xl text-muted  mb-5 text-center">
        {userInfo.email}
      </h1>
      <h1 className="text-4xl  mb-5 text-center dark:text-white ">
        Total time:{(userInfo.totalTime / 60).toFixed(1)} hr
      </h1>
      <h1 className="text-4xl  mb-5   text-center dark:text-white ">
        Complete {userInfo.totalTask} tasks
      </h1>
    </div>
  );
};

export default UserInfo;
