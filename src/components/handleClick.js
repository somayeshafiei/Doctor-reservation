import { submitHandler } from './submitHandler';
export const handleClick = (event, day) => {
  // console.log(event);
  const modal = document.getElementById('modal');
  const targetId = event.target.id;
  // console.log(event.target.innerText);
  console.log(event);
  // console.log(mmd);
  fetch(`http://localhost:3002/doctors/${targetId}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      let htmlForm = `
      <div class="wrapperContent">
            <div class="flex gap-12 items-center">
              <div
                class="flex justify-center items-center bg-gray-3 w-20 h-20 rounded-full"
              >
                <img src="src/icon/icons8-user-30.png" class="w-12" alt="" />
              </div>
              <div>
                <ul>
                  <li class="flex gap-16">
                    <p>نام:</p>
                    <p>${data.fullname}</p>
                  </li>
                  <li class="flex gap-8">
                    <p>تخصص:</p>
                    <p>${data.Expertise}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="flex flex-wrap gap-8">
    <form
    action=""
    class="flex flex-col gap-2 bg-gray-2 rounded-md p-4 shadow mt-4"
    onsubmit='submitHandler(event,"${day}","${data.id}")'
  >
    <div class="flex gap-4">
      <label for="">روز:</label>
      <label for="" >${day}</label>
    </div>
    <div class="flex flex-wrap gap-8">
      <div class="flex flex-col gap-1">
        <label for="">نام بیمار:</label>
        <input name='name' type="text" class="p-2 w-72 rounded-md bg-gray-3" />
      </div>
      <div class="flex flex-col gap-1">
        <label for="">نام خانوادگی بیمار:</label>
        <input name='lastName' type="text" class="p-2 w-72 rounded-md bg-gray-3" />
      </div>
      <div class="flex flex-col gap-1">
        <label for="">شماره همراه بیمار:</label>
        <input name='phone' type="text" class="p-2 w-80 rounded-md bg-gray-3" />
      </div>
    </div>
    <button
      type="submit"
      class="bg-gray-3 rounded-md p-2 w-60 mx-auto mt-4"
      
    >
      ثبت رزرو
    </button>
  </form>
  </div>
          </div>`;

      modal.innerHTML = htmlForm;
    });
};

window.handleClick = handleClick;
