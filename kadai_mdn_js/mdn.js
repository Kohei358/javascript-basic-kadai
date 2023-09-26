const date = new Date();
string = date.getFullYear() + "年";
string += (date.getMonth()+1) + "月";
string += date.getDate() + "日";

console.log(string);