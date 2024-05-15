document.addEventListener("DOMContentLoaded", () => {
    const lines = [
        document.getElementById('line1'),
        document.getElementById('line2'),
        document.getElementById('line3'),
        document.getElementById('line4')
    ];

    let currentLine = 0;

    const showNextLine = () => {
        if (currentLine < lines.length) {
            lines[currentLine].style.display = 'block';
            currentLine++;
            setTimeout(showNextLine, 2000);
        } else {
            document.getElementById('poem-container').addEventListener('click', () => {
                window.location.href = 'nextpage.html';
            });
        }
    };

    showNextLine();
});
