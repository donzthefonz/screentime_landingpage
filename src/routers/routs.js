import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
// import ThemeOne from "../themes/theme-one";
import ThemeOne from "../themes/theme-one-custom";
import ThemeTwo from "../themes/theme-two";
import ThemeThree from "../themes/theme-three";
import ThemeFour from "../themes/theme-four";
import ThemeFive from "../themes/theme-five";
import ThemeSix from "../themes/theme-six";
import ThemeSeven from "../themes/theme-seven";
import Blogs from "../components/Blogs/blogs";
import Main from "../components/BlogDetails/main";

class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/theme-one" component={ThemeOne} />
            <Route exact path="/theme-two/" component={ThemeTwo} />
            <Route exact path="/theme-three/" component={ThemeThree} />
            <Route exact path="/" component={ThemeFour} />
            <Route exact path="/theme-five/" component={ThemeFive} />
            <Route exact path="/theme-six/" component={ThemeSix} />
            <Route exact path="/theme-seven/" component={ThemeSeven} />
            <Route exact path="/blog-details/" component={Main} />
            <Route exact path="/blogs/" component={Blogs} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;
