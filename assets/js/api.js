async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/gbryul/portfolio/main/data/profile.json"
    const fetching = await fetch(url)
    return await fetching.json()
}