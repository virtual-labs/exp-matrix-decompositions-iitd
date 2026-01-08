
 function displayText1() {
      const input1a = document.getElementById("input1a").value;
      const input2a = document.getElementById("input2a").value;
      const input3a = document.getElementById("input3a").value;

      // Check if input1 is 4 and input2 is 3
      if (input1a == 4 && input2a == 3 && input3a == 0) { 
        // Slowly display the text after 2 seconds
        setTimeout(function() {
          document.getElementById("output1a").innerHTML = (3 *(parseFloat(input2a))) - parseFloat(input1a) + parseFloat(input3a) ;
          document.getElementById("output1b").textContent = "Degree of Kinematic Indeterminacy = 3J - R + H" ;
          document.getElementById("output1c").textContent = "(1) No of Joints (J)= 3" ;
          document.getElementById("output1d").textContent = "(2) No of Reactions (J) = 4" ;
          document.getElementById("output1e").textContent = "(3) No of Hinges (H) = 0" ;
          document.getElementById("nextButton1").style.visibility="visible";
          document.getElementById("addspecimen1").style.visibility="hidden";

        }, 1000);
        function showSlowly1a() {
          var img = document.getElementById("blink-image1");
          img.style.opacity = 0;
          img.style.display = "block";
          var tick = function() {
            img.style.opacity = +img.style.opacity + 0.01;
            if (+img.style.opacity < 1) {
              (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
          };
          tick();
        }
        showSlowly1a();
        document.getElementById("output1a").style.display = "block"; 
        document.getElementById("output1b").style.display = "block"; 
        document.getElementById("output1c").style.display = "block"; 
        document.getElementById("output1d").style.display = "block"; 
        document.getElementById("output1e").style.display = "block"; }

        if (input1a == "" && input2a == "") { 
          // Slowly display the text after 2 seconds
          setTimeout(function() {
            document.getElementById("output1a").textContent = "Please Fill the Required Fields.";
  
            
          }, 1000);
          document.getElementById("output1a").style.display = "block";

      } else {
        // Display an error message
       document.getElementById("output1a").textContent = "Wrong Input Values.{ HINT: C = 1 }";
       document.getElementById("blink-image1").style.visibility="visible";
       document.getElementById("addspecimen1").style.visibility="hidden";
       document.getElementById("output1a").style.display = "block";

      }

    }

    
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    
    function displayText2() {
      const input1b = document.getElementById("input1b").value;
      const input2b = document.getElementById("input2b").value;
      const input3b = document.getElementById("input3b").value;

      // Check if input1 is 3 and input2 is 2
      if (input1b == 5 && input2b == 5 && input3b == 2) { 
        // Slowly display the text after 2 seconds
        setTimeout(function() {
          document.getElementById("output2a").innerHTML = (3 *(parseFloat(input2b))) - parseFloat(input1b) + parseFloat(input3b) ;
          document.getElementById("output2b").textContent = "Degree of Kinematic Indeterminacy = 3J - R + H" ;
          document.getElementById("output2c").textContent = "(1) No of Joints (J)= 5" ;
          document.getElementById("output2d").textContent = "(2) No of Reactions (R) = 5" ;
          document.getElementById("output2e").textContent = "(3) No of Hinges (H) = 2" ;
          document.getElementById("addspecimen2").style.visibility="hidden";
          document.getElementById("nextButton2").style.visibility="visible";
        }, 1000);
        function showSlowly2a() {
          var img = document.getElementById("blink-image2");
          img.style.opacity = 0;
          img.style.display = "block";
          var tick = function() {
            img.style.opacity = +img.style.opacity + 0.01;
            if (+img.style.opacity < 1) {
              (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
          };
          tick();
        }
        showSlowly2a();
        document.getElementById("output2a").style.display = "block";
        document.getElementById("output2a").style.display = "block"; 
        document.getElementById("output2b").style.display = "block"; 
        document.getElementById("output2c").style.display = "block"; 
        document.getElementById("output2d").style.display = "block"; 
        document.getElementById("output2e").style.display = "block"; }

        if (input1b == "" && input2b == "") { 
          // Slowly display the text after 2 seconds
          setTimeout(function() {
            document.getElementById("output2a").textContent = "Please Fill the Required Fields.";
  
            
          }, 1000);
          document.getElementById("output2a").style.display = "block";

      } else {
        // Display an error message
       document.getElementById("output2a").textContent = "Wrong Input Values.{ HINT: R = 3 }";
       document.getElementById("blink-image2").style.visibility="visible";
       document.getElementById("addspecimen2").style.visibility="hidden";

      document.getElementById("output2a").style.display = "block";

      }

    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////
  
    
    function displayText3() {
      const input1c = document.getElementById("input1c").value;
      const input2c = document.getElementById("input2c").value;
      const input3c = document.getElementById("input3c").value;

      // Check if input1 is 6 and input2 is 2
      if (input1c == 6 && input2c == 4 && input3c == 3) { 
        // Slowly display the text after 2 seconds
        setTimeout(function() {
          document.getElementById("output3a").innerHTML = (3 *(parseFloat(input2c))) - parseFloat(input1c) - parseFloat(input3c) ;
          document.getElementById("output3b").textContent = "Degree of Kinematic Indeterminacy = 3J - R + H" ;
          document.getElementById("output3c").textContent = "(1) No of Joints (J)= 6" ;
          document.getElementById("output3d").textContent = "(2) No of Reactions (R) = 4" ;
          document.getElementById("output3e").textContent = "(3) Conditions of inextensibility (Ci) = 3" ;
          document.getElementById("addspecimen3").style.visibility="hidden";
          document.getElementById("nextButton3").style.visibility="visible";
        }, 1000);
        function showSlowly3a() {
          var img = document.getElementById("blink-image3");
          img.style.opacity = 0;
          img.style.display = "block";
          var tick = function() {
            img.style.opacity = +img.style.opacity + 0.01;
            if (+img.style.opacity < 1) {
              (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
          };
          tick();
        }
        showSlowly3a();
        document.getElementById("output3a").style.display = "block"; 
        document.getElementById("output3b").style.display = "block"; 
        document.getElementById("output3c").style.display = "block"; 
        document.getElementById("output3d").style.display = "block"; 
        document.getElementById("output3e").style.display = "block"; }

        if (input1c == "" && input2c == "") { 
          // Slowly display the text after 2 seconds
          setTimeout(function() {
            document.getElementById("output3a").textContent = "Please Fill the Required Fields.";
  
            
          }, 1000);
          document.getElementById("output3a").style.display = "block";

      } else {
        // Display an error message
       document.getElementById("output3a").textContent = "Wrong Input Values.{ HINT: C = 2 }";
       document.getElementById("blink-image3").style.visibility="visible";
       document.getElementById("addspecimen3").style.visibility="hidden";
      document.getElementById("output3a").style.display = "block";

      }

    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////// 
    
  
    
    function displayText4() {
      const input1d = document.getElementById("input1d").value;
      const input2d = document.getElementById("input2d").value;
      const input3d = document.getElementById("input3d").value;
      const input4d = document.getElementById("input4d").value;


      // Check if input1 is 3 and input2 is 8 input3 is 5
      if (input1d == 6 && input2d == 6 && input3d == 6 && input4d == 2) { 
        // Slowly display the text after 2 seconds
        setTimeout(function() {
          document.getElementById("output4a").innerHTML = (3 *(parseFloat(input2d))) - parseFloat(input1d) - parseFloat(input3d) + parseFloat(input4d) ;
          document.getElementById("output4b").textContent = "Kinematic Indeterminacy = 3J - R - Ci + f" ;
          document.getElementById("output4c").textContent = "(1) No of Joints (J)= 6" ;
          document.getElementById("output4d").textContent = "(2) No of Reactions (R) = 6" ;
          document.getElementById("output4e").textContent = "(3) Conditions of inextensibility (Ci) = 6" ;
          document.getElementById("output4f").textContent = "(4) No. of Releases (f) = 2" ;

          document.getElementById("addspecimen4").style.visibility="hidden";
          document.getElementById("nextButton4").style.visibility="visible";
        }, 1000);
        function showSlowly4a() {
          var img = document.getElementById("blink-image4");
          img.style.opacity = 0;
          img.style.display = "block";
          var tick = function() {
            img.style.opacity = +img.style.opacity + 0.01;
            if (+img.style.opacity < 1) {
              (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
          };
          tick();
        }
        showSlowly4a();
        document.getElementById("output4a").style.display = "block"; 
        document.getElementById("output4b").style.display = "block"; 
        document.getElementById("output4c").style.display = "block"; 
        document.getElementById("output4d").style.display = "block"; 
        document.getElementById("output4e").style.display = "block"; 
        document.getElementById("output4f").style.display = "block";  } 
      
        if (input1d == "" && input2d == "" && input3d == "") { 
          // Slowly display the text after 2 seconds
          setTimeout(function() {
            document.getElementById("output4a").textContent = "Please Fill the Required Fields.";
  
            
          }, 1000);
          document.getElementById("output4a").style.display = "block";

      } else {
        // Display an error message
       document.getElementById("output4a").textContent = "Wrong Input Values.{ HINT: B = 6 }";
       document.getElementById("blink-image4").style.visibility="visible";
       document.getElementById("addspecimen4").style.visibility="hidden";
      document.getElementById("output4a").style.display = "block";

      }

    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////  
     
    
  
    
    function displayText5() {
      const input1e = document.getElementById("input1e").value;
      const input2e = document.getElementById("input2e").value;

      // Check if input1 is 4 and input2 is 7 & input2 is 5
      if (input1e == 3 && input2e == 6 ) { 
        // Slowly display the text after 2 seconds
        setTimeout(function() {
          document.getElementById("output5a").innerHTML = (2 *(parseFloat(input2e))) - parseFloat(input1e)  ;
          document.getElementById("output5b").textContent = "(2) Kinematic Indeterminacy = 2J - R" ;
          document.getElementById("output5c").textContent = "(3) No of Joints (J)= 6" ;
          document.getElementById("output5d").textContent = "(4) No of Reactions (R) = 3  " ;
          document.getElementById("output5e").textContent = "(5) Geometricaly Unstable." ;
          document.getElementById("addspecimen5").style.visibility="hidden";
          document.getElementById("nextButton5").style.visibility="visible";

        }, 1000);
        function showSlowly5a() {
          var img = document.getElementById("blink-image5");
          img.style.opacity = 0;
          img.style.display = "block";
          var tick = function() {
            img.style.opacity = +img.style.opacity + 0.01;
            if (+img.style.opacity < 1) {
              (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
          };
          tick();
        }
        showSlowly5a();
        document.getElementById("output5a").style.display = "block"; 
        document.getElementById("output5b").style.display = "block"; 
        document.getElementById("output5c").style.display = "block"; 
        document.getElementById("output5d").style.display = "block"; 
        document.getElementById("output5e").style.display = "block"; }
        if (input1e == "" && input2e == "" && input3e == "") { 
          // Slowly display the text after 2 seconds
          setTimeout(function() {
            document.getElementById("output5a").textContent = "Please Fill the Required Fields.";
  
            
          }, 1000);
          document.getElementById("output5a").style.display = "block";

      } else {
        // Display an error message
       document.getElementById("output5a").textContent = "Wrong Input Values.{ HINT: R = 4 }";
       document.getElementById("blink-image5").style.visibility="visible";
       document.getElementById("addspecimen5").style.visibility="hidden";
      document.getElementById("output5a").style.display = "block";

      }

    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////
     
    
  
    
    function displayText6() {
      const input1f = document.getElementById("input1f").value;
      const input2f = document.getElementById("input2f").value;
      const input3f = document.getElementById("input3f").value;



      // Check if input1 is 6 and input2 is 6 input3 is 6 input4 is 2
      if (input1f == 7 && input2f == 12 && input3f == 15 ) { 
        // Slowly display the text after 2 seconds 
        setTimeout(function() {
          document.getElementById("output6a").innerHTML = (3 *(parseFloat(input2f))) - parseFloat(input1f) - parseFloat(input3f) ;
          document.getElementById("output6b").textContent = "Kinematic Indeterminacy = 3J - R - M"  ;
          document.getElementById("output6c").textContent = "(1) No of Joints (J)= 6 " ;
          document.getElementById("output6d").textContent = "(2) No of Reactions (R) = 6  " ;
          document.getElementById("output6e").textContent = "(3) Conditions of Members (M) = 6" ;
          document.getElementById("addspecimen6").style.visibility="hidden";
          document.getElementById("nextButton6").style.visibility="visible";
        }, 1000);
        function showSlowly6a() {
          var img = document.getElementById("blink-image6");
          img.style.opacity = 0;
          img.style.display = "block";
          var tick = function() {
            img.style.opacity = +img.style.opacity + 0.01;
            if (+img.style.opacity < 1) {
              (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
            }
          };
          tick();
        }
        showSlowly6a();
        document.getElementById("output6a").style.display = "block"; 
        document.getElementById("output6b").style.display = "block"; 
        document.getElementById("output6c").style.display = "block"; 
        document.getElementById("output6d").style.display = "block"; 
        document.getElementById("output6e").style.display = "block";  }
        if (input1f == "" && input2f == "" && input3f == "") { 
          // Slowly display the text after 2 seconds
          setTimeout(function() {
            document.getElementById("output6a").textContent = "Please Fill the Required Fields.";
  
            
          }, 1000);
          document.getElementById("output6a").style.display = "block";

      } else {
        // Display an error message
       document.getElementById("output6a").textContent = "Wrong Input Values.{ HINT: R = 6 }";
       document.getElementById("blink-image6").style.visibility="visible";
       document.getElementById("addspecimen6").style.visibility="hidden";
      document.getElementById("output6a").style.display = "block";

      }

    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////



function restart()
{
    location.reload();
}
//////////////////////navnext start here////////////////////////////////////

function navNext0()
{
document.getElementById("canvas0").style.visibility="hidden";
document.getElementById("canvas1a").style.visibility="hidden";
document.getElementById("blink-image1").style.visibility="hidden";
document.getElementById("canvas1b").style.visibility="hidden";
document.getElementById("blink-image2").style.visibility="hidden";
document.getElementById("canvas1c").style.visibility="hidden";
document.getElementById("blink-image3").style.visibility="hidden";
document.getElementById("canvas1d").style.visibility="hidden";
document.getElementById("blink-image4").style.visibility="hidden";
document.getElementById("canvas1e").style.visibility="hidden";
document.getElementById("blink-image5").style.visibility="hidden";
document.getElementById("canvas1f").style.visibility="hidden";
document.getElementById("blink-image6").style.visibility="hidden";
document.getElementById('s1_1').style.visibility="visible";
document.getElementById("canvas1").style.visibility="visible";

}
function navNext0a()
{
document.getElementById("canvas0").style.visibility="hidden";
document.getElementById("canvas1a").style.visibility="hidden";
document.getElementById("blink-image1").style.visibility="hidden";
document.getElementById("canvas1b").style.visibility="hidden";
document.getElementById("blink-image2").style.visibility="hidden";
document.getElementById("canvas1c").style.visibility="hidden";
document.getElementById("blink-image3").style.visibility="hidden";
document.getElementById("canvas1d").style.visibility="hidden";
document.getElementById("blink-image4").style.visibility="hidden";
document.getElementById("canvas1e").style.visibility="hidden";
document.getElementById("blink-image5").style.visibility="hidden";
document.getElementById("canvas1f").style.visibility="hidden";
document.getElementById("blink-image6").style.visibility="hidden";
document.getElementById('s1_1').style.visibility="hidden";
document.getElementById("nextButton1").style.visibility="hidden";
document.getElementById("nextButton2").style.visibility="hidden";
document.getElementById("nextButton3").style.visibility="hidden";
document.getElementById("nextButton4").style.visibility="hidden";
document.getElementById("nextButton5").style.visibility="hidden";
document.getElementById("nextButton6").style.visibility="hidden";
document.getElementById("canvas1").style.visibility="visible";

}

function navNext1a()
{
document.getElementById("canvas1").style.visibility="hidden";
document.getElementById("canvas1a").style.visibility="visible";
document.getElementById("nextButton1").style.visibility="hidden";
document.getElementById('addspecimen1').style.visibility="visible";
document.getElementById('addspecimen1').style.animation="addspecimen1 2s forwards";
}

function navNext1b()
{
document.getElementById("canvas1a").style.visibility="hidden";
document.getElementById("canvas1b").style.visibility="visible";
document.getElementById("nextButton2").style.visibility="hidden";
document.getElementById('addspecimen2').style.visibility="visible";
document.getElementById('addspecimen2').style.animation="addspecimen2 2s forwards";
}


function navNext1c()
{
document.getElementById("canvas1b").style.visibility="hidden";
document.getElementById("canvas1c").style.visibility="visible";
document.getElementById("nextButton3").style.visibility="hidden";
document.getElementById('addspecimen3').style.visibility="visible";
document.getElementById('addspecimen3').style.animation="addspecimen3 2s forwards";
}


function navNext1d()
{
document.getElementById("canvas1c").style.visibility="hidden";
document.getElementById("canvas1d").style.visibility="visible";
document.getElementById("nextButton4").style.visibility="hidden";
document.getElementById('addspecimen4').style.visibility="visible";
document.getElementById('addspecimen4').style.animation="addspecimen4 2s forwards";
}


function navNext1e()
{
document.getElementById("canvas1d").style.visibility="hidden";
document.getElementById("canvas1e").style.visibility="visible";
document.getElementById("nextButton5").style.visibility="hidden";
document.getElementById('addspecimen5').style.visibility="visible";
document.getElementById('addspecimen5').style.animation="addspecimen5 2s forwards";
}


function navNext1f()
{
document.getElementById("canvas1e").style.visibility="hidden";
document.getElementById("canvas1f").style.visibility="visible";
document.getElementById("nextButton6").style.visibility="hidden";
document.getElementById('addspecimen6').style.visibility="visible";
document.getElementById('addspecimen6').style.animation="addspecimen6 2s forwards";
}




function add_stand()
{

document.getElementById('arw1').style.visibility="hidden";
document.getElementById('add_stand').style.visibility="hidden";
document.getElementById('specimen1').style.visibility="visible";
document.getElementById('specimen1').style.animation="specimen1 2s forwards";
document.getElementById('specimen2').style.visibility="visible";
document.getElementById('specimen2').style.animation="specimen2 1s forwards";
document.getElementById('specimen3').style.visibility="visible";
document.getElementById('specimen3').style.animation="specimen3 1s forwards";
document.getElementById('specimen4').style.visibility="visible";
document.getElementById('specimen4').style.animation="specimen4 1s forwards";
document.getElementById('specimen5').style.visibility="visible";
document.getElementById('specimen5').style.animation="specimen5 1s forwards";
document.getElementById('specimen6').style.visibility="visible";
document.getElementById('specimen6').style.animation="specimen6 1s forwards";

  setTimeout(function()

	{
document.getElementById('s1_1').style.visibility="hidden";
document.getElementById('s1_2').style.visibility="visible";
document.getElementById('arw2').style.visibility="visible";
document.getElementById('add_aluminium_bar').style.visibility="visible";

	},2000);

}







function start_analysis()
{
document.getElementById('start_analysis'). style.visibility="hidden";}
document.getElementById('start_Analysis1').style.visibility="hidden";
function add_aluminium_bar()
{
document.getElementById('arw2').style.visibility="hidden";
document.getElementById('add_aluminium_bar').style.visibility="hidden";
document.getElementById('aluminium_canvas1').style.visibility="visible";
document.getElementById('aluminium_canvas1').style.animation="aluminium_canvas1 1s forwards";
document.getElementById('start_Analysis1').style.visibility="hidden";
  setTimeout(function()

	{
document.getElementById('s1_2').style.visibility="hidden";
document.getElementById('s1_3').style.visibility="visible";
document.getElementById('arw3').style.visibility="visible";
document.getElementById('add_cellotap').style.visibility="visible";
document.getElementById('start_Analysis1').style.visibility="hidden";


	},1000);

}

function start_Analysis()
{
  document.getElementById('arw5').style.visibility="hidden";
  document.getElementById('start_Analysis').style.visibility="hidden"; 
  

}
