var timeout = 0;
var timeP = 1000;
var total = 0;

function allValues(all) {
    timeout = 0;
    total = 0;
    document.getElementById("span-input-i").innerHTML = "Assigning total Value  " + total;
    A(all);
}

function A(all) {
    document.getElementById("span-input-a").innerHTML = '';
    document.getElementById("span-input-e").innerHTML = '';
    document.getElementById("span-input-t1").innerHTML = '';
    document.getElementById("span-input-t2").innerHTML = '';
    document.getElementById("span-input-p").innerHTML = '';
    document.getElementById("span-input-d").innerHTML = '';


    document.getElementById("span-input-a").innerHTML = all;
    E(all);
}
function E(all) {
    document.getElementsByClassName("myclassE")[0].src = "RedArrow.png";
    var input = all.split(" ");

    var res = input[1].split("+").map(function (item) {
        return item.trim();
    });;
   

var c = 0;
    // setTimeout(function () {
    for (let i = 0; i < res.length; i++) {
        
        if(c%2==0){
            setTimeout(function () {
                document.getElementById("span-input-e").innerHTML = all;
                //document.getElementsByClassName("myclassE")[0].src = "RedArrow.png";
                document.getElementsByClassName("myclassE")[0].src = "arrow.png";
                document.getElementsByClassName("myImgET1")[0].src = "RedArrow.png";
                document.getElementsByClassName("myImg2")[0].src = "arrow.png";
                document.getElementsByClassName("myImgET2")[0].src = "arrow.png";
            }, timeout += timeP);
        var t1 = parseInt(T1(res[i]));
        total = total + t1;
        c++;
        }
        else {
            setTimeout(function () {
                document.getElementById("span-input-e").innerHTML = all;
                //document.getElementsByClassName("myclassE")[0].src = "RedArrow.png";
                document.getElementsByClassName("myclassE")[0].src = "arrow.png";
                document.getElementsByClassName("myImgET1")[0].src = "arrow.png";
                document.getElementsByClassName("myImgET2")[0].src = "RedArrow.png";
            }, timeout += timeP);
            var t2 = parseInt(T2(res[i]));
            total = total + t2;
            c++;
        }
        setTimeout(function () {
            document.getElementById("span-input-i").innerHTML = "Assigning total Value  " + total;
            document.getElementsByClassName("myImgET1")[0].src = "arrow.png";
            document.getElementsByClassName("myImgET2")[0].src = "arrow.png";
            document.getElementsByClassName("myImg")[0].src = "arrow.png";
            document.getElementsByClassName("myImg1")[0].src = "arrow.png";
            document.getElementsByClassName("myImg2")[0].src = "arrow.png";
            document.getElementsByClassName("myImg3")[0].src = "arrow.png";
            document.getElementsByClassName("myImg4")[0].src = "arrow.png";

        }, timeout += timeP);

    }

}


function T1(res) {
    var count = 0;
    var arr = [];
    var val = res.length;
    console.log(res);
    var resMul = 1;
    var letters = /^[A-Za-z]+$/;



    console.log(letters);
    if (!isNaN(res)) {    //constant
        resMul = resMul * res;
        return resMul;
    }

    else if (res.includes("^")) {     //exponential
        console.log("exp or var");
        if (res.includes("*")) {
            arr = res.split("*");
        }
        else {
            arr[0] = res;
            console.log("arr[0]", arr[0]);
        }
        for (let i = 0; i < arr.length; i++) {
            var arr1 = arr[i].split("^");
        }

        setTimeout(function () {
            document.getElementsByClassName("myImg2")[0].src = "arrow.png";

            document.getElementById("span-input-t1").innerHTML = (typeof arr[1] != "undefined" ? arr[1] : arr[0]);
            document.getElementsByClassName("myImgET1")[0].src = "arrow.png";
            document.getElementsByClassName("myImg")[0].src = "RedArrow.png";

        }, timeout += timeP);


        var retP = P(arr1, arr);

        if (arr.length == 2) {
            var result = arr[0] * retP;
        }
        else {
            result = retP;
        }
        return result;

    }

    else {  //variable
        console.log("var", res);
        // document.getElementsByClassName("myImgET1")[0].src = "arrow.png";
        var retD = D1(res, "t1");
        // document.getElementById("span-output-d").innerHTML = "= " + retD;
        return retD;
    }



}
function T2(res) {
    var val = res.length;
    console.log(res);
    var resMul = 1;
    var letters = /^[A-Za-z]+$/;
    console.log("T2 val for constant", res, !isNaN(res));
    if (!isNaN(res)) {     //constant

        resMul = resMul * res;
        return resMul;
    }

    else if (res.includes("^")) {         //exponential
        if (res.includes("*")) {
            arr = res.split("*");
        }
        else {
            arr[0] = res;
            console.log("arr[0]", arr[0]);
        }
        for (let i = 0; i < arr.length; i++) {
            var arr1 = arr[i].split("^");
        }


        setTimeout(function () {
        document.getElementsByClassName("myImg2")[0].src = "Redarrow.png";
            
            document.getElementById("span-input-t2").innerHTML = (typeof arr[1] != "undefined" ? arr[1] : arr[0]);
            document.getElementsByClassName("myImgET2")[0].src = "arrow.png";


        }, timeout += timeP);

        var retP = P(arr1, arr);

        if (arr.length == 2) {
            var result = arr[0] * retP;
        }
        else {
            var result = retP;
        }
        return result;
    }

    else {  //variable

        var retD = D1(res, "t2");
        return retD;
    }
}

function P(res, res1) {
    setTimeout(function () {
        document.getElementById("span-input-p").innerHTML = "Factor is" + (typeof res1[1] != "undefined" ? res1[1] : res1[0]);;
       // document.getElementsByClassName("myImg")[0].src = "Redarrow.png";
        document.getElementsByClassName("myImg4")[0].src = "Redarrow.png";

    }, timeout += timeP);

    for (let i = 0; i < res.length - 1; i++) {
        if (res.length > 1) {
            var retD = D(res[i], res[i + 1]);
            setTimeout(function () {
                document.getElementById("span-output-p").innerHTML = "=" + retD;
                document.getElementsByClassName("myImg")[0].src = "arrow.png";
                document.getElementsByClassName("myImg4")[0].src = "arrow.png";
                //document.getElementsByClassName("myImgET2")[0].src = "RedArrow.png";
            }, timeout += timeP);

            return retD;
        }
    }
}
//For expo
function D(res, res1) {
    var X = 2;
    var Y = 3;
    var arr = [];
    var pow = '';

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var valarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8];
    var val = valarr[alphabet.indexOf(res)];

    console.log(res, res1);

    setTimeout(function () {
        document.getElementById("span-input-d").innerHTML = res + " = " + val;
    }, timeout += timeP);

    pow = Math.pow(val, res1);
    arr.push(pow);
    return arr;

}
///for vari
function D1(res, t) {
    var X = 2;
    var Y = 3;
    var arr = [];
    var pow = '';
    var mul = 1;

    console.log("D! res val", res);
    setTimeout(function () {
        if(t=='t2')
            document.getElementsByClassName("myImg3")[0].src = "RedArrow.png";
        if(t=='t1')
            document.getElementsByClassName("myImg1")[0].src = "RedArrow.png";
         document.getElementById("span-input-" + t).innerHTML = res;
        document.getElementsByClassName("myImgET1")[0].src = "arrow.png";
            //  document.getElementsByClassName("myImgET1")[0].src = "RedArrow.png";
    }, timeout += timeP);
    

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var valarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8];


    var val = res.split("*");
    console.log(val);

    for (let i = 0; i < val.length; i++) {
        var result = valarr[alphabet.indexOf(val[i])];

        if (alphabet.indexOf(val[i]) > -1) {

            mul *= result;
            setTimeout(function () {
                // document.getElementsByClassName("myImg1")[0].src = "RedArrow.png";
                document.getElementById("span-input-d").innerHTML = val[i] + " = " + result;
            }, timeout += timeP);
        }
        else {
            mul *= val[i];
        }
    }
    setTimeout(function () {
        document.getElementById("span-output-d").innerHTML = "value= " + mul;
    }, timeout += timeP);
    return mul;
}