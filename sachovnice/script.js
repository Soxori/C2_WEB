let table = "";
let column = prompt("Zadej pocet sloupcu");
let row = prompt("Zadej pocet radku");

for(let i = 0;i < row; i++) {
    table += '<tr>';
    for(let x = 0;x < column; x++) {
        table += '<td>';
    }
    table += '</tr>';
}
document.write('<table>' + table + '</table>');
// Podle videa