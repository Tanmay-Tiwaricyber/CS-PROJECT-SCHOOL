// JavaScript for tab switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contentSections = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.target;

            // Deactivate all tabs and hide all content
            tabs.forEach(t => t.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));

            // Activate the clicked tab and show corresponding content
            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
});
