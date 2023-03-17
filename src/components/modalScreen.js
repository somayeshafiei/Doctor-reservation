import { createBtn } from './createBtn';

export function modalDays(e) {
  const modal = document.getElementById('modal');
  const targetId = e.target.id;
  console.log(targetId);

  fetch(`http://localhost:3002/doctors/${targetId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log('hello');
      let htmlModal = `<div class="wrapperContent">
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
      <div class="flex flex-wrap gap-8 justify-center mb-20">
     ${createBtn(data)}
      </div>
    </div>`;

      modal.innerHTML = htmlModal;
    });
}
