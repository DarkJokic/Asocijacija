

function createPolje(text) {
    const div = document.createElement("div");
    div.className = "Polje";
    div.textContent = text;
    return div;
}

let nameIndex = 0

let TekstZaResenje = "Nikola Tesla"

let InitialNames = [
    "A", "B", "C", "D"
]

document.addEventListener("DOMContentLoaded", () => {
    let Resenje = document.getElementById("Resenje")

    Resenje.onclick = ()=>{
        Resenje.textContent = TekstZaResenje
        Resenje.classList.add("animate");
    }

    fetch("asocijacije.json")
        .then(response => response.json())
        .then(data => {
            for (let key in data) {

                let container = document.getElementById(key)

                let Array = data[key]

                if (nameIndex > 1) {
                    for (let i = Array.length - 1; i >= 0; i--) {
                        let initialName = InitialNames[nameIndex] + (i + 1)

                        let item = Array[i]

                        if (i == 4) {
                            initialName = InitialNames[nameIndex]
                        }

                        let polje = createPolje(initialName)

                        polje.onclick = () => {
                            polje.textContent = item
                            void polje.offsetWidth;
                            polje.classList.add("animate");
                        }

                        container.append(polje)
                    }
                }else{
                    Array.forEach((item, index) => {
                    let initialName = InitialNames[nameIndex] + (index + 1)

                    if (index == 4) {
                        initialName = InitialNames[nameIndex]
                    }

                    let polje = createPolje(initialName)

                    polje.onclick = () => {
                        polje.textContent = item
                        void polje.offsetWidth;
                        polje.classList.add("animate");
                    }

                    container.append(polje)
                });
                }


                nameIndex++
            }

        })

})
