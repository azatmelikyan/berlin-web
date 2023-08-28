
const languageOptions = document.querySelectorAll('.languageOption');

    languageOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove the 'selected' class from all options
            languageOptions.forEach(opt => opt.classList.remove('selected'));

            // Add the 'selected' class to the clicked option
            option.classList.add('selected');

            // Get the selected language from the data-lang attribute
            const selectedLanguage = option.getAttribute('data-lang');

            // Call your language update function with the selected language
            applyLanguage(selectedLanguage);
        });
    });

    // Sample language update function
    function applyLanguage(language) {
        fetch('json/languages.json')
                .then(response => response.json())
                .then(languages => {
                    const selectedLanguageData = languages[language];
                    if (selectedLanguageData) {
                        updateContent(selectedLanguageData);
                    }
                })
                .catch(error => {
                    console.error('Error loading language data:', error);
                });
        // Your content update logic here
        console.log(`Language switched to ${language}`);
    }

    function updateContent(data) {
        Object.keys(data).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = data[key];
            }
        });
    }
