import { combineReducers } from "redux";
import Tarif from "./tarifreducer";
import Durasi from "./durasireducer";

export default combineReducers({
  harga: Tarif,
  waktu: Durasi
});
