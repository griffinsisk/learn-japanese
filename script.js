const answers = [
    {
        hiragana: "あ",
        english: "a" 
    },
    {
        hiragana: "い",
        english: "i" 

    },
    {
        hiragana: "う",
        english: "u" 
    },
    {
        hiragana: "え",
        english: "e"
    },
    {
        hiragana: "お",
        english: "o"
    },
    {
        hiragana: "か",
        english: "ka"
    },
    {
        hiragana: "き", 
        english: "ki"
    },
    {
        hiragana: "く",
        english: "ku"
    },
    {
        hiragana: "け",
        english: "ke"
    },
    {
        hiragana: "こ",
        english: "ko" 
    },
    {
        hiragana: "さ",
        english: "sa"
    },
    {
        hiragana: "し",
        english: "shi" 
    },
    {
        hiragana: "す",
        english: "su" 
    },
    {
        hiragana: "せ",
        english: "se" 
    },
    {
        hiragana: "そ",
        english: "so" 
    },
    {
        hiragana: "た",
        english: "ta" 
    },
    {
        hiragana: "ち",
        english: "chi" 
    },
    {
        hiragana: "つ",
        english: "tsu" 
    },
    {
        hiragana: "て",
        english: "te" 
    },
    {
        hiragana: "と",
        english: "to" 
    },
    {
        hiragana: "な",
        english: "na" 
    },
    {
        hiragana: "に",
        english: "ni" 
    },
    {
        hiragana: "ぬ",
        english: "nu"
    },
    {
        hiragana: "ね",
        english: "ne"
    },
    {
        hiragana: "の",
        english: "no" 
    },
    {
        hiragana: "は",
        english: "ha",
    },
    {
        hiragana: "ひ",
        english: "hi" 
    },
    {
        hiragana: "ふ",
        english: "fu"
    },
    {
        hiragana: "へ", 
        english: "he"
    },
    {
        hiragana: "ほ",
        english: "ho"
    },
    {
        hiragana: "ま",
        english: "ma" 
    },
    {
        hiragana: "み",
        english: "mi" 
    },
    {
        hiragana: "む",
        english: "mu" 
    },
    {
        hiragana: "め",
        english: "me" 
    },
    {
        hiragana: "も",
        english: "mo" 
    },
    {
        hiragana: "や",
        english: "ya" 
    },
    {
        hiragana: "ゆ",
        english: "yu" 
    }, 
    {
        hiragana: "よ",
        english: "yo" 
    }, 
    {
        hiragana: "ら", 
        english: "ra"
    }, 
    {
        hiragana: "り",
        english: "ri" 
    }, 
    {
        hiragana: "る",
        english: "ru" 
    }, 
    {
        hiragana: "れ",
        english: "re" 
    }, 
    {
        hiragana: "ろ",
        english: "ro" 
    }, 
    {
        hiragana: "め",
        english: "wa" 
    }, 
    {
        hiragana: "を",
        english: "wo" 
    },
    {
        hiragana: "ん",
        english: "n" 
    },
]

function checkAnswers() {
    let score = 0;

    for(let x = 0; x < answers.length; x++) {
        let response = document.getElementById(`${answers[x].hiragana}`);

        if (response.value == "") {
            return null;
        }

        if (response.value == answers[x].english) {
            score += 1;
        }
    }
    
    document.getElementById("score").innerHTML = "Score: " + score + "/" + answers.length;
}

//What is a string(template) literal marked with ``//
let text = "";

for (let i = 0; i < answers.length; i++) {
    text += `<h1>What sounds does ${answers [i].hiragana} make in English?</h1>
    <input id="${answers[i].hiragana}" type= "text">
    `
}

document.getElementById("quiz").innerHTML = text + `<button onclick="checkAnswers()">Submit</button>`;