
function reload(){
    location.reload();
}

function suninfo(){
    var sunimg=document.createElement("img");
    sunimg.src="sun.png";
    sunimg.style.width='250px';
    sunimg.style.marginLeft = '600px';
    sunimg.style.marginTop = '-150px';
    document.body.appendChild(sunimg);
    var text=document.getElementById("text");
    text.innerHTML="The sun lies at the heart of the solar system, where it is by far the largest object. It holds 99.8% of the solar system's mass and is roughly 109 times the diameter of the Earth — about one million Earths could fit inside the sun. ... The sun is one of more than 100 billion stars in the Milky Way.";

}
function mercuryinfo(){
    
    var sunimg=document.createElement("img");
    sunimg.src="merucry.png";
    sunimg.style.width='250px';
    sunimg.style.marginLeft = '600px';
    sunimg.style.marginTop = '-150px';
    document.body.appendChild(sunimg);
    var text=document.getElementById("text");
    text.innerHTML="Earth, our home planet, is a world unlike any other. The third planet from the sun, Earth is the only place in the known universe confirmed to host life. With a radius of 3,959 miles, Earth is the fifth largest planet in our solar system, and it's the only one known for sure to have liquid water on its surface.";
    
}
function venusinfo(){
    
    var sunimg=document.createElement("img");
    sunimg.src="venus.png";
    sunimg.style.width='250px';
    sunimg.style.marginLeft = '600px';
    sunimg.style.marginTop = '-150px';
    document.body.appendChild(sunimg);
    var text=document.getElementById("text");
    text.innerHTML="Earth, our home planet, is a world unlike any other. The third planet from the sun, Earth is the only place in the known universe confirmed to host life. With a radius of 3,959 miles, Earth is the fifth largest planet in our solar system, and it's the only one known for sure to have liquid water on its surface.";
    
}
function earthinfo(){
    
    var sunimg=document.createElement("img");
    sunimg.src="earth.png";
    sunimg.style.width='250px';
    sunimg.style.marginLeft = '600px';
    sunimg.style.marginTop = '-150px';
    document.body.appendChild(sunimg);
    var text=document.getElementById("text");
    text.innerHTML="Earth, our home planet, is a world unlike any other. The third planet from the sun, Earth is the only place in the known universe confirmed to host life. With a radius of 3,959 miles, Earth is the fifth largest planet in our solar system, and it's the only one known for sure to have liquid water on its surface.";
    
}



function marsinfo(){
    
    var sunimg=document.createElement("img");
    sunimg.src="mars.png";
    sunimg.style.width='250px';
    sunimg.style.marginLeft = '600px';
    sunimg.style.marginTop = '-100px';
    document.body.appendChild(sunimg);
    var text=document.getElementById("text");
    text.innerHTML="​Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.";
    
}

function saturninfo(){
    
    var sunimg=document.createElement("img");
    sunimg.src="saturn.png";
    sunimg.style.width='250px';
    sunimg.style.marginLeft = '600px';
    sunimg.style.marginTop = '-100px';
    document.body.appendChild(sunimg);
    var text=document.getElementById("text");
    text.innerHTML="Saturn is a gas giant made up mostly of hydrogen and helium. Saturn's volume is greater than 760 Earths, and it is the second most massive planet in the solar system, about 95 times Earth's mass. The Ringed Planet is the least dense of all the planets, and is the only one less dense than water";
    
}

function neptuneinfo(){
    
    var sunimg=document.createElement("img");
    sunimg.src="neptune.png";
    sunimg.style.width='250px';
    sunimg.style.marginLeft = '600px';
    sunimg.style.marginTop = '-100px';
    document.body.appendChild(sunimg);
    var text=document.getElementById("text");
    text.innerHTML="Neptune is dark, cold, and very windy. It's the last of the planets in our solar system. ... Neptune is very similar to Uranus. It's made of a thick soup of water, ammonia, and methane over an Earth-sized solid center.";
    
}

function jupiterinfo(){
    
    var sunimg=document.createElement("img");
    sunimg.src="jupiter.png";
    sunimg.style.width='250px';
    sunimg.style.marginLeft = '600px';
    sunimg.style.marginTop = '-150px';
    document.body.appendChild(sunimg);
    var text=document.getElementById("text");
    text.innerHTML="Jupiter is the biggest planet in our solar system. ... Jupiter is covered in swirling cloud stripes. It has big storms like the Great Red Spot, which has been going for hundreds of years. Jupiter is a gas giant and doesn't have a solid surface, but it may have a solid inner core about the size of Earth.";
    
}

function uranusinfo(){
    
    var sunimg=document.createElement("img");
    sunimg.src="uranus.png";
    sunimg.style.width='250px';
    sunimg.style.marginLeft = '600px';
    sunimg.style.marginTop = '-100px';
    document.body.appendChild(sunimg);
    var text=document.getElementById("text");
    text.innerHTML="Uranus is the seventh planet from the Sun and is the third largest in the solar system. It was discovered by William Herschel in 1781. It has an equatorial diameter of 51,800 kilometers (32,190 miles) and orbits the Sun once every 84.01 Earth years. ... Uranus has at least 22 moons.";
    
}


function Submit(){
    var result=0;
    var question1=document.quiz.question1.value;
    var q1=document.getElementById("Check1");
    if(question1=="99.8"){
        q1.innerHTML="✔️";
        result++;
    }

    else{
        q1.innerHTML="❌";
    }

    var question2=document.quiz.Mercury_Question.value;
    var q2=document.getElementById("Check2");
    if(question2=="11"){
        q2.innerHTML="✔️";
        result++;
    }

    else{
        q2.innerHTML="❌";
    }

    var question3=document.quiz.Venus_Question.value;
    var q3=document.getElementById("Check3");
    if(question3=="Hot"){
        q3.innerHTML="✔️";
        result++;
    }
    else{
        q3.innerHTML="❌";
        
    }

    var question4=document.getElementById("earth").value;
    var q4=document.getElementById("Check4");
    if(question4=="Water" || question4=="water"){
        q4.innerHTML="✔️";
        result++;
    }

    else{
        q4.innerHTML="❌";
        
    }

    var question5=document.getElementById("mars").value;
    var q5=document.getElementById("Check5");
    if(question5=="4"){
        q5.innerHTML="✔️";
        result++;
    }

    else{
        q5.innerHTML="❌";
        
    }

    var question6=document.getElementById("jupiter").value;
    var q6=document.getElementById("Check6");
    if(question6=="1"){
        q6.innerHTML="✔️";
        result++;
    }

    else{
        q6.innerHTML="❌";
        
    }

    var question7=document.getElementById("Saturn").value;
    var q7=document.getElementById("Check7");
    if(question7=="2"){
        q7.innerHTML="✔️";
        result++;
    }

    else{
        q7.innerHTML="❌";
        
    }

    var q8=document.getElementById("Check8");
    if(document.querySelector('#planet1').checked){
        q8.innerHTML="✔️";
        var addition=1;
        result+=addition;
    }

    if(document.querySelector('#planet2').checked || document.querySelector('#planet3').checked||document.querySelector('#planet4').checked){
        q8.innerHTML="❌";
        var addition=0;
    }

    else{
        q8.innerHTML="❌";
    }
    var question9=document.quiz.Neptune_Question.value;
    var q9=document.getElementById("Check9");
    if(question9=="False"){
        q9.innerHTML="✔️";
        result++;
    }

    else{
        q9.innerHTML="❌";
    }

    var score=document.getElementById("score");
    score.innerHTML="You got "+result/11+" percent";




}

function reload(){
    location.reload();
}

