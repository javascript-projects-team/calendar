const list = document.getElementById(`to_do_list`);

let i = 1;
const date = new Date();

const today =
  date.getMonth() +
  1 +
  "/" +
  date.getDate() +
  "_" +
  (String(date.getHours()).length < 2
    ? "0" + date.getHours()
    : date.getHours()) +
  ":" +
  (String(date.getMinutes()) < 2 ? "0" + date.getMinutes() : date.getMinutes());

/**
 * 완료된 일 목록에서 라디오 버튼 클릭
 * @param {*} clickItem
 */
const completeRadioBtnClick = (clickItem) => {
  const completeRadioBtn = document.getElementById(`${clickItem}_radio`);
  completeRadioBtn.checked = false;
  completeRadioBtn.removeAttribute("onclick");
  completeRadioBtn.setAttribute("onclick", `(${clickItem})`);
  const completeClickInput = document.getElementById(`${clickItem}_text_input`);
  const completeDelBtn = document.getElementById(`${clickItem}_del_button`);
  const modifyBtn = document.createElement(`button`);
  modifyBtn.setAttribute("id", `${clickItem}_modify_button`);
  modifyBtn.setAttribute(`class`, `modify_btn button_public`);
  modifyBtn.setAttribute(
    "onclick",
    `listModifyButtonClickEvent("${clickItem}")`
  );
  modifyBtn.textContent = "수정";

  const doItList = document.getElementById(`to_do_list`);
  doItList.append(completeRadioBtn);
  doItList.append(completeClickInput);
  doItList.append(modifyBtn);
  doItList.append(completeDelBtn);
  doItList.append(today);
};

/**
 * 목록의 radio button click event
 * @param {} clickItem
 */
const completeRadioClick = (clickItem) => {
  const completeList = document.getElementById("complete_list");
  const completeRadioBtn = document.getElementById(`${clickItem}_radio`);
  completeRadioBtn.removeAttribute("onclick");
  completeRadioBtn.setAttribute(
    "onclick",
    `completeRadioBtnClick(${clickItem})`
  );
  const completeClickInput = document.getElementById(`${clickItem}_text_input`);
  const completeDelBtn = document.getElementById(`${clickItem}_del_button`);
  const dateSpan = document.getElementById(`${clickItem}_span_date`);

  const diff = Math.ceil((new Date().getTime() - date.getTime()) / (60 * 1000));
  dateSpan.innerText = "(" + diff + "분)";
  completeList.append(completeRadioBtn);
  completeList.append(completeClickInput);
  completeList.append(completeDelBtn);
  completeList.append(dateSpan);

  completeList.append(document.createElement("br"));
  delButtonClickEvent(clickItem, "radioEvent");
};

/**
 * 목록의 저장 버튼 클릭 이벤트
 * 번호를 넘겨준다.
 * @param {} clickItem
 */
const listSaveButtonClickEvent = (clickItem) => {
  if (document.getElementById(`${clickItem}_save_button`) !== null) {
    document.getElementById(`${clickItem}_save_button`).remove();
  }
  if (document.getElementById(`${clickItem}_del_button`) !== null) {
    document.getElementById(`${clickItem}_del_button`).remove();
  }

  const modifyBtn = document.createElement(`button`);
  const deleteBtn = document.createElement("button");
  const brTag = document.createElement(`br`);
  const dateString = document.createElement(`span`);

  const clickInput = document.getElementById(`${clickItem}_text_input`);
  clickInput.setAttribute("disabled", "");
  if (document.getElementById(`${clickItem}_br`) !== null) {
    document.getElementById(`${clickItem}_br`).remove();
  }

  const clickRadio = document.getElementById(`${clickItem}_radio`);
  clickRadio.removeAttribute("disabled");

  modifyBtn.setAttribute("id", `${clickItem}_modify_button`);
  modifyBtn.setAttribute(`class`, `modify_btn button_public`);
  modifyBtn.setAttribute(
    "onclick",
    `listModifyButtonClickEvent("${clickItem}")`
  );
  modifyBtn.textContent = "수정";
  list.append(modifyBtn);

  deleteBtn.setAttribute("id", `${clickItem}_del_button`);
  deleteBtn.setAttribute(`class`, `del_btn button_public`);
  deleteBtn.setAttribute(`onclick`, `delButtonClickEvent("${clickItem}")`);
  deleteBtn.textContent = "삭제";
  list.append(deleteBtn);

  dateString.setAttribute("id", `${clickItem}_span_date`);
  dateString.textContent = today;
  console.log(dateString);
  brTag.setAttribute("id", `${clickItem}_br`);
  list.append(brTag);
  list.append(dateString);
  list.append(brTag);
};

/**
 * 목록 수정 버튼 클릭 이벤트
 * @param {} clickItem
 */
const listModifyButtonClickEvent = (clickItem) => {
  if (document.getElementById(`${clickItem}_save_button`) !== null) {
    document.getElementById(`${clickItem}_save_button`).remove();
  }
  if (document.getElementById(`${clickItem}_modify_button`) !== null) {
    document.getElementById(`${clickItem}_modify_button`).remove();
  }
  if (document.getElementById(`${clickItem}_del_button`) !== null) {
    document.getElementById(`${clickItem}_del_button`).remove();
  }

  const saveBtn = document.createElement(`button`);
  const deleteBtn = document.createElement("button");
  const brTag = document.createElement(`br`);

  const clickInput = document.getElementById(`${clickItem}_text_input`);
  clickInput.removeAttribute("disabled");

  if (document.getElementById(`${clickItem}_br`) !== null) {
    document.getElementById(`${clickItem}_br`).remove();
  }

  saveBtn.setAttribute("id", `${clickItem}_save_button`);
  saveBtn.setAttribute(`class`, `save_btn button_public`);
  saveBtn.setAttribute(`onclick`, `listSaveButtonClickEvent("${clickItem}")`);
  saveBtn.textContent = "저장";
  list.append(saveBtn);

  deleteBtn.setAttribute("id", `${clickItem}_del_button`);
  deleteBtn.setAttribute(`class`, `del_btn button_public`);
  deleteBtn.setAttribute(`onclick`, `delButtonClickEvent("${clickItem}")`);
  deleteBtn.textContent = "삭제";
  list.append(deleteBtn);

  brTag.setAttribute("id", `${clickItem}_br`);
  list.append(brTag);
};

/**
 * 목록 삭제 버튼 클릭 이벤트
 * @param {} itemNum
 */
const delButtonClickEvent = (itemNum, eventName) => {
  if (eventName !== "radioEvent") {
    if (document.getElementById(`${itemNum}_radio`) !== null) {
      document.getElementById(`${itemNum}_radio`).remove();
    }
    if (document.getElementById(`${itemNum}_text_input`) !== null) {
      document.getElementById(`${itemNum}_text_input`).remove();
    }
    if (document.getElementById(`${itemNum}_del_button`) !== null) {
      document.getElementById(`${itemNum}_del_button`).remove();
    }
    if (document.getElementById(`${itemNum}_span_date`) !== null) {
      document.getElementById(`${itemNum}_span_date`).remove();
    }
  }
  if (document.getElementById(`${itemNum}_save_button`) !== null) {
    document.getElementById(`${itemNum}_save_button`).remove();
  }
  if (document.getElementById(`${itemNum}_modify_button`) !== null) {
    document.getElementById(`${itemNum}_modify_button`).remove();
  }
  if (document.getElementById(`${itemNum}_br`) !== null) {
    document.getElementById(`${itemNum}_br`).remove();
  }
};

/**
 * 추가하기 버튼 클릭 이벤트
 */
const addButtonClickEvent = () => {
  const saveBtn = document.createElement(`button`);
  const deleteBtn = document.createElement("button");
  const brTag = document.createElement(`br`);

  let saveBtnItemId = i + "_save_button";
  let deleteBtnItemId = i + "_del_button";

  const radioInput = document.createElement(`input`);
  radioInput.setAttribute(`type`, `radio`);
  radioInput.setAttribute(`id`, `${i}_radio`);
  radioInput.setAttribute("disabled", false);
  radioInput.setAttribute("onclick", `completeRadioClick(${i})`);
  list.append(radioInput);

  const textInput = document.createElement(`input`);
  textInput.setAttribute(`type`, ``);
  textInput.setAttribute(`class`, `text_area`);
  textInput.setAttribute("id", `${i}_text_input`);
  list.append(textInput);

  saveBtn.setAttribute("id", `${saveBtnItemId}`);
  saveBtn.setAttribute(`class`, `save_btn button_public`);
  saveBtn.setAttribute(`onclick`, `listSaveButtonClickEvent("${i}")`);
  saveBtn.textContent = "저장";
  list.append(saveBtn);

  deleteBtn.setAttribute("id", `${deleteBtnItemId}`);
  deleteBtn.setAttribute(`class`, `del_btn button_public`);
  deleteBtn.textContent = "삭제";
  deleteBtn.setAttribute(`onclick`, `delButtonClickEvent("${i}")`);
  list.append(deleteBtn);

  brTag.setAttribute("id", `${i}_br`);
  list.append(brTag);

  i++;
};

async function getAllData() {
  await fetch("./list.json")
    .then((res) => {
      return res.json();
    })
    .then((res) => console.log(res));
}
// /Users/sujin/a_study/javascript_mini_project/sujin_to_do_list/data/list.json
