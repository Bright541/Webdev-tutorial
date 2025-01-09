// Function to be called when the button is clicked
function handleClick() {
    document.getElementById('response').innerText = 'Button was clicked!';
}

// Adding event listener to the button
document.getElementById('myButton').addEventListener('click', handleClick);

// Example JavaScript code could be added here for interactivity
// Example JavaScript code could be added here for interactivity
function updatePreview() {
    // Get the code from the textarea
    const code = document.getElementById('codeEditor').value;

    // Get the iframe element
    const previewFrame = document.getElementById('previewFrame');

    // Update the iframe's content
    previewFrame.contentDocument.open();
    previewFrame.contentDocument.write(code);
    previewFrame.contentDocument.close();
}
