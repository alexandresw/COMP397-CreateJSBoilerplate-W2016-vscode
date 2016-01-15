module objects{
    
    export class Student extends Person {
        private _studentNumber:number;
        
        constructor(name:string, studentNumber:number){
            super(name);
            this._studentNumber = studentNumber;
        }
        
        public studies():void {
            console.log(this._name + " is studying");
        }
    }


}