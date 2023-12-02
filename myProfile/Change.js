var sentence=[
    {
        "hd2": "I'm a Web",
        "hd3": "Developer"
    },
    {
        "hd2": "I'm a UI/UX",
        "hd3": "Designer"
    },
    {
        "hd2": "I'm a Tech",
        "hd3": "Enthusiast"
    }
];
var index=0;
function changeSentence(){
    var divElement1=document.querySelector(".hd2");
    var divElement2=document.querySelector(".hd3");
    divElement1.innerHTML=sentence[index].hd2;
    divElement2.innerHTML=sentence[index].hd3;
    index=(index+1)%sentence.length;
}
setInterval(changeSentence,2000);