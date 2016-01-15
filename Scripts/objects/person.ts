module objects{
    
    export class Person {
        protected _name:string;
        
        constructor(name:string){
            this._name = name;
        }
        
        public speaks(): void {
            console.log(this._name + " says hello!");
        }
    }
}
