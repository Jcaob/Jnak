let Div = document.getElementsByClassName("Yep")



for(let i = 0; i < Div.length; i++){
    TweenLite.from(Div[i],
        {duration: .2, x: -100, alpha: 0, delay: i }
        );
}

function click(DivNum)
{
    TweenLite.to(Div[DivNum], {duration:1, alpha:0})
}
    
