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

//同じような処理が続いたので、変数、定数にまとめる  $があることで、HTMLのオブジェクトが入っていると理解できる
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//定数の文字列をHTMLに反映　　index.htmlから取ってくる
//関数で囲む
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz;
    //$buttonが何回も繰り返されていたので、リファクタリング
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        //命令
        $button[buttonIndex].textContent = answers[buttonIndex];
        buttonIndex++;
    }
} 
setupQuiz();

const clickHandler = (e) => {
    if(correct === e.target.textContent){
        window.alert('正解‼︎');
    } else {
        window.alert('不正解‼︎');
    }
};

//ボタンをクリックしたら正誤判定が出る　eはイベントオブジェクト　　イベントは色々な情報を持っている
let handleIndex = 0;
while(handleIndex < buttonLength){
    $button[handleIndex].addEventListener('click',(e) => {
        clickHandler(e);
    });
    handleIndex++;
}
