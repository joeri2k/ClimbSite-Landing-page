const Dashboard = () => {
  return (
    <div>
      <span>{localStorage.getItem("name")}</span>
      <br />
      <span>{localStorage.getItem("email")}</span>
    </div>
  );
};

export default Dashboard;
