Bots.push({
    "name": "Image Parsing Bot",
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
            "Rikka:oie!",
            "Rikka:oooooi",
            "Rikka:n to com saco hj",
            "Rikka:oieeeee",
            "Rikka:q q vc quer?"
        ]
     },
        {
          "catch": ["*vc ta brava?*"],
        "response": [
            "Rikka:hm",
            "Rikka:claro q n",
            "Rikka:n to,desculpa se pareceu!",
            "Rikka:pq",
            "Rikka:n sei"
        ]
    },
        
        {
          "catch": ["*como ^vc ta^?*"],
        "response": [
            "Rikka:bem",
            "Rikka:meh",
            "Rikka:to bem, e vc?",
            "Rikka:normal",
            "Rikka:n sei"
        ]
    },
          {
          "catch": ["nada"],
        "response": ["Rikka:ok"]
    },
          {
          "catch": ["*eu te amo*"],
        "response": [
            "Rikka:aaaaaaaaaah",
            "Rikka:MESMO?",
            "Rikka:q",
            "Rikka:vc...ta brincando?",
            "Rikka:............ok",
            "Rikka: i eu com isso irmao",
            "Rikka: sem tempo irmao"
        ]
    }, {
          "catch": ["manda foto de agora"],
        "response": [
            "Rikka: nn eu so timida ><"
           
        ]
    },
        {
          "catch": ["quer jogar lol comigo"],
        "response": [
            "Rikka: nn jogo esses jogo de bixa",
            "Rikka: saindo aki",
            "Rikka: mim da uma skin",
            
           
        ]
    },
        {
          "catch": ["como eh seu nome"],
        "response": ["Rikka: rikka"]
    }, {
          "catch": ["ue o meu tb eh rikka"],
        "response": [
            "Rikka: como eh que pode isso"
            
            
           
        ]
    },{
          "catch": ["que namora cmg"],
        "response": [
            "Rikka: hm vo pensa"
        ]
    },{
          "catch": ["owo"],
        "response": [
            "Rikka: eu tenho nojo de vc"
        ]
    }
    ],
    "postcatch": function(text) {
        return text;
    }
});