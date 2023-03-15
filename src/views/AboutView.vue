<template>
  <main>
    <!-- Header text -->
    <div class="row text-center">
      <p class="font-bold text-4xl">Acerca de</p>
      <p class="text-2xl"><!-- Avaliable to work. Get in touch. --></p>
    </div>
    <!-- Mision -->
    <section class="py-4">
      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <!-- Text -->
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <!-- Icon -->
              <div
                class="text-yellow-600 p-2 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-300"
              >
                <i class="fas fa-ranking-star text-xl"></i>
              </div>
              <div class="inline-flex ml-4 items-center justify-center"><h3 class="text-4xl font-semibold">Misión</h3></div>
              <p class="text-xl leading-relaxed text-gray-600 text-justify">
                En IPM Group entendemos que el tiempo y esfuerzo que dedicamos a
                nuestros clientes y a sus construcciones son lo más importante,
                por eso lo hacemos de la mano de los profesionales más
                capacitados para crear y diseñar obras seguras, elegantes,
                bonitas y cómodas. De esta manera buscamos posicionarnos como la
                opción número 1 y el mejor ejemplo de calidad que el mercado
                pueda ofrecer.
              </p>
            </div>
          </div>
          <!-- Image -->
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              class="max-w-full rounded-lg shadow-lg"
              width="350"
              src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/4919fd3838ea548bb1f1df31/4608205a-c1d5-4436-843f-8736582cd51f.jpg"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Vision -->
    <section class="py-4">
      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <!-- Image -->
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              class="max-w-full rounded-lg shadow-lg"
              width="350"
              src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/4919fd3838ea548bb1f1df31/4608205a-c1d5-4436-843f-8736582cd51f.jpg"
            />
          </div>
          <!-- Text -->
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <!-- Icon -->
              <div
                class="text-yellow-600 p-2 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-300"
              >
                <i class="fas fa-eye text-xl"></i>
              </div>
              <div class="inline-flex ml-4 items-center justify-center"><h3 class="text-4xl font-semibold">Visión</h3></div>
              <p class="text-xl leading-relaxed text-gray-600 text-justify">
                Convertirnos en una empresa líder en la industria de la
                construcción, con las mejores ofertas, y un servicio de calidad
                que supere las expectativas más altas, donde todos, proveedores
                y trabajadores por igual, se sientan contentos de formar parte
                de nuestro equipo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Valores -->
    <section class="py-12 mb-10">
      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <!-- Text -->
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <!-- Icon -->
              <div
                class="text-yellow-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-300"
              ><i class="fas fa-medal text-xl"></i>
              </div>
              <h3 class="text-4xl ml-4 font-semibold inline-flex ">Valores</h3>
              <div class="flex items-center py-2">
                <div>
                  <p class="font-bold text-xl text-center text-gray-600">Pasión</p>
                  <p class="text-xl text-gray-600 text-justify">
                    Cada contrato que tomamos, lo hacemos con la mejor
                    disposición y las mejores ganas de ofrecer un buen servicio.
                    Entendemos que la pasión es imprescindible al momento de
                    realizar nuestros proyectos.
                  </p>
                </div>
              </div>

              <div class="flex items-center py-2">
                <div>
                  <p class="font-bold text-xl text-center text-gray-600">Constancia</p>
                  <p class="text-xl text-gray-600 text-justify">
                    Para volar alto es necesario sobreponerse a la dificultad de la tormenta, 
                    y nuestra empresa es un águila que la sobrevuela siempre,
                    y eso se demuestra en el esfuerzo que ponemos para alcanzar los objetivos de cada trabajo.
                  </p>
                </div>
              </div>

              <div class="flex items-center py-2">
                <div>
                  <p class="font-bold text-xl text-center text-gray-600">Honestidad</p>
                  <p class="text-xl text-gray-600 text-justify">
                    Como dice el dicho “cuentas claras, amistades largas”, y en esta empresa lo tenemos muy claro, 
                    que se debe actuar con rectitud, cumpliendo con nuestro trabajo en tiempo y forma, 
                    haciendo buen uso de los recursos con honestidad y disciplina.
                  </p>
                </div>
              </div>

            </div>
          </div>
          <!-- Image -->
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              class="max-w-full rounded-lg shadow-lg"
              width="350"
              src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/4919fd3838ea548bb1f1df31/4608205a-c1d5-4436-843f-8736582cd51f.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
</script>
