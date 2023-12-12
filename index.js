// O Rei Thorin precisa atravessar a Terra Média para chegar até a Montanha Solitária
//A cada obstáculo superado, ele ganha um nível de Experiência
//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 6.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

let XPHeroiThorin = "XP entre 2001 && 5000" 

switch (XPHeroiThorin){
    case("XP < 1.000"):
    console.log(" O herói de nome Thorin está no Nível Ferro")
    break

    case("XP entre 1001 && 2000"):
    console.log(" O herói de nome Thorin está no Nível Bronze")
    break

    case("XP entre 2001 && 5000"):
    console.log(" O herói de nome Thorin está no Nível Prata")
    break

    case("XP entre 5001 && 7000"):
    console.log(" O herói de nome Thorin está no Nível Ouro")
    break

    case("XP entre 7001 && 8000"):
    console.log(" O herói de nome Thorin está no Nível Platina")
    break

    case("XP entre 8001 && 9000"):
    console.log(" O herói de nome Thorin está no Nível Ascendente")
    break

    case("XP entre 9001 && 10000"):
    console.log(" O herói de nome Thorin está no Nível Imortal")

    case("XP => 10001"):
    console.log(" O herói de nome Thorin está no Nível Radiante") 

}



















