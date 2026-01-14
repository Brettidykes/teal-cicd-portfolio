document.querySelectorAll('.item').forEach(item => {
    let isExpanded = false;

    item.addEventListener('click', function() {
        const url = item.getAttribute('data-url');

        if (isExpanded) {
            // Open the specific URL in a new tab on the second click
            window.open(url, '_blank');
        } else {
            // Expand the item (focus is triggered to apply the expansion CSS)
            item.focus();
            isExpanded = true;

            // Optionally reset isExpanded after a certain period
            setTimeout(() => {
                isExpanded = false;
            }, 5000); // Adjust the timeout duration as needed
        }
    });
});
