import React from 'react'
import {Switch, Route} from 'react-router'
import {Home,Member1,Member2,Member3,Member4} from './Templates/index'

const Router = () => {
  return (
    <div>
      <Switch>
        <Route exact path={"(/)?"} component={Home}/>
        <Route exact path={"/Member1"} component={Member1}/>
        <Route exact path={"/Member2"} component={Member2}/>
        <Route exact path={"/Member3"} component={Member3}/>
        <Route exact path={"/Member4"} component={Member4}/>
      </Switch>
    </div>
  )
}

export default Router
