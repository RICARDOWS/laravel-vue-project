<template>
  <footer class="relative bg-gray-300 pt-8 pb-6 mt-20">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 80px"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <!-- Redes sociales -->
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <!-- <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                >Useful Links</span
              >
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/presentation"
                    >About Us</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://blog.creative-tim.com"
                    >Blog</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://www.github.com/creativetimofficial"
                    >Github</a
                  >
                </li>
                <li>
                  <a
                    class="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/bootstrap-themes/free"
                    >Free Products</a
                  >
                </li>
              </ul>
            </div> -->
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-gray-600 text-sm font-semibold mb-2"
                >Otros</span
              >
              <ul class="list-unstyled">
                <router-link
                  class="block px-4 text-sm bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:text-gray-200 md:mt-0  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  tag="li"
                  :to="{ name: 'home' }"
                  >Home</router-link
                >
                <router-link
                  class="block px-4 text-sm bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:text-gray-200 md:mt-0  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  tag="li"
                  :to="{ name: 'projects' }"
                  >Portafolio</router-link
                >
                <!-- <router-link
                  class="block px-4 text-sm bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:text-gray-200 md:mt-0  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  tag="li"
                  :to="{ name: 'home' }"
                  >Services</router-link
                > -->
                <router-link
                  class="block px-4 text-sm bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:text-gray-200 md:mt-0  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  tag="li"
                  :to="{ name: 'about' }"
                  >Acerca de</router-link
                >

                <router-link
                  class="block px-4 text-sm bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:text-gray-200 md:mt-0  focus:text-gray-900  focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  tag="li"
                  :to="{ name: 'contact' }"
                  >Contacto</router-link
                >
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4 ml-auto"></div>
          </div>
        </div>
        <!-- Otros -->
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold">Social Media</h4>
          <h5 class="text-lg mt-0 mb-2 text-gray-700">
           <!--  You can find us on any of our social networks -->Puedes seguirnos en nuestras redes sociales:
          </h5>
          <div class="mt-6">
            <button
              class="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button"
            >
              <a href="https://www.twitter.com/" target="”_blank”">
                <i class="flex fab fa-twitter"></i>
              </a></button
            ><button
              class="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button"
            >
              <a href="https://www.facebook.com/" target="”_blank”">
                <i class="flex fab fa-facebook-square"></i>
              </a></button
            ><button
              class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button"
            >
              <a href="https://www.instagram.com/" target="”_blank”">
                <i class="flex fab fa-instagram"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <!-- Bottom line -->
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
            Copyright © {{ date }}
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const date = ref(new Date().getFullYear());
</script>
