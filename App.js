// Importaciones de Librerias
import React, { Fragment, useState } from 'react';
import { Provider } from 'react-redux'
import store from './Redux/store'

//Importacion de rutas
import { RootNavigator } from './routes/Main'


const App = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </Fragment>
  )
}

export default App