import { renderUi } from './renderUi';

export const getDataDocUi = () => {
  fetch('http://localhost:3002/doctors')
    .then((response) => response.json())
    .then((data) => renderUi(data));
};
