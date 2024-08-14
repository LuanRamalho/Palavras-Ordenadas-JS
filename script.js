        const words = [];

        function addWord() {
            const wordInput = document.getElementById('wordInput');
            const word = wordInput.value.trim();
            if (word && !words.includes(word)) {
                words.push(word);
                wordInput.value = '';
                displayWords();
            }
        }

        function removeWord() {
            const wordInput = document.getElementById('wordInput');
            const word = wordInput.value.trim();
            const index = words.indexOf(word);
            if (index !== -1) {
                words.splice(index, 1);
                wordInput.value = '';
                displayWords();
            }
        }

        function displayWords() {
            const wordList = document.getElementById('wordList');
            wordList.innerHTML = '';
            words.forEach(word => {
                const li = document.createElement('li');
                li.textContent = word;
                wordList.appendChild(li);
            });
        }

        function sortWords(order) {
            words.sort();
            if (order === 'desc') {
                words.reverse();
            }
            displayWords();
        }