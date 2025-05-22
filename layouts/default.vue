<template>
    <header class="w-full z-[999] min-h-10 p-2 bg-transparent backdrop-blur-lg font-medium sticky top-0">
        <nav class="flex justify-around max-[960px]:justify-between max-[960px]:px-8 items-center">
            <NuxtLink to="/">
                <NuxtImg src="/images/logo-genius.png" width="170" height="55" />
            </NuxtLink>

            <div id="mainLinks" class="flex gap-2 space-x-2 items-center max-[960px]:hidden">
                <NuxtLink class="text-[#025686] font-bold" to="/">Accueil</NuxtLink>
                <NuxtLink class="hover:text-[#025686]" to="/about">À propos</NuxtLink>
                <NuxtLink class="hover:text-[#025686]" to="/achievement">Nos réalisations</NuxtLink>
                <NuxtLink class="hover:text-[#025686]" to="/services">Services</NuxtLink>
                <NuxtLink class="hover:text-[#025686]" to="/team">Team Genius</NuxtLink>
                <NuxtLink class="hover:text-[#025686]" to="/contact">Contactez-nous</NuxtLink>
            </div>

            <div class="max-[960px]:hidden">
                <NuxtLink to="/account">Espace membre</NuxtLink>
            </div>

            <div class="min-[960px]:hidden">
                <button id="menu-button">
                    <Menu />
                </button>
            </div>
        </nav>
    </header>

    <main class="mx-14 bg-[#fefefe] space-y-4">
        <div id="mobile-navbar"
            class="fixed w-[85%] h-[202px] min-[960px]:hidden min-h-10 px-[2rem] bg-[#0086c7] font-medium rounded-sm">
            <div class="grid gap-2 space-x-2 p-2 items-center">
                <NuxtLink class="text-[#fff] font-bold" to="/">Accueil</NuxtLink>
                <NuxtLink class="hover:text-white" to="/about">À propos</NuxtLink>
                <NuxtLink class="hover:text-white" to="/achievement">Nos réalisations</NuxtLink>
                <NuxtLink class="hover:text-white" to="/services">Services</NuxtLink>
                <NuxtLink class="hover:text-white" to="/team">Team Genius</NuxtLink>
                <NuxtLink class="hover:text-white" to="/contact">Contactez-nous</NuxtLink>
            </div>
        </div>

        <slot />
    </main>

    <footer class="flex justify-around items-center p-2 bg-[#025686] text-white">
        <div>
            <p class="uppercase text-[#000] font-bold ">Notre Slogan</p>
            <ul>
                <li>Genius Network Technology</li>
                <li>Best Life, Smart Life — ⭐</li>
            </ul>
        </div>
        <div>
            <p class="uppercase text-[#000] font-bold">Localisation</p>
            <ul>
                <li>Treichville Rue 21 Avenue 17</li>
                <li>Avenue Ouezzin Coulibaly</li>
            </ul>
        </div>
        <div>
            <p class="uppercase text-[#000] font-bold ">Contacts</p>
            <ul>
                <li>Phone: +225 07 5959 8830</li>
                <li>Phone: +225 05 8563 8928</li>
            </ul>
        </div>
        <div>
            <p class="uppercase text-[#000] font-bold ">Réseaux sociaux</p>
            <ul class="grid grid-cols-2">
                <li>
                    <NuxtLink to="/">twitter</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/">facebook</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/">linkedin</NuxtLink>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script setup>

onMounted(() => {

    let mobileNavbar = document.querySelector("#mobile-navbar")
    let menuButton = document.querySelector("#menu-button")

    menuButton.addEventListener('click', () => {

        mobileNavbar.classList.toggle("mobile-open")

    })

})

</script>

<style>
header {
    font-family: "Nunito", serif;
    box-shadow: 1px 2px 2px #d3cdcd;
}

div .uppercase {
    text-shadow: 0px 0px 1px #bcbcbc;
}


#mainLinks a:hover {
    transition: all .5s ease;
}

#mobile-navbar {
    transition: all .5s ease;
    top: -250px;
    box-shadow: 1px 1px 1px #bcbcbc;
    z-index: 2;
}

#mobile-navbar a {
transition: all .3s ease;
}

.mobile-open {
    top: 4.6rem !important;
}

body {
    font-family: 'poppins', sans-serif !important;
}

footer {
    font-family: 'Lato', sans-serif !important;
}
</style>
