const getPromptbar = document.getElementById('prompt');
const categoryS = document.querySelector('.search');
const categoryP = document.querySelector('.play');
const categoryO = document.querySelector('.open');
const runBtn = document.querySelector('.make-it-btn');

const introLine = document.querySelector('.intro');
const smartIntro ="Hey, I'm Auren. Your personal agent...";
let travellor = 0;

let smartWritter = setInterval(() => {
    introLine.textContent += smartIntro[travellor];
    travellor++;
    if (travellor === smartIntro.length) {
        clearInterval(smartWritter);
    }
}, 40);


const homeBtn = document.querySelector('.home-btn');
const aboutBtn = document.querySelector('.about-btn');
const helpBtn = document.querySelector('.help-btn');

const homePage = document.querySelector('.home-page');
const aboutPage = document.querySelector('.about-agent-page');
const helpPAge = document.querySelector('.help-page');
homeBtn.onclick = () => {
    unselectPage(homePage, homeBtn);
}
aboutBtn.onclick = () => {
    unselectPage(aboutPage, aboutBtn);
}
helpBtn.onclick = () => {
    unselectPage(helpPAge, helpBtn);
}
function unselectPage(page, button) {
    homePage.classList.add('display_none');
    aboutPage.classList.add('display_none');
    helpPAge.classList.add('display_none');
    page.classList.remove('display_none');
    page.style.opacity = '0';
    setTimeout(() => {
        page.style.opacity = '1';
    }, 200);


    homeBtn.classList.remove('selected');
    aboutBtn.classList.remove('selected');
    helpBtn.classList.remove('selected');

    button.classList.add('selected');

}

function unselectCategory(select) {
    categoryS.classList.remove('selected');
    categoryP.classList.remove('selected');
    categoryO.classList.remove('selected');
    select.classList.add('selected');
}
let catagory = 'search';
categoryS.onclick = (e) => {
    unselectCategory(categoryS)
    getPromptbar.style.opacity = '0';
    setTimeout(() => {
        getPromptbar.placeholder = 'what to search..?';
        getPromptbar.style.opacity = '1';
    }, 200);
    catagory = categoryS.textContent.toLowerCase().trim();
}
categoryP.onclick = (e) => {
    unselectCategory(categoryP);
    getPromptbar.style.opacity = '0';
    setTimeout(() => {
        getPromptbar.placeholder = 'what to play..?';
        getPromptbar.style.opacity = '1';
    }, 200);

    catagory = categoryP.textContent.toLowerCase().trim();
}
categoryO.onclick = (e) => {
    unselectCategory(categoryO);
    getPromptbar.style.opacity = '0';
    setTimeout(() => {
        getPromptbar.placeholder = 'what to open..?';
        getPromptbar.style.opacity = '1';
    }, 200);
    catagory = categoryO.textContent.toLowerCase().trim();
}

// The restricted apps by system OS
const desktopApps = {
    "ms word": "Microsoft Word",
    "msword": "Microsoft Word",
    "word": "Microsoft Word",
    "excel": "Microsoft Excel",
    "power point": "Microsoft PowerPoint",
    "powerpoint": "Microsoft PowerPoint",
    "notepad": "Notepad",
    "calculator": "Calculator",
    "paint": "Paint",
    "file explorer": "File Explorer",
    "task manager": "Task Manager",
    "command prompt": "Command Prompt",
    "powershell": "PowerShell",
    "power shell": "PowerShell",
    "terminal": "Windows Terminal",
    "control panel": "Control Panel",
    "settings": "Windows Settings"
};

const allowedApps = {
    // =========================
    // SEARCH & GOOGLE
    // =========================
    google: "https://www.google.com",
    google_search: "https://www.google.com/search",
    google_images: "https://images.google.com",
    google_news: "https://news.google.com",
    google_maps: "https://maps.google.com",
    google_translate: "https://translate.google.com",
    google_drive: "https://drive.google.com",
    google_docs: "https://docs.google.com",
    google_sheets: "https://sheets.google.com",
    google_slides: "https://slides.google.com",
    google_forms: "https://forms.google.com",
    google_calendar: "https://calendar.google.com",
    google_meet: "https://meet.google.com",
    google_keep: "https://keep.google.com",
    google_chat: "https://chat.google.com",
    google_contacts: "https://contacts.google.com",
    google_photos: "https://photos.google.com",
    google_gmail: "https://mail.google.com",
    email: "https://mail.google.com",
    google_classroom: "https://classroom.google.com",
    google_earth: "https://earth.google.com",
    google_finance: "https://www.google.com/finance",
    google_flights: "https://www.google.com/travel/flights",
    google_travel: "https://www.google.com/travel",
    google_books: "https://books.google.com",
    google_scholar: "https://scholar.google.com",
    google_play: "https://play.google.com",

    // =========================
    // MICROSOFT
    // =========================
    microsoft: "https://www.microsoft.com",
    outlook: "https://outlook.live.com",
    outlook_mail: "https://outlook.live.com/mail",
    office: "https://www.office.com",
    microsoft_365: "https://www.microsoft365.com",
    word_online: "https://www.office.com/launch/word",
    excel_online: "https://www.office.com/launch/excel",
    powerpoint_online: "https://www.office.com/launch/powerpoint",
    onedrive: "https://onedrive.live.com",
    teams: "https://teams.microsoft.com",
    sharepoint: "https://www.sharepoint.com",
    onenote: "https://www.onenote.com",
    forms_microsoft: "https://forms.office.com",
    planner: "https://tasks.office.com",
    bing: "https://www.bing.com",
    bing_images: "https://www.bing.com/images",
    bing_maps: "https://www.bing.com/maps",
    microsoft_store: "https://apps.microsoft.com",
    microsoft_support: "https://support.microsoft.com",

    // =========================
    // APPLE
    // =========================
    apple: "https://www.apple.com",
    icloud: "https://www.icloud.com",
    icloud_drive: "https://www.icloud.com/iclouddrive",
    apple_music: "https://music.apple.com",
    apple_tv: "https://tv.apple.com",
    apple_maps: "https://maps.apple.com",

    // =========================
    // META / SOCIAL
    // =========================
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    messenger: "https://www.messenger.com",
    threads: "https://www.threads.net",
    whatsapp: "https://web.whatsapp.com",
    meta: "https://www.meta.com",

    // =========================
    // SOCIAL MEDIA
    // =========================
    x: "https://x.com",
    twitter: "https://twitter.com",
    linkedin: "https://www.linkedin.com",
    linked_in: "https://www.linkedin.com",
    reddit: "https://www.reddit.com",
    pinterest: "https://www.pinterest.com",
    tumblr: "https://www.tumblr.com",
    mastodon: "https://mastodon.social",
    bluesky: "https://bsky.app",

    // =========================
    // VIDEO / STREAMING
    // =========================
    youtube: "https://www.youtube.com",
    youtube_music: "https://music.youtube.com",
    youtube_studio: "https://studio.youtube.com",
    netflix: "https://www.netflix.com",
    prime_video: "https://www.primevideo.com",
    disney_plus: "https://www.disneyplus.com",
    twitch: "https://www.twitch.tv",
    vimeo: "https://vimeo.com",
    dailymotion: "https://www.dailymotion.com",
    crunchyroll: "https://www.crunchyroll.com",
    tubi: "https://tubitv.com",
    pluto_tv: "https://pluto.tv",
    peacock: "https://www.peacocktv.com",

    // =========================
    // MUSIC
    // =========================
    spotify: "https://open.spotify.com",
    soundcloud: "https://soundcloud.com",
    deezer: "https://www.deezer.com",
    tidal: "https://tidal.com",
    bandcamp: "https://bandcamp.com",
    mixcloud: "https://www.mixcloud.com",
    lastfm: "https://www.last.fm",

    // =========================
    // AI
    // =========================
    chatgpt: "https://chatgpt.com",
    claude: "https://claude.ai",
    gemini: "https://gemini.google.com",
    copilot: "https://copilot.microsoft.com",
    perplexity: "https://www.perplexity.ai",
    poe: "https://poe.com",
    huggingface: "https://huggingface.co",
    character_ai: "https://character.ai",
    deepseek: "https://chat.deepseek.com",
    mistral: "https://chat.mistral.ai",
    groq: "https://console.groq.com",

    // =========================
    // DEVELOPMENT
    // =========================
    github: "https://github.com",
    gitlab: "https://gitlab.com",
    bitbucket: "https://bitbucket.org",
    stackoverflow: "https://stackoverflow.com",
    stackexchange: "https://stackexchange.com",
    npm: "https://www.npmjs.com",
    yarn: "https://yarnpkg.com",
    jsdelivr: "https://www.jsdelivr.com",
    codepen: "https://codepen.io",
    jsfiddle: "https://jsfiddle.net",
    codesandbox: "https://codesandbox.io",
    replit: "https://replit.com",
    glitch: "https://glitch.com",
    vercel: "https://vercel.com",
    netlify: "https://www.netlify.com",
    render: "https://render.com",
    railway: "https://railway.app",
    heroku: "https://www.heroku.com",
    dockerhub: "https://hub.docker.com",
    gitpod: "https://www.gitpod.io",
    devto: "https://dev.to",
    hashnode: "https://hashnode.com",

    // =========================
    // DESIGN
    // =========================
    canva: "https://www.canva.com",
    figma: "https://www.figma.com",
    adobe: "https://www.adobe.com",
    adobe_express: "https://www.adobe.com/express",
    photoshop_web: "https://photoshop.adobe.com",
    photopea: "https://www.photopea.com",
    remove_bg: "https://www.remove.bg",
    pixlr: "https://pixlr.com",
    miro: "https://miro.com",
    excalidraw: "https://excalidraw.com",
    drawio: "https://app.diagrams.net",
    framer: "https://www.framer.com",
    sketch: "https://www.sketch.com",

    // =========================
    // PRODUCTIVITY
    // =========================
    notion: "https://www.notion.so",
    evernote: "https://www.evernote.com",
    trello: "https://trello.com",
    asana: "https://app.asana.com",
    clickup: "https://app.clickup.com",
    monday: "https://monday.com",
    todoist: "https://todoist.com",
    anydo: "https://www.any.do",
    ticktick: "https://ticktick.com",
    todo: "https://to-do.office.com",

    // =========================
    // COMMUNICATION
    // =========================
    discord: "https://discord.com/app",
    telegram: "https://web.telegram.org",
    slack: "https://app.slack.com",
    zoom: "https://zoom.us",
    skype: "https://web.skype.com",
    webex: "https://web.webex.com",
    signal: "https://signal.org",

    // =========================
    // SHOPPING
    // =========================
    amazon: "https://www.amazon.com",
    amazon_india: "https://www.amazon.in",
    ebay: "https://www.ebay.com",
    walmart: "https://www.walmart.com",
    target: "https://www.target.com",
    bestbuy: "https://www.bestbuy.com",
    etsy: "https://www.etsy.com",
    aliexpress: "https://www.aliexpress.com",
    alibaba: "https://www.alibaba.com",
    temu: "https://www.temu.com",
    flipkart: "https://www.flipkart.com",
    myntra: "https://www.myntra.com",

    // =========================
    // FOOD
    // =========================
    uber_eats: "https://www.ubereats.com",
    doordash: "https://www.doordash.com",
    swiggy: "https://www.swiggy.com",
    zomato: "https://www.zomato.com",

    // =========================
    // TRAVEL
    // =========================
    booking: "https://www.booking.com",
    airbnb: "https://www.airbnb.com",
    expedia: "https://www.expedia.com",
    tripadvisor: "https://www.tripadvisor.com",
    kayak: "https://www.kayak.com",
    skyscanner: "https://www.skyscanner.com",
    uber: "https://www.uber.com",
    ola: "https://www.olacabs.com",

    // =========================
    // NEWS
    // =========================
    bbc: "https://www.bbc.com",
    cnn: "https://www.cnn.com",
    reuters: "https://www.reuters.com",
    guardian: "https://www.theguardian.com",
    nytimes: "https://www.nytimes.com",
    washington_post: "https://www.washingtonpost.com",

    // =========================
    // EDUCATION
    // =========================
    wikipedia: "https://www.wikipedia.org",
    khan_academy: "https://www.khanacademy.org",
    coursera: "https://www.coursera.org",
    udemy: "https://www.udemy.com",
    edx: "https://www.edx.org",
    freecodecamp: "https://www.freecodecamp.org",
    w3schools: "https://www.w3schools.com",
    mdn: "https://developer.mozilla.org",
    geeksforgeeks: "https://www.geeksforgeeks.org",
    brilliant: "https://brilliant.org",

    // =========================
    // FILE / CLOUD STORAGE
    // =========================
    dropbox: "https://www.dropbox.com",
    box: "https://www.box.com",
    mega: "https://mega.io",
    pcloud: "https://www.pcloud.com",
    mediafire: "https://www.mediafire.com",

    // =========================
    // FINANCE
    // =========================
    paypal: "https://www.paypal.com",
    stripe: "https://dashboard.stripe.com",
    coinbase: "https://www.coinbase.com",
    binance: "https://www.binance.com",
    tradingview: "https://www.tradingview.com",
    yahoo_finance: "https://finance.yahoo.com",

    // =========================
    // SPORTS
    // =========================
    espn: "https://www.espn.com",
    cricbuzz: "https://www.cricbuzz.com",
    espncricinfo: "https://www.espncricinfo.com",
    fifa: "https://www.fifa.com",
    uefa: "https://www.uefa.com",

    // =========================
    // JOBS / CAREER
    // =========================
    indeed: "https://www.indeed.com",
    linkedin_jobs: "https://www.linkedin.com/jobs",
    glassdoor: "https://www.glassdoor.com",
    monster: "https://www.monster.com",
    ziprecruiter: "https://www.ziprecruiter.com",
    naukri: "https://www.naukri.com",

    // =========================
    // FILE CONVERTERS / TOOLS
    // =========================
    ilovepdf: "https://www.ilovepdf.com",
    smallpdf: "https://smallpdf.com",
    cloudconvert: "https://cloudconvert.com",
    convertio: "https://convertio.co",
    tinypng: "https://tinypng.com",
    tinyjpg: "https://tinyjpg.com",

    // =========================
    // PASSWORD / SECURITY
    // =========================
    bitwarden: "https://vault.bitwarden.com",
    password: "https://my.1password.com",
    lastpass: "https://lastpass.com",

    // =========================
    // CRYPTO / BLOCKCHAIN
    // =========================
    etherscan: "https://etherscan.io",
    opensea: "https://opensea.io",
    metamask: "https://metamask.io",

    // =========================
    // ENTERTAINMENT
    // =========================
    imdb: "https://www.imdb.com",
    rotten_tomatoes: "https://www.rottentomatoes.com",
    goodreads: "https://www.goodreads.com",
    letterboxd: "https://letterboxd.com",

    // =========================
    // GENERAL TOOLS
    // =========================
    speedtest: "https://www.speedtest.net",
    weather: "https://www.weather.com",
    timeanddate: "https://www.timeanddate.com",
    archive: "https://web.archive.org",
    translate: "https://translate.google.com",
    qr_generator: "https://www.qr-code-generator.com",
    pastebin: "https://pastebin.com",
    tinyurl: "https://tinyurl.com"
};

function openApp(app) {
    const name = desktopApps[app.toLowerCase()];

    if (name) {
        alert(
            `${name} cannot be opened directly from the browser.\n\n` +
            `Please open it manually on your computer.`
        );
        return;
    }



    // Your normal web-opening logic here
}


runBtn.onclick = () => {
    const promptsearch = getPromptbar.value.trim().toLowerCase();
    const promptPlay = promptsearch.replace('play', '').trim().toLowerCase();
    const promptOpen = promptsearch.replace('open', '').trim().toLowerCase();
    if (catagory === '' && promptsearch === '') {
        alert('select action type first..!');
        return;
    }
    if (catagory !== '' && promptsearch === '') {
        alert('Enter task!');
        return;
    }
    if (catagory === 'search') {
        if ((promptsearch.includes('sex')) || (promptsearch.includes('sexy')) || (promptsearch.includes('xxx'))) {
            alert('Please use appropriate search terms!');
            getPromptbar.value = '';
            return;
        }
        window.open(`https://www.google.com/search?q=${promptsearch}`, '_blank');
    }
    else if (catagory === 'play') {
        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(promptPlay)}+song`, '_blank')
    }
    else if (catagory === 'open') {
        const applicationA = desktopApps[promptOpen.replace('open', '').trim()]
        const applicationB = allowedApps[promptOpen.replace('open', '').replace(' ', '_')];
        console.log(applicationB)
        if (applicationA) {
            alert(`Failed to open ${applicationA} due to system security please open it manually!`);
            return;
        } else if (!applicationB) {
            alert("Its seems application name doesn't exists in our database.Please try with correct name!");
            return;
        } else {
            window.open(`${applicationB}`, '_blank');
            getPromptbar.value = '';
        }

    }

    getPromptbar.value = '';
}

