
    document.addEventListener("DOMContentLoaded", function() {
        const slides = document.querySelectorAll("#dynamicSlider img");
        let currentIndex = 0;
        const displayTime = 5000; // 5 seconds bawat slide

        if (slides.length > 0) {
            // I-set ang unang image bilang active agad
            slides[0].classList.add("active");

            setInterval(() => {
                // Alisin ang active class sa kasalukuyang slide
                slides[currentIndex].classList.remove("active");

                // Lipat sa susunod na slide (babalik sa 0 kapag tapos na sa huli)
                currentIndex = (currentIndex + 1) % slides.length;

                // Idagdag ang active class sa bagong slide
                slides[currentIndex].classList.add("active");
            }, displayTime);
        }
    });
