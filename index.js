let addto = {myitems:[

]}

let product ={myproduct:[
    {itemname:'Air Jordan 1 Retro High OG',description:'a whole new icon. Celebrating 35 years of the Air Jordan 3',price:100,image:'./assets/pic/1.png'},
    {itemname:'Cheap T-Shirts',description:"The 19 cheap T-shirts we’ve highlighted below probably But the same way an 80-cent bodega ",price:200,
    image:'./assets/pic/2.png'},
    {itemname:'Rayzen 77',description:'stand out against layers of white and Cement Grey. And the finishing touch cushioning underfoot lets ',price:300,image:'./assets/pic/3.png'},
    {itemname:'Gu-Matang Khan',description:' T-shirt to be a T-shirt—an affordable swath of fabric that covers your chest, brings a touch of unexpected ',price:100,image:'./assets/pic/4.png'},
    {itemname:'Pabangug ta gukag',description:'Description',price:400,image:'./assets/pic/5.png'},
    {itemname:'Yanaha-Dahon',description:'Description',price:500,image:'./assets/pic/6.png'},
    {itemname:'Eroplano na Eraw',description:'Description',price:600,image:'./assets/pic/7.png'},
    {itemname:'Bale ni-Along',description:'Description',price:700,image:'./assets/pic/8.png'},
] };

var x = 1;
let mycard = document.getElementById("mycard"); 
let carddetail = '   <div class="row">';
product.myproduct.forEach(function(item,index){
      x=x+1;
        if( index % 4  ){
            
            carddetail +=`   <div class="col-sm-1 col-md-6 col-lg-3">
            <div class="card">
               <img src="${item.image}" class="card-img-top myimg"  style="height:200px;width:250px" alt="...">
              <div class="card-body">
                <h5 class="card-title">${item.itemname}</h5>
                <p class="card-text">Description: ${item.description }.</p>
                
                <h4><span class="badge bg-danger">PRICE: ${item.price }</span></h4>
                <span class="btn btn-success btn-sm" onclick="addtocart('${item.itemname}','${item.price}','${item.image}','${item.description }');" >Add to cart
              </span>
              </div>
            </div>
          </div>`; 

        }else{


            carddetail +=` </div>
            <br/>        

            <div class="row">
            <div class="col-sm-1 col-md-6 col-lg-3">
            <div class="card">
               <img src="${item.image}" class="card-img-top myimg" style="height:200px;width:250px" alt="..."> 
              <div class="card-body">
              <h5 class="card-title">${item.itemname}</h5>
              <p class="card-text">Description: ${item.description }.</p>
             
              <h4><span class="badge bg-danger">PRICE:${item.price }</span></h4>
              <span class="btn btn-success btn-sm" onclick="addtocart('${item.itemname}','${item.price}','${item.image}','${item.description }');" >Add to cart
              </span>
              </div>
            </div>
          </div>`; 
          
        }


    mycard.innerHTML = carddetail;
      
})
showCart();

function showCart(){
  let itemincart = "";
  let  totalcost = 0 ;
  let cartDetails = document.getElementById("cartDetails") ;
  addto.myitems.forEach(function(item,index){
   itemincart += `<tr><td>${item.itemname}</td>
   <td>${item.description}</td>
   <td>${item.price}</td>
   <td>1</td>
   <td> <span class="btn btn-danger btn-sm"  onclick="deleteitem('${index}');" >Delete</span></td></tr>`;
    totalcost = totalcost +  parseInt(item.price); 
  })
  if(totalcost != 0 ){
    itemincart += `<tr><td colspan="2"><b>Total</b></td><td colspan="3">${ parseInt( totalcost)}</td></tr> ` ;

  }
 
  cartDetails.innerHTML = itemincart;

}
function deleteitem(index){
  addto.myitems.splice( index, 1);
  showCart();
}
function addtocart(item,price,image,description){
  
  addto.myitems.push({itemname:item,
                      description:description,
                      price:price,
                      image:image});
    showCart();
  alert(item + " succesfully Added!");
 }   