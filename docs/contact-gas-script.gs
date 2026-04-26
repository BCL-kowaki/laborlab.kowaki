/**
 * 小脇社会保険労務士事務所 — お問い合わせフォーム受信用 GAS スクリプト
 *
 * 機能:
 *   1. Next.js の /api/contact から POST されたデータを受信
 *   2. スプレッドシートに 1 行追記
 *   3. 管理者（info@laborlab.kowackey.com）へ通知メール送信
 *   4. ユーザーへ自動返信メールを送信
 *
 * セットアップ手順は docs/contact-form-setup.md を参照。
 */

/** ====== 設定 ====== */

// スプレッドシートの ID（URL の /d/XXXXX/edit の XXXXX 部分）
const SPREADSHEET_ID = 'ここにスプレッドシートIDを貼り付け';

// 書き込み先シート名
const SHEET_NAME = 'お問い合わせ';

// 管理者通知の宛先メールアドレス
const ADMIN_EMAIL = 'info@laborlab.kowackey.com';

// 管理者通知メールの差出人名
const ADMIN_FROM_NAME = '小脇社会保険労務士事務所 サイト';

// ユーザー自動返信の差出人名
const REPLY_FROM_NAME = '小脇社会保険労務士事務所';

// 共有トークン（Next.js 側の GAS_SHARED_TOKEN と一致させる）
// 任意の長い文字列を生成して両方に設定すること
const SHARED_TOKEN = 'ここに共有トークンを貼り付け';

/** ====== Web App エントリポイント ====== */

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ ok: false, error: 'no_payload' }, 400);
    }

    const data = JSON.parse(e.postData.contents);

    // トークン照合
    if (!SHARED_TOKEN || data.token !== SHARED_TOKEN) {
      return jsonResponse({ ok: false, error: 'unauthorized' }, 401);
    }

    // 必須項目チェック
    const required = ['name', 'company', 'employees', 'email', 'subject', 'message'];
    for (const key of required) {
      if (!data[key]) {
        return jsonResponse({ ok: false, error: 'missing_' + key }, 400);
      }
    }

    // 1. スプレッドシートに記録
    appendToSheet(data);

    // 2. 管理者通知メール
    sendAdminMail(data);

    // 3. ユーザー自動返信
    sendAutoReply(data);

    return jsonResponse({ ok: true });
  } catch (err) {
    Logger.log('doPost error: ' + err);
    return jsonResponse({ ok: false, error: String(err) }, 500);
  }
}

/** ====== ヘルパー関数 ====== */

function jsonResponse(obj, status) {
  // GAS の Web App は HTTP ステータスコードの直接指定ができないため、
  // クライアント側は body の ok で判定する。
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function appendToSheet(data) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      '受信日時',
      'お名前',
      '会社名',
      '従業員数',
      'メール',
      '電話',
      '件名',
      'お問い合わせ内容',
      'ステータス',
    ]);
  }
  sheet.appendRow([
    new Date(data.receivedAt || Date.now()),
    data.name,
    data.company,
    data.employees,
    data.email,
    data.phone || '',
    data.subject,
    data.message,
    '未対応',
  ]);
}

function sendAdminMail(data) {
  const subject = '[サイト問い合わせ] ' + data.subject + ' / ' + data.company;
  const body =
    'サイトからのお問い合わせを受け付けました。\n\n' +
    '──────────────────────────────\n' +
    '【お名前】 ' + data.name + '\n' +
    '【会社名】 ' + data.company + '\n' +
    '【従業員数】 ' + data.employees + '\n' +
    '【メール】 ' + data.email + '\n' +
    '【電話】 ' + (data.phone || '(未入力)') + '\n' +
    '【件名】 ' + data.subject + '\n' +
    '──────────────────────────────\n' +
    '【お問い合わせ内容】\n' +
    data.message + '\n' +
    '──────────────────────────────\n\n' +
    '受信日時: ' + (data.receivedAt || new Date().toISOString()) + '\n' +
    '\n' +
    'スプレッドシート: ' +
    'https://docs.google.com/spreadsheets/d/' + SPREADSHEET_ID + '/edit\n';

  GmailApp.sendEmail(ADMIN_EMAIL, subject, body, {
    name: ADMIN_FROM_NAME,
    replyTo: data.email,
  });
}

function sendAutoReply(data) {
  const subject = '【小脇社会保険労務士事務所】お問い合わせを受け付けました';
  const body =
    data.name + ' 様\n\n' +
    'この度は、小脇社会保険労務士事務所にお問い合わせいただき、\n' +
    '誠にありがとうございます。\n\n' +
    '以下の内容でお問い合わせを承りました。\n' +
    '内容を確認のうえ、1営業日以内にご返信いたします。\n' +
    'しばらくお待ちくださいますようお願い申し上げます。\n\n' +
    '──────────────────────────────\n' +
    '【お名前】 ' + data.name + '\n' +
    '【会社名】 ' + data.company + '\n' +
    '【従業員数】 ' + data.employees + '\n' +
    '【件名】 ' + data.subject + '\n' +
    '──────────────────────────────\n' +
    '【お問い合わせ内容】\n' +
    data.message + '\n' +
    '──────────────────────────────\n\n' +
    'なお、本メールは自動返信です。\n' +
    'このメールに直接返信いただいてもお返事できかねますので、\n' +
    'ご質問・ご要望がありましたら別途ご連絡ください。\n\n' +
    '────────────────\n' +
    '小脇社会保険労務士事務所\n' +
    '代表 社会保険労務士 小脇 敏典\n' +
    '〒[郵便番号] 鹿児島県鹿児島市西田２丁目16-15-203\n' +
    'TEL: 090-3798-5423\n' +
    'MAIL: ' + ADMIN_EMAIL + '\n' +
    'URL: https://laborlab.kowackey.com\n' +
    '────────────────\n';

  GmailApp.sendEmail(data.email, subject, body, {
    name: REPLY_FROM_NAME,
    replyTo: ADMIN_EMAIL,
  });
}

/** ====== デバッグ用 ====== */

// GAS エディタから手動実行して動作確認するための関数
function debugTest() {
  const fakePayload = {
    token: SHARED_TOKEN,
    receivedAt: new Date().toISOString(),
    name: 'テスト 太郎',
    company: 'テスト株式会社',
    employees: '11〜30名',
    email: 'test@example.com',
    phone: '090-0000-0000',
    subject: '顧問契約について',
    message: 'これはテスト送信です。\nスプレッドシートとメールが届くか確認します。',
  };
  appendToSheet(fakePayload);
  sendAdminMail(fakePayload);
  // 自動返信は test@example.com には飛ばないので注意
  Logger.log('debugTest 完了');
}
