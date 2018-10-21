<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <a
          href="http://www.pepitas.net/libro/insultario?ref=insultario-app"
          target="_blank"
        >
          <img class="img-fluid book-image" src="/assets/insultario_book.jpg" alt="Insultario, el libro">
        </a>
      </div>

      <div class="col-md-8">
        <h1>Insultario</h1>

        <p>
          Ángel Mª Fernández, José Antonio Ruiz Gracia
          <br>
          Ilustraciones de Carmelo Bayo Calvo
        </p>

        <blockquote class="blockquote">
          <p class="mb-0">
            "El insulto fue la forma más primitiva, originaria, de la diplomacia,
            en la medida en que esta es el arte de resolver por acuerdos de palabra
            lo que podría llevar a conflictos armados"
          </p>
          <footer class="blockquote-footer">Rafael Sánchez Ferlosio, <cite title="Source Title">Vendrán más años malos y nos harán más ciegos.</cite></footer>
        </blockquote>

        <p>
          Este libro, que está a medio camino entre la reflexión irracional y el exabrupto sofisticado
          y que cuenta con el aliento de la ofensa elaborada y el pálpito de la maldición laica, es un
          compendio que encierra todo el arte del insulto: clase, elegancia, saber estar… No olvidemos
          que el insulto es un arte que hay que cultivar con el mismo cariño y el mismo mimo con que se
          trabajan las enemistades.
        </p>

        <p>
          No pase por alto el lector o lectora que este pequeño volumen es un gran manual de
          autodefensa. Un arma —orientativa y juguetona— para que ninguna de las ofensas
          cotidianas quede sin respuesta.
        </p>

        <p>
          <a
            href="http://www.pepitas.net/libro/insultario?ref=insultario-app"
            class="btn btn-outline-dark btn-lg"
            target="_blank"
          >
            Comprar el libro
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container {
    margin-top: 1em;
  }
  .book-image{
    -webkit-animation:rotate 1s ease 0s 1 normal;
    -moz-animation:rotate 1s ease 0s 1 normal;
    -ms-animation:rotate 1s ease 0s 1 normal;
    animation:rotate 1s ease 0s 1 normal;

    border-width: 10px;
    border-style: solid;
    border-color: #f1a23b;
  }

  @-webkit-keyframes rotate {
    100%{ -webkit-transform: rotate(360deg); transform: rotate(360deg); }
  }
  @keyframes rotate {
    100%{ transform: rotate(360deg); }
  }
</style>

