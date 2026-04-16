let userRole="admin";
let accesslevel;
if (userRole==="admin"){
    accesslevel="Full access granted";
} 
else if (userRole==="manager"){
    accesslevel="Limited access granted";
}
else{
    accesslevel="No acess granted";
}
console.log("Access Level :",accesslevel);

let isLoggedIn=true;
let userMessage;

if(isLoggedIn){
    if (userRole==="admin"){
        userMessage="Welcome, Admin";
    } else {
        userMessage="Welcome User";
    }
}
else {
    userMessage="Please login to acess the system";
}
console.log("User Message",userMessage);

let userType="subscriber";
let userCatogery;

switch (userType) {
    case "admin":
        userCatogery="Administrator";
        break;
    case "manager":
        userCatogery="Manager";
        break;
    case "subscriber":
        userCatogery="Subscriber";
        break;
    default:
        userCatogery="Unknown";
}

console.log("User Category",userCatogery);

