document.getElementById("get_data").addEventListener("click", loadJokes);


function loadJokes(e) {
    let number = document.getElementById("numberJokes").value;
    //console.log(number);
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

    xhr.onprogress = function() {
        document.getElementById("output").innerHTML = " <h2>Loading......</h2> ";
    }


    xhr.onload = function() {
        if (this.status === 200) {
            let data = (JSON.parse(this.responseText));

            let jokes = data.value;
            //console.log(jokes);
            let output = "<ol>";
            jokes.forEach(function(item) {
                output += ` <li> ${item.joke} </li> `

            })
            output += "</ol>";

            document.getElementById("output").innerHTML = output;




        }
    }

    xhr.send();
}