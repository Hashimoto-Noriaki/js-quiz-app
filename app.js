const quiz = 'ルフィの悪魔の実は?';
const answers = [
    'ゴムゴム',
    'バラバラ',
    'メラメラ',
    'ピカピカ',
    'ハナハナ',
    'ゴロゴロ'
];
const correct = 'ゴムゴム';

//index.htmlから取ってくる
console.log(document.getElementById('js-question'));

//divがたくさんあるので、ふさわしくない
// document.getElementByTagName('div');
// console.log(document.getElementByTagName('div'));