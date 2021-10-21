//////////////////////////////////////////////////
// Subj:   
// By:      Virgilio D. Cabading Jr.
//////////////////////////////////////////////////

function renameUser() {
    console.log ("lkj;loj;ojk;ljk;lj;ljk")
    var x = document.querySelector("#user_name");
    console.log(x.innerHTML);
    // x.innerHTML = "Marie Jane"
    document.getElementById("user_name").innerHTML = document.getElementById("enter_new_profile_name").value;
}

