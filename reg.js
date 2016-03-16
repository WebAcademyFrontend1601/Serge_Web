var ref = new Firebase("https://chat-dudnikov.firebaseio.com");
var users = new Firebase("https://chat-dudnikov.firebaseio.com/users");


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
    {  remember: "sessionOnly"})};

function reg(){
var email = $("#email-r").val();
var password = $("#password-r").val();
var username = $("#username").val();
    ref.createUser({email, password}, function(error, userData) {
        if (error) {
            console.log("Error creating user:", error);
        } else {
            console.log("Successfully created user account with uid:", userData.uid);
                var usersRef = ref.child("users/" + userData.uid);
                    usersRef.push(  
                        
                            {
                                Username: username,
                                email: email,
                            }

);
}
}
);
};
function getUserdata(){

    users.getAuth();
        console.log("This is uid------>");
            console.log(authData.uid);
                var usersRef = ref.child("users/" + authData.uid);
                    usersRef.once("value", function(snapshot) {
                        var data = snapshot.val();
                            console.log("This is data------>");
console.log(data);
var arr = $.map(data, function(el) { return el });
console.log("This is arr------>");
console.log(arr);
var arr = $.map(arr[0], function(el) { return el });
console.log(arr1);
console.log("this is a username ->" + arr1[0] + " & this is a email->" + arr1[1]);
    
            }) 
}