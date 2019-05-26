import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import HomePage from './pages/Home';
import ShortPage from './pages/Short';
import LongPage from './pages/Long';
import SpecialPage from './pages/Special';
import ShortChoice from './pages/ShortChoice';
import LongChoice from './pages/LongChoice';
import SpecialChoice from './pages/SpecialChoice';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';
import About from './pages/About';
import Final from './pages/Final';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route
          exact
          path={'/krotko-terminowy'}
          component={ShortPage}
        />
        <Route
          exact
          path={'/krotki-wybor'}
          component={ShortChoice}
        />
        <Route
          exact
          path={'/dlugo-terminowy'}
          component={LongPage}
        />
        <Route
          exact
          path={'/dlugi-wybor'}
          component={LongChoice}
        />
        <Route
          exact
          path={'/okazjonalny'}
          component={SpecialPage}
        />
        <Route
          exact
          path={'/okazjonalny-wybor'}
          component={SpecialChoice}
        />
        <Route
          exact
          path={'/galeria'}
          component={GalleryPage}
        />
        <Route
          exact
          path={'/kontakt'}
          component={Contact}
        />
        <Route
          exact
          path={'/o-nas'}
          component={About}
        />
        <Route
          exact
          path={'/final-info'}
          component={Final}
        />
      </Switch>
    )
  }
}
export default withRouter(Routes);
