import { combineReducers } from 'redux';
import estacionesReducer from './Estaciones'


export default combineReducers({
    estaciones: estacionesReducer
})