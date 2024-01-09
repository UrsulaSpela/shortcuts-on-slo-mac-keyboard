// const symbolName = document.querySelector('.symbol-name')
// const symbolTable = document.getElementById('symbols-table')
const symbolSection = document.getElementById('symbols')
const browserSection = document.getElementById('browser-shortcuts')
const otherSection = document.getElementById('other')

function setSymbols(){
        fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        // symbols
        const symbolShortcutsArr = json.symbols

       for(let i=0; i< symbolShortcutsArr.length; i++){
        const symbolTable = document.createElement('div')
        symbolTable.innerHTML = `
            <p class="symbol-name">${symbolShortcutsArr[i].name}</p>
            <p class="symbols">${symbolShortcutsArr[i].symbol}</p>
            <p class="symbol-shortcut">${symbolShortcutsArr[i].shotrcut}</p>
        `
        symbolSection.append(symbolTable)
       }

       // browser shortcuts
       const browserShortcutsArr = json.browserShortcuts

       for(let i=0; i< browserShortcutsArr.length; i++){
        const symbolTable = document.createElement('div')
        symbolTable.innerHTML = `
            <p class="symbol-name">${browserShortcutsArr[i].use}</p>
            <p>${browserShortcutsArr[i].shortcut}</p>
            <p class="symbol-shortcut">${browserShortcutsArr[i].browser}</p>
        `
        browserSection.append(symbolTable)
       }

       // other shortcuts
       const otherShortcutsArr = json.otherShortcuts

       for(let i=0; i< otherShortcutsArr.length; i++){
        const symbolTable = document.createElement('div')
        symbolTable.innerHTML = `
            <p class="symbol-name">${otherShortcutsArr[i].use}</p>
            <p>${otherShortcutsArr[i].shortcut}</p>
            <p class="symbol-shortcut">${otherShortcutsArr[i].environment}</p>
        `
        otherSection.append(symbolTable)
       }
    });
}

setSymbols();