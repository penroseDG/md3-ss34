let danhSach = ["Mục 1", "Mục 2", "Mục 3", "Mục 4", "Mục 5"];
function hienThiDanhSach() {
    let ul = document.createElement("ul");
    for (let i = 0; i < danhSach.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(danhSach[i]));
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}
window.onload = hienThiDanhSach;
