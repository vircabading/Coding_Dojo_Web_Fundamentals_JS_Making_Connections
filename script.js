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
    tempID = parseInt(tempID);                                                        // Retrieve the connection id
    console.log("In removeConnection function, tempID is:", tempID);

    document.getElementById(tempID + "-connection").remove();
}