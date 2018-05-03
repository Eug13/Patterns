var http = {
    makeRequest: function (id, callback) {
        setTimeout(function () {
            // callback(`Response from  server ${new Date()}`);
            let dictionary = [dict1, dict2];

            let random = randomInt(0, 1);

            console.log(random);
            console.log(dictionary.length);
            if (random == dictionary.length-1) {
                callback(`Українською : ${dict1[id]} <br>`);
            } else {
                callback(`По русски:  ${dict2[id]}  <br>`);
            }


        }, 3000);
    }
};

function randomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return +rand;
};

var proxy = (function () {
    var cash = {};
    return {
        makeRequest: function (id, callback) {
            if (cash[id]) {

                let dictionary = [dict1, dict2];

                let random = randomInt(0,1);
                console.log(random);
                if (random == dictionary.length-1) {
                    callback(`Українською : ${dict1[id]} <br>`);
                } else {
                    callback(`По русски:  ${dict2[id]}  <br>`);
                }

                // callback(`Українською : ${dict1[id]} <br> По русски:  ${dict2[id]} `);
                // callback(id);
                // console.log(cash);
            } else {
                http.makeRequest(id, function (data) {
                    cash[id] = data;
                    callback(data);
                });
            }
        }
    }
})();

function callback(data) {
    console.log(data);
    loader.style.display = "none";
    output.innerHTML += `${data} <br>`;
};

function get(id) {
    return document.getElementById(id);
};

get('btn1').addEventListener('click', function () {
    get('loader').style.display = "inline";
    var id = get('forRequest').value;
    http.makeRequest(id, callback);

});

get('btn2').addEventListener('click', function () {
    get('loader').style.display = "inline";
    var id = get('forRequest').value;
    proxy.makeRequest(id, callback);
});

var dict1 = {
    cat: 'Кіт',
    dog: 'Пес'
};
var dict2 = {
    cat: 'Кот',
    dog: 'Пёс'
};