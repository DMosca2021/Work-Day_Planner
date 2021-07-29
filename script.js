let block1 = $("#7");
let block2 = $("#8");
let block3 = $("#9");
let block4 = $("#10");
let block5 = $("#11");
let block6 = $("#12");
let block7 = $("#13");
let block8 = $("#14");
let block9 = $("#15");
let block10 = $("#16");
let block11 = $("#17");
let block12 = $("#18");
let block13 = $("#19");

let time = moment();

let saveBtn = $(".saveBtn");

// Sets current time and checks for empty event slots.
function setAppointment() {
    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".time-block").each(function () {
        let id = $(this).attr("id");
        let appointment = localStorage.getItem(id);

        if (appointment !== null) {
            $(this).children(".appointment").val(appointment);
        }
    });
};

setAppointment();

// Saves user input to the local storage with an associated time
saveBtn.on("click", function () {
    let time = $(this).parent().attr("id");
    let appointment = $(this).siblings(".appointment").val();
    localStorage.setItem(time, appointment);
});

// Highlights event based on current time and if event is past, present, or in the future.
function highlightEvent() {
    hour = time.hours();
    $(".time-block").each(function () {
        let thisHour = parseInt($(this).attr("id"));
        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
};

highlightEvent();