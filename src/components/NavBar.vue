<template>
  <header>
    <nav class="row px-6">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link
          :to="{ name: 'home' }"
          class="text-xl font-bold text-black hover:text-indigo-400"
        >
          <img
            src="logos/logo.png"
            alt="ipm group logo"
            width="100"
          />
        </router-link>
        <!-- menu button -->
        <div class="flex">
          <button
            @click="toggleNav"
            type="button"
            @blur="toggleDelay(100)"
            class="text-dark hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
        <!--  -->
      </div>
      <!-- menu options -->
      <div
        :class="showMenu ? 'absolute' : 'hidden'"
        class="right-2 z-10 mt-0 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <ul class="flex-col my-2">
          <router-link
            class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            tag="li"
            :to="{ name: 'home' }"
            @click="showMenu = false"
            >Home</router-link
          >
          <router-link
            class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            tag="li"
            :to="{ name: 'projects' }"
            @click="showMenu = false"
            >Portafolio</router-link
          >
         <!--  <router-link
            class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            tag="li"
            :to="{ name: 'services' }"
            >Services</router-link
          > -->
          <router-link
            class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            tag="li"
            :to="{ name: 'about' }"
            @click="showMenu = false"
            >Acerca de</router-link
          >

          <router-link
            class="block px-4 py-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            tag="li"
            :to="{ name: 'contact' }"
            @click="showMenu = false"
            >Contacto</router-link
          >
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const showMenu = ref(false);
const toggleNav = () => {
  showMenu.value = !showMenu.value;
};

const toggleDelay = (ms = 0) => {
  setTimeout(() => {
    showMenu.value = false; 
  }, ms);
};
</script>

<style>
.router-link-active,
.router-link-exact-active {
  color: #F9C94D;
}
</style>
