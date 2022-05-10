{
    var text1=document.querySelectorAll(".Redmi-img  a");
}


{
    // Xiaomi手机

    var phone1 = document.getElementById("Redmi");
    var info1 = document.getElementById("goodsInfo1");
    var img1 = info1.getElementsByTagName("img");
    phone1.onmousemove = function (event) {
        for (let index = 0; index < img1.length; index++) {
            img1[index].style.height = 110 + "px";
            text1[index].style.display="block";
        }
        info1.style.height = 228 + "px";
        
        phone1.onmouseleave = function () {

            for (let index = 0; index < img.length; index++) {
                img1[index].style.height = 0 + "px";
                text1[index].style.display="none";
            }
            info1.style.height = 0 + "px";

        };
        info1.onmousemove = function () {
            info1.style.height = 228 + "px";
            for (let index = 0; index < img1.length; index++) {
                img1[index].style.height = 110 + "px";
            text1[index].style.display="block";

            }
        };
    }

    info1.onmouseleave = function () {
        info1.style.height = 0 + "px";
        for (let index = 0; index < img1.length; index++) {
            img1[index].style.height = 0 + "px";
            text1[index].style.display="none";
        }


    };
}