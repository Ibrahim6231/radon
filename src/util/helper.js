const todaysDate = function printDate(){
    const d = new Date()
    const dd = d.toLocaleDateString();
    console.log(dd);
}
const month = function printMonth(){
    const d = new Date()
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dmonth = d.getMonth(); //getMonth returns a zero based month so adding one will return the current month.
    console.log("Current month is :"+ (dmonth+1));
    console.log("The name of current month is "+ monthNames[dmonth]);
}
const myBatch = function getBatchInfo(){
    console.log("batch : Radon, week3_Day1");
    console.log("Topic discussed today: Nodejs, How to declare a variable publicly, git fetch, git stash apply/pop");
}
module.exports.todaysDate = todaysDate;
module.exports.month = month;
module.exports.myBatch = myBatch;