window.addEventListener("DOMContentLoaded", () => {
  /* 1) ボタン要素を作成し、テキストを設定 */
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "映画リストを表示 / 非表示";
  toggleBtn.className = "toggle-btn"; // CSS で見た目を整えるためのクラス

  /* 2) 映画セクション（#movies）から
        h2 見出しを取得し、その手前にボタンを挿入 */
  const movieSection = document.querySelector("#movies");
  const movieHeading = movieSection.querySelector("h2");
  movieHeading.before(toggleBtn);

  /* 3) 実際に表示を切り替える対象（<ul>）を取得 */
  const movieList = movieSection.querySelector("ul");

  /* 4) クリックイベントを登録。
        hidden プロパティを切り替えるだけで表示/非表示が実現 */
  toggleBtn.addEventListener("click", () => {
    movieList.hidden = !movieList.hidden;
  });
});
