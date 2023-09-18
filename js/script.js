const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const scrollElements = document.querySelectorAll('.scroll');
scrollElements.forEach((el) => observer.observe(el));


//Membuat Scoler dengan nama variable scrollElements untuk dapat dikonfigurasi pada queryselector pada dokumen css menggunakan atribut .scroll yang ada pada dokumen html di elemen article yang akan difungsikan untuk scroller  .