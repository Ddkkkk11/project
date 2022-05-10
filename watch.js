// {
//     var text2=document.querySelectorAll(".watch  a");
// }

// {
//     // Xiaomi手机

//     var phone2 = document.getElementById("dianshi");
//     var info2 = document.getElementById("goodsInfo2");
//     var img2 = info2.getElementsByTagName("img");
//     phone2.onmousemove = function (event) {
//         for (let index = 0; index < img2.length; index++) {
//             img2[index].style.height = 110 + "px";
//             text2[index].style.display="block";
//         }
//         info2.style.height = 228 + "px";
        
//         phone2.onmouseleave = function () {

//             for (let index = 0; index < img2.length; index++) {
//                 img2[index].style.height = 0 + "px";
//                 text2[index].style.display="none";
//             }
//             info2.style.height = 0 + "px";

//         };
//         info2.onmousemove = function () {
//             info2.style.height = 228 + "px";
//             for (let index = 0; index < img2.length; index++) {
//                 img2[index].style.height = 110 + "px";
//             text2[index].style.display="block";

//             }
//         };
//     }

//     info2.onmouseleave = function () {
//         info2.style.height = 0 + "px";
//         for (let index = 0; index < img2.length; index++) {
//             img2[index].style.height = 0 + "px";
//             text2[index].style.display="none";
//         }


//     };
// }

    fun("dianshi","goodsInfo2");
        //写个方法
    function fun(bind,info) {
        {
            var text2=document.querySelectorAll(".watch  a");
        }
        {
            // Xiaomi手机
        
            var phone2 = document.getElementById(bind);//dianshi
            var info2 = document.getElementById(info);  //goodsInfo2
            var img2 = info2.getElementsByTagName("img");
            phone2.onmousemove = function (event) {
                for (let index = 0; index < img2.length; index++) {
                    img2[index].style.height = 110 + "px";
                    text2[index].style.display="block";
                }
                info2.style.height = 228 + "px";
                
                phone2.onmouseleave = function () {
        
                    for (let index = 0; index < img2.length; index++) {
                        img2[index].style.height = 0 + "px";
                        text2[index].style.display="none";
                    }
                    info2.style.height = 0 + "px";
        
                };
                info2.onmousemove = function () {
                    info2.style.height = 228 + "px";
                    for (let index = 0; index < img2.length; index++) {
                        img2[index].style.height = 110 + "px";
                    text2[index].style.display="block";
        
                    }
                };
            }
            info2.onmouseleave = function () {
                info2.style.height = 0 + "px";
                for (let index = 0; index < img2.length; index++) {
                    img2[index].style.height = 0 + "px";
                    text2[index].style.display="none";
                }
            };
        }
    }            
