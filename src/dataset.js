const defaultDataset = {
    "init": {
        answers: [
            {content: "仕事を依頼したい", nextId: "job_offer"},
            {content: "エンジニアのキャリアについて相談したい", nextId: "consultant"},
            {content: "プログラミングの魅力について教えてほしい！", nextId: "community"},
            {content: "お付き合いしたい", nextId: "dating"},
        ],
        question: "こんにちは！山野涼晴へのご用件はなんでしょうか？",
    },
    "job_offer": {
        answers: [
            {content: "Webサイトを制作してほしい", nextId: "website"},
            {content: "Webアプリを開発してほしい", nextId: "webapp"},
            {content: "自動化ツールを作ってほしい", nextId: "automation_tool"},
            {content: "その他", nextId: "other_jobs"}
        ],
        question: "どのようなお仕事でしょうか？",
    },
    "website": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webサイト細作についてですね。コチラからお問い合わせできます。",
    },
    "webapp": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webアプリ開発についてですね。コチラからお問い合わせできます。",
    },
    "automation_tool": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "自動化ツール開発についてですね。コチラからお問い合わせできます。",
    },
    "other_jobs": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "その他についてですね。コチラからお問い合わせできます。",
    },
    "consultant": {
        answers: [
            {content: "YouTubeで動画を見る", nextId: "https://www.youtube.com/channel/UC-bOAxx-YOsviSmqh8COR0w"},
            {content: "プログラミングの魅力について教えてほしい！", nextId: "community"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "エンジニアのキャリアについてですね！参考になるYoutube動画を載せさせていただきます！",
    },
    "community": {
        answers: [
            {content: "そもそも学習言語は何を学べばいいのか教えてほしい！", nextId: "community_activity"},
            {content: "参考にした動画を教えてほしい！！", nextId: "https://www.youtube.com/watch?v=KILGst2OqoE&list=PLwM1-TnN_NN4mZwSTz5HB7iOJHMQ7SGpv&index=3"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "プログラミングの魅力についてですね！プログラミングは難しいからこそ価値があるという考え方で取り組むと非常に楽しいです！",
    },
    "community_activity": {
        answers: [
            {content: "学習言語の具体例をもっと知りたい！", nextId: "https://www.youtube.com/watch?v=HUZlOEbSP6c"},
            {content: "HTML&CSSの参考動画を教えてほしい！", nextId: "https://prog-8.com/courses/html"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "学習言語についてですね！プログラミングの学習言語はやりたいと思うことが良いと思いますが、はじめはHTML&CSSがおすすめです！",
    },
    "dating": {
        answers: [
            {content: "DMする", nextId: "https://twitter.com/ryoseiyamano"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "まずは一緒にランチでもいかがですか？DMしてください😘",
    },
}

export default defaultDataset