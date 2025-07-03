# Step 1: HTML

このブランチ **`step-1-html`** では、空の骨組みの `index.html` に HTML を追加していきます。CSS や JavaScript は一切触らず、マークアップだけに集中して進めましょう。

### HTML とは？
HTML（HyperText Markup Language）は、ウェブページ上の情報を
「構造（Structure）」と「意味（Semantics）」で記述するためのマークアップ言語です。

- **ハイパーテキストの記述**  
  文書内外のリソースをリンク（<a> 要素）で相互に結び付ける。
- **構造の明示**  
  見出し、段落、リストなどを論理的に区分し、内容を階層化する。
- **意味の付与（セマンティクス）**  
  <article> や <nav> などの要素で「その部分が何であるか」を示し、
  アクセシビリティと機械可読性を高める。

## 0. HTML の仕組みと主要タグ

### 0‑1. ブラウザがページを描画する流れ

1. **HTML のダウンロード** – ブラウザがサーバーから HTML を取得。
2. **DOM ツリーの構築** – タグをパースし、階層構造をメモリ上に展開。
3. **CSS の適用** – 後段で学ぶ CSSOM とマージしレンダーツリーを作成。
4. **レイアウト計算 & ペイント** – レンダーツリーを基に座標計算を行い、画面へ描画。

> 本ステップでは 1 と 2 を支える **タグの正しい使い分け** にフォーカスします。

### 0‑2. 主要タグ一覧

| タグ                     | 役割・用途                     | 補足                                            |
| ------------------------ | ------------------------------ | ----------------------------------------------- |
| `<!DOCTYPE>`             | 文書タイプ宣言                 | HTML5 は `<!DOCTYPE html>` 固定                 |
| `<html>`                 | 文書ルート                     | `lang` 属性で言語指定 (`ja`, `en` など)         |
| `<head>`                 | メタデータ                     | `<meta>`, `<title>`, `<link>` 等を配置          |
| `<body>`                 | ページ内容                     | 画面に表示される要素を内包                      |
| `<h1>`–`<h6>`            | 見出し                         | 階層構造。`<h1>` はページに原則 1 つ            |
| `<p>`                    | 段落                           | テキストの基本単位                              |
| `<a>`                    | ハイパーリンク                 | `href` 属性必須                                 |
| `<img>`                  | 画像                           | `src`, `alt` 属性必須 (装飾画像には空 `alt=""`) |
| `<ul>` / `<ol>` / `<li>` | 箇条書き                       | 順序なし／ありリスト                            |
| `<header>` / `<footer>`  | セクションのヘッダー／フッター | サイト全体または各 `<section>` 内でも可         |
| `<nav>`                  | ナビゲーション領域             | メニューや目次リンクを配置                      |
| `<main>`                 | 主たる内容                     | ページに 1 つだけ                               |
| `<section>`              | 主題別の区分                   | 見出しとセットで使うと望ましい                  |
| `<article>`              | 独立したコンテンツ             | ブログ記事・掲示板投稿など                      |
| `<div>` / `<span>`       | 非セマンティックコンテナ       | 意味のある要素がない場合のみ使用                |

---

## 1. 目標

- 見出し階層 (`<h1>` – `<h6>`) を適切に使い分ける。
- セクション要素 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) でページを区分けする。
- リスト (`<ul>`, `<ol>`, `<li>`) やリンク (`<a>`) を正しくマークアップする。
- アクセシビリティを意識し、画像には `alt` 属性を付与する。

完成イメージは「お気に入り映画リストを紹介する 1 ページ」です。

---

## 2. 演習ステップ

| 手順 | 作業内容                                                       | サンプルコード                                               |
| ---- | -------------------------------------------------------------- | ------------------------------------------------------------ |
| 1    | `<header>` 内に `<h1>`でサイトタイトルを追加                   | `<h1>My Favourite Movies</h1>`                               |
| 2    | `<nav>` にページ内リンクを追加 (例: 作品一覧へジャンプ)        | `<a href="#movies">Movies</a>`                               |
| 3    | `<main>` の中に `<section id="movies">` を作成                 | —                                                            |
| 4    | 作品リストを `<ul>` / `<li>` で記述                            | `<li><strong>Inception</strong> (2010)</li>`                 |
| 5    | 作品ごとにポスター画像 (`<img>`) とあらすじ段落 (`<p>`) を追加 | `<img src="./asset/inception.png" alt="Inception poster" />` |
| 6    | `<footer>` にコピーライトを記述                                | `<small>&copy; 2025 Movie Fan</small>`                       |

> **Tips**
>
> - コードを追加したら **Live Server** で確認し、見出しとリストの階層が正しく表示されるかチェックしてください。
> - 不要な `<div>` は使わず、まずは **意味のある要素** を優先しましょう。

---

## 3. 完了後
完了したら下記コマンドでコミットし、ブランチを push してください。

```bash
git add index.html
git commit -m "feat(html): add semantic structure"
git push origin step-1-html
```

---

## 4. 参考資料

- **MDN — HTML Basics**: [https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- **HTML Living Standard**: [https://html.spec.whatwg.org/](https://html.spec.whatwg.org/)
- **WebAIM — Alternative Text**: [https://webaim.org/techniques/alttext/](https://webaim.org/techniques/alttext/)

---

次のステップ → `step-2-css` へ進む準備ができたら、ターミナルで `git checkout step-2-css` を実行してください。
