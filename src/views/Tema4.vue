<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Desarrollo para una vida digna
    .row.justify-content-center.align-items-center.mb-5
      .col-12
          img(src="@/assets/curso/images/tema4/img_1.svg" alt="", style="width:1200px; display:block; margin: 0 auto;")

    .row.mb-3
      .col-6 
        a.anexo.mb-4.mb-lg-0.my-3(:href="obtenerLink('/downloads/Anexo_DERECHO a la SOLIDARIDAD.mp4')" target="_blank" type="application/pdf")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b>  Derecho a la solidaridad

        a.anexo.mb-4.mb-lg-0.my-3(:href="obtenerLink('/downloads/Anexo_derechos de tercera generacion.mp4')" target="_blank" type="application/pdf")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b>  Derechos de tercera generación
    .row.d-none.d-lg-block.p-4
      .row.justify-content-center.align-items-center
        .col-10
          .jumbotron-4.p-3
            h4.p-3 Según Marquardt (2009): 
            img.my-3(src="@/assets/curso/images/tema4/ico_2.svg" alt="", style="width:100px; display:block; margin: 0 auto;")
            .row.justify-content-center.align-items-center         
              .col-8.col-md-8.col-lg-8
                p.mb-3 El Estado Democrático reposa en la soberanía popular, y esta debe entenderse como un procedimiento igualitario de formación del poder con base en el predominio del principio de la mayoría.

                p.mb-5 Frente al concepto de Democracia podemos decir que se identifica con el bien absoluto, entendido en la perspectiva popular como el autogobierno del pueblo. Rousseau es el pensador político que reintroduce este concepto de Democracia. Su primera experiencia política ocurre en la Revolución Francesa junto con un concepto burgués de libertad y supone la identidad de gobernantes y gobernados, ya que somos libres en tanto nos damos las leyes que obedecemos. 

                p ---------
                p.mb-3 Hasta mediados del siglo XIX, el concepto de Democracia es unívoco y tajante, significando gobierno del pueblo por el pueblo desde el supuesto que la libertad de gobernarse a sí mismo sólo se puede alcanzar con la igualdad. La libertad entendida como autonomía responsable es inconcebible sin la igualdad social. Estado Social La historia de la realización  del concepto de Estado Social tuvo su punto de partida en el imperio alemán con sus tradiciones.

                p.mb-5 El Estado bienestar surgió a principios de siglo en Europa como respuesta a las demandas sociales; el movimiento obrero europeo, las reivindicaciones populares provenientes de las revoluciones Rusa y Mexicana, y las innovaciones adoptadas durante la república de Weimar, la época del New Deal en los Estados Unidos, sirvieron para transformar el reducido Estado liberal en un complejo aparato político-administrativo jalonador de toda la dinámica social. 
          img(src="@/assets/curso/images/tema4/ico_1.svg" alt="", style="width:100px; display:block; margin: -5rem auto;") 
    .row.mb-5
      .col-lg-11.d-block.d-lg-none
        .jumbotron-4.p-5
          h4.text-center.p-3 Según Marquardt (2009): 
            p.mb-0.text-center.my-3 El Estado Democrático reposa en la soberanía popular, y esta debe entenderse como un procedimiento igualitario de formación del poder con base en el predominio del principio de la mayoría.

            p.mb-5.text-center Frente al concepto de Democracia podemos decir que se identifica con el bien absoluto, entendido en la perspectiva popular como el autogobierno del pueblo. Rousseau es el pensador político que reintroduce este concepto de Democracia. Su primera experiencia política ocurre en la Revolución Francesa junto con un concepto burgués de libertad y supone la identidad de gobernantes y gobernados, ya que somos libres en tanto nos damos las leyes que obedecemos. 

            p ---------
            p.mb-3.text-center Hasta mediados del siglo XIX, el concepto de Democracia es unívoco y tajante, significando gobierno del pueblo por el pueblo desde el supuesto que la libertad de gobernarse a sí mismo sólo se puede alcanzar con la igualdad. La libertad entendida como autonomía responsable es inconcebible sin la igualdad social. Estado Social La historia de la realización  del concepto de Estado Social tuvo su punto de partida en el imperio alemán con sus tradiciones.

            p.mb-3.text-center El Estado bienestar surgió a principios de siglo en Europa como respuesta a las demandas sociales; el movimiento obrero europeo, las reivindicaciones populares provenientes de las revoluciones Rusa y Mexicana, y las innovaciones adoptadas durante la república de Weimar, la época del New Deal en los Estados Unidos, sirvieron para transformar el reducido Estado liberal en un complejo aparato político-administrativo jalonador de toda la dinámica social.
        img(src="@/assets/curso/images/tema4/ico_1.svg" alt="", style="width:100px; display:block; margin: -5rem auto;") 
    br
    .row.d-none.d-lg-block.p-4
      .row.justify-content-center.align-items-center
        .col-10
          .jumbotron-6.p-3
            h4.p-3 De acuerdo a  Wilensky (1975):
            img.my-3(src="@/assets/curso/images/tema4/ico_2.svg" alt="", style="width:100px; display:block; margin: 0 auto;")
            .row.justify-content-center.align-items-center         
              .col-8.col-md-8.col-lg-8
                p.mb-3 Desde este punto de vista el Estado social puede ser definido como el Estado que garantiza estándares mínimos de salario, alimentación, salud, habitación, educación, asegurados para todos los ciudadanos bajo la idea de derecho y no simplemente de caridad.
          img(src="@/assets/curso/images/tema4/ico_1.svg" alt="", style="width:100px; display:block; margin: -5rem auto;") 

    .row.mb-5
      .col-lg-11.d-block.d-lg-none
        .jumbotron-2.p-5
          h4.text-center.p-3 De acuerdo a  Wilensky (1975):
            p.mb-0.text-center.my-3 Desde este punto de vista el Estado social puede ser definido como el Estado que garantiza estándares mínimos de salario, alimentación, salud, habitación, educación, asegurados para todos los ciudadanos bajo la idea de derecho y no simplemente de caridad.
        img(src="@/assets/curso/images/tema4/ico_1.svg" alt="", style="width:100px; display:block; margin: -3rem auto;") 

    br
    LineaTiempoD.color-acento-contenido.mb-5
      .row.p-4.tarjeta--azul-2(numero="1848" titulo="Manifiesto del partido comunista")
        .col-md-6.mb-4.mb-md-0
          p En 1848 aparece el Manifiesto del partido comunista, ejerciendo una fuerte influencia en el desarrollo histórico de los siglos XIX y XX, ya que planteó dos ideas básicas: la primera, que no son las ideas y las creencias las que determinan las relaciones y las condiciones sociales de vida, sino que por el contrario, son las condiciones sociales de vida las que definen las ideas, y la segunda es que las cosas son cambiantes, se transforman y no tienen esencia; con esto se plantea la naturaleza dialéctica de la doctrina del socialismo científico. Así, el método del materialismo dialéctico será aplicado a la historia por medio de una especie de transposición de la dialéctica científica al campo de las ciencias sociales. 
      
        .col-md-6.mb-5
          figure
            img(src="@/assets/curso/images/tema4/img_2.svg" alt="", style="width:300px; display:block; margin: 0 auto;")
            
        .col-md-6
          figure
            img(src="@/assets/curso/images/tema4/img_3.svg" alt="", style="width:300px; display:block; margin: 0 auto;")

        .col-md-6.mb-4.mb-md-0
          p Marx y Engels consideraban que la burguesía había revolucionado profundamente los modos y las relaciones de producción, reduciendo la sociedad feudal a la existencia de dos clases: la de los capitalistas o propietarios de los medios de producción y la de los proletarios o trabajadores, considerando también que la lucha de clases es la que definiría los cambios en la historia. A partir de las ideas de Marx y Engels, y de varios grupos socialistas, se organizan movimientos sindicales en Europa que, en algunos países, se convirtieron en partidos políticos, y bajo este escenario se da un enfrentamiento entre estos grupos y los sectores liberales en el poder, e incluso, contra sectores democráticos.
      

      .row.p-4.tarjeta--azul-2(numero="1848" titulo="Levantamientos populares impulsados en su mayoría por las doctrinas socialistas")
        .col-md-6.mb-4.mb-md-0
          p En 1848 en Europa se presentan una serie de levantamientos populares impulsados en su mayoría por las doctrinas socialistas. Los partidos social - demócratas jugaron un papel preponderante en el desarrollo del debate político entre liberalismo y socialismo, y el problema que se plantearon fue el de encontrar el camino más adecuado para la inevitable revolución; entonces dieron a esperar a que se desarrollaran las contradicciones internas dentro del sistema, haciendo uso de las garantías y libertades que ofrecía el constitucionalismo liberal mientras llegaba el día en que el mismo sistema explotara internamente. Este momento de crisis es aprovechado por los social - demócratas para llegar al poder y establecer un Estado Socialista. 
      
        .col-md-6
          figure
            img(src="@/assets/curso/images/tema4/img_4.svg" alt="", style="width:350px; display:block; margin: 0 auto;")
    
      .row.p-4.tarjeta--azul-2(numero="1864 " titulo="Reunión de la Internacional de trabajadores")
        .col-md-6
          figure
            img(src="@/assets/curso/images/tema4/img_5.svg" alt="", style="width:350px; display:block; margin: 0 auto;")
        .col-md-6.mb-4.mb-md-0
          p.mb-3  En 1864 tiene lugar la reunión de la Internacional de trabajadores que fracasa ante las presiones de la guerra franco prusiana; en 1887 se reúne la Segunda Internacional para buscar la unidad de los partidos socialdemócratas europeos, a fin de lograr mayor capacidad política; pero fracasa nuevamente en 1914 al estallar la guerra mundial, ya que los partidos socialistas apoyaron el otorgamiento de créditos para la guerra y convocaron a sus copartidarios a participar en ella, presentándose así, una fuerte contradicción al interior del movimiento socialista porque mientras consideraba como gran enemigo al capitalismo, actuaba al interior de sus instituciones democráticas a través de los partidos de masas, para esperar la autodestrucción natural del Estado burgués producto de sus propias contradicciones. 

          p Se deja entonces de lado la acción violenta y se concentran fuerzas en la acción política. En 1903, Vladimir Lenin afirma que en ciertos países como, por ejemplo, en la Rusia de esos años, caracterizada por el atraso económico y por la pobreza, no es posible esperar el desarrollo de un capitalismo que ni siquiera se ha iniciado y por ello se hace necesario ensayar el socialismo sin tener que esperar que el capitalismo desarrolle sus contradicciones, para lo cual se hace necesario que los partidos socialistas debían convertirse en partidos revolucionarios de masas que no continúen en el juego de la burocracia burguesa parlamentaria. 
      
      .row.p-4.tarjeta--azul-2(numero="1917" titulo="Revolución Bolchevique")
        .col-md-6.mb-4.mb-md-0
          p En 1917 la revolución Bolchevique conduce al derrocamiento del régimen Zarista que estaba en muy malas condiciones, fundamentalmente por las derrotas militares en la primera guerra mundial. Todos estos acontecimientos generan una fuerte división en el socialismo: por una parte los partidos social demócratas, que consideran que son los representantes de las masas trabajadoras y que es necesario esperar el máximo desarrollo del capitalismo para poder pasar al socialismo, y por la otra, los partidarios de las ideas de Lenin que creen que no se debe esperar el desarrollo del capitalismo sino precipitar la revolución violenta y la aparición de la dictadura del proletariado para lo cual se hace necesario crear partidos comunistas que estarán a la vanguardia de la clase obrera y que son los que llevaran a la revolución.  
      
        .col-md-6
          figure
            img(src="@/assets/curso/images/tema4/img_6.svg" alt="", style="width:350px; display:block; margin: 0 auto;")

    .jumbotron-3.p-5.mb-5.d-none.d-lg-block
      .row.mb-5
        .col-lg-5.mb-5.mb-lg-0
          img(src="@/assets/curso/images/tema4/img_7.svg", alt= "",style="width:450px; display:block; margin:0 auto;") 
        .col-lg-7.mb-5.mb-lg-0
          p.mb-3 La división al interior del socialismo continuará hasta 1957, después de lo cual, muchos partidos comunistas leninistas de Europa Occidental decidieron marcar una línea divisoria con el partido comunista soviético e instalar el Eurocomunismo. Después de la Segunda Guerra Mundial los partidos socialistas europeos deciden aceptar la democracia parlamentaria, colocando límites a la propiedad privada y al mercado, pues el objetivo es lograr una mejor distribución de la riqueza y de los ingresos. Los eurocomunistas siguieron siendo críticos de la propiedad privada y del mercado, pero se alejaron del Leninismo en la medida en que no consideraban necesaria la vía violenta para llegar al poder, ni creían en el partido comunista como vanguardia, así como tampoco consideraban necesaria la dictadura del proletariado. La división entre comunistas, leninistas, social - demócratas y eurocomunistas se prolongará hasta 1990 cuando se produce la crisis profunda de los partidos comunistas y se da un acercamiento entre las ideas socialistas y las eurocomunistas. Hoy son los partidos socialdemócratas la tendencia sobreviviente del socialismo que tiene una fuerza importante en varios países de Europa y se sustenta en la idea de que el poder político debe lograr una justicia material mínima para sus asociados. 

    .row.justify-content-center.align-items-center.p-5.mb-5.d-block.d-lg-none
      .jumbotron-4.p-4
        .row.mb-5
          .col-lg-7.mb-5.mb-lg-0
            p.mb-3 La división al interior del socialismo continuará hasta 1957, después de lo cual, muchos partidos comunistas leninistas de Europa Occidental decidieron marcar una línea divisoria con el partido comunista soviético e instalar el Eurocomunismo. Después de la Segunda Guerra Mundial los partidos socialistas europeos deciden aceptar la democracia parlamentaria, colocando límites a la propiedad privada y al mercado, pues el objetivo es lograr una mejor distribución de la riqueza y de los ingresos. Los eurocomunistas siguieron siendo críticos de la propiedad privada y del mercado, pero se alejaron del Leninismo en la medida en que no consideraban necesaria la vía violenta para llegar al poder, ni creían en el partido comunista como vanguardia, así como tampoco consideraban necesaria la dictadura del proletariado. La división entre comunistas, leninistas, social - demócratas y eurocomunistas se prolongará hasta 1990 cuando se produce la crisis profunda de los partidos comunistas y se da un acercamiento entre las ideas socialistas y las eurocomunistas. Hoy son los partidos socialdemócratas la tendencia sobreviviente del socialismo que tiene una fuerza importante en varios países de Europa y se sustenta en la idea de que el poder político debe lograr una justicia material mínima para sus asociados. 
    .row.justify-content-center.align-items-center.mb-4
        .col-lg
          .custom_box_left.mb-5
            p.mb-3 Es preciso tener claro que, cuando se define un Estado como Constitucional y Democrático de Derecho no se hace referencia solo al actual momento de la progresión histórica del Estado, sino fundamentalmente a un sistema político y económico orientado hacia la realización de la justicia por medio de la libertad política y la igualdad económica, mediante la configuración democrática y pluralista del poder público. 

            p Se trata de un Estado Constitucional, Republicano – Democrático, con cuatro elementos clave: una república, que ha roto el tipo de reino dinástico con un republicanismo democrático; una ley fundamental que legitima y limita el poder estatal, la Constitución, creada normalmente por una asamblea constituyente que reclama una prioridad frente a otras leyes; una estructura basada en la división de poderes y un catálogo de derechos fundamentales.  
        .col-auto.onTop
          img(src="@/assets/curso/images/tema4/img_8.svg" alt='AvatarTop', style="width:450px;").m-auto 
    .row.justify-content-center.align-items-center.mb-4
      .col-10
        .bloque-texto-f.color-primario.pt-4.px-5.my-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto.text-center El Estado de Derecho en su formulación originaria es un concepto polémico orientado contra el Estado absolutista, cuya función es crear y mantener el Derecho <br><br>Un elemento clave del Estado Constitucional y Democrático de Derecho es la Justicia Constitucional que intenta concretar los límites del poder estatal en expansión; ella es como una república, que ha roto con el tipo dinástico dominante en los cinco milenios de las organizaciones agrarias.  
          .bloque-texto-f__autor.mb-3
            h3.mb-0 Según García (1987)
    p.mb-3 La democracia es el elemento más ideologizado; se entiende en la perspectiva popular como el autogobierno del pueblo y es un Estado Constitucional en el sentido de poseer una constitución formal con una codificación amplia y comprensible para todos que limita y legitima al poder Estatal y es creada normalmente por una Asamblea Constituyente (Marquardt, 2009).

    p Para profundizar la temática anteriormente mencionada visualiza el siguiente video:

    .row.mb-3
      .col-6 
        a.anexo.mb-4.mb-lg-0.my-3(href="https://www.youtube.com/watch?v=9hf6b4by2Z4" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b>  ¿Qué es el Estado Social de Derecho? Colombia
   
        a.anexo.mb-4.mb-lg-0.my-3(:href="obtenerLink('/downloads/Anexo_ESTADO SOCIAL DE DERECHO.pdf')" target="_blank" type="application/pdf")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b>  Estado Social de Derecho
      
      p.my-4 Y finalmente una reflexión sobre el cambio de mentalidad que requerimos ante lo que está pasando actualmente en el mundo
    .row
      .col-6 
        a.anexo.mb-4.mb-lg-0.my-2(:href="obtenerLink('/downloads/Anexo_Carl Sagan- Cambio de mentalidad.mp4')" target="_blank" type="application/pdf")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b>  Carl Sagan- Cambio de mentalidad

        a.anexo.mb-4.mb-lg-0.my-3(:href="obtenerLink('/downloads/ACTIVISMO JUDICIAL TERRITORIAL_CF.docx')" target="_blank" type="application/pdf")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b>  Activismo judicial territorial_CF
        
   

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
