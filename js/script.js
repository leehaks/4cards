window.onload = function(){

    var currentMain; 
    var mainAnchor = document.querySelectorAll('.section-component');
    
    function mainAnchorHandler() { 
    
        mainAnchor.forEach( allAnchor => { 
            allAnchor.classList.add('off');
        })
    
        this.classList.replace('off','on');
        this.querySelector('.content-component').classList.remove('hidden');
        this.querySelector('.title-component .con').classList.remove('hidden');
        currentMain = this;            
    }
    
    mainAnchor.forEach( anchor => {
        anchor.addEventListener('click', mainAnchorHandler)
    })
}
