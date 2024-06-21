const hewan = [
  "anjing",
  "kucing",
  "singa",
  "harimau",
  "gajah",
  "ubur-ubur",
  "jerapah",
  "zebra",
  "kuda",
  "sapi",
  "undur-undur",
  "kambing",
  "ular",
  "bekicot",
  "kecoa",
  "monyet",
  "babi",
  "orangutan",
  "beruang",
  "kelinci",
  "elang",
  "rusa",
  "tupai",
  "tikus",
  "paus",
  "lumba-lumba",
  "kepiting",
  "kerang",
  "gurita",
  "rusa",
  "lebah",
  "angsa",
  "semut",
  "tawon",
  "nyamuk",
  "kelabang",
  "bunglon",
  "kancil",
  "cicak",
  "biawak",
  "kadal",
  "capung",
  "komodo",
  "serigala",
  "kelelawar",
  "udang",
  "landak",
  "kelabang",
  "laba-laba",
  "kodok",
  "ikan",
  "belut",
  "kijang",
  "kucing",
  "marmut",
  "kumbang",
  "badak",
  "ayam",
  "jangkrik",
  "kapibara",
  "banteng",
  "kerbau",
  "musang",
  "unta",
  "sotong",
  "bebek",
  "belut",
  "gabus",
  "betok",
  "sotong",
  "buaya",
  "hiu",
  "keledai",
  "hamster",
  "lobster",
  "Nemo",
  "panda",
  "merak",
  "jalak",
  "penyu",
  "sigung",
  "siput",
  "bintang laut",
  "tapir",
  "rayap",
  "berang-berang",
  "flaminggo",
];

const sifat = [
  "berani",
  "ramah",
  "cerdas",
  "penyabar",
  "jujur",
  "pemaaf",
  "bijaksana",
  "kreatif",
  "mandiri",
  "dermawan",
  "peduli",
  "tanggung jawab",
  "setia",
  "sopan",
  "percaya diri",
  "teliti",
  "ceria",
  "semangat",
  "pantang menyerah",
  "optimis",
  "penyayang",
  "tegas",
  "adil",
  "humoris",
  "rendah hati",
  "dewasa",
  "pemikir",
  "berintegritas",
  "inovatif",
  "periang",
  "pemberani",
  "rela berkorban",
  "loyal",
  "perfeksionis",
  "berwawasan luas",
  "terbuka",
  "konsisten",
  "cerdik",
  "analitis",
  "visioner",
  "pekerja keras",
  "rasional",
  "empatik",
  "karismatik",
  "inspiratif",
  "adaptif",
  "proaktif",
  "kolaboratif",
  "teratur",
  "gigih",
  "disiplin",
  "toleran",
  "berpandangan jauh",
  "berpendirian teguh",
  "berkemanusiaan",
  "beretika",
  "berakal sehat",
  "sportif",
  "terampil",
  "strategis",
  "pedagogis",
  "berani mengambil risiko",
  "cerdas emosional",
  "dinamis",
  "berpikiran positif",
  "santun",
  "simpati",
  "energik",
  "efisien",
  "praktis",
  "antusias",
  "berkepribadian kuat",
  "berorientasi pada solusi",
  "berwibawa",
  "berpikir kritis",
  "cerdas intelektual",
  "berwawasan global",
  "berkomitmen",
  "berketrampilan tinggi",
  "berprestasi",
  "berjiwa petualang",
  "berorientasi pada hasil",
  "berpikiran strategis",
  "berwawasan ke depan",
  "berkepribadian magnetis",
  "berkepribadian menyenangkan",
  "berkepribadian ramah",
  "berpikir sistematis",
  "berpikiran sehat",
];

// console.log(`${resultHewan} ${resultSifat}`);

const submit = document.getElementById("form");
const kembali = document.querySelector(".kembali");
const resultSection = document.querySelector(".result");
resultSection.style.display = "none"

submit.addEventListener("submit", function (e) {
  e.preventDefault();

  const resultHewan = hewan[Math.floor(Math.random() * hewan.length )];
  const resultSifat = sifat[Math.floor(Math.random() * sifat.length )];
  const inputName = document.getElementById("name").value;
  const tempatName = document.querySelector(".name-place");
  const tampatKodam = document.querySelector(".kodam-name");
  tempatName.innerHTML = `<h1 class="name-place">${inputName}</h1>`;
  tampatKodam.innerHTML = `<h1 class="kodam-name">${resultHewan} ${resultSifat}</h1>`;

  hide();

  submit.reset();
});

kembali.addEventListener("click",function(){
  show()
})

function show (){
  submit.style.display = "block";
  resultSection.style.display = "none"

  }

  function hide(){
    submit.style.display = "none"
    resultSection.style.display = "block"
  }
