<template>
    <section class="h-[224px] text-white grid place-content-center bg-[url('/images/background.jpg')] space-y-4 pt-8">
        <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" class="text-center text-4xl">
            Nos services
        </h3>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200" class="text-center">
            — Découvrez nos domaines d'expertises
        </p>
    </section>

    <section class="mx-8">
        <div>
            <h3 class="text-xl font-semibold text-slate-400">Ce que nous faisons de mieux</h3>
        </div>

        <div>

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

                    <li data-aos="fade-up" data-aos-duration="1700" data-aos-delay="1600"
                        class="grid grid-cols-2 gap-2 p-2 rounded bg-white shadow-sm max-h-auto">
                        <div>
                            <NuxtImg class="object-fit max-[830px]:object-cover max-[830px]:w-full h-[136px] rounded"
                                src="/images/intermediation.jpg" />
                        </div>
                        <div class="text-white flex flex-col justify-around">
                            <h3 class="text-slate-400">Intermédiation</h3>
                            <p class="text-slate-700 w-full">
                                Nous facilitons la rencontre entre l’offre et la demande avec des
                                stratégies éfficaces.
                            </p>
                        </div>
                    </li>

                    <li data-aos="fade-up" data-aos-duration="1700" data-aos-delay="1600"
                        class="grid grid-cols-2 gap-2 p-2 rounded bg-white shadow-sm max-h-auto">
                        <div>
                            <NuxtImg class="object-fit max-[830px]:object-cover max-[830px]:w-full h-[136px] rounded"
                                src="/images/etudes-consulting.jpg" />
                        </div>
                        <div class="text-white flex flex-col justify-around">
                            <h3 class="text-slate-400">Etudes et consulting</h3>
                            <p class="text-slate-700 w-full">
                                Nous analysons vos besoins de manière professionnelle afin de vous fournir des solutions
                                adaptées.
                            </p>
                        </div>
                    </li>

                    <li data-aos="fade-up" data-aos-duration="1700" data-aos-delay="1600"
                        class="grid grid-cols-2 gap-2 p-2 rounded bg-white shadow-sm max-h-auto">
                        <div>
                            <NuxtImg class="object-fit max-[830px]:object-cover max-[830px]:w-full h-[136px] rounded"
                                src="/images/BTP.jpg" />
                        </div>
                        <div class="text-white flex flex-col justify-around">
                            <h3 class="text-slate-400">Bâtiments & travaux publics</h3>
                            <p class="text-slate-700 w-full">
                                Nous intervénons sur l'ensemble des services et travaux avec une équipe
                                spécialisée et très professionnelle.
                            </p>
                        </div>
                    </li>
                    
                    <li data-aos="fade-up" data-aos-duration="1700" data-aos-delay="1600"
                        class="grid grid-cols-2 gap-2 p-2 rounded bg-white shadow-sm max-h-auto">
                        <div>
                            <NuxtImg class="object-fit max-[830px]:object-cover max-[830px]:w-full h-[136px] rounded"
                                src="/images/elevage.jpg" />
                        </div>
                        <div class="text-white flex flex-col justify-around">
                            <h3 class="text-slate-400">Elevage</h3>
                            <p class="text-slate-700 w-full">
                                Mécanisme d'élévage permettant de réduire le
                                pourcentage de pertes de vos animaux pour une meilleure productivité.
                            </p>
                        </div>
                    </li>

                    <li data-aos="fade-up" data-aos-duration="1700" data-aos-delay="1600"
                        class="grid grid-cols-2 gap-2 p-2 rounded bg-white shadow-sm max-h-auto">
                        <div>
                            <NuxtImg class="object-fit max-[830px]:object-cover max-[830px]:w-full h-[136px] rounded"
                                src="/images/agriculture.jpg" />
                        </div>
                        <div class="text-white flex flex-col justify-around">
                            <h3 class="text-slate-400">Agriculture</h3>
                            <p class="text-slate-700 w-full">
                                Une culture de diverses denrées alimentaires permetant
                                de nourrir et de répondre aux besoins des civils.
                            </p>
                        </div>
                    </li>

                    <li data-aos="fade-up" data-aos-duration="1700" data-aos-delay="1600"
                        class="grid grid-cols-2 gap-2 p-2 rounded bg-white shadow-sm max-h-auto">
                        <div>
                            <NuxtImg class="object-fit max-[830px]:object-cover max-[830px]:w-full h-[136px] rounded"
                                src="/images/import export.jpg" />
                        </div>
                        <div class="text-white flex flex-col justify-around">
                            <h3 class="text-slate-400">Transit import-export</h3>
                            <p class="text-slate-700 w-full">
                                Une équipe opérationnelle pour l'importation et l'exportation de vos 
                                colis avec fiabilité et sécurité depuis n'importe où.
                            </p>
                        </div>
                    </li>

                    <li data-aos="fade-up" data-aos-duration="1700" data-aos-delay="1600"
                        class="grid grid-cols-2 gap-2 p-2 rounded bg-white shadow-sm max-h-auto">
                        <div>
                            <NuxtImg class="object-fit max-[830px]:object-cover max-[830px]:w-full h-[136px] rounded"
                                src="/images/Delivery.jpeg" />
                        </div>
                        <div class="text-white flex flex-col justify-around">
                            <h3 class="text-slate-400">Livraison</h3>
                            <p class="text-slate-700 w-full">
                                Des agents à disposition pour la livraison de vos colis
                                de façon express 24/24.
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </section>
</template>