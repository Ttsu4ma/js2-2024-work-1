import './style.css';

const champions = [
  { name: "アーゴット" },
  { name: "アーリ" },
  { name: "エズリアル" },
  { name: "ダリウス" },
  { name: "アッシュ" },
];

const selectedChampions = [];

// チャンピオン一覧をボタンとして生成
document.querySelector('#champion-buttons').innerHTML = champions
  .map((champion, index) => `<button class="champion-button" data-index="${index}">${champion.name}</button>`)
  .join('');

// ボタンをクリックした際の処理を設定
document.querySelectorAll('.champion-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    const index = event.target.getAttribute('data-index');
    const champion = champions[index];

    // チャンピオンを追加（最大8体まで）
    if (selectedChampions.length < 8) {
      selectedChampions.push(champion);
      updateTeam();
    } else {
      alert("チームは最大8体までです！");
    }
  });
});

// チームの表示を更新
function updateTeam() {
  document.querySelector('#selected-champions').innerHTML = selectedChampions
    .map((champion) => `<li>${champion.name}</li>`)
    .join('');
}