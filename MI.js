{
    /* 
        轮播图
    */
    //    获取IMGid 轮播图的id
    // 五个导航点


    var num = 0;
    var IMG = document.getElementById("IMG");
    var imgArr = ["MI.img/banner/轮播图1.png", "MI.img/banner/轮播图2.png ", "MI.img/banner/轮播图3.png ", "MI.img/banner/轮播图4.png ", "MI.img/banner/轮播图5.png"];
    var prev = document.querySelector(".prev-next .prev");
    prev.onclick = function () {
        if (num == 0) {
            num = imgArr.length;
        }
        num--;
        IMG.src = imgArr[num];
        for (let index = 0; index < point.length; index++) {
            point[index].style.backgroundColor = "";
        }
        point[num].style.backgroundColor = "#333";

    }
    var next = document.querySelector(".prev-next .next");
    next.onclick = function () {
        if (num == imgArr.length - 1) {
            num = -1;
        }
        num++;
        IMG.src = imgArr[num];
        for (let index = 0; index < point.length; index++) {
            point[index].style.backgroundColor = "";
        }
        point[num].style.backgroundColor = "#333";
    }
}
// 五个导航点
{
    var point = document.querySelectorAll(" .pointer  a ");
    for (let index = 0; index < point.length; index++) {
        point[index].onclick = function () {
            IMG.src = imgArr[index];
            for (let index = 0; index < point.length; index++) {
                point[index].style.backgroundColor = "";
            }
            point[index].style.backgroundColor = "333";
        }
    }
}

//获取 上拉图标下面的a
{
    var text = document.querySelectorAll(".phone-img  a");
}


{
    // Xiaomi手机

    var phone = document.getElementById("xiaomi");
    var info = document.getElementById("goodsInfo");
    var img = info.getElementsByTagName("img");
    phone.onmousemove = function (event) {
        for (let index = 0; index < img.length; index++) {
            img[index].style.height = 110 + "px";
            text[index].style.display = "block";
        }
        info.style.height = 228 + "px";

        phone.onmouseleave = function () {

            for (let index = 0; index < img.length; index++) {
                img[index].style.height = 0 + "px";
                text[index].style.display = "none";
            }
            info.style.height = 0 + "px";

        };
        info.onmousemove = function () {
            info.style.height = 228 + "px";
            for (let index = 0; index < img.length; index++) {
                img[index].style.height = 110 + "px";
                text[index].style.display = "block";

            }
        };
    }

    info.onmouseleave = function () {
        info.style.height = 0 + "px";
        for (let index = 0; index < img.length; index++) {
            img[index].style.height = 0 + "px";
            text[index].style.display = "none";
        }


    };
}