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

const jobCount = document.getElementById('job-count');
jobCount.innerText = allCardSection.children.length;

//  delete card
const deleteButtons = document.querySelectorAll('.delete-btn');
deleteButtons.forEach(function(button){
    button.addEventListener('click', function(){
        button.parentElement.parentElement.remove();
        
        jobCount.innerText = allCardSection.children.length;
    })
})


// calculate card 
function calculateCount(){
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interview.length;
    rejectedCount.innerText = rejected.length;
}
calculateCount();

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    allFilterBtn.classList.add('bg-[#FFFFFF]', 'text-black');
    interviewFilterBtn.classList.add('bg-[#FFFFFF]', 'text-black');
    rejectedFilterBtn.classList.add('bg-[#FFFFFF]', 'text-black');

    const selected = document.getElementById(id);
    currentStatus = id;
    selected.classList.remove('bg-[#FFFFFF]', 'text-black');
    selected.classList.add('bg-[#3B82F6]', 'text-white');
    
    if(id === "interview-filter-btn"){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        jobCount.innerText = interview.length;
    }
    else if (id === "all-filter-btn"){
        allCardSection.classList.remove("hidden");
        filterSection.classList.add("hidden");
        jobCount.innerText = allCardSection.children.length;
    }
    else if (id === "rejected-filter-btn"){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        jobCount.innerText = rejected.length;
    }
}


