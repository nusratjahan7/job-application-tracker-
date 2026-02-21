let interview = [];
let rejected = [];
let currentStatus = 'all';

let total = document.getElementById('total');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCardSection = document.getElementById('all-card');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');

//  delete card
const deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach(function(button){
    button.addEventListener('click', function(){
        button.parentElement.parentElement.remove();
    })
})

// calculate card 
function calculateCount(){
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interview.length;
    rejectedCount.innerText = rejected.length;
}
calculateCount();


