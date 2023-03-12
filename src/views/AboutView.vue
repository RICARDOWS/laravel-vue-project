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
              <div class="inline-flex ml-2 items-center justify-center"><h3 class="text-3xl font-semibold">Nuestra Misión</h3></div>
              <p class="text-lg leading-relaxed text-gray-600 text-center">
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
              src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
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
              src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
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
              <div class="inline-flex ml-2 items-center justify-center"><h3 class="text-3xl font-semibold">Nuestra Visión</h3></div>
              <p class="text-lg leading-relaxed text-gray-600 text-center">
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
    <section class="py-4 mb-10">
      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <!-- Text -->
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <!-- Icon -->
              <div
                class="text-yellow-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-300"
              >
                <i class="fas fa-medal text-xl"></i>
              </div>
              <h3 class="text-3xl ml-2 font-semibold inline-flex ">Nuestros Valores</h3>

              <div class="flex items-center py-2">
                <div>
                  <p class="font-bold text-1xl text-center">Pasión</p>
                  <p class="text-sm text-center">
                    Cada contrato que tomamos, lo hacemos con la mejor
                    disposición y las mejores ganas de ofrecer un buen servicio.
                    Entendemos que la pasión es imprescindible al momento de
                    realizar nuestros proyectos.
                  </p>
                </div>
              </div>

              <div class="flex items-center py-2">
                <div>
                  <p class="font-bold text-1xl text-center">Constancia</p>
                  <p class="text-sm text-center">
                    Para volar alto es necesario sobreponerse a la dificultad de la tormenta, 
                    y nuestra empresa es un águila que la sobrevuela siempre,
                    y eso se demuestra en el esfuerzo que ponemos para alcanzar los objetivos de cada trabajo.
                  </p>
                </div>
              </div>

              <div class="flex items-center py-2">
                <div>
                  <p class="font-bold text-1xl text-center">Honestidad</p>
                  <p class="text-sm text-center">
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
              src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
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
