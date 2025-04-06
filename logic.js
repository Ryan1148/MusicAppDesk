let progArea = document.querySelector(".progress-area");
let progBar = document.querySelector(".progbar");
let current = document.querySelector(".current");
let mainAudioDuration = document.querySelector(".duration");
let prevBtn = document.querySelector(".prev");
let playPause = document.querySelector(".play");
let playPauseImg = document.querySelector(".play img");
let nextBtn = document.querySelector(".next");
let repeater = document.querySelector(".repeater");
let repeaterImg = document.querySelector(".repeater img");
let quequeBtn = document.querySelector(".queueMusic");
let cancelBtn = document.querySelector(".cancelBtn");
let musicList = document.querySelector(".musiclist");
let likeBtn = document.querySelector(".likeBtn");
let likeBtnImg = document.querySelector(".likeBtn img");
let moreInfoBtn = document.querySelector(".moreInfo");
let artCancelBtn = document.querySelector(".artCancel");
let artistCard = document.querySelector(".artist-card");
let queBackBtn = document.querySelector(".musicArea .backBtn");
let musicCardArea = document.querySelector(".musicArea");
let musicCard = document.querySelectorAll(".musicArea .card");
let musicCardSrc = document.querySelectorAll(".musicArea .card img");
let cardPlayBtn = document.querySelectorAll(".cardData .playBtn");
let currentPlaying = document.querySelector(".musicNavbar .title")

const musics = [
  {
    musicTag: "Shape of you",
    artistTag: "Ed Sheeran",
    musicCanvas: "C1",
    musicSrc: "M1",
    artistCanvas: "AC1",
    desc: 'Edward Christopher Sheeran MBE (born 17 February 1991) is an English singer-songwriter. Born in Halifax, West Yorkshire, and raised in Framlingham, Suffolk, he began writing songs around the age of eleven. In early 2011, Sheeran independently released the extended play No. 5 Collaborations Project. He signed with Asylum Records the same year.Sheeran debut album, + (Plus), was released in September 2011 and topped the UK Albums Chart. It contained his first hit single "The A Team". In 2012, Sheeran won the Brit Awards for Best British Male Solo Artist and British Breakthrough Act. Sheeran second studio album, (Multiply), topped charts around the world upon its release in June 2014. It was named the second-best-selling album worldwide of 2015. In the same year, x won Album of the Year at the 2015 Brit Awards, and he received the Ivor Novello Award for Songwriter of the Year from the British Academy of Songwriters, Composers and Authors. A single from,"Thinking Out Loud", earned him the 2016 Grammy Awards for Song of the Year and Best Pop Solo Performance.',
  },
  {
    musicTag: "Hotline Bling",
    artistTag: "Drake",
    musicCanvas: "C2",
    musicSrc: "M2",
    artistCanvas: "AC2",
    desc: 'Aubrey Drake Graham (born October 24, 1986) is a Canadian rapper, singer and actor. An influential figure in popular music, he has been credited with popularizing R&B sensibilities in hip hop artists. Gaining recognition by starring as Jimmy Brooks in the CTV teen drama series Degrassi: The Next Generation (2001-2008), Drake began his recording career in 2006 with the release of his debut mixtape, Room for Improvement (2006). He followed up with the mixtapes Comeback Season (2007) and So Far Gone (2009) before signing with Young Money Entertainment.[4]Drake first three albums, Thank Me Later (2010), Take Care (2011) and Nothing Was the Same (2013) were each met with commercial success, debuting atop the Billboard 200 and spawning the Billboard Hot 100-top ten singles "Find Your Love", "Take Care" (featuring Rihanna), "Started from the Bottom", and "Hold On, We are Going Home" (featuring Majid Jordan).[5] Drake  fourth album Views (2016) peaked the Billboard 200 for 13 non-consecutive weeks and spawned the singles "Hotline Bling" and his first US number one as a lead artist, "One Dance" (featuring WizKid and Kyla); the latter was credited for popularizing dancehall and Afrobeats in contemporary pop music.',
  },
  {
    musicTag: "Mi Gente",
    artistTag: "j Balvin",
    musicCanvas: "C3",
    musicSrc: "M3",
    artistCanvas: "AC3",
    desc: 'José Álvaro Osorio Balvín (born 7 May 1985), known professionally as J Balvin, is a Colombian singer. He has been referred to as the "Prince of Reggaeton" (from Spanish: "Príncipe del Reguetón"),and is one of the best-selling Latin artists, with over 35 million records sold worldwide.Balvin was born in Medellín. At age 17, he moved to the United States to learn English, where he lived in both Oklahoma and New York. He then returned to Medellín and gained popularity performing at clubs in the city.Throughout his career, Balvin has won eleven Billboard Latin Music Awards, six Latin Grammy Awards, five MTV Video Music Awards and seven Latin American Music Awards and received four Grammy Award nominations. In 2017, the BMI Latin Awards named him the Contemporary Latin Songwriter of the Year for his contribution in the Latin music industry, and has won the first Global Icon Award given by Lo Nuestro Awards, in recognition of his contribution to spread Latin music worldwide.He became the first Latino to headline world-musical events such as Coachella, Tomorrowland, and Lollapalooza.The Guinness World Records acknowledged him as a "leader of a second-generation reggaeton revolution".',
  },
  {
    musicTag: "Selfish Love",
    artistTag: "Selena Gomez",
    musicCanvas: "C4",
    musicSrc: "M4",
    artistCanvas: "AC4",
    desc: "Selena Marie Gomez (born July 22, 1992) is an American singer, actress, businesswoman, and producer. Gomez began her career as a child actress, starring on the children's television series Barney & Friends (2002-2004).",
  },
  {
    musicTag: "Heat Waves",
    artistTag: "Glass Animals",
    musicCanvas: "C5",
    musicSrc: "M5",
    artistCanvas: "AC5",
    desc: 'Glass Animals are an English indie rock band formed in Oxford in 2010. The bands line-up consists of Dave Bayley (vocals, guitar, keyboards, drums, songwriting), Drew MacFarlane (guitar, keyboards, backing vocals), Edmund Irwin-Singer (bass, keyboards, backing vocals), and Joe Seaward (drums).Their first album, Zaba (2014), spawned the single "Gooey", which was eventually certified platinum in the U.S. Their second full album, How to Be a Human Being, received positive reviews and won in two categories at the 2018 MPG Awards for UK Album of the Year and Self Producing Artist of the Year, as well as a spot on the Mercury Prize shortlist. The third, Dreamland, peaked at number two on the UK Albums Chart and number seven on the US Billboard 200.The band is best known for their biggest hit single "Heat Waves", which went viral on TikTok. It reached number one in Australia in February 2021 and was voted number one on the Triple J Hottest 100 of 2020. The song surpassed two billion streams on Spotify by September 2022,and eventually reached number one on the U.S. Billboard Hot 100 and number five on the UK Singles Chart. At the 2022 Brit Awards, the band were nominated for two Brit Awards (Best British Alternative/Rock Act and "Heat Waves" for Best British Single).They received their first Grammy nomination in the Best New Artist category at the 2022 Grammy Awards.',
  },
  {
    musicTag: "Hymn for the weekend",
    artistTag: "Coldplay",
    musicCanvas: "C6",
    musicSrc: "M6",
    artistCanvas: "AC6",
    desc: 'Coldplay are a British rock band formed in London in 1997, consisting of vocalist and pianist Chris Martin, lead guitarist Jonny Buckland, bassist Guy Berryman, drummer and percussionist Will Champion, and manager Phil Harvey.They are best known for their live performances,having also impacted popular culture with their artistry, advocacy and achievements.The members of the band initially met at University College London, calling themselves Big Fat Noises and changing to Starfish, before settling on the current name. After releasing Safety (1998) independently, Coldplay signed with Parlophone in 1999 and wrote their debut album, Parachutes (2000). It featured breakthrough single "Yellow" and received a Brit Award for British Album of the Year and a Grammy Award for Best Alternative Music Album. The group follow-up, A Rush of Blood to the Head (2002), won the same accolades. X&Y (2005) later saw the completion of what they considered a trilogy, being nominated for Best Rock Album as well. Its successor, Viva la Vida or Death and All His Friends (2008), prevailed in the category. Both albums were the best-selling of their years, topping the charts in over 30 countries. Viva la Vida title track also became the first British act single to lead the Billboard Hot 100 and UK Singles Chart simultaneously in the 21st century.',
  },
  {
    musicTag: "Let me love you",
    artistTag: "DJ Snake",
    musicCanvas: "C7",
    musicSrc: "M7",
    artistCanvas: "AC7",
    desc: 'William Sami Étienne Grigahcine (born 13 June 1986), known by his stage name DJ Snake, is a French DJ and record producer, first achieving international recognition in 2013 by releasing an instrumentation-oriented single called "Turn Down for What" (with Lil Jon).He made his international debut with the singles "Bird Machine" and "Turn Down for What" in 2013."Bird Machine" is a collaboration with fellow French musician Alesia. The single was picked up by Mad Decent, a Los Angeles-based record label run by Diplo.DJ Snake was announced to be working on a collaboration with Diplo, originally slated to debut in 2014; it released in 2015 as the single "Lean On" in collaboration with MØ and Diplo Major Lazer.In 2014, DJ Snake was labelled as an "Artist to Watch" by FoxWeekly.He and Dillon Francis were announced as alternating supporting artists for the summer Mothership Tour 2014 with Skrillex.In March 2018, Billboard named DJ Snake as number nine on their 2018 ranking of dance musicians titled Billboard Dance 100.',
  },
  {
    musicTag: "Levitating",
    artistTag: "Dua Lipa",
    musicCanvas: "C8",
    musicSrc: "M8",
    artistCanvas: "AC8",
    desc: 'Dua Lipa (born 22 August 1995)[1] is an English and Albanian singer and songwriter. Her voice and disco-influenced production have received critical acclaim. Her accolades include seven Brit Awards and three Grammy Awards. Time magazine included her in its list of the top 100 most influential people in the world for 2024. Named one of the wealthiest young people in the UK by the Sunday Times Rich List, as of 2024, Lipa net worth is estimated at £90 million.Lipa worked as a model before signing a recording contract with Warner Bros. in 2014. She rose to prominence with her eponymous debut album in 2017, which peaked at number three on the UK Albums Chart and spawned the singles "Be the One", "IDGAF", and the UK number-one single "New Rules".Lipa was honoured with the Brit Awards for British Female Solo Artist and British Breakthrough Act. Her second single, "One Kiss" with Calvin Harris, was the best-selling song of 2018 in the UK and won the Brit Award for Song of the Year. In 2019, she won the Grammy Award for Best New Artist and for Best Dance Recording for "Electricity", her collaborative single with Silk City.',
  },
];

window.addEventListener("load", () => {
  musicLoader(musicIndex);
  playingNow()
});

const mainAudio = document.querySelector(".mainAudio");
const musicCanvas = document.querySelector(".canvas img");
const mainArtistCanvas = document.querySelector(".artist-content .canvas img");
const mainArtistTag = document.querySelector(".artInfo .title");
const aboutDesc = document.querySelector(".about-wrapper .about");
const artistCanvas = document.querySelector(".artcanvas .artistcard");
const musicTag = document.querySelector(".info .title");
const artistTag = document.querySelector(".info .desc");
let artistDesc = document.querySelector(".artistdesc p");
let musicIndex = 1;

let clr1;
let clr2;

let angle = 45

const clrChanger = ()=>{
  if (musicIndex == 1) {
    clr1 = "#0cb7e3";
    clr2 = "#0c74e3";
    document.body.style.background = `linear-gradient(${angle}deg,${clr1},${clr2})`;
    progBar.style.background = `linear-gradient(90deg,${clr1},${clr2})`;
  } else if (musicIndex == 2) {
    clr1 = "#8e979e";
    clr2 = "#3d4a50";
    document.body.style.background = `linear-gradient(${angle}deg,${clr1},${clr2})`;
    progBar.style.background = `linear-gradient(90deg,${clr1},${clr2})`;
  } else if (musicIndex == 3) {
    clr1 = "#a601ad";
    clr2 = "#200343";
    document.body.style.background = `linear-gradient(${angle}deg,${clr1},${clr2})`;
    progBar.style.background = `linear-gradient(90deg,${clr1},${clr2})`;
  } else if (musicIndex == 4) {
    clr1 = "#df4d6d";
    clr2 = "#f08f80";
    document.body.style.background = `linear-gradient(${angle}deg,${clr1},${clr2})`;
    progBar.style.background = `linear-gradient(90deg,${clr1},${clr2})`;
  } else if (musicIndex == 5) {
    clr1 = "#f94bac";
    clr2 = "#d6b5f8";
    document.body.style.background = `linear-gradient(${angle}deg,${clr1},${clr2})`;
    progBar.style.background = `linear-gradient(90deg,${clr1},${clr2})`;
  } else if (musicIndex == 6) {
    clr1 = "#418dde";
    clr2 = "#e75bad";
    document.body.style.background = `linear-gradient(${angle}deg,${clr1},${clr2})`;
    progBar.style.background = `linear-gradient(90deg,${clr1},${clr2})`;
  } else if (musicIndex == 7) {
    clr1 = "#7bbcd0";
    clr2 = "#003849";
    document.body.style.background = `linear-gradient(${angle}deg,${clr1},${clr2})`;
    progBar.style.background = `linear-gradient(90deg,${clr1},${clr2})`;
  } else if (musicIndex == 8) {
    clr1 = "#ddaecd";
    clr2 = "#98586a";
    document.body.style.background = `linear-gradient(${angle}deg,${clr1},${clr2})`;
    progBar.style.background = `linear-gradient(90deg,${clr1},${clr2})`;
  }
}

const musicLoader = (indexNum) => {
  musicCanvas.src = `canvas/${musics[indexNum - 1].musicCanvas}.jpeg`;
  let artistCanvasSrc = `artist-card/${musics[indexNum - 1].artistCanvas}.jpg`;
  artistCanvas.src = artistCanvasSrc;
  mainArtistCanvas.src = artistCanvasSrc;
  let mainMusicTag = `${musics[indexNum - 1].musicTag}`;
  musicTag.innerHTML = mainMusicTag
  currentPlaying.innerHTML = mainMusicTag
  let artistTagSrc = `${musics[indexNum - 1].artistTag}`;
  artistTag.innerHTML = artistTagSrc;
  mainArtistTag.innerHTML = artistTagSrc;
  mainAudio.src = `musics/${musics[indexNum - 1].musicSrc}.mp3`;
  let artistDescSrc = `${musics[indexNum - 1].desc}`;
  aboutDesc.innerHTML = artistDescSrc;
  clrChanger(musicIndex)
};

const playMusic = () => {
  mainAudio.play();
  playPause.classList.add("waveEnabled")
  playPause.classList.add("pause");
  playPauseImg.src = "icons/pause.svg";
};
const pauseMusic = () => {
  mainAudio.pause();
  playPause.classList.remove("waveEnabled")
  playPause.classList.remove("pause");
  playPauseImg.src = "icons/play.svg";
};

playPause.addEventListener("click", () => {
  const isPaused = playPause.classList.contains("pause");
  isPaused ? pauseMusic() : playMusic();
});

const nextMusic = () => {
  musicIndex++;
  musicIndex > musics.length ? (musicIndex = 1) : (musicIndex = musicIndex);
  musicLoader(musicIndex);
  playMusic();
};
const prevMusic = () => {
  musicIndex--;
  musicIndex < 1 ? (musicIndex = musics.length) : (musicIndex = musicIndex);
  musicLoader(musicIndex);
  playMusic();
};

nextBtn.addEventListener("click", () => {
  nextMusic();
});
prevBtn.addEventListener("click", () => {
  prevMusic();
});

mainAudio.addEventListener("timeupdate", (e) => {
  let currentTime = e.target.currentTime;
  let duration = e.target.duration;
  let progWidth = (currentTime / duration) * 100;
  progBar.style.width = `${progWidth}%`;

  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  currentSec < 10 ? (currentSec = `0${currentSec}`) : (currentSec = currentSec);
  current.innerHTML = `${currentMin}:${currentSec}`;

  mainAudio.addEventListener("loadeddata", () => {
    let musicDuration = mainAudio.duration;
    let totalMin = Math.floor(musicDuration / 60);
    let totalSec = Math.floor(musicDuration % 60);
    totalSec < 10 ? (totalSec = `0${totalSec}`) : (totalSec = totalSec);
    mainAudioDuration.innerHTML = `${totalMin}:${totalSec}`;
  });
});

progArea.addEventListener("click", (e) => {
  let progWidthVal = progArea.clientWidth;
  let clickedOffsetX = e.offsetX;
  let audioDuration = mainAudio.duration;
  mainAudio.currentTime = (clickedOffsetX / progWidthVal) * audioDuration;
  playMusic();
});

repeater.addEventListener("click", () => {
  if (repeater.classList.contains("enable")) {
    repeater.classList.remove("enable");
    repeaterImg.classList.remove("cb");
    repeaterImg.classList.add("chb");
  } else if (repeater.classList.contains("repeat")) {
    repeaterImg.src = `icons/repeat1.svg`;
    repeater.classList.replace("repeat", "repeat1");
    repeaterImg.classList.add("chb");
    repeaterImg.classList.remove("cb");
  } else if (repeater.classList.contains("repeat1")) {
    repeaterImg.src = `icons/shuffle.svg`;
    repeater.classList.replace("repeat1", "shuffle");
    repeaterImg.classList.add("chb");
    repeaterImg.classList.remove("cb");
  } else if (repeater.classList.contains("shuffle")) {
    repeaterImg.src = `icons/repeat.svg`;
    repeater.classList.replace("shuffle", "repeat");
    repeaterImg.classList.remove("chb");
    repeaterImg.classList.add("cb");
  }
});

mainAudio.addEventListener("ended", (e) => {
  if (repeater.classList.contains("enable")) {
  } else if (repeater.classList.contains("repeat")) {
    nextMusic();
  } else if (repeater.classList.contains("repeat1")) {
    mainAudio.currentTime = 0;
    musicLoader(musicIndex);
    playMusic();
  } else if (repeater.classList.contains("shuffle")) {
    let rIndex = Math.floor(Math.random() * musics.length + 1);

    do {
      rIndex = Math.floor(Math.random() * musics.length + 1);
    } while (musicIndex === rIndex);
    musicIndex = rIndex;
    musicLoader(musicIndex);
    playMusic();
  }
});

likeBtn.addEventListener("click", () => {
  if (likeBtn.classList.contains("like")) {
    likeBtn.classList.remove("like");
    likeBtnImg.src = "icons/unfilled-heart.svg";
  } else {
    likeBtn.classList.add("like");
    likeBtnImg.src = "icons/filled-heart.svg";
  }
});

moreInfoBtn.addEventListener("click", () => {
  if (artistCard.classList.contains("card-hide")) {
    artistCard.classList.replace("card-hide", "card-unhide");
  } else {
    artistCard.classList.replace("card-unhide", "card-hide");
  }
});
artCancelBtn.addEventListener("click", () => {
  moreInfoBtn.click();
});

const cardMusicData = (attr) => {
  musicCanvas.src = `canvas/${musics[attr - 1].musicCanvas}.jpeg`;
  let artistCanvasSrc = `artist-card/${musics[attr - 1].artistCanvas}.jpg`;
  artistCanvas.src = artistCanvasSrc;
  mainArtistCanvas.src = artistCanvasSrc;
  let mainMusicTag = `${musics[attr - 1].musicTag}`;
  musicTag.innerHTML = mainMusicTag
  currentPlaying.innerHTML = mainMusicTag
  let artistTagSrc = `${musics[attr - 1].artistTag}`;
  artistTag.innerHTML = artistTagSrc;
  mainArtistTag.innerHTML = artistTagSrc;
  mainAudio.src = `musics/${musics[attr - 1].musicSrc}.mp3`;
  let artistDescSrc = `${musics[attr - 1].desc}`;
  aboutDesc.innerHTML = artistDescSrc;
};
quequeBtn.addEventListener("click", () => {
  if (musicCardArea.classList.contains("cardhide")) {
    musicCardArea.classList.replace("cardhide", "cardunhide");
  } else {
    musicCardArea.classList.replace("cardunhide", "cardhide");
  }
});
const cardPlay = (attr) => {
  cardMusicData(attr);
  playMusic();
};
const cardPause = (attr) => {
  cardMusicData(attr);
  pauseMusic();
};


const listContainer =  document.querySelector(".card-wrapper")

for (let i = 0; i < musics.length; i++) {
  const cards = `
                <div class="card" listIndex="${i+1}">
                        <img src="canvas/${musics[i].musicCanvas}.jpeg" class="fitter resize">
                        <audio src="musics/${musics[i].musicSrc}.mp3" class="mainAudio listDuration"></audio>
                        <div class="playBtn"><img src="icons/play.svg" width="20px"></div>
                        <h4 class="cardTag">${musics[i].musicTag}</h4>
                </div>
                `

listContainer.insertAdjacentHTML("beforeend",cards)
}
const allCards = document.querySelectorAll(".card")

const playingNow = ()=>{
  allCards.forEach((cardItems)=>{
    cardItems.setAttribute("onclick","clicked(this)")
  })
}

const clicked = (elems)=>{
  let getAttr = elems.getAttribute("listIndex")
  musicIndex = getAttr
  musicLoader(musicIndex)
  playMusic()
  playingNow()
  clrChanger(musicIndex)
}

//styles logic
