//////////////////////////////////////////////////
// Subj:   
// By:      Virgilio D. Cabading Jr.
//////////////////////////////////////////////////

function renameUser() {                                                         // Function that renames the User
    var tempElement = document.getElementById("enter_new_profile_name");

    document.getElementById("user_name").innerHTML = tempElement.value;         // Assign new profile name
    tempElement.value = "Enter New Profile Name";                               // Clear out input field again
}

function removeConnection (element) {
    var tempID = element.id;

    var count = document.getElementById("connection-requests-count").innerHTML;
    count = parseInt(count);
    count--;

    // var connectionRequests = document.getElementById('connection-requests-count').innerText; 
    // parseInt(connectionRequests);


    console.log("Connection requests # is: " + count);
    document.getElementById("connection-requests-count").innerHTML = count;

    tempID = parseInt(tempID);                                                  // Retrieve the connection ID
    document.getElementById(tempID + "-connection").remove();                   // Remove the connection using connection ID
}