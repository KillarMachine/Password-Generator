let button=document.getElementsByClassName("passGen")[0].children;
let password=document.getElementsByClassName("password")[0];
class NumGen{
    constructor(min,max,length){
    this.min=min;
    this.max=max;
    this.length=length;
    }
    generator(){
        let pass="";
        password.innerHTML="";
        for(let count=0;count<5;count++){

            for(let i=0;i<this.length;i++){
                pass+=String.fromCharCode(Math.round(Math.random()*(this.max-this.min)+this.min));
            }
            password.innerHTML+=`<div class='PassWord'>${pass}</div>`;
            pass="";
        }
    }
}
button[0].addEventListener("click",()=>{
    let obj=new NumGen(97,122,10);
    obj.generator();
});
button[1].addEventListener("click",()=>{
    let obj=new NumGen(32,126,40);
    obj.generator();
})
button[2].addEventListener("click",()=>{
    console.log("Funny password");
    let obj=new NumGen(0,1000,50);
    obj.generator();
})
for(let i=32;i<127;i++){
console.log(i+" "+String.fromCharCode(i));
    
}