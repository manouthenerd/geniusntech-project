<template>
    <section id="header-section" class="bg-blue-50 w-full min-h-30 p-1">
        <div class="w-full min-h-150 overflow-hidden text-white grid min-[750px]:grid-cols-2">
            <div class="p-4 space-y-4 min-[750px]:mt-8 h-full grid justify-between">
                <h3 data-aos="fade-up" data-aos-duration="1200"
                    class="font-bold text-4xl rounded backdrop-blur-xl bg-transparent max-[750px]:backdrop-blur-none max-[750px]:bg-[#00000045] p-1">
                    Spécialiste <span class="text-[#068fcf]">Des <br>Nouvelles</span> Technologies
                </h3>
                <p data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000"
                    class="text-[14.5px] p-2 font-medium rounded backdrop-blur-xl bg-transparent max-[750px]:backdrop-blur-none max-[750px]:bg-[#00000045]">
                    Dans un monde ultra-connecté, sécuriser vos infrastructures n’est plus une option.
                    Genius Network Technology vous propose des solutions réseau et télécom sur mesure pour
                    protéger vos biens, vos données et vos équipes, en toute fiabilité.
                </p>

                <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1500">
                    <button
                        class="bg-black text-white font-bold border border-black ring-1 ring-black ring-offset-2 rounded p-2 text-center">
                        Une idée de projet ? <span class="animate-pulse">📝</span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section class="p-2">

        <div class="grid min-[845px]:grid-cols-2 gap-2 p-2">
            <div data-aos="fade-right" data-aos-duration="1200" class="space-y-2 bg-black rounded">
                <h2 class="text-xl font-semibold text-slate-400 bg-white">Qui sommes-nous ?</h2>

                <ul class="space-y-4 p-2 text-white rounded">
                    <li>
                        GENIUS est une entreprise spécialisée dans le domaine de la télécommunication, la
                        radiocommunication, sécurité électronique, domotique, informatique, bâtiment et travaux public,
                        HTA/BTA/EP, agriculture, transit import-export, divers.
                    </li>
                    <li>
                        Ayant pour valeurs l'intégrité, le dynamisme, la disponibilité, la fiabilité et la qualité, nous
                        avons pour vision de simplifier, améliorer, sécuriser le quotidien des citoyens au travers de la
                        technologie de pointe
                    </li>
                </ul>
            </div>

            <div data-aos="fade-left" data-aos-duration="1200" data-aos-delay="1000">
                <h2 class="text-xl font-semibold  text-slate-400">💡</h2>
                <div class="border rounded shadow shadow-slate-100">
                    <img src="/images/img.jpg" alt="fibre optique">
                </div>
            </div>
        </div>

        <div class="space-y-4 p-2 mt-4 bg-[#8080800d]">
            <div class="flex justify-between flex-wrap items-center max-[406px]:space-y-4">
                <h2 class="text-xl font-semibold text-slate-400">Nos domaines d'expertises🛠️</h2>
                <NuxtLink href="/services" class="text-[#068fcf] font-bold rounded text-center max-[600px]:text-[13px]">
                    Découvrir tous nos services
                </NuxtLink>
            </div>
            <div class="w-full">
                <ul id="services" class="grid grid-cols-2 max-[830px]:grid-cols-1 w-full space-y-4 space-x-4">

                    <li data-aos="fade-up" data-aos-duration="1300" data-aos-delay="1000"
                        class="grid grid-cols-2 gap-2 p-2 rounded bg-white shadow-sm max-h-auto">
                        <div>
                            <NuxtImg class="object-fit max-[830px]:object-cover max-[830px]:w-full h-[136px] rounded"
                                src="/images/electricity.png" />
                        </div>
                        <div class="text-white flex flex-col justify-around">
                            <h3 class="text-slate-400">Electricité</h3>
                            <p class="text-slate-600 w-full">
                                De l’installation à la maintenance, nos techniciens sont à votre disposition.
                            </p>
                        </div>
                    </li>

                    <li data-aos="fade-up" data-aos-duration="1700" data-aos-delay="1200"
                        class="grid grid-cols-2 gap-2 p-2 rounded bg-white shadow-sm max-h-auto">
                        <div>
                            <NuxtImg class="object-fit max-[830px]:object-cover max-[830px]:w-full h-[136px] rounded"
                                src="/images/camera.png" />
                        </div>
                        <div class="text-white flex flex-col justify-around">
                            <h3 class="text-slate-400">Vidéo surveillance</h3>
                            <p class="text-slate-600 w-full">
                                Garder un oeil sur les flux entrants et sortants de vos activités avec des
                                outils et technologies de pointe.
                            </p>
                        </div>
                    </li>

                    <li data-aos="fade-up" data-aos-duration="1700" data-aos-delay="1400"
                        class="grid grid-cols-2 gap-2 p-2 rounded bg-white shadow-sm max-h-auto">
                        <div>
                            <NuxtImg class="object-fit max-[830px]:object-cover max-[830px]:w-full h-[136px] rounded"
                                src="/images/electronic.jpg" />
                        </div>
                        <div class="text-white flex flex-col justify-around">
                            <h3 class="text-slate-400">Sécurité électronique</h3>
                            <p class="text-slate-600 w-full">
                                Opter pour une sécurité extrême pour vos systèmes électroniques pour la protections de
                                vos biens.
                            </p>
                        </div>
                    </li>

                    <li data-aos="fade-up" data-aos-duration="1700" data-aos-delay="1600"
                        class="grid grid-cols-2 gap-2 p-2 rounded bg-white shadow-sm max-h-auto">
                        <div>
                            <NuxtImg class="object-fit max-[830px]:object-cover max-[830px]:w-full h-[136px] rounded"
                                src="/images/com.png" />
                        </div>
                        <div class="text-white flex flex-col justify-around">
                            <h3 class="text-slate-400">Télécommunication</h3>
                            <p class="text-slate-700 w-full">
                                La technologie évoluée de communication indispensable à notre ère.
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>

        <div class="space-y-4 p-2 mt-4">
            <h2 class="text-xl font-semibold text-slate-400">Ce qu'ils disent de nous📜</h2>
            <div class="w-full">
                <ul
                    class="grid min-[650px]:grid-cols-2 items-baseline justify-between rounded w-full space-y-4 space-x-4 bg-[#0A103E] p-2">

                    <li data-aos="zoom-in" data-aos-duration="1300" data-aos-delay="1000"
                        class="rounded space-y-2 shadow shadow-[#000] border border-slate-300 bg-transparent backdrop-blur-lg text-white p-2 ">
                        <div class="flex space-x-2">
                            <p>
                                <NuxtImg class="size-[45px] rounded-full" src="/images/profile.jpeg" />
                            </p>
                            <p>
                                <span class="italic">Roland Bilé</span> <br>
                                <span class="italic text-slate-200">Eléveur</span>
                            </p>
                        </div>
                        <p class="italic bg-transparent backdrop-blur-2xl text-neutral-300">
                            “J'ai été épaté par le professionnalisme et les compétences des agents de
                            Genius. Je recommande leurs services.”
                        </p>
                    </li>

                    <li data-aos="zoom-in" data-aos-duration="1300" data-aos-delay="1200"
                        class="rounded space-y-2 shadow shadow-[#000] border border-slate-300 bg-transparent backdrop-blur-lg text-white p-2 ">
                        <div class="flex space-x-2">
                            <p>
                                <NuxtImg class="size-[45px] rounded-full" src="/images/girl.jpeg" />
                            </p>
                            <p>
                                <span class="italic">Sandrine K.</span> <br>
                                <span class="italic text-slate-200">Particulier</span>
                            </p>
                        </div>
                        <p class="italic bg-transparent backdrop-blur-2xl text-neutral-300">
                            “J'ai fait appel aux services de livraison de Genius Network Technology et j'ai été
                            satisfaite du délai de livraison
                            assez court.”
                        </p>
                    </li>

                </ul>
            </div>
        </div>

        <div class="space-y-4 p-2 mt-4">
            <h2 class="text-xl font-semibold text-slate-400">Une intervention impéccable, une confiance gagnée🫱🏾‍🫲🏾
            </h2>
            <div class="w-full">
                <ul id="partners"
                    class="flex gap-2 max-[630px]:grid max-[630px]:grid-rows-2 max-[630px]:grid-cols-2 items-center">
                    <li data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1000">
                        <NuxtImg class="size-[150px] object-fit" src="/images/partners/22 mai 2025, 14_24_30.png" />
                    </li>
                    <li data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1100">
                        <NuxtImg class="size-[150px] object-fit" src="/images/partners/ccci-ue.png" />
                    </li>
                    <li data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1200">
                        <NuxtImg class="size-[150px] object-fit" src="/images/partners/centamin.png" />
                    </li>
                    <li data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1300">
                        <NuxtImg class="size-[150px] object-fit" src="/images/partners/envol.png" />
                    </li>
                    <li data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1400">
                        <NuxtImg class="size-[150px] object-fit" src="/images/partners/pdu.jpg" />
                    </li>
                    <li data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1500">
                        <NuxtImg class="size-[150px] object-fit" src="/images/partners/seco.png" />
                    </li>
                    <li data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="1600">
                        <NuxtImg class="size-[150px] object-fit" src="/images/partners/uemoa.png" />
                    </li>

                </ul>

            </div>
        </div>
    </section>
</template>

<script setup>


</script>

<style scoped>
#header-section {
    background-image: url('/images/tech.jpg');
    background-position: top/right;
    background-size: cover;
    background-clip: padding-box;
}

#services {
    align-items: last baseline;
}

#partners li img {
    object-fit: contain;
}

@media screen and (max-width: 600px) {
    h2 {
        font-size: 14px;
    }
}
</style>