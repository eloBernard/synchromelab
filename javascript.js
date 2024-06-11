function searchContent() {
    const searchBox = document.getElementById('searchBox');
    const searchTerm = searchBox.value.toLowerCase();
    const contentDiv = document.getElementById('content');
    const paragraphs = contentDiv.getElementsByTagName('p');

    for (let paragraph of paragraphs) {
        const text = paragraph.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            paragraph.style.backgroundColor = 'yellow'; // Highlight the paragraph
        } else {
            paragraph.style.backgroundColor = ''; // Reset the background color
        }
    }
}
