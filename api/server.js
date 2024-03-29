const express = require("express");
const app = express();
const cors = require("cors");
const countriesData = require("./countriesData.json");
const PORT = 3000;

app.use(cors());

/**
 * Créations des endpoints/routes
 */
app.get("/all", (req, res) => {
	// On renvoie toutes les données de tous les pays
	res.json({
		status: "success",
		data: countriesData,
	});
});


// Étape 1
app.get("/:countryName", (req, res) => {
	// toLowerCase permet de mettre le string en minuscule pour effectuer la comparaison
	// avec la liste des pays
	const countryName = req.params.countryName.toLowerCase();

	// On filtre les données des pays pour récupérer juste l'objet
	// contenant le pays qui nous intéresse
	const countryData = countriesData.filter(
		(country) => country.name.toLowerCase() === countryName
	);

	res.json({
		status: "success",
		data: countryData,
	});
});

// Étape 2
app.get('/:countryCapital', (req, res) => {
    const countryCapital = req.params.countryCapital.toLowerCase();

    const countriesData = countriesData.filter(
        (country) => country.capital.toLowerCase() === countryCapital 
    );

    res.json({
        status: "success",
        data: countryData
    });
});


// Étape 3
app.get('/:countryRegion', (req, res) => {
    const countryRegion = req.params.countryRegion.toLowerCase();

    const countriesData = countriesData.filter(
        (country) => country.region.toLowerCase() === countryRegion 
    );

    res.json({
        status: "success",
        data: countryData
    });
});


/**
 * Démarrage du serveur
 */
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
