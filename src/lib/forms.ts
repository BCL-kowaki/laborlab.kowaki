/**
 * 様式集データ。
 *
 * 各書類は公式（日本年金機構・厚生労働省・ハローワーク等）の
 * ダウンロードページに直接リンクする。
 *
 * 方針:
 * - 詳細な単一書類ページではなく、安定した「主要様式一覧」「ダウンロードコーナー」へ誘導
 * - 各カテゴリで信頼できる上位ページ（リンク切れリスクが低い）を選定
 *
 * ※ 公式の URL は変更される可能性があるため、定期的にメンテすること。
 * ※ 内容の最終確認は小脇社労士事務所側で実施することを前提とする。
 *
 * 最終確認: 2026-04
 */

export interface FormItem {
  /** 書類名 */
  name: string;
  /** 補足説明（短文） */
  description?: string;
  /** 公式の様式ダウンロードページ URL */
  href: string;
  /** 提出先ラベル（任意） */
  authority?: string;
}

export interface FormCategory {
  /** カテゴリ ID（アコーディオン value 用） */
  id: string;
  /** 大カテゴリ名 */
  category: string;
  /** サブカテゴリ名 */
  subcategory: string;
  /** 概要説明 */
  description?: string;
  /** 書類リスト */
  items: FormItem[];
}

export const FORMS: FormCategory[] = [
  {
    id: 'health-pension',
    category: '社会保険関係',
    subcategory: '健康保険・厚生年金保険',
    description:
      '日本年金機構へ提出する、従業員の入退社・扶養家族・賞与・標準報酬等に関する各種届出書類です。下記リンク先で各様式（PDF / Excel）をダウンロードできます。',
    items: [
      {
        name: '健康保険・厚生年金保険 主な届書様式の一覧',
        description:
          '資格取得届、資格喪失届、被扶養者異動届、算定基礎届、月額変更届、賞与支払届などの主要様式をまとめてご案内',
        href: 'https://www.nenkin.go.jp/shinsei/kounen/tekiyo/shuyotodoke.html',
        authority: '日本年金機構',
      },
      {
        name: '被保険者資格取得届（従業員採用時）',
        description: '新規に従業員を雇い入れた際の手続き',
        href: 'https://www.nenkin.go.jp/shinsei/kounen/tekiyo/hihokensha/20140718.html',
        authority: '日本年金機構',
      },
      {
        name: '報酬月額に関する届書（算定基礎届・月額変更届）',
        description: '定時決定（毎年7月）および随時改定の手続き',
        href: 'https://www.nenkin.go.jp/service/kounen/hokenryo/hoshu/20140527.html',
        authority: '日本年金機構',
      },
      {
        name: '産前産後休業・育児休業に関する届書',
        description: '休業中の保険料免除を受けるための申出書類',
        href: 'https://www.nenkin.go.jp/shinsei/kounen/tekiyo/menjo/20140403-01.html',
        authority: '日本年金機構',
      },
      {
        name: '健康保険・厚生年金保険 申請・届出様式（総合）',
        description: '上記以外も含めた全申請様式の総合インデックス',
        href: 'https://www.nenkin.go.jp/shinsei/kounen/index.html',
        authority: '日本年金機構',
      },
      {
        name: '届書作成プログラム（電子申請）',
        description: '無料配布のソフトで届書を作成・電子申請が可能',
        href: 'https://www.nenkin.go.jp/denshibenri/program/program.html',
        authority: '日本年金機構',
      },
    ],
  },
  {
    id: 'employment-insurance',
    category: '労働保険関係',
    subcategory: '雇用保険関係',
    description:
      'ハローワーク（公共職業安定所）へ提出する、雇用保険の加入・喪失・給付申請に関する書類です。電子申請も可能です。',
    items: [
      {
        name: '雇用保険手続き（帳票一覧）',
        description:
          '資格取得届・資格喪失届・離職証明書・育児休業給付・介護休業給付など、全帳票のダウンロード',
        href: 'https://hoken.hellowork.mhlw.go.jp/static/ichiran.html',
        authority: 'ハローワーク（雇用保険手続支援）',
      },
      {
        name: '事業主の方の雇用保険関係手続き案内',
        description: '採用・退職・各種給付の概要と申請手順',
        href: 'https://www.hellowork.mhlw.go.jp/insurance/insurance_procedure.html',
        authority: 'ハローワーク',
      },
      {
        name: '雇用保険給付関係の手続き案内',
        description: '育児休業給付・介護休業給付・高年齢雇用継続給付など',
        href: 'https://www.hellowork.mhlw.go.jp/insurance/insurance_continue.html',
        authority: 'ハローワーク',
      },
    ],
  },
  {
    id: 'labor-insurance',
    category: '労働保険関係',
    subcategory: '労災保険・労働保険料',
    description:
      '労働基準監督署・労働局へ提出する、労災保険給付および労働保険の成立・年度更新に関する書類です。',
    items: [
      {
        name: '労働保険適用・徴収関係 主要様式',
        description:
          '保険関係成立届、概算・確定保険料申告書、年度更新関係書類など',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/roudouhoken.html',
        authority: '厚生労働省',
      },
      {
        name: '労災保険給付関係 主要様式',
        description:
          '療養補償給付請求書、休業補償給付請求書、障害補償給付請求書など',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/rousaihoken.html',
        authority: '厚生労働省',
      },
      {
        name: '労災保険制度の概要・給付請求手続',
        description: '労働災害発生時の手続き全般',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/rousai/gaiyou.html',
        authority: '厚生労働省',
      },
      {
        name: '労働基準関係 主要様式（36協定・就業規則届出等）',
        description:
          '36協定届、就業規則変更届、年次有給休暇管理簿などの様式',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/format_index.html',
        authority: '厚生労働省',
      },
    ],
  },
  {
    id: 'subsidies',
    category: '助成金関係',
    subcategory: '雇用関係助成金',
    description:
      '厚生労働省が所管する雇用関係助成金の案内ページです。要件・支給額は年度ごとに改定されるため、申請前に最新の公式情報をご確認ください。',
    items: [
      {
        name: '雇用関係助成金一覧（事業主向け総合案内）',
        description: '各助成金の概要・支給要件・申請様式へのリンク集',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/index_00057.html',
        authority: '厚生労働省',
      },
      {
        name: 'キャリアアップ助成金',
        description:
          '正社員化コース、賃金規定改定コース等。非正規労働者のキャリアアップ支援',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/part_haken/jigyounushi/career.html',
        authority: '厚生労働省',
      },
      {
        name: '人材開発支援助成金',
        description: '従業員の職業訓練・スキルアップ支援',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/d01-1.html',
        authority: '厚生労働省',
      },
      {
        name: '雇用調整助成金',
        description: '景気変動・経済上の事情による休業時の支援',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/pageL07.html',
        authority: '厚生労働省',
      },
      {
        name: 'トライアル雇用助成金（一般トライアルコース）',
        description: '試行雇用を通じた就職困難者の常用雇用支援',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/newpage_16286.html',
        authority: '厚生労働省',
      },
      {
        name: '両立支援等助成金（仕事と家庭の両立支援）',
        description: '育休・介護・不妊治療等との両立支援',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyoukintou/jigyonushi/index.html',
        authority: '厚生労働省',
      },
      {
        name: '業務改善助成金（働き方改革特設サイト）',
        description: '中小企業の生産性向上と賃金引上げを支援',
        href: 'https://hatarakikatakaikaku.mhlw.go.jp/subsidy.html',
        authority: '厚生労働省',
      },
      {
        name: '特定求職者雇用開発助成金（対象者別一覧）',
        description: '高齢者・障害者・就職困難者等の雇入れ支援',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/index_00058.html',
        authority: '厚生労働省',
      },
    ],
  },
];
