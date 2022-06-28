document.getElementById('get_data').addEventListener('click', loadData);

function loadData() {

    let xhr = new XMLHttpRequest();


    xhr.open('GET', 'data.json', true)
    xhr.send();

    xhr.onload = function() {

        if (this.status === 200) {
            let data = this.responseText;
            jsonData(data);
        }
    }

    function jsonData(json_obj) {

        let js_obj = JSON.parse(json_obj);
        var output = "";
        for (x in js_obj.persons) {
            let persons = js_obj.persons;
            output += "<tr>"

            for (y in persons[x]) {
                // console.log(persons[x][y]);

                output += ` <td> ${persons[x][y]}  </td> `;
            }
            output += "</tr>"

            // console.log("\n");

        }

        document.getElementById("show_data").innerHTML = output;
    }




}
 