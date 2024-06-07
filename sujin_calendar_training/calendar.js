const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const week = date.getDate();
const today = date.getDay();

const prevDays = new Date(year, month - 1, 0).getDate();
const thisMonthDays = new Date(year, month, 0).getDate();
const nextDays = new Date(year, month + 1, 0).getDate();

const monthArray = new Array(7);

document.querySelector(
  ".top"
).innerHTML = `<div class="this_date">${year}년 ${month}월</div>`;

const renderDateDiv = () => {


  const firstDay = new Date(`${year}-${month}-01`).getDay();



  let tmp = "";
  for (let i = 1; i <= thisMonthDays; i++) {
    let test = "";
    if (i % 7 == 1) {
      test += `<div class="weekend">`;
      test += `<div class="date_${i}">${i}</div>`;
      // continue;
    } else if (i % 7 == 0) {
      test += `<div class="date_${i}">${i}</div>` + `</div>`;
    } else {
      test += `<div class="date_${i}">${i}</div>`;
    }
  
    if (i == thisMonthDays) {
      test += `</div>`;
    }
  
    tmp += test;
  }
  
  document.querySelector(".dates").innerHTML += tmp;
}


renderDateDiv();