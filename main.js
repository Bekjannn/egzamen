let data = []
let korzina_data = []

function Api() {
    $.ajax({
        type: "GET",
        url: "https://api.nytimes.com/svc/books/v3/lists/current/childrens-middle-grade.json?api-key=0nG5do2caU59G7F2PT1eRQD0RAsaX5Du",
        success: (a) => {
            console.log(a.results.books);
            data = a.results.books;
            Ekran(data)
        },
        error: (err) => {
            console.log(err);
        }
    })
}
Api()

function Ekran(son) {
    $("#quti").html("")
    son.map((v, i) => {
        let col = `  
        <div class="col-lg-3 col-md-6 col-sm-12 pt-4">
            <div class="card1  text-center p-3">
                <h5>${v.title}</h5>
                <h6>${v.author}</h6>
                <img src="${v.book_image}" alt="rasm">
                <h6>${v.weeks_on_list}</h6>
                <div class="info">
                    <button onclick="Korzina(${i})">Xarid</button>
                    <button onclick="informatsiya${i}">Info</button>
                </div>
            </div>
        </div>
        
        `;
        $("#quti").append(col)

    })
}


function Ekran2(son) {
    $("#korzina_quti").html("")
    son.map((v, i) => {
        let soz = `
        <div class="col-12">
            <div class="card1  text-center p-3">
                <h5>${v.title}</h5>
                <h6>${v.author}</h6>
                <img src="${v.book_image}" alt="rasm">
                <h6>${v.weeks_on_list}</h6>
                <div class="info">
                    <button onclick="">O'chirish</button>
                </div>
        </div>
        </div>  `;
        $("#korzina_quti").append(soz)

    })
}

function Korzina(i) {
    korzina_data.push(data[i]);
    console.log(korzina_data);
    $("#son").html(korzina_data.length)
  
    Ekran2(korzina_data)
}

function Search(son) {
    console.log(son);
    let filterData = data.filter(v => {
      return v.title.toLowerCase().includes(son.toLowerCase())
    })
    Ekran(filterData)
}