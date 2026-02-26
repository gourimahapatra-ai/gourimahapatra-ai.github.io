<script>
document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener("mousemove", function (e) {

        const dot = document.createElement("div");
        dot.className = "trail-dot";
        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";

        document.body.appendChild(dot);

        setTimeout(() => {
            dot.remove();
        }, 500);

    });

});
</script>
