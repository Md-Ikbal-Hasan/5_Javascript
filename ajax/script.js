document.getElementById('get_data').addEventListener('click', loadData);

function loadData() {
    //create xhr object (xml Http Request)
    let xhr = new XMLHttpRequest();


    //open
    xhr.open('GET', 'data.txt', true) // kon file theke data anbo ta bolte hobe
    xhr.send();

    xhr.onload = function() {
        //http status....
        //200 : ok
        //403 : forbidden
        //404 : not found
        if (this.status === 200) {
            document.getElementById("output").innerHTML = ` <h4> ${this.responseText}</h4> `;
        }
    }

    /*
    xhr.onreadystatechange = function() {
        if (this.status === 200 && this.readyState === 4) {
            console.log(this.responseText);
        }
    }
    */



    console.log(xhr);


}