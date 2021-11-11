SetupHackerInfo = function(data) {

}

$(document).on('click', '.hacker-app-button-menu', function(e){
    e.preventDefault();
    $.post(`https://qb-phone/qb-phone:hackerApp:OpenPhone`)
});


window.addEventListener('message', function( event ) {
  if (event.data.HackerPhoneNui == 'open') {
    $('.hacker-app-enter').css('display','none');
    $('.hacker-app-display').css('display','block');
    $('.uyuyorumterminal').css('display','block');
    $('.hacker-app-menu').css('display','block');

  }
  else if (event.data.HackerPhoneTargetNui == 'open') {
    $('.hacker-app-notify').css('display','block');
    $('.uyuyorumterminal').css('display','none');
    console.log("1");
    $('.hacker-app-notify').html('~$ root@qbcore hacking started');
    setTimeout(function(){
      $('.hacker-app-info').css('display','block');
      $('#lastname').html(event.data.targetinformation.targetlastname);
      $('#name').html(event.data.targetinformation.targetname);
      $('#dob').html(event.data.targetinformation.targetdob);
      $('#bankmoney').html(event.data.targetinformation.targetbank);
      $('#phonenumber').html(event.data.targetinformation.targetphone);
      return;
    }, 5000);
  }
  else if (event.data.HackerPhoneNotifyNui == 'open') {
    $('.hacker-app-notify').css('display','block');
    $('.hacker-app-notify').html('~$ root@qbcore error 503');
    $('.hacker-app-info').css('display','none');
  }
});

$("#blackout" ).click(function() {
  notify();
  $('.hacker-app-notify').html('~$ root@qbcore blackout!');
  $.post(`https://qb-phone/qb-phone:hackerApp:blackout`);
});

$("#target" ).click(function() {

  $.post(`https://qb-phone/qb-phone:hackerApp:targetinformation`)
});

$( "#vehicle" ).click(function() {
  notify();
  $('.hacker-app-notify').html('~$ root@qbcore explosion!!!!!!!');
  $.post(`https://qb-phone/qb-phone:hackerApp:vehiclehealth`)
});


function notify(){
  $('.hacker-app-notify').css('display','block');
  $('.uyuyorumterminal').css('display','none');
  $('.hacker-app-info').css('display','none');
}
