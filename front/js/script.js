$(() => {
	// Au démarrage du site, on récupère la liste de tous les pays
	// et on "branche" une fonction au click du bouton
	getAllCountries();
	$("#btnShowData").click(handleClick);
    $("#selectedValue").click(handleClick);
});

async function getAllCountries() {
	const res = await fetch("http://localhost:3000/all");
	// On transforme la réponse en objet JSON utilisable dans notre code JS
	const jsonRes = await res.json();
	console.log(jsonRes);

	updateList(jsonRes.data);
}

// Fonction qui permet de mettre à jour la liste en injectant du HTML
// dans cette dernière
function updateList(list) {
	// Effacer la liste existante
	$("#list").empty();

	// Mise à jour de la liste à l'écran
	list.forEach((country) =>
		$("#list").append(
			`
            <li class="card">
                <p>${country.name} - ${country.capital}</p>
            </li>
        `
		)
	);
}

// Fonction qui effectue une requête au backend quand on clique
// sur le bouton Show Data en récupérant la valeur de l'input
// entrée par l'utilisateur
async function handleClick() {
	const userSearchValue = $("#userSearchValue").val();
	const res = await fetch(`http://localhost:3000/${userSearchValue}`);
	const jsonRes = await res.json();
	console.log(jsonRes);

	updateList(jsonRes.data);
}
//////////////////


// Fonction qui permet de mettre à jour la liste en injectant du HTML
// dans cette dernière
function updateCapital(selectedValue) {
	// Effacer la liste existante
	$("#selectedValue").empty();

	// Mise à jour de la liste à l'écran
    if(selectedValue === selectedCapital) {

        checkValue.forEach((country) =>
        $("#selectedValue").append(
            `
            <li class="card">
            <p>${country.capital}</p>
            </li>
            `
            )
        );
    } else {
        checkValue.forEach((country) =>
        $("#selectedValue").append(
            `
            <li class="card">
            <p>${country.name}</p>
            </li>
            `
            )
        );
    }
}

async function handleClick() {
	const selectedValue = $("#selectedValue").val();
	const res = await fetch(`http://localhost:3000/${selectedValue}`);
	const jsonRes = await res.json();
	console.log(jsonRes);

	updateCapital(jsonRes.data);
}