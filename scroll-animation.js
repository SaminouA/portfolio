// Fonction pour vérifier si un élément est visible dans la fenêtre
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Fonction pour ajouter des animations aux éléments visibles
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.animate-on-scroll'); // Sélectionne tous les éléments avec cette classe

    elements.forEach(element => {
        if (isInView(element)) {
            element.classList.add('animate'); // Ajoute la classe d'animation lorsque l'élément est visible
        }
    });
}

// Écouteur d'événements pour l'événement de défilement
window.addEventListener('scroll', handleScrollAnimation);

// Appel initial pour les éléments déjà visibles lors du chargement de la page
document.addEventListener('DOMContentLoaded', handleScrollAnimation);
