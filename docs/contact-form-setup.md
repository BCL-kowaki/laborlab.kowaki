# お問い合わせフォーム セットアップ手順

GAS（Google Apps Script）+ Google スプレッドシートでお問い合わせフォームを動かすための手順書。
**所要時間: 約30分** / **コスト: 0円**

---

## 完成後の動作

1. 訪問者がサイトのお問い合わせフォームを送信
2. **Google スプレッドシートに記録**（受信日時・氏名・会社名・件名・本文など）
3. **管理者宛（info@laborlab.kowackey.com）に通知メール**が届く
4. **送信者宛に自動返信メール**（受付完了のお知らせ）が届く

---

## ステップ 1: Google スプレッドシートを作る

1. [Google スプレッドシート](https://sheets.new) で新しいスプレッドシートを作成
2. シート名（左下）を **`お問い合わせ`** に変更
3. ファイル名を **「サイト問い合わせ管理」** など分かりやすい名前に
4. URL の `https://docs.google.com/spreadsheets/d/` の **直後の長い文字列**（スプレッドシート ID）をコピー
   - 例: `https://docs.google.com/spreadsheets/d/1AbCdEfGhIjKlMnOpQrStUvWxYz1234567890/edit`
   - → ID は `1AbCdEfGhIjKlMnOpQrStUvWxYz1234567890`

---

## ステップ 2: GAS（Google Apps Script）を作る

1. 上のスプレッドシートを開いた状態で、**「拡張機能」→「Apps Script」** をクリック
2. 開いたエディタで `Code.gs` の中身を**全て削除**
3. リポジトリの `docs/contact-gas-script.gs` の中身を**全てコピーして貼り付け**
4. 以下の3箇所を書き換え:

   ```js
   const SPREADSHEET_ID = 'ここにスプレッドシートIDを貼り付け';
   const ADMIN_EMAIL = 'info@laborlab.kowackey.com';
   const SHARED_TOKEN = 'ここに共有トークンを貼り付け';
   ```

   - `SPREADSHEET_ID`: ステップ1でコピーしたID
   - `ADMIN_EMAIL`: 通知メールの宛先（変えなくてOK）
   - `SHARED_TOKEN`: **任意の長い文字列**（後で Vercel にも同じ値を設定する）
     - 推奨: 32文字以上のランダム英数字
     - 生成例: ターミナルで `openssl rand -hex 32` を実行
     - 例: `a3b9c2d8e1f4g7h0i2j5k8l1m4n7o0p3q6r9s2t5u8v1w4x7y0z3a6b9c2d5e8f1`

5. **Ctrl/⌘ + S** で保存（プロジェクト名を「サイト問い合わせ」などに変更しておくと管理しやすい）

---

## ステップ 3: 動作テスト（任意）

GAS エディタの上部メニューから **`debugTest`** 関数を選び **▶ 実行** をクリック。

1. 初回は **権限の承認画面**が出る
   - 「権限を確認」→ Google アカウント選択 → 「詳細」→「（プロジェクト名）に移動」→「許可」
   - スプレッドシート操作 + Gmail 送信の権限を承認
2. 実行完了後、スプレッドシートを開いて**1行追加されている**ことを確認
3. 管理者メール（info@…）に**テストメールが届いている**ことを確認

問題なければステップ4へ。

---

## ステップ 4: GAS を Web App として公開

1. GAS エディタ右上の **「デプロイ」→「新しいデプロイ」**
2. 歯車アイコン → **「ウェブアプリ」** を選択
3. 設定:
   - **説明**: `Contact Form Webhook v1`（任意）
   - **次のユーザーとして実行**: **自分（メールアドレス）**
   - **アクセスできるユーザー**: **全員**
4. **「デプロイ」** をクリック
5. 表示される **「ウェブアプリ URL」** をコピー
   - 例: `https://script.google.com/macros/s/AKfycby...../exec`

> ⚠️ この URL を Vercel の環境変数に設定するので、**メモしておく**。
> 紛失した場合は「デプロイの管理」から再表示できる。

---

## ステップ 5: Vercel に環境変数を設定

### Vercel ダッシュボードで設定する場合

1. Vercel のプロジェクトページ → **Settings → Environment Variables**
2. 以下の2つを追加:

   | Key | Value | Environment |
   |---|---|---|
   | `GAS_WEBHOOK_URL` | ステップ4でコピーしたURL | Production, Preview, Development |
   | `GAS_SHARED_TOKEN` | ステップ2で設定した SHARED_TOKEN と**同じ値** | Production, Preview, Development |

3. **「Save」** をクリック
4. プロジェクトを再デプロイ（自動 or 手動）

### Vercel CLI で設定する場合（任意）

```bash
vercel env add GAS_WEBHOOK_URL production
# 値を入力

vercel env add GAS_SHARED_TOKEN production
# 値を入力

# Preview / Development も同様に
```

---

## ステップ 6: ローカル開発環境用の設定（任意）

ローカル（`pnpm dev`）でフォーム送信のテストをしたい場合：

1. プロジェクトルートに `.env.local` を作成（`.env.example` をコピー）
2. 以下を追記:

   ```env
   GAS_WEBHOOK_URL=https://script.google.com/macros/s/AKfycby...../exec
   GAS_SHARED_TOKEN=ステップ2で設定したトークンと同じ値
   ```

3. `pnpm dev` を再起動

---

## ステップ 7: 本番環境で送信テスト

1. https://laborlab.kowackey.com/contact にアクセス
2. フォームに入力して送信
3. 確認ポイント:
   - [ ] サイトに「お問い合わせを受け付けました」画面が表示される
   - [ ] Google スプレッドシートに新しい行が追加される
   - [ ] 管理者メール（info@…）に通知メールが届く
   - [ ] 入力したメールアドレスに自動返信が届く

---

## 運用について

### 問い合わせ管理

- スプレッドシート右端の **「ステータス」列**（初期値「未対応」）を
  **対応済み・要返信** などに手動で書き換えていけば簡易 CRM として使える
- フィルタ・並び替え・色分けで見やすく整理できる
- 月別の件数を `=COUNTIF(...)` で集計するのも自由

### スプレッドシートが満杯になったら

シートの容量上限は 1,000万セル（実質無制限）なので、通常運用では気にしなくて良い。

### GAS スクリプトを変更したら

エディタで保存後、**「デプロイ」→「デプロイを管理」→ 編集（鉛筆アイコン）→ バージョン: 新バージョン**
を選んで再デプロイする。**URL は変わらない**ので環境変数の更新は不要。

> 補足: 「新しいデプロイ」を再度作ると URL が変わるので注意。基本は「デプロイを管理」から既存デプロイを更新する。

---

## トラブルシューティング

### フォーム送信時に「送信に失敗しました」と出る

- Vercel の環境変数 `GAS_WEBHOOK_URL` / `GAS_SHARED_TOKEN` が設定されているか確認
- GAS の `SHARED_TOKEN` と Vercel の `GAS_SHARED_TOKEN` が**完全一致**しているか確認
- Vercel のログ（Functions → Logs）で具体的なエラーを確認

### スプレッドシートには記録されるがメールが届かない

- 管理者メールアドレスのスペルミス
- Gmail の迷惑メールフォルダを確認
- GAS の Gmail 送信制限（1日100通）を超えていないか

### ボットからの空送信が多い

- `website` フィールドの honeypot で大半は防げる
- それでも増えるなら Cloudflare Turnstile や reCAPTCHA を追加で導入可能

---

## セキュリティ補足

- `SHARED_TOKEN` は **コードに直接書かない**（Vercel 環境変数 + GAS 内変数で管理）
- GAS の Web App URL は公開だが、トークン照合があるので**正しいトークンなしでは GAS が動作しない**
- スプレッドシートの共有設定は **「閲覧者」を最小限**に保つこと（デフォルトで本人のみ）
