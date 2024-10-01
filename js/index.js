function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>displayUser2(data))
}

function displayUser2(users){
    for(const user of users){
        const ul = document.getElementById('user-list');
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}