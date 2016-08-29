

export class LolService {
    mas = ['Boris the Blade', 'Doug the Head', 'Tommy'];

    getLol() {
        console.log(this.mas);
        return this.mas;
    }

    addLol(str) {
        this.mas.push(str);
        console.log(str);
        console.log(this.mas);
    }
}