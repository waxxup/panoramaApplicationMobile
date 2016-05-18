var result = [];
$('#submit').hide();
var writtenlog = "";
var filtre = 1;

$("#select").change(function() {
    filtre = $("#select").val();
    submitFunction();
});


function addFunction(){
    var actual = document.getElementById('input_array').value;
    var found = $.inArray(actual, $local_source) > -1;
    var found2 = $.inArray(actual, result) > -1;
    document.getElementById("input_array").value = "";
    $('#input_array').removeClass('place');
    $('#input_array').attr("placeholder", "Ajouter un ingredient");
    if(found == true && found2 == false){
        if(actual.length !== 0){
            result.push(actual);
            document.getElementById("log").innerHTML="";
            for (var e = 0; e < result.length; e++) {
                document.getElementById("log").innerHTML=writtenlog + "<div class='result'>" + result[e] + "<span onclick='deleteFunction("+ e +")' >X</span></div>";    
            }
            writtenlog = document.getElementById("log").innerHTML;
            $('#submit').show();
        }
    }
    else if (found ==  false){
        $('#input_array').attr("placeholder", "Ingredient inconnu");
        $('#input_array').addClass('place');
    }
    else{
        $('#input_array').attr("placeholder", "Ingredient deja entre");
        $('#input_array').addClass('place');
    }
    submitFunction();
}

function submitFunction(){
    var isOk = 0;
    var missing = [];
    var written = "" ;
    document.getElementById("resultats").innerHTML=written;
    if(result.length !== 0){
        for (var i = 0; i < cocktails.length; i++) {
            for (var a = 1; a < (cocktails[i].length - 2); a++) {
                var found = $.inArray(cocktails[i][a], result) > -1;
                if (found == false){
                    missing.push(a);
                    isOk++;
                }
            }
            if(isOk == 0){


                console.log("Nom du cocktail:  " + cocktails[i][0]);
                document.getElementById("resultats").innerHTML=written + "<h1>" + cocktails[i][0] + "</h1><h2>Recette:</h2><img src='img/" + cocktails[i][(cocktails[i].length - 2)] + "'>";
                written =  document.getElementById("resultats").innerHTML;
                for (var u = 0; u < (cocktails[i][(cocktails[i].length - 1)].length); u++) {
                    document.getElementById("resultats").innerHTML=written + "<li class='aqui'>" + cocktails[i][[(cocktails[i].length - 1)]][u] + "</li>";
                    written =  document.getElementById("resultats").innerHTML;
                }
            }
            else if(isOk < filtre){


                console.log("Nom du cocktail:  " + cocktails[i][0]);
                document.getElementById("resultats").innerHTML=written + "<h1>" + cocktails[i][0] + "</h1><h2>Recette:</h2><img src='img/" + cocktails[i][(cocktails[i].length - 2)] + "'>";
                written =  document.getElementById("resultats").innerHTML ;
//                for (var a = 1; a < (cocktails[i].length - 2); a++) {
//                    var found = $.inArray(cocktails[i][a], missing) > -1;
//                    if(found == true){
//                        console.log(cocktails[i][a] + "   | ingrédient manquant");
//                    }
//
//                }
                for (var u = 0; u < (cocktails[i][(cocktails[i].length - 1)].length); u++) {
                    var found = $.inArray((parseInt(u) + 1), missing) > -1;
                    console.log(found);
                    if(found == false){
                        document.getElementById("resultats").innerHTML=written + "<li class='aqui'>" + cocktails[i][[(cocktails[i].length - 1)]][u] + "</li>";
                    }
                    else{
                        document.getElementById("resultats").innerHTML=written + "<li class='miss'>" + cocktails[i][[(cocktails[i].length - 1)]][u] + "</li>";
                    }
                    written =  document.getElementById("resultats").innerHTML ;


                }
            }


            isOk = 0;
            missing = [];
            written = document.getElementById("resultats").innerHTML + "<div class='barre'></div>";

        }
        written = "";

    }

}


function deleteFunction(param){
    result.splice(param , 1);
    document.getElementById("log").innerHTML="";
    document.getElementById("resultats").innerHTML="";
    writtenlog = "";
    if(result.length !== 0){
        console.log(result.length);
        for (var o = 0; o < (result.length) ; o++) {
            document.getElementById("log").innerHTML=writtenlog + "<div class='result'>" + result[o] + "<span onclick='deleteFunction("+ o +")' >X</span></div>";
            writtenlog = document.getElementById("log").innerHTML;
        }
        submitFunction();
    }
}


