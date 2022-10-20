//cuando el usuario hace click 

function generateNewQuote() {
    showMessage('<div class="loader"></div>', "warning", "quote-content");
    requestApiQuotes()
        .then(dataQuote => {
            showQuotesMessage(dataQuote);
        }).catch((error) => {
            showMessage("ERROR DE CONEXION, INTENTE NUEVAMENTE MAS TARDE", "error", "quote-content")
        });
}

generateNewQuote();

// llamada a la Api
function requestApiQuotes(){
    return new Promise((resolve, reject) => {
        fetch(`https://api.adviceslip.com/advice`)
        .then(dataApi => dataApi.json())
        .then(dataJson => resolve(dataJson))
        .catch(e => reject(e));
    });
}


function showQuotesMessage(dataQuote) {
    document.getElementById("quote-content").innerHTML = `
        <p class="title"> ADVICE ${dataQuote.slip.id}</p>
        <p class="quotes">"${dataQuote.slip.advice}"</p>
        `;
}

function showMessage(message, type, idElement) {
    document.getElementById(idElement).innerHTML = `
        <div class="message ${type}">
            <p>${message}</p>
        </div>
        `
}