/**
 * 様式集データ。
 *
 * 各書類は公式（日本年金機構・厚生労働省・ハローワーク等）の
 * ダウンロードページに直接リンクする。
 *
 * ※ 公式の URL は変更される可能性があるため、定期的にメンテすること。
 * ※ 内容の最終確認は小脇社労士事務所側で実施することを前提とする。
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
      '日本年金機構へ提出する、従業員の入退社・扶養家族・賞与・標準報酬等に関する各種届出書類です。',
    items: [
      {
        name: '被保険者資格取得届',
        description: '従業員を採用した際に提出する書類',
        href: 'https://www.nenkin.go.jp/service/kounen/kanyu-kigyo/shutoku/20141111.html',
        authority: '日本年金機構',
      },
      {
        name: '被保険者資格喪失届',
        description: '従業員が退職した際に提出する書類',
        href: 'https://www.nenkin.go.jp/service/kounen/kanyu-kigyo/shikaku/20141204.html',
        authority: '日本年金機構',
      },
      {
        name: '被扶養者(異動)届 / 国民年金第3号被保険者関係届',
        description: '配偶者・家族の扶養加入・異動の届出',
        href: 'https://www.nenkin.go.jp/service/kounen/kanyu-kigyo/hifuyousha/20140710.html',
        authority: '日本年金機構',
      },
      {
        name: '報酬月額算定基礎届',
        description: '毎年7月の定時決定で提出（4〜6月の報酬実績）',
        href: 'https://www.nenkin.go.jp/service/kounen/jigyonushi/hokenryo/20141204.html',
        authority: '日本年金機構',
      },
      {
        name: '報酬月額変更届',
        description: '昇給・降給により標準報酬月額に大きな変動があった場合',
        href: 'https://www.nenkin.go.jp/service/kounen/jigyonushi/hokenryo/20141204-02.html',
        authority: '日本年金機構',
      },
      {
        name: '被保険者賞与支払届',
        description: '賞与を支払った際に提出する書類',
        href: 'https://www.nenkin.go.jp/service/kounen/jigyonushi/hokenryo/20141204-03.html',
        authority: '日本年金機構',
      },
      {
        name: '産前産後休業取得者申出書',
        description: '産前産後休業中の保険料免除を申請する書類',
        href: 'https://www.nenkin.go.jp/service/kounen/hokenryo/menjo/20140327-02.html',
        authority: '日本年金機構',
      },
      {
        name: '育児休業等取得者申出書',
        description: '育児休業中の保険料免除を申請する書類',
        href: 'https://www.nenkin.go.jp/service/kounen/hokenryo/menjo/20140327.html',
        authority: '日本年金機構',
      },
    ],
  },
  {
    id: 'employment-insurance',
    category: '労働保険関係',
    subcategory: '雇用保険関係',
    description:
      'ハローワーク（公共職業安定所）へ提出する、雇用保険の加入・喪失・給付申請に関する書類です。',
    items: [
      {
        name: '雇用保険被保険者資格取得届',
        description: '従業員を採用した際に提出する書類',
        href: 'https://www.hellowork.mhlw.go.jp/insurance/insurance_procedure.html',
        authority: 'ハローワーク',
      },
      {
        name: '雇用保険被保険者資格喪失届',
        description: '従業員が退職した際に提出する書類',
        href: 'https://www.hellowork.mhlw.go.jp/insurance/insurance_procedure.html',
        authority: 'ハローワーク',
      },
      {
        name: '雇用保険被保険者離職証明書',
        description: '退職者の離職票発行のために必要な書類',
        href: 'https://www.hellowork.mhlw.go.jp/insurance/insurance_procedure.html',
        authority: 'ハローワーク',
      },
      {
        name: '育児休業給付受給資格確認票・(初回)育児休業給付金支給申請書',
        description: '育児休業給付金の申請書類',
        href: 'https://www.hellowork.mhlw.go.jp/insurance/insurance_continue.html',
        authority: 'ハローワーク',
      },
      {
        name: '介護休業給付金支給申請書',
        description: '介護休業給付金の申請書類',
        href: 'https://www.hellowork.mhlw.go.jp/insurance/insurance_continue.html',
        authority: 'ハローワーク',
      },
      {
        name: '高年齢雇用継続給付支給申請書',
        description: '60歳以上の継続雇用者向けの給付申請',
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
      '労働基準監督署・労働局へ提出する、労災保険の成立・年度更新等に関する書類です。',
    items: [
      {
        name: '労働保険関係成立届',
        description: '事業を開始した際に提出する書類',
        href: 'https://www.mhlw.go.jp/bunya/roudoukijun/roudouhokenkanyuu/index.html',
        authority: '労働基準監督署',
      },
      {
        name: '労働保険概算・確定保険料申告書',
        description: '年度更新（毎年6/1〜7/10）で提出する書類',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/roudouhoken/nendokoushin.html',
        authority: '労働基準監督署',
      },
      {
        name: '療養補償給付請求書（業務災害用）',
        description: '労災事故の療養給付申請',
        href: 'https://www.mhlw.go.jp/bunya/roudoukijun/rousaihoken06/index.html',
        authority: '労働基準監督署',
      },
      {
        name: '休業補償給付請求書（業務災害用）',
        description: '労災事故による休業補償の申請',
        href: 'https://www.mhlw.go.jp/bunya/roudoukijun/rousaihoken06/index.html',
        authority: '労働基準監督署',
      },
    ],
  },
  {
    id: 'subsidies',
    category: '助成金関係',
    subcategory: '雇用関係助成金',
    description:
      '厚生労働省が所管する主要な雇用関係助成金の申請書類・案内ページです。要件・支給額は年度ごとに変更されるため、最新の公式情報をご確認ください。',
    items: [
      {
        name: 'キャリアアップ助成金',
        description: '正社員化コース、賃金規定改定コース等',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000118933.html',
        authority: '厚生労働省',
      },
      {
        name: '業務改善助成金',
        description: '中小企業の生産性向上と賃金引上げを支援',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/zigyonushi/shienjigyou/03.html',
        authority: '厚生労働省',
      },
      {
        name: '両立支援等助成金',
        description: '育休・介護・不妊治療等との両立支援',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyoukintou/jigyonushi/index.html',
        authority: '厚生労働省',
      },
      {
        name: '人材開発支援助成金',
        description: '従業員の職業訓練・スキルアップ支援',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/jinzaikaihatsu/jyoseikin_index.html',
        authority: '厚生労働省',
      },
      {
        name: '雇用調整助成金',
        description: '景気変動・経済上の事情による休業時の支援',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/pageL07.html',
        authority: '厚生労働省',
      },
      {
        name: '特定求職者雇用開発助成金',
        description: '高齢者・障害者・就職困難者等の雇入れ支援',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/tokutei_konnan.html',
        authority: '厚生労働省',
      },
      {
        name: 'トライアル雇用助成金',
        description: '試行雇用を通じた就職困難者の常用雇用支援',
        href: 'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/trial_koyou.html',
        authority: '厚生労働省',
      },
    ],
  },
];
