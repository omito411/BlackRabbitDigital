// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navUL = document.querySelector(".nav-ul");

if (hamburger && close && navUL) {
    console.log("Hamburger elements found");
    hamburger.addEventListener("click", () => {
        console.log("Hamburger clicked");
        navUL.classList.toggle("show");
        hamburger.classList.toggle("hide");
    });

    close.addEventListener("click", () => {
        console.log("Close clicked");
        navUL.classList.toggle("show");
        hamburger.classList.toggle("hide");
    });
} else {
    console.error("Hamburger, close, or nav-ul not found:", {
        hamburger: !!hamburger,
        close: !!close,
        navUL: !!navUL
    });
}

// Search Modal
const modal = document.getElementById("search-modal");
const btn = document.querySelector(".search");
const closeModal = document.querySelector(".close-modal");

if (btn && modal && closeModal) {
    console.log("Search elements found");
    btn.addEventListener("click", openPopup);
    closeModal.addEventListener("click", closePopup);

    function openPopup(e) {
        e.preventDefault();
        console.log("Search icon clicked, opening modal");
        modal.style.display = "block";
    }

    function closePopup() {
        console.log("Closing modal");
        modal.style.display = "none";
    }

    // Close modal when clicking outside
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            console.log("Clicked outside modal, closing");
            closePopup();
        }
    });
} else {
    console.error("Search modal, button, or close button not found:", {
        modal: !!modal,
        btn: !!btn,
        closeModal: !!closeModal
    });
}

// Search Form Submission
const searchForm = document.getElementById("search-form");
if (searchForm) {
    console.log("Search form found");
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("Submit button clicked");
        const query = document.getElementById("search-input")?.value.trim() || "";
        if (query) {
            console.log("Search submitted with query:", query);
            alert("Searching for: " + query);
            // Optional: Redirect to search results
            // window.location.href = `/search?q=${encodeURIComponent(query)}`;
            closePopup();
        } else {
            console.log("No query entered");
            alert("Please enter a search term.");
        }
    });
} else {
    console.error("Search form not found");
}
