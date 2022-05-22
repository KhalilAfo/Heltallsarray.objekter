const kunde1 = {
    navn : "Per Hansen",
    adresse : "Osloveien 82"
};

const kunde2 = {
    navn : "Line Jensen",
    adresse : "Askerveien 82"
};

let kundene = [];
kundene.push(kunde1);
kundene.push(kunde2);

for (let i=0;i<kundene.length;i++){
    console.log(kundene[i].navn+" "+kundene[i].adresse);
}

for(let kunde of kundene){
    console.log(kunde.navn+" "+kunde.adresse);
}
