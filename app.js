const quiz = [
    {
        question: 'ルフィの悪魔の実は?',
        answers: [
            'ゴムゴム',
            'バラバラ',
            'メラメラ',
            'ピカピカ',
            'ハナハナ',
            'ゴロゴロ'
        ],
        correct: 'ゴムゴム'
    },{ 
        question: '桜木花道の出身中学は?',
        answers: [
            '北村中',
            '和光中',
            '武石中',
            '富ケ丘中',
            '大岡中',
            '竹中中'
        ],
        correct:'和光中'
    },{
        question: '1998年に64で発売されたゼルダの伝説のゲームのタイトル名は?',
        answers: [
            'ムジュラの仮面',
            'トワイライトプリンセス',
            '時のオカリナ',
            '風のタクト',
            'スカイウォードソード',
            '神々のトライフォース'
        ],
        correct:'時のオカリナ'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//同じような処理が続いたので、変数、定数にまとめる  $があることで、HTMLのオブジェクトが入っていると理解できる
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//定数の文字列をHTMLに反映　　index.htmlから取ってくる
//関数で囲む
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    //$buttonが何回も繰り返されていたので、リファクタリング
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        //命令
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
} 
setupQuiz();//クイズの問題文や選択肢選択肢の書き換えをやっている命令

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解‼︎');
        score++;
    } else {
        window.alert('不正解‼︎');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        //問題数があればここを実行
        setupQuiz();
    } else {
        //問題数がなければここを実行
        window.alert('終了‼︎あなたの正解数は' + score + '/' + quizLength + 'です‼︎');
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
