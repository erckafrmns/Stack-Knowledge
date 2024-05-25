//This closes other menus on sidebar
let listElements = document.querySelectorAll('.link');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElements.forEach (listE => {
            listE.classList.remove('active');
        })
        listElement.classList.toggle('active');
    })
});

//This closes other document when one was clicked
gr7math_btn.addEventListener('click', ()=>{
    gr7math.style.display ='block';
    gr7science.style.display='none';
    gr7filipino.style.display='none';
    gr7english.style.display='none';
    gr8math.style.display='none';gr8science.style.display='none';gr8filipino.style.display='none';gr8english.style.display='none';
    gr9math.style.display='none';gr9science.style.display='none';gr9filipino.style.display='none';gr9english.style.display='none';
    gr10math.style.display='none';gr10science.style.display='none';gr10filipino.style.display='none';gr10english.style.display='none';
});
gr7science_btn.addEventListener('click', ()=>{
    gr7science.style.display ='block';
    gr7math.style.display='none';
    gr7filipino.style.display='none';
    gr7english.style.display='none';
    gr8math.style.display='none';gr8science.style.display='none';gr8filipino.style.display='none';gr8english.style.display='none';
    gr9math.style.display='none';gr9science.style.display='none';gr9filipino.style.display='none';gr9english.style.display='none';
    gr10math.style.display='none';gr10science.style.display='none';gr10filipino.style.display='none';gr10english.style.display='none';
});
gr7filipino_btn.addEventListener('click', ()=>{
    gr7filipino.style.display ='block';
    gr7math.style.display='none';
    gr7science.style.display='none';
    gr7english.style.display='none';
    gr8math.style.display='none';gr8science.style.display='none';gr8filipino.style.display='none';gr8english.style.display='none';
    gr9math.style.display='none';gr9science.style.display='none';gr9filipino.style.display='none';gr9english.style.display='none';
    gr10math.style.display='none';gr10science.style.display='none';gr10filipino.style.display='none';gr10english.style.display='none';
});
gr7english_btn.addEventListener('click', ()=>{
    gr7english.style.display ='block';
    gr7math.style.display='none';
    gr7science.style.display='none';
    gr7filipino.style.display='none';
    gr8math.style.display='none';gr8science.style.display='none';gr8filipino.style.display='none';gr8english.style.display='none';
    gr9math.style.display='none';gr9science.style.display='none';gr9filipino.style.display='none';gr9english.style.display='none';
    gr10math.style.display='none';gr10science.style.display='none';gr10filipino.style.display='none';gr10english.style.display='none';
});
gr8math_btn.addEventListener('click', ()=>{
    gr8math.style.display ='block';
    gr8science.style.display='none';
    gr8filipino.style.display='none';
    gr8english.style.display='none';
    gr7math.style.display='none';gr7science.style.display='none';gr7filipino.style.display='none';gr7english.style.display='none';
    gr9math.style.display='none';gr9science.style.display='none';gr9filipino.style.display='none';gr9english.style.display='none';
    gr10math.style.display='none';gr10science.style.display='none';gr10filipino.style.display='none';gr10english.style.display='none';
});
gr8science_btn.addEventListener('click', ()=>{
    gr8science.style.display ='block';
    gr8math.style.display='none';
    gr8filipino.style.display='none';
    gr8english.style.display='none';
    gr7math.style.display='none';gr7science.style.display='none';gr7filipino.style.display='none';gr7english.style.display='none';
    gr9math.style.display='none';gr9science.style.display='none';gr9filipino.style.display='none';gr9english.style.display='none';
    gr10math.style.display='none';gr10science.style.display='none';gr10filipino.style.display='none';gr10english.style.display='none';
});
gr8filipino_btn.addEventListener('click', ()=>{
    gr8filipino.style.display ='block';
    gr8math.style.display='none';
    gr8science.style.display='none';
    gr8english.style.display='none';
    gr7math.style.display='none';gr7science.style.display='none';gr7filipino.style.display='none';gr7english.style.display='none';
    gr9math.style.display='none';gr9science.style.display='none';gr9filipino.style.display='none';gr9english.style.display='none';
    gr10math.style.display='none';gr10science.style.display='none';gr10filipino.style.display='none';gr10english.style.display='none';
});
gr8english_btn.addEventListener('click', ()=>{
    gr8english.style.display ='block';
    gr8math.style.display='none';
    gr8science.style.display='none';
    gr8filipino.style.display='none';
    gr7math.style.display='none';gr7science.style.display='none';gr7filipino.style.display='none';gr7english.style.display='none';
    gr9math.style.display='none';gr9science.style.display='none';gr9filipino.style.display='none';gr9english.style.display='none';
    gr10math.style.display='none';gr10science.style.display='none';gr10filipino.style.display='none';gr10english.style.display='none';
});
gr9math_btn.addEventListener('click', ()=>{
    gr9math.style.display ='block';
    gr9science.style.display='none';
    gr9filipino.style.display='none';
    gr9english.style.display='none';
    gr7math.style.display='none';gr7science.style.display='none';gr7filipino.style.display='none';gr7english.style.display='none';
    gr8math.style.display='none';gr8science.style.display='none';gr8filipino.style.display='none';gr8english.style.display='none';
    gr10math.style.display='none';gr10science.style.display='none';gr10filipino.style.display='none';gr10english.style.display='none';
});
gr9science_btn.addEventListener('click', ()=>{
    gr9science.style.display ='block';
    gr9math.style.display='none';
    gr9filipino.style.display='none';
    gr9english.style.display='none';
    gr7math.style.display='none';gr7science.style.display='none';gr7filipino.style.display='none';gr7english.style.display='none';
    gr8math.style.display='none';gr8science.style.display='none';gr8filipino.style.display='none';gr8english.style.display='none';
    gr10math.style.display='none';gr10science.style.display='none';gr10filipino.style.display='none';gr10english.style.display='none';
});
gr9filipino_btn.addEventListener('click', ()=>{
    gr9filipino.style.display ='block';
    gr9math.style.display='none';
    gr9science.style.display='none';
    gr9english.style.display='none';
    gr7math.style.display='none';gr7science.style.display='none';gr7filipino.style.display='none';gr7english.style.display='none';
    gr8math.style.display='none';gr8science.style.display='none';gr8filipino.style.display='none';gr8english.style.display='none';
    gr10math.style.display='none';gr10science.style.display='none';gr10filipino.style.display='none';gr10english.style.display='none';
});
gr9english_btn.addEventListener('click', ()=>{
    gr9english.style.display ='block';
    gr9math.style.display='none';
    gr9science.style.display='none';
    gr9filipino.style.display='none';
    gr7math.style.display='none';gr7science.style.display='none';gr7filipino.style.display='none';gr7english.style.display='none';
    gr8math.style.display='none';gr8science.style.display='none';gr8filipino.style.display='none';gr8english.style.display='none';
    gr10math.style.display='none';gr10science.style.display='none';gr10filipino.style.display='none';gr10english.style.display='none';
});
gr10math_btn.addEventListener('click', ()=>{
    gr10math.style.display ='block';
    gr10science.style.display='none';
    gr10filipino.style.display='none';
    gr10english.style.display='none';
    gr7math.style.display='none';gr7science.style.display='none';gr7filipino.style.display='none';gr7english.style.display='none';
    gr8math.style.display='none';gr8science.style.display='none';gr8filipino.style.display='none';gr8english.style.display='none';
    gr9math.style.display='none';gr9science.style.display='none';gr9filipino.style.display='none';gr9english.style.display='none';
});
gr10science_btn.addEventListener('click', ()=>{
    gr10science.style.display ='block';
    gr10math.style.display='none';
    gr10filipino.style.display='none';
    gr10english.style.display='none';
    gr7math.style.display='none';gr7science.style.display='none';gr7filipino.style.display='none';gr7english.style.display='none';
    gr8math.style.display='none';gr8science.style.display='none';gr8filipino.style.display='none';gr8english.style.display='none';
    gr9math.style.display='none';gr9science.style.display='none';gr9filipino.style.display='none';gr9english.style.display='none';
});
gr10filipino_btn.addEventListener('click', ()=>{
    gr10filipino.style.display ='block';
    gr10math.style.display='none';
    gr10science.style.display='none';
    gr10english.style.display='none';
    gr7math.style.display='none';gr7science.style.display='none';gr7filipino.style.display='none';gr7english.style.display='none';
    gr8math.style.display='none';gr8science.style.display='none';gr8filipino.style.display='none';gr8english.style.display='none';
    gr9math.style.display='none';gr9science.style.display='none';gr9filipino.style.display='none';gr9english.style.display='none';
});
gr10english_btn.addEventListener('click', ()=>{
    gr10english.style.display ='block';
    gr10math.style.display='none';
    gr10science.style.display='none';
    gr10filipino.style.display='none';
    gr7math.style.display='none';gr7science.style.display='none';gr7filipino.style.display='none';gr7english.style.display='none';
    gr8math.style.display='none';gr8science.style.display='none';gr8filipino.style.display='none';gr8english.style.display='none';
    gr9math.style.display='none';gr9science.style.display='none';gr9filipino.style.display='none';gr9english.style.display='none';
});