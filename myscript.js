var e=[];
var i=[];
var s=[];
var n=[];
var t=[];
var f=[];
var j=[];
var p=[];
var MBTI=[];

//문제 관련 함수

function next_Q2(){
    var con=document.getElementById("dis");
    var tents=document.getElementById("dis0");
    con.style.display='block';
    tents.style.display='none';
    
}
function next_Q3(){
    var con=document.getElementById("dis");
    var tents=document.getElementById("dis1");
    con.style.display='none';
    tents.style.display='block';
    
}
function next_Q4(){
    var con=document.getElementById("dis1");
    var tents=document.getElementById("dis2");
    con.style.display='none';
    tents.style.display='block';
}
function next_Q5(){
    var con=document.getElementById("dis2");
    var tents=document.getElementById("dis3");
    con.style.display='none';
    tents.style.display='block';
}
function next_Q6(){
    var con=document.getElementById("dis3");
    var tents=document.getElementById("dis4");
    con.style.display='none';
    tents.style.display='block';
   
}
function next_Q7(){
    var con=document.getElementById("dis4");
    var tents=document.getElementById("dis5");
    con.style.display='none';
    tents.style.display='block';
   
}
function next_Q8(){
    var con=document.getElementById("dis5");
    var tents=document.getElementById("dis6");
    con.style.display='none';
    tents.style.display='block';
   
}
function next_Q9(){
    var con=document.getElementById("dis6");
    var tents=document.getElementById("dis7");
    con.style.display='none';
    tents.style.display='block';
    
}
function next_Q10(){
    var con=document.getElementById("dis7");
    var tents=document.getElementById("dis8");
    con.style.display='none';
    tents.style.display='block';
   
}
function next_Q11(){
    var con=document.getElementById("dis8");
    var tents=document.getElementById("dis9");
    con.style.display='none';
    tents.style.display='block';
 
}
function next_Q12(){
    var con=document.getElementById("dis9");
    var tents=document.getElementById("dis10");
    con.style.display='none';
    tents.style.display='block';
   
}

//요소 추가 함수

function add_e(){
    e.push(1);
    if (e.length>i.length){
        MBTI[0]='E';
    }
}
function add_i(){
    i.push(1);
    if (e.length<i.length){
        MBTI[0]='I';
    }
}
function add_s(){
    s.push(1);
    if (s.length>n.length){
        MBTI[1]='S';
    }
}
function add_n(){
    n.push(1);
    if (s.length<n.length){
        MBTI[1]='N';
    }
}
function add_t(){
    t.push(1);
    if (t.length>f.length){
        MBTI[2]='T';
    }
}
function add_f(){
    f.push(1);
    if (t.length<f.length){
        MBTI[2]='F';
    }
}
function add_j(){
    j.push(1);
      if (j.length>p.length){
        MBTI[3]='J';
    }
}
function add_p(){
    p.push(1);
      if (j.length<p.length){
        MBTI[3]='P';
    }
}

//결과 관련 함수

function show_result(){
    if (MBTI[0]=='E'&& MBTI[1]=='S'&& MBTI[2]=='T'&& MBTI[3]=='P'){
        //bart
        //문제 안보이게 하는 것들
        var d0=document.getElementById("dis");
        var d1=document.getElementById("dis0");
        var d2=document.getElementById("dis1");
        var d3=document.getElementById("dis2");
        var d4=document.getElementById("dis3");
        var d5=document.getElementById("dis4");
        var d6=document.getElementById("dis5");
        var d7=document.getElementById("dis6");
        var d8=document.getElementById("dis7");
        var d9=document.getElementById("dis8");
        var d10=document.getElementById("dis9");
        var d11=document.getElementById("dis10");
        d0.style.display='none';
        d1.style.display='none';
        d2.style.display='none';
        d3.style.display='none';
        d4.style.display='none';
        d5.style.display='none';
        d6.style.display='none';
        d7.style.display='none';
        d8.style.display='none';
        d9.style.display='none';
        d10.style.display='none';
        d11.style.display='none';
        //결과 보여주는 것들
        
        var bart=document.getElementById("result1");
        bart.style.display='block'
        
    }
    else if(MBTI[0]=='E'&& MBTI[1]=='S'&& MBTI[2]=='F'&& MBTI[3]=='P'){
            //homer
        var d0=document.getElementById("dis");
        var d1=document.getElementById("dis0");
        var d2=document.getElementById("dis1");
        var d3=document.getElementById("dis2");
        var d4=document.getElementById("dis3");
        var d5=document.getElementById("dis4");
        var d6=document.getElementById("dis5");
        var d7=document.getElementById("dis6");
        var d8=document.getElementById("dis7");
        var d9=document.getElementById("dis8");
        var d10=document.getElementById("dis9");
        var d11=document.getElementById("dis10");
        d0.style.display='none';
        d1.style.display='none';
        d2.style.display='none';
        d3.style.display='none';
        d4.style.display='none';
        d5.style.display='none';
        d6.style.display='none';
        d7.style.display='none';
        d8.style.display='none';
        d9.style.display='none';
        d10.style.display='none';
        d11.style.display='none';
        var homer=document.getElementById("result2");
        homer.style.display='block'
        
            }
    else if(MBTI[0]=='I'&& MBTI[1]=='S'&& MBTI[2]=='T'&& MBTI[3]=='P'){
            //sideshowbob
        var d0=document.getElementById("dis");
        var d1=document.getElementById("dis0");
        var d2=document.getElementById("dis1");
        var d3=document.getElementById("dis2");
        var d4=document.getElementById("dis3");
        var d5=document.getElementById("dis4");
        var d6=document.getElementById("dis5");
        var d7=document.getElementById("dis6");
        var d8=document.getElementById("dis7");
        var d9=document.getElementById("dis8");
        var d10=document.getElementById("dis9");
        var d11=document.getElementById("dis10");
        d0.style.display='none';
        d1.style.display='none';
        d2.style.display='none';
        d3.style.display='none';
        d4.style.display='none';
        d5.style.display='none';
        d6.style.display='none';
        d7.style.display='none';
        d8.style.display='none';
        d9.style.display='none';
        d10.style.display='none';
        d11.style.display='none';
        var sideshow=document.getElementById("result3");
        sideshow.style.display='block'
        
            }
    else if(MBTI[0]=='I'&& MBTI[1]=='S'&& MBTI[2]=='F'&& MBTI[3]=='P'){
        //smithers
        var d0=document.getElementById("dis");
        var d1=document.getElementById("dis0");
        var d2=document.getElementById("dis1");
        var d3=document.getElementById("dis2");
        var d4=document.getElementById("dis3");
        var d5=document.getElementById("dis4");
        var d6=document.getElementById("dis5");
        var d7=document.getElementById("dis6");
        var d8=document.getElementById("dis7");
        var d9=document.getElementById("dis8");
        var d10=document.getElementById("dis9");
        var d11=document.getElementById("dis10");
        d0.style.display='none';
        d1.style.display='none';
        d2.style.display='none';
        d3.style.display='none';
        d4.style.display='none';
        d5.style.display='none';
        d6.style.display='none';
        d7.style.display='none';
        d8.style.display='none';
        d9.style.display='none';
        d10.style.display='none';
        d11.style.display='none';
        var smi=document.getElementById("result4");
        smi.style.display='block'
        
            
            }
    else if(MBTI[0]=='E'&& MBTI[1]=='S'&& MBTI[2]=='T'&& MBTI[3]=='J'){
        //chief wigam
        var d0=document.getElementById("dis");
        var d1=document.getElementById("dis0");
        var d2=document.getElementById("dis1");
        var d3=document.getElementById("dis2");
        var d4=document.getElementById("dis3");
        var d5=document.getElementById("dis4");
        var d6=document.getElementById("dis5");
        var d7=document.getElementById("dis6");
        var d8=document.getElementById("dis7");
        var d9=document.getElementById("dis8");
        var d10=document.getElementById("dis9");
        var d11=document.getElementById("dis10");
        d0.style.display='none';
        d1.style.display='none';
        d2.style.display='none';
        d3.style.display='none';
        d4.style.display='none';
        d5.style.display='none';
        d6.style.display='none';
        d7.style.display='none';
        d8.style.display='none';
        d9.style.display='none';
        d10.style.display='none';
        d11.style.display='none';
        var chief=document.getElementById("result5");
        chief.style.display='block'
            
            }
    else if(MBTI[0]=='E'&& MBTI[1]=='S'&& MBTI[2]=='F'&& MBTI[3]=='J'){
        //ned flanders
        var d0=document.getElementById("dis");
        var d1=document.getElementById("dis0");
        var d2=document.getElementById("dis1");
        var d3=document.getElementById("dis2");
        var d4=document.getElementById("dis3");
        var d5=document.getElementById("dis4");
        var d6=document.getElementById("dis5");
        var d7=document.getElementById("dis6");
        var d8=document.getElementById("dis7");
        var d9=document.getElementById("dis8");
        var d10=document.getElementById("dis9");
        var d11=document.getElementById("dis10");
        d0.style.display='none';
        d1.style.display='none';
        d2.style.display='none';
        d3.style.display='none';
        d4.style.display='none';
        d5.style.display='none';
        d6.style.display='none';
        d7.style.display='none';
        d8.style.display='none';
        d9.style.display='none';
        d10.style.display='none';
        d11.style.display='none';
        var ned=document.getElementById("result6");
        ned.style.display='block'
        
            
            }
    else if(MBTI[0]=='I'&& MBTI[1]=='S'&& MBTI[2]=='T'&& MBTI[3]=='J'){
        //skinner
        var d0=document.getElementById("dis");
        var d1=document.getElementById("dis0");
        var d2=document.getElementById("dis1");
        var d3=document.getElementById("dis2");
        var d4=document.getElementById("dis3");
        var d5=document.getElementById("dis4");
        var d6=document.getElementById("dis5");
        var d7=document.getElementById("dis6");
        var d8=document.getElementById("dis7");
        var d9=document.getElementById("dis8");
        var d10=document.getElementById("dis9");
        var d11=document.getElementById("dis10");
        d0.style.display='none';
        d1.style.display='none';
        d2.style.display='none';
        d3.style.display='none';
        d4.style.display='none';
        d5.style.display='none';
        d6.style.display='none';
        d7.style.display='none';
        d8.style.display='none';
        d9.style.display='none';
        d10.style.display='none';
        d11.style.display='none';
        var skinner=document.getElementById("result7");
        skinner.style.display='block'
        
            
            }
    else if(MBTI[0]=='I'&& MBTI[1]=='S'&& MBTI[2]=='F'&& MBTI[3]=='J'){
        //marge
        var d0=document.getElementById("dis");
        var d1=document.getElementById("dis0");
        var d2=document.getElementById("dis1");
        var d3=document.getElementById("dis2");
        var d4=document.getElementById("dis3");
        var d5=document.getElementById("dis4");
        var d6=document.getElementById("dis5");
        var d7=document.getElementById("dis6");
        var d8=document.getElementById("dis7");
        var d9=document.getElementById("dis8");
        var d10=document.getElementById("dis9");
        var d11=document.getElementById("dis10");
        d0.style.display='none';
        d1.style.display='none';
        d2.style.display='none';
        d3.style.display='none';
        d4.style.display='none';
        d5.style.display='none';
        d6.style.display='none';
        d7.style.display='none';
        d8.style.display='none';
        d9.style.display='none';
        d10.style.display='none';
        d11.style.display='none';
        var marg=document.getElementById("result8");
        marg.style.display='block'
            
            }
    else if(MBTI[0]=='E'&& MBTI[1]=='N'&& MBTI[2]=='F'&& MBTI[3]=='J'){
        //Apu
            var d0=document.getElementById("dis");
        var d1=document.getElementById("dis0");
        var d2=document.getElementById("dis1");
        var d3=document.getElementById("dis2");
        var d4=document.getElementById("dis3");
        var d5=document.getElementById("dis4");
        var d6=document.getElementById("dis5");
        var d7=document.getElementById("dis6");
        var d8=document.getElementById("dis7");
        var d9=document.getElementById("dis8");
        var d10=document.getElementById("dis9");
        var d11=document.getElementById("dis10");
        d0.style.display='none';
        d1.style.display='none';
        d2.style.display='none';
        d3.style.display='none';
        d4.style.display='none';
        d5.style.display='none';
        d6.style.display='none';
        d7.style.display='none';
        d8.style.display='none';
        d9.style.display='none';
        d10.style.display='none';
        d11.style.display='none';
        var apu=document.getElementById("result9");
        apu.style.display='block'
            }
    else if(MBTI[0]=='E'&& MBTI[1]=='N'&& MBTI[2]=='F'&& MBTI[3]=='P'){
        //barney
            var d0=document.getElementById("dis");
        var d1=document.getElementById("dis0");
        var d2=document.getElementById("dis1");
        var d3=document.getElementById("dis2");
        var d4=document.getElementById("dis3");
        var d5=document.getElementById("dis4");
        var d6=document.getElementById("dis5");
        var d7=document.getElementById("dis6");
        var d8=document.getElementById("dis7");
        var d9=document.getElementById("dis8");
        var d10=document.getElementById("dis9");
        var d11=document.getElementById("dis10");
        d0.style.display='none';
        d1.style.display='none';
        d2.style.display='none';
        d3.style.display='none';
        d4.style.display='none';
        d5.style.display='none';
        d6.style.display='none';
        d7.style.display='none';
        d8.style.display='none';
        d9.style.display='none';
        d10.style.display='none';
        d11.style.display='none';
        var barney =document.getElementById("result10");
        barney.style.display='block'
            }
    else if(MBTI[0]=='I'&& MBTI[1]=='N'&& MBTI[2]=='F'&& MBTI[3]=='J'){
        //lisa
            var d0=document.getElementById("dis");
        var d1=document.getElementById("dis0");
        var d2=document.getElementById("dis1");
        var d3=document.getElementById("dis2");
        var d4=document.getElementById("dis3");
        var d5=document.getElementById("dis4");
        var d6=document.getElementById("dis5");
        var d7=document.getElementById("dis6");
        var d8=document.getElementById("dis7");
        var d9=document.getElementById("dis8");
        var d10=document.getElementById("dis9");
        var d11=document.getElementById("dis10");
        d0.style.display='none';
        d1.style.display='none';
        d2.style.display='none';
        d3.style.display='none';
        d4.style.display='none';
        d5.style.display='none';
        d6.style.display='none';
        d7.style.display='none';
        d8.style.display='none';
        d9.style.display='none';
        d10.style.display='none';
        d11.style.display='none';
        var Lisa=document.getElementById("result11");
        Lisa.style.display='block'
        
            }
    else if(MBTI[0]=='I'&& MBTI[1]=='N'&& MBTI[2]=='F'&& MBTI[3]=='P'){
        //Ralph
            var d0=document.getElementById("dis");
        var d1=document.getElementById("dis0");
        var d2=document.getElementById("dis1");
        var d3=document.getElementById("dis2");
        var d4=document.getElementById("dis3");
        var d5=document.getElementById("dis4");
        var d6=document.getElementById("dis5");
        var d7=document.getElementById("dis6");
        var d8=document.getElementById("dis7");
        var d9=document.getElementById("dis8");
        var d10=document.getElementById("dis9");
        var d11=document.getElementById("dis10");
        d0.style.display='none';
        d1.style.display='none';
        d2.style.display='none';
        d3.style.display='none';
        d4.style.display='none';
        d5.style.display='none';
        d6.style.display='none';
        d7.style.display='none';
        d8.style.display='none';
        d9.style.display='none';
        d10.style.display='none';
        d11.style.display='none';
        var Ral=document.getElementById("result12");
        Ral.style.display='block'
        
            }
    else if(MBTI[0]=='E'&& MBTI[1]=='N'&& MBTI[2]=='T'&& MBTI[3]=='J'){
        //kruty
        var d0=document.getElementById("dis");
        var d1=document.getElementById("dis0");
        var d2=document.getElementById("dis1");
        var d3=document.getElementById("dis2");
        var d4=document.getElementById("dis3");
        var d5=document.getElementById("dis4");
        var d6=document.getElementById("dis5");
        var d7=document.getElementById("dis6");
        var d8=document.getElementById("dis7");
        var d9=document.getElementById("dis8");
        var d10=document.getElementById("dis9");
        var d11=document.getElementById("dis10");
        d0.style.display='none';
        d1.style.display='none';
        d2.style.display='none';
        d3.style.display='none';
        d4.style.display='none';
        d5.style.display='none';
        d6.style.display='none';
        d7.style.display='none';
        d8.style.display='none';
        d9.style.display='none';
        d10.style.display='none';
        d11.style.display='none';
        var krusty=document.getElementById("result13");
        krusty.style.display='block'
        
            }
    else if(MBTI[0]=='E'&& MBTI[1]=='N'&& MBTI[2]=='T'&& MBTI[3]=='P'){
        //kent
            
        var d0=document.getElementById("dis");
        var d1=document.getElementById("dis0");
        var d2=document.getElementById("dis1");
        var d3=document.getElementById("dis2");
        var d4=document.getElementById("dis3");
        var d5=document.getElementById("dis4");
        var d6=document.getElementById("dis5");
        var d7=document.getElementById("dis6");
        var d8=document.getElementById("dis7");
        var d9=document.getElementById("dis8");
        var d10=document.getElementById("dis9");
        var d11=document.getElementById("dis10");
        d0.style.display='none';
        d1.style.display='none';
        d2.style.display='none';
        d3.style.display='none';
        d4.style.display='none';
        d5.style.display='none';
        d6.style.display='none';
        d7.style.display='none';
        d8.style.display='none';
        d9.style.display='none';
        d10.style.display='none';
        d11.style.display='none';
        var kent=document.getElementById("result14");
        kent.style.display='block'
        
            }
    else if(MBTI[0]=='I'&& MBTI[1]=='N'&& MBTI[2]=='T'&& MBTI[3]=='J'){
        //Burns
            
        var d0=document.getElementById("dis");
        var d1=document.getElementById("dis0");
        var d2=document.getElementById("dis1");
        var d3=document.getElementById("dis2");
        var d4=document.getElementById("dis3");
        var d5=document.getElementById("dis4");
        var d6=document.getElementById("dis5");
        var d7=document.getElementById("dis6");
        var d8=document.getElementById("dis7");
        var d9=document.getElementById("dis8");
        var d10=document.getElementById("dis9");
        var d11=document.getElementById("dis10");
        d0.style.display='none';
        d1.style.display='none';
        d2.style.display='none';
        d3.style.display='none';
        d4.style.display='none';
        d5.style.display='none';
        d6.style.display='none';
        d7.style.display='none';
        d8.style.display='none';
        d9.style.display='none';
        d10.style.display='none';
        d11.style.display='none';
        var b=document.getElementById("result15");
        b.style.display='block'
            }
    else if(MBTI[0]=='I'&& MBTI[1]=='N'&& MBTI[2]=='T'&& MBTI[3]=='P'){
        //frink
           var d0=document.getElementById("dis");
        var d1=document.getElementById("dis0");
        var d2=document.getElementById("dis1");
        var d3=document.getElementById("dis2");
        var d4=document.getElementById("dis3");
        var d5=document.getElementById("dis4");
        var d6=document.getElementById("dis5");
        var d7=document.getElementById("dis6");
        var d8=document.getElementById("dis7");
        var d9=document.getElementById("dis8");
        var d10=document.getElementById("dis9");
        var d11=document.getElementById("dis10");
        d0.style.display='none';
        d1.style.display='none';
        d2.style.display='none';
        d3.style.display='none';
        d4.style.display='none';
        d5.style.display='none';
        d6.style.display='none';
        d7.style.display='none';
        d8.style.display='none';
        d9.style.display='none';
        d10.style.display='none';
        d11.style.display='none';
        var f=document.getElementById("result16");
        f.style.display='block'
         
            }
            
}
