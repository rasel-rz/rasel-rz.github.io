const emojiList = [
    "⚫", "🔲", "⬛", "🏴", "♠️", "🖤", "🕶️",
    "🟧", "🟠", "🍊", "🔶",  "🍂", "🧡", "🌅", "🦊", "📙",
    "🔴", "🟥", "❤️", "🔥", "🍎", "🌹", "📕", "🧨", "🎈", "🛑",
    "🟢", "🟩", "🌿", "🌱", "🍀", "🍃", "🪴", "📗", "🥦"
];

const lists = document.querySelectorAll("ul");
lists.forEach(list => {
    const randomIndex = Math.floor(Math.random() * emojiList.length);
    list.querySelectorAll('li').forEach(item => {
        item.setAttribute("data-bullet", `${emojiList[randomIndex]}`);
    });
    // list.style.setProperty("list-style-type", `"\\0${emojiList[randomIndex]}"`)
    emojiList.splice(randomIndex, 1);
});
console.log("The script runs!");