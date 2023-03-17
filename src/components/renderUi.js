import { btnCard } from './btnCard';

export const renderUi = (data) => {
  const cardbox = document.getElementById('cardbox');
  cardbox.innerHTML = '';

  // let html = `
  // <div
  //           class="card shadow gap-8 p-4 bg-gray-1 w-2/12 rounded-2xl flex flex-col justify-center items-center"
  //         >
  //           <div
  //             class="flex justify-center items-center bg-gray-3 w-20 h-20 rounded-full"
  //           >
  //             <img src="src/icon/icons8-user-30.png" class="w-12" alt="" />
  //           </div>

  //           <ul>
  //             <li class="flex gap-4">
  //               <p>نام:</p>
  //               <p>${item.fullname}</p>
  //             </li>
  //             <li class="flex gap-4">
  //               <p>تخصص:</p>
  //               <p>${item.Expertise}</p>
  //             </li>
  //           </ul>
  //           <button onclick="${btnCard()}" class="bg-gray-3 p-2 w-3/4 rounded-full text-gray-1">
  //             رزرو پزشک
  //           </button>
  //         </div>`;

  data.map((item) => {
    let cardDiv = document.createElement('div');
    cardDiv.classList =
      'card shadow gap-8 p-4 bg-gray-1 w-2/12 rounded-2xl flex flex-col justify-center items-center';
    let imgDivWrapper = document.createElement('div');
    imgDivWrapper.classList =
      'flex justify-center items-center bg-gray-3 w-20 h-20 rounded-full';
    let imgTag = document.createElement('img');
    imgTag.setAttribute('src', 'src/icon/icons8-user-30.png');
    imgTag.setAttribute('class', 'w-12');
    imgDivWrapper.append(imgTag);
    let ulTag = document.createElement('ul');
    let li1 = document.createElement('li');
    li1.classList = 'flex gap-4';
    let liP1 = document.createElement('p');
    liP1.innerText = 'نام:';
    let liP2 = document.createElement('p');
    liP2.innerText = item.fullname;
    li1.append(liP1, liP2);
    let li2 = document.createElement('li');
    li2.classList = 'flex gap-4';
    let li2P1 = document.createElement('p');
    li2P1.innerText = 'تخصص:';
    let li2P2 = document.createElement('p');
    li2P2.innerText = item.Expertise;
    li2.append(li2P1, li2P2);
    ulTag.append(li1, li2);

    let btntag = document.createElement('button');
    btntag.classList = 'bg-gray-3 p-2 w-3/4 rounded-full text-gray-1';
    btntag.innerText = 'رزرو پزشک';
    btntag.addEventListener('click', btnCard);
    btntag.id = item.id;
    
    cardDiv.append(imgDivWrapper, ulTag, btntag);

    cardbox.append(cardDiv);
  });
};
