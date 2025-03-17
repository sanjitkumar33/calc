function language(name,country){
    this.name = name;
    this.country = country;
    this.greet = () =>{
        return `say Hi to ${name}`
    }
}