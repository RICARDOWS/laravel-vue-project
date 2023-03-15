<template>
  <main>
    <!-- Header text -->
    <div class="row text-center mb-12">
      <p class="font-bold text-4xl">Contacto</p>
      <p class="text-2xl"><!-- Avaliable to work. Get in touch. --></p>
    </div>
    <div class="row py-16 mx-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="w-10/12 mx-auto">
          <!-- component -->
          <form class="">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Nombre
                </label>
                <input
                  class="appearance-none block w-full bg-gray-100 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Nombre..."
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Apellido
                </label>
                <input
                  class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Apellido..."
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Correo
                </label>
                <input
                  class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="correo"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Mensaje
                </label>
                <textarea
                  class="no-resize appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                ></textarea>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <button
                  class="w-full shadow bg-primario hover:bg-primario-darker focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Enviar
                </button>
            </div>
          </form>
        </div>
        <div class="w-full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.2609552229947!2d-116.86562708482592!3d32.46571128106709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d939499184e549%3A0xb79881844046635d!2sPlaza%20Las%20Fuentes%20El%20Florido!5e0!3m2!1ses-419!2smx!4v1678570304278!5m2!1ses-419!2smx" width="700" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
</script>
