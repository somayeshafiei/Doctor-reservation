export const submitHandler = (e, doctorName, day, id,Expertise) => {
  e.preventDefault();

  const formElements = {
    name: e.target.name.value,
    lastName: e.target.lastName.value,
    phone: e.target.phone.value,
    doctor: doctorName,
    day: day,
  };
  fetch(' http://localhost:3002/patient', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formElements),
  });
 

  // fetch(`http://localhost:3002/doctors/${id}`,{
  //   method:'PUT',
  //   headers: { 'Content-Type': 'application/json' },
  //   body:
  // })
};

window.submitHandler = submitHandler;
