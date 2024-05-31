
    window.addEventListener('message', function(event) {
        var item = event.data;
let id = 0
let id2 = 0
        if(item.action === "announce") {
            $(".announce-container").append(`
            <div class="announce-box" id="`+id+`">
            <div class="announceborder"></div>
            <div class="announce-grid">
                <div class="announce-icon-container">
                    <img src="img/logo.svg" alt="">
                </div>
                <div class="announce-text-container">
                    <div class="announce-text-header">
                        <p>`+item.title+`</p>
                    </div>
                    <div class="announce-text-text">
                        <p class="notify_message">
                            `+item.message+`
                        </p>
                    </div>
                </div>
            </div>
            <img src="assets/info.png" alt="">
            <div class="time-container-announce"></div>
        </div>
        `)
        setTimeout(() => {
           $(`#${id}`).fadeOut(600)
        }, 6000)

        setTimeout(() => {
            $(`#${id}`).remove()
            id++
        }, 6500)
        }
        if(item.action === "notify") {
            if(item.type === "info") {
                $(".notify-container").append(`
                <div class="notify-info" id="`+id2+`">
            <div class="notify-grid">
                <div class="notify-text-container">
                    <p class="notify-info-header">`+item.title+`</p>
                    <p class="notify_message">
                    `+item.message+`
                    </p>
                </div>
                <img src="assets/info.png" alt="">
            </div>
            <div class="time-container-info"></div>
            </div>
       
        `)
             } 
             if(item.type === "error") {
                $(".notify-container").append(`
                <div class="notify-error" id="`+id2+`">
                <div class="notify-grid">
                <div class="notify-text-container">
                    <p class="notify-error-header">`+item.title+`</p>
                    <p class="notify_message">
                        `+item.message+`
                    </p>
                </div>
                <img src="assets/error.png" alt="">
            </div>
            <div class="time-container-error"></div>
            </div>
      
        `)
            } 
            if(item.type == "success") {
                $(".notify-container").append(`
                <div class="notify-success" id="`+id2+`">
                <div class="notify-grid">
                <div class="notify-text-container">
                    <p class="notify-success-header">`+item.title+`</p>
                    <p class="notify_message">
                        `+item.message+`
                    </p>
                </div>
                <img src="assets/success.png" alt="">
                </div>
            <div class="time-container-success"></div> 
            </div>
     
        `)
            }
                setTimeout(() => {
                    $(`#${id2}`).fadeOut(600)
                }, 5000)
    
                setTimeout(() => {
                    $(`#${id2}`).remove()
                    id2++
                }, 5500)
                
        } 
    });