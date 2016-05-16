(function() {
    setInterval(showPin, 2000);
    
    function showPin() {
        var words = document.querySelectorAll("[data-tkn-annotation-type=word]");
        [].forEach.call(words, function(value) {
            // Check if the pin is equal to the word
            var characters = value.querySelectorAll(".glyph b");
            var word = "";
            [].forEach.call(characters, function(character) {
                word += character.innerText;
            });
            var pin = value.querySelector(".pin");

            if (pin && word) {
                if (pin.innerText != word) {
                    if (pin.dataset.revealed) return;
                    // And we move the element up one in the tree
                    pin.style = "display: block !important;";
                    pin.dataset.revealed = true;
                    var parent = pin.parentNode;
                    var prev = pin.previousSibling;
                    var oldPin = parent.removeChild(pin);
                    parent.insertBefore(oldPin, prev);
                }
            }
        });
    }
})();
