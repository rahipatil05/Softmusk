setInterval(() => {

    let docday = document.getElementById("day")
    let docdate = document.getElementById("date")
    let docmonth = document.getElementById("month")
    let docyear = document.getElementById("year")
    let docclock = document.getElementById("clock")


    const day = new Date()

    let hour = day.getHours()
    let min = day.getMinutes()
    let sec = day.getSeconds()

    let days = day.getDay()
    let month = day.getMonth() + 1
    let date = day.getDate()
    let year = day.getFullYear()

    const daysArr = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

    if (min < 10) {
        min = `0${min}`
    }

    if (sec < 10) {
        sec = `0${sec}`
    }

    if (hour > 12) {
        hour = hour - 12
    }

    if (hour < 12) {
        document.getElementById("amOrpm").innerHTML = "AM"
    } else {
        document.getElementById("amOrpm").innerHTML = "PM"
    }


    docday.innerText = daysArr[days]
    docdate.innerText = `${date}`
    docmonth.innertext = `${month}`
    docyear.innertext = `${year}`



    docclock.innerText = `${hour}:${min}:${sec}`



}, 1000);




