
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
            localStorage.setItem('selectedLanguage', selectedLanguage);

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
            // if (element) {
            //     element.textContent = data[key];
            // }

            if (element) {
                const existingI = element.querySelector('.me-1'); // Get the existing <i> element
                element.textContent = data[key]; // Update the text content
                if (existingI) {
                    element.insertAdjacentHTML('afterbegin', existingI.outerHTML); // Re-insert the <i> element
                }
            }
        });
    }


    document.addEventListener('DOMContentLoaded', () => {
        const savedLanguage = localStorage.getItem('selectedLanguage');
        if (savedLanguage) {
            // Update language selectors to unselect previously selected language, if any.
            languageOptions.forEach(opt => opt.classList.remove('selected'));
            // Update language selector to show the saved language as selected
            const savedLanguageOption = document.querySelector(`[data-lang="${savedLanguage}"]`);
            if (savedLanguageOption) {
                savedLanguageOption.classList.add('selected');
            }
    
            // Call updateContent with the saved language
            applyLanguage(savedLanguage);
        }
    });
