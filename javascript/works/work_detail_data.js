const workDetailsData = {
    skinCare: {
        title: "LP&nbsp;&nbsp;&nbsp;スキンケアブランド",
        url: "https://a-morifuji.github.io/skincare/",
        items: [
            {
                subtitle: "",
                type: "LP",
                client: "自主制作",
                img: "/img/works/LP/skincare/skincare_frame.webp",
                info: {
                    overview: "架空のスキンケアブランドにおけるLP制作。",
                    range: "デザイン、コーディング",
                    time: "30時間",
                    date: "2026年08月",
                    tools: "Figma、Illustrator、Photoshop、VS Code(HTML、CSS、JavaScript)、Gemini（画像生成）",
                    persona: "30代女性（一人暮らし・会社員）。<br>仕事が忙しく、自分の肌に合ったスキンケア商品を模索している。",
                    purpose: "ブランドの魅力を訴求し、商品購入につなげる。",
                    point: "オーガニックブランドの世界観を表現するため、メインカラーにアースカラー（グリーン・ブラウン）を採用。また、余白を十分に確保することで、ブランドの持つ「ゆとり」や「上品さ」を感じさせるデザインに仕上げた。",
                    improvement: "セクションごとの背景色にメリハリをつけ、コンテンツの区切りと視認性を向上させる。"
                },
                pages: [
                    { title: "PC", img: "/img/works/LP/skincare/skincare_full_pc.webp" },
                    { title: "SP", img: "/img/works/LP/skincare/skincare_full_sp.webp" }
                ]
            }
        ]
    },

    portfolio: {
        title: "Webサイト&nbsp;&nbsp;&nbsp;ポートフォリオ",
        items: [
            {
                subtitle: "",
                type: "Web",
                client: "自主制作",
                img: "/img/works/Web/portfolio/portfolio_pcSp_frame.webp",
                info: {
                    overview: "自身の制作実績やスキル、制作に対する思考プロセスを伝えるためのポートフォリオサイト制作。",
                    range: "デザイン、コーディング",
                    time: "30時間",
                    date: "2026年09月",
                    tools: "Figma、Illustrator、Photoshop、VS Code（HTML、CSS、JavaScript）",
                    persona: "Web制作会社の採用担当者・現場ディレクター（30〜40代）。「見た目が綺麗なサイト」以上に「実務で活用できるか」「コードは丁寧か」「デザインに根拠があるか」を知りたい。",
                    purpose: "自身の経歴やスキル、制作対応力から採用担当者に実務での活躍イメージを持ってもらう。",
                    point: "情報が直感的に伝わるよう、余白を活かしたシンプルなレイアウトを採用。画面上部にヘッダーを固定して回遊性を高めるとともに、目的別のカテゴリ切り替え機能を実装し、アクセスできるよう設計。JavaScriptを用いて作品データをデータ化し、拡張性を確保。",
                    improvement: "制作物一覧をカード型のグリッドレイアウトに統一し、視認性を上げる。"
                },
                pages: [
                    { title: "PC", img: "/img/works/Web/portfolio/portfolio_pc_top.webp" },
                    { title: "SP", img: "/img/works/Web/portfolio/portfolio_sp_top.webp" }
                ]
            }
        ]
    },

    hamburger: {
        title: "Webサイト&nbsp;&nbsp;&nbsp;ハンバーガーショップ",
        url: "https://a-morifuji.github.io/hamburger-site/",
        items: [
            {
                subtitle: "",
                type: "Web",
                client: "スクール課題",
                img: "/img/works/Web/hamburger/hamburger_frame.webp",
                info: {
                    overview: "架空のハンバーガーショップにおけるWebサイト制作。",
                    range: "コーディング",
                    time: "18時間",
                    date: "2026年07月",
                    tools: "Figma、VS Code(HTML、CSS)",
                    persona: "20代男性（社会人・外食好き・スマホ利用メイン）。<br>SNSやWebサイトから飲食店の情報を日常的に収集している。",
                    purpose: "豊富なメニューや店舗のこだわりを視覚的に伝え、来店・利用意欲を高める。",
                    point: "コンテンツ幅を共通のコンテナクラス（wrapper）で一括管理し、画面サイズに依存しない安定したレイアウトを実現。また、フォントサイズにはrem、固定余白にはpxを使用するなど、適切なCSS単位の使い分けにより保守性と視認性を両立した。",
                    improvement: "店舗のポップな雰囲気に合わせ、ホバー時にCSSアニメーションを実装。"
                },
                pages: [
                    { title: "PC", img: "/img/works/Web/hamburger/hamburger_full_pc.webp" },
                    { title: "SP", img: "/img/works/Web/hamburger/hamburger_full_sp.webp" }
                ]
            }
        ]
    },

    iceCream: {
        title: "Webサイト&nbsp;&nbsp;&nbsp;アイスクリームショップ",
        url: "https://a-morifuji.github.io/iceCream-site/",
        items: [
            {
                subtitle: "",
                type: "Web",
                client: "スクール課題",
                img: "/img/works/Web/iceCream/ice_pc_frame.webp",
                info: {
                    overview: "架空のアイスクリームショップにおけるWebサイト制作。",
                    range: "コーディング",
                    time: "18時間",
                    date: "2026年07月",
                    tools: "Figma、VS Code(HTML、CSS)",
                    persona: "10代女性（学生 / スイーツ好き）。<br>SNSを中心とした情報収集が日常化しており、友人と過ごすカフェ・お店を探している。",
                    purpose: "商品のラインナップをわかりやすく提示し、来店意欲を促す。",
                    point: "ナビゲーションとフッターに心地よいホバーアニメーションを実装し、操作時の視認性を向上。また、CSS Gridを活用して画像サイズ(縦横幅)を柔軟に制御し、レスポンシブ時にも崩れない堅牢なレイアウトを構築しました。グリッドレイアウトでは、画像ごとに縦幅、横幅を指定し、崩れないようにした。",
                    improvement: "スマートフォン版のデザインカンプを作成し、レスポンシブ対応。"
                },
                pages: [
                    { title: "PC", img: "/img/works/Web/iceCream/ice_full_pc.webp" }
                ]
            }
        ]
    },

    summerCourses: {
        title: "SNSバナー広告&nbsp;&nbsp;&nbsp;塾の夏期講習",
        items: [
            {
                subtitle: "男子生徒",
                type: "Graphic",
                isBanner: true,
                client: "スクール課題",
                img: "/img/works/Graphic/summerCourses/summer_m.webp",
                info: {
                    overview: "架空の学習塾における夏期講習プロモーション用バナー制作。",
                    range: "デザイン",
                    time: "9時間",
                    date: "2026年06月",
                    tools: "Illustrator、Photoshop",
                    persona: "高校1〜2年生の男子生徒。苦手科目があり、大学入試までに克服したいと考えている。",
                    purpose: "夏期講習への関心を惹きつけ、バナーのクリック（申込ページへの誘導）を促す。",
                    point: "高校生の目を惹くよう「夏期講習」の文字を強調し、青をベースとした配色で夏らしさと信頼感を表現。背景と文字のコントラストを高め、一目で情報が伝わる視認性を意識した。",
                    improvement: "「お申込みはこちら」ボタンの立体感や視認性を高め、よりクリックを促すデザインへ改修。"
                }
            },
            {
                subtitle: "女子生徒",
                type: "Graphic",
                isBanner: true,
                client: "スクール課題",
                img: "/img/works/Graphic/summerCourses/summer_w.webp",
                info: {
                    overview: "架空の学習塾における夏期講習プロモーション用バナー制作。",
                    range: "デザイン",
                    time: "9時間",
                    date: "2026年06月",
                    tools: "Illustrator、Photoshop",
                    persona: "高校生の娘を持つ40代女性（主婦）。<br>娘の部活と勉学の両立や、勉強時間の確保に悩んでいる。",
                    purpose: "夏期講習への関心を惹きつけ、バナーのクリック（Webサイトへ誘導）を促す。",
                    point: "明るく親しみやすい印象を与えるため、女子生徒の笑顔の写真とオレンジ×ブルーの鮮やかな配色を採用。青空を背景に「夏らしさ」と「爽やかさ」を演出しつつ、「無料体験」のあしらい（吹き出し）で訴求力を高めた。",
                    improvement: "「無料体験受付中」の図形の形状や配色を見直し、クリック率の向上を図る。"
                }
            }
        ]
    },

    tomatoJuice: {
        title: "SNSバナー広告&nbsp;&nbsp;&nbsp;トマトジュース",
        items: [
            {
                subtitle: "主婦向け",
                type: "Graphic",
                isBanner: true,
                client: "スクール課題",
                img: "/img/works/Graphic/tomatoJuice/banner-tomato02.webp",
                info: {
                    overview: "架空の食品企業におけるトマトジュースのプロモーション用バナー制作。",
                    time: "9時間",
                    date: "2026年06月",
                    tools: "Illustrator、Photoshop",
                    persona: "50〜60代女性（主婦）。一人暮らしをする子どもがおり、健康を気遣った仕送り品や贈り物を探している。",
                    purpose: "商品の魅力から興味を惹きつけ、詳細ページへの遷移（クリック）を促す。",
                    point: "商品名「赤の習慣」の「赤」のみ色を変更して視線を集め、ジャンプ率を高めたキャッチコピーで可読性を向上。背景のトマト写真を程よくぼかすことで手前のトマトジュース缶を強調し、瑞々しさと品質の高さをアピールした。",
                    improvement: "キャッチコピーのフォントを変更し、可読性と上質感を一層高める。"
                }
            },
            {
                subtitle: "家族向け",
                type: "Graphic",
                isBanner: true,
                client: "スクール課題",
                img: "/img/works/Graphic/tomatoJuice/banner-tomato01.webp",
                info: {
                    overview: "架空の食品企業におけるトマトジュースのプロモーション用バナー制作。",
                    time: "9時間",
                    date: "2026年07月",
                    tools: "Illustrator、Photoshop",
                    persona: "夫や子供を持つ30〜40代の主婦。家族の健康を考え、朝食や食卓に日常的に取り入れられるおいしい飲み物を探している。",
                    purpose: "30〜40代女性（主婦・子育て世代）。<br>家族の健康を考え、朝食や食卓に日常的に取り入れられるおいしい飲み物を探している。",
                    point: "ロゴとコピーに明朝体を採用し、品質感と信頼感を表現。トマトをモチーフにした円形フレームや商品由来のカラー（レッド・オレンジ）を取り入れ、家族写真と組み合わせることで温かみと賑やかさを演出している。",
                    improvement: "要素（商品特徴・家族写真・コピー）ごとの余白を再設計し、情報の視認性を高める。"
                }
            }
        ]
    },

    sandwich: {
        title: "フライヤー&nbsp;&nbsp;&nbsp;サンドイッチ屋",
        items: [
            {
                subtitle: "",
                type: "Graphic",
                isBanner: true,
                client: "スクール課題",
                img: "/img/works/Graphic/sandwich/sandwich_01_up.webp",
                info: {
                    overview: "名もなきサンドイッチ屋様におけるプロモーション用フライヤー制作。",
                    range: "デザイン",
                    time: "18時間",
                    date: "2026年07月",
                    tools: "Illustrator、Photoshop",
                    persona: "30代男性（会社員）。業務が忙しく手軽に昼食を済ませたい一方で、質や美味しさにもこだわりたいニーズを持つ。",
                    purpose: "インパクトあるビジュアルで認知と興味を獲得し、実店舗への来店を図る。",
                    point: "表面は象徴的なロゴと具材豊かな断面写真を大胆に配置し、一目で食欲をそそる視覚的インパクトを創出。またInstagramのQRコードを配置してSNSフォローへの導線を確保。裏面には製造工程の写真を掲載し、手作り感と安心・信頼感を訴求。",
                    improvement: "店舗ロゴ周辺の背景をサンドイッチの包み紙に変更し、ナチュラルな世界観をより強調。"
                },
                pages: [
                    { title: "表面", img: "/img/works/Graphic/sandwich/sandwich_01.webp" },
                    { title: "裏面", img: "/img/works/Graphic/sandwich/sandwich_02.webp" }
                ]
            }
        ]
    },

    englishSchool: {
        title: "Webサイトデザイン&nbsp;&nbsp;&nbsp;子ども向け英会話教室",
        items: [
            {
                subtitle: "",
                type: "Graphic",
                client: "スクール課題",
                img: "/img/works/Graphic/englishSchool/childEnglish_pcSp_frame.webp",
                info: {
                    overview: "架空の子ども向け英会話教室におけるWebサイトのデザインカンプ制作。",
                    range: "デザイン",
                    time: "18時間",
                    date: "2026年07月",
                    tools: "Illustrator、Photoshop",
                    persona: "30〜40代女性（主婦/夫・幼稚園児の娘との3人暮らし）。<br>教育熱心で、子どもの習い事の候補を探している。",
                    purpose: "英会話教室への関心を惹きつけ、無料体験レッスンの申し込みへつなげる。",
                    point: "アクセントカラーにオレンジを採用し、子どもらしい元気さや明るさを表現。メインビジュアルの画像は角に丸みを持たせた形で切り抜き、親しみやすく柔らかい印象に仕上げた。視認性を高めるため、フォントサイズや余白の調整を行った。",
                    improvement: "デザインカンプをもとにしたWebコーディングの実装。"
                },
                pages: [
                    { title: "PC", img: "/img/works/Graphic/englishSchool/childEnglish_pc_design.webp" },
                    { title: "SP", img: "/img/works/Graphic/englishSchool/childEnglish_sp_design.webp" }
                ]
            }
        ]
    },

    englishSchoolPr: {
        title: "ショート動画&nbsp;&nbsp;&nbsp;子ども向け英会話教室",
        url: "https://youtu.be/hiabJBB-pYM?si=2Ebr3eg-wNe-CIVK",
        items: [
            {
                subtitle: "",
                type: "Movie",
                isBanner: true,
                client: "スクール課題",
                img: "/img/works/Movie/englishSchoolPr/shotEnglish001_mv.webp",
                info: {
                    overview: "架空の子ども向け英会話教室における、プロモーション用ショート動画制作。",
                    range: "構成、デザイン、動画編集",
                    time: "18時間",
                    date: "2026年09月",
                    tools: "Illustrator、Photoshop、Premiere Pro",
                    persona: "30〜40代女性（主婦/夫・幼稚園児の娘との3人暮らし）。<br>教育熱心で、子どもの習い事の候補を探している。",
                    purpose: "英会話教室への関心を惹きつけ、Webサイトへのアクセス・誘導を促す。",
                    point: "モーションの速度を調整して可読性を確保。子どもの賑やかさや元気を表現するため、アルファベットや図形に動き（アニメーション）を付与した。全体をシンプルにまとめ、無料体験レッスンへの導線を意識している。メインビジュアルの画像は角に丸みを持たせた形で切り抜き、親しみやすく柔らかい印象に仕上げた。",
                    improvement: "「保護者の声」のシーンを追加し、より安心感と信頼性を伝える設計にする。"
                },
                pages: [
                    { title: "場面1", img: "/img/works/Movie/englishSchoolPr/shotEnglish001.webp" },
                    { title: "場面2", img: "/img/works/Movie/englishSchoolPr/shotEnglish002.webp" },
                    { title: "場面3", img: "/img/works/Movie/englishSchoolPr/shotEnglish003.webp" },
                    { title: "場面4", img: "/img/works/Movie/englishSchoolPr/shotEnglish004.webp" }
                ]
            }
        ]
    }
};
