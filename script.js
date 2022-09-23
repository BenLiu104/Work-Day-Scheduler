
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    $("#currentDay").text(rightNow);
}

setInterval(displayTime, 1000);

let today = moment().format('YYYY-MM-DD');
let now = moment().format("HH");

// $("#00event").text(moment().isAfter(`${today} 21:00:00`));

let calendarList = [{day:`${today}`,time:0,event:"abc"},{day:`${today}`,time:1,event:"cde"}];

$("#calendar").on("click",".saveBtn",saveToLocal)

function saveToLocal(event){
    let input = $(event.target).parent().siblings().children().val();
    let time = $(event.target).parent().siblings().children().attr("id");
    
}

function getFromLocal(){

}
$("#0event").text(calendarList[0].event);

setInterval(updateBgColor, 60000);

updateBgColor();
function updateBgColor(){
    for (let i = 0; i < 24; i++) {
        if(i<now){
            $(`#${i}hh`).parent().css("background-color","#d3d3d3");
        }else if(i>now){
            $(`#${i}hh`).parent().css("background-color","#77dd77");
        }else{
            $(`#${i}hh`).parent().css("background-color","#ff6961");
        }
    }
    
}

