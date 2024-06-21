let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

// test starting
function startTest() {
    // setting the test text in the readonly box
    document.getElementById("inputText").value = testText;

    //  reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    // change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

// endTest function
function endTest() {
    endTime = new Date().getTime();

    // disable user input
    document.getElementById("userInput").readOnly = true;

    // calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    // split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" + 
        "<p>Total Length: " + userTypedText.length + "</p>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";


    // reset the button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}


