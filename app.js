const SULTANS = [
  { id: "mahmut", key: "1", name: "II. Mahmut", color: "#0f766e" },
  { id: "abdulmecit", key: "2", name: "Sultan Abdülmecit", color: "#3155a4" },
  { id: "abdulaziz", key: "3", name: "Sultan Abdülaziz", color: "#c47714" },
  { id: "abdulhamit", key: "4", name: "Sultan Abdülhamit", color: "#b4233a" },
];

const REFORMS = [
  { id: 1, sultan: "mahmut", text: "Alemdar Mustafa Paşa da ülke içinde etkin bir konuma gelen âyanları padişahla görüşmesi için İstanbul’a davet etmiştir." },
  { id: 2, sultan: "mahmut", text: "Yapılan görüşmeler sonucunda tarihe “Sened-i İttifak” olarak geçen bir belge imzalanmıştır." },
  { id: 3, sultan: "mahmut", text: "Ayanlığı kaldırmıştır. Köylere muhtar, eyaletlere müşir atamıştır." },
  { id: 4, sultan: "mahmut", text: "Tımar sistemini kaldırmıştır." },
  { id: 5, sultan: "mahmut", text: "Müsadere sistemini kaldırmıştır." },
  { id: 6, sultan: "mahmut", text: "Devlet dairelerine resmini astırmıştır. (Tasvir-i Hümayun)" },
  { id: 7, sultan: "mahmut", text: "Pasaport uygulamasına geçilmiştir." },
  { id: 8, sultan: "mahmut", text: "İstanbul’a gelenler için Mürur Tezkeresi düzenlenmiştir." },
  { id: 9, sultan: "mahmut", text: "İlk resmî gazete olan Takvim-i Vekâyi çıkarılmıştır." },
  { id: 10, sultan: "mahmut", text: "Divan-ı Hümayun kaldırılmış, yerine Heyet-i Vükela (Bakanlar Kurulu) kurulmuştur." },
  { id: 11, sultan: "mahmut", text: "Reisülküttap yerine Hariciye Nezareti getirilmiştir." },
  { id: 12, sultan: "mahmut", text: "Şeyhülislamlık yerine Babımeşihat Dairesi getirilmiştir." },
  { id: 13, sultan: "mahmut", text: "Sekban-ı Cedit ve Eşkinci Ocağı kurulmuştur." },
  { id: 14, sultan: "mahmut", text: "Adalete önem verdiği için “Adli” unvanı verilmiştir." },
  { id: 15, sultan: "mahmut", text: "1826’da Yeniçeri Ocağı kaldırılmıştır. (Vakayı Hayriye) Yerine Asakir-i Mansure-i Muhammediye ordusu kurulmuştur." },
  { id: 16, sultan: "mahmut", text: "Asakir-i Mansure-i Muhammediye yerine Asakir-i Nizamiye ordusu kurulmuştur." },
  { id: 17, sultan: "mahmut", text: "Askerlik çağına gelmiş kişileri tespit etmek ve vergi almak amacıyla ilk kez nüfus sayımı yapılmıştır." },
  { id: 18, sultan: "mahmut", text: "Mektebi Şahane (Harbiye) ve Mektebi Tıbbiye açılmıştır." },
  { id: 19, sultan: "mahmut", text: "Köylerin ve kasabaların güvenliğinin sağlanması amacı ile Redif Birlikleri kurulmuştur." },
  { id: 20, sultan: "mahmut", text: "Avrupa’ya eğitim amaçlı ilk öğrenciler gönderilmiştir." },
  { id: 21, sultan: "mahmut", text: "Bulaşıcı hastalıkların yayılmasının önlenmesi amacıyla karantina uygulamasına geçilmiştir." },
  { id: 22, sultan: "mahmut", text: "İlköğretimi zorunlu hâle getirmiştir. (Sadece İstanbul’da)" },
  { id: 23, sultan: "mahmut", text: "Mehterhane kapatıldı yerine Donizetti Paşa tarafından Mızıkayı Hümayun kurulmuştur." },
  { id: 24, sultan: "mahmut", text: "Yabancı dil bilen Müslüman diplomat yetiştirmek amacıyla Tercüme Odaları kurulmuştur." },
  { id: 25, sultan: "abdulmecit", text: "Londra Konferansı’nda etkili olabilmek için Tanzimat Fermanı ilan edilmiştir." },
  { id: 26, sultan: "abdulmecit", text: "Paris Barış kararlarında etkili olabilmek için Avrupa’nın baskısıyla Islahat Fermanı ilan edilmiştir." },
  { id: 27, sultan: "mahmut", text: "Osmanlıcılık politikası başlatılmıştır." },
  { id: 28, sultan: "abdulmecit", text: "Encümen-i Daniş kurulmuştur. (Fen kitaplarının tercümesini yapmıştır. Redhouse ve Hammer burada çalışmalar yapmıştır.)" },
  { id: 29, sultan: "abdulmecit", text: "Meclis-i Maarif-i Umumiye Nezareti (MEB) kurulmuştur." },
  { id: 30, sultan: "abdulmecit", text: "Jandarma, Polis ve Posta teşkilatları kurulmuştur." },
  { id: 31, sultan: "abdulmecit", text: "İlk defa İzmir - Aydın arasına demir yolu yapılmıştır." },
  { id: 32, sultan: "abdulmecit", text: "İlk defa telgraf hatları çekilmiştir." },
  { id: 33, sultan: "abdulmecit", text: "Kırım Savaşı sırasında İngiltere’den ilk defa dış borç alınmıştır." },
  { id: 34, sultan: "abdulmecit", text: "Bank-ı Dersaadet adında ilk banka açılmıştır." },
  { id: 35, sultan: "abdulmecit", text: "Bank-ı Osmani adında ilk defa yabancı sermayeli İngiliz bankası açılmıştır. Bu bankaya para basma yetkisi verilmiştir." },
  { id: 36, sultan: "abdulmecit", text: "Şinasi ve Agâh Efendi tarafından ilk özel gazete olan Tercüman-ı Ahval çıkarılmıştır." },
  { id: 37, sultan: "abdulmecit", text: "Güllü Agop ilk Osmanlı modern tiyatrosunu kurmuştur." },
  { id: 38, sultan: "abdulaziz", text: "1868’de Divan-ı Ahkâm-ı Adliye (Yargıtay) ve Şûra-yı Devlet (Danıştay) açılmıştır." },
  { id: 39, sultan: "abdulaziz", text: "Ahmet Cevdet Paşa tarafından hazırlanan Mecelle yürürlüğe girmiştir." },
  { id: 40, sultan: "abdulaziz", text: "Dünyanın üçüncü büyük deniz filosu oluşturulmuştur." },
  { id: 41, sultan: "abdulaziz", text: "İlk defa bir padişah seyahat amacıyla yurt dışına çıkmıştır." },
  { id: 42, sultan: "abdulhamit", text: "Genç Osmanlılar (Jön Türkler) ortaya çıkmıştır." },
  { id: 43, sultan: "abdulhamit", text: "Birinci Meşrutiyet ile çift parlamentolu dönem ortaya çıkmıştır." },
  { id: 44, sultan: "abdulhamit", text: "İkinci Meşrutiyet ortaya çıkmıştır." },
  { id: 45, sultan: "abdulhamit", text: "1876 Kanunuesasi ortaya çıkmıştır." },
  { id: 46, sultan: "abdulhamit", text: "1909 Kanunuesasi ortaya çıkmıştır." },
  { id: 47, sultan: "abdulhamit", text: "1863’te kurulan Memleket Sandıkları 1888’de Mithat Paşa’nın gayretleri ile Ziraat Bankasına dönüştürülmüştür." },
  { id: 48, sultan: "abdulhamit", text: "Tercüman-ı Hakikat adında gazete çıkarılmıştır." },
  { id: 49, sultan: "abdulhamit", text: "İlk defa müze açılmıştır. (Müzeyi Hümayun)" },
  { id: 50, sultan: "abdulhamit", text: "Osman Hamdi Bey tarafından “Sanayi-i Nefise Mektebi” açılmıştır." },
  { id: 51, sultan: "abdulhamit", text: "II. Wilhelm’in başlattığı 3B projenin yapımına başlanmıştır. (Berlin - Boğazlar - Bağdat Demir Yolu Projesi)" },
  { id: 52, sultan: "abdulhamit", text: "1881’de Muharrem Kararnamesi yayımlanarak Osmanlı Devleti resmen iflas ettiğini açıklamıştır. Bunun üzerine alacaklı devletler “Düyun-u Umumiye İdaresi”ni kurmuşlardır." },
  { id: 53, sultan: "abdulhamit", text: "1908 yılında yapılan Reval Görüşmeleri ile Osmanlı Devleti kâğıt üzerinde parçalanmıştır. Bunun üzerine Selânik ve Makedonya’da II. Abdülhamit’e karşı olarak kurulan İttihat ve Terakki ikinci kez Meşrutiyet’in ilan edilmesi amacıyla isyan başlatmıştır." },
  { id: 54, sultan: "abdulhamit", text: "İttihat ve Terakki Cemiyetinin etkili olduğu bu dönemde Serbesti Gazetesi’nin başyazarı Hasan Fehmi öldürülmüştür." },
  { id: 55, sultan: "abdulhamit", text: "13 Nisan 1909 tarihinde (31 Mart) başlayan bu isyanı Selânik’ten gelen Hareket Ordusu bastırmıştır." },
  { id: 56, sultan: "abdulhamit", text: "Mustafa Kemal’in yüzbaşı olduğu Hareket Ordusu ortaya çıkmıştır." },
  { id: 57, sultan: "abdulhamit", text: "Bulgaristan bağımsızlığını ilan etmiştir." },
  { id: 58, sultan: "abdulhamit", text: "Girit, Yunanistan’a bağlanmıştır." },
  { id: 59, sultan: "abdulhamit", text: "Bosna - Hersek, Avusturya - Macaristan İmparatorluğu tarafından ilhak edilmiştir." },
  { id: 60, sultan: "abdulmecit", text: "Kuleli Vakası (padişahı devirme girişimi) yaşanmıştır." },
  { id: 61, sultan: "abdulaziz", text: "Meşrutiyeti ilan etmediği için tahttan indirilmiştir." },
  { id: 62, sultan: "abdulhamit", text: "Çok okul yaptığı için “Maarifperver” unvanı almıştır." },
  { id: 63, sultan: "abdulhamit", text: "Ermeni olayları sonucu yetim kalan çocuklar için Darülhayr-ı Âli kurumu açılmıştır." },
];

const state = {
  remaining: [],
  currentId: null,
  selectedId: null,
  placed: new Map(),
  checked: false,
};

const els = {
  columns: document.querySelector("#columns"),
  choiceBar: document.querySelector("#choiceBar"),
  currentCardSlot: document.querySelector("#currentCardSlot"),
  drawButton: document.querySelector("#drawButton"),
  finishButton: document.querySelector("#finishButton"),
  resetButton: document.querySelector("#resetButton"),
  placedCount: document.querySelector("#placedCount"),
  totalCount: document.querySelector("#totalCount"),
  statusText: document.querySelector("#statusText"),
  resultsPanel: document.querySelector("#resultsPanel"),
};

const reformById = new Map(REFORMS.map((reform) => [reform.id, reform]));
const sultanById = new Map(SULTANS.map((sultan) => [sultan.id, sultan]));

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function createColumn(sultan) {
  const column = document.createElement("article");
  column.className = "sultan-column";
  column.style.setProperty("--column-color", sultan.color);

  const title = document.createElement("div");
  title.className = "column-title";
  title.innerHTML = `
    <div class="sultan-heading">
      <span class="key-badge">${sultan.key}</span>
      <h2>${sultan.name}</h2>
    </div>
  `;

  const zone = document.createElement("div");
  zone.className = "drop-zone";
  zone.dataset.sultan = sultan.id;

  column.addEventListener("click", (event) => {
    if (event.target.closest(".reform-card")) {
      return;
    }
    assignSelectedToSultan(sultan.id);
  });

  column.append(title, zone);
  return column;
}

function createChoiceButton(sultan) {
  const button = document.createElement("button");
  button.className = "choice-button";
  button.type = "button";
  button.dataset.sultan = sultan.id;
  button.style.setProperty("--choice-color", sultan.color);
  button.innerHTML = `
    <span class="choice-key">${sultan.key}</span>
    <span>${sultan.name}</span>
  `;
  button.addEventListener("click", () => assignSelectedToSultan(sultan.id));
  return button;
}

function createCard(reform) {
  const card = document.createElement("div");
  card.className = "reform-card";
  card.dataset.id = String(reform.id);
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", reform.text);
  card.setAttribute("aria-pressed", "false");

  const text = document.createElement("p");
  text.className = "reform-text";
  text.textContent = reform.text;

  card.append(text);
  card.addEventListener("click", (event) => {
    event.stopPropagation();
    selectCard(card);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectCard(card);
    }
  });
  return card;
}

function renderColumns() {
  els.columns.innerHTML = "";
  SULTANS.forEach((sultan) => els.columns.append(createColumn(sultan)));
}

function renderChoices() {
  els.choiceBar.innerHTML = "";
  SULTANS.forEach((sultan) => els.choiceBar.append(createChoiceButton(sultan)));
}

function setCurrentEmpty() {
  els.currentCardSlot.innerHTML = '<p class="empty-state">Kart bekliyor</p>';
}

function drawReform() {
  if (state.currentId !== null || state.remaining.length === 0 || state.checked) {
    return;
  }

  const nextId = state.remaining.pop();
  state.currentId = nextId;
  els.currentCardSlot.innerHTML = "";
  const card = createCard(reformById.get(nextId));
  els.currentCardSlot.append(card);
  selectCard(card, { preventScroll: true });
  updateUi();
}

function selectCard(card, options = {}) {
  if (state.checked) {
    return;
  }

  document.querySelectorAll(".reform-card.is-selected").forEach((selectedCard) => {
    selectedCard.classList.remove("is-selected");
    selectedCard.setAttribute("aria-pressed", "false");
  });

  card.classList.add("is-selected");
  card.setAttribute("aria-pressed", "true");
  state.selectedId = Number(card.dataset.id);
  card.focus({ preventScroll: Boolean(options.preventScroll) });
  updateUi();
}

function getSelectedCard() {
  const selectedId = state.selectedId ?? state.currentId;
  if (selectedId === null) {
    return null;
  }
  return document.querySelector(`.reform-card[data-id="${selectedId}"]`);
}

function assignSelectedToSultan(sultanId) {
  if (state.checked) {
    return;
  }

  const card = getSelectedCard();
  const zone = document.querySelector(`.drop-zone[data-sultan="${sultanId}"]`);
  if (!card || !zone) {
    return;
  }

  moveCard(card, zone);
}

function moveCard(card, zone) {
  const id = Number(card.dataset.id);
  const previousZone = card.closest(".drop-zone");
  const wasCurrentCard = state.currentId === id;

  removeResultNote(card);
  card.classList.remove("correct", "wrong");
  card.classList.remove("is-selected");
  card.setAttribute("aria-pressed", "false");
  zone.append(card);
  state.placed.set(id, zone.dataset.sultan);

  state.selectedId = null;

  if (wasCurrentCard) {
    state.currentId = null;
    setCurrentEmpty();
  }

  if (wasCurrentCard && state.remaining.length > 0 && !state.checked) {
    drawReform();
    return;
  }

  if (previousZone !== zone) {
    updateUi();
  }
}

function updateUi() {
  const placedCount = state.placed.size;
  const totalCount = REFORMS.length;
  const allPlaced = placedCount === totalCount && state.currentId === null;

  els.placedCount.textContent = String(placedCount);
  els.totalCount.textContent = String(totalCount);
  els.drawButton.disabled = state.currentId !== null || state.remaining.length === 0 || state.checked;
  els.finishButton.disabled = !allPlaced || state.checked;
  const hasAssignableCard = (state.selectedId !== null || state.currentId !== null) && !state.checked;
  els.choiceBar.querySelectorAll(".choice-button").forEach((button) => {
    button.disabled = !hasAssignableCard;
  });

  if (state.checked) {
    els.statusText.textContent = "Sonuçlar işaretlendi.";
  } else if (allPlaced) {
    els.statusText.textContent = "Tüm ıslahatlar yerleştirildi.";
  } else if (state.selectedId !== null) {
    els.statusText.textContent = "Kart seçili.";
  } else if (state.currentId !== null) {
    els.statusText.textContent = "Kart hazır.";
  } else {
    els.statusText.textContent = `${state.remaining.length} ıslahat kaldı.`;
  }

}

function removeResultNote(card) {
  card.querySelector(".result-note")?.remove();
}

function finishRound() {
  if (state.placed.size !== REFORMS.length || state.currentId !== null) {
    updateUi();
    return;
  }

  let correctCount = 0;
  const perSultan = new Map(SULTANS.map((sultan) => [sultan.id, { correct: 0, total: 0 }]));
  state.selectedId = null;

  document.querySelectorAll(".drop-zone .reform-card").forEach((card) => {
    const reform = reformById.get(Number(card.dataset.id));
    const chosenSultan = card.closest(".drop-zone").dataset.sultan;
    const expectedSultan = reform.sultan;
    const stat = perSultan.get(expectedSultan);
    const isCorrect = chosenSultan === expectedSultan;

    stat.total += 1;
    card.classList.remove("is-selected");
    card.setAttribute("aria-pressed", "false");
    card.classList.add(isCorrect ? "correct" : "wrong");
    removeResultNote(card);

    const note = document.createElement("div");
    note.className = "result-note";
    note.textContent = isCorrect ? "Doğru" : `Cevap: ${sultanById.get(expectedSultan).name}`;
    card.append(note);

    if (isCorrect) {
      correctCount += 1;
      stat.correct += 1;
    }
  });

  state.checked = true;
  renderResults(correctCount, perSultan);
  updateUi();
}

function renderResults(correctCount, perSultan) {
  const totalCount = REFORMS.length;
  const stats = SULTANS.map((sultan) => {
    const stat = perSultan.get(sultan.id);
    return `
      <div class="result-stat">
        <strong>${sultan.name}</strong>
        <span>${stat.correct} / ${stat.total}</span>
      </div>
    `;
  }).join("");

  els.resultsPanel.hidden = false;
  els.resultsPanel.innerHTML = `
    <h2>Sonuç: ${correctCount} / ${totalCount}</h2>
    <div class="results-grid">${stats}</div>
  `;
}

function resetRound() {
  state.remaining = shuffle(REFORMS.map((reform) => reform.id));
  state.currentId = null;
  state.selectedId = null;
  state.placed.clear();
  state.checked = false;
  els.resultsPanel.hidden = true;
  els.resultsPanel.innerHTML = "";
  renderColumns();
  renderChoices();
  setCurrentEmpty();
  updateUi();
}

function handleKeyboardAssign(event) {
  if (!["1", "2", "3", "4"].includes(event.key)) {
    return;
  }

  const sultan = SULTANS.find((item) => item.key === event.key);
  if (!sultan) {
    return;
  }

  event.preventDefault();
  assignSelectedToSultan(sultan.id);
}

els.drawButton.addEventListener("click", drawReform);
els.finishButton.addEventListener("click", finishRound);
els.resetButton.addEventListener("click", resetRound);
document.addEventListener("keydown", handleKeyboardAssign);

resetRound();
