//declare time variable by using moment API
let today = moment().format('YYYY-MM-DD');
let now = moment().format("HH");

//declare event list in calendar
let calendarList = [];

// timer to display time and update calender color every second.
setInterval(function () {
    displayTime();
    updateBgColor();
}
    , 1000);

//fuction to render time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    $("#currentDay").text(rightNow);
}

//function to render calendar color
function updateBgColor() {
    for (let i = 0; i < 24; i++) {
        if (i < now) {
            $(`#${i}hh`).parent().css("background-color", "#d3d3d3");
        } else if (i > now) {
            $(`#${i}hh`).parent().css("background-color", "#77dd77");
        } else {
            $(`#${i}hh`).parent().css("background-color", "#ff6961");
        }
    }

}

//call function retrieve event from storage and display to calendar
getFromLocal();


$("#calendar").on("click", ".saveBtn", saveToLocal)

function saveToLocal(event) {
    //trace from button, to find the value of corresponded text field.
    let input = $(event.target).parent().siblings().children().val();
    let stime = $(event.target).parent().siblings().children().attr("id").slice(0, -5);
    let time = Number(stime);

    if (isEventExist(time, input)) {
        localStorage.setItem(`${today}`, JSON.stringify(calendarList));
        getFromLocal();
    } else {
        calendarList.push({ "time": time, "event": input });
        localStorage.setItem(`${today}`, JSON.stringify(calendarList));
        getFromLocal();


    }
}

function isEventExist(time, input) {
    for (let i = 0; i < calendarList.length; i++) {
        if (time == calendarList[i].time) {
            calendarList[i].event = input;
            return true;
        }
    }
    return false;
}

function getFromLocal() {
    calendarList = JSON.parse(localStorage.getItem(`${today}`));
    console.log(calendarList)
    if (calendarList == null) {
        calendarList = [];
    } else {
        for (let i = 0; i < calendarList.length; i++) {
            $(`#${calendarList[i].time}event`).text(calendarList[i].event);
        }
    }
}





