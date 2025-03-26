document.addEventListener("DOMContentLoaded", function() {
    console.log("Bienvenue sur mon portfolio !");

    // ------------------------------
    // 1) EFFET DE TEXTE "DYNAMIC WORD"
    // ------------------------------
    const words = ["World !", "recruiter ?", "visitor !"];
    let wordIndex = 0;
    const dynamicWord = document.getElementById("dynamic-word");

    function typeEffect(word, callback) {
        let i = 0;
        dynamicWord.textContent = ""; // Vide le texte avant d'écrire
        let typing = setInterval(() => {
            if (i < word.length) {
                dynamicWord.textContent += word[i];
                i++;
            } else {
                clearInterval(typing);
                setTimeout(callback, 3000); // Pause avant effacement
            }
        }, 100);
    }

    function deleteEffect(callback) {
        let text = dynamicWord.textContent;
        let i = text.length;
        let deleting = setInterval(() => {
            if (i > 0) {
                dynamicWord.textContent = text.substring(0, i - 1);
                i--;
            } else {
                clearInterval(deleting);
                setTimeout(callback, 500);
            }
        }, 50);
    }

    function loopWords() {
        typeEffect(words[wordIndex], () => {
            deleteEffect(() => {
                wordIndex = (wordIndex + 1) % words.length;
                loopWords();
            });
        });
    }

    loopWords();

    // ------------------------------
    // 2) CARROUSEL SWIPER DES PROJETS
    // ------------------------------
    var swiper = new Swiper('.mySwiper', {
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        slidesPerView: 1, // Par défaut : 1 slide sur mobile
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: { // Dès 600px (tablettes), on passe à 2 slides
                slidesPerView: 2
            }
        }
    });
    
    // ------------------------------
    // 3) GESTION DE LA RESPONSIVITE
    // ------------------------------
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
    
});
