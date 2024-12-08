// const imgContainer = document.querySelector('.images');

// const createImage=function(imgPath){
//     return new Promise(function(resolve,reject){
//         const img=document.createElement('img');
//         img.src=imgPath;

//         img.addEventListener('load',function(){
//             imgContainer.append(img);
//             resolve(img);
//         });

//         img.addEventListener('error',function(){
//             reject(new Error('Image not found'));
//         })
//     });
// }

// const wait = function (seconds) {
//     return new Promise(resolve => setTimeout(resolve, seconds * 1000));
// };

// let currentImg;
// createImage('img/img-1.jpg')
// .then(img=>{
//     currentImg=img;
//     console.log('image-1 loaded');
//     return wait(2);
// })
// .then(
//     ()=>{
//     currentImg.style.display='none'
//     return createImage('img/img-2.jpg')
// })
// .then(img=>{
//     currentImg=img;
//     console.log('image-2 loaded');
//     return wait(2);
// })
// .then(
//     ()=>{
//         currentImg.style.display='none'
//         return createImage('img/img-3.jpg')
// })
// .then(()=>{
//     console.log('image-3 loaded');
// }).catch(err=>console.error(err))