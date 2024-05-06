let color_set={
    h1_color:"",
    h2_color:"",
    htp_color:"",
    start_color:"",
    ur_color:"",
    high_color:"",
    bg_color:"#FAF8EF",
    button_color:"#EEE4DA",
    twoColor:"#EEE4DA59",
    fourColor:"#EEE1C9",
    eightColor:"#F3B27A",
    sixteenColor:"#F69664",
    threetwoColor:"#F77C5F",
    sixfourColor:"#F75F3B",
    onetwoeightColor:"#EDD073",
    borderColor:"#BBADA0",
    arrowColor:""
}
function colorS(){
    if(document.getElementById("colorSelector").value=="green"){
        color_set.bg_color='#C1E1C1';
        color_set.h1_color='green';color_set.h2_color='green';color_set.htp_color='green';
        color_set.start_color="#8A9A5B";        
        color_set.ur_color="#6082B6";
        color_set.high_color="#6082B6";
        color_set.button_color="#C1E1C1";
        color_set.borderColor="	#478778";
        color_set.arrowColor="#B4C424";
    }
    else if(document.getElementById("colorSelector").value=="blue"){
        color_set.bg_color="#F0FFFF";
        color_set.h1_color='#5F9EA0';color_set.h2_color='#5F9EA0';color_set.htp_color='#5F9EA0';
        color_set.start_color="#6082B6";
        color_set.ur_color="#8A9A5B";
        color_set.high_color="#8A9A5B";
        color_set.button_color="lightblue";
        color_set.borderColor="#6F8FAF";
        color_set.arrowColor="#191970";
    }
    else if(document.getElementById("colorSelector").value=="red"){
        color_set.bg_color="#FFF5EE";
        color_set.h1_color='#913831';color_set.h2_color='#913831';color_set.htp_color='#913831';
        color_set.start_color="#E37383";
        color_set.ur_color="#F89880";
        color_set.high_color="#F89880";
        color_set.button_color="#F3CFC6";
        color_set.borderColor="#F88379";
        color_set.arrowColor="#880808";
    }
    else if(document.getElementById("colorSelector").value=="dark"){
        color_set.bg_color="#808080";
        color_set.h1_color='#FF7518';color_set.h2_color='#000000';color_set.htp_color='#000000';
        color_set.start_color="#1B1212";
        color_set.ur_color="#F89880";
        color_set.high_color="#F89880";
        color_set.button_color="#C0C0C0";
        color_set.borderColor="#343434";
        color_set.arrowColor="#000000";
    }
    document.body.style.backgroundColor=color_set.bg_color;                                     //body color
    document.getElementById('h1').style.color=color_set.h1_color;                               //heading color
    document.getElementById('h3').style.color=color_set.h2_color;                               //h2 color
    document.getElementById('ins').style.color=color_set.htp_color;                             //htp color
    document.getElementById('start_game').style.backgroundColor=color_set.start_color;          //new game color
    document.getElementById('ur_score_display').style.backgroundColor=color_set.start_color;    //ur score color
    document.getElementById('high_score_display').style.backgroundColor=color_set.start_color;  //high score color
    document.getElementById('top_button').style.backgroundColor=color_set.arrowColor;           //left button color
    document.getElementById('bottom_button').style.backgroundColor=color_set.arrowColor;           //top button color
    document.getElementById('left_button').style.backgroundColor=color_set.arrowColor;           //bottom button color
    document.getElementById('right_button').style.backgroundColor=color_set.arrowColor;           //right button color

    let button_list=[["b11","b12","b13","b14"], 
             ["b21","b22","b23","b24"],
            ["b31","b32","b33","b34"],
            ["b41","b42","b43","b44"]];
    for(let i=0;i<4;i++){                                //button color
        for(let j=0;j<4;j++){
            document.getElementById(button_list[i][j]).style.backgroundColor=color_set.button_color;
            document.getElementById(button_list[i][j]).style.borderColor=color_set.borderColor;
        }
    }
}
let GameStarted={
    did:0
}
document.addEventListener('keydown',(event)=>{
    if(GameStarted.did==1){
            switch(event.key){
                case 'ArrowUp':console.log('arrow up');fun_up();break;
                case 'ArrowDown':console.log('arrow down');fun_bottom();break;
                case 'ArrowLeft':console.log('arrow left');fun_left();break;
                case 'ArrowRight':console.log('arrow right');fun_right();break;
            }
    }
});
function load(){
    document.getElementById("high_score").innerHTML=localStorage.getItem("high");
}
var count_obj={
    count:0,
    ur_score:0,
    high_score:localStorage.getItem("high")
}
function color_change(){
    let button_list=[["b11","b12","b13","b14"],
             ["b21","b22","b23","b24"],
            ["b31","b32","b33","b34"],
            ["b41","b42","b43","b44"]];
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            console.log((document.getElementById(button_list[i][j]).innerHTML));
            if((parseInt((document.getElementById(button_list[i][j]).innerHTML))%2==0)
             &&((document.getElementById(button_list[i][j]).innerHTML)!="NaN")
             &&((document.getElementById(button_list[i][j]).innerHTML)!=null)){
                console.log('1234');
                let button=document.getElementById(button_list[i][j]);
                button.style.backgroundColor=button_color;
            }
        }
    }
}

function fun_start(){
    count_obj.ur_score=parseInt(0);
    GameStarted.did=1;
    console.log('fun start');
    count_obj.count=(0);
    document.getElementById("score").innerHTML=count_obj.count;
    if(count_obj.high_score==0){
        document.getElementById("high_score").innerHTML=0;
    }
    else{
        count_obj.high_score=localStorage.getItem("high");
        document.getElementById("high_score").innerHTML=localStorage.getItem("high");
    }
    count_obj.count=0;
    let button_list=[["b11","b12","b13","b14"],
             ["b21","b22","b23","b24"],
            ["b31","b32","b33","b34"],
            ["b41","b42","b43","b44"]];
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            document.getElementById(button_list[i][j]).innerHTML=null;
            document.getElementById(button_list[i][j]).style.backgroundColor=color_set.button_color;//'#EEE4DA59'
        }
    }
    let x=(100*(Math.random()))%16;
    let y=(100*(Math.random()))%16;
    x=Math.floor(x);y=Math.floor(y);
    if(x==y){
        if(y==15){
            x=1;
        }
        else{
            x=y+1;
        }
    }
    if(x==0||y==0){document.getElementById("b11").innerHTML=2;document.getElementById("b11").style.backgroundColor='#EEE4DA59';
    document.getElementById("b11").style.Color='#BBADA0';}
    if(x==1||y==1){document.getElementById("b12").innerHTML=2;document.getElementById("b12").style.backgroundColor='#EEE4DA59';
    document.getElementById("b12").style.Color='#BBADA0';}
    if(x==2||y==2){document.getElementById("b13").innerHTML=2;document.getElementById("b13").style.backgroundColor='#EEE4DA59';
    document.getElementById("b13").style.Color='#BBADA0';}
    if(x==3||y==3){document.getElementById("b14").innerHTML=2;document.getElementById("b14").style.backgroundColor='#EEE4DA59';
    document.getElementById("b14").style.Color='#BBADA0';}
    if(x==4||y==4){document.getElementById("b21").innerHTML=2;document.getElementById("b21").style.backgroundColor='#EEE4DA59';
    document.getElementById("b21").style.Color='#BBADA0';}
    if(x==5||y==5){document.getElementById("b22").innerHTML=2;document.getElementById("b22").style.backgroundColor='#EEE4DA59';
    document.getElementById("b22").style.Color='#BBADA0';}
    if(x==6||y==6){document.getElementById("b23").innerHTML=2;document.getElementById("b23").style.backgroundColor='#EEE4DA59';
    document.getElementById("b23").style.Color='#BBADA0';}
    if(x==7||y==7){document.getElementById("b24").innerHTML=2;document.getElementById("b24").style.backgroundColor='#EEE4DA59';
    document.getElementById("b24").style.Color='#BBADA0';}
    if(x==8||y==8){document.getElementById("b31").innerHTML=2;document.getElementById("b31").style.backgroundColor='#EEE4DA59';
    document.getElementById("b31").style.Color='#BBADA0';}
    if(x==9||y==9){document.getElementById("b32").innerHTML=2;document.getElementById("b32").style.backgroundColor='#EEE4DA59';
    document.getElementById("b32").style.Color='#BBADA0';}
    if(x==10||y==10){document.getElementById("b33").innerHTML=2;document.getElementById("b33").style.backgroundColor='#EEE4DA59';
    document.getElementById("b33").style.Color='#BBADA0';}
    if(x==11||y==11){document.getElementById("b34").innerHTML=2;document.getElementById("b34").style.backgroundColor='#EEE4DA59';
    document.getElementById("b34").style.Color='#BBADA0';}
    if(x==12||y==12){document.getElementById("b41").innerHTML=2;document.getElementById("b41").style.backgroundColor='#EEE4DA59';
    document.getElementById("b41").style.Color='#BBADA0';}
    if(x==13||y==13){document.getElementById("b42").innerHTML=2;document.getElementById("b42").style.backgroundColor='#EEE4DA59';
    document.getElementById("b42").style.Color='#BBADA0';}
    if(x==14||y==14){document.getElementById("b43").innerHTML=2;document.getElementById("b43").style.backgroundColor='#EEE4DA59';
    document.getElementById("b43").style.Color='#BBADA0';}
    if(x==15||y==15){document.getElementById("b44").innerHTML=2;document.getElementById("b44").style.backgroundColor='#EEE4DA59';
    document.getElementById("b44").style.Color='#BBADA0';}
}
function generate1(){
    const B=new Map([
        [0,"b11"],
        [1,"b12"],
        [2,"b13"],
        [3,"b14"],
        [4,"b21"],
        [5,"b22"],
        [6,"b23"],
        [7,"b24"],
        [8,"b31"],
        [9,"b32"],
        [10,"b33"],
        [11,"b34"],
        [12,"b41"],
        [13,"b42"],
        [14,"b43"],
        [15,"b44"]
    ])
    let x=Math.floor((100*(Math.random()))%16);
    if(document.getElementById(B.get(x)).innerHTML!=0){
        let y=0;
            while(document.getElementById(B.get(x)).innerHTML!=0){
                x=(x+1)%16;
                y++;
                if(y>15){
                    for(let i=0;i<16;i++){
                        document.getElementById(B.get(i)).innerHTML=null;
                    }
                    alert('GAME OVER')
                    GameStarted.did=0;
                    break;
                }
                count_obj.count++;
            }
    }
    //console.log(count_obj.count);
    document.getElementById(B.get(x)).innerHTML=2;
    document.getElementById(B.get(x)).style.backgroundColor='#EEE4DA59';
}
function fun_left(){
    let button_list=[["b11","b12","b13","b14"],
             ["b21","b22","b23","b24"],
            ["b31","b32","b33","b34"],
            ["b41","b42","b43","b44"]];
    for(let i=0;i<4;i++){
        let a=document.getElementById(button_list[i][0]);
        let b=document.getElementById(button_list[i][1]);
        let c=document.getElementById(button_list[i][2]);
        let d=document.getElementById(button_list[i][3]);
        if(a.innerHTML==0&&b.innerHTML!=0&&c.innerHTML==0&&d.innerHTML==0){
            a.innerHTML=b.innerHTML;
            b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
        }
        if(a.innerHTML==0&&b.innerHTML==0&&c.innerHTML!=0&&d.innerHTML==0){
            a.innerHTML=c.innerHTML;
            b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
        }
        if(a.innerHTML==0&&b.innerHTML==0&&c.innerHTML==0&&d.innerHTML!=0){
            a.innerHTML=d.innerHTML;
            b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
        }
        if(a.innerHTML==0 && b.innerHTML==0 && c.innerHTML!=0 && d.innerHTML!=0){
            if(c.innerHTML!=d.innerHTML){
                a.innerHTML=c.innerHTML;
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
            }
        }
        if(a.innerHTML!=0 && b.innerHTML==0 && c.innerHTML!=0 && d.innerHTML!=0){
            if(a.innerHTML!=c.innerHTML&& c.innerHTML!=d.innerHTML){
                b.innerHTML=c.innerHTML;
                c.innerHTML=d.innerHTML;
                d.innerHTML="NaN";continue;
            }
        }
        if(d.innerHTML!=0 && c.innerHTML!=0 && b.innerHTML!=0 && a.innerHTML==0){
            if((d.innerHTML!=c.innerHTML)&&(c.innerHTML!=b.innerHTML)){
                a.innerHTML=b.innerHTML;
                b.innerHTML=c.innerHTML;
                c.innerHTML=d.innerHTML;
                d.innerHTML="NaN";
                continue;
            }
            if((c.innerHTML==b.innerHTML)&&(c.innerHTML!=d.innerHTML)){
                a.innerHTML=(parseInt(b.innerHTML)+parseInt(c.innerHTML)).toString();
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=Number(a.innerHTML);
                continue;
            }
            if((d.innerHTML==c.innerHTML)&&(c.innerHTML!=b.innerHTML)){
                a.innerHTML=b.innerHTML;
                b.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(b.innerHTML);
                continue;
            }
            if((d.innerHTML==c.innerHTML)&&(c.innerHTML==b.innerHTML)){
                a.innerHTML=(parseInt(c.innerHTML)+parseInt(b.innerHTML)).toString();
                b.innerHTML=c.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
        }
        if(a.innerHTML!=0 && b.innerHTML!=0 && c.innerHTML==0 && d.innerHTML!=0){
            if(a.innerHTML==b.innerHTML && b.innerHTML!=d.innerHTML){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
            if(b.innerHTML!=d.innerHTML){
                c.innerHTML=d.innerHTML;
                d.innerHTML="NaN";continue;
            }
        }
        if(a.innerHTML!=0 && b.innerHTML==0 && c.innerHTML==0 && d.innerHTML!=0){
            if(a.innerHTML!=d.innerHTML){
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";
                d.innerHTML="NaN";
            }
            if(a.innerHTML==d.innerHTML){
                if(a.innerHTML!=0){
                    a.innerHTML=(parseInt(a.innerHTML)+parseInt(d.innerHTML)).toString();
                    b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
            }
        }
        if(b.innerHTML!=0 && c.innerHTML!=0 && a.innerHTML==0 && d.innerHTML==0){
            if(b.innerHTML!=c.innerHTML){
                a.innerHTML=b.innerHTML;
                b.innerHTML=c.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
            }
        }
        if(a.innerHTML!=0 && c.innerHTML!=0 && b.innerHTML==0 && d.innerHTML==0){
            if(a.innerHTML!=c.innerHTML){
                b.innerHTML=c.innerHTML;c.innerHTML="NaN";
                d.innerHTML="NaN";
            }
        }
        if(a.innerHTML!=0 && d.innerHTML!=0 && c.innerHTML==0 && b.innerHTML==0){
            b.innerHTML=d.innerHTML;
            c.innerHTML="NaN";d.innerHTML="NaN";
        }
        if(c.innerHTML!=0 && d.innerHTML!=0 && a.innerHTML==0 && b.innerHTML==0){
            if(c.innerHTML!=d.innerHTML){
                a.innerHTML=c.innerHTML;b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
            }
        }
        if(a.innerHTML==b.innerHTML && c.innerHTML==d.innerHTML){
            if(a.innerHTML!=0&& b.innerHTML!=0&&c.innerHTML!=0&&d.innerHTML!=0){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                b.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);
                count_obj.ur_score+=parseInt(b.innerHTML);
                continue;
            }
        }
        if(b.innerHTML!=0 && d.innerHTML!=0 && a.innerHTML==0 && c.innerHTML==0){
            if(b.innerHTML==d.innerHTML){
                if(b.innerHTML!=0){
                a.innerHTML=(parseInt(b.innerHTML)+parseInt(d.innerHTML)).toString();
                b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
            }
            if(b.innerHTML!=d.innerHTML){
                a.innerHTML=b.innerHTML;
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";continue;
            }
        }
        if((a.innerHTML==b.innerHTML)){
            if(a.innerHTML!=0){
                if(c.innerHTML==0 && d.innerHTML==0){ 
                    a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                    b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(a.innerHTML);
                    console.log("inter score "+ count_obj.ur_score);
                    console.log(typeof(a.innerHTML)+" "+typeof(count_obj.ur_score));continue;
                }
                if(c.innerHTML!=0 && d.innerHTML==0){
                    a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                    b.innerHTML=c.innerHTML;
                    c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
                if(d.innerHTML!=0 && c.innerHTML==0){
                    a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                    b.innerHTML=d.innerHTML;
                    c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
                if(c.innerHTML!=0 && d.innerHTML!=0){
                    a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                    b.innerHTML=c.innerHTML;
                    c.innerHTML=d.innerHTML;
                    d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
        }
        }
        if(a.innerHTML==c.innerHTML){
            if(a.innerHTML!=0){
                if(b.innerHTML==0 && d.innerHTML==0){
                    a.innerHTML=(parseInt(a.innerHTML)+parseInt(c.innerHTML)).toString();
                    b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
                if(b.innerHTML==0 && d.innerHTML!=0){
                    a.innerHTML=(parseInt(a.innerHTML)+parseInt(c.innerHTML)).toString();
                    b.innerHTML=d.innerHTML;
                    c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
        }
        }
        if(b.innerHTML==d.innerHTML){
            if(b.innerHTML!=0){
                if(a.innerHTML!=0 && c.innerHTML==0){
                    b.innerHTML=(parseInt(b.innerHTML)+parseInt(d.innerHTML)).toString();
                    c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(b.innerHTML);
                    continue;
                }
                if(a.innerHTML==0 && c.innerHTML==0){
                    a.innerHTML=(parseInt(b.innerHTML)+parseInt(d.innerHTML)).toString();
                    b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(a.innerHTML);
                    continue;
                }
        }
        }
        if(b.innerHTML==c.innerHTML){
            if(b.innerHTML!="NaN" && b.innerHTML!=0){
                if(a.innerHTML==0 && d.innerHTML==0){
                    a.innerHTML=(parseInt((b.innerHTML))+parseInt((c.innerHTML))).toString();
                    b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
                if(a.innerHTML!=0 && d.innerHTML==0 ||(a.innerHTML!=0 && d.innerHTML=="NaN")){
                    b.innerHTML=(parseInt((b.innerHTML))+parseInt((c.innerHTML))).toString();
                    c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(b.innerHTML);
                    continue;
                }
                if(a.innerHTML!=0 && d.innerHTML!=0){
                    b.innerHTML=(parseInt(b.innerHTML)+parseInt(c.innerHTML)).toString();
                    c.innerHTML=d.innerHTML;d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(b.innerHTML);continue;
                }
                if(a.innerHTML==0&&d.innerHTML!=0){
                    a.innerHTML=(parseInt((b.innerHTML))+parseInt((c.innerHTML))).toString();
                    b.innerHTML=d.innerHTML;c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
            }
        }
        if(c.innerHTML==d.innerHTML){
            if(c.innerHTML!="NaN" && c.innerHTML!=0){
                if(a.innerHTML!=0){
                    if(b.innerHTML!=0){
                        c.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                        d.innerHTML="NaN";
                        count_obj.ur_score+=parseInt(c.innerHTML);continue;
                    }
                    if(b.innerHTML==0){
                        b.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                        c.innerHTML="NaN";d.innerHTML="NaN";
                        count_obj.ur_score+=parseInt(b.innerHTML);continue;
                    }
                }
                if(a.innerHTML==0){
                    if(b.innerHTML!=0){
                        a.innerHTML=b.innerHTML;
                        b.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                        c.innerHTML="NaN";d.innerHTML="NaN";
                        count_obj.ur_score+=parseInt(b.innerHTML);continue;
                    }
                    if(b.innerHTML==0){
                        a.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                        b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                        count_obj.ur_score+=parseInt(a.innerHTML);continue;
                    }
                }
            }
        }
    }
    let y=NaN;
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(((document.getElementById(button_list[i][j]).innerHTML)=="NaN")){
                document.getElementById(button_list[i][j]).innerHTML=null;
                document.getElementById(button_list[i][j]).style.Color=color_set.button_color;
                document.getElementById(button_list[i][j]).style.backgroundColor=color_set.button_color;
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==2){
                document.getElementById(button_list[i][j]).style.backgroundColor='#EEE4DA59';
                document.getElementById(button_list[i][j]).style.Color='#BBADA0';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==4){
                document.getElementById(button_list[i][j]).style.backgroundColor='#EEE1C9';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==8){
                document.getElementById(button_list[i][j]).style.backgroundColor='#F3B27A';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==16){
                document.getElementById(button_list[i][j]).style.backgroundColor='#F69664';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==32){
                document.getElementById(button_list[i][j]).style.backgroundColor='#F77C5F';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==64){
                document.getElementById(button_list[i][j]).style.backgroundColor='#F75F3B';
                document.getElementById(button_list[i][j]).style.Color='white';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==128){
                document.getElementById(button_list[i][j]).style.backgroundColor='#EDD073';
                document.getElementById(button_list[i][j]).style.Color='white';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==256){
                document.getElementById(button_list[i][j]).style.backgroundColor='lightblue';
                document.getElementById(button_list[i][j]).style.Color='white';
            }
            else{
                document.getElementById(button_list[i][j]).innerHTML=null;
            }
        }
    }
    count_obj.ur_score=parseInt(count_obj.ur_score);        
    console.log("your score "+parseInt(count_obj.ur_score));
    document.getElementById("score").innerHTML=count_obj.ur_score;
    if(count_obj.high_score<count_obj.ur_score){
        count_obj.high_score=count_obj.ur_score;
        document.getElementById("high_score").innerHTML=count_obj.ur_score;
        localStorage.setItem("high",count_obj.high_score);
    }
    setTimeout(function(){
        generate1();
    },500);
}
function fun_right(){
    let button_list=[["b11","b12","b13","b14"],
             ["b21","b22","b23","b24"],
            ["b31","b32","b33","b34"],
            ["b41","b42","b43","b44"]];
    for(let i=0;i<4;i++){
        let a=document.getElementById(button_list[i][3]);
        let b=document.getElementById(button_list[i][2]);
        let c=document.getElementById(button_list[i][1]);
        let d=document.getElementById(button_list[i][0]);
        if(a.innerHTML==0&&b.innerHTML!=0&&c.innerHTML==0&&d.innerHTML==0){
            a.innerHTML=b.innerHTML;
            b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
        }
        if(a.innerHTML==0&&b.innerHTML==0&&c.innerHTML!=0&&d.innerHTML==0){
            a.innerHTML=c.innerHTML;
            b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
        }
        if(a.innerHTML==0&&b.innerHTML==0&&c.innerHTML==0&&d.innerHTML!=0){
            a.innerHTML=d.innerHTML;
            b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
        }
        if(a.innerHTML==0 && b.innerHTML==0 && c.innerHTML!=0 && d.innerHTML!=0){
            if(c.innerHTML!=d.innerHTML){
                a.innerHTML=c.innerHTML;
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
            }
        }
        if(a.innerHTML!=0 && b.innerHTML==0 && c.innerHTML!=0 && d.innerHTML!=0){
            if(a.innerHTML!=c.innerHTML&& c.innerHTML!=d.innerHTML){
                b.innerHTML=c.innerHTML;
                c.innerHTML=d.innerHTML;
                d.innerHTML="NaN";continue;
            }
        }
        if(d.innerHTML!=0 && c.innerHTML!=0 && b.innerHTML!=0 && a.innerHTML==0){
            if((d.innerHTML!=c.innerHTML)&&(c.innerHTML!=b.innerHTML)){
                a.innerHTML=b.innerHTML;
                b.innerHTML=c.innerHTML;
                c.innerHTML=d.innerHTML;
                d.innerHTML="NaN";
                continue;
            }
            if((c.innerHTML==b.innerHTML)&&(c.innerHTML!=d.innerHTML)){
                a.innerHTML=(parseInt(b.innerHTML)+parseInt(c.innerHTML)).toString();
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=Number(a.innerHTML);
                continue;
            }
            if((d.innerHTML==c.innerHTML)&&(c.innerHTML!=b.innerHTML)){
                a.innerHTML=b.innerHTML;
                b.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(b.innerHTML);
                continue;
            }
            if((d.innerHTML==c.innerHTML)&&(c.innerHTML==b.innerHTML)){
                a.innerHTML=(parseInt(c.innerHTML)+parseInt(b.innerHTML)).toString();
                b.innerHTML=c.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
        }
        if(a.innerHTML!=0 && b.innerHTML!=0 && c.innerHTML==0 && d.innerHTML!=0){
            if(a.innerHTML==b.innerHTML && b.innerHTML!=d.innerHTML){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
            if(b.innerHTML!=d.innerHTML){
                c.innerHTML=d.innerHTML;
                d.innerHTML="NaN";continue;
            }
        }
        if(a.innerHTML!=0 && b.innerHTML==0 && c.innerHTML==0 && d.innerHTML!=0){
            if(a.innerHTML!=d.innerHTML){
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";
                d.innerHTML="NaN";
            }
            if(a.innerHTML==d.innerHTML){
                if(a.innerHTML!=0){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(d.innerHTML)).toString();
                b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
            }
        }
        if(a.innerHTML!=0 && c.innerHTML!=0 && b.innerHTML==0 && d.innerHTML==0){
            if(a.innerHTML!=c.innerHTML){
            b.innerHTML=c.innerHTML;c.innerHTML="NaN";
            d.innerHTML="NaN";}
        }
        if(a.innerHTML!=0 && d.innerHTML!=0 && c.innerHTML==0 && b.innerHTML==0){
            b.innerHTML=d.innerHTML;
            c.innerHTML="NaN";d.innerHTML="NaN";
        }
        if(c.innerHTML!=0 && d.innerHTML!=0 && a.innerHTML==0 && b.innerHTML==0){
            if(c.innerHTML!=d.innerHTML){
                a.innerHTML=c.innerHTML;b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
            }
        }
        if(a.innerHTML==b.innerHTML && c.innerHTML==d.innerHTML){
            if(a.innerHTML!=0&& b.innerHTML!=0&&c.innerHTML!=0&&d.innerHTML!=0){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                b.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);
                count_obj.ur_score+=parseInt(b.innerHTML);
                continue;
            }
        }
        if(b.innerHTML!=0 && c.innerHTML!=0 && a.innerHTML==0 && d.innerHTML==0){
            if(b.innerHTML!=c.innerHTML){
                a.innerHTML=b.innerHTML;
                b.innerHTML=c.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
            }
        }
        if(b.innerHTML!=0 && d.innerHTML!=0 && a.innerHTML==0 && c.innerHTML==0){
            if(b.innerHTML==d.innerHTML){
                if(b.innerHTML!=0){
                a.innerHTML=(parseInt(b.innerHTML)+parseInt(d.innerHTML)).toString();
                b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
            }
            if(b.innerHTML!=d.innerHTML){
                a.innerHTML=b.innerHTML;
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";continue;
            }
        }
        if((a.innerHTML==b.innerHTML)){
            if(a.innerHTML!=0 && a.innerHTML!="NaN"){
                if(c.innerHTML==0 && d.innerHTML==0){ 
                    a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                    b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(a.innerHTML);
                    console.log("inter score "+ count_obj.ur_score);
                    console.log(typeof(a.innerHTML)+" "+typeof(count_obj.ur_score));continue;
                    }
                if(c.innerHTML!=0 && d.innerHTML==0){
                    a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                    b.innerHTML=c.innerHTML;
                    c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
                if(d.innerHTML!=0 && c.innerHTML==0){
                    a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                    b.innerHTML=d.innerHTML;
                    c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
                if(c.innerHTML!=0 && d.innerHTML!=0){
                    a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                    b.innerHTML=c.innerHTML;
                    c.innerHTML=d.innerHTML;
                    d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
        }
        }
        if(a.innerHTML==c.innerHTML){
            if(a.innerHTML!=0 && a.innerHTML!="NaN"){
            if(b.innerHTML==0&& d.innerHTML==0){
                 a.innerHTML=(parseInt(a.innerHTML)+parseInt(c.innerHTML)).toString();
                 b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                 count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
            if(b.innerHTML==0&&d.innerHTML!=0){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(c.innerHTML)).toString();
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
        }
        }
        if(b.innerHTML==d.innerHTML){
            if(b.innerHTML!=0 && b.innerHTML!="NaN"){
            if(a.innerHTML!=0&&c.innerHTML==0){
                b.innerHTML=(parseInt(b.innerHTML)+parseInt(d.innerHTML)).toString();
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(b.innerHTML);
                continue;
            }
            if(a.innerHTML==0 && c.innerHTML==0){
                a.innerHTML=(parseInt(b.innerHTML)+parseInt(d.innerHTML)).toString();
                b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);
                continue;
            }
        }
        }
        if(b.innerHTML==c.innerHTML){
            if(b.innerHTML!="NaN" && b.innerHTML!=0){
            if(a.innerHTML==0 && d.innerHTML==0){
                a.innerHTML=(parseInt((b.innerHTML))+parseInt((c.innerHTML))).toString();
                b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
            if(a.innerHTML!=0 && d.innerHTML==0 ||(a.innerHTML!=0 && d.innerHTML=="NaN")){
                b.innerHTML=(parseInt((b.innerHTML))+parseInt((c.innerHTML))).toString();
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(b.innerHTML);
                continue;
            }
            if(a.innerHTML!=0 && d.innerHTML!=0){
                b.innerHTML=(parseInt(b.innerHTML)+parseInt(c.innerHTML)).toString();
                c.innerHTML=d.innerHTML;d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(b.innerHTML);continue;
            }
            if(a.innerHTML==0&&d.innerHTML!=0){
                a.innerHTML=(parseInt((b.innerHTML))+parseInt((c.innerHTML))).toString();
                b.innerHTML=d.innerHTML;c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
            }
        }
        if(c.innerHTML==d.innerHTML){
            if(c.innerHTML!="NaN" && c.innerHTML!=0){
            if(a.innerHTML!=0){
                if(b.innerHTML!=0){
                    c.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                    d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(c.innerHTML);continue;
                }
                if(b.innerHTML==0){
                    b.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                    c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(b.innerHTML);continue;
                }
            }
            if(a.innerHTML==0){
                if(b.innerHTML!=0){
                    a.innerHTML=b.innerHTML;
                    b.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                    c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(b.innerHTML);continue;
                }
                if(b.innerHTML==0){
                    a.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                    b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
            }
        }
    }
    }
    let y=NaN;
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
           if((document.getElementById(button_list[i][j]).innerHTML)=="NaN"){
                document.getElementById(button_list[i][j]).innerHTML=null;
                document.getElementById(button_list[i][j]).style.backgroundColor=color_set.button_color;                
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==2){
                document.getElementById(button_list[i][j]).style.backgroundColor='#EEE4DA59';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==4){
                document.getElementById(button_list[i][j]).style.backgroundColor='#EEE1C9';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==8){
                document.getElementById(button_list[i][j]).style.backgroundColor='#F3B27A';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==16){
                document.getElementById(button_list[i][j]).style.backgroundColor='#F69664';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==32){
                document.getElementById(button_list[i][j]).style.backgroundColor='#F77C5F';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==64){
                document.getElementById(button_list[i][j]).style.backgroundColor='#F75F3B';
                document.getElementById(button_list[i][j]).style.Color='white';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==128){
                document.getElementById(button_list[i][j]).style.backgroundColor='#EDD073';
                document.getElementById(button_list[i][j]).style.Color='white';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==256){
                document.getElementById(button_list[i][j]).style.backgroundColor='lightblue';
                document.getElementById(button_list[i][j]).style.Color='white';
            }
        }
    }
    count_obj.ur_score=parseInt(count_obj.ur_score);        
    console.log("your score "+parseInt(count_obj.ur_score));
    document.getElementById("score").innerHTML=count_obj.ur_score;
    if(count_obj.high_score<count_obj.ur_score){
        count_obj.high_score=count_obj.ur_score;
        document.getElementById("high_score").innerHTML=count_obj.ur_score;
        localStorage.setItem("high",count_obj.high_score);
    }
    setTimeout(function(){
        generate1();
    },500);
}
function fun_up(){
    let button_list=[["b11","b12","b13","b14"],
             ["b21","b22","b23","b24"],
            ["b31","b32","b33","b34"],
            ["b41","b42","b43","b44"]];
    for(let i=0;i<4;i++){
        let a=document.getElementById(button_list[0][i]);
        let b=document.getElementById(button_list[1][i]);
        let c=document.getElementById(button_list[2][i]);
        let d=document.getElementById(button_list[3][i]);
        if(a.innerHTML==0&&b.innerHTML!=0&&c.innerHTML==0&&d.innerHTML==0){
            a.innerHTML=b.innerHTML;
            b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
        }
        if(a.innerHTML==0&&b.innerHTML==0&&c.innerHTML!=0&&d.innerHTML==0){
            a.innerHTML=c.innerHTML;
            b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
        }
        if(a.innerHTML==0&&b.innerHTML==0&&c.innerHTML==0&&d.innerHTML!=0){
            a.innerHTML=d.innerHTML;
            b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
        }
        if(a.innerHTML==0 && b.innerHTML==0 && c.innerHTML!=0 && d.innerHTML!=0){
            if(c.innerHTML!=d.innerHTML){
                a.innerHTML=c.innerHTML;
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
            }
        }
        if(a.innerHTML!=0 && b.innerHTML==0 && c.innerHTML!=0 && d.innerHTML!=0){
            if(a.innerHTML!=c.innerHTML&& c.innerHTML!=d.innerHTML){
            b.innerHTML=c.innerHTML;
            c.innerHTML=d.innerHTML;
            d.innerHTML="NaN";continue;}
        }
        if(d.innerHTML!=0 && c.innerHTML!=0 && b.innerHTML!=0 && a.innerHTML==0){
            if((d.innerHTML!=c.innerHTML)&&(c.innerHTML!=b.innerHTML)){
                a.innerHTML=b.innerHTML;
                b.innerHTML=c.innerHTML;
                c.innerHTML=d.innerHTML;
                d.innerHTML="NaN";
                continue;
            }
            if((c.innerHTML==b.innerHTML)&&(c.innerHTML!=d.innerHTML)){
                a.innerHTML=(parseInt(b.innerHTML)+parseInt(c.innerHTML)).toString();
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=Number(a.innerHTML);
                continue;
            }
            if((d.innerHTML==c.innerHTML)&&(c.innerHTML!=b.innerHTML)){
                a.innerHTML=b.innerHTML;
                b.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(b.innerHTML);
                continue;
            }
            if((d.innerHTML==c.innerHTML)&&(c.innerHTML==b.innerHTML)){
                a.innerHTML=(parseInt(c.innerHTML)+parseInt(b.innerHTML)).toString();
                b.innerHTML=c.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
        }
        if(a.innerHTML!=0 && b.innerHTML!=0 && c.innerHTML==0 && d.innerHTML!=0){
            if(a.innerHTML==b.innerHTML && b.innerHTML!=d.innerHTML){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
            if(b.innerHTML!=d.innerHTML){
                c.innerHTML=d.innerHTML;
                d.innerHTML="NaN";continue;
            }
        }
        if(b.innerHTML!=0 && c.innerHTML!=0 && a.innerHTML==0 && d.innerHTML==0){
            if(b.innerHTML!=c.innerHTML){
                a.innerHTML=b.innerHTML;
                b.innerHTML=c.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
            }
        }
        if(a.innerHTML!=0 && b.innerHTML==0 && c.innerHTML==0 && d.innerHTML!=0){
            if(a.innerHTML!=d.innerHTML){
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";
                d.innerHTML="NaN";
            }
            if(a.innerHTML==d.innerHTML){
                if(a.innerHTML!=0){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(d.innerHTML)).toString();
                b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
            }
        }
        if(a.innerHTML!=0 && c.innerHTML!=0 && b.innerHTML==0 && d.innerHTML==0){
            if(a.innerHTML!=c.innerHTML){
            b.innerHTML=c.innerHTML;c.innerHTML="NaN";
            d.innerHTML="NaN";}
        }
        if(a.innerHTML!=0 && d.innerHTML!=0 && c.innerHTML==0 && b.innerHTML==0){
            b.innerHTML=d.innerHTML;
            c.innerHTML="NaN";d.innerHTML="NaN";
        }
        if(c.innerHTML!=0 && d.innerHTML!=0 && a.innerHTML==0 && b.innerHTML==0){
            if(c.innerHTML!=d.innerHTML){
                a.innerHTML=c.innerHTML;b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
            }
        }
        if(a.innerHTML==b.innerHTML && c.innerHTML==d.innerHTML){
            if(a.innerHTML!=0&& b.innerHTML!=0&&c.innerHTML!=0&&d.innerHTML!=0){
            a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
            b.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
            c.innerHTML="NaN";d.innerHTML="NaN";
            count_obj.ur_score+=parseInt(a.innerHTML);
            count_obj.ur_score+=parseInt(b.innerHTML);
            continue;
            }
        }
        if(b.innerHTML!=0 && d.innerHTML!=0 && a.innerHTML==0 && c.innerHTML==0){
            if(b.innerHTML==d.innerHTML){
                if(b.innerHTML!=0){
                a.innerHTML=(parseInt(b.innerHTML)+parseInt(d.innerHTML)).toString();
                b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
            }
            if(b.innerHTML!=d.innerHTML){
                a.innerHTML=b.innerHTML;
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";continue;
            }
        }
        if((a.innerHTML==b.innerHTML)){
            if(a.innerHTML!=0){
           if(c.innerHTML==0 && d.innerHTML==0){ 
            a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
            b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
            count_obj.ur_score+=parseInt(a.innerHTML);
            console.log("inter score "+ count_obj.ur_score);
            console.log(typeof(a.innerHTML)+" "+typeof(count_obj.ur_score));continue;
            }
            if(c.innerHTML!=0 && d.innerHTML==0){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                b.innerHTML=c.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
            if(d.innerHTML!=0 && c.innerHTML==0){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
            if(c.innerHTML!=0 && d.innerHTML!=0){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                b.innerHTML=c.innerHTML;
                c.innerHTML=d.innerHTML;
                d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
        }
        }
        if(a.innerHTML==c.innerHTML){
            if(a.innerHTML!=0){
            if(b.innerHTML==0&& d.innerHTML==0){
                 a.innerHTML=(parseInt(a.innerHTML)+parseInt(c.innerHTML)).toString();
                 b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                 count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
            if(b.innerHTML==0&&d.innerHTML!=0){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(c.innerHTML)).toString();
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
        }
        }
        if(b.innerHTML==d.innerHTML){
            if(b.innerHTML!=0){
            if(a.innerHTML!=0&&c.innerHTML==0){
                b.innerHTML=(parseInt(b.innerHTML)+parseInt(d.innerHTML)).toString();
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(b.innerHTML);
                continue;
            }
            if(a.innerHTML==0 && c.innerHTML==0){
                a.innerHTML=(parseInt(b.innerHTML)+parseInt(d.innerHTML)).toString();
                b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);
                continue;
            }
        }
        }
        if(b.innerHTML==c.innerHTML){
            if(b.innerHTML!="NaN" && b.innerHTML!=0){
            if(a.innerHTML==0 && d.innerHTML==0){
                a.innerHTML=(parseInt((b.innerHTML))+parseInt((c.innerHTML))).toString();
                b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
            if(a.innerHTML!=0 && d.innerHTML==0 ||(a.innerHTML!=0 && d.innerHTML=="NaN")){
                b.innerHTML=(parseInt((b.innerHTML))+parseInt((c.innerHTML))).toString();
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(b.innerHTML);
                continue;
            }
            if(a.innerHTML!=0 && d.innerHTML!=0){
                b.innerHTML=(parseInt(b.innerHTML)+parseInt(c.innerHTML)).toString();
                c.innerHTML=d.innerHTML;d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(b.innerHTML);continue;
            }
            if(a.innerHTML==0&&d.innerHTML!=0){
                a.innerHTML=(parseInt((b.innerHTML))+parseInt((c.innerHTML))).toString();
                b.innerHTML=d.innerHTML;c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
            }
        }
        if(c.innerHTML==d.innerHTML){
            if(c.innerHTML!="NaN" && c.innerHTML!=0){
                if(a.innerHTML!=0){
                    if(b.innerHTML!=0){
                        c.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                        d.innerHTML="NaN";
                        count_obj.ur_score+=parseInt(c.innerHTML);continue;
                    }
                    if(b.innerHTML==0){
                        b.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                        c.innerHTML="NaN";d.innerHTML="NaN";
                        count_obj.ur_score+=parseInt(b.innerHTML);continue;
                    }
                }
                if(a.innerHTML==0){
                    if(b.innerHTML!=0){
                        a.innerHTML=b.innerHTML;
                        b.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                        c.innerHTML="NaN";d.innerHTML="NaN";
                        count_obj.ur_score+=parseInt(b.innerHTML);continue;
                    }
                    if(b.innerHTML==0){
                        a.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                        b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                        count_obj.ur_score+=parseInt(a.innerHTML);continue;
                    }
                }
        }
    }
    }
    let y=NaN;
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
             if((document.getElementById(button_list[i][j]).innerHTML)=="NaN"){
                document.getElementById(button_list[i][j]).innerHTML=null;
                document.getElementById(button_list[i][j]).style.backgroundColor=color_set.button_color;
             }
             else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==2){
                document.getElementById(button_list[i][j]).style.backgroundColor='#EEE4DA59';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==4){
                document.getElementById(button_list[i][j]).style.backgroundColor='#EEE1C9';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==8){
                document.getElementById(button_list[i][j]).style.backgroundColor='#F3B27A';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==16){
                document.getElementById(button_list[i][j]).style.backgroundColor='#F69664';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==32){
                document.getElementById(button_list[i][j]).style.backgroundColor='#F77C5F';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==64){
                document.getElementById(button_list[i][j]).style.backgroundColor='#F75F3B';
                document.getElementById(button_list[i][j]).style.Color='white';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==128){
                document.getElementById(button_list[i][j]).style.backgroundColor='#EDD073';
                document.getElementById(button_list[i][j]).style.Color='white';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==256){
                document.getElementById(button_list[i][j]).style.backgroundColor='lightblue';
                document.getElementById(button_list[i][j]).style.Color='white';
            }
        }
    }
    count_obj.ur_score=parseInt(count_obj.ur_score);        
    console.log("your score "+parseInt(count_obj.ur_score));
    document.getElementById("score").innerHTML=count_obj.ur_score;
    if(count_obj.high_score<count_obj.ur_score){
        count_obj.high_score=count_obj.ur_score;
        document.getElementById("high_score").innerHTML=count_obj.ur_score;
        localStorage.setItem("high",count_obj.high_score);
    }
    setTimeout(function(){
        generate1();
    },500);
}
function fun_bottom(){
    let button_list=[["b11","b12","b13","b14"],
             ["b21","b22","b23","b24"],
            ["b31","b32","b33","b34"],
            ["b41","b42","b43","b44"]];
    for(let i=0;i<4;i++){
        let a=document.getElementById(button_list[3][i]);
        let b=document.getElementById(button_list[2][i]);
        let c=document.getElementById(button_list[1][i]);
        let d=document.getElementById(button_list[0][i]);
        if(a.innerHTML==0&&b.innerHTML!=0&&c.innerHTML==0&&d.innerHTML==0){
            a.innerHTML=b.innerHTML;
            b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
        }
        if(a.innerHTML==0&&b.innerHTML==0&&c.innerHTML!=0&&d.innerHTML==0){
            a.innerHTML=c.innerHTML;
            b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
        }
        if(a.innerHTML==0&&b.innerHTML==0&&c.innerHTML==0&&d.innerHTML!=0){
            a.innerHTML=d.innerHTML;
            b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
        }
        if(a.innerHTML==0 && b.innerHTML==0 && c.innerHTML!=0 && d.innerHTML!=0){
            if(c.innerHTML!=d.innerHTML){
                a.innerHTML=c.innerHTML;
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
            }
        }
        if(b.innerHTML!=0 && c.innerHTML!=0 && a.innerHTML==0 && d.innerHTML==0){
            if(b.innerHTML!=c.innerHTML){
                a.innerHTML=b.innerHTML;
                b.innerHTML=c.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
            }
        }
        if(a.innerHTML!=0 && b.innerHTML==0 && c.innerHTML!=0 && d.innerHTML!=0){
            if(a.innerHTML!=c.innerHTML&& c.innerHTML!=d.innerHTML){
            b.innerHTML=c.innerHTML;
            c.innerHTML=d.innerHTML;
            d.innerHTML="NaN";continue;}
        }
        if(d.innerHTML!=0 && c.innerHTML!=0 && b.innerHTML!=0 && a.innerHTML==0){
            if((d.innerHTML!=c.innerHTML)&&(c.innerHTML!=b.innerHTML)){
                a.innerHTML=b.innerHTML;
                b.innerHTML=c.innerHTML;
                c.innerHTML=d.innerHTML;
                d.innerHTML="NaN";
                continue;
            }
            if((c.innerHTML==b.innerHTML)&&(c.innerHTML!=d.innerHTML)){
                a.innerHTML=(parseInt(b.innerHTML)+parseInt(c.innerHTML)).toString();
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=Number(a.innerHTML);
                continue;
            }
            if((d.innerHTML==c.innerHTML)&&(c.innerHTML!=b.innerHTML)){
                a.innerHTML=b.innerHTML;
                b.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(b.innerHTML);
                continue;
            }
            if((d.innerHTML==c.innerHTML)&&(c.innerHTML==b.innerHTML)){
                a.innerHTML=(parseInt(c.innerHTML)+parseInt(b.innerHTML)).toString();
                b.innerHTML=c.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
        }
        if(a.innerHTML!=0 && b.innerHTML!=0 && c.innerHTML==0 && d.innerHTML!=0){
            if(a.innerHTML==b.innerHTML && b.innerHTML!=d.innerHTML){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
            if(b.innerHTML!=d.innerHTML){
                c.innerHTML=d.innerHTML;
                d.innerHTML="NaN";continue;
            }
        }
        if(a.innerHTML!=0 && b.innerHTML==0 && c.innerHTML==0 && d.innerHTML!=0){
            if(a.innerHTML!=d.innerHTML){
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";
                d.innerHTML="NaN";
            }
            if(a.innerHTML==d.innerHTML){
                if(a.innerHTML!=0){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(d.innerHTML)).toString();
                b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
            }
        }
        if(a.innerHTML!=0 && c.innerHTML!=0 && b.innerHTML==0 && d.innerHTML==0){
            if(a.innerHTML!=c.innerHTML){
            b.innerHTML=c.innerHTML;c.innerHTML="NaN";
            d.innerHTML="NaN";}
        }
        if(a.innerHTML!=0 && d.innerHTML!=0 && c.innerHTML==0 && b.innerHTML==0){
            b.innerHTML=d.innerHTML;
            c.innerHTML="NaN";d.innerHTML="NaN";
        }
        if(c.innerHTML!=0 && d.innerHTML!=0 && a.innerHTML==0 && b.innerHTML==0){
            if(c.innerHTML!=d.innerHTML){
                a.innerHTML=c.innerHTML;b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
            }
        }
        if(a.innerHTML==b.innerHTML && c.innerHTML==d.innerHTML){
            if(a.innerHTML!=0&& b.innerHTML!=0&&c.innerHTML!=0&&d.innerHTML!=0){
            a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
            b.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
            c.innerHTML="NaN";d.innerHTML="NaN";
            count_obj.ur_score+=parseInt(a.innerHTML);
            count_obj.ur_score+=parseInt(b.innerHTML);
            continue;
            }
        }
        if(b.innerHTML!=0 && d.innerHTML!=0 && a.innerHTML==0 && c.innerHTML==0){
            if(b.innerHTML==d.innerHTML){
                if(b.innerHTML!=0){
                a.innerHTML=(parseInt(b.innerHTML)+parseInt(d.innerHTML)).toString();
                b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
            }
            if(b.innerHTML!=d.innerHTML){
                a.innerHTML=b.innerHTML;
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";continue;
            }
        }
        if((a.innerHTML==b.innerHTML)){
            if(a.innerHTML!=0){
            if(c.innerHTML==0 && d.innerHTML==0){ 
            a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
            b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
            count_obj.ur_score+=parseInt(a.innerHTML);
            console.log("inter score "+ count_obj.ur_score);
            console.log(typeof(a.innerHTML)+" "+typeof(count_obj.ur_score));continue;
            }
            if(c.innerHTML!=0 && d.innerHTML==0){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                b.innerHTML=c.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
            if(d.innerHTML!=0 && c.innerHTML==0){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
            if(c.innerHTML!=0 && d.innerHTML!=0){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(b.innerHTML)).toString();
                b.innerHTML=c.innerHTML;
                c.innerHTML=d.innerHTML;
                d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
        }
        }
        if(a.innerHTML==c.innerHTML){
            if(a.innerHTML!=0){
            if(b.innerHTML==0&& d.innerHTML==0){
                 a.innerHTML=(parseInt(a.innerHTML)+parseInt(c.innerHTML)).toString();
                 b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                 count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
            if(b.innerHTML==0&&d.innerHTML!=0){
                a.innerHTML=(parseInt(a.innerHTML)+parseInt(c.innerHTML)).toString();
                b.innerHTML=d.innerHTML;
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
        }
        }
        if(b.innerHTML==d.innerHTML){
            if(b.innerHTML!=0){
            if(a.innerHTML!=0&&c.innerHTML==0){
                b.innerHTML=(parseInt(b.innerHTML)+parseInt(d.innerHTML)).toString();
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(b.innerHTML);
                continue;
            }
            if(a.innerHTML==0 && c.innerHTML==0){
                a.innerHTML=(parseInt(b.innerHTML)+parseInt(d.innerHTML)).toString();
                b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);
                continue;
            }
        }
        }
        if(b.innerHTML==c.innerHTML){
            if(b.innerHTML!="NaN" && b.innerHTML!=0){
            if(a.innerHTML==0 && d.innerHTML==0){
                a.innerHTML=(parseInt((b.innerHTML))+parseInt((c.innerHTML))).toString();
                b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
            if(a.innerHTML!=0 && d.innerHTML==0 ||(a.innerHTML!=0 && d.innerHTML=="NaN")){
                b.innerHTML=(parseInt((b.innerHTML))+parseInt((c.innerHTML))).toString();
                c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(b.innerHTML);
                continue;
            }
            if(a.innerHTML!=0 && d.innerHTML!=0){
                b.innerHTML=(parseInt(b.innerHTML)+parseInt(c.innerHTML)).toString();
                c.innerHTML=d.innerHTML;d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(b.innerHTML);continue;
            }
            if(a.innerHTML==0&&d.innerHTML!=0){
                a.innerHTML=(parseInt((b.innerHTML))+parseInt((c.innerHTML))).toString();
                b.innerHTML=d.innerHTML;c.innerHTML="NaN";d.innerHTML="NaN";
                count_obj.ur_score+=parseInt(a.innerHTML);continue;
            }
            }
        }
        if(c.innerHTML==d.innerHTML){
            if(c.innerHTML!="NaN" && c.innerHTML!=0){
                if(a.innerHTML!=0){
                    if(b.innerHTML!=0){
                        c.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                        d.innerHTML="NaN";
                        count_obj.ur_score+=parseInt(c.innerHTML);continue;
                    }
                    if(b.innerHTML==0){
                        b.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                        c.innerHTML="NaN";d.innerHTML="NaN";
                        count_obj.ur_score+=parseInt(b.innerHTML);continue;
                    }
                }
                if(a.innerHTML==0){
                    if(b.innerHTML!=0){
                        a.innerHTML=b.innerHTML;
                        b.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                        c.innerHTML="NaN";d.innerHTML="NaN";
                        count_obj.ur_score+=parseInt(b.innerHTML);continue;
                    }
                if(b.innerHTML==0){
                    a.innerHTML=(parseInt(c.innerHTML)+parseInt(d.innerHTML)).toString();
                    b.innerHTML="NaN";c.innerHTML="NaN";d.innerHTML="NaN";
                    count_obj.ur_score+=parseInt(a.innerHTML);continue;
                }
            }
        }
    }
    }
    let y=NaN;
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
             if((document.getElementById(button_list[i][j]).innerHTML)=="NaN"){
                document.getElementById(button_list[i][j]).innerHTML=null;
                document.getElementById(button_list[i][j]).style.backgroundColor=color_set.button_color;
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==2){
                document.getElementById(button_list[i][j]).style.backgroundColor='#EEE4DA59';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==4){
                document.getElementById(button_list[i][j]).style.backgroundColor='#EEE1C9';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==8){
                document.getElementById(button_list[i][j]).style.backgroundColor='#F3B27A';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==16){
                document.getElementById(button_list[i][j]).style.backgroundColor='#F69664';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==32){
                document.getElementById(button_list[i][j]).style.backgroundColor='#F77C5F';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==64){
                document.getElementById(button_list[i][j]).style.backgroundColor='#F75F3B';
                document.getElementById(button_list[i][j]).style.Color='white';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==128){
                document.getElementById(button_list[i][j]).style.backgroundColor='#EDD073';
                document.getElementById(button_list[i][j]).style.Color='white';
            }
            else if(parseInt(document.getElementById(button_list[i][j]).innerHTML)==256){
                document.getElementById(button_list[i][j]).style.backgroundColor='lightblue';
            }
        }
    }
    count_obj.ur_score=parseInt(count_obj.ur_score);        
    console.log("your score "+parseInt(count_obj.ur_score));
    document.getElementById("score").innerHTML=count_obj.ur_score;
    if(count_obj.high_score<count_obj.ur_score){
        count_obj.high_score=count_obj.ur_score;
        document.getElementById("high_score").innerHTML=count_obj.ur_score;
        localStorage.setItem("high",count_obj.high_score);
    }
    setTimeout(function(){
        generate1();
    },500);
}
localStorage.setItem("high_score",ur_score);
console.log(high_score);
document.getElementById('high_score').value=localStorage.getItem("high_score");