//1 
const selectElement = document.getElementById('user-select');
const buttonElement = document.getElementById('show-image-btn');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const optionElement = document.createElement('option');
            optionElement.text = user.name;
            optionElement.value = user.id;
            selectElement.appendChild(optionElement);
        });
        buttonElement.disabled = false;
    })
    .catch(error => console.error('Error:', error));

buttonElement.addEventListener('click', () => {
    const selectedUserId = selectElement.value;
    fetch(`https://jsonplaceholder.typicode.com/users/${selectedUserId}`)
        .then(response => response.json())
        .then(user => {
            console.log(user);
            const userDetailsDiv = document.createElement('div');
            userDetailsDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: ${user.website}</p>
      `;
            document.body.appendChild(userDetailsDiv);
        })
        .catch(error => console.error('Error:', error));
});
///////////////////////////////////////////////////////////////////////////
//2
const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

////////////////////////////////////////////////////////////////////////////
//3
const welcomeMessage = document.getElementById('welmessage');
const userImage = document.getElementById('usrimg');
const thanksMessage = document.getElementById('thksmessage');

function showWelcomeMessage() {
    return new Promise(resolve => {
        setTimeout(() => {
            welcomeMessage.innerHTML = 'Welcome!';
            resolve();
        }, 3000);
    });
}

function loadUserImage(){
    userImage.innerHTML = '<img src="../karim2.jpeg" alt="karim">';

}

function showUserImage() {
    return new Promise(resolve => {
        loadUserImage().then(() => {
            userImage.innerHTML = '<img src="../karim2.jpeg" alt="karim">';
            resolve();
        });
    });
}

function showThanksMessage() {
    return new Promise(resolve => {
        setTimeout(() => {
            thanksMessage.innerHTML = 'Thanks for visiting!';
            resolve();
        }, 3000);
    });
}

function redirect() {
    window.location.href = '../htmls/lab1.html';
}

showWelcomeMessage()
    .then(showUserImage)
    .then(showThanksMessage)
    .then(redirect)
    .catch(error => console.error('Error:', error));