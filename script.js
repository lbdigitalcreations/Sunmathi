document.addEventListener('DOMContentLoaded', function() {

    // --- Birthday born at 1:15 PM on July 23, 2008 ---
    const birthDate = new Date('2008-07-23T13:15:00');
    // --- Birthday surprise / party kicks off at 1:15 PM today ---
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
                <span><strong style="font-size:1.6rem;">${hh}</strong><br>Hours</span>
                <span style="font-size:1.8rem; opacity:0.6;">:</span>
                <span><strong style="font-size:1.6rem;">${mm}</strong><br>Minutes</span>
                <span style="font-size:1.8rem; opacity:0.6;">:</span>
                <span><strong style="font-size:1.6rem;">${ss}</strong><br>Seconds</span>
              </div>
            `;
        } else {
            // 🎉 Show Birthday Wishes & Live Age Counter
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

            const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
            const hours12 = now.getHours() % 12 === 0 ? 12 : now.getHours() % 12;

            countdownElement.innerHTML = `
              <div style="margin-bottom: 0.8rem; text-align: center;">
                <div style="font-size: 1.6rem; color: #FFB7C5; font-family: 'Mochiy Pop One', sans-serif; text-shadow: 0 2px 8px rgba(0,0,0,0.3); margin-bottom: 0.4rem;">
                  🎉 Happy ${years}th Birthday, Sunmathi! 🎂✨
                </div>
                <div style="font-size: 1rem; opacity: 0.9; max-width: 550px; margin: 0 auto 1rem; line-height: 1.5; font-weight: normal;">
                  Wishing you a day filled with endless joy, laughter, love, and sweet memories. May all your dreams come true! 🌸🌙
                </div>
              </div>
              <div style="display:flex; gap:1.2rem; justify-content:center; flex-wrap:wrap; margin-bottom:0.4rem; font-size:1rem;">
                <span><strong style="color: #FFB7C5; font-size:1.2rem;">${years}</strong> Years</span>
                <span><strong style="color: #FFB7C5; font-size:1.2rem;">${months}</strong> Months</span>
                <span><strong style="color: #FFB7C5; font-size:1.2rem;">${days}</strong> Days</span>
              </div>
              <div style="display:flex; gap:1.2rem; justify-content:center; flex-wrap:wrap; opacity: 0.95; font-size:0.95rem;">
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

