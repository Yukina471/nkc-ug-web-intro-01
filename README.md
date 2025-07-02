# Step 3: JavaScript Basics

このブランチ **`step-3-js`** では、既にマークアップとスタイルが完成したページに **動き（インタラクション）** を加えます。JavaScript (JS) の役割、DOM 操作、イベントハンドリングの基本を学び、クリックでリストを表示／非表示に切り替える実装を行います。

---

## 1. JavaScript の役割

JavaScript はブラウザ上で実行され、**HTML (DOM)** と **CSS (スタイル)** を動的に操作して、ユーザーと対話できる Web ページを作ります。本ステップでは、以下を最小セットとして習得します。

1. **DOM 取得**: `document.querySelector()` で要素を選択
2. **内容変更**: `textContent`, `classList.toggle()` 等で内容やクラスを変更
3. **イベント処理**: `addEventListener()` でクリックなどの操作を検知

---

## 2. DOM 操作の基本

| 目的         | API                          | 使用例                                          |
| ------------ | ---------------------------- | ----------------------------------------------- |
| 要素取得     | `document.querySelector()`   | `const btn = document.querySelector('button');` |
| テキスト変更 | `element.textContent`        | `btn.textContent = 'クリックされました';`       |
| クラス切替   | `element.classList.toggle()` | `element.classList.toggle('hidden');`           |
| 属性変更     | `element.setAttribute()`     | `img.setAttribute('alt', 'New alt');`           |

> 🔍 **DevTools で確認**: Chrome で `F12` → Elements タブを開き、選択した要素に対応する DOM がハイライトされることを確認してみましょう。

---

## 3. イベントハンドリング

```js
button.addEventListener("click", (event) => {
  // クリック時の処理
});
```

- 第 1 引数: イベント種別 (`'click'`, `'input'`, `'keyup'` など)
- 第 2 引数: コールバック関数。イベント発生時に実行される

---

## 4. ミニ演習  ③ — 表示切替ボタン（10  分）

1. プロジェクト直下に **`script.js`** を新規作成し、次を貼り付け。

   ```js
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
   ```

2. `index.html` の末尾（`</body>` の直前）でスクリプトを読み込み。

   ```html
   <script src="script.js"></script>
   ```

3. **Live Server** を更新し、ボタンを押すたびに映画リストが表示／非表示になることを確認。
4. 任意でボタンにクラスを付与し、`style.css` で見た目を整えてみましょう。

---

## 5. 完了したらコミット。

```bash
git add .
git commit -m "feat(js): add toggle button"
git push origin step-3-js
```

---

## 6. 参考リンク

- **MDN — JavaScript First Steps**: [https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)
- **JavaScript.info — DOM Basics**: [https://javascript.info/dom-nodes](https://javascript.info/dom-nodes)
- **Event Reference**: [https://developer.mozilla.org/en-US/docs/Web/Events](https://developer.mozilla.org/en-US/docs/Web/Events)

---

> 🎉 これで基礎 3 ステップ完了です。追加演習やリファクタリングに挑戦したい方は `final-solution` ブランチの実装を参考にしてください。
