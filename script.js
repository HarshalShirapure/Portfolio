document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Close sidebar if click outside
    document.addEventListener('click', function (event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggle = toggleBtn.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnToggle) {
            sidebar.classList.remove('active');
        }
    });
});
document.querySelector("form").addEventListener("submit", function(event) {
    // You can clear the fields after submission here
    setTimeout(function() {
        event.target.reset(); // This resets the form fields
    }, 100); // Slight delay to ensure submission happens before reset
});
