(function setThemePreferences() {
    const systemThemeIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const userThemePreferance = window.localStorage.getItem('pref-theme');
    if (!userThemePreferance && systemThemeIsDark) document.body.classList.add("dark");
    if (userThemePreferance) document.body.classList.add(userThemePreferance);

    const themeInput = document.querySelector('#theme');
    if (document.body.classList.contains('dark')) themeInput.click();
    themeInput.addEventListener("change", e => {
        document.body.classList.toggle('dark', themeInput.checked);
        if (themeInput.checked) window.localStorage.setItem('pref-theme', 'dark');
        else window.localStorage.setItem('pref-theme', 'light');
    });
})();

const emojiList = [
    "⚫", "🔲", "⬛", "🏴", "♠️", "🖤", "🕶️", "🟧", "🟠", "🍊", "🔶", "🍂", "🧡", "🌅", "🦊", "📙", "🔴", "🟥", "❤️", "🔥", "🍎", "🌹", "📕", "🧨", "🎈", "🛑", "🟢", "🟩", "🌿", "🌱", "🍀", "🍃", "🪴", "📗", "🥦"
];

const lists = document.querySelectorAll("ul");
lists.forEach(list => {
    const randomIndex = Math.floor(Math.random() * emojiList.length);
    list.querySelectorAll('li').forEach(item => {
        item.setAttribute("data-bullet", `${emojiList[randomIndex]}`);
    });
    emojiList.splice(randomIndex, 1);
});

const typewriters = document.querySelectorAll('[data-typewriter]');
typewriters.forEach(async (writer) => {
    const dataset = writer.getAttribute('data-typewriter').split(",").map(x => x.trim());
    for (let i = 0; i < dataset.length; i++) {
        const currentWord = dataset[i];
        let j = 1;
        let isReverse = false;
        while (j >= 1) {
            await new Promise(resolve => setTimeout(resolve, 100));
            writer.innerHTML = currentWord.slice(0, j);
            if (j === currentWord.length) {
                isReverse = true;
                await new Promise(resolve => setTimeout(resolve, 1500));
            }
            if (isReverse) j--;
            else j++;
        }
        await new Promise(resolve => setTimeout(resolve, 100));
        if (i === dataset.length - 1) i = -1;
    }
});
console.log("The script runs!");