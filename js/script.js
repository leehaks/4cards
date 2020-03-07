window.onload = function(){

    let currentMain; 
    let mainAnchor = document.querySelectorAll('.section-component');
    
    
    function mainAnchorHandler(e) { 
        
        console.log(e.target)
        let closeBtn = e.target.classList.contains('btn-close')
       
        if(!closeBtn) { 
            mainAnchor.forEach( allAnchor => { 
                allAnchor.classList.add('off');
            })
        
            this.classList.replace('off','on');
            this.querySelector('.content-component').classList.remove('hidden');
            this.querySelector('.title-component').classList.add('hidden');
            this.querySelector('.navbar').classList.add('on')
            currentMain = this;            
        }else{
            mainAnchor.forEach( allAnchor => { 
                allAnchor.classList.remove('off');
            })
            this.classList.remove('on'); 
            this.querySelector('.content-component').classList.add('hidden');
            this.querySelector('.title-component').classList.remove('hidden');
            this.querySelector('.navbar').classList.remove('on') 
        }
        
    }
    
    mainAnchor.forEach( anchor => {
        anchor.addEventListener('click', mainAnchorHandler)
    })

    // tab-component

    let currentTabLabel, currentTabPanel; 
    let tabComponent = document.querySelectorAll('.tab-component'); 

    function activate(elem){
        elem.classList.add('active'); 
        currentTabLabel = elem; 
    }

    function inactivate(elem){ 
        elem.classList.remove('active'); 
    }

    function activatePanel(elem){
        elem.classList.add('active'); 
        currentTabPanel = elem; 
    }
    
    function tabHandler(e) { 
        const targetElem = e.target; 
        const targetContain = targetElem.classList.contains('tab-label')

        if (targetContain) { 
            inactivate(currentTabLabel); 
            inactivate(currentTabPanel); 

            activate(targetElem);     
            
            let tabOffSetLeft = this.getBoundingClientRect().left.toFixed(2)

            this.querySelector('.bar').style.left = 
            targetElem.getBoundingClientRect().left.toFixed(2) - tabOffSetLeft +"px"; 
            
            console.log(tabOffSetLeft,targetElem.getBoundingClientRect().left.toFixed(2)); 
            

            let targetHref, targetPanel; 
            targetHref = targetElem.getAttribute('href')
            targetPanel = this.querySelector(targetHref); 
            
            activatePanel(targetPanel); 
        }       
    }

    tabComponent.forEach(items => { 
        let tabLabelFirst = items.querySelector('.tab-label-group .tab-label');
        let tabPanelFirst = items.querySelector('.tab-panel');
        activate(tabLabelFirst); 
        activatePanel(tabPanelFirst);

        let labelBar = document.createElement('div'); 
        labelBar.classList.add('bar');
        items.querySelector('.tab-label-group').appendChild(labelBar); 

        items.addEventListener('click', tabHandler); 
    })

    // scroll 

    let sectionElem = document.querySelectorAll('.section-component .section-box'); 
    let navbarLinks = document.querySelectorAll('.navbar a')
    let navbarCurrent 

    navbarLinks.forEach(elem => elem.addEventListener('click', navbarLinkClick));

    function navbarLinkClick(e) { 
        event.preventDefault();
        
        this.classList.add('active'); 

        let targetId = e.currentTarget.getAttribute('href'); 

        sectionElem.forEach( elem => { 
            elem.scrollTo({
                top: document.querySelector(targetId).offsetTop, 
                behavior: "smooth"
            }) ; 
        }) 
    }

    let currentHeight = 0; 
    let isScrolling = false;

    function scrollHandler(e) { 
        e.preventDefault();
        
        let scrollHeight = this.getBoundingClientRect().height, 
        minHeight = 0, 
        maxHeight = (this.querySelectorAll(".content").length - 1) * scrollHeight;
        
        if(!isScrolling) {

            isScrolling = true;

            if(e.deltaY > 0) {
                currentHeight = currentHeight + scrollHeight;
                currentHeight = currentHeight > maxHeight ? maxHeight : currentHeight;
                this.scrollTo({
                    top: currentHeight, 
                    behavior: "smooth"
                }); 
            }else{
                currentHeight = currentHeight - scrollHeight;
                currentHeight = currentHeight < minHeight ? minHeight : currentHeight;
                this.scrollTo({
                    top: currentHeight, 
                    behavior: "smooth"
                }); 
            }

            let checkScrolling = setInterval(() => {
                if(this.scrollTop == currentHeight) {
                    isScrolling = false;
                    clearInterval(checkScrolling);
                }
            }, 50);
        }
    }
    sectionElem.forEach( elem => elem.addEventListener('mousewheel', scrollHandler));
}
