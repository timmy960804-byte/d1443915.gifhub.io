const fortuneData = [
    {
        name: "大吉・鴻運當頭",
        work: "創意噴發，提出的方案會得到高度認可。",
        study: "思路清晰，難題迎刃而解，考試運極佳。",
        love: "與心儀對象有驚喜互動，感情迅速升溫。",
        money: "偏財運旺盛，可能會有意想不到的小收入。",
        quote: "「今天的你，連星星都在為你閃耀。」"
    },
    {
        name: "中吉・穩步前行",
        work: "事情都在掌握中，適合處理堆積已久的雜事。",
        study: "基礎扎實，只要不粗心就能發揮應有水準。",
        love: "平淡中見真情，適合一起吃頓簡單的晚餐。",
        money: "消費理智，是規劃長線投資的好時機。",
        quote: "「每一步微小的努力，都在累積巨大的能量。」"
    },
    {
        name: "小吉・微光生活",
        work: "團隊氣氛和諧，同事會成為你的助力。",
        study: "適合預習新知識，好奇心會帶領你走更遠。",
        love: "單身者可能會在轉角遇到有趣的新朋友。",
        money: "適合購買一直想買的生活好物，犒賞自己。",
        quote: "「生活的小驚喜，總是在不經意間出現。」"
    },
    {
        name: "末吉・守成待時",
        work: "建議多聽少說，觀察職場風向比衝動更重要。",
        study: "適合溫故知新，別急著追求進度。",
        love: "給彼此一點空間，距離感反而能產生美感。",
        money: "荷包守得住，沒有大筆支出就是賺。",
        quote: "「等待，也是一種充滿力量的姿態。」"
    },
    {
        name: "吉・能量爆棚",
        work: "執行力極強，今天能完成驚人的工作量。",
        study: "對學問充滿熱情，適合挑戰艱難的學術目標。",
        love: "魅力四射，走到哪裡都是目光的焦點。",
        money: "投資眼光精準，適合分析市場動向。",
        quote: "「世界正在為你的熱情開路。」"
    },
    {
        name: "平凡・靜謐時光",
        work: "按部就班，是一個適合思考未來規劃的日子。",
        study: "心境平和，讀書效率穩定，適合整理筆記。",
        love: "適合深層溝通，釐清長久以來的誤解。",
        money: "財務穩定，雖然沒偏財，但正財穩當。",
        quote: "「平凡的日子，才是最珍貴的福氣。」"
    },
    {
        name: "驚喜・變革之兆",
        work: "可能會迎來新挑戰，這正是轉型的好機會。",
        study: "發現了新學習法，讓你事半功倍。",
        love: "一場突如其來的邀約，可能開啟新篇章。",
        money: "適合清理舊帳，重新分配資金規劃。",
        quote: "「改變雖然陌生，但往往帶來驚喜。」"
    },
    {
        name: "舒心・治癒時刻",
        work: "忙碌暫告一段落，有空檔可以喝杯咖啡休息。",
        study: "適合閱讀課外書籍，拓寬思維廣度。",
        love: "被溫柔對待的一天，內心感到無比踏實。",
        money: "可能會在舊衣口袋發現驚喜的小錢。",
        quote: "「記得溫柔對待世界，也溫柔對待自己。」"
    },
    {
        name: "潛力・蓄勢待發",
        work: "你的才華正在被看見，維持現狀繼續努力。",
        study: "理解力提升，原本不懂的概念突然開竅。",
        love: "曖昧關係有進展，勇敢跨出那一步吧。",
        money: "適合學習理財知識，提升自己的財商。",
        quote: "「你是尚未磨亮的寶石，發光只是遲早的事。」"
    },
    {
        name: "轉機・柳暗花明",
        work: "卡關的計畫，會因為某人的提醒而順利推動。",
        study: "轉換心境後，枯燥的課業也變得有趣。",
        love: "放下執著，真正的緣分才會慢慢浮現。",
        money: "雖然有一筆小支出，但換來的經驗無價。",
        quote: "「轉個彎，風景其實更漂亮。」"
    }
];

const drawBtn = document.getElementById('draw-btn');
const retryBtn = document.getElementById('retry-btn');
const magicBall = document.getElementById('magic-ball');
const diviArea = document.getElementById('divination-area');
const resultArea = document.getElementById('result-area');

function startDivination() {
    magicBall.style.animation = "shake 0.5s infinite";
    drawBtn.disabled = true;
    drawBtn.innerText = "讀取星象中...";

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * fortuneData.length);
        const data = fortuneData[randomIndex];
        
        document.getElementById('fortune-name').innerText = data.name;
        document.getElementById('work-text').innerText = data.work;
        document.getElementById('study-text').innerText = data.study;
        document.getElementById('love-text').innerText = data.love;
        document.getElementById('money-text').innerText = data.money;
        document.getElementById('fortune-quote').innerText = data.quote;

        diviArea.classList.add('hidden');
        resultArea.classList.remove('hidden');
        magicBall.style.animation = "";
    }, 1500);
}

drawBtn.addEventListener('click', startDivination);
magicBall.addEventListener('click', startDivination);
retryBtn.addEventListener('click', () => {
    resultArea.classList.add('hidden');
    diviArea.classList.remove('hidden');
    drawBtn.disabled = false;
    drawBtn.innerText = "開啟今日運勢";
});

// 注入搖晃動畫
const style = document.createElement('style');
style.innerHTML = `@keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    20% { transform: translate(-3px, 0px) rotate(-1deg); }
    40% { transform: translate(3px, 2px) rotate(1deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
}`;
document.head.appendChild(style);