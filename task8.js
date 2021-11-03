function numberToTime(number){
    let minutes =''
    let hourly = ''
    number % 60 === 1 ? minutes = 'minute' : minutes = 'minutes';

    if (number < 60){
        time = `${number} ${minutes}`
    }
    else{
        number >= 120 ? hourly = 'hours' : hourly = 'hour';
        number % 60  ? time = `${Math.floor(number/60)} ${hourly}, ${number%60} ${minutes}` : time = `${number/60} ${hourly}` ;
    }
    return time;


}

numberToTime(121);