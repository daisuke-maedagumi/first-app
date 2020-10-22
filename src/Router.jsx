import React from 'react'
import {Switch, Route} from 'react-router'
import {Home,Member1,Member2,Member3,Member4,Member5,Member6,Blogs,Administrator,Homes,Login} from './Templates/index'

const Router = (props) => {
  
  return (
    <div>
      <Switch>
        <Route exact path={"/Member1"} component={Member1} />
        <Route exact path={"/Member2"} component={Member2} />
        <Route exact path={"/Member3"} component={Member3} />
        <Route exact path={"/Member4"} component={Member4} />
        <Route exact path={"/Member5"} component={Member5} />
        <Route exact path={"/Member6"} component={Member6}/>
        <Route exact path={"/Administrator"} component={Administrator}/> 
        <Route exact path={"/blog"} component={Blogs}/> 
        <Route exact path={"(/)?"} component={Home} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/homes"} component={Homes} />
      </Switch>
    </div>
  )
}

export default Router
