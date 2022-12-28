class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId;
    }
    addClock(time, callback, id) {
        if (!id) {
            throw new Error('error text');
        }
        if (alarmCollection.includes(id)) {
            console.error('Будильник с таким id уже существует');
            return false;
        }
        this.alarmCollection.push(this.addClock);
    }

    removeClock(id) {
        let alarm = this.alarmCollection.filter((element) => element.id === id);
        return alarm;
    }
    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 3);
    }

    start() {
        function checkClock(call) {
            if (this.getCurrentFormattedTime === call.time) {
                call.callback();
            }
        }

        if (this.timerId === null) {
            this.timerId = setInterval(() => { this.alarmCollection.forEach(item => checkClock(item)) }, 1000)

        }
    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId === null;
        }
    }
    printAlarms() {
        this.alarmCollection.forEach((item) => console.log(`Будильник № ${item.id} заведен  на ${item.time}`));

    }
    clearAlarms() {
        if()

    }


}