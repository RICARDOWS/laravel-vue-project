<template>
  <main>
    <!-- Header text -->
    <div class="row text-center">
      <p class="font-bold text-4xl">Nombre de proyecto</p>
      <p class="text-2xl"><!-- Avaliable to work. Get in touch. --></p>
    </div>


    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-xl px-4 md:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <div
              class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto"
            >
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div class="md:pt-8">
            <p class="text-center font-bold text-indigo-500 md:text-left">
              12/12/2024 - Rol
            </p>

            <h1
              class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left"
            >
              Projecto (Breve descripcion del proyecto)
            </h1>

            <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated. It may be used to
              display a sample of fonts or generate text for testing. Filler
              text is dummy text which has no meaning however looks very similar
              to real text.<br /><br />

              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random
              or otherwise generated. It may be used to display a sample of
              fonts or generate text for testing. Filler text is dummy text
              which has no meaning however looks very similar to real text.
            </p>

            <h2
              class="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left"
            >
              Cliente (Breve descripcion del cliente)
            </h2>

            <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated. It may be used to
              display a sample of fonts or generate text for testing. Filler
              text is dummy text which has no meaning however looks very similar
              to real text.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
</script>
