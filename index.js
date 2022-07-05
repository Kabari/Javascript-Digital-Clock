let showTime = () => {
    let date = new Date()
    let day = date.getDate()
    let month = (date.getMonth() + 1)
    let year = date.getFullYear()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let format = "AM"
    if (hour === 0) {
        hour = 12;
        format == true;
    }else if(hour === 12) {
        hour = 12;
        format = "PM";
    }else if (hour > 12) {
        hour = hour - 12;
        format = "PM";
    }
    
    hour = hour < 10 ? `0${hour}` : hour;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;

    day = day < 10 ? `0${day}` : day;
    month = month < 10 ? `0${month}` : month;
    
    let time = `${hour}:${min}:${sec} ${format}`
    let currentDate = `${day}-${month}-${year}`


    document.querySelector(".clock").innerText = time;
    document.querySelector(".date").innerText = currentDate;
    setTimeout(showTime, 1000);
}

showTime();