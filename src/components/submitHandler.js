export const submitHandler = async function (e, day, id) {
  e.preventDefault();
  const getResponse = await fetch(`http://localhost:3002/doctors/${id}`);
  const getData = await getResponse.json();
  getData.days[day] = true;
  console.log(getData);
  const formElements = {
    name: e.target.name.value,
    lastName: e.target.lastName.value,
    phone: e.target.phone.value,
    doctor: getData.fullname,
    day: day,
  };

  await fetch(' http://localhost:3002/patient', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formElements),
  });

  await fetch(`http://localhost:3002/doctors/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(getData),
  });
  const modalDay = document.getElementById('modalDay');
  modalDay.classList.toggle('hidden');
};

window.submitHandler = submitHandler;
