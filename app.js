function wlecoming(){
    alert ('Welcome to sport news')
    let useranswer=prompt("Are you love sports ?")
    let bestteam=prompt("which is the favorite team?")
    alert ('you like'+ bestteam)
    document.write('<h3>'+ bestteam +'</h3>')
    console.log(bestteam);
    console.log(useranswer);
    }
    function printImg(){
    let userinput = prompt('please enter the number of real madrid won in champions league ?')
    while(userinput!=13)
    {
    userinput=prompt("please search and put the right number")
    }
    
    }
    wlecoming();
    printImg();
