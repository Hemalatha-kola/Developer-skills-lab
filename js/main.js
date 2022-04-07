$(document).ready(function(){
    console.log("The page is ready!")
});
$('tr').hide();
$('#addskill').on('click',function(){
    let input=$('input').val();
   //console.log(input);
    let newElements= `
    <tr>
       <td><button type="button" class="check">x </button>${input}</td>
   </tr>
       `;
   $('table').append(newElements);
   $('input').val('');
});
$('table').on('click', 'button' , function(){
    console.log("clicked");
    $(this).closest('td').fadeOut(1000, function(){
        $(this).remove();
    });
});
  
