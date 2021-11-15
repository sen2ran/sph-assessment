import { Route, Switch } from "react-router-dom";
import AppLayout from "../layouts";
import Details from "../pages/Details";
import Search from "../pages/Search";

const Routes = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/details" component={Details} />
      </Switch>
    </AppLayout>
  );
};

export default Routes;
