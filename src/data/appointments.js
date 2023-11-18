const horas = ["08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];
const turnos = 5;

const donador = {
  firstName: "",
  lastName: "",
  ward: "",
  phone: "",
  dni: "",
  isReserved: false,
};

export const times = [];
for (let i = 0; i < horas.length; i++) {
  const order = [];
  for (let i = 0; i < turnos; i++) {
    order.push(donador);
  }
  times.push({ time: horas[i], order });
}

console.log(JSON.stringify(times, null, " "));
