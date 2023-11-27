let hexNumbers = document.querySelector('[data-hexNumbers]')
let result = document.querySelector('#result')
let convertBtn = document.querySelector('#convertBtn')

convertBtn.addEventListener('click', ()=> toRGB(hexNumbers.value))

function toRGB(a){
    hexArray = a.split("")
    valid = hexArray.length<=5 ? result.textContent = "Please enter correct hex code": convertRGB(hexArray)
}

function convertRGB(a){
    for(i =0; i<a.length; i++){
        switch (true){
            case (a[i] === '1'||a[i] === '2'||a[i] === '3'||a[i] === '4'||a[i] === '5'||a[i] === '6'||a[i] === '7'||a[i] === '8'||a[i] === '9'||a[i] === '0'):
                a[i] = a[i];
                break;
            case (a[i].toUpperCase() === 'A'):
                a[i]=10;
                break;
            case (a[i].toUpperCase() === 'B'):
                a[i]=11;
                break;
            case (a[i].toUpperCase() === 'C'):
                a[i]=12;
                break;
            case (a[i].toUpperCase() === 'D'):
                a[i]=13;
                break;
            case (a[i].toUpperCase() === 'E'):
                a[i]=14;
                break;
            case (a[i].toUpperCase() === 'F'):
                a[i]=15;
                break;
            default:
                return result.textContent = "Please enter correct hexadecimal code"
        }
    }

    r = eval(hexArray[0])*16 + eval(hexArray[1])
    g = eval(hexArray[2])*16 + eval(hexArray[3])
    b = eval(hexArray[4])*16 + eval(hexArray[5])
    return result.textContent = `The RGB color is as follows: RGB(${r}, ${g}, ${b})`
}