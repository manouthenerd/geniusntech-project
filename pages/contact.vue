<template>
    <section class="h-[224px] text-white grid place-content-center bg-[url('/images/background.jpg')] space-y-4 pt-8">
        <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" class="text-center text-4xl">
            Contactez-nous
        </h3>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200" class="text-center">
            — Faites le premier pas, nous nous occupons du reste 😎 
        </p>
    </section>

    <section class="my-4 min-[730px]:mx-18 max-[730px]:mx-4 shadow shadow-slate-300 rounded min-h-100">
        <div class="grid grid-cols-2">
            <!-- Informations -->
            <div class="bg-gradient-to-br from-amber-50 to-sky-50 p-4 space-y-2">
                <h3 class="font-[600]">
                    Vous êtes désireux d'en savoir plus sur nous ?  
                </h3>
                    Pour toute préoccupation quelconque:
                    <ul>
                        <li>une demande de devis</li>
                        <li>une prise de contact</li>
                        <li>des renseignements suppémentaires</li>
                        <li>une visite au sein de notre entreprise</li>
                        <li>un partenariat, mise en relation ou plus</li>
                    </ul>

                <p>
                    N'hésitez pas à nous faire part via ce formulaire, nous serons
                    ravis de vous assister et de vous fournir les informations nécessaires.
                </p>
            </div>

            <!-- Formulaire de contact -->
            <div>
                <form action="#" method="post">
                    <div>
                        <label for="#">Nom et prénoms</label>
                        <input type="text" name="name" id="name">
                    </div>
                </form>
            </div>
        </div>
    </section> 
</template>