//first: 
var slideIndex = 1;         
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide1");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//--------------------------------------------------------------------
                                      //second: 
var slideIndex2 = 1;         
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("slide2");
  if (n > x.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex2-1].style.display = "block";  
}

//--------------------------------------------------------------------
                                     //third: using w3.js library
myslide = w3.slideshow(".slide3",0)
//--------------------------------------------------------------------

var slideIndex3 = 1;              //fourth
showDivs3(slideIndex3);

function plusDivs3(n) {
  showDivs3(slideIndex3 += n);
}

function showDivs3(n) {
  var i;
  var x = document.getElementsByClassName("slide4");
  if (n > x.length) {slideIndex3 = 1}    
  if (n < 1) {slideIndex3 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex3-1].style.display = "block";  
}

                                     //fifth
 var slideIndex2 = 1;         
showDivs2(slideIndex2);

function plusDivs2(n) {
  showDivs2(slideIndex2 += n);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("slide2");
  if (n > x.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex2-1].style.display = "block";  
}

//====================================================================
var bag =[];                    // initialize price array   
                  // Animation:
$(document).ready(function(){
  $('.cart').click(function(){
    $('.checkout-container').fadeToggle();
  });
  
  $('.checkout').addClass('disabled');
  $('#bin').addClass('disabled');
});

$(document).on('click','.add-to-cart',function(e){
  e.preventDefault();
  $('.empty').hide();
  
  //---------------------------------------------------------
  if($(this).hasClass('disable')){    //disable mutiple clicks
    return false;
  }
  $(document).find('.add-to-cart').addClass('disable');
  //---------------------------------------------------------
  
  
  
  var parent = $(this).parents('.snip');
  var src = parent.find('img').attr('src');
  var cart = $(document).find('.cart');
  
  var posTop = parent.offset().top;    //return the coordinates of a element
  var posLeft = parent.offset().left;
 
  $('<img />', { 
   class: 'animation-fly',
   src: src
}).appendTo('body').css({
    'top': posTop,      
    'left': parseInt(posLeft)
  }); 
  
  setTimeout(function(){
    $(document).find('.animation-fly').css({
      'top': cart.offset().top,
      'left': cart.offset().left
    });
    setTimeout(function(){
      $(document).find('.animation-fly').remove(); //after fly
      var quantity = parseInt(cart.find('#count-item').data('count'))+1;
//       if(quantity<2){
//         cart.find('#count-item').text(quantity + ' item').data('count', quantity);
//       }else{
//         cart.find('#count-item').text(quantity + ' items').data('count', quantity);
//       }
      cart.find('#count-item').text(quantity + (quantity<2 ?' item':' items')).data('count', quantity);
      
                             //add item to cart
    var name = parent.find('h4').text();
    var price = parent.find('.real').text();
    var txt3 = document.createElement("hr");
    var txt4 = document.createElement("hr");
       
    $('.col1-name').append(name,txt3);
    $('.col2-price').append(price,txt4);
    $('.checkout').addClass('add-animation');
    $('.checkout').removeClass('disabled');
    
    $('#bin').addClass('add-animation2');
    $('#bin').removeClass('disabled');
    
                            //find total amount
    var price2 = parseFloat(parent.find('.real').data('price')); //get "data-price" from <div class="real">
    bag.push(price2);                                            
    var total = 0;
    $(".total-amount").text(function(){
     for(var i in bag){
      total += bag[i];    //calculate sum of all numbers in the array 
     }
     var last = "Rs " + total.toFixed(2);
     $('.pay-last').text(last);
     return last;   // return total only -> bug.
     
    });
      
      $(document).find('.add-to-cart').removeClass('disable');
    },1000);
  },500);
  
  $('.bin').on('click',function(){     
   $('.col1-name').empty();
   $('.col2-price').empty();
   $('.empty').show();
   $('.checkout').removeClass('add-animation');
   $('#bin').removeClass('add-animation2');
   $('.checkout').addClass('disabled');
   $('#bin').addClass('disabled');
   bag = [];
   $('.total-amount').add('.pay-last').text("Rs " + bag.length);
   cart.find('#count-item').text(0 + ' item').data('count', 0);
 });
  
});

//------------------BILL----------------------

$(document).ready(function(){
  $('#coupon').on('click',function(){
    alert("minhquanghust.blogspot.com Coupon Code:" + '\n' + "25% off: 0511Q-1601CV" +'\n' + "15% off: 0511Q-1701NA" + '\n' + "10% off: 0511Q-1901QA")
  });
})
// open cart modal
const cart = document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.cart-modal-overlay');

cart.addEventListener('click', () => {
  if (cartModalOverlay.style.transform === 'translateX(-200%)'){
    cartModalOverlay.style.transform = 'translateX(0)';
  } else {
    cartModalOverlay.style.transform = 'translateX(-200%)';
  }
})
// end of open cart modal

// close cart modal
const closeBtn = document.querySelector ('#close-btn');

closeBtn.addEventListener('click', () => {
  cartModalOverlay.style.transform = 'translateX(-200%)';
});

cartModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-modal-overlay')){
    cartModalOverlay.style.transform = 'translateX(-200%)'
  }
})
// end of close cart modal

// add products to cart
const addToCart = document.getElementsByClassName('add-to-cart');
const productRow = document.getElementsByClassName('product-row');

for (var i = 0; i < addToCart.length; i++) {
  button = addToCart[i];
  button.addEventListener('click', addToCartClicked)
}

function addToCartClicked (event) {
  button = event.target;
  var cartItem = button.parentElement;
  var price = cartItem.getElementsByClassName('product-price')[0].innerText;
  
  var imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
  addItemToCart (price, imageSrc);
  updateCartPrice()
}

function addItemToCart (price, imageSrc) {
  var productRow = document.createElement('div');
  productRow.classList.add('product-row');
  var productRows = document.getElementsByClassName('product-rows')[0];
  var cartImage = document.getElementsByClassName('cart-image');
  
  for (var i = 0; i < cartImage.length; i++){
    if (cartImage[i].src == imageSrc){
      alert ('This item has already been added to the cart')
      return;
    }
  }
  
  var cartRowItems = `
  <div class="product-row">
        <img class="cart-image" src="${imageSrc}" alt="">
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Remove</button>
        </div>
        
      `
  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);
  productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
  productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
  updateCartPrice()
}
// end of add products to cart

// Remove products from cart
const removeBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  button.addEventListener('click', removeItem)
}

function removeItem (event) {
  btnClicked = event.target
  btnClicked.parentElement.parentElement.remove()
  updateCartPrice()
}

// update quantity input
var quantityInput = document.getElementsByClassName('product-quantity')[0];

for (var i = 0; i < quantityInput; i++){
  input = quantityInput[i]
  input.addEventListener('change', changeQuantity)
}

function changeQuantity(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartPrice()
}
// end of update quantity input

// update total price
function updateCartPrice() {
  var total = 0
  for (var i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i]
  var priceElement = cartRow.getElementsByClassName('cart-price')[0]
  var quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
  var price = parseFloat(priceElement.innerText.replace('$', ''))
  var quantity = quantityElement.value
  total = total + (price * quantity )
    
  }
  document.getElementsByClassName('total-price')[0].innerText =  '$' + total

document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2
}
// end of update total price

// purchase items
const purchaseBtn = document.querySelector('.purchase-btn');

const closeCartModal = document.querySelector('.cart-modal');

purchaseBtn.addEventListener('click', purchaseBtnClicked)

function purchaseBtnClicked () {
  alert ('Thank you for your purchase');
  cartModalOverlay.style.transform= 'translateX(-100%)'
 var cartItems = document.getElementsByClassName('product-rows')[0]
 while (cartItems.hasChildNodes()) {
   cartItems.removeChild(cartItems.firstChild)
   
 }
  updateCartPrice()
}
// end of purchase items

//alert user if cart is empty