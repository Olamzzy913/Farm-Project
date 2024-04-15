<template>
  <section class="bg-primary py-[40px] md:py-[120px]" id="section">
    <div class="section">
      <div class="flex flex-wrap justify-between px-[1.6rem]">
        <div class="w-full md:w-full lg:w-[40%] slg:w-[25%]">
          <div class="mb-[50px]">
            <div class="block">
              <router-link to="/"
                ><img src="/assets/footer_logo.png" alt="" class="w-[12rem]"
              /></router-link>
              <h1 class="text-[3rem] leading-[1.3] mb-4 text-white font-normal">
                <span class="text-[#F7C35F]">Farm</span> Central
                <span class="text-[#A6F074]">Intelligence</span>
              </h1>
              <p class="text-white text-[1.4rem]">
                Africa largest database of small holding farmer's
              </p>
              <div class="block mt-4">
                <a
                  href="https://www.linkedin.com/company/farmci/"
                  class="text-white text-[1.7rem] text-center mr-[16px] leading-[1.4] duration-700 inline-block hover:scale-x-[-1]"
                  ><i class="bx bxl-linkedin"></i
                ></a>
                <a
                  href="https://www.instagram.com/real_farmci"
                  class="text-white text-[1.7rem] text-center mr-[16px] leading-[1.4] duration-700 inline-block hover:scale-x-[-1]"
                  ><i class="bx bxl-instagram"></i
                ></a>
                <a
                  href="https://www.facebook.com/FarmcentralIntelligence"
                  class="text-white text-[1.7rem] text-center mr-[16px] leading-[1.4] duration-700 inline-block hover:scale-x-[-1]"
                  ><i class="bx bxl-facebook-circle"></i
                ></a>
                <a
                  href="https://www.youtube.com/@YakubuYinusa"
                  class="text-white text-[1.7rem] text-center mr-[16px] leading-[1.4] duration-700 inline-block hover:scale-x-[-1]"
                  ><i class="bx bxl-youtube"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-[50%] lg:w-[20%] slg:w-[15%]">
          <div class="mb-[50px]">
            <div class="block">
              <h4 class="text-white text-[1.7rem] font-medium mb-[30px]">Quick Links</h4>
              <ul>
                <li class="mb-[15px] offset">
                  <router-link
                    :to="{ path: '/', hash: '#section2' }"
                    id="about"
                    class="text-white text-[1.3rem] font-light duration-700 hover:underline"
                    >About Us</router-link
                  >
                </li>
                <li class="mb-[15px] offset">
                  <router-link
                    :to="{ path: '/', hash: '#section1' }"
                    id="footer-service"
                    class="text-white text-[1.3rem] font-light duration-700 hover:underline"
                    >Service</router-link
                  >
                </li>
                <li class="mb-[15px] offset">
                  <a
                    href="#"
                    class="text-white text-[1.3rem] font-light duration-700 hover:underline"
                    >Pricing</a
                  >
                </li>
                <li class="mb-[15px] offset">
                  <a
                    href="#"
                    class="text-white text-[1.3rem] font-light duration-700 hover:underline"
                    >Blog</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- <div class="shrink-0 w-full smi:w-[50%] md:w-[33.3333%] lg:w-[16.66666%] max-w-full"> -->
        <div class="w-full md:w-[50%] lg:w-[20%] slg:w-[25%]">
          <div class="mb-[50px]">
            <div class="block">
              <h4 class="text-white text-[1.7rem] font-medium mb-[30px]">Contact Us</h4>
              <ul>
                <li class="mb-[15px] offset">
                  <a
                    href="mailto:support@farmci.com"
                    class="text-white text-[1.3rem] font-light duration-700 hover:underline"
                    ><i class="bx bxs-envelope pr-4"></i>support@farmci.com</a
                  >
                </li>
                <li class="mb-[15px] offset">
                  <address
                    href=""
                    class="text-white text-[1.3rem] font-light duration-700 hover:underline"
                  >
                    <i class="bx bxs-map pr-4"></i>9, Esuru, ijebu ode, Ogun state
                  </address>
                </li>
                <li class="mb-[15px] offset">
                  <a
                    href="tel:++2348089783397"
                    class="text-white text-[1.3rem] font-light duration-700 hover:underline"
                    ><i class="bx bxs-phone-call pr-4"></i>+234 8089783397</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="w-full md:w-full lg:w-[70%] slg:w-[35%]">
          <div class="mb-[50px]">
            <div class="block mb-[10px]">
              <h4 class="text-white text-[1.7rem] font-medium mb-[30px]">Newsletter</h4>
            </div>
            <div class="block mb-[40px]">
              <div class="block">
                <form action="" class="relative">
                  <input
                    placeholder="Enter your Email"
                    type="email"
                    class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem] bg-white text-[#5C6168]"
                  />
                  <div class="block">
                    <button
                      class="absolute top-0 right-0 text-white text-2xl cursor-pointer bg-secondary leading-[1] py-[1.2rem] px-[1.6rem] rounded-r-[1rem]"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
