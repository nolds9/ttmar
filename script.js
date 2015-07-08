$('#first_paragraph').on('click', function (){$('body').css('background-color', '#C0C0C0')})



$('#second_paragraph').on('click', function(){

  $('.second_paragraph').attr('style', 'display: inline').css("color","white")

})


$('#first_chorus').on('click', function(event){
      event.preventDefault();
      $('.first_chorus').attr('style', 'display: block').css("color","white");

    })

$('#third_paragraph').on('click', function(event){
    event.preventDefault();
    $('.third_paragraph').attr('style', 'display: block').css("color","white");
  })

  $('#fourth_paragraph').on('click', function(event){
      event.preventDefault();
      $('.fourth_paragraph').attr('style', 'display: block').css("color","white");
    })


var counter = 0
var chorusP = document.querySelectorAll('.second_chorus')
var chorusL = document.querySelector('#second_chorus')

// chorusL.addEventListener('click', function(event){
//     if (counter < 6){
//       chorusP[counter].style.display = 'block';
//       counter += 1
//     }
//
// })


$('#second_chorus').on('click', function(event){
  event.preventDefault();
  if (counter < 6) {
    $('.second_chorus').eq(counter).attr('style', 'display: block').css("color","white");
    counter += 1;
  }

})


$('#second_chorus').on('click', function(event){
    event.preventDefault();


})
