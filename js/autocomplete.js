var $local_source = [
                     "jus d'orange",
                     "rhum blanc",
                     "rhum cubain",    
                     "jus ananas",
                     "lait de coco",
                     "fraises",
                     "sucre",
                     "liqueur de fraises",
                     "jus de citron",
                     "jus de citron vert",
                     "feuilles de menthe",
                     "cirop de sucre de canne",
                     "eau gazeuse",
                    "sauce worcestershire",
                    "vodka",
                    "tabasco",
                    "sel de celeri",
                    "sel",
                    "poivre",
                    "jus de tomate",
                    "rhum ambre",
                    "triple sec",
                    "sirop d'orgeat",
                    "jus de banane",
                    "canelle"
    
                    ];

$("#input_array").autocomplete(
    {minLength: 2},
    { source: $local_source }
);