/*
if blue
*/

(function(){
    let listitem = document.querySelectorAll("li");
    let mark = document.querySelector("h3");
    let count = document.querySelector("h2");
    let reddot = document.querySelectorAll(".reddot");
    let counter = 3;
    count.textContent = counter;
    

    mark.addEventListener('click', function(){
        counter = 0;
        count.textContent = counter;

        listitem.forEach((lis) => {
            if (lis.classList.contains('new')){
                lis.classList.remove("new");
                lis.classList.add("seen");
            } 
        })

        reddot.forEach((red) => {
            if (!red.classList.contains('hide')){
                red.classList.add("hide");
            } 
        })
    })

    listitem.forEach((lis) => {
        lis.addEventListener('click', function(){
            let redd = lis.querySelector(".reddot");
            
            if (lis.classList.contains('new')){
                lis.classList.remove("new");
                lis.classList.add("seen");
                counter--;
                count.textContent = counter; 
            } else {
                lis.classList.remove("seen");
                lis.classList.add("new");
                counter++;
                count.textContent = counter;
            }
        
            if (!redd.classList.contains('hide')){
                redd.classList.add("hide");
            } else {
                redd.classList.remove("hide");
            }

        })
    })

})();