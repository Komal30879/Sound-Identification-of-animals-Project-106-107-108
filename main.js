
function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/v-8LTREl0/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("object").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_label").style.color = "rgb("+ random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb("+ random_number_r + "," + random_number_g + "," + random_number_b + ")";

        dog = 0;
        cat = 0;
        cow = 0;
        bird = 0;
        tiger = 0;

        img = document.getElementById("gifs");
        if(results[0].label == "Barking"){
            img.src = 'dog.gif';
            dog = dog + 1;
            document.getElementById("accuracy").innerHTML = dog;
        } else if(results[0].label == "Meowing"){
            img.src = 'cat.gif'
            cat = cat + 1;
            document.getElementById("accuracy").innerHTML = cat;
        } else if(results[0].label == "Mooing"){
            img.src = 'cow.gif'
            cow = cow + 1;
            document.getElementById("accuracy").innerHTML = cow;
        } else if(results[0].label == "Chirping"){
            img.src = 'bird.gif'
            bird = bird + 1;
            document.getElementById("accuracy").innerHTML = bird;
        } else if(results[0].label == "Roaring"){
            img.src = 'tiger.gif'
            tiger = tiger + 1;
            document.getElementById("accuracy").innerHTML = tiger;
        } else if(results[0].label == "Background Noise"){
            img.src = 'ear.gif'
            document.getElementById("accuracy").innerHTML = "";
        }
    }
}