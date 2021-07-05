// const kelas = document.getElementsByClassName('target');
// for(let i = 0; i < kelas.length; i++) {
//     kelas[i].addEventListener('click', function() {
//         const tujuan = kelas[i].getAttribute('href');
//         const tujuannya = this.documenFragments;
//         const bodi = document.body;
//         bodi.animate({
//             scrollTop: tujuannya
//         });
//         console.log(tujuannya);
//     })
// }

const gbrSatuKlik = document.getElementsByClassName('gbr-klik-satu')[0];
const gbrSatu = document.getElementsByClassName('gambar-satu')[0];
gbrSatuKlik.addEventListener('mouseleave', () => {
    gbrSatu.classList.toggle('d-x')
    gbrSatu.classList.toggle('muncul')
})
const gbrDuaKlik = document.getElementsByClassName('gbr-klik-dua')[0];
const gbrDua = document.getElementsByClassName('gambar-dua')[0];
gbrDuaKlik.addEventListener('mouseleave', () => {
    gbrDua.classList.toggle('d-x')
    gbrDua.classList.toggle('munculdua')
})
const gbrTigaKlik = document.getElementsByClassName('gbr-klik-tiga')[0];
const gbrTiga = document.getElementsByClassName('gambar-tiga')[0];
gbrTigaKlik.addEventListener('mouseleave', () => {
    gbrTiga.classList.toggle('d-x')
    gbrTiga.classList.toggle('munculdua')
})
