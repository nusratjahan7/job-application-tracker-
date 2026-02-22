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
const noJobSection = document.getElementById('no-job');


function checkEmpty(){
    if(allCardSection.children.length === 0){
        noJobSection.classList.remove('hidden');
    }
    else if (filterSection.children.length === 0){
        noJobSection.classList.remove('hidden');
    }
    else {
        noJobSection.classList.add("hidden");
    }
}


//  delete card
// const deleteButtons = document.querySelectorAll('.delete-btn');
// deleteButtons.forEach(function(button){
//     button.addEventListener('click', function(){
//         button.parentElement.parentElement.remove();
//         calculateCount();     
//     })
// });
mainContainer.addEventListener('click', function(event){
  if(event.target.closest('.delete-btn')){
   
    const card = event.target.closest('.bg-white');
    const jobName = card.querySelector('.jobName').innerText;
   
    interview = interview.filter(item => item.jobName !== jobName);
  
    rejected = rejected.filter(item => item.jobName !== jobName);

    card.remove();
    
    calculateCount();
    checkEmpty();
    
    if(currentStatus === 'interview-filter-btn'){
        renderInterview();
    }
    else if(currentStatus === 'rejected-filter-btn'){
        renderRejected();
    }
}
});


// calculate card 
function calculateCount(){
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interview.length;
    rejectedCount.innerText = rejected.length;
    if(currentStatus === 'all-filter-btn'){
        jobCount.innerText = allCardSection.children.length;
    }
     else if(currentStatus === 'interview-filter-btn'){
        jobCount.innerText = interview.length;
    }
    else if(currentStatus === 'rejected-filter-btn'){
        jobCount.innerText = rejected.length;
    }
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
        renderInterview();   
        checkEmpty();
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
        renderRejected();
        checkEmpty();
    }
}

mainContainer.addEventListener('click', function(event){
    if(event.target.classList.contains('interview-btn')){
        const parentNode = event.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.jobName').innerText;
        const jobTitle = parentNode.querySelector('.jobTitle').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        const jobStatus = parentNode.querySelector('.job-status').innerText;
        const jobText = parentNode.querySelector('.job-text').innerText;
        parentNode.querySelector('.job-status').innerText = 'Interview';

        const cardInfo = {
            jobName,
            jobTitle,
            jobType,
            jobStatus: 'Interview',
            jobText
        }
        const jobExist = interview.find(item => item.jobName === cardInfo.jobName);

        if(!jobExist){
            interview.push(cardInfo);
        }
        rejected = rejected.filter(item => item.jobName !== cardInfo.jobName);
        
        if(currentStatus === 'interview-filter-btn'){
            renderInterview();
        }
        calculateCount();
    }
    else if(event.target.classList.contains('rejected-btn')){
        const parentNode = event.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.jobName').innerText;
        const jobTitle = parentNode.querySelector('.jobTitle').innerText;
        const jobType = parentNode.querySelector('.job-type').innerText;
        const jobStatus = parentNode.querySelector('.job-status').innerText;
        const jobText = parentNode.querySelector('.job-text').innerText;
        parentNode.querySelector('.job-status').innerText = 'Rejected';

        const cardInfo = {
            jobName,
            jobTitle,
            jobType,
            jobStatus: 'Rejected',
            jobText
        }
        const jobExist = rejected.find(item => item.jobName === cardInfo.jobName);

        if(!jobExist){
            rejected.push(cardInfo);
        }
       interview = interview.filter(item => item.jobName !== cardInfo.jobName);
        
       if(currentStatus === 'rejected-filter-btn'){
            renderRejected();
        }
        calculateCount();
    }
})




function renderInterview(){
    filterSection.innerHTML = ' ';
    for(let inter of interview){
        let div = document.createElement('div');
        div.className = "bg-white p-4 rounded-lg flex justify-between";
        div.innerHTML = `
        <div>
                 <h3 class="jobName text-[#002C5C] text-xl font-semibold">${inter.jobName}</h3>
                <p class="jobTitle text-[#64748B]">${inter.jobTitle}</p>
                <p class="job-type text-[#64748B] my-5">${inter.jobType}</p>
                <p class="job-status bg-[#EEF4FF] text-[#002C5C] w-36 p-2 text-center font-semibold my-5">${inter.jobStatus}</p>
                <p class="job-text text-[#323B49]">${inter.jobText}</p>
                <div class="my-4 flex gap-3">
                    <button class="interview-btn btn btn-outline btn-success">Interview</button>
                    <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
                </div>
                </div>
                <div class="mt-4">
                    <button class="delete-btn px-2 py-2 rounded-full text-[#323B49] border border-[#323b4915]"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
        filterSection.appendChild(div);
    }
}

function renderRejected(){
    filterSection.innerHTML = ' ';
    for(let reject of rejected){
        let div = document.createElement('div');
        div.className = "bg-white p-4 rounded-lg flex justify-between";
        div.innerHTML = `
        <div>
                 <h3 class="jobName text-[#002C5C] text-xl font-semibold">${reject.jobName}</h3>
                <p class="jobTitle text-[#64748B]">${reject.jobTitle}</p>
                <p class="job-type text-[#64748B] my-5">${reject.jobType}</p>
                <p class="job-status bg-[#EEF4FF] text-[#002C5C] w-36 p-2 text-center font-semibold my-5">${reject.jobStatus}</p>
                <p class="job-text text-[#323B49]">${reject.jobText}</p>
                <div class="my-4 flex gap-3">
                    <button class="interview-btn btn btn-outline btn-success">Interview</button>
                    <button class="rejected-btn btn btn-outline btn-error">Rejected</button>
                </div>
                </div>
                <div class="mt-4">
                    <button class="delete-btn px-2 py-2 rounded-full text-[#323B49] border border-[#323b4915]"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
        filterSection.appendChild(div);
    }
}

