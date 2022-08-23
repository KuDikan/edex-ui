class Terminal {
    constructor(pID) {
        if (!pID) throw "er"
        this.parent = document.getElementById(parentId);
        this.parent.innerHTML += `<div id="mod_countdown" class="">
            <h1 id="mod_countdown_text"><span>?</span><span>?</span><span>:</span><span>?</span><span>?</span><span>:</span><span>?</span><span>?</span></h1>
        </div>`;
        this.lastTime = new Date(2023, 6, 7);

        this.updateClock();
        this.updater = setInterval(() => {
            this.updateClock();
        }, 60000);



    }
    updateClock() {
        let time = this.lastTime - new Date();
        let array = [this.getDay(time),time.getHours(), time.getMinutes()];

        array.forEach((e, i) => {
            if (e.toString().length !== 2) {
                array[i] = "0" + e;
            }
        });
        let clockString = `${array[0]}:${array[1]}:${array[2]}`;
        array = clockString.match(/.{1}/g);
        clockString = "";
        array.forEach(e => {
            if (e === ":") clockString += "<em>" + e + "</em>";
            else clockString += "<span>" + e + "</span>";
        });


        document.getElementById("mod_countdown_text").innerHTML = clockString;
    }
    getDay(d) {
        const currentYear = d.getFullYear().toString();
        // 今天减今年的第一天（xxxx年01月01日）
        const hasTimestamp = d - new Date(currentYear);
        // 86400000 = 24 * 60 * 60 * 1000
        let hasDays = Math.ceil(hasTimestamp / 86400000);return hasDays;
      }
}
module.exports = {
    Terminal
};