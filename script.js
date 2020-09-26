 $(".submit").click((e)=>{
  e.preventDefault();
  let item = $("input");
  if(item.val().length > 0){
    $("ul").append(`<li>${item.val()}<button class="check">check</button><button class="delete">delete</button></li>`);
    item.val("");
}});

 function checkItem() {
   $(this).parent().toggleClass('strike');
 }
 
 function deleteItem() {
   $(this).parent().remove();
 }
 
 $(document).ready(function() {
   $(document).on('click', '.check',  checkItem);
   $(document).on('click', '.delete', deleteItem);
 });
