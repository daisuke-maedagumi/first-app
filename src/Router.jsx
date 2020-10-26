import React from 'react'
import {Switch, Route} from 'react-router'

import {Home,Member1,Member2,Member3,Member4,Member5,Member6,Blogs,Administrator,AdministratorEdit,BlogsDetails,SignUp, SignIn} from './Templates/index'
import Auth from './Auth'

const Router = (props) => {
  
  return (
    <div>
      <Switch>
        <Route exact path={'/signup'} component={SignUp} />
        <Route exact path={"/signin"} component={SignIn} />
        <Route exact path={"/Member1"} component={Member1} />
        <Route exact path={"/Member2"} component={Member2} />
        <Route exact path={"/Member3"} component={Member3} />
        <Route exact path={"/Member4"} component={Member4} />
        <Route exact path={"/Member5"} component={Member5} />
        <Route exact path={"/Member6"} component={Member6}/>
        <Route exact path={"/blog"} component={Blogs}/> 
        <Route exact path={"(/)?"} component={Home} />
        <Route path={"/Administrator/edit(/:id)?"} component={AdministratorEdit}/>
        <Route path={"/Blogs/detail(/:id)?"} component={BlogsDetails}/> 
        <Auth>
          <Route exact path={"/Administrator"} component={Administrator}/>
        </Auth>
        
      </Switch>
    </div>
  )
}

export default Router
