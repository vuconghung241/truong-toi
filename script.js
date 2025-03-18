document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    // Danh sách ảnh (Thay thế bằng ảnh thực tế)
    const images = [
        "imagesschool1.jpg",
        "imagesschool2.jpg",
        "imagesschool3.jpg"
    ];

    // Thêm ảnh vào gallery
    images.forEach(src => {
        let img = document.createElement("img");
        img.src = src;
        img.alt = "Hoạt động của trường";
        gallery.appendChild(img);
    });
});
