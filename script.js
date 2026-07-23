document.addEventListener('DOMContentLoaded', function() {

    // --- Birthday born at 1:15 PM on Aug 14, 2006 ---
    const birthDate = new Date('2006-08-14T13:15:00');
    // --- Party kicks off at 1:15 PM today ---
    const partyTime = new Date('2026-07-23T13:15:00');
    const countdownElement = document.getElementById('countdown');

    function updateDisplay() {
        const now = new Date();

        if (now < partyTime) {
            // ⏳ Countdown to 1:15 PM today
            const diff = partyTime - now;
            const h = Math.floor(diff / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);
            const hh = String(h).padStart(2, '0');
            const mm = String(m).padStart(2, '0');
            const ss = String(s).padStart(2, '0');

            countdownElement.innerHTML = `
              <div style="margin-bottom:0.6rem; font-size:1.1rem; opacity:0.9;">🎂 Birthday celebration starts in...</div>
              <div style="display:flex; gap:1.5rem; justify-content:center; flex-wrap:wrap;">
                <span><strong style="font-size:1.5rem;">${hh}</strong><br>Hours</span>
                <span style="font-size:1.8rem; opacity:0.6;">:</span>
                <span><strong style="font-size:1.5rem;">${mm}</strong><br>Minutes</span>
                <span style="font-size:1.8rem; opacity:0.6;">:</span>
                <span><strong style="font-size:1.5rem;">${ss}</strong><br>Seconds</span>
              </div>
            `;
        } else {
            // 🎉 Show live birthday age since Aug 14, 2006 at 1:15 PM
            let years = now.getFullYear() - birthDate.getFullYear();
            let months = now.getMonth() - birthDate.getMonth();
            let days = now.getDate() - birthDate.getDate();
            let hours = now.getHours() - birthDate.getHours();
            let minutes = now.getMinutes() - birthDate.getMinutes();
            let seconds = now.getSeconds() - birthDate.getSeconds();

            if (seconds < 0) { seconds += 60; minutes--; }
            if (minutes < 0) { minutes += 60; hours--; }
            if (hours < 0) { hours += 24; days--; }
            if (days < 0) {
                const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                days += prevMonth.getDate();
                months--;
            }
            if (months < 0) { months += 12; years--; }

            const ampm = hours >= 12 ? 'PM' : 'AM';
            const hours12 = hours % 12 === 0 ? 12 : hours % 12;

            countdownElement.innerHTML = `
              <div style="display:flex; gap:1.5rem; justify-content:center; flex-wrap:wrap; margin-bottom:0.5rem;">
                <span><strong>${years}</strong> Years</span>
                <span><strong>${months}</strong> Months</span>
                <span><strong>${days}</strong> Days</span>
              </div>
              <div style="display:flex; gap:1.5rem; justify-content:center; flex-wrap:wrap;">
                <span><strong>${hours12}</strong> Hours</span>
                <span><strong>${minutes}</strong> Minutes</span>
                <span><strong>${seconds}</strong> Seconds</span>
                <span><strong>${ampm}</strong></span>
              </div>
            `;
        }
    }
    setInterval(updateDisplay, 1000);
    updateDisplay();


    // --- Initialize AOS (Animate on Scroll) ---
    AOS.init({
        duration: 800,
        once: true,
    });

    // --- Initialize LightGallery ---
    lightGallery(document.getElementById('lightgallery'), {
        speed: 500,
        download: false
    });

    // --- Hall of Fame Scroller ---
    const scroller = document.getElementById('hall-of-fame-scroller');
    const scrollLeftBtn = document.getElementById('scroll-left-btn');
    const scrollRightBtn = document.getElementById('scroll-right-btn');
    if (scroller && scrollLeftBtn && scrollRightBtn) {
        const card = scroller.querySelector('.snap-center');
        const cardWidth = card.offsetWidth + parseInt(getComputedStyle(card.parentElement).gap);

        scrollRightBtn.addEventListener('click', () => {
            scroller.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });
        scrollLeftBtn.addEventListener('click', () => {
            scroller.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });
    }

    // --- Video Uploader ---
    const videoUploadInput = document.getElementById('video-upload');
    const videoPlayer = document.getElementById('video-player');
    const videoUploadLabel = document.getElementById('video-upload-label');

    if(videoUploadInput && videoPlayer && videoUploadLabel) {
        videoUploadLabel.addEventListener('click', () => {
            videoUploadInput.click();
        });

        videoUploadInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const videoURL = URL.createObjectURL(file);
                videoPlayer.src = videoURL;
                videoPlayer.classList.remove('hidden');
                videoUploadLabel.classList.add('hidden');
                videoPlayer.play();
            }
        });
    }


    // --- Sakura Petal Animation ---
    const canvas = document.getElementById('sakura-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let petals = [];
        const numPetals = 50;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        function Petal() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height * 2 - canvas.height;
            this.w = 25 + Math.random() * 15;
            this.h = 20 + Math.random() * 10;
            this.opacity = this.w / 40;
            this.flip = Math.random();
            this.xSpeed = 1.5 + Math.random() * 2;
            this.ySpeed = 1 + Math.random() * 1;
            this.flipSpeed = Math.random() * 0.03;
        }

        Petal.prototype.draw = function() {
            if (this.y > canvas.height || this.x > canvas.width) {
                this.x = -this.w;
                this.y = Math.random() * canvas.height * 2 - canvas.height;
                this.xSpeed = 1.5 + Math.random() * 2;
                this.ySpeed = 1 + Math.random() * 1;
                this.flip = Math.random();
            }
            ctx.globalAlpha = this.opacity;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.bezierCurveTo(this.x + this.w / 2, this.y - this.h / 2, this.x + this.w, this.y, this.x + this.w / 2, this.y + this.h / 2);
            ctx.bezierCurveTo(this.x, this.y + this.h, this.x - this.w / 2, this.y, this.x, this.y);
            ctx.closePath();
            ctx.fillStyle = '#FFB7C5';
            ctx.fill();
        }

        Petal.prototype.update = function() {
            this.x += this.xSpeed;
            this.y += this.ySpeed;
            this.flip += this.flipSpeed;
            this.draw();
        }

        function createPetals() {
            petals = [];
            for (let i = 0; i < numPetals; i++) {
                petals.push(new Petal());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            petals.forEach(petal => {
                petal.update();
            });
            requestAnimationFrame(animate);
        }

        createPetals();
        animate();
    }
});

