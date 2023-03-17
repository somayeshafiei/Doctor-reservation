import { handleClick } from './handleClick';
export function createBtn(data) {
  let allBtn = ``;
  for (let key in data.days) {
    if (data.days[key]) {
      const disableBtn = ` <button
        class="p-2 w-32 rounded-md shadow-lg bg-gray-3"
        disabled
      >
        ${key}
      </button>`;

      allBtn += disableBtn;
    } else {
      const ableBtn = ` <button
        class="p-2 w-32 rounded-md shadow-lg bg-gray-2 hover:bg-gray-3"
        onclick="handleClick(event,'${key}')"
        id=${data.id}
      >
        ${key}
      </button>`;

      allBtn += ableBtn;
    }
  }
  return allBtn;
}
