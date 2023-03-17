import { modalDays } from './modalScreen';

export const btnCard = (e) => {
  console.log('slm');
  const modalDay = document.getElementById('modalDay');
  modalDays(e);
  modalDay.classList.remove('hidden');
};
