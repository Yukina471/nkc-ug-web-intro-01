## 0. 目的とゴール

- GitHub からリポジトリを **Fork → Clone -> commit&push** する手順を体験する。
- HTML → CSS → JavaScript の順に、Web フロント開発に必要な概念や基礎構文と DOM 操作の最小パターンを理解する。

最終的には、デモページをブラウザで動作させ、任意の要素をクリックで表示／非表示できるところまで到達します。

---

## 1. 事前準備（必須）

各自 PC に以下ツールをインストールし、動作確認まで完了させてください。

| ツール             | ダウンロードリンク                                                                                                                                     | 動作確認コマンド・手順                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| Git                | [https://git-scm.com/downloads](https://git-scm.com/downloads)                                                                                         | `git --version` が表示される                  |
| GitHub アカウント  | [https://github.com/](https://github.com/)                                                                                                             | サインインできる                              |
| Visual Studio Code | [https://code.visualstudio.com/](https://code.visualstudio.com/)                                                                                       | VS Code が起動する                            |
| Live Server 拡張   | [https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) | VS Code で「Open with Live Server」が利用可能 |
| Google Chrome      | [https://www.google.com/chrome/](https://www.google.com/chrome/)                                                                                       | 起動して最新版であることを確認                |

---

## 2. ブランチ構成と学習フロー

| ブランチ名       | 学習内容                                                | 状態                 |
| ---------------- | ------------------------------------------------------- | -------------------- |
| `main`           | 勉強会の説明と各環境構築やコマンドなど                  | 本勉強会スタート地点 |
| `step-1-html`    | HTML 基礎（論理構造・見出し・リストなど）を追加         | 15  分前後           |
| `step-2-css`     | CSS 基礎（色・余白・Flexbox でのレイアウト）を追加      | 15  分前後           |
| `step-3-js`      | JavaScript 基礎（DOM 取得・イベントハンドリング）を追加 | 15  分前後           |
| `final-solution` | 参考実装（完成形）                                      | 復習用               |

> **ブランチ切替方法**
>
> ```bash
> git fetch --all
> git checkout step-1-html   # 次のステップに進む例
> ```

---

## 3. ファイル構成（全ブランチ共通）

```
/
├── index.html   # マークアップ
├── style.css    # スタイルシート
├── script.js    # スクリプト
└── README.md    # 各ステップでの説明

```

---

## 4. 開発サイクル

1. VS Code でプロジェクトフォルダを開く。
2. `index.html` を右クリック → **Open with Live Server**。
3. ファイルを保存すると、Chrome が自動リロードして変更を即確認できる。

---

## 5. ライセンス / 行動規範

- **ソースコード**: MIT License

---

## 6. 参考リンク

- MDN Web Docs — [https://developer.mozilla.org/](https://developer.mozilla.org/)
- Flexbox Froggy — [https://flexboxfroggy.com/](https://flexboxfroggy.com/)
- MDN Web Docs JavaScript Guide — [https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide)
