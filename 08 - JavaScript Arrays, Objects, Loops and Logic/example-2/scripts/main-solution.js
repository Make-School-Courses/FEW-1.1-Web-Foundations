
// Loop through the contents of data

//for (let i = 0; i < data.length; i += 1) {
//  console.log(i, data[i].first_name, data[i].age);
//}

//for (let i = 0; i < data.length; i += 1) {
//  console.log(data[i].prefix, data[i].first_name, data[i].last_name);
//}

//let str = '';
//for (let i = 0; i < data.length; i += 1) {
//  console.log(data[i].prefix, data[i].first_name, data[i].last_name);
//  str += `<div class="">${data[i].prefix} ${data[i].first_name} ${data[i].last_name}</div>`;
//}
//document.getElementById('content').innerHTML = str;

//let str = '';
//for (let i = 0; i < data.length; i += 1) {
//  console.log(data[i].prefix, data[i].first_name, data[i].last_name);
//  const date = new Date(data[i].date * 1000).toDateString();
//  str += `<div class="">${data[i].prefix} ${data[i].first_name} ${data[i].last_name} ${date}</div>`;
//}
//document.getElementById('content').innerHTML = str;

class User {
  constructor(obj) {
    for (var key in obj) {
      this[key] = obj[key];
    }
  }
}

const users = [];
for (let i = 0; i < data.length; i += 1) {
  users.push(new User(data[i]));
}

console.log(users);

function render() {
  let str = '';
  for (let i = 0; i < data.length; i += 1) {
    console.log(data[i].prefix, data[i].first_name, data[i].last_name);
    const date = new Date(data[i].date * 1000).toDateString();
    str += `<div class="">${data[i].prefix} ${data[i].first_name} ${data[i].last_name} ${date}</div>`;
  }
  document.getElementById('content').innerHTML = str;
}


