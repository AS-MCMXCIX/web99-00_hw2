function createSCard(cardData, styleClass) {
    let table = document.createElement('table');
    table.className = styleClass;
    for (let i = 0; i < 4; i++) {
        let row = table.insertRow(i);
        let h = document.createElement('th');
        let r = document.createElement('td');
        row.appendChild(r);
        row.appendChild(h);
        r.innerHTML = cardData[i][1];
        h.innerHTML = cardData[i][0];
    }
    table.rows[0].cells[0].style.color = "red";
    table.rows[1].cells[0].style.color = "red";
    return table;
}

function hide_prev_next_buttons() {
    var btns = layout.getElementsByTagName('button');
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.display = 'none';
    }
}

let table_text = "[\n" +
    "{ \"name\":\"کوشا‌ جان\", \"ranking\":1, \"from\":\"دانشگاه صنعتی شریف، ایران\", \"score\":1305},\n" +
    "{ \"name\":\"مبارزین نتها\", \"ranking\":2, \"from\":\"دانشگاه امیرکبیر، ایران\", \"score\":1270},\n" +
    "{ \"name\":\"حاجی درچه‌ای\", \"ranking\":3, \"from\":\"دانشگاه علوم پزشکی اصفهان، اصفهان\", \"score\":1250},\n" +
    "{ \"name\":\"عدالت و آزادی\", \"ranking\":4, \"from\":\"دانشگاه آزاد قزوین، ایران\", \"score\":1105},\n" +
    "{ \"name\":\"Beatles\", \"ranking\":5, \"from\":\"دانشگاه ملی شوچنکو، اوکراین\", \"score\":940},\n" +
    "{ \"name\":\"Beatles\", \"ranking\":5, \"from\":\"دانشگاه ملی شوچنکو، اوکراین\", \"score\":940},\n" +
    "{ \"name\":\"Beatles\", \"ranking\":5, \"from\":\"دانشگاه ملی شوچنکو، اوکراین\", \"score\":940},\n" +
    "{ \"name\":\"Beatles\", \"ranking\":5, \"from\":\"دانشگاه ملی شوچنکو، اوکراین\", \"score\":940},\n" +
    "{ \"name\":\"Beatles\", \"ranking\":5, \"from\":\"دانشگاه ملی شوچنکو، اوکراین\", \"score\":940},\n" +
    "{ \"name\":\"Beatles\", \"ranking\":5, \"from\":\"دانشگاه ملی شوچنکو، اوکراین\", \"score\":940},\n" +
    "{ \"name\":\"Beatles\", \"ranking\":5, \"from\":\"دانشگاه ملی شوچنکو، اوکراین\", \"score\":940},\n" +
    "{ \"name\":\"Beatles\", \"ranking\":5, \"from\":\"دانشگاه ملی شوچنکو، اوکراین\", \"score\":940},\n" +
    "{ \"name\":\"Beatles\", \"ranking\":5, \"from\":\"دانشگاه ملی شوچنکو، اوکراین\", \"score\":940},\n" +
    "{ \"name\":\"Beatles\", \"ranking\":5, \"from\":\"دانشگاه ملی شوچنکو، اوکراین\", \"score\":940},\n" +
    "{ \"name\":\"الگل\", \"ranking\":6, \"from\":\"دانشگاه آزاد اسلامی واحد علوم تحقیقات، تهران\", \"score\":925},\n" +
    "{ \"name\":\"عمال مناجم البيانات\", \"ranking\":7, \"from\":\"دانشگاه علم و صنعت اردن، اردن\", \"score\":870}\n" +
    "]\n";
let table_meta1 = ['ranking', 'name', 'from', 'score'];
let table_meta2 = ['name', 'score', 'ranking', 'from'];
let layout = document.getElementById('ranking-layout-above-600px');
let table = document.getElementById('ranking-table-above-600px');

let sp = table.rows.length;
let table_data = JSON.parse(table_text);
let rows_count = table_data.length;
if (rows_count + sp <= 8) {
    //hide_prev_next_buttons();
}
for (let i = 0; i < rows_count; i++) {
    let row = table.insertRow(i + sp);
    row.className = 'ranking-row';
    for (let j = 0; j < table_meta1.length; j++) {
        let cell = row.insertCell(j);
        cell.innerHTML = table_data[i][table_meta1[j]];
    }
}

let div = document.getElementById('ranking-cards-container');
console.log(div.className);
for (let i = 0; i < rows_count; i++) {
    let row = table_data[i];
    let table = createSCard([['نام تیم', row[table_meta2[0]]], ['امتیاز', row[table_meta2[1]]],
        ['رتبه', row[table_meta2[2]]], ['نام دانشگاه و کشور', row[table_meta2[3]]]],
        's-card');
    div.appendChild(table);
}
