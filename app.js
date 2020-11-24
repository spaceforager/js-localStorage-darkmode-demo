const toggleSwitch = document.querySelector('input[type="checkbox"]');

if(localStorage.getItem('darkModeEnabled')) {
    document.body.classname = 'dark';
    toggleSwitch.checked = true;
}





toggleSwitch.addEventListener('click', function(e) {
    const {checked} = toggleSwitch; //Destructuring
    if(checked) {
        localStorage.setItem('darkModeEnabled', true);
    } else {
        localStorage.removeItem('darkModeEnabled');
    }
    document.body.className = checked ? 'dark' : '';
   

})