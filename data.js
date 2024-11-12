// 都道府県リスト
const prefectures = [
    {kName:"北海道", hName:"ほっかいどう"},
    {kName:"青森県", hName:"あおもりけん"},
    {kName:"岩手県", hName:"いわてけん"},
    {kName:"宮城県", hName:"みやぎけん"},
    {kName:"秋田県", hName:"あきたけん"},
    {kName:"山形県", hName:"やまがたけん"},
    {kName:"福島県", hName:"ふくしまけん"},
    {kName:"茨城県", hName:"いばらきけん"},
    {kName:"栃木県", hName:"とちぎけん"},
    {kName:"群馬県", hName:"ぐんまけん"},
    {kName:"埼玉県", hName:"さいたまけん"},
    {kName:"千葉県", hName:"ちばけん"},
    {kName:"東京都", hName:"とうきょうと"},
    {kName:"神奈川県", hName:"かながわけん"},
    {kName:"新潟県", hName:"にいがたけん"},
    {kName:"富山県", hName:"とやまけん"},
    {kName:"石川県", hName:"いしかわけん"},
    {kName:"福井県", hName:"ふくいけん"},
    {kName:"山梨県", hName:"やまなしけん"},
    {kName:"長野県", hName:"ながのけん"},
    {kName:"岐阜県", hName:"ぎふけん"},
    {kName:"静岡県", hName:"しずおかけん"},
    {kName:"愛知県", hName:"あいちけん"},
    {kName:"三重県", hName:"みえけん"},
    {kName:"滋賀県", hName:"しがけん"},
    {kName:"京都府", hName:"きょうとふ"},
    {kName:"大阪府", hName:"おおさかふ"},
    {kName:"兵庫県", hName:"ひょうごけん"},
    {kName:"奈良県", hName:"ならけん"},
    {kName:"和歌山県", hName:"わかやまけん"},
    {kName:"鳥取県", hName:"とっとりけん"},
    {kName:"島根県", hName:"しまねけん"},
    {kName:"岡山県", hName:"おかやまけん"},
    {kName:"広島県", hName:"ひろしまけん"},
    {kName:"山口県", hName:"やまぐちけん"},
    {kName:"徳島県", hName:"とくしまけん"},
    {kName:"香川県", hName:"かがわけん"},
    {kName:"愛媛県", hName:"えひめけん"},
    {kName:"高知県", hName:"こうちけん"},
    {kName:"福岡県", hName:"ふくおかけん"},
    {kName:"佐賀県", hName:"さがけん"},
    {kName:"長崎県", hName:"ながさきけん"},
    {kName:"熊本県", hName:"くまもとけん"},
    {kName:"大分県", hName:"おおいたけん"},
    {kName:"宮崎県", hName:"みやざきけん"},
    {kName:"鹿児島県", hName:"かごしまけん"},
    {kName:"沖縄県", hName:"おきなわけん"}
];

const searchBox = document.querySelector("#searchBox");
const ul = document.querySelector("ul");

//初期表示
init();

//検索起動
searchBox.addEventListener("input", search);

function init(){
    ul.innerHTML = "";
    for(let i = 0; i < prefectures.length; i++){
        ul.innerHTML += `<li>${prefectures[i].kName}</li>`
    }
}

// 検索処理
function search(){
    const target = searchBox.value;
    ul.innerHTML = "";
    let i = target.length;
    for (let j = 0; j < prefectures.length; j++) {
        if (target.slice(0,i) === prefectures[j].kName.slice(0,i) || target.slice(0,i) === prefectures[j].hName.slice(0,i)) {
            // 入力値と一致している都道府県を出力
            ul.innerHTML += `<li>${prefectures[j].kName}</li>`
        }
    }
}