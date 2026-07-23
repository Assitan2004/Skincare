  document.addEventListener("DOMContentLoaded", () => {
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

        // Logique interactive pour l'accordéon minimaliste
        function toggleAccordion(button) {
            const content = button.nextElementSibling;
            const label = button.querySelector('.accordion-state-label');
            const isOpened = content.style.maxHeight && content.style.maxHeight !== '0px';

            // Fermer tous les autres accordéons
            document.querySelectorAll('.accordion-content').forEach(item => item.style.maxHeight = '0px');
            document.querySelectorAll('.accordion-state-label').forEach(lbl => lbl.innerText = 'Show');

            if (!isOpened) {
                content.style.maxHeight = content.scrollHeight + "px";
                label.innerText = 'Hide';
            } else {
                content.style.maxHeight = '0px';
                label.innerText = 'Show';
            }
        }