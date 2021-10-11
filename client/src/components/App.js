import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import AuthServices from './../service/auth.service'
import ProductList from './pages/Products/Product-list/Product-list'
import ProductDetails from './pages/Products/Product-details/Product-details'
import ProductForm from './pages/Products/Product-new-form/Product-new-form'
import ProductEditForm from './pages/Products/Product-edit-form/Product-edit-form'
import Signup from './pages/User/Signup/Signup'
import Login from './pages/User/Login/Login'
import Navbar from './layout/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './layout/Footer/Footer'


class App extends Component {

  constructor() {
    super()
    this.state = {

      loggedInUser: undefined

    }

    this.authServices = new AuthServices()

  }

  componentDidMount = () => {

    this.authServices
      .isLoggedIn()
      .then(response => this.setTheUser(response.data))
      .catch(err => this.setTheUser(undefined))
  }


  setTheUser = user => this.setState({ loggedInUser: user })


  render() {

    return (
      <>


        <Navbar storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} />

        <main className="html">
          <Switch>
            <Route path="/" exact render={() => <Home loggedUser={this.state.loggedInUser} />} />
            <Route path="/registro" render={props => <Signup storeUser={this.setTheUser} {...props} />} />
            <Route path="/acceso-usuario" render={props => <Login storeUser={this.setTheUser} {...props} />} />
            <Route path="/productos" exact render={() => <ProductList loggedUser={this.state.loggedInUser} />} />
            <Route path="/productos/crear" render={props => this.state.loggedInUser ? <ProductForm {...props} loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />
            <Route path="/productos/editar/:product_id" exact render={props => this.state.loggedInUser ? <ProductEditForm {...props} loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />
            <Route path="/productos/:product_id" render={props => <ProductDetails {...props} loggedUser={this.state.loggedInUser} />} />
          </Switch>
        </main>

        <Footer />

      </>
    )
  }

}

export default App
