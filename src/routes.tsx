import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, COLORS } from "./styles";
import mainPage from "./pages/mainPage";
import aboutPage from "./pages/aboutPage";
import alcoholDetail from "./pages/alcoholDetail";
import featherDetail from "./pages/featherDetail";
import kobbubakDetail from "./pages/kobbubakDetail";
import metorDetail from "./pages/metorDetail";
import storeDetail from "./pages/storeDetail";
import storeList from "./pages/storeList";
import themeList from "./pages/themeList";
import todayRandom from "./pages/todayRandom";
import weMeokTalkMain from "./pages/weMeokTalkMain";
import weMeokTalkDetail from "./pages/weMeokTalkDetail";

class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ThemeProvider theme={COLORS}>
          <GlobalStyle />
          <Router>
            <Switch>
              <Route exact path="/" component={mainPage} />
              <Route exact path="/aboutPage" component={aboutPage} />
              <Route exact path="/alcoholDetail" component={alcoholDetail} />
              <Route exact path="/featherDetail" component={featherDetail} />
              <Route exact path="/kobbubakDetail" component={kobbubakDetail} />
              <Route exact path="/metorDetail" component={metorDetail} />
              <Route exact path="/storeDetail" component={storeDetail} />
              <Route exact path="/storeList" component={storeList} />
              <Route exact path="/themeList" component={themeList} />
              <Route exact path="/todayRandom" component={todayRandom} />
              <Route exact path="/weMeokTalkMain" component={weMeokTalkMain} />
              <Route
                exact
                path="/weMeokTalkDetail"
                component={weMeokTalkDetail}
              />
            </Switch>
          </Router>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
export default Routes;
