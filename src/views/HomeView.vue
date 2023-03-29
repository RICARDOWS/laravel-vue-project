<template>
  <main>
    <!-- Portafolio -->
    <section>
      <div class="py-6 sm:py-8 lg:py-12 lg:px-36">
        <!-- Galeria projectos -->
        <div class="flex flex-wrap">
          <!-- Columna izquierda -->
          <div class="flex w-1/1 md:w-1/2 flex-wrap">
            <!-- Projecto 1 -->
            <div class="w-1/2 p-1 md:p-2">
              <router-link
                :to="{ name: 'project1' }"
                class="text-xl font-bold text-black hover:text-indigo-400"
              >
                <div class="overflow-hidde cursor-pointer relative group">
                  <div
                    class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-0 text-white flex items-end"
                  >
                    <div>
                      <div
                        class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                      >
                        <div class="font-bold">Imagen 1</div>
                        <div class="opacity-60 text-sm">Descripcion</div>
                      </div>
                    </div>
                  </div>
                  <img
                    class="block h-full w-full rounded-lg object-cover object-center"
                    src="projects/chileno/img8.jpg"
                    alt="Projecto Construccion Arquitectura"
                  />
                </div>
              </router-link>
            </div>
            <!-- Projecto 2 -->
            <div class="w-1/2 p-1 md:p-2">
              <div class="overflow-hidde cursor-pointer relative group">
                <div
                  class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-0 text-white flex items-end"
                >
                  <div>
                    <div
                      class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >
                      <div class="font-bold">Proyecto de IPM</div>
                      <div class="opacity-60 text-sm">Construccion</div>
                    </div>
                  </div>
                </div>
                <img
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="projects/haciendas_villas-chileno_bay/img1.jpg"
                  alt="Projecto Construccion Arquitectura"
                />
              </div>
            </div>
            <!-- Projecto 3 -->
            <div class="w-full p-1 md:p-2">
              <div class="overflow-hidde cursor-pointer relative group">
                <div
                  class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-0 text-white flex items-end"
                >
                  <div>
                    <div
                      class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >
                      <div class="font-bold">Proyecto de IPM</div>
                      <div class="opacity-60 text-sm">Construccion</div>
                    </div>
                  </div>
                </div>
                <img
                  class="block h-100 rounded-lg object-cover object-center"
                  src="projects/park_haciendas-chileno_bay/img3.jpg"
                  alt="Projecto Construccion Arquitectura"
                />
              </div>
            </div>
          </div>
          <!-- Columna derecha -->
          <div class="flex w-1/1 md:w-1/2 flex-wrap">
            <!-- Projecto 4 -->
            <div class="w-full p-1 md:p-2">
              <div class="overflow-hidde cursor-pointer relative group">
                <div
                  class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-0 text-white flex items-end"
                >
                  <div>
                    <div
                      class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >
                      <div class="font-bold">Proyecto de IPM</div>
                      <div class="opacity-60 text-sm">Construccion</div>
                    </div>
                  </div>
                </div>
                <img
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="projects/haciendas_villas-chileno_bay/img2.jpg"
                  alt="Projecto Construccion Arquitectura"
                />
              </div>
            </div>
            <!-- Projecto 5 -->
            <div class="w-1/2 p-1 md:p-2">
              <div class="overflow-hidde cursor-pointer relative group">
                <div
                  class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-0 text-white flex items-end"
                >
                  <div>
                    <div
                      class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >
                      <div class="font-bold">Proyecto de IPM</div>
                      <div class="opacity-60 text-sm">Construccion</div>
                    </div>
                  </div>
                </div>
                <img
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="projects/varios/entrada_61_recamara/img1.jpg"
                  alt="Projecto Construccion Arquitectura"
                />
              </div>
            </div>
            <!-- Projecto 6 -->
            <div class="w-1/2 p-1 md:p-2">
              <div class="overflow-hidde cursor-pointer relative group">
                <div
                  class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-0 text-white flex items-end"
                >
                  <div>
                    <div
                      class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
                    >
                      <div class="font-bold">Proyecto de IPM</div>
                      <div class="opacity-60 text-sm">Construcción</div>
                    </div>
                  </div>
                </div>
                <img
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="projects/varios/sixples_el_dorado/img1.JPG"
                  alt="Projecto Construccion Arquitectura"
                />
              </div>
            </div>
            <!--  -->
          </div>
        </div>
      </div>
    </section>
    <!-- Empresa Info-->
    <section class="py-6 sm:py-8 lg:py-12 lg:px-36">
      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <!-- Image -->
          <div class="w-full md:w-3/12 ml-auto mr-16 px-4">
            <img
              alt="..."
              class="max-w-full rounded-lg shadow-lg"
              width="350"
              src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/4919fd3838ea548bb1f1df31/4608205a-c1d5-4436-843f-8736582cd51f.jpg"
            />
          </div>
          <!-- Text -->
          <div class="w-full md:w-6/12 ml-16 mr-auto px-4">
            <div class="md:pr-12">
              <!-- Icon -->
              <div
                class="text-white p-2 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-yellow-300"
              >
                <i class="fas fa-building text-xl"></i>
              </div>
              <div class="inline-flex ml-4 items-center justify-center">
                <h3 class="text-3xl font-semibold">IPM Group</h3>
              </div>
              <p class="text-xl leading-relaxed text-gray-600 text-justify">
                En nuestra empresa creemos que para volar alto es necesario
                sobreponerse a todas y cada una de las dificultades que puedan
                presentarse, es por ello que nos consideramos como un aguila que
                sobrevuela siempre, ya que esto lo demostramos con el esfuerzo
                que ponemos para alcanzar cada uno de nuestros objetivos.
              </p>
              <br />
              <ol class="text-xl leading-relaxed text-gray-600">
                <li>- Empresa líder</li>
                <li>- Ofertas competitivas</li>
                <li>- Servicios de calidad</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Servicios -->
    <div class="bg-white py-6 sm:py-8 lg:py-12 lg:px-36">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-16">
          <h2 class="mb-4 text-center text-4xl font-semibold md:mb-6">
            Servicios
          </h2>
        </div>
        <!-- text - end -->
        <div
          class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8"
        >
          <!-- article - start -->
          <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
            <a
              href="#"
              class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
            >
              <img
                src="iconos/ingenieria_2.png"
                loading="lazy"
                alt="Ingenieria"
                class="absolute inset-0 mx-auto object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div class="flex flex-1 flex-col p-4 sm:p-6">
              <h2 class="mb-2 text-lg font-semibold text-gray-800 text-center">
                <p>Ingeniería</p>
              </h2>

              <p class="mb-8 text-gray-500">
                Nuestro equipo ofrece servicios especializados en el análisis, estudio y ejecución de proyectos de obra e instalaciones,
                contando para ello con todos los medios técnicos y materiales necesarios.
              </p>
            </div>
          </div>
          <!-- article - end -->
          <!-- article - start -->
          <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
            <a
              href="#"
              class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
            >
              <img
                src="iconos/bosquejo_2.png"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                class="absolute inset-0 mx-auto object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div class="flex flex-1 flex-col p-4 sm:p-6">
              <h2 class="mb-2 text-lg font-semibold text-gray-800 text-center">
                <p>Remodelación</p>
              </h2>

              <p class="mb-8 text-gray-500">
               Le ofrecemos una amplia gama de soluciones innovadoras a nivel habitacional, oficina y exteriores en remodelaciones,
               ampliaciones, arquitectura y diseño de interiores.
              </p>
            </div>
          </div>
          <!-- article - end -->
          <!-- article - start -->
          <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
            <a
              href="#"
              class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64"
            >
              <img
                src="iconos/gancho_2.png"
                loading="lazy"
                alt="Photo by Magicle"
                class="absolute inset-0 mx-auto object-cover object-center transition duration-200 group-hover:scale-110"
              />
            </a>

            <div class="flex flex-1 flex-col p-4 sm:p-6">
              <h2 class="mb-2 text-lg font-semibold text-gray-800 text-center">
                <p>Mantenimiento</p>
              </h2>

              <p class="mb-8 text-gray-500">
                En IPM llevamos a cabo actividades de mantenimiento integral con el objetivo de que su obra se mantenga con un funcionamiento
                óptimo durante su vida proyectada.
              </p>
            </div>
          </div>
          <!-- article - end -->
        </div>
      </div>
    </div>
    <!-- Clientes -->
    <section class="pt-20 pb-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center text-center mb-24">
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold">Clientes destacados</h2>
          </div>
        </div>
        <div class="flex flex-wrap">
          <!-- Cabo del sol -->
          
          <!-- El dorado -->
          <div class="w-full md:w-4/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img
                alt="El dorado"
                src="clientes/el_dorado/img1.png"
                class="shadow-lg rounded-lg max-w-full mx-auto"
                style="max-width: 200px"
              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold uppercase">El dorado</h5>
                <div class="mt-6">
                  <a
                    href="https://www.eldoradobeachclub.com/"
                    target="_blank"
                    class="text-black w-8 h-8 rounded-md outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fas fa-link"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/eldoradobeachclub/"
                    target="_blank"
                    class="text-black w-8 h-8 rounded-md outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- Del mar -->
          <div class="w-full md:w-4/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img
                alt="Del Mar"
                src="clientes/del_mar/img2.png"
                class="shadow-lg rounded-lg max-w-full mx-auto"
                style="max-width: 160px"
              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold uppercase">Del mar</h5>
                <div class="mt-6">
                  <a
                    href="https://www.delmarloscabos.com/"
                    target="_blank"
                    class="text-black w-8 h-8 rounded-md outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fas fa-link"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/delmarloscabos/"
                    target="_blank"
                    class="text-black w-8 h-8 rounded-md outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- Chileno bay -->
          <div class="w-full md:w-4/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img
                alt="Chileno Bay"
                src="clientes/chileno_bay/img3.png"
                class="shadow-lg rounded-lg max-w-full mx-auto"
                style="max-width: 200px"
              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold uppercase">Chileno Bay</h5>
                <div class="mt-6">
                  <a
                    href="https://chilenobayclub.com/"
                    target="_blank"
                    class="text-black w-8 h-8 rounded-md outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fas fa-link"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/chilenobayclub/"
                    target="_blank"
                    class="text-black w-8 h-8 rounded-md outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div class="px-6">
              <img
                alt="..."
                src="https://media.istockphoto.com/id/1289220545/es/foto/hermosa-mujer-sonriendo-con-los-brazos-cruzados.webp?s=2048x2048&w=is&k=20&c=0QL21-tY9wCQqSKYkas_VlECDZZl4s7_ZFQR91vRKN8="
                class="shadow-lg rounded-full max-w-full mx-auto"
                style="max-width: 200px"
              />
              <div class="pt-6 text-center">
                <h5 class="text-xl font-bold">Jenna Kardi</h5>
                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Founder and CEO
                </p>
                <div class="mt-6">
                  <button
                    class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fab fa-dribbble"></i></button
                  ><button
                    class="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fab fa-google"></i></button
                  ><button
                    class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fab fa-twitter"></i></button
                  ><button
                    class="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i class="fab fa-instagram"></i>
                  </button>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </section>
    <!-- Colaboradores -->
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-xl px-4 md:px-8">
        <!-- text - start -->
        <div class="mb-10 md:mb-16">
          <h2 class="text-4xl font-semibold text-center">Nuestros colaboradores</h2>
        </div>
        <!-- text - end -->
        <div
          class="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12"
        >
          <!-- colaborador -->
          <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
            <div
              class="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32"
            >
              <img
                src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Radu Florin"
                class="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <div
                class="text-center font-bold text-primario sm:text-left md:text-lg"
              >
                ING. Maritsa Espinoza Serrano
              </div>
              <p
                class="text-center text-sm text-black sm:text-left md:text-base "
              >
                Directora general
              </p>
            </div>
          </div>
          

          <!-- colaborador -->
          <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
            <div
              class="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32"
            >
              <img
                src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by christian ferrer"
                class="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <div
                class="text-center font-bold text-primario sm:text-left md:text-lg"
              >
                ING. Leticia Garcia Valentin
              </div>
              <p
                class="text-center text-sm text-black sm:text-left md:text-base"
              >
                Gerente de costos.
              </p>
            </div>
          </div>
          

          <!-- colaborador -->
          <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
            <div
              class="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32"
            >
              <img
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Ayo Ogunseinde"
                class="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <div
                class="text-center font-bold text-primario sm:text-left md:text-lg"
              >
                ARQ. Ernesto Tanaka Montoya
              </div>
              <p
                class="text-center text-sm text-black sm:text-left md:text-base"
              >
                Gerente de proyectos
              </p>
            </div>
          </div>
          

          <!-- colaborador -->
          <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
            <div
              class="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32"
            >
              <img
                src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Midas Hofstra"
                class="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <div
                class="text-center font-bold text-primario sm:text-left md:text-lg"
              >
                ING. Miguel Angel Mayoral Yee
              </div>
              <p
                class="text-center text-sm text-black sm:text-left md:text-base"
              >
                Supervisión de obra
              </p>
            </div>
          </div>
          

          <!-- colaborador -->
          <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
            <div
              class="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32"
            >
              <img
                src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Elizeu Dias"
                class="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <div
                class="text-center font-bold text-primario sm:text-left md:text-lg"
              >
                ING. Gabriel Del Rincón Sainz
              </div>
              <p
                class="text-center text-sm text-black sm:text-left md:text-base"
              >
                Coordinador de supervisión
              </p>
            </div>
          </div>
          

          <!-- colaborador -->
          <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-4">
            <div
              class="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32"
            >
              <img
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&q=75&fit=crop&w=256"
                loading="lazy"
                alt="Photo by Matheus Ferrero"
                class="h-full w-full object-cover object-center"
              />
            </div>

            <div>
              <div
                class="text-center font-bold text-primario sm:text-left md:text-lg"
              >
                LIC. Marisol Del Rincón Espinoza
              </div>
              <p
                class="text-center text-sm text-black sm:text-left md:text-base"
              >
                Gerente Administrativa
              </p>
            </div>
          </div>
          <!--  -->
        </div>
      </div>
    </div>

    
  </main>
</template>

<script setup>
import { ref } from "vue";
</script>

<style>
        .work-sans {
            font-family: 'Work Sans', sans-serif;
        }
                
        #menu-toggle:checked + #menu {
            display: block;
        }
        
        .hover\:grow {
            transition: all 0.3s;
            transform: scale(1);
        }
        
        .hover\:grow:hover {
            transform: scale(1.02);
        }
        
        .carousel-open:checked + .carousel-item {
            position: static;
            opacity: 100;
        }
        
        .carousel-item {
            -webkit-transition: opacity 0.6s ease-out;
            transition: opacity 0.6s ease-out;
        }
        
        #carousel-1:checked ~ .control-1,
        #carousel-2:checked ~ .control-2,
        #carousel-3:checked ~ .control-3 {
            display: block;
        }
        
        .carousel-indicators {
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
            bottom: 2%;
            left: 0;
            right: 0;
            text-align: center;
            z-index: 10;
        }
        
        #carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
        #carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
        #carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
            color: #000;
            /*Set to match the Tailwind colour you want the active one to be */
        }
    </style>
