var ref = new Firebase("https://chat-dudnikov.firebaseio.com");

function login(){ 
var email = $("#email-l").val();
var password = $("#password-l").val();
        
ref.authWithPassword({
    email, password}, 
    function(error, authData){
    if (error){
    console.log("Login Failed!", error);
    } else  {
    console.log("Authenticated successfully with payload:", authData);
            }   
    },
    {  remember: "sessionOnly"}

    )
}; 
function reg(){
var email = $("#email-r").val();
var password = $("#password-r").val();
var username = $("#username").val();
    ref.createUser({email, password}, function(error, userData) {
        if (error) {
            console.log("Error creating user:", error);
        } else {
            console.log("Successfully created user account with uid:", userData.uid);
                var usersRef = ref.child("users");
                    usersRef.push({  
                        [userData.uid]: 
                            {
                                Username: username,
                                email: email,
                            }
}
);
}
}
);
};
// function show(){
//var email = $("#email-r").val();
//var password = $("#password-r").val();
//var username = $("#username").val();
//var userdata = email + " " + password;
//// console.dir(userdata);
//console.log(email + " "+ "this is email");
//console.log(password + " " + "this is password");
//console.log(typeof(email));
//var userdata = (email + " " + password);
//console.log(userdata);
//}