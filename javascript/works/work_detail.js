// URL の ?id=skinCare などから作品IDを取得
const params = new URLSearchParams(location.search);
const pageId = params.get("id");

const container = document.getElementById("work_detail_container");
const data = workDetailsData[pageId];

if (!data) {
    container.innerHTML = "<p>作品データが見つかりません。</p>";
} else {
    const itemCount = data.items.length;

    data.items.forEach((item, index) => {
        const section = document.createElement("section");
        section.classList.add("work_detail");

        const workTitle = itemCount === 1 ? "作品" : `作品${index + 1}`;

        section.innerHTML = `
            <div class="wrapper">
                <h2>${workTitle}</h2>

                <div class="work_header">
                    <div class="work_header_left">
                        <h3>${data.title}${item.subtitle ? "（" + item.subtitle + "）" : ""}</h3>
                        ${data.url ? `
                            <p class="work_url">
                                URL : <a href="${data.url}" target="_blank" rel="noopener noreferrer">${data.url}</a>
                            </p>
                        ` : ""}
                    </div>
                    <div class="work_header_right">
                        <dl>
                            <div class="meta_row"><dt>Type</dt><dd>${item.type}</dd></div>
                            <div class="meta_row"><dt>Client</dt><dd>${item.client}</dd></div>
                        </dl>
                    </div>
                </div>

                <div class="work_main_img ${item.isBanner ? 'is-banner' : ''}">
                    <img src="${item.img}" alt="${data.title}">
                </div>

                <div class="work_info">
                    <dl>
                        ${Object.entries(item.info).map(([key, value]) => `
                            <div class="info_row">
                                <dt>${convertLabel(key)}</dt>
                                <dd>${value}</dd>
                            </div>
                        `).join("")}
                    </dl>
                </div>

                ${item.pages ? `
                    <section id="work_pages">
                        <h2>${item.type === 'Movie' ? '場面構成' : 'ページ'}</h2>
                        <div class="pages_grid ${item.type === 'Movie' ? 'is-movie' : ''}">
                        ${item.pages.map(p => {
                            let itemClass = 'page_item';
                            if (item.type === 'Web' || item.type === 'LP') {
                                itemClass += p.title === 'SP' ? ' page_sp' : ' page_pc';
                            }

                            return `
                                <div class="${itemClass}">
                                    <h3>${p.title}</h3>
                                    <div class="page_img_wrap">
                                        <img src="${p.img}" alt="${p.title}">
                                    </div>
                                </div>
                            `;
                        }).join("")}
                        </div>
                    </section>
                ` : ""}
            </div>
        `;

        if (index === itemCount - 1) {
            const backBtn = document.createElement("div");
            backBtn.classList.add("back_btn_wrap");
            backBtn.innerHTML = `
                <a href="index.html#works" class="back_btn">制作物ページへ戻る</a>
            `;
            section.querySelector(".wrapper").appendChild(backBtn);
        }

        container.appendChild(section);
    });
}

function convertLabel(key) {
    const map = {
        url: "URL",
        overview: "概要",
        range: "担当範囲",
        time: "制作時間",
        date: "制作年月",
        tools: "使用ツール",
        persona: "ペルソナ",
        purpose: "目的",
        point: "ポイント",
        improvement: "改善点"
    };
    return map[key] || key;
}
