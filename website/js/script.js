/*.getJSON("../data/top10artists.json", function(json) {
        const header = document.querySelector('header');
        const myH1 = document.createElement('h1');
        myH1.textContent = obj['squadName'];
        header.appendChild(myH1);
      
        const myPara = document.createElement('p');
        myPara.textContent = `Hometown: ${obj['homeTown']} // Formed: ${obj['formed']}`;
        header.appendChild(myPara);
});*/   
   

/*
    fetch('../data/top10artists.json')
    .then(function (response) {
        console.log('ok')
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

    function appendData(data) {
        var mainContainer = document.getElementById("myData");
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.innerHTML = 'Rank: ' + data[i].Rank + ' ' + data[i].Artist;
            mainContainer.appendChild(div);
            console.log()
        }
    }*/