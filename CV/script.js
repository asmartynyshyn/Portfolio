$(document).ready(function($) {
    $(document).on('submit', '#submit-form', function(event) {
      event.preventDefault();
    });
  });

  $(document).ready(function () {
    var fileTypes = ['jpg', 'jpeg', 'png'];  
    $("input:file").change(function (evt) {
        var parentEl = $(this).parent();
        
        var tgt = evt.target || window.event.srcElement,
                        files = tgt.files;

        if (FileReader && files && files.length) {
            var fr = new FileReader();
            var extension = files[0].name.split('.').pop().toLowerCase(); 
            fr.onload = function (e) {
                success = fileTypes.indexOf(extension) > -1;
                if(success){
                    $(parentEl).append('<img src="' + fr.result + '" class="preview" style="width: 200px; height: 200px; position: absolute; top:-1px; right:-1px"/>');}
            }
            fr.onloadend = function(e){
                console.debug("Load End");
            }
            fr.readAsDataURL(files[0]);
        }   
    });
});

var j=0;

function myPrint(){
    if (j == 0) {
        j = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 60);
        var load=false;
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                j = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                load=elem.style.width;
            }
     
            if(load==='100%'){
                $(".attr").css("display","none");
                $(".input").css("border","none");
                $("#fullName").css("font-size","1em")
                $("#fname").css("font-weight","bold")
                $("#duty").css("border","none")
                var currentJob=document.getElementById('currentWork');
                if (currentJob.checked===true){
                    $('#currentWork').show();
                }else{
                    $('#currentWork').hide();
                }
                window.print();
            }
        }
    }
}

var i = 0;
function myView() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 60);
        var load=false;
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                load=elem.style.width;
            }
    
            if(load==='100%'){
                $(".attr").css("display","none");
                $(".input").css("border","none");
                $("#fullName").css("font-size","1em")
                $("#fname").css("font-weight","bold")
                $("#duty").css("border","none")
                var currentJob=document.getElementById('currentWork');
                if (currentJob.checked===true){
                    $('#currentWork').show();
                    $('#current').show();
                }else{
                    $('#currentWork').hide();
                    $('#current').hide();
                }
            }
        }
    }
}


function myAdd(){
    let copy=$("#education").clone()
    $("#educationContainer").append(copy)
}

function myDelete(){
    let last=$("#education:last-Child").last()
    last.remove()
}

function PresentJob(){
    $('#dateEnd1').show();
    $('.end1').show();
    var currentJob=document.getElementById('currentWork');
    console.log(currentJob.checked)
    if (currentJob.checked===true){
      $('#dateEnd1').hide();
      $('.end1').hide();
    }
  }

function myAdd1(){
    let copy=$("#work").clone()
    $("#workContainer").append(copy)
}

function myDelete1(){
    let last=$("#work:last-Child").last()
    last.remove()
}

function myAdd2(){
    let copy=$("#referance").clone()
    $("#referanceContainer").append(copy)
}

function myDelete2(){
    let last=$("#referance:last-Child").last()
    last.remove()
}

$("#form").submit(function(e) {
    e.preventDefault();
});

var k = 0;
function myResume() {
    if (k == 0) {
        k = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 60);
        var load=false;
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                k = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                load=elem.style.width;
            }
    
            if(load==='100%'){
                $("#exampleEmail1").css("margin","2000px");
                $(".attr").css("display","none");
                $(".input").css("border","none");
                $("#fullName").css("font-size","1em")
                $("#fname").css("font-weight","bold")
                $("#duty").css("border","none")
                var currentJob=document.getElementById('currentWork');
                currentJob.checked=true
                if (currentJob.checked===true){
                    $('#currentWork').show();
                    $('#current').show();
                }else{
                    $('#currentWork').hide();
                    $('#current').hide();
                }
                $('#fname').val("Andriy Martynyshyn")
                $('#street').val("130 countryside Ln., apt. 3")
                $('#city').val("Orchard Park")
                $('#state').val("NY")
                $('#zip').val("14127")
                $('#email').val("martynyshyn.andriy@gmail.com")
                $('#tel').val("716-650-1806")
                $('#objective').val("To obtain a position as an IT Specialist or Junior Developer")
                $('#summary').val("SUNY Erie Information Technology student with experience in budget data analysis.  Proficient in Microsoft Office, Acrobat Reader, Internet Browsers, Accounting software, Internet banking and OS Windows.  Strong knowledge in maintaining, installing, and updating operating systems.  CISCO Certified. Programming skills include: C, C+, C#, Java, Visual Basic, SQL, SQL Server, MySQL, HTML, CSS/Bootstrap, Node JS, PHP, JavaScript and 3D Max.")
                $('#techCer').val("Certifications: CISCO “IT Essentials: PC Hardware and Software”, Quality Assurance Group “Essentials of Software Testing on Practice” \n Programming Languages: C, C+, C#, Java, Visual Basic, SQL, SQL Server, MySQL, HTML, CSS, Node, PHP, JavaScript. \n Operating Systems: Windows and Linux. \n Application Software: Microsoft Office, Open Office, Visio MS, Visual Studio 2019, 3D Max, SAP, 1C: Enterprises (ver. 7.0 and 8.1), \n Internet banking and Client-Banks Other: Strong knowledge in maintaining, installing, and updating operating systems. ")
                $('#dateEnd').attr("type","text")
                $('#dateEnd').val("12.21.2021")
                $('#college').val("SUNY Erie Community College")
                $('#degree').val("A.A.S. Information Technology")
                $('#program').val('Information Technology')
                $('#cityCountry').val('Buffalo, NY')
                $('#dateBeg1').attr("type","text")
                $('#dateBeg1').val("06.18.2020")
                $('#dateEnd1').hide()
                $('#employer').val("Computer for children (AmeriCorps, Mission: Ignite)")
                $('#position').val("IT Specialist")
                $('#duty').attr("rows","13")
                $('#duty').val("•	To ensure that technical service projects are completed, efficiently and effectively \n •	To maintain all assigned aspects of, production, inventory, recycling of the refurbishment of computers and equipment from receipt to delivery. This individual will troubleshoot hardware, test, refurbish computers, load software applications, setup systems for clients, and in some situations, deliver computers to clients. \n •	To foster positive interaction with fellow staff and clients.")
                $('#cityCountry1').val("Buffalo, New York")
                $('#rposition').val("Owner")
                $('#rname').val("Andre Teslenko")
                $('#rtel').val("716-895-1404")
                $('#remail').val("fancyfood2005@gmail.com ")
            }

        }

        var div =document.createElement("Div")
        div.setAttribute("class","col-md-3 mt-4")
        var input=document.createElement("input")
        input.setAttribute("type","text")              
        input.setAttribute("value","06.30.2008")
        input.setAttribute("style","border:none; margin-top: 35px")
        div.appendChild(input)  

        var div1 = document.createElement("DIV");
        div1.setAttribute("class","col-md-5");
        var input1=document.createElement("input");
        input1.setAttribute("style", "margin-top: 5px")
        input1.setAttribute("type","text")              
        input1.setAttribute("value","Ivan Franko National University of Lviv")
        input1.setAttribute("style","border:none; margin-top:40px;width:300px")                             
        var input2=document.createElement("input");
        input2.setAttribute("type","text")                 
        input2.setAttribute("value","Master of Science Degree")
        input2.setAttribute("style","border:none; margin-top:25px")               
        var input3=document.createElement("input");
        input3.setAttribute("type","text")                 
        input3.setAttribute("value","Department of Information Systems in Management")
        input3.setAttribute("style","border:none; margin-top:25px")  
        var br1=document.createElement("br")             
        var br2=document.createElement("br")             
        div1.appendChild(input1)
        div1.appendChild(br1)
        div1.appendChild(input2)
        div1.appendChild(br2)
        div1.appendChild(input3)

        var div2 =document.createElement("Div")
        div2.setAttribute("class","col-md-3")
        var input4=document.createElement("input")
        input4.setAttribute("type","text")              
        input4.setAttribute("value","Lviv, Ukraine")
        input4.setAttribute("style","border:none; margin-top:40px")
        div2.appendChild(input4) 

        document.getElementById("education").appendChild(div);
        document.getElementById("education").appendChild(div1);     
        document.getElementById("education").appendChild(div2);  
        
        var div3 =document.createElement("Div")
        div3.setAttribute("class","col-md-3 mt-4")
        var input5=document.createElement("input")
        input5.setAttribute("type","text")              
        input5.setAttribute("value","06.30.2007")
        input5.setAttribute("style","border:none; margin-top: 35px")
        div3.appendChild(input5)  
        
        var div4 = document.createElement("DIV");
        div4.setAttribute("class","col-md-5");
        var input6=document.createElement("input");
        input6.setAttribute("style", "margin-top: 5px")
        input6.setAttribute("type","text")              
        input6.setAttribute("value","Ivan Franko National University of Lviv")
        input6.setAttribute("style","border:none; margin-top:40px;width:300px")                             
        var input7=document.createElement("input");
        input7.setAttribute("type","text")                 
        input7.setAttribute("value","Bachelor of Science Degree")
        input7.setAttribute("style","border:none; margin-top:25px")               
        var input8=document.createElement("input");
        input8.setAttribute("type","text")                 
        input8.setAttribute("value","Department of Information Systems in Management")
        input8.setAttribute("style","border:none; margin-top:25px")  
        var br3=document.createElement("br")             
        var br4=document.createElement("br")             
        div4.appendChild(input6)
        div4.appendChild(br3)
        div4.appendChild(input7)
        div4.appendChild(br4)
        div4.appendChild(input8)

        var div5 =document.createElement("Div")
        div5.setAttribute("class","col-md-3")
        var input9=document.createElement("input")
        input9.setAttribute("type","text")              
        input9.setAttribute("value","Lviv, Ukraine")
        input9.setAttribute("style","border:none; margin-top:40px")
        div5.appendChild(input9) 

        document.getElementById("education").appendChild(div3);
        document.getElementById("education").appendChild(div4);     
        document.getElementById("education").appendChild(div5);
        

        var div6 =document.createElement("Div")
        div6.setAttribute("class","col-md-3 mt-4")
        var input10=document.createElement("input")
        input10.setAttribute("type","text")              
        input10.setAttribute("value","01.01.2020 - 06.01.2020")
        input10.setAttribute("style","border:none; margin-top: 35px")
        div6.appendChild(input10)  
        
        var div7 = document.createElement("DIV");
        div7.setAttribute("class","col-md-5");
        var input12=document.createElement("input");
        input12.setAttribute("style", "margin-top: 5px")
        input12.setAttribute("type","text")              
        input12.setAttribute("value","SUNY Erie Community College")
        input12.setAttribute("style","border:none; margin-top:40px;width:300px")                             
        var input13=document.createElement("input");
        input13.setAttribute("type","text")                 
        input13.setAttribute("value","Student assistant")
        input13.setAttribute("style","border:none; margin-top:25px")               
        var input14=document.createElement("textarea");        
        input14.setAttribute("rows","5")        
        input14.value="•	Helping new students adapt to college \n •	Conducting a presentation on the structure of the college and programs that can help students in their studies and student life"
        input14.setAttribute("style","border:none; margin-top:25px; width:350px")  
        var br3=document.createElement("br")             
        var br4=document.createElement("br")             
        div7.appendChild(input12)
        div7.appendChild(br3)
        div7.appendChild(input13)
        div7.appendChild(br4)
        div7.appendChild(input14)

        var div8 =document.createElement("Div")
        div8.setAttribute("class","col-md-3")
        var input15=document.createElement("input")
        input15.setAttribute("type","text")              
        input15.setAttribute("value","Buffalo, New York")
        input15.setAttribute("style","border:none; margin-top:40px")
        div8.appendChild(input15) 

        document.getElementById("work").appendChild(div6);
        document.getElementById("work").appendChild(div7);     
        document.getElementById("work").appendChild(div8);


        var div9 =document.createElement("Div")
        div9.setAttribute("class","col-md-3 mt-4")
        var input16=document.createElement("input")
        input16.setAttribute("type","text")              
        input16.setAttribute("value","11.21.2016 - 12.28.2020")
        input16.setAttribute("style","border:none; margin-top: 35px")
        div9.appendChild(input16)  
        
        var div10 = document.createElement("DIV");
        div10.setAttribute("class","col-md-5");
        var input17=document.createElement("input");
        input17.setAttribute("style", "margin-top: 5px")
        input17.setAttribute("type","text")              
        input17.setAttribute("value","Buffalo SAV Inc.")
        input17.setAttribute("style","border:none; margin-top:40px;width:300px")                             
        var input18=document.createElement("input");
        input18.setAttribute("type","text")                 
        input18.setAttribute("value","Budget Analyst")
        input18.setAttribute("style","border:none; margin-top:25px")               
        var input19=document.createElement("textarea");        
        input19.setAttribute("rows","9")        
        input19.value="•	Analyze monthly and yearly budgets to maintain expenditure controls \n •	Seek new ways to improve efficiency and increase profits while performing cost benefit analysis to compare operating programs \n •	Forecast and track sale trends based on collected data while monitoring industry statistics and following national trends in the industry"
        input19.setAttribute("style","border:none; margin-top:25px; width:350px")  
        var br5=document.createElement("br")             
        var br6=document.createElement("br")             
        div10.appendChild(input17)
        div10.appendChild(br5)
        div10.appendChild(input18)
        div10.appendChild(br6)
        div10.appendChild(input19)

        var div11 =document.createElement("Div")
        div11.setAttribute("class","col-md-3")
        var input20=document.createElement("input")
        input20.setAttribute("type","text")              
        input20.setAttribute("value","Buffalo, New York")
        input20.setAttribute("style","border:none; margin-top:40px")
        div11.appendChild(input20) 

        document.getElementById("work").appendChild(div9);
        document.getElementById("work").appendChild(div10);     
        document.getElementById("work").appendChild(div11);



        var div12 =document.createElement("Div")
        div12.setAttribute("class","col-md-3 mt-4")
        var input21=document.createElement("input")
        input21.setAttribute("type","text")              
        input21.setAttribute("value","10.01.2008 - 09.30.2016")
        input21.setAttribute("style","border:none; margin-top: 35px")
        div12.appendChild(input21)  
        
        var div13 = document.createElement("DIV");
        div13.setAttribute("class","col-md-5");
        var input22=document.createElement("input");
        input22.setAttribute("style", "margin-top: 5px")
        input22.setAttribute("type","text")              
        input22.setAttribute("value","PJSC Concern Hlibprom")
        input22.setAttribute("style","border:none; margin-top:40px;width:300px")                             
        var input23=document.createElement("input");
        input23.setAttribute("type","text")                 
        input23.setAttribute("value","Head of Treasury Funds Management")
        input23.setAttribute("style","border:none; margin-top:25px; width:250px")               
        var input24=document.createElement("textarea");        
        input24.setAttribute("rows","6")        
        input24.value="•	Maintaining contracts with Eastern European Countries while analyzing annual and monthly expenditure budgets \n •	Reviewing daily cash flow for each contract and providing monthly accounting reports"
        input24.setAttribute("style","border:none; margin-top:25px; width:350px")  
        var br7=document.createElement("br")             
        var br8=document.createElement("br")             
        div13.appendChild(input22)
        div13.appendChild(br7)
        div13.appendChild(input23)
        div13.appendChild(br8)
        div13.appendChild(input24)

        var div14 =document.createElement("Div")
        div14.setAttribute("class","col-md-3")
        var input25=document.createElement("input")
        input25.setAttribute("type","text")              
        input25.setAttribute("value","Lviv, Ukraine")
        input25.setAttribute("style","border:none; margin-top:40px")
        div14.appendChild(input25) 

        document.getElementById("work").appendChild(div12);
        document.getElementById("work").appendChild(div13);     
        document.getElementById("work").appendChild(div14);


        var div15 =document.createElement("Div")
        div15.setAttribute("class","col-md-3 mt-4")
        var input26=document.createElement("input")
        input26.setAttribute("type","text")              
        input26.setAttribute("value","01.01.2008 - 07.01.2008")
        input26.setAttribute("style","border:none; margin-top: 35px")
        div15.appendChild(input26)  
        
        var div16 = document.createElement("DIV");
        div16.setAttribute("class","col-md-5");
        var input27=document.createElement("input");
        input27.setAttribute("style", "margin-top: 5px")
        input27.setAttribute("type","text")              
        input27.setAttribute("value","PE Galray")
        input27.setAttribute("style","border:none; margin-top:40px;width:300px")                             
        var input28=document.createElement("input");
        input28.setAttribute("type","text")                 
        input28.setAttribute("value","Programmer")
        input28.setAttribute("style","border:none; margin-top:25px")               
        var input29=document.createElement("textarea");        
        input29.setAttribute("rows","5")        
        input29.value="•	Implementation and configuration of new accounting software program (1C:8) \n •	Trained employees on new server and provided help desk network support"
        input29.setAttribute("style","border:none; margin-top:25px; width:350px")  
        var br9=document.createElement("br")             
        var br10=document.createElement("br")             
        div16.appendChild(input27)
        div16.appendChild(br9)
        div16.appendChild(input28)
        div16.appendChild(br10)
        div16.appendChild(input29)

        var div17 =document.createElement("Div")
        div17.setAttribute("class","col-md-3")
        var input30=document.createElement("input")
        input30.setAttribute("type","text")              
        input30.setAttribute("value","Lviv, Ukraine")
        input30.setAttribute("style","border:none; margin-top:40px")
        div17.appendChild(input30) 

        document.getElementById("work").appendChild(div15);
        document.getElementById("work").appendChild(div16);     
        document.getElementById("work").appendChild(div17);


        var li=document.createElement("li");
        var label=document.createElement("label")
        label.innerHTML= "Position: "
        var input31=document.createElement("input")
        input31.setAttribute("style", "margin-top: 5px")
        input31.setAttribute("type","text")              
        input31.setAttribute("value"," Office Manager")
        input31.setAttribute("style","border:none; margin-top:40px;width:300px")                             
        var label1=document.createElement("label")
        label1.innerHTML= "Full name: "
        var input32=document.createElement("input");
        input32.setAttribute("type","text")                 
        input32.setAttribute("value"," Kateryna Struk")
        input32.setAttribute("style","border:none; margin-top:8px")               
        var label2=document.createElement("label")
        label2.innerHTML= "Phone Number: "
        var input33=document.createElement("input");
        input33.setAttribute("type","text")                 
        input33.setAttribute("value"," 716-895-1404")
        input33.setAttribute("style","border:none; margin-top:8px")
        var label3=document.createElement("label");
        label3.innerHTML= "Email address: "
        var input34=document.createElement("input");
        input34.setAttribute("type","text")                 
        input34.setAttribute("value"," fancyfood2005@gmail.com ")
        input34.setAttribute("style","border:none; margin-top:8px")
        var br11=document.createElement("br")             
        var br12=document.createElement("br")             
        var br13=document.createElement("br")             
        li.appendChild(label)
        li.appendChild(input31)
        li.appendChild(br11)
        li.appendChild(label1)
        li.appendChild(input32)
        li.appendChild(br12)
        li.appendChild(label2)
        li.appendChild(input33)
        li.appendChild(br13)
        li.appendChild(label3)
        li.appendChild(input34)
        document.getElementById("referance1").appendChild(li);

        var li1=document.createElement("li");
        var label4=document.createElement("label")
        label4.innerHTML= "Position: "
        var input35=document.createElement("input")
        input35.setAttribute("style", "margin-top: 5px")
        input35.setAttribute("type","text")              
        input35.setAttribute("value"," Trainer Education Services")
        input35.setAttribute("style","border:none; margin-top:40px;width:300px")                             
        var label5=document.createElement("label")
        label5.innerHTML= "Full name: "
        var input36=document.createElement("input");
        input36.setAttribute("type","text")                 
        input36.setAttribute("value"," Mike Shreve")
        input36.setAttribute("style","border:none; margin-top:8px")               
        var label6=document.createElement("label")
        label6.innerHTML= "Phone Number: "
        var input37=document.createElement("input");
        input37.setAttribute("type","text")                 
        input37.setAttribute("value"," 716-823-7249")
        input37.setAttribute("style","border:none; margin-top:8px")
        var label7=document.createElement("label");
        label7.innerHTML= "Email address: "
        var input38=document.createElement("input");
        input38.setAttribute("type","text")                 
        input38.setAttribute("value"," fancyfood2005@gmail.com ")
        input38.setAttribute("style","border:none; margin-top:8px")
        var br14=document.createElement("br")             
        var br15=document.createElement("br")             
        var br16=document.createElement("br")             
        li1.appendChild(label4)
        li1.appendChild(input35)
        li1.appendChild(br14)
        li1.appendChild(label5)
        li1.appendChild(input36)
        li1.appendChild(br15)
        li1.appendChild(label6)
        li1.appendChild(input37)
        li1.appendChild(br16)
        li1.appendChild(label3)
        li1.appendChild(input38)
        document.getElementById("referance1").appendChild(li1);

        var img = document.createElement("img")
        img.setAttribute("src", "IMG_9458 copy.jpg")
        img.setAttribute("style","height: 200px; width:200px;position: absolute; top: 10px;right: 100px;")
        document.getElementById("photo").appendChild(img)
    }
}
