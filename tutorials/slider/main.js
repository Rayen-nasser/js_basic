// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

let paginationElement = document.createElement('ul');

paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

  // Create The LI
  var paginationItem = document.createElement('li');

  // Set Custom Attribute
  paginationItem.setAttribute('data-index', i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items to The Main Ul List
  paginationElement.appendChild(paginationItem);

}
document.getElementById('indicators').append(paginationElement);

//Get the New Created Ul
var paginationCreatedUl = document.getElementById('pagination-ul')

// Get Slider Items | Array.form [ES6 Feature]
var paginitionBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

//loop through all bullets item
for( let i = 0 ; i < paginitionBullets.length ; i++)
{

  paginitionBullets[i].onclick = function(){
    currentSlide = parseInt(this.getAttribute('data-index'))
    TheChecker()
  }
}

TheChecker()


// Next silde  function
function nextSlide(){
 if(nextButton.classList.contains('disabled'))
 {
    return false
 } else {
  currentSlide++

  TheChecker()
 }
}

// Previous silde  function
function prevSlide(){
  if(prevButton.classList.contains('disabled'))
  {
     return false
  } else {
   currentSlide--

   TheChecker()
  }
}

//Create The checker Function
function TheChecker(){
  //set the slide number
  slideNumberElement.innerHTML = "Slide #" + (currentSlide) +" of " + (slidesCount)

  removeAllActive()

  //set active class on current slide
  sliderImages[currentSlide -1].classList.add('active')

  //set active class on current pagination item
  paginationCreatedUl.children[currentSlide -1].classList.add('active')

  //check if current slide is the first
  if(currentSlide  == 1){
    prevButton.classList.add('disabled')
  }else{
    prevButton.classList.remove('disabled')
  }
  
  //chek if current slide is the last
  if(currentSlide  == slidesCount){
    nextButton.classList.add('disabled')
  }else{
    nextButton.classList.remove('disabled')
  }
}





//remove the class active
function removeAllActive(){
  //loop through images
  sliderImages.forEach(function(img) {
    img.classList.remove('active')
  })

  //loop through bullues
  paginitionBullets.forEach(function(li){
    li.classList.remove('active')
  })
}