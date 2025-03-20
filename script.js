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
                setTimeout(callback, 500); // Pause avant d'écrire le suivant
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
    var swiper = new Swiper('.mySwiper', {
        loop: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
