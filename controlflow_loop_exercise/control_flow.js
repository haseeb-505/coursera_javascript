// 1. Suppose an organization arranges a "Dietary Services" program to provide diets to its employees and customers, based on a person\'s weight and day-to-day routine. You need to create an authorization-based code to provide access to people based on their roles in organization, such as employees, enrolled members for \"Dietary Services,\" and subscribers.

// If the person is an **Employee**, they are authorized to have access to \"Dietary Services\".
// If the person is an **Enrolled Member**, they are authorized to have access to \"Dietary Services\" and one-on-one interaction with a dietician.
// If the person is a **Subscriber**, they are authorized to have partial access to facilitate \"Dietary Services\" only.
// If the person is a **Non-Subscriber**, they need to enroll or at least subscribe first to avail this facility.
// 2. You need to communicate with the user by printing a message indicating whether that person is eligible to avail which type of services.



// if user is registered member at club
let isEnrolled = "Enrolled Member";
let userMessage;
if (role === "Enrolled Member") {
    userMessage = "Authorized access to dietary services and one-on-one interaction with a dieticain."
}

// if user is employe and registered member, then ......... otherwise user has access to only system and can't avail ono-to-one services.
let role = "Emloyee";
let accessLevel;

// user role
if (role === "Employee" ) {
    if (isEnrolled === "Enrolled Member") {
        accessLevel = "Authorized access to dietary services and one-on-one interaction with a dieticain."
    }
    else {
        accessLevel = "Authorized access to dietary services.";
    }
} else {
    accessLevel = "User is not authorized to system."
}

// If the person is a **Subscriber**, they are authorized to have partial access to facilitate \"Dietary Services\" only.
// If the person is a **Non-Subscriber**, they need to enroll or at least subscribe first to avail this facility.
// 2. You need to communicate with the user by printing a message indicating whether that person is eligible to avail which type of services.

let userType = "subscriber";
let userCategory;

switch (userType) {
    case value:
        
        break;

    default:
        break;
}

