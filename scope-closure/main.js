// let a = 1
// function f1() {
//     console.log(a);
// }

// function f2() {
//     let a = 24;
//     f1();
// }
// f2();


// Click Limiter
// function clickLimiter() {
//     let clicks = 0;
//     return function() {
//         if(clicks < 5) {
//             clicks++;
//             console.log(`Clicks: ${clicks} times`);
//         }
//         else console.error('You have reached the limit.')
//     }
// }

// let f1 = clickLimiter();
// f1(); 
// f1();
// f1();
// f1();
// f1();
// f1();


// Toaster Function

function createToaster(config) {
    const { positionX, positionY, duration } = config;
    const container = document.querySelector('.toasterContainer');
    return function(message) {
        // creating toaster
        const toast = document.createElement('div');
        toast.classList = `bg-gray-200 text-black font-medium inline p-2 rounded`;
        toast.textContent = message;

        container.classList += ` fixed ${positionX == 'left' ? 'left-5' : 'right-5'} 
        ${positionY == 'top' ? 'top-5' : 'bottom-5'}`;

        container.appendChild(toast);
        setTimeout(() => {
            container.removeChild(toast);
        }, duration * 1000);
    }
}

const toaster = createToaster({
    positionX: 'right',
    positionY: 'bottom',
    duration: 4
});
toaster('Testing Toaster');
setTimeout(() => { 
    toaster('Testing Toaster 2');
}, 2000 )