//your code here!


function addItem(){
	
	for(let i=1; i<=20; i++){
		let li=document.createElement("li");
	li.textContent=`item${i}`;
	document.getElementById("infi-list").appendChild(li);
	}

}

addItem();

let ol=document.getElementById("infi-list")
	ol.addEventListener("scroll",()=>{
	if(ol.scrollTop+ol.clientHeight>=ol.scrollHeight-5){
		addItem();
	}
})