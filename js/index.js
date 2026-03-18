// TIL 폼 등록 기능
// 1. 폼 요소와 목록 요소를 querySelector로 선택
// 2. 폼의 submit 이벤트를 감지하여 새 TIL 항목을 목록에 추가

const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // 입력값 가져오기
  const dateInput = document.querySelector("#til-date");
  const titleInput = document.querySelector("#til-title");
  const contentInput = document.querySelector("#til-content");

  const date = dateInput.value;
  const title = titleInput.value;
  const content = contentInput.value;

  // 빈 값 방지
  if (!date || !title || !content) {
    return;
  }

  // 새 TIL 항목 생성
  const article = document.createElement("article");
  article.classList.add("til-item");

  const timeEl = document.createElement("time");
  timeEl.textContent = date;

  const h3 = document.createElement("h3");
  h3.textContent = title;

  const p = document.createElement("p");
  p.textContent = content;

  article.appendChild(timeEl);
  article.appendChild(h3);
  article.appendChild(p);

  // 목록 맨 앞에 추가
  tilList.prepend(article);

  // 폼 초기화
  tilForm.reset();
});
