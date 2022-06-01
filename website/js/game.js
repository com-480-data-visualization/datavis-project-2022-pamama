function direBonjour() {
    fetch("data/spotify_dataset.json")
      .then(response => response.json())
      .then(data => {
          console.log(data)
          test1 = Math.floor(Math.random() * 1555);
          test2 = Math.floor(Math.random() * 1555);
          var txtbtn1 = document.getElementById('txtbtn1');
          var txtbtn2 = document.getElementById('txtbtn2');
          txtbtn1.textContent = data[test1]['Artist']+",'"+ data[test1]['Song Name']+"'";
          var btn = document.getElementById("btn1");
          var btn2 = document.getElementById("btn2");
          txtbtn2.textContent = data[test2]['Artist']+",'"+ data[test2]['Song Name']+"'";
          var btn3 = document.getElementById("btn3")
          var txtbtn3 = document.getElementById('txtbtn3');
          txtbtn3.textContent = "Next"
          var txt1 = document.getElementById('1p');
          let score = parseInt(document.getElementById("score").innerHTML);
          let hscore = parseInt(document.getElementById("hscore").innerHTML);
          txt1.textContent ="";
          
          

          btn.addEventListener('click', updateBtn);
          btn2.addEventListener('click', updateBtn2);
          
          btn3.removeEventListener('click', direBonjour)
         

          function updateBtn() {
            if ( parseFloat(data[test1]['Streams'].replace(/,/g, ''))> parseFloat(data[test2]['Streams'].replace(/,/g, ''))) {
            txt1.textContent = "Congratulation,  " + txtbtn1.textContent + " has been streamed " + data[test1]['Streams'] + " times compared to "
            + data[test2]['Streams'] + " for " +txtbtn2.textContent ;
            document.getElementById("score").innerHTML = score + 1;
        
            } else {
            txt1.textContent = "Wrong ! " + txtbtn1.textContent + " has only been streamed " + data[test1]['Streams'] + " times compared to "
            + data[test2]['Streams'] + " for " +txtbtn2.textContent+", try again !";
            txtbtn3.textContent = "Restart game"
            if ( score > hscore)
            {
              document.getElementById("hscore").innerHTML = score;
            }
            document.getElementById("score").innerHTML = 0;
            
            }
            btn.removeEventListener('click', updateBtn);
            btn2.removeEventListener('click', updateBtn2);
            btn3.addEventListener('click', direBonjour)
            
          }
          function updateBtn2() {
            if ( parseFloat(data[test1]['Streams'].replace(/,/g, ''))< parseFloat(data[test2]['Streams'].replace(/,/g, ''))) {
            txt1.textContent = "Congratulation,  " + txtbtn2.textContent + " has been streamed " + data[test2]['Streams'] + " times compared to "
            + data[test1]['Streams'] + " for " +txtbtn1.textContent ;
            document.getElementById("score").innerHTML = score + 1;

            } else {
            txt1.textContent = "Wrong ! " + txtbtn2.textContent + " has only been streamed " + data[test2]['Streams'] + " times compared to "
            + data[test1]['Streams'] + " for " +txtbtn1.textContent+", try again !";
            txtbtn3.textContent= "Restart game"
            if ( score > hscore)
            {
              document.getElementById("hscore").innerHTML = score;
            }
            document.getElementById("score").innerHTML = 0;
            }
            btn.removeEventListener('click', updateBtn);
            btn2.removeEventListener('click', updateBtn2);
            btn3.addEventListener('click', direBonjour)
            
        }     
  })}

  direBonjour()