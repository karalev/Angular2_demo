

export class LolService {
    mas = ['olo', 'aza', 'wawa', 'pish'];

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