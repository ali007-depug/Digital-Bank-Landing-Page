const mobileMenuBtn = document.querySelector('.mobileMenuBtn');
const mobileNav = document.querySelector('.mobileNav');

const openHamburgerMenuBtn = document.querySelector('.openHamburgerMenu');
const closeHamburgerMenuBtn = document.querySelector('.closeHamburgerMenu');
const overlay = document.querySelector('.overlay');

mobileMenuBtn?.addEventListener("click", () => {
   if( mobileNav?.classList.contains('hidden')) {
    mobileNav?.classList.remove('hidden');
    closeHamburgerMenuBtn?.classList.remove('hidden');
    openHamburgerMenuBtn?.classList.add('hidden');
    overlay?.classList.remove('invisible');
    overlay?.classList.add('visible');
    overlay?.classList.remove('opacity-0');
    overlay?.classList.add('opacity-100');
    overlay?.classList.remove('pointer-events-none');
    mobileNav?.classList.add('flex');
   }else{
    mobileNav?.classList.add('hidden');
    openHamburgerMenuBtn?.classList.remove('hidden');
    closeHamburgerMenuBtn?.classList.add('hidden');
    overlay?.classList.add('invisible');
    overlay?.classList.remove('visible');
    overlay?.classList.add('opacity-0');
    overlay?.classList.add('pointer-events-none');
    overlay?.classList.remove('opacity-100');
   }
});
