const container = document.getElementById("profile_container");

// ------------------------------
// プロフィール基本情報
// ------------------------------
const basicHTML = `
<section id="profile_detail">
    <div class="wrapper">
        <h2>プロフィール</h2>
        <div class="profile_card">
            <div class="profile_img">
                <img src="${profileData.basic.img}" alt="プロフィール画像">
            </div>
            <div class="profile_info">
                <dl>
                    <div class="dl_row">
                        <dt>${profileData.basic.name_ja}</dt>
                        <dd>${profileData.basic.name_en}</dd>
                    </div>
                    <div class="dl_row">
                        <dt>生年月日</dt>
                        <dd>${profileData.basic.birthday}</dd>
                    </div>
                    <div class="dl_row">
                        <dt>趣味</dt>
                        <dd>${profileData.basic.hobbies}</dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</section>
`;

container.insertAdjacentHTML("beforeend", basicHTML);

// ------------------------------
// 経歴
// ------------------------------
let careerHTML = `
<section id="career">
    <div class="wrapper">
        <h2>経歴</h2>
        <div class="timeline">
`;

profileData.career.forEach(item => {
    careerHTML += `
        <div class="timeline_item">
            <div class="timeline_date">${item.date}</div>
            <div class="timeline_content">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        </div>
    `;
});

careerHTML += `
        </div>
    </div>
</section>
`;

container.insertAdjacentHTML("beforeend", careerHTML);


// ------------------------------
// 使用経験のあるツール
// ------------------------------
let toolHTML = `
<section id="tools">
    <div class="wrapper">
        <h2>使用経験のあるツール</h2>
        <div class="tools_grid">
`;

profileData.tools.forEach(tool => {
    toolHTML += `
        <div class="tool_card">
            <h3>${tool.title}</h3>
            <p>${tool.desc}</p>
            <ul class="tool_tags">
                ${tool.tags.map(tag => `<li>${tag}</li>`).join("")}
            </ul>
        </div>
    `;
});

toolHTML += `
        </div>
    </div>
</section>
`;

container.insertAdjacentHTML("beforeend", toolHTML);


// ------------------------------
// スキル
// ------------------------------
let skillsHTML = `
<section id="skills">
    <div class="wrapper">
        <h2>スキル</h2>
        <div class="skills_grid">
`;

profileData.skills.forEach(skill => {
    skillsHTML += `
        <div class="skill_card">
            <h3>${skill.title}</h3>
            <p>${skill.desc}</p>
            <ul class="skill_tags">
                ${skill.tags.map(tag => `<li>${tag}</li>`).join("")}
            </ul>
        </div>
    `;
});

skillsHTML += `
        </div>
    </div>
</section>
`;

container.insertAdjacentHTML("beforeend", skillsHTML);

// ------------------------------
// 資格
// ------------------------------
let qualificationsHTML = `
<section id="qualifications">
    <div class="wrapper">
        <h2>資格</h2>
        <ul class="qualification_list">
            ${profileData.qualifications.map(q => `<li>${q}</li>`).join("")}
        </ul>
    </div>
</section>
`;

container.insertAdjacentHTML("beforeend", qualificationsHTML);

// ------------------------------
// 強み
// ------------------------------
let strengthsHTML = `
<section id="strengths">
    <div class="wrapper">
        <h2>私の強み</h2>
        <div class="strengths_list">
`;

profileData.strengths.forEach(s => {
    strengthsHTML += `
        <div class="strength_item">
            <div class="strength_title">${s.title}</div>
            <div class="strength_desc">${s.desc}</div>
        </div>
    `;
});

strengthsHTML += `
        </div>
    </div>
</section>
`;

container.insertAdjacentHTML("beforeend", strengthsHTML);
