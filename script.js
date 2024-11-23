// Function to show more blog posts
function seeMorePosts() {
    const morePosts = document.getElementById("morePosts");
    if (morePosts.style.display === "none" || morePosts.style.display === "") {
        morePosts.style.display = "block"; // Show additional posts
        document.getElementById("seeMoreButton").style.display = "none"; // Hide button after showing
    }
}

// Optional: Initialize the page to hide additional posts on load
window.onload = function() {
    const morePosts = document.getElementById("morePosts");
    if (morePosts) {
        morePosts.style.display = "none"; // Ensure additional posts are hidden initially
    }
};