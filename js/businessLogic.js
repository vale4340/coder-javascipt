let pacientsList = [];

function addPacientToSystem(pid, pname, plastname, pemail, pdate) {
    let newPacient = {
        id: pid,
        name: pname,
        lastname: plastname,
        email: pemail,
        date: pdate
    };
    pacientsList.push(newPacient);
    localStoragePacientList(pacientsList);
}

function getPacientsList() {
    let storedList = localStorage.getItem('localPacientList');
    if (storedList == null) {
        pacientsList = [];
    } else {
        pacientsList = JSON.parse(storedList);
    }
    
    return pacientsList;
}

function localStoragePacientList(plist) {
    localStorage.setItem('localPacientList', JSON.stringify(plist));
}