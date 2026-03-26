const cards = document.querySelectorAll(".project-card"); // غيرنا الـ Selector للكارت كله
const viewer = document.getElementById("imageViewer");
const viewerImg = document.getElementById("viewerImg");

cards.forEach(card => {
    card.onclick = (e) => {
        // لو المستخدم ضغط على زرار GitHub مش عايزين الصورة تفتح
        if (e.target.classList.contains('github-btn')) return;

        const img = card.querySelector("img"); // بنجيب الصورة اللي جوه الكارت اللي اتضغط عليه
        viewer.style.display = "flex";
        viewerImg.src = img.src;
    };
});

// عشان يقفل لما تضغط على الخلفية السوداء بس
viewer.onclick = (e) => {
    if (e.target !== viewerImg) {
        viewer.style.display = "none";
    }
};