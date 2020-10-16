const defaultDataset = {
    "init": {
        answers: [
            {content: "仕事を依頼したい", nextId: "job_offer"},
            {content: "Kyoheiさんの好きな食べ物が知りたい", nextId: "consultant"},
            {content: "Kyoheiさん好きな飲み物が知りたい", nextId: "community"},
            {content: "お付き合いしたい", nextId: "dating"},
        ],
        question: "こんにちは！エンジニアチームリーダーのKyoheiです。どのようなご用件ですか？",
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
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webサイト細作についてですね。トップページの　✉️　からお問い合わせできます。",
    },
    "webapp": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Webアプリ開発についてですね。トップページの　✉️　からお問い合わせできます。",
    },
    "automation_tool": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "自動化ツール開発についてですね。トップページの　✉️　からお問い合わせできます。",
    },
    "other_jobs": {
        answers: [
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "その他についてですね。トップページの　✉️　からお問い合わせできます。",
    },
    "consultant": {
        answers: [
            {content: "Kyoheiさんとハンバーグ食べに行きたいです", nextId: "hamburger"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "私はハンバーグが大好きです。ハンバーグなら朝昼晩食べても苦じゃないです。",
    },
    "community": {
        answers: [
            {content: "Kyoheiさんとコーラ飲みにいきたいです。", nextId: "community_activity"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "私はコーラが好きです。好きすぎて朝昼晩飲んでいます。",
    },
    "community_activity": {
        answers: [
            {content: "DMする", nextId: "https://twitter.com/davidkyohei"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "ぜひ行きましょう！私のオススメはジョイフルです。ドリンクバーで飲み放題です。DM待ってます😘",
    },
    
    "hamburger": {
        answers: [
            {content: "DMする", nextId: "https://twitter.com/davidkyohei"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "ぜひ行きましょう！私のオススメはジョイフルです。とても安価でハンバーグが食べれます。DM待ってます😘",
    },
    

    "dating": {
        answers: [
            {content: "DMする", nextId: "https://twitter.com/davidkyohei"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "まずは一緒にランチでもいかがですか？DM待ってます😘",
    },
}

export default defaultDataset