let userRole = "admin";
let accessLevel;

//conditional check for accessLevel
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole == "Admin") {
    accessLevel = "Limited access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

// print the access level result in console
console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

// nested check
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage ="Please log in to access the system.";
}

console.log("User Message:", userMessage);

// Defining variables and switch statement for userType and userCategory
let userType = "subscriber";
let userCategory;

// switch different case values
switch (userType) {
    case "admin":
        userCategory = "Administrator"
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown"
        break;
}

console.log("User Category:", userCategory);
