document.querySelectorAll('.aisle').forEach(item => {
    item.addEventListener('click', event => {
        let infoText = "";
        switch(event.target.id) {
            case 'shampoo':
                infoText = "Vous êtes dans le rayon Shampooing. Trouvez ici une large gamme de soins capillaires.";
                break;
            case 'pasta':
                infoText = "Bienvenue au rayon Pâtes. Découvrez notre sélection de pâtes pour tous les goûts.";
                break;
            case 'dairy':
                infoText = "Vous êtes au rayon Produits Laitiers. Du lait frais aux yaourts, tout est ici.";
                break;
            case 'eggs':
                infoText = "Vous êtes au rayon Œufs. Des œufs frais pour toutes vos recettes.";
                break;
            case 'meat':
                infoText = "Bienvenue au rayon Viande. Choisissez parmi nos viandes fraîches et savoureuses.";
                break;
        }
        document.getElementById('info').textContent = infoText;
    });
});
