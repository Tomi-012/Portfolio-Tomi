<script>
import { useI18n } from '../composables/useI18n';
import { computed } from 'vue';

export default {
  setup() {
    const { t } = useI18n();
    const items = computed(() => [
        {
          id: 1,
          name: t('projects.personal_website.name'),
          imageUrl: 'https://masrori.my.id/fto_tmi/Portfolio_Tomi.png',
          status: t('projects.personal_website.status'),
          tech: 'VueJS, HTML, CSS, javaScript',
          github: 'https://github.com/Tomi-012',
          demo: 'https://portfolio-tomi.vercel.app/'
        },
        {
          id: 2,
          name: t('projects.portfolio_v2.name'),
          imageUrl: 'https://masrori.my.id/fto_tmi/portofolio-v2.png',
          status: t('projects.portfolio_v2.status'),
          tech: 'React, Vite, Tailwind CSS',
          github: 'https://github.com/Tomi-012',
          demo: 'https://portofolio-tomi-v2.vercel.app/'
        },
        {
          id: 3,
          name: t('projects.portfolio_v3.name'),
          imageUrl: 'https://masrori.my.id/fto_tmi/Portofolio-tema-raiden.png',
          status: t('projects.portfolio_v3.status'),
          tech: 'React, Vite, Tailwind CSS, TypeScript',
          github: 'https://github.com/Tomi-012',
          demo: 'https://portofolio-tomi-v3-ei.vercel.app'
        },
        {
          id: 4,
          name: t('projects.list_joki.name'),
          imageUrl: 'https://masrori.my.id/fto_tmi/List_Joki.png',
          status: t('projects.list_joki.status'),
          tech: 'Genshin Impact, Honkai Star Rail',
          github: 'https://github.com/Tomi-012',
          demo: 'https://list-joki.vercel.app/'
        },
        {
          id: 5,
          name: t('projects.shiraori_joki.name'),
          imageUrl: '/img/web-jasa-joki-v2.png',
          status: t('projects.shiraori_joki.status'),
          tech: 'React, Next.js, Tailwind CSS, TypeScript',
          github: 'https://github.com/Tomi-012',
          demo: 'https://web-shiraori-joki-v2.vercel.app/#testimoni'
        },
        {
          id: 6,
          name: t('projects.project_pkm.name'),
          imageUrl: '/img/project-pkm.png',
          status: t('projects.project_pkm.status'),
          tech: 'React, Next.js, Tailwind CSS, TypeScript',
          github: 'https://github.com/Tomi-012',
          demo: 'https://project-pkm.vercel.app/'
        },
        {
          id: 7,
          name: t('projects.dashboard_ecommerce.name'),
          imageUrl: 'https://masrori.my.id/fto_tmi/Sumber%20Segar%20Dashboard.png',
          status: t('projects.dashboard_ecommerce.status'),
          tech: 'React, Next.JS, TypeScript, Tailwind CSS',
          github: 'https://github.com/Tomi-012',
          demo: 'https://sumber-segar.com'
        },
        {
          id: 8,
          name: t('projects.lumichan_ai.name'),
          imageUrl: '/img/lumichan-ai.png',
          status: t('projects.lumichan_ai.status'),
          tech: 'React, Next.js, Tailwind CSS, JavaScript, Emotion, AI API',
          github: 'https://github.com/Tomi-012',
          demo: 'https://lumichan-ai.masrori.my.id/'
        },
        {
          id: 9,
          name: t('projects.perpustakaan.name'),
          imageUrl: '/img/perpustakaan.png',
          status: t('projects.perpustakaan.status'),
          tech: 'React, Next.js, TypeScript, Tailwind CSS,',
          github: 'https://github.com/Tomi-012',
          demo: 'https://perpus.masrori.my.id/'
        },
        {
          id: 10,
          name: t('projects.traffic_rnn.name'),
          imageUrl: '/img/trafic-rnn_e-learning-unpam.png',
          status: t('projects.traffic_rnn.status'),
          tech: 'Python, TensorFlow, RNN, React, Vite, Tailwind CSS',
          github: 'https://github.com/Tomi-012',
          demo: 'https://traffic-rnn.vercel.app/'
        },
        {
          id: 11,
          name: t('projects.sawitmart.name'),
          imageUrl: '/img/sawitmart.png',
          status: t('projects.sawitmart.status'),
          tech: 'Angular, HTML, Golang, SawitDB, Typescript, Tailwind CSS',
          github: 'https://github.com/Tomi-012',
          demo: 'https://sawitmart.masrori.my.id/'
        },
        {
          id: 14,
          name: t('projects.parfume_lux.name'),
          imageUrl: '/img/parfume_lux.png',
          status: t('projects.parfume_lux.status'),
          tech: 'PHP, MySQL, Tailwind CSS, javaScript',
          github: 'https://github.com/Tomi-012',
          demo: 'https://parfume-lux.masrori.my.id/'
        },
        {
          id: 12,
          name: t('projects.cipta_hospital.name'),
          imageUrl: 'https://masrori.my.id/fto_tmi/PT.Cipta%20Hospital.png',
          status: t('projects.cipta_hospital.status'),
          tech: 'HTML, CSS, JavaScript, Bootstrap',
          github: 'https://github.com/Tomi-012',
          demo: 'https://web-rs-pt-cipta-hospital.vercel.app/'
        },
        {
          id: 13,
          name: t('projects.login_register.name'),
          imageUrl: '/img/login-register.png',
          status: t('projects.login_register.status'),
          tech: 'HTML, JavaScript, PHP, Tailwind CSS',
          github: 'https://github.com/Tomi-012',
          demo: 'https://login-register-seven-gules.vercel.app/'
        },
    ]);

    return { items, t };
  }
}
</script>
<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
          <!-- <div class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate"></div> -->
          <h4>{{ t('portfolio.title') }}</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-amber-300">
            {{ t('portfolio.subtitle') }}</h4>
        </div>
      </header>
      <section>
        <div>
          <div class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 fade-zoom-in">
            <div v-for="item in items" :key="item.id">
              <div
                class="item-card flex flex-col items-center gap-2 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] rounded-xl text-amber-50 md:gap-3 px-5 py-5 lg:px-5 h-full">
                <div class="flex h-12 w-12 items-center justify-center p-0 h-full w-full lg:p-0 zoom-in">
                  <img alt="HTML" loading="lazy" decoding="async" data-nimg="1" class="drop-shadow-xl rounded rounded-xl"
                    :src="item.imageUrl">
                </div>
                <div class="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg">
                  <div class="title-text font-medium text-secondary">{{ item.name }}
                  </div>
                  <div class="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                  <div class="w-full mt-4 text-normal text-sm text-left text-amber-200">
                    {{ item.tech }}
                  </div>
                  <div class="w-full flex justify-end">
                    <div class="flex cursor-pointer items-end gap-2 text-primary">
                      <a v-if="item.github !== 'null'"
                        :href="item.github" target="_blank" rel="noreferrer"
                        :title="t('portfolio.view_github')" class="transition-all hover:text-accent">
                        <svg stroke="currentColor"
                          fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                          height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                          </path>
                        </svg></a>
                        <a v-if="item.demo !== 'null'" :href="item.demo" target="_blank" rel="noreferrer"
                        :title="t('portfolio.view_project')" class="transition-all hover:text-accent">
                        <svg stroke="currentColor"
                          fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                          height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </article>
  </div></template>

<style>
.item-card:hover {
  transition: transform 0.3s ease;
  transform: translateY(-8px);
}
svg:hover{
  stroke: #ffdb70;
}
@keyframes fadeZoomIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Menggunakan animasi pada elemen yang diinginkan */
.fade-zoom-in {
  animation: fadeZoomIn 1s ease-in-out;
}
</style>
