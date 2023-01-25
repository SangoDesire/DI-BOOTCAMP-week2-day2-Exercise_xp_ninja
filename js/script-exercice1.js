//console.log(new Date().getFullYear());
let anneeCadet = prompt("Entrer l'année de naissance du cadet");
let anneeAine = prompt("Entrer l'année de naissance de l'ainée");
if (anneeAine > anneeCadet) {
    alert("L'année de naissance de l'ainée doit être inferieure à celle du cadet");
} else {
    let anneeActuel = new Date().getFullYear();
    let anneeRech = (anneeActuel - anneeAine) - (2 * (anneeActuel - anneeCadet)) //Formule: z=y-2x avec y=age ainé, x=age cadet
    console.log(anneeRech);
    alert("L'année à laquelle l'ainé a eu/aura le double de l'age du cadet est " + (anneeActuel + anneeRech));
}