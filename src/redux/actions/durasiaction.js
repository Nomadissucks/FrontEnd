import { MOBIL, MOTOR, DURASI } from "../../type";

export const tarifMobil = time => {
  return {
    type: MOBIL,
    input: time
  };
};

export const tarifMotor = time => {
  return {
    type: MOTOR,
    input: time
  };
};

export const durasiParkir = time => {
  return {
    type: DURASI,
    input: time
  };
};
