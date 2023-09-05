function resolveProfileInfo(profileData) {
    const name = document.getElementById('profile.name')
    name.innerText = profileData.name
    const job = document.getElementById('profile.job')
    job.innerText = profileData.job
    const location = document.getElementById('profile.location')
    location.innerText = profileData.location
    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`
    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function addSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function addHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src = "${skill.logo}" alt = "${skill.nome}" title = "${skill.nome}"></li>`).join('')

}

function addLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.idiomas.map(languages => `<li>${languages.nome} - Nível: ${languages.nivel}</li>`).join('')
}

function addPortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(portfolio => `<li>
    <h3 class="p-content__portfolio github">${portfolio.nome}</h3>
    <a href="${portfolio.gitHub}" target="_blank">${portfolio.gitHub}</a>
    <a href="${portfolio.certificado}" target = "_blank">Certificado</a>
</li>`).join('')

}


(async () => {
    const profileData = await fetchProfileData()
    resolveProfileInfo(profileData)
    addSoftSkills(profileData)
    addHardSkills(profileData)
    addLanguages(profileData)
    addPortfolio(profileData)
})()