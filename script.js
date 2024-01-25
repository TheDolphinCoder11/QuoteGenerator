document.addEventListener('DOMContentLoaded', function() {
    const motivationalQuotes = [
        "Believe you can and you're halfway there. -Theodore Roosevelt",
        "The only way to do great work is to love what you do. -Steve Jobs",
        "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
        "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill"
    ];

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
        return motivationalQuotes[randomIndex];
    }

    function displayRandomQuote() {
        const quoteInput = document.getElementById('quoteOutput');
        quoteInput.value = getRandomQuote();
    }

    function copyToClipboard() {
        const quoteInput = document.getElementById('quoteOutput');
        quoteInput.select();
        document.execCommand('copy');
    }

    document.getElementById('generator_button').addEventListener('click', displayRandomQuote);
    document.getElementById('copyButton').addEventListener('click', copyToClipboard);
});
