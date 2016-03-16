var ref = new Firebase("https://chat-dudnikov.firebaseio.com");
var users = new Firebase("https://chat-dudnikov.firebaseio.com/users");




function getUserInfo(){
users.getAuth();
console.log("This is uid------>");
console.log(authData.uid);

var usersRef = ref.child("users/" + authData.uid);
usersRef.once("value", function(snapshot) {
var data = snapshot.val();
//console.log("This is data------>");
//console.log(data);
var arr = $.map(data, function(el) { return el });
//console.log("This is arr------>");
//console.log(arr);
var arr = $.map(arr[0], function(el) { return el });
//console.log(arr);
console.log("this is a username ->" + arr[0] + " & this is a email->" + arr[1]);})};