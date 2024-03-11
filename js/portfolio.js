const imageAvatar = document.querySelector('.imageAvatar');
const nameprompt = document.querySelector('.firstname');

imageAvatar.addEventListener('click', function () 
{
    imageAvatar.src ="image/avatar.svg";
})

const clickButton = document.createElement('button');
clickButton.id = "myButton";
clickButton.innerHTML = "Modify text"
firstname.appendChild(clickButton);

document.getElementById('myButton').addEventListener('click', function(){
    
    const username = prompt(`Enter your name ?`);

    if (username !== null && username !=='') {
        firstname.textContent = username;
        firstname.style.color = 'white';
        
    } 
}
)
    
