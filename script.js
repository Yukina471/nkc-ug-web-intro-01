// ページ読み込み完了後に実行
window.addEventListener("DOMContentLoaded", () => {
    // 1) ボタン生成
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Movie List";
  
    // 2) ボタンを <h2> 見出しの前に挿入
    const movieSection = document.querySelector("#movies");
    const movieHeading = movieSection.querySelector("h2");
    movieHeading.before(toggleBtn);
  
    // 3) クリックで <ul> を表示／非表示
    const movieList = movieSection.querySelector("ul");
    toggleBtn.addEventListener("click", () => {
      movieList.hidden = !movieList.hidden;
    });
  });