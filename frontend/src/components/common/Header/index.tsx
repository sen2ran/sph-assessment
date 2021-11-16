import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  return (
    <div className="container-fluid">
      <div className="header">
        <h1 onClick={() => history.goBack()}>SPH Assessment</h1>
      </div>
    </div>
  );
};
