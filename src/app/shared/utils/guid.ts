export default class GUID {

    static generate() {
        let d = new Date().getTime();
        if (Date.now && typeof Date.now === 'function') {
            d += Date.now();
        }
        let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c == 'x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    }
}
