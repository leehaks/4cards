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
    var tabComponent = document.querySelectorAll('.tab-component'); 

    function active(elem){
        elem.classList.add('active'); 
        currentTabItem = elem; 
    }

    function nonActive(elem){ 
        elem.classList.remove('active'); 
    }

    function tabHandler(e) { 
        if (currentTabItem) { 
            nonActive(currentTabItem); 
        }
        active(e.target); 
    }

    tabComponent.forEach(items => { 
        var tabLabelFirst = items.querySelector('.label-item'); 
        var tabPanelFirst = items.querySelector('.panel'); 

        active(tabLabelFirst); 
        active(tabPanelFirst); 
        items.addEventListener('click', tabHandler); 
    })
    
}
