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