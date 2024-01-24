let ten = [ " Dao Tri Duc ", " duc tri dao ", " tri duc dao ", " Duc Dao Tri"];
let tenList = document.getElementById("tenList");
ten.forEach(function(ten)
{
 let li = document.createElement("li");
 li.appendChild(document.createTextNode(ten));
tenList.appendChild(li); 
}
)
