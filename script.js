function analyzeText() {

    const text = document.getElementById("textInput").value;

    if (text.trim() === "") {
        resetStats();
        return;
    }

    // Words
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;

    // Characters
    const characterCount = text.length;

    // Sentences
    const sentences = text
        .split(/[.!?]+/)
        .filter(sentence => sentence.trim() !== "");

    const sentenceCount = sentences.length;

    // Paragraphs
    const paragraphs = text
        .split(/\n+/)
        .filter(paragraph => paragraph.trim() !== "");

    const paragraphCount = paragraphs.length;

    // Average word length
    const lettersOnly = text.match(/[a-zA-Z]+/g) || [];

    let totalLetters = 0;

    lettersOnly.forEach(word => {
        totalLetters += word.length;
    });

    const averageLength = lettersOnly.length > 0
        ? (totalLetters / lettersOnly.length).toFixed(1)
        : 0;

    // Reading time
    const readingTime = Math.max(
        1,
        Math.ceil(wordCount / 200)
    );

    document.getElementById("words").textContent = wordCount;
    document.getElementById("characters").textContent = characterCount;
    document.getElementById("sentences").textContent = sentenceCount;
    document.getElementById("paragraphs").textContent = paragraphCount;
    document.getElementById("average").textContent = averageLength;
    document.getElementById("reading").textContent =
        readingTime + " min";

    document.getElementById("message").textContent =
        "Your text contains " + wordCount +
        " words organized into " + sentenceCount +
        " sentences and " + paragraphCount +
        " paragraph(s).";
}

function resetStats() {

    document.getElementById("words").textContent = "0";
    document.getElementById("characters").textContent = "0";
    document.getElementById("sentences").textContent = "0";
    document.getElementById("paragraphs").textContent = "0";
    document.getElementById("average").textContent = "0";
    document.getElementById("reading").textContent = "0 min";

    document.getElementById("message").textContent =
        "Start typing to analyze your text.";
}