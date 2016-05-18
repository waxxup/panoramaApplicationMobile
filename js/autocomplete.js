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
    
                    ];

$("#input_array").autocomplete(
    {minLength: 3},
    { source: $local_source }
);