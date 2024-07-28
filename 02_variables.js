// there are 3 type of variable 
// let const var



var myName = 'ZOhaib Arshad' // 1) old way tu use, 2) issue in block Scope  and function scope 
console.log(myName);

let emailId = 'zohaibfta@gmail.com'
console.log(emailId)


// const ko change nh kr sakhty
const accountId = 232323
// const accountId = 43 // its show us error
console.log(accountId);
// other and best way to write 
console.log(`This is my account ID : ${accountId}`);

let clgName
console.log(clgName) // it show undefined , bcz

// agr hum sb ko ek sath print krna chty ha 
console.table([myName, emailId, accountId, clgName])