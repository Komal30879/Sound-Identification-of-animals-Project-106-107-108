
function start_classification(){
    console.log("pinkie pie");
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

        document.getElementById("object").innerHTML= 'I can hear - ' + results[0].label;
        document.getElementById("accuracy").innerHTML = (results[0].confidence * 100).toFixed(2);

        img = document.getElementById("gifs");
        if(results[0].label == "Barking"){
            img.src = 'dog.gif';
        } else if(results[0].label == "Meowing"){
            img.src = 'cat.gif'
        } else if(results[0].label == "Mooing"){
            img.src = 'cow.gif'
        } else if(results[0].label == "Chirping"){
            img.src = 'bird.gif'
        } else if(results[0].label == "Roaring"){
            img.src = 'tiger.gif'
        } else if(results[0].label == "Background Noise"){
            img.src = 'ear.gif'
        }
    }
}