
interface Poble {
    nom: string;
    Gastronomia: number;
    Cultura: number;
    Ambient: number;
    Saturacio: number;
    Categoria: string;
    Especialitat: string;
    Platja: boolean;
    Mitja: number;
}

let Poble: Poble;
let metodeOrdenacio;

let LlistaPobles: Poble[] = [
    {
        "nom": "Vilafranca",
        "Gastronomia": 5,
        "Cultura": 4,
        "Ambient": 3.5,
        "Saturacio": 2,
        "Categoria": "es Pla",
        "Especialitat": "Es cruce i Tomeu Penya",
        "Platja": false,
        "Mitja": 3.5
    },
    {
        "nom": "Sencelles",
        "Gastronomia": 4.5,
        "Cultura": 4.5,
        "Ambient": 4,
        "Saturacio": 3,
        "Categoria": "es Pla",
        "Especialitat": "Much i Lluc Parisio",
        "Platja": false,
        "Mitja": 3.33
    },
    {
        "nom": "Llucmajor",
        "Gastronomia": 3.5,
        "Cultura": 3,
        "Ambient": 5,
        "Saturacio": 1.5,
        "Categoria": "Lleveig",
        "Especialitat": "Bona gent",
        "Platja": true,
        "Mitja": 3.33
    },
    {
        "nom": "Artà",
        "Gastronomia": 3,
        "Cultura": 4.5,
        "Ambient": 3.5,
        "Saturacio": 2,
        "Categoria": "Llevant",
        "Especialitat": "Abdón i Darder",
        "Platja": true,
        "Mitja": 3
    },
    {
        "nom": "Porretes",
        "Gastronomia": 4,
        "Cultura": 3,
        "Ambient": 2,
        "Saturacio": 1,
        "Categoria": "es Pla",
        "Especialitat": "Festa",
        "Platja": false,
        "Mitja": 2.67
    },
    {
        "nom": "Campanet",
        "Gastronomia": 2.5,
        "Cultura": 2.5,
        "Ambient": 3.5,
        "Saturacio": 0.5,
        "Categoria": "Tramuntana",
        "Especialitat": "Toni Horrach",
        "Platja": false,
        "Mitja": 2.67
    },
    {
        "nom": "Petra",
        "Gastronomia": 4,
        "Cultura": 3.5,
        "Ambient": 2,
        "Saturacio": 2,
        "Categoria": "es Pla",
        "Especialitat": "Clovelles",
        "Platja": false,
        "Mitja": 2.5
    },
    {
        "nom": "Fernalitx",
        "Gastronomia": 1,
        "Cultura": 4.5,
        "Ambient": 4.5,
        "Saturacio": 3,
        "Categoria": "Migjorn",
        "Especialitat": "Estrigasons",
        "Platja": true,
        "Mitja": 2.33
    },
    {
        "nom": "Mancor de la Vall",
        "Gastronomia": 2.5,
        "Cultura": 3,
        "Ambient": 2,
        "Saturacio": 0.5,
        "Categoria": "Tramuntana",
        "Especialitat": "Fira de l'Esclatasang",
        "Platja": false,
        "Mitja": 2.33
    },
    {
        "nom": "Campos",
        "Gastronomia": 3.5,
        "Cultura": 1,
        "Ambient": 2.5,
        "Saturacio": 0.5,
        "Categoria": "Migjorn",
        "Especialitat": "Panxitos",
        "Platja": true,
        "Mitja": 2.17
    },
    {
        "nom": "Ariany",
        "Gastronomia": 2,
        "Cultura": 3.5,
        "Ambient": 1.5,
        "Saturacio": 0.5,
        "Categoria": "Gregal",
        "Especialitat": "Mallorca profunda",
        "Platja": false,
        "Mitja": 2.17
    },
    {
        "nom": "Sa Pobla",
        "Gastronomia": 4.5,
        "Cultura": 4,
        "Ambient": 1,
        "Saturacio": 3.5,
        "Categoria": "Tramuntana",
        "Especialitat": "Immigració",
        "Platja": false,
        "Mitja": 2
    },
    {
        "nom": "Ses Sardines",
        "Gastronomia": 2.5,
        "Cultura": 3.5,
        "Ambient": 2.5,
        "Saturacio": 3.5,
        "Categoria": "Migjorn",
        "Especialitat": "Un carrer",
        "Platja": true,
        "Mitja": 1.67
    },
    {
        "nom": "Santanyí",
        "Gastronomia": 1.5,
        "Cultura": 3,
        "Ambient": 3.5,
        "Saturacio": 4,
        "Categoria": "Migjorn",
        "Especialitat": "Guirilandia",
        "Platja": true,
        "Mitja": 1.33
    },
    {
        "nom": "Manacor",
        "Gastronomia": 0.5,
        "Cultura": 2.5,
        "Ambient": 0.5,
        "Saturacio": 1,
        "Categoria": "Xaloc",
        "Especialitat": "No coments",
        "Platja": true,
        "Mitja": 0.83
    }
];

function afegirElement(): void {
    const inputNom = document.getElementById('iNom') as HTMLInputElement;
    const inputGastronomia = document.getElementById('iGastronomia') as HTMLSelectElement;
    const inputCultura = document.getElementById('iCultura') as HTMLInputElement;
    const inputAmbient = document.getElementById('iAmbient') as HTMLInputElement;
    const inputSaturacio = document.getElementById('iSaturacio') as HTMLInputElement;
    const inputEspecialitat = document.getElementById('iEspecialitat') as HTMLInputElement;
    const selectCategoria = document.getElementById('sCategoria') as HTMLInputElement;
    const checkPlatja = document.getElementById('cPlatja') as HTMLInputElement;

    let Mitja:number = (parseFloat(inputGastronomia.value)+parseFloat(inputCultura.value)+parseFloat(inputAmbient.value)-parseFloat(inputSaturacio.value))/3;
    let Mitjao =  Number(Mitja.toFixed(2));
   Poble= {
       nom: inputNom.value,
       Gastronomia: parseFloat (inputGastronomia.value),
       Cultura: parseFloat(inputCultura.value),
       Ambient:  parseFloat(inputAmbient.value),
       Saturacio:  parseFloat(inputSaturacio.value),
       Categoria: selectCategoria.value,
       Especialitat: inputEspecialitat.value,
       Platja: checkPlatja.checked,
       Mitja: Mitjao,

   }

    console.log(Poble);
   LlistaPobles.push(Poble);
    if(metodeOrdenacio="Gastronomia"){
        LlistaPobles.sort((a, b) => b.Gastronomia - a.Gastronomia);
    }
    if(metodeOrdenacio="Cultura"){
        LlistaPobles.sort((a, b) => b.Cultura - a.Cultura);
    }
    if(metodeOrdenacio="Ambient"){
        LlistaPobles.sort((a, b) => b.Ambient - a.Ambient);
    }
    if(metodeOrdenacio="Saturacio"){
        LlistaPobles.sort((a, b) => b.Saturacio - a.Saturacio);
    }
    if(metodeOrdenacio="Mitja"){
        LlistaPobles.sort((a, b) => b.Mitja - a.Mitja);
    }

    actualitzarUI();


}


function actualitzarUI(): void {

    const CardPoble =document.getElementById('CardPoble') as HTMLElement;
   let html:string;

    html='<h3></h3>'


    for (let i = 0; i < LlistaPobles.length; i++) {
        html += '<div class=\'cardPoble\'>'
        html += '<h2>'+ LlistaPobles[i].nom + '</h2>'
      if (Number.isInteger(LlistaPobles[i].Gastronomia)) {
          html += '<h2>'
          for(let j = 0; j < LlistaPobles[i].Gastronomia ; j++) {
            html += '<i class="bi bi-star-fill"></i>'
         }
          html += '</h2>'
      } else{
          html += '<h2>'
          for(let j = 0; j < LlistaPobles[i].Gastronomia-1 ; j++) {
              html += '<i class="bi bi-star-fill"></i>'
          }
          html += '<i class="bi bi-star-half"></i>'
          html += '</h2>'
      }

        if (Number.isInteger(LlistaPobles[i].Cultura)) {
            html += '<h2>'
            for(let j = 0; j < LlistaPobles[i].Cultura ; j++) {
                html += '<i class="bi bi-star-fill"></i>'
            }
            html += '</h2>'
        } else{
            html += '<h2>'
            for(let j = 0; j < LlistaPobles[i].Cultura-1 ; j++) {
                html += '<i class="bi bi-star-fill"></i>'
            }
            html += '<i class="bi bi-star-half"></i>'
            html += '</h2>'

        }
        if (Number.isInteger(LlistaPobles[i].Ambient)) {
            html += '<h2>'
            for(let j = 0; j < LlistaPobles[i].Ambient ; j++) {
                html += '<i class="bi bi-star-fill"></i>'
            }
            html += '</h2>'
        } else{
            html += '<h2>'
            for(let j = 0; j < LlistaPobles[i].Ambient-1 ; j++) {
                html += '<i class="bi bi-star-fill"></i>'
            }
            html += '<i class="bi bi-star-half"></i>'
            html += '</h2>'

        }
        if (Number.isInteger(LlistaPobles[i].Saturacio)) {
            html += '<h2>'
            for(let j = 0; j < LlistaPobles[i].Saturacio ; j++) {
                html += '<i class="bi bi-star-fill"></i>'
            }
            html += '</h2>'
        } else{
            html += '<h2>'
            for(let j = 0; j < LlistaPobles[i].Saturacio-1 ; j++) {
                html += '<i class="bi bi-star-fill"></i>'
            }
            html += '<i class="bi bi-star-half"></i>'
            html += '</h2>'

        }
        html += '<h2>' + LlistaPobles[i].Especialitat + '</h2>'
        html += '<h2>'+ LlistaPobles[i].Categoria + '</h2>'

        if(LlistaPobles[i].Platja){
            html +='<h2>'+'Té platja'+'</h2>'
        }else{
            html +='<h2>'+'No té platja'+'</h2>'
        }

        html +='<h2>'+LlistaPobles[i].Mitja+'</h2>'
        html += `<button onclick="bLlevar(${i})">Llevar</button>`;

        html+='<\/div>'
    }




    console.table(LlistaPobles);

    CardPoble.innerHTML=html;

}

function bLlevar(id:number): void {

    LlistaPobles.splice(id,1);

    actualitzarUI();
}


function OrdenarGastronomia(): void{
    metodeOrdenacio='gastronomia';
    LlistaPobles.sort((a, b) => b.Gastronomia - a.Gastronomia);
actualitzarUI()
}

function OrdenarCultura(): void{
    metodeOrdenacio='Cultura';
    LlistaPobles.sort((a, b) => b.Cultura - a.Cultura);
actualitzarUI()
}
function OrdenarAmbient(): void{
    metodeOrdenacio='Ambient';
    LlistaPobles.sort((a, b) => b.Ambient - a.Ambient);
actualitzarUI()
}
function OrdenarSaturacio(): void{
    metodeOrdenacio='Saturacio';
    LlistaPobles.sort((a, b) => b.Saturacio - a.Saturacio);
actualitzarUI()
}
function OrdenarMitja(): void {
    metodeOrdenacio = 'Mitja';
    LlistaPobles.sort((a, b) => b.Mitja - a.Mitja);
actualitzarUI()
}

actualitzarUI()

