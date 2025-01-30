// Fonction pour afficher l'image en plein écran au clic
const galleryPhotos = document.querySelectorAll('.gallery-photo');
const fullscreenDiv = document.createElement('div');
fullscreenDiv.classList.add('fullscreen');
document.body.appendChild(fullscreenDiv);

galleryPhotos.forEach(photo => {
    photo.addEventListener('click', () => {
        const img = document.createElement('img');
        img.src = photo.src; // Utiliser la même source d'image
        fullscreenDiv.innerHTML = ''; // Vider le contenu de la vue plein écran
        fullscreenDiv.appendChild(img);
        fullscreenDiv.classList.add('active'); // Afficher la vue plein écran
    });
});

// Fermeture de la vue plein écran quand on clique dessus
fullscreenDiv.addEventListener('click', () => {
    fullscreenDiv.classList.remove('active');
});
