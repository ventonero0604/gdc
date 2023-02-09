import { defineConfig } from 'vite';

import { resolve } from 'path';

//handlebarsプラグインimport
import handlebars from 'vite-plugin-handlebars';

//HTML上で出し分けたい各ページごとの情報
const pageData = {
  '/index.html': {
    title:
      '土壌の生物性分析―【世界初】土壌微生物多様性・活性値｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      'よい土って何だろう？DGCテクノロジーは土壌の生物性について、より迅速に、安価に測定する科学的な分析技術です。ＢＩＯＴＲＥＸは、豊かな土の新指標。地球環境の保全や持続可能な未来（ＳＤＧｓ）につながります。'
  },
  '/biodiversity/index.html': {
    title:
      '土壌分析サービス―土壌微生物多様性・活性値とは？｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      '土壌微生物多様性・活性値（ＢＩＯＴＲＥＸ）はＤＧＣテクノロジーが開発した、世界で唯一の評価法です。さぁ、地球・環境にやさしい持続的な農業を始めましょう。国や県の研究機関が約20年にわたり研究した成果をもとに、土壌の生物性を迅速に、安価に測定します。'
  },
  '/biodiversity/price.html': {
    title:
      '土壌分析の種類・料金―【世界初】土壌微生物多様性・活性値｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      '土壌分析多様性・活性値分析（生物性分析）は、通常分析および簡易分析の二つ方法で行います。土壌の化学性分析についても承ります。ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。土壌の生物性を迅速に、安価に測定できます。'
  },
  '/biodiversity/order.html': {
    title:
      'お申し込みの流れ―【世界初】土壌微生物多様性・活性値｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      'お申込みの流れについてご説明いたします。お申込み用紙をダウンロードしてください。ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。土壌の生物性を迅速に、安価に測定できます。'
  },
  '/biodiversity/soil.html': {
    title:
      'We love Farmer－初めての方向けサービス概要｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      'ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。あなたの仕事がこれからも多くの人々を笑顔にするために。あなたの土づくりがいつまでも地球を元気にするために。'
  },
  '/soilproject/index.html': {
    title:
      'SOIL PROJECT―微生物が元気な畑はなぜおいしいんだろう？｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      '本当においしいものは、地球にも体にも優しい。土は命を育むもの。よい土かどうかは、土に住んでいる生き物に聞いてみるのが一番です。「豊かな土」で育った農産物には、その印としてSOILマークを表示しています。'
  },
  '/about/index.html': {
    title: '株式会社DGCテクノロジーについて｜会社概要',
    description:
      '有限会社ディージーシー総合研究所は、大学や研究機関で研究された高度な研究成果を社会に還元するために、2000年に複雑系研究者らによって発足されました。ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。土壌の生物性を迅速に、安価に測定できます。'
  },
  '/contact/index.html': {
    title: 'お申込み・お問合わせ｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      'お申込みに関するお問合わせ、分析内容に関するお問合わせ、分析のお申込、その他お問い合わせは、こちらから。ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。土壌の生物性を迅速に、安価に測定できます。'
  },
  '/qa/index.html': {
    title: 'よくあるご質問｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      'よくあるご質問は、こちらから。ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。土壌の生物性を迅速に、安価に測定できます。'
  },
  '/biodiversity/case/index.html': {
    title: '農の匠の土づくり活用事例｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      '自然と対話しながら、たゆまぬ努力で作り上げられた土。そんな匠の技の結晶ともいえる土には、多様な微生物が元気に活躍しています。ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。土壌の生物性を迅速に、安価に測定できます。'
  },
  '/biodiversity/case/case01.html': {
    title:
      '新潟県 大原伊一様｜農の匠の土づくり活用事例｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      '土壌微生物多様性・活性値分析１００万超え！農家の「慌てず徐々に」の土作り。自然と対話しながら、たゆまぬ努力で作り上げられた土。そんな匠の技の結晶ともいえる土には、多様な微生物が元気に活躍しています。ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。土壌の生物性を迅速に、安価に測定できます。'
  },
  '/biodiversity/case/case02.html': {
    title:
      '北海道 当麻グリーンライフ瀬川守様｜農の匠の土づくり活用事例｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      'イトミミズが豊富な水田で、驚きの土壌微生物多様性・活性値分析２００万超えを達成！自然と対話しながら、たゆまぬ努力で作り上げられた土。そんな匠の技の結晶ともいえる土には、多様な微生物が元気に活躍しています。ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。土壌の生物性を迅速に、安価に測定できます。'
  },
  '/biodiversity/case/case03.html': {
    title:
      '埼玉県 金子美登様｜農の匠の土づくり活用事例｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      '有機農業のカリスマが納得する、土壌微生物多様性・活性値分析。自然と対話しながら、たゆまぬ努力で作り上げられた土。そんな匠の技の結晶ともいえる土には、多様な微生物が元気に活躍しています。ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。土壌の生物性を迅速に、安価に測定できます。'
  },
  '/biodiversity/case/case04.html': {
    title:
      '高知県 土佐自然塾山下一穂様｜農の匠の土づくり活用事例｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      '「土佐自然塾」の塾長も絶賛する、有機農業の新指標。自然と対話しながら、たゆまぬ努力で作り上げられた土。そんな匠の技の結晶ともいえる土には、多様な微生物が元気に活躍しています。ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。土壌の生物性を迅速に、安価に測定できます。'
  },
  '/biodiversity/case/case05.html': {
    title:
      '福井県 中川清様｜農の匠の土づくり活用事例｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      '消費者との信頼関係で進めてきた有機農業を裏付ける、高い土壌微生物多様性・活性値。自然と対話しながら、たゆまぬ努力で作り上げられた土。そんな匠の技の結晶ともいえる土には、多様な微生物が元気に活躍しています。ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。土壌の生物性を迅速に、安価に測定できます。'
  },
  '/biodiversity/case/case06.html': {
    title:
      '岐阜県 ゆうきハートネット 前会長中島克己様｜農の匠の土づくり活用事例｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      'トロトロ層が雑草を抑え、省力有機稲作を実現。自然と対話しながら、たゆまぬ努力で作り上げられた土。そんな匠の技の結晶ともいえる土には、多様な微生物が元気に活躍しています。ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。土壌の生物性を迅速に、安価に測定できます。'
  },
  '/biodiversity/case/case07.html': {
    title:
      '宮城県 佐々木陽悦様｜農の匠の土づくり活用事例｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      '土壌微生物多様性・活性値分析を継続的に行い営農に活用！自然と対話しながら、たゆまぬ努力で作り上げられた土。そんな匠の技の結晶ともいえる土には、多様な微生物が元気に活躍しています。ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。土壌の生物性を迅速に、安価に測定できます。'
  },
  '/biodiversity/case/case08.html': {
    title:
      '北海道 株式会社アレフ 橋部佳紀様｜農の匠の土づくり活用事例｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      '土壌微生物多様性・活性値分析を「生きもの豊かな田んぼのお米」の指標として活用。自然と対話しながら、たゆまぬ努力で作り上げられた土。そんな匠の技の結晶ともいえる土には、多様な微生物が元気に活躍しています。ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。土壌の生物性を迅速に、安価に測定できます。'
  },
  '/biodiversity/case/case09.html': {
    title:
      '北海道 宇野剛司様｜農の匠の土づくり活用事例｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      '「人にも牛にも優しい」酪農の正しさを実証できた土壌微生物多様性・活性値分析。自然と対話しながら、たゆまぬ努力で作り上げられた土。そんな匠の技の結晶ともいえる土には、多様な微生物が元気に活躍しています。ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。土壌の生物性を迅速に、安価に測定できます。'
  },
  '/biodiversity/case/case10.html': {
    title:
      '福井県 越前しやらま活性化協議会 稲葉洋様｜農の匠の土づくり活用事例｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      '生き物と一緒にお米を育む。自然と対話しながら、たゆまぬ努力で作り上げられた土。そんな匠の技の結晶ともいえる土には、多様な微生物が元気に活躍しています。ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。土壌の生物性を迅速に、安価に測定できます。'
  },
  '/biodiversity/case/case11.html': {
    title:
      '茨城県 つづく農園代表 都竹大輔様｜農の匠の土づくり活用事例｜DGCテクノロジー「微生物の力で世界の土を豊かに」',
    description:
      '大自然の中で、こだわりのいちご作りを裏付けた土壌微生物多様性・活性値分析。自然と対話しながら、たゆまぬ努力で作り上げられた土。そんな匠の技の結晶ともいえる土には、多様な微生物が元気に活躍しています。ＤＧＣテクノロジーは土壌微生物の多様性・活性値（ＢＩＯＴＲＥＸ）を測定する会社です。土壌の生物性を迅速に、安価に測定できます。'
  }
};

const root = 'src';

export default defineConfig({
  server: {
    host: true //IPアドレスを有効化
  },
  // base: './',
  root: root, //開発ディレクトリ設定
  build: {
    outDir: '../dist', //出力場所の指定
    rollupOptions: {
      //ファイル出力設定
      output: {
        assetFileNames: assetInfo => {
          let extType = assetInfo.name.split('.')[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          }
          //ビルド時のCSS名を明記してコントロールする
          if (extType === 'css') {
            return `assets/css/style.css`;
          }
          return `assets/${extType}/[name][extname]`;
        },
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js'
      },
      input: {
        index: resolve(root, 'index.html'),
        biodiversity: resolve(root, 'biodiversity/index.html'),
        price: resolve(root, 'biodiversity/price.html'),
        order: resolve(root, 'biodiversity/order.html'),
        soil: resolve(root, 'biodiversity/soil.html'),
        soilproject: resolve(root, 'soilproject/index.html'),
        about: resolve(root, 'about/index.html'),
        contact: resolve(root, 'contact/index.html'),
        qa: resolve(root, 'qa/index.html'),
        case: resolve(root, 'biodiversity/case/index.html'),
        case01: resolve(root, 'biodiversity/case/case01.html'),
        case02: resolve(root, 'biodiversity/case/case02.html'),
        case03: resolve(root, 'biodiversity/case/case03.html'),
        case04: resolve(root, 'biodiversity/case/case04.html'),
        case05: resolve(root, 'biodiversity/case/case05.html'),
        case06: resolve(root, 'biodiversity/case/case06.html'),
        case07: resolve(root, 'biodiversity/case/case07.html'),
        case08: resolve(root, 'biodiversity/case/case08.html'),
        case09: resolve(root, 'biodiversity/case/case09.html'),
        case10: resolve(root, 'biodiversity/case/case10.html'),
        case11: resolve(root, 'biodiversity/case/case11.html')
      }
    }
  },
  /*
    プラグインの設定を追加
  */
  plugins: [
    handlebars({
      //コンポーネントの格納ディレクトリを指定
      partialDirectory: resolve(__dirname, root, 'components'),
      //各ページ情報の読み込み
      context(pagePath) {
        return pageData[pagePath];
      }
    })
  ]
});
