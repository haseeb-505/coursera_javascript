let count = 0; // initialize count to 0

function increaseCount() {
    count ++; // increment the count by 1
    displayCount(); // display the follower count
    checkCountValue(); // token of appreciation for certain number of followers
}

// check the count value and dispaly a message.
function checkCountValue() {
    if (count === 10) {
        alert("Your socila media post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your social media post gained 20 followers! Keep it up!");
    }
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}