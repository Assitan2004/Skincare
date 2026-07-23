    // ---- CHARGEMENT INITIAL ET RENDU DU PANIER DYNAMIQUE ----
        document.addEventListener("DOMContentLoaded", () => {
            verifierEtInitialiserPanier();
            renderPanier();
            
            // Interaction Drawer Mobile
            const openBtn = document.getElementById('openBtn');
            const mobileDrawer = document.getElementById('mobileDrawer');
            if(openBtn && mobileDrawer) {
                openBtn.onclick = (e) => {
                    e.stopPropagation();
                    mobileDrawer.classList.toggle('active');
                };
                document.addEventListener('click', () => mobileDrawer.classList.remove('active'));
            }
        });

        function verifierEtInitialiserPanier() {
            if (!localStorage.getItem("panier") || JSON.parse(localStorage.getItem("panier")).length === 0) {
                const produitsDefaut = [
                    { id: 1, nom: 'Kojic Acid Soap', prix: 9500, image: 'Images/Cor2.JPG', quantite: 1 },
                    { id: 2, nom: 'Anua Niacinamide Serum', prix: 14000, image: 'Images/Cor3.JPG', quantite: 1 }
                ];
                localStorage.setItem("panier", JSON.stringify(produitsDefaut));
            }
        }

        function renderPanier() {
            const container = document.getElementById("cart-container");
            let panier = JSON.parse(localStorage.getItem("panier") || "[]");
            
            if (panier.length === 0) {
                container.innerHTML = `<div class="empty-message">Votre panier est actuellement vide. Rafrîchissez la page pour réinitialiser les articles de démonstration.</div>`;
                document.getElementById("summary-subtotal").innerText = "0 FCFA";
                document.getElementById("summary-total-price").innerText = "0 FCFA";
                return;
            }

            let html = `
                <div class="cart-table-header">
                    <span>Produit</span>
                    <span style="text-align: center;">Quantité</span>
                    <span style="text-align: center;">Total</span>
                    <span style="text-align: right;">Action</span>
                </div>
            `;

            let subtotal = 0;

            panier.forEach(item => {
                let itemTotal = item.prix * item.quantite;
                subtotal += itemTotal;
                
                let srcImg = item.image.startsWith('Images/') ? item.image : 'Images/' + item.image;

                html += `
                    <div class="cart-item">
                        <div class="product-col">
                            <div class="item-img"><img src="${srcImg}" alt="${item.nom}"></div>
                            <div class="item-info">
                                <h3>${item.nom}</h3>
                                <p>Soin Ciblé</p>
                            </div>
                        </div>
                        <div class="qty-col">
                            <div class="qty-box">
                                <span class="qty-btn" onclick="changerQuantite(${item.id}, 1)">+</span>
                                <span class="qty-num">${item.quantite}</span>
                                <span class="qty-btn" onclick="changerQuantite(${item.id}, -1)">−</span>
                            </div>
                        </div>
                        <div class="item-price">${itemTotal.toLocaleString()} FCFA</div>
                        <div class="action-col">
                            <span class="material-symbols-outlined delete-btn" onclick="supprimerArticle(${item.id})">delete</span>
                        </div>
                    </div>
                `;
            });

            container.innerHTML = html;
            document.getElementById("summary-subtotal").innerText = `${subtotal.toLocaleString()} FCFA`;
            document.getElementById("summary-total-price").innerText = `${subtotal.toLocaleString()} FCFA`;
        }

        function changerQuantite(id, modificateur) {
            let panier = JSON.parse(localStorage.getItem("panier") || "[]");
            const index = panier.findIndex(item => item.id === id);
            
            if (index !== -1) {
                panier[index].quantite += modificateur;
                if (panier[index].quantite <= 0) {
                    panier.splice(index, 1);
                }
                localStorage.setItem("panier", JSON.stringify(panier));
                renderPanier();
            }
        }

        function supprimerArticle(id) {
            let panier = JSON.parse(localStorage.getItem("panier") || "[]");
            panier = panier.filter(item => item.id !== id);
            localStorage.setItem("panier", JSON.stringify(panier));
            renderPanier();
        }

        function ajouterAuPanierManuel(id, nom, prix, image) {
            let panier = JSON.parse(localStorage.getItem("panier") || "[]");
            const index = panier.findIndex(item => item.id === id);
            if (index !== -1) {
                panier[index].quantite += 1;
            } else {
                panier.push({ id, nom, prix, image, quantite: 1 });
            }
            localStorage.setItem("panier", JSON.stringify(panier));
            renderPanier();
        }

        // --- LAUNCHER CHATBOT ---
        const launcher = document.getElementById('chatbot-launcher');
        const chatWindow = document.getElementById('chat-window');
        const closeChat = document.getElementById('close-chat');
        if(launcher) launcher.onclick = () => chatWindow.style.display = 'flex';
        if(closeChat) closeChat.onclick = () => chatWindow.style.display = 'none';