   document.addEventListener("DOMContentLoaded", () => {
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

        // --- FILTRE ALPHABÉTIQUE INTERACTIF ---
        function filtrerLettre(lettre) {
            const boutons = document.querySelectorAll('.letter-btn');
            boutons.forEach(btn => btn.classList.remove('active'));
            event.currentTarget.classList.add('active');

            const blocs = document.querySelectorAll('.directory-block');
            blocs.forEach(bloc => {
                if (lettre === 'ALL' || bloc.getAttribute('data-letter') === lettre) {
                    bloc.style.display = 'block';
                } else {
                    bloc.style.display = 'none';
                }
            });
        }

        // --- RECHERCHE CONTEXTUELLE DYNAMIQUE ---
        function rechercherMarque() {
            const input = document.getElementById('brandSearchInput');
            const filter = input.value.toUpperCase();
            const blocs = document.querySelectorAll('.directory-block');

            blocs.forEach(bloc => {
                const items = bloc.querySelectorAll('.brand-list-item');
                let blocContientMatch = false;

                items.forEach(item => {
                    const textValue = item.textContent || item.innerText;
                    if (textValue.toUpperCase().indexOf(filter) > -1) {
                        item.style.display = "";
                        blocContientMatch = true;
                    } else {
                        item.style.display = "none";
                    }
                });

                if (blocContientMatch) {
                    bloc.style.display = "block";
                } else {
                    bloc.style.display = "none";
                }
            });
        }

        // --- INTERACTION CHATBOT SYSTEM ---
        const launcher = document.getElementById('chatbot-launcher');
        const chatWindow = document.getElementById('chat-window');
        const closeChat = document.getElementById('close-chat');
        if(launcher) launcher.onclick = () => chatWindow.style.display = 'flex';
        if(closeChat) closeChat.onclick = () => chatWindow.style.display = 'none';