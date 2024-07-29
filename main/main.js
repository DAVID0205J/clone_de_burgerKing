let main=`
<div class="main">
    <div class="title_main"> 
        <p class="title1">ES HORA DE LA</p>
        <p class="title2">CENA</p>
    </div>
    
    <div class="img">
        <img src="https://bk.gt/images/bk-cena.png" alt="">
    </div>
    <div class="text_orden">
        <p class="text_orden1">Ordena a domicilio de </p>
        <p class="text_orden2">7:00 am a 22:00 pm</p>
    </div>
    <div class="carrusel">
            <div class="carousel-inner">
                <div class="carousel">
                    <img src="https://bk.gt/images/promo/5413636.jpg" alt="Imagen 1">
                    <img src="https://bk.gt/images/promo/3471323.jpg" alt="Imagen 2">
                    <img src="https://bk.gt/images/promo/6201719.jpg" alt="Imagen 3">
                    <img src="https://bk.gt/images/promo/5021432.jpg" alt="Imagen 4">
                </div>
                <button class="button left" onclick="moveCarousel(-1)">&#10094;</button>
                <button class="button right" onclick="moveCarousel(1)">&#10095;</button>
            </div>
        </div>
    
</div>
`
export {main}