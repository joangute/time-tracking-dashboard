let option="weekly";
let message="Last week - ";
const period=document.querySelectorAll("a");
main();

async function main(){
  const resp= await fetch("./data/data.json");
  const days= await resp.json();
  fill_cards(days);
}   

function fill_cards(days){
  const current=document.querySelectorAll(".current");
  const previous=document.querySelectorAll(".previous");
  for(let i=0;i<days.length;i++){
      current[i].innerHTML=days[i].timeframes[option].current+"hrs";
      previous[i].innerHTML=message+days[i].timeframes[option].previous+"hrs";
  }
}
 
for(let i=0;i<period.length;i++){
  period[i].addEventListener("click",function(){
    option=this.id;
    period[0].style.color="var(--active)";
    period[1].style.color="var(--active)";
    period[2].style.color="var(--active)";

    if(this.id=="weekly")
    {
      this.style.color="white";
      message="Last week - ";
    }
    else if(this.id=="daily"){
      this.style.color="white";
      message="yesterday - ";
    }          
    else{
      this.style.color="white";
      message="Last month - ";
    }          
    main();
  });
}