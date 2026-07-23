    const API = "http://127.0.0.1:5000";

        document.addEventListener("DOMContentLoaded", () => {
            const user = JSON.parse(localStorage.getItem("user"));
            
            // Logique interactive calquée sur la page Conseils pour l'ouverture du menu mobile
            const menuBtn = document.getElementById('menuBtn');
            const mobileDrawer = document.getElementById('mobileDrawer');
            
            if (menuBtn && mobileDrawer) {
                menuBtn.onclick = (e) => {
                    e.stopPropagation();
                    mobileDrawer.classList.toggle('active');
                };
                document.addEventListener('click', () => mobileDrawer.classList.remove('active'));
            }
        });

        // Pilote le tiroir de filtres sur mobile indépendamment de la navigation globale
        function toggleFiltersDrawer(open) {
            const filtersDrawer = document.getElementById("mobileFiltersDrawer");
            const backdrop = document.getElementById("drawerBackdrop");
            if (open) {
                filtersDrawer.classList.add("open");
                backdrop.classList.add("open");
                document.body.style.overflow = "hidden";
            } else {
                filtersDrawer.classList.remove("open");
                backdrop.classList.remove("open");
                document.body.style.overflow = "";
            }
        }

        // Ferme uniquement les filtres ouverts au clic sur le fond flouté
        function closeAllDrawers() {
            toggleFiltersDrawer(false);
        }

        function ajouterAuPanier(id, nom, prix, image) {
            let panier = JSON.parse(localStorage.getItem("panier") || "[]");
            const index = panier.findIndex(item => item.id === id);
                                                                        
            if (index !== -1) {
                panier[index].quantite += 1;
            } else {
                panier.push({ id, nom, prix, image, quantite: 1 });
            }
                                                                        
            localStorage.setItem("panier", JSON.stringify(panier));
                                                                        
            const msg = document.createElement("div");
            msg.textContent = `✅ ${nom} ajouté au panier !`;
            msg.style.cssText = `
                position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
                background: #111; color: white; padding: 14px 28px;
                border-radius: 40px; font-weight: 400; font-size: 0.85rem;
                z-index: 9999; box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            `;
            document.body.appendChild(msg);
            setTimeout(() => msg.remove(), 2500);
        }