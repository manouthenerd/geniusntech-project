<template>
    <section id="header-section" class="bg-blue-50 w-full h-full p-1">
        <div class="w-full min-h-100 text-white grid grid-cols-2">
            <div class="p-2 space-y-4 mt-8 h-full grid justify-between">
                <h3 class="font-bold text-4xl rounded backdrop-blur-xl bg-transparent">
                    Spécialiste <span class="text-[#068fcf]">Des <br>Nouvelles</span> Technologies
                </h3>
                <p class="text-[17px] p-1 font-medium rounded backdrop-blur-xl bg-transparent">
                    Dans un monde ultra-connecté, sécuriser vos infrastructures n’est plus une option.
                    Genius Network Technology vous propose des solutions réseau et télécom sur mesure pour
                    protéger vos biens, vos données et vos équipes, en toute fiabilité.
                </p>

                <div>
                    <button
                        class="bg-black text-white font-bold border border-black ring-1 ring-black ring-offset-2 rounded p-2 text-center">
                        Une idée de projet ? <span class="animate-pulse">📝</span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section class="p-2">
        <div class="grid grid-cols-2 gap-2 p-2">
            <div class="space-y-2 bg-black rounded">
                <h2 class="text-xl font-semibold  text-slate-400 bg-white">Qui sommes-nous ?</h2>

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

            <div>
                <h2 class="text-xl font-semibold  text-slate-400">Notre équipe</h2>
                <div class="border rounded shadow shadow-slate-100">
                    <img src="/images/img.jpg" alt="">
                </div>
            </div>
        </div>

        <div class="space-y-4 p-2 mt-4">
            <h2 class="text-xl font-semibold text-slate-400">Nos domaines d'expertises🛠️</h2>
            <div class="w-full">
                <ul class="grid grid-cols-3 grid-rows-2 w-full space-y-4 space-x-4 place-items-center">
                    <li class="size-[200px] shadow-sm bg-[url('/images/bg_1.jpg')] bg-center bg-cover rounded-full"></li>
                    <li class="size-[200px] shadow-sm bg-[url('/images/bg_1.jpg')] bg-center bg-cover rounded-full"></li>
                    <li class="size-[200px] shadow-sm bg-[url('/images/bg_1.jpg')] bg-center bg-cover rounded-full"></li>
                    <li class="size-[200px] shadow-sm bg-[url('/images/bg_1.jpg')] bg-center bg-cover rounded-full"></li>
                    <li class="size-[200px] shadow-sm bg-[url('/images/bg_1.jpg')] bg-center bg-cover rounded-full"></li>
                    <li class="size-[200px] shadow-sm bg-[url('/images/bg_1.jpg')] bg-center bg-cover rounded-full"></li>
                </ul>
            </div>
        </div>
    </section>
</template>


<style scoped>
#header-section {
    background-image: url('/images/tech.jpg');
    background-position: top/right;
    background-size: cover;
    background-clip: padding-box;
}
</style>