document.querySelector("#btn-add").addEventListener("click", savePacient);

drawPacientTable();
function savePacient() {
  let sId = document.querySelector("#id").value;
  let sName = document.querySelector("#first_name").value;
  let sLastname = document.querySelector("#last_name").value;
  let sEmail = document.querySelector("#email").value;
  let sDate = document.querySelector("#date").value;
  addPacientToSystem(sId, sName, sLastname, sEmail, sDate);
  //utilizar sweetalert para mostrar mensaje de exito
  if (
    sId == "" ||
    sName == "" ||
    sLastname == "" ||
    sEmail == "" ||
    sDate == ""
  ) {
    swal("Error", "Por favor complete todos los campos", "error");
  } else {
    swal({
      title: "Paciente agregado",
      text: "Paciente agregado correctamente",
      icon: "success",
      button: "Aceptar",
    });
  }
  drawPacientTable();
}

function drawPacientTable() {
  let pacientsList = getPacientsList();

  let tbody = document.querySelector("#data tbody");

  tbody.innerHTML = "";

  for (let i = 0; i < pacientsList.length; i++) {
    let row = tbody.insertRow(i);
    let cellId = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellLastname = row.insertCell(2);
    let cellEmail = row.insertCell(3);
    let cellDate = row.insertCell(4);

    cellId.innerHTML = pacientsList[i].id;
    cellName.innerHTML = pacientsList[i].name;
    cellLastname.innerHTML = pacientsList[i].lastname;
    cellEmail.innerHTML = pacientsList[i].email;
    cellDate.innerHTML = pacientsList[i].date;

    tbody.appendChild(row);
  }
}
