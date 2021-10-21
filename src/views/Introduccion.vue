<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.tarjeta_Sp-1.p-4
      .col-lg-6       
        p.mb-3 Entre las Centrales de trabajadores y el gobierno nacional se llegó al acuerdo de incorporar en los programas de formación que imparte el SENA, el <b>desarrollo de capacidades entorno al ejercicio de los derechos fundamentales en el trabajo,</b> la política pública del trabajo decente y la construcción de una ciudadanía activa, consciente, participativa e incidente, como expresión tangible de las aspiraciones humanísticas que trascienda la mera información hacia niveles de pensamiento y acción complejas, autónomas y propositivas, como parte constitutiva del desarrollo integral del trabajador.

        p Dicho acuerdo se expresa en el marco de la Constitución Política y los Convenios Internacionales que posibilite a la persona el empoderamiento en sus relaciones laborales y ciudadanas respecto del ejercicio de los derechos fundamentales en el trabajo. Otorgando una comprensión básica acerca de la importancia, de un estado social de derecho, de las garantías ciudadanas, deberes y responsabilidades para el ejercicio pleno de la Ciudadanía Laboral.

      .col-lg-6.mb-5
        img(src="@/assets/curso/images/tema1/intro_1.svg" alt="", style="width:450px; display:block; margin: 0 auto;")

    .row.justify-content-center.align-items-center.tarjeta_Sp-2.p-4
      .col-lg-6.mb-5
        img(src="@/assets/curso/images/tema1/intro_2.svg" alt="", style="width:450px; display:block; margin: 0 auto;")
      .col-lg-6       
        p.mb-3 Esta competencia  se enmarca en la evolución histórica y defensa de los derechos laborales que señala el camino a una visión integradora del trabajador en el mundo y con el mundo, hecho que genera una dinámica multidimensional, es decir: antropológica, política, social, ecológica, cultural y económica, todo ello en mutua interdependencia, la que brinda un sentido de optimismo acerca del devenir humano y  del planeta.

        p La intencionalidad específica es que en el marco de los Derechos Fundamentales en el trabajo la persona ejerza la Ciudadanía Laboral valorando sus principios fundamentales y apropiando las herramientas que le permitan protegerla y defenderla







    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
