var user = document.querySelector('#user');
user.addEventListener('keyup', function(){
   //var u_times = document.querySelector('.u-times');
   //var u_check = document.querySelector('.u_check');
   if(user.value.length == 0 || user.value.length<6){
        user.style.border = '1px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
        return false;
   } else {
    user.style.border = '1px solid green';
    u_times.style.display = 'none';
    u_check.style.display = 'block';
   }

})

var pass = document.querySelector('#pass');
pass.addEventListener('keyup', function(){
   //var u_times = document.querySelector('.u-times');
   //var u_check = document.querySelector('.u_check');
   if(pass.value.length == 0 || pass.value.length<8){
        pass.style.border = '1px solid red';
        u_times.style.display = 'block';
        u_check.style.display = 'none';
        return false;
   } else {
    pass.style.border = '1px solid green';
    u_times.style.display = 'none';
    u_check.style.display = 'block';
   }

})

function validate(){
    if(user.value.length == 0 || user.value.length < 6){
        document.getElementById('error').innerHTML = 'Please Fill required fields.';
        return false;
    } else if(pass.value.length ==0 || pass.value.length<8){
        document.getElementById('error').innerHTML = 'Please Fill required fields.';
        return false;
    } else {
        alert('Successfully Logged in');
    }
}