let participants = [
    {
      name: "Jody Collins",
      email: "nolan71@hotmail.com",
      registrationDate: new Date(2024, 2, 22, 19, 20),
      dateCheckIn: new Date(2024, 2, 25, 22, 20)
    },
    {
      name: "Diego Fernandes",
      email: "diego@gmail.com",
      registrationDate: new Date(2024, 1, 2, 19, 20),
      dateCheckIn: new Date(2024, 1, 5, 22, 0)
    },
    {
      name: "Ana Silva",
      email: "ana@gmail.com",
      registrationDate: new Date(2024, 0, 15, 14, 30),
      dateCheckIn: new Date(2024, 0, 18, 9, 0)
    },
    {
      name: "Carlos Souza",
      email: "carlos@gmail.com",
      registrationDate: new Date(2024, 3, 10, 10, 0),
      dateCheckIn: new Date(2024, 3, 13, 15, 45)
    },
    {
      name: "Juliana Lima",
      email: "juliana@gmail.com",
      registrationDate: new Date(2024, 4, 5, 8, 15),
      dateCheckIn: new Date(2024, 4, 8, 18, 30)
    },
    {
      name: "Ricardo Oliveira",
      email: "ricardo@gmail.com",
      registrationDate: new Date(2024, 6, 20, 12, 0),
      dateCheckIn: new Date(2024, 6, 23, 10, 30)
    },
    {
      name: "Fernanda Costa",
      email: "fernanda@gmail.com",
      registrationDate: new Date(2024, 8, 3, 16, 45),
      dateCheckIn: new Date(2024, 8, 6, 20, 15)
    },
    {
      name: "Paulo Santos",
      email: "paulo@gmail.com",
      registrationDate: new Date(2024, 9, 12, 11, 30),
      dateCheckIn: new Date(2024, 9, 15, 9, 45)
    },
    {
      name: "Mariana Lima",
      email: "mariana@gmail.com",
      registrationDate: new Date(2024, 10, 8, 13, 20),
      dateCheckIn: new Date(2024, 10, 11, 16, 0)
    },
    {
      name: "Pedro Carvalho",
      email: "pedro@gmail.com",
      registrationDate: new Date(2024, 11, 28, 20, 0),
      dateCheckIn: new Date(2024, 11, 31, 22, 45)
    }
];

const createNewParticipant = (participant) => {
  const registrationDate = dayjs(Date.now()).to(participant.registrationDate);
  const dateCheckIn = dayjs(Date.now()).to(participant.dateCheckIn);

  return `   
<tr>
<td>
  <strong>
    ${participant.name}
  </strong>
  <br>
  <small>
  ${participant.email}
  </small>
</td> 
<td> ${registrationDate}</td>
<td> ${dateCheckIn}</td>
</tr>
  `;
};

const updateList = (participants) => {
  let output = ""
  for(let participant of participants)
  output = output + createNewParticipant(participant)
  document.querySelector("tbody").innerHTML = output;
};

updateList(participants);
