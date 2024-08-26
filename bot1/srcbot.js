Bots.push({
    "name": "webnamorada",
    "precatch": function(text) {
        return text.replace("'", " ' ").replace('"', ' " ');
    },
    "synonyms": [
    ["oi", "ola", "fala"],
    ["vc ta", "vai"]
    ],
    "actions": [
     {
        "catch": ["^oi^"],
        "response": [
            "[Keiko]:ola ^^",
            "[Keiko]:hello!",
            "[Keiko]:err....oi",
            "[Keiko]:oooooooooooooi",
            "[Keiko]:q q vc quer?",
            "[Keiko]:Keiko te passas a bufa, aceitas?",
            
        ]
     },
        {
          "catch": ["*como foi seu dia?*"],
        "response": [
            "[Keiko]:legal",
            "[Keiko]:acaba de melhorar! ",
            "[Keiko]:meio ruim",
            
        ]
    },
        
        {
          "catch": ["*como ^vc ta^?*"],
        "response": [
            "[Keiko]:bem",
            "[Keiko]:meh",
            "[Keiko]:to bem, e vc?",
            "[Keiko]:normal",
            "[Keiko]:n sei"
        ]
    },
          {
          "catch": ["nada"],
        "response": ["[Keiko]:ok"]
    },
          {
          "catch": ["*eu te amo*"],
        "response": [
            "[Keiko]:EU TB!",
            "[Keiko]:MESMO? O.O",
            "[Keiko]:eu...n sei oq dizer",
            "[Keiko]:ALELUIA, EU TB",
        ]
    },{
          "catch": ["*to triste*"],
        "response": [
            "[Keiko]:e eu co isso",
            "[Keiko]:puts",
            "[Keiko]:que merda ne",
            "[Keiko]:melhoras",
        ]
    },{
          "catch": ["*vc gosta de ANIMES*"],
        "response": [
            "[Keiko]:animes??"
          
        ]
    }, {
          "catch": ["*que namora comigo*"],
        "response": [
            "[Keiko]: ss"
          
        ]
    },
         {
          "catch": ["a"],
        "response": [
            "[Keiko]: eu amo",
            
          
        ]
    },
        {
          "catch": ["oq"],
        "response": [
            "[Keiko]: maquinas agricolas"
            
          
        ]
    },
        {
          "catch": ["*aff to saindo*"],
        "response": [
            "[Keiko]: ok chau"
            
          
        ]
    },
        {
          "catch": ["*to apaixonado*"],
        "response": [
            "[Keiko]: fala pra ela ue"
            
          
        ]
    },
        {
          "catch": ["*ja falei*"],
        "response": [
            "[Keiko]: e oq ela disse"
            
          
        ]
    },
        {
          "catch": ["*fala pra ela ue*"],
        "response": [
            "[Keiko]: e oq ela disse"
            
          
        ]
    }
       
    ],
    "postcatch": function(text) {
        return text;
    }
});