        // document.getElementById('owl').onclick = function () {
        //     alert("owl clicked")
        // }

            // type, timeStamp, defoultPrevented
        // target, toElement, srcElement,currentElement,
        // clientX, clientY, screenX, screenY
        // altKey, ctrlKey, shiftKey, keyCode


        // document.getElementById('owl').addEventListener('click', function(e) {
        //     // alert('owl clicked again')
        //     console.log(e);
        //     // console.log(e.screenX);
        //     // console.log(e.screenY);
        // }, false)

        // =========== Bubbling and Capturing and Propagation ===========
        // Bubbling is a concept of invoking events from inside to outside like bubble.
        // So that we use third parameter as a false or default.
        // Capturing is also a concept of invoking events but it outside first then inside.
        // we use third parameter as a true.
        // Propagation is used to prevent or stop the outer event for invoking when inside is invoke,
        // because outside event work on different algorithm and work all these indepentelly, without
        // interfare other.
        // document.getElementById('images').addEventListener('click', function(e){
        //     console.log("clicked inside the ul.");
        // }, false)

        // document.getElementById('owl').addEventListener('click', function(e){
        //     console.log("owl clicked");
        //     e.stopPropagation();      // ==> e stop the other event, who invoked through it.
        // }, false)

        // document.getElementById('google').addEventListener('click', function(e) {
        //     e.preventDefault();
        //     e.stopPropagation();
        //     console.log("Google is clicked");
          
        // }, false)

        // ============= Code for click than hide the image =============
        document.querySelector('#images').addEventListener('click', function(e){
            // console.log(e.target.parentNode);
            // let removeIt = e.target.parentNode;  // ==> It takes parent like ul and click on ul then remove everything 
            // removeIt.remove();
            // removeIt.parentNode.removeChild(removeIt);   // ==> It also same as line 72,
            // it takes one parent upword then remove its child

            console.log(e.target.tagName);
            if(e.target.tagName === 'IMG'){
                console.log(e.target.id);
                let removeIt = e.target.parentNode;
                removeIt.remove();
            }

        }) 