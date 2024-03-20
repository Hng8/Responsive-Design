
document.addEventListener('DOMContentLoaded', function() {
    let liTabs = document.querySelectorAll(".information .info-list li");
    let divContent = document.querySelectorAll(".information .info-content div");

    // Initially show the content of the selected tab
    showSelectedContent();

    liTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            // Remove "selected" class from all tabs
            liTabs.forEach(tab => {
                tab.classList.remove("selected");
            });

            // Add "selected" class to the clicked tab
            e.target.classList.add("selected");

            // Show the content corresponding to the clicked tab
            showSelectedContent();
        });
    });

    function showSelectedContent() {
        let selectedTab = document.querySelector(".information .info-list li.selected");
        let dataClass = selectedTab.getAttribute('data-class');

        // Hide all content divs
        divContent.forEach(div => {
            div.style.display = "none";
        });

        // Show the content corresponding to the selected tab
        let selectedContent = document.querySelector(".information .info-content ." + dataClass);
        selectedContent.style.display = "block";
    }
});
