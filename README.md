# Oréane — L'Atelier Botanique & Dermo-Cosmétique de Luxe

Un projet front-end de site e-commerce et vitrine haut de gamme dédié à la dermo-cosmétique et aux soins de la peau sur mesure. **Oréane** se positionne comme un curateur de rituels cutanés d'exception, combinant la pureté de la botanique et l'efficacité de la science clinique. Le site propose une expérience visuelle minimaliste, entièrement responsive et riche en micro-interactions.

👉 **[Voir le site en ligne](https://ton-lien-github.github.io/ton-depot/)**

---

## L'arborescence du projet

Le projet est structuré de manière claire et modulaire pour séparer les vues et les styles de chaque section :
* **Accueil (`index.html`)** : Présentation de l'univers de la marque, rituels signatures et point d'entrée du diagnostic cutané.
* **Boutique (`produit.html`)** : Catalogue e-commerce complet avec filtrage avancé par prix, disponibilité (en stock/épuisé) et par marque.
* **Fiche Produit (`detail_produit.html`)** : Page de zoom immersive sur un soin avec gestion d'une galerie multi-angles et détails des actifs formulés.
* **Conseils de l'Atelier (`conseils.html`)** : Journal d'inspiration beauté, galeries d’applications et foire aux questions (FAQ) interactive.
* **Nos Marques (`marques.html`)** : Répertoire alphabétique interactif et moteur de recherche textuelle des laboratoires sélectionnés.
* **Espace Client (`connexion.html` / `inscription.html`)** : Interfaces d'authentification asymétriques au design épuré (split-screen cinématique).
* **Mon Panier (`panier.html`)** : Récapitulatif, calcul de commande et suggestions de cross-selling.

---

## Présentation des pages & Fonctionnalités

### L'Accueil & L'Univers (`index.html`)
* Bannière d'impact épurée mettant en valeur la philosophie de l'Atelier Botanique.
* Barre de navigation (Navbar) adaptative et entièrement responsive : les menus basculent de manière fluide vers un tiroir ou une carte flottante selon la taille de l'écran pour une ergonomie mobile parfaite.
* Point d'accès vers un diagnostic personnalisé et intégration d'un assistant virtuel interactif (Chatbot) flottant pour guider l'utilisateur.

<img width="2666" height="10714" alt="_C__Users_toure_skincare_accueil html" src="https://github.com/user-attachments/assets/6d1f9898-2478-4cf0-b534-ba492055622c" />



---

### La Boutique & Catalogue (`produit.html`)
* **Filtres de Recherche Croisés :** Système de tri en temps réel codé en JavaScript permettant de filtrer les cosmétiques par disponibilité (En stock / Rupture), par prix maximum via un slider dynamique (FCFA), et par marque.
* **Mise en page fluide :** Grille de produits intelligente s'adaptant automatiquement du mobile à l'écran large (de 1 à 4 colonnes).
* **Badges de statut e-commerce :** Affichage d'un overlay "Épuisé" élégant au fini flouté (`backdrop-filter`) sur les produits en rupture de stock et bouton d'action directe "Ajouter".
<img width="2652" height="3752" alt="skincare_produit" src="https://github.com/user-attachments/assets/4475ffa9-e4b3-470b-9126-ddb829a4a199" />


---

### La Fiche Produit Immersive (`detail_produit.html`)
* **Galerie Multi-Angles :** Système de commutation dynamique en JavaScript permettant de changer l'image principale au clic sur les miniatures verticales (face, texture macro, application).
* **Accordéons de Spécifications Fins :** Sections repliables pour explorer proprement les Fonctions, le Dosage et les modalités de Livraison sans surcharger l'interface.
* **Sélecteurs d'options de luxe :** Choix des formats (30 ml / 50 ml) via des boutons radio épurés et boutons d'ajouts rapides.
<img width="2666" height="5082" alt="skincare_detail_produit" src="https://github.com/user-attachments/assets/358c20f5-2c80-45ec-855e-f3d656c73abd" />


---

### Conseils de l'Atelier & FAQ (`conseils.html`)
* **Galerie Asymétrique Premium :** Rendu visuel haut de gamme combinant portraits cinématiques et focus produits avec des pastilles interactives ("Details").
* **FAQ Accordéon exclusive :** Système codé en JavaScript gérant l'ouverture unique (fermeture automatique des autres volets) et la modification dynamique des indicateurs d'état ("Show" / "Hide").

<img width="2666" height="6928" alt="skincare_conseils" src="https://github.com/user-attachments/assets/405a4e42-ed30-4780-920b-5aac6620aa21" />

---

### Le Répertoire des Marques (`marques.html`)
* **Index Alphabétique Interactif :** Navigation par onglets de lettres permettant de filtrer instantanément les blocs de laboratoires d'un simple clic en CSS/JS.
* **Recherche Contextuelle Dynamique :** Champ de recherche textuel masquant automatiquement les lettres et les marques ne correspondant pas au mot-clé saisi par l'utilisateur.

<img width="2666" height="2948" alt="skincare_marque" src="https://github.com/user-attachments/assets/94713e53-9592-481c-ad2b-f32cfb1a7f63" />

---

### Le Panier & Récapitulatif Financier (`panier.html`)
* **Gestion du LocalStorage :** Persistance des données d'achat permettant d'ajouter, d'incrémenter ($+$), de décrémenter ($-$) ou de supprimer des articles avec mise à jour instantanée du DOM.
* **Module de Facturation Calculé :** Calcul en temps réel du sous-total, application de codes privilèges, gestion de la gratuité des frais de port et rendu monétaire formaté en FCFA.
* **Suggestions de Cross-Selling :** Galerie de recommandations ciblées en fin de page ("Complétez votre rituel cutané") pour inciter à l'achat complémentaire.

<img width="2666" height="3364" alt="skincare_panier" src="https://github.com/user-attachments/assets/fd7abe29-25fa-4091-ad30-c31847cf0a70" />

---

### L'Espace Membre Responsivisé (`connexion.html` / `inscription.html`)
* Design asymétrique en *split-screen* : une moitié d'image cinématique à la texture soignée et une moitié de formulaire minimaliste aux lignes fines et épurées.
* **Optimisation Responsive poussée :** Sur mobile et tablette, la mise en page réorganise intelligemment l'empilement vertical de l'image et du formulaire pour maintenir une lisibilité et un confort de saisie maximum sans jamais perdre l'image de vue.

<img width="2666" height="2650" alt="skincare_connexion" src="https://github.com/user-attachments/assets/9fa29057-2b26-4388-bdcf-10d6f5ee5253" />

---

## Technologies utilisées

* **HTML5** : Structuration sémantique avancée de l'ensemble des pages.
* **CSS3 Custom Properties (`:root`)** : Design system basé sur des variables de couleurs (Charcoal, Pure White, Accent Pink), typographies fluides (`Inter` & `Playfair Display`) et transitions soignées via courbes de Bézier.
* **Flexbox & CSS Grid** : Agencement complètement responsive des grilles de produits, du tableau de panier et du split-screen d'authentification.
* **JavaScript Vanilla (ES6)** : Moteur d'interactions complet (gestion asynchrone des menus tiroirs, système de panier local, ouverture des accordéons, filtres de recherche et indexations).
* **Google Fonts & Material Symbols** : Intégration de la typographie et du set d'icônes vectorielles uniformisées sur l'ensemble de l'interface membre et e-commerce.

