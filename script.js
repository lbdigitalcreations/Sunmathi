document.addEventListener('DOMContentLoaded', function() {

    // --- Birthday born at 1:15 PM on July 23, 2008 (23.07.2008) ---
    const birthDate = new Date('2008-07-23T13:15:00');
    // --- Birthday celebration / party time at 1:15 PM today ---
    const partyTime = new Date('2026-07-23T13:15:00');
    const countdownElement = document.getElementById('countdown');

    function updateDisplay() {
        const now = new Date();

        // Calculate exact age duration from 23.07.2008 @ 1:15 PM
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

        if (now < partyTime) {
            // ⏳ Before 1:15 PM today -> Show countdown to 1:15 PM today + Date of Birth badge & duration breakdown
            const diff = partyTime - now;
            const h = Math.floor(diff / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);
            const hh = String(h).padStart(2, '0');
            const mm = String(m).padStart(2, '0');
            const ss = String(s).padStart(2, '0');

            countdownElement.innerHTML = `
              <div style="margin-bottom: 0.6rem; text-align: center;">
                <span style="background: rgba(255,183,197,0.25); border: 1px solid rgba(255,183,197,0.5); padding: 0.3rem 0.9rem; border-radius: 999px; font-size: 0.85rem; letter-spacing: 0.5px; font-weight: 600; display: inline-block; margin-bottom: 0.6rem;">
                  📅 Date of Birth: 23.07.2008 (1:15 PM)
                </span>
                <div style="font-size: 1.1rem; opacity: 0.95;">🎂 Birthday celebration starts in...</div>
              </div>
              
              <!-- Countdown Timer -->
              <div style="display:flex; gap:1.2rem; justify-content:center; flex-wrap:wrap; margin-bottom: 1.2rem;">
                <span style="background: rgba(255,255,255,0.15); padding: 0.6rem 1rem; border-radius: 0.5rem; border: 1px solid rgba(255,255,255,0.2);"><strong style="font-size:1.6rem; color:#FFB7C5;">${hh}</strong><br><small style="opacity:0.8; font-size:0.75rem; text-transform:uppercase;">Hours</small></span>
                <span style="font-size:1.8rem; opacity:0.6; align-self:center;">:</span>
                <span style="background: rgba(255,255,255,0.15); padding: 0.6rem 1rem; border-radius: 0.5rem; border: 1px solid rgba(255,255,255,0.2);"><strong style="font-size:1.6rem; color:#FFB7C5;">${mm}</strong><br><small style="opacity:0.8; font-size:0.75rem; text-transform:uppercase;">Minutes</small></span>
                <span style="font-size:1.8rem; opacity:0.6; align-self:center;">:</span>
                <span style="background: rgba(255,255,255,0.15); padding: 0.6rem 1rem; border-radius: 0.5rem; border: 1px solid rgba(255,255,255,0.2);"><strong style="font-size:1.6rem; color:#FFB7C5;">${ss}</strong><br><small style="opacity:0.8; font-size:0.75rem; text-transform:uppercase;">Seconds</small></span>
              </div>

              <!-- Life Duration Periods -->
              <div style="font-size: 0.85rem; opacity: 0.85; margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 1px;">Duration of Life:</div>
              <div style="display:flex; gap:0.6rem; justify-content:center; flex-wrap:wrap; font-size:0.9rem;">
                <span style="background:rgba(0,0,0,0.2); padding:0.3rem 0.7rem; border-radius:0.4rem;"><strong>${years}</strong> Years</span>
                <span style="background:rgba(0,0,0,0.2); padding:0.3rem 0.7rem; border-radius:0.4rem;"><strong>${months}</strong> Months</span>
                <span style="background:rgba(0,0,0,0.2); padding:0.3rem 0.7rem; border-radius:0.4rem;"><strong>${days}</strong> Days</span>
                <span style="background:rgba(0,0,0,0.2); padding:0.3rem 0.7rem; border-radius:0.4rem;"><strong>${hours}</strong> Hours</span>
                <span style="background:rgba(0,0,0,0.2); padding:0.3rem 0.7rem; border-radius:0.4rem;"><strong>${minutes}</strong> Mins</span>
                <span style="background:rgba(0,0,0,0.2); padding:0.3rem 0.7rem; border-radius:0.4rem;"><strong>${seconds}</strong> Secs</span>
              </div>
            `;
        } else {
            // 🎉 After 1:15 PM today -> Show Birthday Wishes + Date of Birth + Duration of Periods
            countdownElement.innerHTML = `
              <div style="margin-bottom: 1rem; text-align: center;">
                <span style="background: rgba(255,183,197,0.25); border: 1px solid rgba(255,183,197,0.5); padding: 0.35rem 1rem; border-radius: 999px; font-size: 0.85rem; letter-spacing: 0.5px; font-weight: 600; display: inline-block; margin-bottom: 0.6rem;">
                  📅 Date of Birth: 23.07.2008 (1:15 PM)
                </span>
                <div style="font-size: 1.7rem; color: #FFB7C5; font-family: 'Mochiy Pop One', sans-serif; text-shadow: 0 2px 8px rgba(0,0,0,0.3); margin-bottom: 0.4rem;">
                  🎉 Happy ${years}th Birthday, Sunmathi! 🎂✨
                </div>
                <div style="font-size: 1rem; opacity: 0.95; max-width: 580px; margin: 0 auto; line-height: 1.5; font-weight: normal;">
                  Wishing you a life filled with endless happiness, health, and success! May all your dreams come true today and always. 🌸🌙
                </div>
              </div>

              <!-- Life Duration Periods breakdown -->
              <div style="font-size: 0.85rem; opacity: 0.85; margin-bottom: 0.4rem; text-transform: uppercase; letter-spacing: 1px;">Time Duration of Life:</div>
              <div style="display:flex; gap:0.6rem; justify-content:center; flex-wrap:wrap; font-size:0.95rem;">
                <span style="background:rgba(0,0,0,0.25); padding:0.4rem 0.8rem; border-radius:0.4rem; border:1px solid rgba(255,255,255,0.15);"><strong style="color:#FFB7C5; font-size:1.1rem;">${years}</strong> Years</span>
                <span style="background:rgba(0,0,0,0.25); padding:0.4rem 0.8rem; border-radius:0.4rem; border:1px solid rgba(255,255,255,0.15);"><strong style="color:#FFB7C5; font-size:1.1rem;">${months}</strong> Months</span>
                <span style="background:rgba(0,0,0,0.25); padding:0.4rem 0.8rem; border-radius:0.4rem; border:1px solid rgba(255,255,255,0.15);"><strong style="color:#FFB7C5; font-size:1.1rem;">${days}</strong> Days</span>
                <span style="background:rgba(0,0,0,0.25); padding:0.4rem 0.8rem; border-radius:0.4rem; border:1px solid rgba(255,255,255,0.15);"><strong style="color:#FFB7C5; font-size:1.1rem;">${hours}</strong> Hours</span>
                <span style="background:rgba(0,0,0,0.25); padding:0.4rem 0.8rem; border-radius:0.4rem; border:1px solid rgba(255,255,255,0.15);"><strong style="color:#FFB7C5; font-size:1.1rem;">${minutes}</strong> Mins</span>
                <span style="background:rgba(0,0,0,0.25); padding:0.4rem 0.8rem; border-radius:0.4rem; border:1px solid rgba(255,255,255,0.15);"><strong style="color:#FFB7C5; font-size:1.1rem;">${seconds}</strong> Secs</span>
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

