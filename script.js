(() => {
  const ADHKAR_LIST = [
    {
      id: "kursi",
      title: "آية الكرسي",
      category: "قرآن كريم",
      catClass: "cat-quran",
      avatar: "ق",
      target: 1,
      text: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ: ﴿اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ﴾.",
      virtue: "من قالها حين يصبح أُجير من الجن حتى يمسي."
    },
    {
      id: "ikhlas",
      title: "سورة الإخلاص",
      category: "قرآن كريم",
      catClass: "cat-quran",
      avatar: "ق",
      target: 3,
      text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ﴾.",
      virtue: "من قرأها ثلاث مرات حين يصبح وحين يمسي مع المعوذتين كفته من كل شيء."
    },
    {
      id: "falaq",
      title: "سورة الفلق",
      category: "قرآن كريم",
      catClass: "cat-quran",
      avatar: "ق",
      target: 3,
      text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ﴾.",
      virtue: "تحصين من كل شر وحسد."
    },
    {
      id: "nas",
      title: "سورة الناس",
      category: "قرآن كريم",
      catClass: "cat-quran",
      avatar: "ق",
      target: 3,
      text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴿قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ﴾.",
      virtue: "تحصين من وساوس الشيطان والجن والإنس."
    },
    {
      id: "asbahna-mulk",
      title: "أصبحنا وأصبح الملك لله",
      category: "أذكار الصباح",
      catClass: "cat-dua",
      avatar: "ص",
      target: 1,
      text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَٰذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَٰذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.",
      virtue: "رواه مسلم — دعاء جامع لخير اليوم والاستعاذة من شره."
    },
    {
      id: "bika-asbahna",
      title: "اللهم بك أصبحنا",
      category: "أذكار الصباح",
      catClass: "cat-dua",
      avatar: "ص",
      target: 1,
      text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.",
      virtue: "رواه الترمذي وأبو داود."
    },
    {
      id: "sayyid-istighfar",
      title: "سيد الاستغفار",
      category: "دعاء واستغفار",
      catClass: "cat-dua",
      avatar: "د",
      target: 1,
      text: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.",
      virtue: "من قالها من النهار موقنًا بها فمات من يومه قبل أن يمسي فهو من أهل الجنة."
    },
    {
      id: "ushhiduka",
      title: "اللهم إني أصبحت أشهدك",
      category: "دعاء وتوحيد",
      catClass: "cat-protection",
      avatar: "ح",
      target: 4,
      text: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلَائِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لَا إِلَٰهَ إِلَّا أَنْتَ وَحْدَكَ لَا شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ.",
      virtue: "من قالها أربع مرات حين يصبح أعتقه الله من النار."
    },
    {
      id: "ma-asbaha-nimah",
      title: "شكر النعمة في الصباح",
      category: "أذكار الصباح",
      catClass: "cat-dua",
      avatar: "ص",
      target: 1,
      text: "اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.",
      virtue: "من قالها حين يصبح فقد أدى شكر يومه."
    },
    {
      id: "afini-fi-badani",
      title: "دعاء العافية",
      category: "تحصين وعافية",
      catClass: "cat-protection",
      avatar: "ع",
      target: 3,
      text: "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَٰهَ إِلَّا أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لَا إِلَٰهَ إِلَّا أَنْتَ.",
      virtue: "دعاء نبوي للعافية في الجسد والسمع والبصر."
    },
    {
      id: "hasbi-allah",
      title: "حسبي الله لا إله إلا هو",
      category: "تحصين وتوكل",
      catClass: "cat-protection",
      avatar: "ت",
      target: 7,
      text: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",
      virtue: "من قالها سبع مرات حين يصبح كفاه الله ما أهمّه من أمر الدنيا والآخرة."
    },
    {
      id: "bismillah-la-yadurr",
      title: "بسم الله الذي لا يضر مع اسمه شيء",
      category: "تحصين",
      catClass: "cat-protection",
      avatar: "ح",
      target: 3,
      text: "بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
      virtue: "من قالها ثلاث مرات لم يضره شيء في يومه بإذن الله."
    },
    {
      id: "raditu-billah",
      title: "رضيت بالله ربًا",
      category: "إيمان ورضا",
      catClass: "cat-dua",
      avatar: "ر",
      target: 3,
      text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالْإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ ﷺ نَبِيًّا.",
      virtue: "من قالها ثلاثًا حين يصبح كان حقًا على الله أن يرضيه يوم القيامة."
    },
    {
      id: "ya-hayyu",
      title: "يا حي يا قيوم برحمتك أستغيث",
      category: "دعاء واستغاثة",
      catClass: "cat-dua",
      avatar: "د",
      target: 1,
      text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلَا تَكِلْنِي إِلَىٰ نَفْسِي طَرْفَةَ عَيْنٍ.",
      virtue: "وصية النبي ﷺ لفاطمة رضي الله عنها في الصباح والمساء."
    },
    {
      id: "tahlil-10",
      title: "التهليل",
      category: "تسبيح وذكر",
      catClass: "cat-tasbeeh",
      avatar: "س",
      target: 10,
      text: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ.",
      virtue: "كانت له عدل رقبة، وكُتبت له عشر حسنات، وحُطّت عنه عشر سيئات، وكانت له حرزًا من الشيطان."
    },
    {
      id: "subhanallah-100",
      title: "سبحان الله وبحمده",
      category: "تسبيح وذكر",
      catClass: "cat-tasbeeh",
      avatar: "س",
      target: 100,
      text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.",
      virtue: "من قالها مائة مرة حين يصبح حُطّت خطاياه وإن كانت مثل زبد البحر، ولم يأتِ أحد يوم القيامة بأفضل مما جاء به إلا من قال مثل ذلك أو زاد."
    }
  ];

  const todayKey = (() => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `adhkar_sabah_${y}-${m}-${day}`;
  })();

  const root = document.documentElement;
  const metaThemeColor = document.getElementById("meta-theme-color");
  const themeToggle = document.getElementById("theme-toggle");
  const installBtn = document.getElementById("install-btn");
  const resetAllBtn = document.getElementById("reset-all-btn");
  const restartBtn = document.getElementById("restart-btn");
  const feedEl = document.getElementById("adhkar-feed");
  const celebrationCard = document.getElementById("celebration-card");
  const emptyState = document.getElementById("empty-state");
  const emptyStateText = document.getElementById("empty-state-text");
  const overallProgressBar = document.getElementById("overall-progress-bar");
  const overallPercent = document.getElementById("overall-percent");
  const overallCompletedText = document.getElementById("overall-completed-text");
  const totalTapsText = document.getElementById("total-taps-text");
  const badgeAll = document.getElementById("badge-all");
  const badgeRemaining = document.getElementById("badge-remaining");
  const badgeCompleted = document.getElementById("badge-completed");
  const todayDateEl = document.getElementById("today-date");
  const toastEl = document.getElementById("toast");

  let activeFilter = "all";
  let counts = loadCounts();
  let toastTimer = null;

  // Format Arabic date
  try {
    const formatted = new Intl.DateTimeFormat("ar-EG", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(new Date());
    todayDateEl.textContent = formatted;
  } catch {
    todayDateEl.textContent = "أذكار الصباح اليومية";
  }

  function loadCounts() {
    try {
      const raw = localStorage.getItem(todayKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") return parsed;
      }
    } catch {}
    return {};
  }

  function saveCounts() {
    try {
      localStorage.setItem(todayKey, JSON.stringify(counts));
    } catch {}
  }

  function getCount(id) {
    return Number(counts[id] || 0);
  }

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove("is-visible");
    }, 2200);
  }

  // Theme handling
  function syncThemeColor(theme) {
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", theme === "dark" ? "#242526" : "#ffffff");
    }
  }

  const savedTheme = localStorage.getItem("fb_adhkar_theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    root.setAttribute("data-theme", savedTheme);
    syncThemeColor(savedTheme);
  }

  themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("fb_adhkar_theme", next);
    syncThemeColor(next);
  });

  // Update summary stats & filter badges
  function updateSummary() {
    let completedItems = 0;
    let totalTaps = 0;

    for (const item of ADHKAR_LIST) {
      const c = getCount(item.id);
      totalTaps += c;
      if (c >= item.target) completedItems += 1;
    }

    const totalItems = ADHKAR_LIST.length;
    const remainingItems = totalItems - completedItems;
    const percent = Math.round((completedItems / totalItems) * 100);
    const allDone = completedItems === totalItems;

    overallProgressBar.style.width = `${percent}%`;
    overallProgressBar.classList.toggle("is-done", allDone);
    overallPercent.textContent = `${percent}%`;
    overallPercent.classList.toggle("is-done", allDone);
    overallCompletedText.textContent = `أنجزت ${completedItems} من ${totalItems} ذكرًا`;
    totalTapsText.textContent = `إجمالي التسبيحات: ${totalTaps}`;

    badgeAll.textContent = String(totalItems);
    badgeRemaining.textContent = String(remainingItems);
    badgeCompleted.textContent = String(completedItems);

    celebrationCard.hidden = !allDone;
  }

  function formatTargetLabel(target) {
    if (target === 1) return "مرة واحدة";
    if (target === 2) return "مرتان";
    if (target <= 10) return `${target} مرات`;
    return `${target} مرة`;
  }

  function createPostElement(item) {
    const current = getCount(item.id);
    const isCompleted = current >= item.target;
    const remaining = Math.max(0, item.target - current);
    const pct = Math.min(100, Math.round((current / item.target) * 100));

    const article = document.createElement("article");
    article.className = `fb-card dhikr-post${isCompleted ? " is-completed" : ""}`;
    article.dataset.id = item.id;

    article.innerHTML = `
      <div class="dhikr-header">
        <div class="dhikr-meta">
          <div class="dhikr-title-row">
            <h2 class="dhikr-title">${item.title}</h2>
            <span class="verified-check" title="مكتمل" aria-hidden="true">✓</span>
          </div>
          <div class="dhikr-sub">${item.category} · ${formatTargetLabel(item.target)}</div>
        </div>
        <div class="dhikr-counter-badge" data-role="badge">${current} / ${item.target}</div>
      </div>

      <div class="dhikr-body" data-action="increment" role="button" tabindex="0" aria-label="اضغط للعد: ${item.title}">
        <p class="dhikr-text">${item.text}</p>
        <div class="dhikr-virtue">${item.virtue}</div>
      </div>

      <div class="dhikr-stats">
        <div class="dhikr-mini-track">
          <div class="dhikr-mini-fill" data-role="fill" style="width: ${pct}%"></div>
        </div>
        <span class="dhikr-remaining" data-role="remaining">
          ${isCompleted ? "مكتمل بحمد الله ✓" : `المتبقي: ${remaining}`}
        </span>
      </div>

      <div class="dhikr-actions">
        <button class="fb-action-btn fb-action-count" data-action="increment" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            ${
              isCompleted
                ? '<path d="M20 6L9 17l-5-5"></path>'
                : '<circle cx="12" cy="12" r="9"></circle><path d="M12 8v8M8 12h8"></path>'
            }
          </svg>
          <span data-role="count-label">${isCompleted ? "تم بحمد الله" : `تسبيح (${remaining})`}</span>
        </button>

        <button class="fb-action-btn fb-action-reset" data-action="reset" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 3-6.7L3 8"></path>
            <path d="M3 3v5h5"></path>
          </svg>
          <span>إعادة</span>
        </button>
      </div>
    `;

    return article;
  }

  function updateSinglePostUI(article, item) {
    const current = getCount(item.id);
    const isCompleted = current >= item.target;
    const remaining = Math.max(0, item.target - current);
    const pct = Math.min(100, Math.round((current / item.target) * 100));

    article.classList.toggle("is-completed", isCompleted);
    article.querySelector('[data-role="badge"]').textContent = `${current} / ${item.target}`;
    article.querySelector('[data-role="fill"]').style.width = `${pct}%`;
    article.querySelector('[data-role="remaining"]').textContent = isCompleted
      ? "مكتمل بحمد الله ✓"
      : `المتبقي: ${remaining}`;

    const countBtn = article.querySelector(".fb-action-count");
    countBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        ${
          isCompleted
            ? '<path d="M20 6L9 17l-5-5"></path>'
            : '<circle cx="12" cy="12" r="9"></circle><path d="M12 8v8M8 12h8"></path>'
        }
      </svg>
      <span data-role="count-label">${isCompleted ? "تم بحمد الله" : `تسبيح (${remaining})`}</span>
    `;
  }

  function renderFeed() {
    feedEl.innerHTML = "";
    const filtered = ADHKAR_LIST.filter((item) => {
      const done = getCount(item.id) >= item.target;
      if (activeFilter === "remaining") return !done;
      if (activeFilter === "completed") return done;
      return true;
    });

    if (filtered.length === 0) {
      emptyState.hidden = false;
      emptyStateText.textContent =
        activeFilter === "remaining"
          ? "أحسنت يا أحمد! لا توجد أذكار متبقية اليوم."
          : "لم تكمل أي ذكر بعد — اضغط على أي ذكر للبدء.";
    } else {
      emptyState.hidden = true;
      const frag = document.createDocumentFragment();
      for (const item of filtered) {
        frag.appendChild(createPostElement(item));
      }
      feedEl.appendChild(frag);
    }

    updateSummary();
  }

  function handleIncrement(article, item) {
    const current = getCount(item.id);
    if (current >= item.target) {
      showToast("هذا الذكر مكتمل بالفعل ✓");
      return;
    }

    const next = current + 1;
    counts[item.id] = next;
    saveCounts();

    if (navigator.vibrate) {
      navigator.vibrate(next >= item.target ? [18, 30, 18] : 12);
    }

    article.classList.add("is-pop");
    setTimeout(() => article.classList.remove("is-pop"), 120);

    updateSinglePostUI(article, item);
    updateSummary();

    if (next >= item.target) {
      showToast(`أتممت ${item.title} ✓`);
      if (activeFilter === "remaining") {
        setTimeout(() => renderFeed(), 320);
      }
    }
  }

  // Event delegation on feed
  feedEl.addEventListener("click", async (e) => {
    const actionEl = e.target.closest("[data-action]");
    if (!actionEl) return;

    const article = actionEl.closest(".dhikr-post");
    if (!article) return;

    const item = ADHKAR_LIST.find((d) => d.id === article.dataset.id);
    if (!item) return;

    const action = actionEl.dataset.action;

    if (action === "increment") {
      handleIncrement(article, item);
    } else if (action === "reset") {
      if (getCount(item.id) === 0) return;
      counts[item.id] = 0;
      saveCounts();
      if (activeFilter === "completed") {
        renderFeed();
      } else {
        updateSinglePostUI(article, item);
        updateSummary();
      }
      showToast(`تم تصفير ${item.title}`);
    }
  });

  feedEl.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const bodyEl = e.target.closest('.dhikr-body[data-action="increment"]');
    if (!bodyEl) return;
    e.preventDefault();
    const article = bodyEl.closest(".dhikr-post");
    const item = ADHKAR_LIST.find((d) => d.id === article?.dataset.id);
    if (article && item) handleIncrement(article, item);
  });

  // Filter tabs (desktop & mobile)
  document.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((b) => {
        const active = b.dataset.filter === activeFilter;
        b.classList.toggle("is-active", active);
        if (b.hasAttribute("aria-selected")) {
          b.setAttribute("aria-selected", String(active));
        }
      });
      renderFeed();
    });
  });

  // Reset all adhkar
  function resetAll() {
    counts = {};
    saveCounts();
    activeFilter = "all";
    document.querySelectorAll("[data-filter]").forEach((b) => {
      const active = b.dataset.filter === "all";
      b.classList.toggle("is-active", active);
      if (b.hasAttribute("aria-selected")) {
        b.setAttribute("aria-selected", String(active));
      }
    });
    renderFeed();
    showToast("تم تصفير جميع الأذكار");
  }

  resetAllBtn.addEventListener("click", () => {
    const hasAny = ADHKAR_LIST.some((d) => getCount(d.id) > 0);
    if (!hasAny) {
      showToast("العدادات بالفعل عند الصفر");
      return;
    }
    if (window.confirm("هل تريد تصفير جميع عدادات أذكار الصباح؟")) {
      resetAll();
    }
  });

  restartBtn.addEventListener("click", resetAll);

  // PWA Service Worker registration
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }

  // Native PWA install prompt
  let deferredInstallPrompt = null;
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (installBtn) installBtn.hidden = false;
  });

  if (installBtn) {
    installBtn.addEventListener("click", async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      installBtn.hidden = true;
    });
  }

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    if (installBtn) installBtn.hidden = true;
    showToast("تم تثبيت التطبيق بنجاح ✓");
  });

  renderFeed();
})();
