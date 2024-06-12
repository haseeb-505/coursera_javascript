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

// Add event listener to the reset button and define the resetFollowers function inline
// uncomment the next blcok of code if you do not want to add resetFollowers function

// document.getElementById("reset").addEventListener('click', function() {
//     let userconfirm = confirm("Are you sure, you want to reset followers?");
//     if (userconfirm) {
//         count = 0; // setting the count equal to zero after confirmation
//         displayCount(); // display the updated count
//         alert("Follower count is reset to zero");
//     };
// });

// now using resetFollowers function
// event listener is not needed as we are directly passing the function on click

function resetFollowers() {
    let userconfirm = confirm("Are you sure, you want to reset followers?");
    if (userconfirm) {
        count = 0;
        displayCount();
        alert("Follower count is reset to zero");
    }
}

// to display the message on buttons
const tooltip = document.getElementById("tooltip");

function showtooltip(message, event) {
    tooltip.innerText = message;
    tooltip.style.left = `${event.pageX + 30}px`;
    tooltip.style.top = `${event.pageY - 40}px`; // Adjust as needed
    tooltip.classList.add('show');
}

function hidetooltip() {
    tooltip.classList.remove('show');
}

document.getElementById("follow").addEventListener('mouseenter', event => showtooltip("Click to Follow", event));
document.getElementById("follow").addEventListener('mouseleave', hidetooltip);

document.getElementById("reset").addEventListener('mouseenter', event => showtooltip("Click to reset followers", event));
document.getElementById("reset").addEventListener('mouseleave', hidetooltip);


