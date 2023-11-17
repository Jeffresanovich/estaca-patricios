const donor = {
  firstName: "",
  lastName: "",
  ward: "",
  phone: "",
  dni: "",
  isReserved: false,
};

const horas = ["08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];
const turnos = 5;

const times = [];
for (let i = 0; i < horas.length; i++) {
  const appointment = [];
  for (let i = 0; i < turnos; i++) {
    appointment.push(donor);
  }
  times.push({ time: horas[i], appointment });
}

console.log(JSON.stringify(times, null, " "));
