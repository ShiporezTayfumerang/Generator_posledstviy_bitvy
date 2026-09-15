document.addEventListener('DOMContentLoaded', function() {
    let Input = document.querySelector('input');
    let button = document.querySelector('button');
    let output = document.getElementById('output');
    let ScratchLevel = ['очень серьёзная','серьёзная','лёгкая']; 
    let BiteLevel = ['очень серьёзный','серьёзный','лёгкий'];
    let ScratchOrBiteOrIntact = ['царапина','укус','нет ран']
    let BodyParts = [
  'на кончике носа',
  'на правой щеке',
  'на левой щеке',
  'на подбородке',
  'на правом ухе',
  'на левом ухе',
  'на горле',
  'на правой стороне шеи',
  'на левой стороне шеи',
  'на задней части шеи',
  'на правом плече',
  'на левом плече',
  'на правом боку',
  'на левом боку',
  'на спине',
  'на груди',
  'на основании хвоста',
  'на кончике хвоста',
  'на лбу',
  'на правой передней лапе',
  'на левой передней лапе',
  'на правой задней лапе',
  'на левой задней лапе',
  'на подушечке правой передней лапы',
  'на подушечке левой передней лапы',
  'на подушечке правой задней лапы',
  'на подушечке левой задней лапы'
];

    function RandomF(Massiv){
        let RandomNumber = Math.floor(Math.random() * Massiv.length)
        console.log(Math.random(), Massiv.length);
        console.log(RandomNumber);
        return Massiv[RandomNumber];
    };

    button.addEventListener('click', function() {
        let TypeWound = RandomF(ScratchOrBiteOrIntact)
        
        if (TypeWound == 'царапина') {
           output.textContent = Input.value+' - '+RandomF(ScratchLevel)+' царапина '+RandomF(BodyParts);
        }
        if (TypeWound == 'укус') {
           output.textContent = Input.value+' - '+RandomF(BiteLevel)+' укус '+RandomF(BodyParts);
        }
        if (TypeWound == 'нет ран') {
           output.textContent = Input.value+' - '+'нет ран'
        }
    });
});