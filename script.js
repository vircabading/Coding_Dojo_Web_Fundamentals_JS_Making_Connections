//////////////////////////////////////////////////
// Subj:   Coding Dojo > Web Fundamentals > Javascript > Making Connections
// By:     Virgilio D. Cabading Jr.    Created: October 19, 2021
//////////////////////////////////////////////////

function renameUser() {                                                         // Function that renames the User
    var tempElement = document.getElementById("enter_new_profile_name");

    document.getElementById("user_name").innerHTML = tempElement.value;         // Assign new profile name
    tempElement.value = "Enter New Profile Name";                               // Clear out input field again
}

function removeConnection (element) {
    var tempID = element.id;
    tempID = parseInt(tempID);                                                  // Retrieve the connection ID
    document.getElementById(tempID + "-connection").remove();                   // Remove the connection using connection ID

    var connectionRequestsObject = document.getElementById("connection-requests-count");    // Get Connection Requests Object
    connectionRequestsObject.innerHTML = parseInt(connectionRequestsObject.innerHTML) - 1;  // Decrease Connection Requests by one

    var yourConnectionsObject = document.getElementById("your-connections-count");
    // console.log("Your connections count is: " + yourConnectionsObject.innerText);

    tempID = element.id;                                                        // Reset temp ID back to Element ID
    if (tempID.length == 16) {                                                  // If temp ID = "accept-id"
        yourConnectionsObject.innerHTML = parseInt(yourConnectionsObject.innerHTML) + 1;    // then add One to Your Connections Count
    }
}