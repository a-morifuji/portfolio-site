document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. ボタンのアクティブ（見た目）切り替え
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 2. 選択されたフィルターの値を取得
            const filterValue = btn.getAttribute('data-filter');

            // 3. 制作物の表示・非表示切り替え
            workItems.forEach(item => {
                const category = item.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === category) {
                    item.classList.remove('is-hidden');
                } else {
                    item.classList.add('is-hidden');
                }
            });
        });
    });
});

// -----------------------------
// 作品データ（共通化）
// -----------------------------
const worksData = [
    {
        category: "lp",
        link: "/html/works/work_detail.html?id=skinCare",
        img: "/img/works/LP/skincare/skincare_frame.webp",
        title: "LP&nbsp;&nbsp;&nbsp;スキンケアブランド",
        type: "LP / 自主制作（デザイン、コーディング）"
    },
    {
        category: "web",
        link: "/html/works/work_detail.html?id=portfolio",
        img: "/img/works/Web/portfolio/portfolio_pcSp_frame.webp",
        title: "Webサイト&nbsp;&nbsp;&nbsp;ポートフォリオ",
        type: "Web / 自主制作（デザイン、コーディング）"
    },
    {
        category: "web",
        link: "/html/works/work_detail.html?id=hamburger",
        img: "/img/works/Web/hamburger/hamburger_frame.webp",
        title: "Webサイト&nbsp;&nbsp;&nbsp;ハンバーガーショップ",
        type: "Web / スクール課題（模写コーディング）"
    },
    {
        category: "web",
        link: "/html/works/work_detail.html?id=iceCream",
        img: "/img/works/Web/iceCream/ice_pc_frame.webp",
        title: "Webサイト&nbsp;&nbsp;&nbsp;アイスクリームショップ",
        type: "Web / スクール課題（模写コーディング）"
    },
    {
        category: "graphic",
        link: "/html/works/work_detail.html?id=summerCourses",
        img: [
            "/img/works/Graphic/summerCourses/summer_m.webp",
            "/img/works/Graphic/summerCourses/summer_w.webp"
        ],
        title: "SNSバナー広告&nbsp;&nbsp;&nbsp;塾の夏期講習",
        type: "Graphic / スクール課題（デザイン）"
    },
    {
        category: "graphic",
        link: "/html/works/work_detail.html?id=tomatoJuice",
        img: [
            "/img/works/Graphic/tomatoJuice/banner-tomato01.webp",
            "/img/works/Graphic/tomatoJuice/banner-tomato02.webp"
        ],
        title: "SNSバナー広告&nbsp;&nbsp;&nbsp;トマトジュース",
        type: "Graphic / スクール課題（デザイン）"
    },
    {
        category: "graphic",
        link: "/html/works/work_detail.html?id=sandwich",
        img: "/img/works/Graphic/sandwich/sandwich_01_up.webp",
        title: "フライヤー&nbsp;&nbsp;&nbsp;サンドイッチ屋",
        type: "Graphic / スクール課題（デザイン）"
    },
    {
        category: "graphic",
        link: "/html/works/work_detail.html?id=englishSchool",
        img: [
            "/img/works/Graphic/englishSchool/childEnglish_pcSp_frame.webp"
        ],
        title: "Webサイトデザイン&nbsp;&nbsp;&nbsp;子ども向け英会話教室",
        type: "Graphic / スクール課題（デザイン）"
    },
    {
        category: "movie",
        link: "/html/works/work_detail.html?id=englishSchoolPr",
        img: [
            "/img/works/Movie/englishSchoolPr/shotEnglish001_mv.webp"
        ],
        title: "ショート動画&nbsp;&nbsp;&nbsp;子ども向け英会話教室",
        type: "Movie / スクール課題（構成、デザイン、動画編集）"
    }
];

// -----------------------------
// HTML生成
// -----------------------------
const worksList = document.getElementById("works_list");

worksData.forEach(work => {
    const item = document.createElement("div");
    item.classList.add("work-item");
    item.dataset.category = work.category;

    // 動画カテゴリー（movie）かどうかを判定
    const isMovie = work.category === "movie";
    if (isMovie) {
        item.classList.add("movie-item");
    }

    let imgHTML = "";

    // 画像が複数の場合
    if (Array.isArray(work.img)) {
        // 動画の場合は movie_box クラスを付与
        const boxClass = isMovie ? "multi_img_box movie_box" : "multi_img_box";
        imgHTML = `
            <div class="${boxClass}">
                ${work.img.map(src => `<img src="${src}" alt="" class="${isMovie ? 'movie_img' : ''}">`).join("")}
            </div>
        `;
    } else {
        imgHTML = `<img src="${work.img}" alt="" class="${isMovie ? 'movie_img' : ''}">`;
    }

    item.innerHTML = `
        <a href="${work.link}">
            ${imgHTML}
        </a>
        <h3>${work.title}</h3>
        <p>${work.type}</p>
    `;

    worksList.appendChild(item);
});

// -----------------------------
// フィルター機能
// -----------------------------
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;

        // active切り替え
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // 表示切り替え
        document.querySelectorAll(".work-item").forEach(item => {
            if (filter === "all" || item.dataset.category === filter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
