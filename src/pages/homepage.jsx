import React, { Component } from "react";
import { connect } from "react-redux";
import { tarifMobil, tarifMotor, durasiParkir } from "../redux/actions";

class Homepage extends Component {
  state = {
    showData: 0
  };

  onCarClick = () => {
    this.props.tarifMobil(0);
    this.props.durasiParkir(0);
    this.setState({ showData: 1 });
  };

  onBikeClick = () => {
    this.props.tarifMotor(0);
    this.props.durasiParkir(0);
    this.setState({ showData: 2 });
  };

  onBayarMobil = () => {
    var angka = this.refs.angka.value;
    this.props.tarifMobil(angka);
    this.props.durasiParkir(angka);
    this.refs.angka.value = "";
  };

  onBayarMotor = () => {
    var angka = this.refs.angka.value;
    this.props.tarifMotor(angka);
    this.props.durasiParkir(angka);
    this.refs.angka.value = "";
  };

  tampilkanData = () => {
    const { showData } = this.state;
    if (showData === 1) {
      this.refs.tampak.innerHTML = null;
      return (
        <div>
          <div className="app homepage justify-content-center">
            <center className="display-3">Park-Mobil</center>
            <center>
              <button
                className="btn btn-primary size-lg mr-5 block"
                onClick={this.onCarClick}
              >
                Car
              </button>
              <button
                className="btn btn-secondary size-lg ml-5 block"
                onClick={this.onBikeClick}
              >
                Bikes
              </button>
              <br />
              <h5>Durasi Parkir</h5>
              <input
                ref="angka"
                type="number"
                style={{ height: "40px", width: "30%" }}
              ></input>
              <h6>Total Bayar Rp. {this.props.harga},00</h6>
              <button
                className="btn btn-success size-s"
                onClick={this.onBayarMobil}
              >
                Bayar
              </button>
              <br />

              <p>{this.props.waktu} Jam</p>
              <p>Catatan = 2000/Jam</p>
            </center>
          </div>
        </div>
      );
    } else if (showData === 2) {
      this.refs.tampak.innerHTML = null;
      return (
        <div>
          <div className="app homepage justify-content-center">
            <center className="display-3">Park-Motor</center>
            <center>
              <button
                className="btn btn-primary size-lg mr-5 block"
                onClick={this.onCarClick}
              >
                Car
              </button>
              <button
                className="btn btn-secondary size-lg ml-5 block"
                onClick={this.onBikeClick}
              >
                Bikes
              </button>
              <br />
              <h5>Durasi Parkir</h5>
              <input
                ref="angka"
                type="number"
                style={{ height: "40px", width: "30%" }}
              ></input>
              <h6>Total Bayar Rp. {this.props.harga},00</h6>
              <button
                className="btn btn-success size-s"
                onClick={this.onBayarMotor}
              >
                Bayar
              </button>
              <br />

              <p>{this.props.waktu} Jam</p>
              <p>Catatan = 1000/Jam</p>
            </center>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div
          ref="tampak"
          className="app homepage justify-content-center display-3"
        >
          <center>Park-Here</center>
          <center>
            <button
              className="btn btn-primary size-lg mr-5 block"
              onClick={this.onCarClick}
            >
              Car
            </button>
            <button
              className="btn btn-secondary size-lg ml-5 block"
              onClick={this.onBikeClick}
            >
              Bikes
            </button>
          </center>
        </div>
        <div>{this.tampilkanData()}</div>
      </div>
    );
  }
}
const MapStateToProps = state => {
  return {
    harga: state.harga,
    waktu: state.waktu
  };
};
export default connect(MapStateToProps, {
  tarifMobil,
  tarifMotor,
  durasiParkir
})(Homepage);
