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

    var imgAnchor = document.querySelectorAll('.slider-img'); 

    function imgAnchorFrame() { 
        imgAnchor.forEach( currentFrame => {
            frame = currentFrame.querySelector('.main-frame')
            
            frameWidth = frame.getAttribute('width');
            frameHeight = frame.getAttribute('height');

            frame.style.width = frameWidth + "px";  
            frame.style.height = frameHeight + "px";              
        })
    }

    imgAnchorFrame(); 

    var currentTabItem; 
    var tabItem = document.querySelectorAll('.tab-component'); 

    function activate(elem){
        elem.classList.add('active'); 
        currentTabItem = elem; 
    }

    function tabHandler(e) { 
        if (currentTabItem) { 
            currentTabItem.classList.remove('active'); 
        }
        e.target.classList.add('active'); 
        activate(e.target); 
    }

    tabItem.forEach(items => { 
        var tabFirst = items.querySelector('a')
        activate(tabFirst); 
        items.addEventListener('click', tabHandler); 
    })

    var scrollAction = document.querySelectorAll('.section-component')
}
