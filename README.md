# Step 2: CSS Basics

このブランチ **`step-2-css`** では、前ステップで作成した HTML 構造にスタイルを適用し、見た目を整えます。ここでは **CSS の役割・基本文法・主要セレクタ・Flexbox** を扱い、シンプルなレイアウトを実装します。

---

## 1. CSS の役割

CSS (Cascading Style Sheets) は **HTML が持つ論理構造に対し、視覚的な装飾やレイアウトを与える言語** です。色・フォント・余白・グリッド配置・アニメーションなどを司ります。

---

## 2. 基本文法

```css
selector {
  property: value;
}
```

例：

```css
p {
  color: navy;
}
```

### 主要セレクタ

| 種類   | 記法      | 例        | 説明                 |
| ------ | --------- | --------- | -------------------- |
| 要素   | `element` | `p`       | タグ名で指定         |
| クラス | `.class`  | `.intro`  | 再利用可能なスタイル |
| ID     | `#id`     | `#top`    | ページ内一意         |
| 子孫   | `A B`     | `nav a`   | A の子孫 B           |
| 子     | `A > B`   | `ul > li` | 直下の子のみ         |
| 複数   | `A, B`    | `h1, h2`  | 複数をまとめて指定   |

---

## 2‑2. Flexbox チートシート

```css
.container {
  display: flex; /* Flexbox を有効化 */
  gap: 1rem; /* 子要素間の隙間 */
  justify-content: center; /* 主軸揃え */
  align-items: center; /* 交差軸揃え */
}
```

Flexbox は複数要素を **1 次元（横方向または縦方向）** に並べ替えるモダンなレイアウト手法です。レスポンシブ対応が容易なため、初学者にも推奨されます。

---

## 3. ミニ演習  ② — デザイン追加（10  分）

1. リポジトリ直下に `style.css` を新規作成し、以下を記述。

   ```css
   body {
     font-family: system-ui, sans-serif;
     line-height: 1.6;
     margin: 0 1rem;
   }
   h1 {
     color: #0d47a1;
   }

   nav ul {
     display: flex;
     gap: 0.5rem;
     list-style: none;
     padding: 0;
   }

   @media (max-width: 600px) {
     nav ul {
       flex-direction: column;
     }
   }
   ```

2. `index.html` `<head>` 内にリンクタグを追加。

   ```html
   <link rel="stylesheet" href="style.css" />
   ```

3. **Live Server** を再読み込みし、文字色・余白・ナビゲーション並びが反映されているか確認。
4. いい感じに CSS を書き換えて色や余白を自由に変更してみる。

---

## 4. 完了後コミット。

```bash
git add .
git commit -m "style: add basic styles"
git push origin step-2-css
```

---

## 5. 参考リンク

- **MDN — CSS First Steps**: [https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
- **CSS Tricks — A Complete Guide to Flexbox**: [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

---

> 📦 次のステップ → `step-3-js` へ進む際は `git checkout step-3-js` を実行してください。
