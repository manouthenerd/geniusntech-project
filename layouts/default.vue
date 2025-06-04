<template>
    <VueLenis root />
    <header class="w-full z-[999] min-h-10 p-2 bg-transparent backdrop-blur-lg font-medium sticky top-0">
        <nav class="flex justify-around max-[960px]:justify-between max-[960px]:px-8 items-center">
            <NuxtLink to="/">
                <NuxtImg src="/images/logo-genius.png" width="170" height="55" />
            </NuxtLink>

            <div id="mainLinks" class="flex gap-2 space-x-2 items-center max-[960px]:hidden">
                <NuxtLink class="text-[#025686] font-bold" to="/">Accueil</NuxtLink>
                <NuxtLink class="hover:text-[#025686]" to="/services">Services</NuxtLink>
                <NuxtLink class="hover:text-[#025686]" to="/achievement">Nos réalisations</NuxtLink>
                <NuxtLink class="hover:text-[#025686]" to="/about">À propos</NuxtLink>
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

    <main class="bg-[#fefefe] space-y-4 overflow-hidden">
        <div id="mobile-navbar"
            class="fixed w-[85%] h-[202px] min-[960px]:hidden min-h-10 px-[2rem] bg-[#0086c7] font-medium rounded-sm">
            <div class="grid gap-2 space-x-2 p-2 items-center">
                <NuxtLink class="text-[#fff] font-bold" to="/">Accueil</NuxtLink>
                <NuxtLink class="hover:text-white" to="/services">Services</NuxtLink>
                <NuxtLink class="hover:text-white" to="/achievement">Nos réalisations</NuxtLink>
                <NuxtLink class="hover:text-white" to="/about">À propos</NuxtLink>
                <NuxtLink class="hover:text-white" to="/team">Team Genius</NuxtLink>
                <NuxtLink class="hover:text-white" to="/contact">Contactez-nous</NuxtLink>
            </div>
        </div>

        <slot />
    </main>

    <footer class="grid p-2 space-y-4 bg-[#000] text-white">
        <div class="space-y-4 space-x-6 min-[850px]:flex justify-around max-[850px]:grid max-[850px]:grid-cols-2 max-[850px]:items-center max-[850px]:justify-items-center max-[850px]:mr-[30px] max-[520px]:mr-0 max-[520px]:grid-cols-1 bg-black p-2 ">
            <div>
                <p class="uppercase text-[#025686] font-bold">Localisation</p>
                <ul>
                    <li>Treichville Rue 17 Avenue 21</li>
                    <li>Avenue Ouezzin Coulibaly</li>
                </ul>
            </div>
            <div class="">
                <p class="uppercase text-[#025686] font-bold">Contacts</p>
                <ul>
                    <li>Phone: +225 07 5959 8830</li>
                    <li>Phone: +225 05 8563 8928</li>
                </ul>
            </div>
            <div class="max-[850px]:mr-[84px]">
                <p class="uppercase text-[#025686] font-bold">Réseaux sociaux</p>
                <ul class="flex items-center gap-2 min-[850px]:justify-center mt-4">
                    <li>
                        <NuxtLink to="/#">
                            <Icon class="hover:text-[#1c96e9]" size="28" name="uil:twitter" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">
                            <Icon class="hover:text-[#0866ff]" size="28" name="uil:facebook" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">
                            <Icon class="hover:text-[#0077b5]" size="28" name="uil:linkedin" />
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="justify-end max-[520px]:mr-[65px]">
                <p>
                    <NuxtImg class="w-[150px] h-[50px] object-contain" src="/images/logo-genius.png" />
                </p>
                <p>
                    Best Life, Smart Life — ⭐
                </p>
            </div>
        </div>

        <div class="bg-black grid place-content-center">
            <pre class="text-wrap text-center">Copyright {{ new Date().getFullYear() }} - Genius Network Technology </pre>
        </div>
    </footer>
</template>

<script setup>

import { VueLenis, useLenis } from 'lenis/vue'
import { watch } from 'vue'

const lenis = useLenis()

watch(
    lenis,
    (lenis) => {
        console.log(lenis)
    },
    { immediate: true }
)

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
