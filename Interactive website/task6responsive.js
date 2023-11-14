function myFunction1(){
    window.scrollBy({ top: 750, behavior: 'smooth' });
}
function randomColor(){
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    return "rgb(" + x + "," + y + "," + z + ")";
}
function myFunction2(){
    let bgColor=randomColor();
    let cards=document.getElementsByClassName("card");
    for(let i=0;i<cards.length;i++){
        cards[i].style.backgroundColor = bgColor;
    }
    textColorChange(bgColor);
    function textColorChange(Colours){
        let textCard=document.getElementsByClassName("textArea");
        let Colour=Colours.slice(4,-1).split(',').map(Number);
        let ColorContrast= Math.round(((parseInt(Colour[0]) * 299) +(parseInt(Colour[1]) * 587) +(parseInt(Colour[2]) * 114)) / 1000);
        let textColor=(ColorContrast>156)?'black':'white';
        for(let j=0;j<textCard.length;j++)
        {
            textCard[j].style.color=textColor;
            if(j==2 || j==5 || j==8)
            {
                textCard[j].style.backgroundColor=(ColorContrast<186)?'rgba(255,255,255,0.5)':'rgba(0,0,0,0.5)';
            }
        }
    }
}