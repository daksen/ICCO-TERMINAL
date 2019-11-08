$(document).ready(function() {
    var names = ["Aguayo Vela José Luis", 
                 "Balleza Mascoro José Ángel", 
                 "Barrera Salazar Emmanuel",
                 "Esparza Ramos Humberto",
                 "Fernández Flores Luis Ernesto",
                 "García Vega Ivan Uriel",
                 "Jiménez Santana Axl Young",
                 "Jiménez Zermeño Héctor Eduardo",
                 "Ledezma Gurrola David Israel",
                 "Limón Murillo Fernando",
                 "López Ramirez Marcos Misael",
                 "López Romero Alan Rafael",
                 "Olivares Nuñez Consuelo Mariel",
                 "Padilla Chávez Juan Alejandro",
                 "Parra Castañeda Eduardo Geovanni",
                 "Rangel González Cynthia Elizabeth",
                 "Rivera Navarro José Eduardo",
                 "Rodríguez Alcaraz José Bryan",
                 "Rodríguez Juárez Efraín",
                 "Sandoval Rodríguez Fabián",
                 "Santos Vega Yessica",
                 "Tavares Contreras Carlos",
                 "Valles Prieto Bruno Manuel",
                 "Vázquez Aguilar Emmanuel Enrique"];

    var images = ["../graduados/AGUAYO_VELA_JOSE_LUIS.jpg",
                  "../graduados/BALLEZA_MASCORRO_JOSE_ANGEL.jpg",
                  "../graduados/BARRERA_SALAZAR_EMMANUEL.jpg",
                  "../graduados/ESPARZA_RAMOS_HUMBERTO.jpg",
                  "../graduados/FERNANDEZ_FLORES_LUIS_ERNESTO.jpg",
                  "../graduados/GARCIA_VEGA_IVAN_URIEL.jpg",
                  "../graduados/JIMENEZ_SANTANA_AXL_YOUNG.jpg",
                  "../graduados/JIMENEZ_ZERMENO_HECTOR_EDUARDO.jpg",
                  "../graduados/LEDEZMA_GURROLA_DAVID_ISRAEL.jpg",
                  "../graduados/LIMON_MURILLO_FERNANDO.jpg",
                  "../graduados/LOPEZ_RAMIREZ_MARCOS_MISAEL.jpg",
                  "../graduados/LOPEZ_ROMERO_ALAN_RAFAEL.jpg",
                  "../graduados/OLIVARES_NUÑEZ_CONSUELO_MARIEL.jpg",
                  "../graduados/PADILLA_CHAVEZ_JUAN_ALEJANDRO.jpg",
                  "../graduados/PARRA_CASTANEDA_EDUARDO_GEOVANNI.jpg",
                  "../graduados/RANGEL_GONZALEZ_CYNTHIA_ELIZABETH.jpg",
                  "../graduados/RIVERA_NAVARRO_JOSE_EDUARDO.jpg",
                  "../graduados/RODRIGUEZ_ALCARAZ_JOSE_BRYAN.jpg",
                  "../graduados/RODRIGUEZ_JUAREZ_EFRAIN.jpg",
                  "../graduados/SANDOVAL_RODRIGUEZ_FABIAN.jpg",
                  "../graduados/SANTOS_VEGA_YESSICA.jpg",
                  "../graduados/TAVARES_CONTRERAS_CARLOS.jpg",
                  "../graduados/VALLES_PRIETO_BRUNO_MANUEL.jpg",
                  "../graduados/VAZQUEZ_AGUILAR_EMMANUEL_ENRIQUE.jpg"];

    var typed = null;
    var ready = true;
    var count = 0;

    only_cursor();

    function new_typed(name, image) {
        typed = new Typed('.Prompt__text', {
            strings: [name],
            typeSpeed: 30,
            backSpeed: 30,
            backDelay: 500,
            startDelay: 1000,
            showCursor: true,
            autoInsertCss: true,
            onBegin: (self) => {
                console.log("%conBegin", "color: green");
                ready = false;
            },
            onComplete: (arrayPos, self) => {
                console.log("%conComplete", "color: green");
                if(image != "undefined") {
                    show_image(image);
                }
                count++;
                ready = true;
            }
        });
    }

    function only_cursor() {
        typed = new Typed('.Prompt__text', {
            strings: [""]
        });
    }

    function get_random() {
        return Math.random() * (20);
    }

    function show_image(image) {
        $(".Polaroid__image").attr("src", image);
        $(".Polaroid").each(function(index, elem) {
            $(elem).css("transform", `rotate(${get_random()}deg)`);
        });
        $(".Polaroid").fadeIn(1000);
    }

    $(document).keypress(function() {
        if(ready) {
            name = names[count];
            image = images[count];
            if(name != "undefined") {
                console.log("%cStep: " + count, "color: blue");
                console.log("Name: " + name);
                console.log("Image: " + image);
                if(typed) {
                    typed.destroy();
                    $(".Polaroid").fadeOut(500);
                }
                new_typed(name, image);
            } else {
                console.log("%cThere are no more names", "color: red");
                if(typed) {
                    typed.destroy();
                    $(".Polaroid").fadeOut(500);
                }
                only_cursor();
            }
        } else {
            console.log("%cNot ready", "color: red");
        }
    });
});