import React from 'react'
import {
  Route,
  Redirect, Switch
} from 'react-router-dom'
import Discover from '../Discover'
import NowPlaying from '../Pages/NowPlaying'
import Popular from '../Pages/Popular'
import Upcoming from '../Pages/Upcoming'
import TopRated from '../Pages/TopRated'

const Routes = (props) => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Discover} />
        <Route path="/now_playing" component={NowPlaying} />
        <Route path="/popular" component={Popular} />
        <Route path="/upcoming" component={Upcoming} />
        <Route path="/top_rated" component={TopRated} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  )
}

export default Routes