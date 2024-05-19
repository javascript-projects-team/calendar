let date = new Date();

const renderCalender = () => {
  const year = date.getFullYear();
  const month = date.getMonth();

  document.querySelector(".year-month").textContent = `${year}년 ${
    month + 1
  }월`;

  const prevLast = new Date(year, month, 0);
  const thisLast = new Date(year, month + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1); // begin 부터 end 까지 복사
  const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i); // 새로운 요소를 배열의 맨 앞쪽에 추가하고 새로운 길이를 return
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates); // 배열 병합
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);
  dates.forEach((date, i) => {
    const condition =
      i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";
    dates[
      i
    ] = `<div class="date"><span class="${condition}">${date}</span></div>`;
  });

  document.querySelector(".dates").innerHTML = dates.join(""); // 배열의 모든 요소를 쉼표 혹은 매개변수 값으로 구분하여 출력한다.

  const today = new Date();
  if (month === today.getMonth() && year === today.getFullYear()) {
    for (let date of document.querySelectorAll(".this")) {
      if (+date.innerText === today.getDate()) {
        date.classList.add("today");
        break;
      }
    }
  }
};

renderCalender();

const prevMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);
  renderCalender();
};

const nextMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  renderCalender();
};

const goToday = () => {
  date = new Date();
  renderCalender();
};
