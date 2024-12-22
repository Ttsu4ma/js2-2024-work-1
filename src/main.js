import './style.css';
//チャンピオン一覧
const champions = [
  { name: "アムム" },
  { name: "イレリア" },
  { name: "ザイラ" },
  { name: "シンジド" },
  { name: "ステブ" },
  { name: "ガレン" },
  { name: "トランドル" },
  { name: "ドレイブン" },
  { name: "パウダー" },
  { name: "マディー" },
  { name: "モルガナ" },
  { name: "ラックス" },
  { name: "ヴァイオレット" },
  { name: "ヴェックス" },
  { name: "アカリ" },
  { name: "アーゴット" },
  { name: "カミール" },
  { name: "ジグス" },
  { name: "セト" },
  { name: "ゼリ" },
  { name: "トリスターナ" },
  { name: "ノクターン" },
  { name: "ブラッドミア" },
  { name: "レオナ" },
  { name: "レナータ" },
  { name: "レル" },
  { name: "ヴァンダー" },
  { name: "エズリアル" },
  { name: "カシオペア" },
  { name: "ガングプランク" },
  { name: "コグ＝マウ" },
  { name: "スウェイン" },
  { name: "スカー" },
  { name: "スミーチ" },
  { name: "TF" },
  { name: "ナミ" },
  { name: "ヌヌ" },
  { name: "プリッツ" },
  { name: "レニー" },
  { name: "ロリス" },
  { name: "アンベッサ" },
  { name: "イラオイ" },
  { name: "エコー" },
  { name: "エリス" },
  { name: "ガレン" },
  { name: "コーキ" },
  { name: "シルコ" },
  { name: "ゾーイ" },
  { name: "ツイッチ" },
  { name: "ムンド" },
  { name: "ハイマ―" },
  { name: "ヴァイ" },
  { name: "ケイトリン" },
  { name: "ジェイス" },
  { name: "ジンクス" },
  { name: "セヴィカ" },
  { name: "マルザハール" },
  { name: "モルデカイザー" },
  { name: "ランブル" },
  { name: "ルブラン" },
  { name: "ビクター" },
  { name: "メル" },
  { name: "ワーウィック" }
];

const selectedChampions = [];

// ボタンを生成する場所を取得
const buttonContainer = document.querySelector('#champion-buttons');

// ボタン生成
champions.forEach((champion, index) => {
  const button = document.createElement('button');
  button.classList.add('champion-button');
  button.textContent = champion.name;
  button.setAttribute('data-index', index);

  // ボタンのクリックイベントを設定
  button.addEventListener('click', () => {
    if (selectedChampions.length < 10) { // 上限を10体に変更
      selectedChampions.push(champion);
      updateTeam();
    } else {
      alert("チームは最大10体までです！");
    }
  });

  // ボタンをコンテナに追加
  buttonContainer.appendChild(button);
});

// チームを更新する関数
function updateTeam() {
  const teamContainer = document.querySelector('#selected-champions');
  teamContainer.innerHTML = selectedChampions
    .map((champion) => `<li>${champion.name}</li>`)
    .join('');
}

// クリアボタンの処理を追加
const clearButton = document.querySelector('#clear-team');
clearButton.addEventListener('click', () => {
  selectedChampions.length = 0; // チームを空にする
  updateTeam(); // チーム表示を更新
});