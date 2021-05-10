var timer = setTimeout(() => {
    console.log('2초 후 실행');
}, 2000);

var interval = setInterval(() => {
    console.log('2초마다 실행');
}, 2000);

// 2초 후 실행하기로 한 작업 cancel
clearTimeout(timer);
// 2초마다 실행하기로 한 작업 cancel
clearInterval(interval);