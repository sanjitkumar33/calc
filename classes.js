class language1{
    constructor(name,country){
        this.name = name;
        this.country = country;
    }
    greet=() => {return `say hi to ${this.name}`}
}
let hindi = new language ('Hindi','India')