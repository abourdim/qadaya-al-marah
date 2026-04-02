/* قضايا المرأة — WOMEN'S ISSUES — app.js v1.0 */
/* Based on "Qadaya al-Mar'ah" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'قضايا المرأة',
    splashSub: 'حقوق المرأة بين التقاليد الراكدة والوافدة',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة البقرة ٢: ٢٢٨',
    tabHome: 'الرئيسية', tabConcepts: 'القضايا', tabHeroines: 'نساء خالدات',
    tabHabits: 'العادات', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    conceptsTitle: 'قضايا المرأة في الإسلام',
    conceptsDesc: '٢٠ قضية شرحها الشيخ الغزالي — بين ما يقوله الإسلام حقاً وما فرضته التقاليد',
    heroinesTitle: 'نساء خالدات',
    heroinesDesc: 'نساء صنعن التاريخ الإسلامي وأثبتن أن الإسلام كرّم المرأة',
    habitsTitle: 'عاداتي اليومية',
    habitsDesc: 'عادات مستوحاة من تعاليم الكتاب — تتبّعي تقدمك يومياً',
    quizTitle: 'اختبر معرفتك',
    quizDesc: 'ماذا تعرف عن حقوق المرأة في الإسلام؟ أجب واكتشف',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية',
    resetBtn: 'إعادة تعيين اليوم',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ فكرة اليوم',
    islam: 'الإسلام',
    tradition: 'التقاليد',
    truth: '✅ الحقيقة الإسلامية',
    myth: '❌ المفهوم الخاطئ',
    action: '💡 طبّق الآن',
    quizAgain: 'أعد الاختبار',
    verse: 'الآية',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في القضايا...',
    streakMsg: 'يوم متتالي!',
    allDone: 'أحسنت! أكملت جميع العادات!',
    splashFeatures: [
      '٢٠ قضية عن حقوق المرأة في الإسلام',
      'نساء خالدات صنعن التاريخ',
      'عادات يومية مع تتبع مستمر',
      'اختبار معرفتك + أدعية'
    ],
  },
  en: {
    appTitle: "Women's Issues",
    splashSub: "Women's rights between stagnant and imported traditions",
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Baqarah 2:228',
    tabHome: 'Home', tabConcepts: 'Issues', tabHeroines: 'Heroines',
    tabHabits: 'Habits', tabQuiz: 'Quiz', tabAbout: 'Book',
    conceptsTitle: "Women's Issues in Islam",
    conceptsDesc: "20 issues explained by Sheikh al-Ghazali — between what Islam truly says and what traditions imposed",
    heroinesTitle: 'Immortal Women',
    heroinesDesc: 'Women who shaped Islamic history and proved Islam honored women',
    habitsTitle: 'My Daily Habits',
    habitsDesc: 'Habits inspired by the book — track your daily progress',
    quizTitle: 'Test Your Knowledge',
    quizDesc: "What do you know about women's rights in Islam? Answer and discover",
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas',
    resetBtn: 'Reset Today',
    submitQuiz: 'See Results',
    dailyLabel: "✨ Today's Insight",
    islam: 'Islam',
    tradition: 'Traditions',
    truth: '✅ Islamic Truth',
    myth: '❌ Common Misconception',
    action: '💡 Apply Now',
    quizAgain: 'Retake Quiz',
    verse: 'Verse',
    share: 'Share',
    searchPlaceholder: 'Search issues...',
    streakMsg: 'day streak!',
    allDone: 'Well done! All habits completed!',
    splashFeatures: [
      "20 issues on women's rights in Islam",
      'Heroines who shaped history',
      'Daily habits with streak tracking',
      'Knowledge quiz + duas'
    ],
  },
  fr: {
    appTitle: 'Questions de la Femme',
    splashSub: 'Droits de la femme entre traditions stagnantes et importees',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Baqarah 2:228',
    tabHome: 'Accueil', tabConcepts: 'Questions', tabHeroines: 'Heroines',
    tabHabits: 'Habitudes', tabQuiz: 'Quiz', tabAbout: 'Livre',
    conceptsTitle: 'Questions de la Femme en Islam',
    conceptsDesc: '20 questions expliquees par Sheikh al-Ghazali — entre ce que dit vraiment l\'Islam et ce qu\'imposent les traditions',
    heroinesTitle: 'Femmes Immortelles',
    heroinesDesc: 'Femmes qui ont faconne l\'histoire islamique et prouve que l\'Islam honore la femme',
    habitsTitle: 'Mes Habitudes Quotidiennes',
    habitsDesc: 'Habitudes inspirees du livre — suivez vos progres',
    quizTitle: 'Testez Vos Connaissances',
    quizDesc: 'Que savez-vous des droits de la femme en Islam ? Repondez et decouvrez',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas',
    resetBtn: 'Reinitialiser',
    submitQuiz: 'Voir les Resultats',
    dailyLabel: '✨ Pensee du Jour',
    islam: 'Islam',
    tradition: 'Traditions',
    truth: '✅ Verite Islamique',
    myth: '❌ Idee Recue',
    action: '💡 Appliquez Maintenant',
    quizAgain: 'Refaire le Quiz',
    verse: 'Verset',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les questions...',
    streakMsg: 'jours consecutifs !',
    allDone: 'Bravo ! Toutes les habitudes accomplies !',
    splashFeatures: [
      '20 questions sur les droits de la femme en Islam',
      'Heroines qui ont faconne l\'histoire',
      'Habitudes quotidiennes avec suivi',
      'Quiz + duas quotidiennes'
    ],
  }
};

// ═══════════════ CONCEPTS DATA (20 cards) ═══════════════
const CONCEPTS = [
  {
    id:1, emoji:'📚',
    ar:{title:'حق المرأة في التعليم',desc:'الإسلام فرض طلب العلم على المرأة كما فرضه على الرجل. النبي ﷺ قال: "طلب العلم فريضة على كل مسلم" — والمسلم يشمل الذكر والأنثى.',truth:'الإسلام جعل التعليم فريضة على المرأة والرجل سواء',myth:'البعض يظن أن تعليم المرأة غير مهم أو مكروه',action:'شاركي معلومة مفيدة تعلمتِها اليوم مع شخص آخر'},
    en:{title:"Women's Right to Education",desc:'Islam made seeking knowledge obligatory for women just as for men. The Prophet (peace be upon him) said: "Seeking knowledge is obligatory upon every Muslim" — and Muslim includes both male and female.',truth:'Islam made education equally obligatory for women and men',myth:'Some think educating women is unimportant or disliked',action:'Share a useful piece of knowledge you learned today with someone'},
    fr:{title:"Le Droit de la Femme a l'Education",desc:"L'Islam a rendu la recherche du savoir obligatoire pour la femme comme pour l'homme. Le Prophete (paix sur lui) a dit : Chercher le savoir est une obligation pour tout musulman — et musulman inclut homme et femme.",truth:"L'Islam a rendu l'education egalement obligatoire pour les femmes et les hommes",myth:"Certains pensent que l'education des femmes est sans importance",action:'Partagez une connaissance utile que vous avez apprise aujourd\'hui'}
  },
  {
    id:2, emoji:'💼',
    ar:{title:'حق المرأة في العمل',desc:'الإسلام لم يمنع المرأة من العمل. خديجة رضي الله عنها كانت سيدة أعمال ناجحة قبل الإسلام وبعده. الشرط هو أن يكون العمل في إطار الضوابط الشرعية.',truth:'المرأة المسلمة لها حق العمل والتجارة والكسب',myth:'يعتقد البعض أن مكان المرأة البيت فقط',action:'تعرفي على سيدة أعمال مسلمة ناجحة واقرئي قصتها'},
    en:{title:"Women's Right to Work",desc:"Islam did not prohibit women from working. Khadijah (may God be pleased with her) was a successful businesswoman before and after Islam. The condition is that work follows Islamic guidelines.",truth:'Muslim women have the right to work, trade, and earn',myth:"Some believe a woman's place is only at home",action:'Learn about a successful Muslim businesswoman and read her story'},
    fr:{title:'Le Droit de la Femme au Travail',desc:"L'Islam n'a pas interdit aux femmes de travailler. Khadijah etait une femme d'affaires prospere avant et apres l'Islam. La condition est que le travail respecte les regles islamiques.",truth:'Les femmes musulmanes ont le droit de travailler et de commercer',myth:"Certains croient que la place de la femme est uniquement a la maison",action:"Decouvrez une femme d'affaires musulmane et lisez son histoire"}
  },
  {
    id:3, emoji:'💍',
    ar:{title:'حق المرأة في اختيار زوجها',desc:'الإسلام أعطى المرأة حق قبول أو رفض الزوج. لا يجوز إجبارها على الزواج. النبي ﷺ رد زواج فتاة أُجبرت وخيّرها.',truth:'لا يصح الزواج بدون رضا المرأة الصريح',myth:'إجبار البنت على الزواج من تقاليد ما قبل الإسلام لا من الدين',action:'تحدثي مع أسرتك عن أهمية رضا المرأة في الزواج'},
    en:{title:"Women's Right to Choose a Spouse",desc:"Islam gave women the right to accept or refuse a spouse. Forcing a woman into marriage is not permissible. The Prophet (peace be upon him) annulled a marriage where a girl was forced and gave her the choice.",truth:"Marriage is invalid without the woman's explicit consent",myth:'Forcing girls into marriage is a pre-Islamic tradition, not religion',action:'Discuss the importance of consent in marriage with your family'},
    fr:{title:'Le Droit de Choisir son Epoux',desc:"L'Islam a donne a la femme le droit d'accepter ou de refuser un epoux. Il n'est pas permis de forcer une femme au mariage. Le Prophete a annule un mariage force et a donne le choix a la jeune fille.",truth:'Le mariage est invalide sans le consentement explicite de la femme',myth:"Forcer les filles au mariage est une tradition pre-islamique, pas religieuse",action:"Discutez de l'importance du consentement dans le mariage avec votre famille"}
  },
  {
    id:4, emoji:'💰',
    ar:{title:'الذمة المالية المستقلة',desc:'المرأة في الإسلام لها ذمة مالية مستقلة تماماً. مالها لها وحدها، ولا يحق لزوجها أو أبيها التصرف فيه بغير إذنها. هذا الحق سبق القوانين الغربية بقرون.',truth:'مال المرأة لها وحدها ولا يحق لأحد أخذه',myth:'البعض يظن أن راتب المرأة من حق زوجها',action:'تعرفي على حقوقك المالية في الإسلام'},
    en:{title:'Independent Financial Identity',desc:"Women in Islam have a completely independent financial identity. Her money is hers alone, and neither her husband nor father may use it without her permission. This right preceded Western laws by centuries.",truth:"A woman's money is hers alone and no one may take it",myth:"Some think a woman's salary belongs to her husband",action:'Learn about your financial rights in Islam'},
    fr:{title:'Identite Financiere Independante',desc:"La femme en Islam a une identite financiere completement independante. Son argent est le sien seul, et ni son mari ni son pere ne peuvent en disposer sans sa permission.",truth:"L'argent de la femme est le sien et personne ne peut le prendre",myth:"Certains pensent que le salaire de la femme appartient a son mari",action:'Decouvrez vos droits financiers en Islam'}
  },
  {
    id:5, emoji:'🧕',
    ar:{title:'الحجاب: حرية لا قيد',desc:'الحجاب في الإسلام هو تكريم للمرأة وحماية لها. الغزالي يوضح أنه ليس سجناً بل هو تحرير من نظرة المجتمع المادية للمرأة.',truth:'الحجاب اختيار واعٍ يعبر عن الإيمان والكرامة',myth:'الحجاب ليس رمزاً للقمع بل للحرية الروحية',action:'تأملي في معنى الحجاب الحقيقي: حجاب القلب والسلوك قبل المظهر'},
    en:{title:'Hijab: Freedom Not Restriction',desc:"Hijab in Islam is an honoring and protection of women. Al-Ghazali explains it is not a prison but liberation from society's materialistic view of women.",truth:'Hijab is a conscious choice expressing faith and dignity',myth:'Hijab is not a symbol of oppression but of spiritual freedom',action:'Reflect on the true meaning of hijab: modesty of heart and behavior before appearance'},
    fr:{title:'Le Hijab : Liberte et non Restriction',desc:"Le hijab en Islam est un honneur et une protection pour la femme. Al-Ghazali explique que ce n'est pas une prison mais une liberation de la vision materialiste de la societe.",truth:'Le hijab est un choix conscient exprimant la foi et la dignite',myth:"Le hijab n'est pas un symbole d'oppression mais de liberte spirituelle",action:'Reflechissez au vrai sens du hijab : modestie du coeur et du comportement avant l\'apparence'}
  },
  {
    id:6, emoji:'⚖️',
    ar:{title:'الميراث: حكمة لا ظلم',desc:'نظام الميراث في الإسلام مبني على المسؤولية المالية. الرجل مُلزم بالنفقة، المرأة ليست كذلك. في حالات كثيرة ترث المرأة مثل الرجل أو أكثر.',truth:'الميراث مبني على نظام النفقة والمسؤولية لا على التمييز',myth:'القول بأن المرأة دائماً ترث نصف الرجل غير دقيق',action:'ادرسي أحكام الميراث في الإسلام — ستكتشفين العدالة المدهشة'},
    en:{title:'Inheritance: Wisdom Not Injustice',desc:'The inheritance system in Islam is based on financial responsibility. Men are obligated to provide; women are not. In many cases, women inherit equal to or more than men.',truth:'Inheritance is based on responsibility and provision, not discrimination',myth:'Saying women always inherit half is inaccurate',action:'Study inheritance rules in Islam — you will discover amazing justice'},
    fr:{title:"L'Heritage : Sagesse et non Injustice",desc:"Le systeme d'heritage en Islam est base sur la responsabilite financiere. L'homme est oblige de subvenir aux besoins, pas la femme. Dans de nombreux cas, la femme herite autant ou plus que l'homme.",truth:"L'heritage est base sur la responsabilite, pas la discrimination",myth:'Dire que la femme herite toujours la moitie est inexact',action:"Etudiez les regles d'heritage en Islam — vous decouvrirez une justice etonnante"}
  },
  {
    id:7, emoji:'🏫',
    ar:{title:'المرأة والمشاركة المجتمعية',desc:'النساء في عهد النبي ﷺ شاركن في الحياة العامة: حضرن المساجد، شاركن في الشورى، عملن في التجارة والطب والتعليم.',truth:'الإسلام شجع مشاركة المرأة في الحياة العامة',myth:'عزل المرأة عن المجتمع ليس من الإسلام',action:'شاركي في نشاط مجتمعي مفيد هذا الأسبوع'},
    en:{title:'Women and Community Participation',desc:"Women in the Prophet's time participated in public life: they attended mosques, participated in consultation, worked in trade, medicine, and education.",truth:'Islam encouraged women to participate in public life',myth:"Isolating women from society is not from Islam",action:'Participate in a beneficial community activity this week'},
    fr:{title:'La Femme et la Participation Communautaire',desc:"Les femmes a l'epoque du Prophete participaient a la vie publique : elles frequentaient les mosquees, participaient a la consultation, travaillaient dans le commerce et la medecine.",truth:"L'Islam a encourage les femmes a participer a la vie publique",myth:"Isoler les femmes de la societe ne vient pas de l'Islam",action:'Participez a une activite communautaire utile cette semaine'}
  },
  {
    id:8, emoji:'📖',
    ar:{title:'المرأة عالمة ومعلمة',desc:'عائشة رضي الله عنها كانت من أكبر علماء الإسلام. روت أكثر من ٢٠٠٠ حديث وكان كبار الصحابة يرجعون إليها في الفتوى.',truth:'التاريخ الإسلامي مليء بالعالمات والمحدثات والفقيهات',myth:'القول بأن المرأة لا تصلح للعلم الشرعي يخالف التاريخ',action:'اقرئي عن عالمة مسلمة من التاريخ وشاركي قصتها'},
    en:{title:'Women as Scholars and Teachers',desc:'Aisha (may God be pleased with her) was among the greatest Islamic scholars. She narrated over 2,000 hadiths and senior companions consulted her for religious rulings.',truth:'Islamic history is full of female scholars, hadith narrators, and jurists',myth:'Saying women are unfit for religious scholarship contradicts history',action:'Read about a female Muslim scholar from history and share her story'},
    fr:{title:'La Femme Savante et Enseignante',desc:"Aisha etait parmi les plus grands savants de l'Islam. Elle a rapporte plus de 2000 hadiths et les grands compagnons la consultaient pour les avis religieux.",truth:"L'histoire islamique est pleine de savantes et juristes feminines",myth:"Dire que les femmes sont inaptes au savoir religieux contredit l'histoire",action:"Lisez sur une savante musulmane de l'histoire et partagez son recit"}
  },
  {
    id:9, emoji:'🤝',
    ar:{title:'القوامة: مسؤولية لا تسلط',desc:'القوامة في الإسلام تعني المسؤولية والرعاية، لا السيطرة والتحكم. الرجل قوّام بمعنى أنه مسؤول عن النفقة والحماية.',truth:'القوامة مسؤولية على الرجل لا سلطة على المرأة',myth:'استخدام القوامة لقمع المرأة تحريف للمفهوم الإسلامي',action:'تأملي في معنى الشراكة الحقيقية في الأسرة المسلمة'},
    en:{title:'Qiwamah: Responsibility Not Domination',desc:"Qiwamah (male guardianship) in Islam means responsibility and care, not control and domination. The man is 'qawwam' meaning he is responsible for provision and protection.",truth:'Qiwamah is a responsibility placed on men, not authority over women',myth:'Using qiwamah to oppress women distorts the Islamic concept',action:'Reflect on the meaning of true partnership in a Muslim family'},
    fr:{title:'La Qiwamah : Responsabilite et non Domination',desc:"La qiwamah en Islam signifie responsabilite et soin, pas controle et domination. L'homme est responsable de subvenir aux besoins et de proteger.",truth:"La qiwamah est une responsabilite imposee aux hommes, pas une autorite sur les femmes",myth:"Utiliser la qiwamah pour opprimer les femmes deforme le concept islamique",action:'Reflechissez au sens du vrai partenariat dans la famille musulmane'}
  },
  {
    id:10, emoji:'💔',
    ar:{title:'الطلاق: حق لا عيب',desc:'الإسلام أعطى المرأة حق طلب الطلاق (الخلع) إذا كانت غير سعيدة في زواجها. ليس عيباً أن تطلب المرأة الانفصال إذا استحال العشرة.',truth:'المرأة لها حق الخلع إذا تعذرت الحياة الزوجية',myth:'إجبار المرأة على البقاء في زواج مؤذٍ ليس من الإسلام',action:'تعرفي على حقوقك في حالة الخلاف الزوجي'},
    en:{title:'Divorce: A Right Not a Shame',desc:"Islam gave women the right to request divorce (khul') if unhappy in marriage. It is not shameful for a woman to seek separation when cohabitation becomes impossible.",truth:"Women have the right to khul' when marital life becomes impossible",myth:'Forcing women to stay in harmful marriages is not from Islam',action:'Learn about your rights in case of marital conflict'},
    fr:{title:'Le Divorce : Un Droit et non une Honte',desc:"L'Islam a donne a la femme le droit de demander le divorce (khul') si elle est malheureuse dans son mariage. Il n'est pas honteux de demander la separation quand la cohabitation devient impossible.",truth:"La femme a le droit au khul' quand la vie conjugale devient impossible",myth:"Forcer les femmes a rester dans des mariages nefastes ne vient pas de l'Islam",action:'Decouvrez vos droits en cas de conflit conjugal'}
  },
  {
    id:11, emoji:'🗳️',
    ar:{title:'المرأة والشورى',desc:'النساء شاركن في بيعة العقبة وبيعة الرضوان. الإسلام أعطى المرأة حق إبداء الرأي في الشؤون العامة منذ البداية.',truth:'مشاركة المرأة في القرار السياسي أصل إسلامي',myth:'منع المرأة من إبداء الرأي ليس من الإسلام',action:'عبري عن رأيك في قضية تهمك اليوم'},
    en:{title:'Women and Consultation',desc:'Women participated in the pledges of Aqaba and Ridwan. Islam gave women the right to voice their opinion in public affairs from the very beginning.',truth:"Women's participation in political decision-making is an Islamic principle",myth:'Preventing women from voicing opinions is not from Islam',action:'Express your opinion on an issue that matters to you today'},
    fr:{title:'La Femme et la Consultation',desc:"Les femmes ont participe aux serments d'Aqaba et de Ridwan. L'Islam a donne a la femme le droit d'exprimer son opinion dans les affaires publiques des le debut.",truth:'La participation des femmes aux decisions politiques est un principe islamique',myth:"Empecher les femmes d'exprimer leur avis ne vient pas de l'Islam",action:"Exprimez votre opinion sur une question qui vous tient a coeur aujourd'hui"}
  },
  {
    id:12, emoji:'🕌',
    ar:{title:'المرأة والمسجد',desc:'النبي ﷺ قال: "لا تمنعوا إماء الله مساجد الله". منع المرأة من المسجد مخالف للسنة النبوية الصريحة.',truth:'حضور المرأة للمسجد حق شرعي لا يجوز منعه',myth:'منع النساء من المساجد عادة مخالفة للسنة',action:'إذا كنتِ قريبة من مسجد يسمح للنساء، احضري صلاة أو درساً'},
    en:{title:'Women and the Mosque',desc:'The Prophet (peace be upon him) said: "Do not prevent the female servants of God from the mosques of God." Preventing women from mosques contradicts the explicit prophetic tradition.',truth:"Women's attendance at mosques is a right that should not be denied",myth:'Banning women from mosques is a custom that contradicts the Sunnah',action:'If you are near a mosque that welcomes women, attend a prayer or lesson'},
    fr:{title:'La Femme et la Mosquee',desc:"Le Prophete a dit : N'empecchez pas les servantes de Dieu d'aller aux mosquees de Dieu. Empecher les femmes d'aller a la mosquee contredit la tradition prophetique explicite.",truth:"La frequentation des mosquees par les femmes est un droit qui ne doit pas etre refuse",myth:"Interdire aux femmes les mosquees est une coutume contraire a la Sunnah",action:'Si vous etes pres d\'une mosquee qui accueille les femmes, assistez a une priere ou un cours'}
  },
  {
    id:13, emoji:'👩‍⚕️',
    ar:{title:'المرأة في الطب والعلوم',desc:'رفيدة الأسلمية أسست أول مستشفى ميداني في الإسلام. نساء كثيرات عملن في الطب والجراحة والصيدلة في الحضارة الإسلامية.',truth:'المرأة المسلمة ساهمت في العلوم والطب عبر التاريخ',myth:'حصر دور المرأة في المنزل فقط ليس من الإسلام',action:'ابحثي عن عالمة مسلمة في مجال العلوم وتعرفي على إنجازاتها'},
    en:{title:'Women in Medicine and Sciences',desc:'Rufaydah al-Aslamiyyah established the first field hospital in Islam. Many women worked in medicine, surgery, and pharmacy in Islamic civilization.',truth:'Muslim women contributed to science and medicine throughout history',myth:"Restricting women's role to home only is not from Islam",action:'Research a Muslim woman scientist and learn about her achievements'},
    fr:{title:'La Femme dans la Medecine et les Sciences',desc:"Rufaydah al-Aslamiyyah a fonde le premier hopital de campagne en Islam. De nombreuses femmes ont travaille dans la medecine et la pharmacie dans la civilisation islamique.",truth:"Les femmes musulmanes ont contribue aux sciences et a la medecine a travers l'histoire",myth:"Restreindre le role de la femme a la maison uniquement ne vient pas de l'Islam",action:'Recherchez une scientifique musulmane et decouvrez ses realisations'}
  },
  {
    id:14, emoji:'🎓',
    ar:{title:'تعدد الزوجات: الاستثناء لا القاعدة',desc:'الغزالي يوضح أن تعدد الزوجات في الإسلام مشروط بالعدل التام، وهو استثناء لا قاعدة. الآية نفسها تقول "فإن خفتم ألا تعدلوا فواحدة".',truth:'التعدد مشروط بالعدل المطلق والقدرة، وهو استثناء',myth:'القول بأن التعدد حق مطلق للرجل يتجاهل شروطه الصارمة',action:'اقرئي الآية ٣ من سورة النساء بتدبر مع تفسيرها'},
    en:{title:'Polygamy: Exception Not Rule',desc:'Al-Ghazali explains that polygamy in Islam is conditioned on absolute justice, and is an exception not a rule. The verse itself says "if you fear you cannot be just, then only one."',truth:'Polygamy is conditioned on absolute justice and ability, and is an exception',myth:"Claiming polygamy is an absolute right for men ignores its strict conditions",action:'Read verse 3 of Surah An-Nisa with reflection and its commentary'},
    fr:{title:'La Polygamie : Exception et non Regle',desc:"Al-Ghazali explique que la polygamie en Islam est conditionnee par la justice absolue, et est une exception pas une regle. Le verset dit lui-meme : si vous craignez de ne pas etre justes, alors une seule.",truth:"La polygamie est conditionnee par la justice absolue et est une exception",myth:'Affirmer que la polygamie est un droit absolu pour les hommes ignore ses conditions strictes',action:'Lisez le verset 3 de la sourate An-Nisa avec reflexion et son commentaire'}
  },
  {
    id:15, emoji:'🌺',
    ar:{title:'تكريم الأمومة',desc:'الإسلام رفع مكانة الأم إلى أعلى المراتب. "الجنة تحت أقدام الأمهات" و"أمك ثم أمك ثم أمك ثم أبوك". الأمومة ليست ضعفاً بل هي أعظم مسؤولية.',truth:'الأمومة في الإسلام أشرف وأعلى المسؤوليات',myth:'اعتبار الأمومة عبئاً أو تقليلاً من قيمة المرأة فكرة دخيلة',action:'اتصلي بأمك اليوم واشكريها أو ادعي لها إن لم تكن معك'},
    en:{title:'Honoring Motherhood',desc:'Islam elevated the status of mothers to the highest ranks. "Paradise lies under the feet of mothers" and "Your mother, then your mother, then your mother, then your father." Motherhood is not weakness but the greatest responsibility.',truth:'Motherhood in Islam is the most honored responsibility',myth:'Considering motherhood a burden or diminishing of women is a foreign concept',action:'Call your mother today and thank her, or pray for her if she has passed'},
    fr:{title:"L'Honneur de la Maternite",desc:"L'Islam a eleve le statut des meres au plus haut rang. Le Paradis est sous les pieds des meres et Votre mere, puis votre mere, puis votre mere, puis votre pere. La maternite n'est pas une faiblesse mais la plus grande responsabilite.",truth:"La maternite en Islam est la responsabilite la plus honoree",myth:"Considerer la maternite comme un fardeau est un concept etranger",action:"Appelez votre mere aujourd'hui et remerciez-la, ou priez pour elle"}
  },
  {
    id:16, emoji:'🛡️',
    ar:{title:'حماية المرأة من العنف',desc:'الإسلام حرّم الإيذاء والضرب والإهانة. النبي ﷺ لم يضرب امرأة قط وقال: "خيركم خيركم لأهله". العنف الأسري مرفوض شرعاً.',truth:'الإسلام يحرم الإيذاء الجسدي والمعنوي للمرأة',myth:'استخدام الدين لتبرير العنف ضد المرأة تحريف',action:'إذا عرفتِ شخصاً يتعرض للعنف، شجعيه على طلب المساعدة'},
    en:{title:'Protecting Women from Violence',desc:'Islam forbids harm, beating, and humiliation. The Prophet (peace be upon him) never struck a woman and said: "The best of you are the best to their families." Domestic violence is rejected by Islamic law.',truth:'Islam forbids physical and emotional harm against women',myth:'Using religion to justify violence against women is a distortion',action:'If you know someone experiencing violence, encourage them to seek help'},
    fr:{title:'Proteger la Femme de la Violence',desc:"L'Islam interdit le mal, les coups et l'humiliation. Le Prophete n'a jamais frappe une femme et a dit : Les meilleurs d'entre vous sont les meilleurs envers leur famille. La violence domestique est rejetee par la loi islamique.",truth:"L'Islam interdit le mal physique et emotionnel envers les femmes",myth:'Utiliser la religion pour justifier la violence est une deformation',action:'Si vous connaissez quelqu\'un qui subit la violence, encouragez-le a chercher de l\'aide'}
  },
  {
    id:17, emoji:'🌍',
    ar:{title:'التقاليد الراكدة',desc:'الغزالي ينتقد التقاليد المتحجرة التي ظلمت المرأة باسم الدين. كثير مما يُنسب للإسلام هو في الحقيقة عادات جاهلية أو ثقافات محلية لا علاقة لها بالشريعة.',truth:'كثير من القيود على المرأة مصدرها التقاليد لا الدين',myth:'الخلط بين العادات الموروثة والدين الصحيح خطأ شائع',action:'فكري في عادة محلية تُنسب للدين — هل لها أصل شرعي فعلاً؟'},
    en:{title:'Stagnant Traditions',desc:'Al-Ghazali criticizes rigid traditions that oppressed women in the name of religion. Much of what is attributed to Islam is actually pre-Islamic customs or local cultures unrelated to Islamic law.',truth:'Many restrictions on women come from traditions, not religion',myth:'Confusing inherited customs with true religion is a common error',action:'Think of a local custom attributed to religion — does it have an actual Islamic basis?'},
    fr:{title:'Les Traditions Stagnantes',desc:"Al-Ghazali critique les traditions rigides qui ont opprime les femmes au nom de la religion. Beaucoup de ce qui est attribue a l'Islam est en fait des coutumes pre-islamiques sans rapport avec la loi islamique.",truth:'De nombreuses restrictions sur les femmes viennent des traditions, pas de la religion',myth:'Confondre coutumes heritees et vraie religion est une erreur courante',action:'Pensez a une coutume locale attribuee a la religion — a-t-elle une base islamique reelle ?'}
  },
  {
    id:18, emoji:'📱',
    ar:{title:'التقاليد الوافدة',desc:'الغزالي ينتقد أيضاً الأفكار الوافدة التي تريد تحرير المرأة من دينها وأخلاقها. التحرر الحقيقي يكون بالعلم والإيمان لا بالتقليد الأعمى للغرب.',truth:'التحرر الحقيقي بالعلم والإيمان لا بتقليد كل ما هو غربي',myth:'ليس كل ما يأتي من الغرب تقدماً ولا كل ما عندنا تخلفاً',action:'ميزي بين الحقوق الحقيقية والموضات الثقافية'},
    en:{title:'Imported Traditions',desc:"Al-Ghazali also criticizes imported ideas that seek to liberate women from their religion and morals. True liberation comes through knowledge and faith, not blind imitation of the West.",truth:'True liberation is through knowledge and faith, not blind Western imitation',myth:'Not everything from the West is progress, nor everything from us is backwardness',action:'Distinguish between genuine rights and cultural trends'},
    fr:{title:'Les Traditions Importees',desc:"Al-Ghazali critique aussi les idees importees qui cherchent a liberer la femme de sa religion et de sa morale. La vraie liberation vient par le savoir et la foi, pas l'imitation aveugle de l'Occident.",truth:"La vraie liberation est par le savoir et la foi, pas l'imitation aveugle de l'Occident",myth:"Tout ce qui vient de l'Occident n'est pas progres, et tout ce qui est chez nous n'est pas retard",action:'Distinguez entre droits authentiques et tendances culturelles'}
  },
  {
    id:19, emoji:'👨‍👩‍👧',
    ar:{title:'الأسرة شراكة متكاملة',desc:'الأسرة في الإسلام مبنية على المودة والرحمة والشراكة. الزوجان يكملان بعضهما لا يتنافسان. "هن لباس لكم وأنتم لباس لهن".',truth:'العلاقة الزوجية في الإسلام قائمة على التكامل والمودة',myth:'تحويل الأسرة إلى ساحة صراع بين الجنسين مرفوض',action:'مارسي الشكر مع أفراد أسرتك اليوم — كلمة طيبة تصنع فرقاً'},
    en:{title:'Family as a Complete Partnership',desc:'The family in Islam is built on affection, mercy, and partnership. Spouses complete each other, not compete. "They are garments for you and you are garments for them."',truth:'The marital relationship in Islam is based on complementarity and affection',myth:'Turning the family into a gender battleground is rejected',action:'Practice gratitude with your family today — a kind word makes a difference'},
    fr:{title:'La Famille comme Partenariat Complet',desc:"La famille en Islam est construite sur l'affection, la misericorde et le partenariat. Les epoux se completent, ils ne sont pas en competition. Elles sont un vetement pour vous et vous etes un vetement pour elles.",truth:"La relation conjugale en Islam est basee sur la complementarite et l'affection",myth:'Transformer la famille en champ de bataille entre les sexes est rejete',action:"Pratiquez la gratitude avec votre famille aujourd'hui — un mot gentil fait la difference"}
  },
  {
    id:20, emoji:'🌟',
    ar:{title:'المرأة المسلمة: أمل الأمة',desc:'الغزالي يختم بأن نهضة الأمة لا تكتمل بدون نهضة المرأة. تعليمها وتمكينها وإعادة حقوقها الإسلامية واجب على المجتمع كله.',truth:'نهضة الأمة تبدأ بتعليم المرأة وتمكينها',myth:'تهميش نصف المجتمع ثم انتظار النهضة تناقض',action:'شاركي هذا التطبيق مع شخص يحتاج لمعرفة حقوق المرأة في الإسلام'},
    en:{title:"Muslim Women: The Nation's Hope",desc:"Al-Ghazali concludes that the nation's revival is incomplete without women's revival. Educating, empowering women and restoring their Islamic rights is a duty upon all society.",truth:"The nation's revival starts with educating and empowering women",myth:'Marginalizing half of society then expecting revival is a contradiction',action:"Share this app with someone who needs to know about women's rights in Islam"},
    fr:{title:'La Femme Musulmane : Espoir de la Nation',desc:"Al-Ghazali conclut que le renouveau de la nation est incomplet sans le renouveau des femmes. Eduquer et autonomiser les femmes et restaurer leurs droits islamiques est un devoir pour toute la societe.",truth:'Le renouveau de la nation commence par l\'education et l\'autonomisation des femmes',myth:'Marginaliser la moitie de la societe puis attendre le renouveau est une contradiction',action:'Partagez cette application avec quelqu\'un qui a besoin de connaitre les droits de la femme en Islam'}
  }
];

// ═══════════════ HEROINES DATA ═══════════════
const HEROINES = [
  {emoji:'👑', ar:{name:'خديجة بنت خويلد',role:'أول من آمن بالنبي ﷺ وسيدة أعمال ناجحة',story:'أول مسلمة في التاريخ، زوجة النبي ﷺ وأم المؤمنين. كانت تاجرة ثرية ناجحة قبل الإسلام. دعمت النبي ﷺ بمالها ونفسها.'}, en:{name:'Khadijah bint Khuwaylid',role:'First believer and successful businesswoman',story:'The first Muslim in history, wife of the Prophet and Mother of the Believers. She was a wealthy and successful trader before Islam.'}, fr:{name:'Khadijah bint Khuwaylid',role:'Premiere croyante et femme d\'affaires prospere',story:'La premiere musulmane de l\'histoire, epouse du Prophete et Mere des Croyants. Elle etait une commercante riche et prospere avant l\'Islam.'}},
  {emoji:'📚', ar:{name:'عائشة بنت أبي بكر',role:'أعظم عالمة في التاريخ الإسلامي',story:'روت أكثر من ٢٠٠٠ حديث. كان الصحابة يرجعون إليها في الفتوى. عُرفت بذكائها وفصاحتها.'}, en:{name:'Aisha bint Abu Bakr',role:'Greatest female scholar in Islamic history',story:'She narrated over 2,000 hadiths. The companions consulted her for religious rulings. Known for her intelligence and eloquence.'}, fr:{name:'Aisha bint Abu Bakr',role:'Plus grande savante de l\'histoire islamique',story:'Elle a rapporte plus de 2000 hadiths. Les compagnons la consultaient pour les avis religieux. Connue pour son intelligence et son eloquence.'}},
  {emoji:'🏥', ar:{name:'رفيدة الأسلمية',role:'أول طبيبة ميدانية في الإسلام',story:'أسست أول مستشفى ميداني في غزوة الخندق. كانت تعالج الجرحى وتدرب النساء على التمريض.'}, en:{name:'Rufaydah al-Aslamiyyah',role:'First field doctor in Islam',story:'She established the first field hospital during the Battle of the Trench. She treated the wounded and trained women in nursing.'}, fr:{name:'Rufaydah al-Aslamiyyah',role:'Premiere medecin de terrain en Islam',story:'Elle a fonde le premier hopital de campagne pendant la Bataille de la Tranchee. Elle soignait les blesses et formait les femmes aux soins infirmiers.'}},
  {emoji:'⚔️', ar:{name:'نسيبة بنت كعب',role:'مقاتلة شجاعة في غزوة أحد',story:'قاتلت دفاعاً عن النبي ﷺ في غزوة أحد وأُصيبت بـ ١٢ جرحاً. من أشجع نساء التاريخ الإسلامي.'}, en:{name:'Nusaybah bint Ka\'b',role:'Brave warrior at the Battle of Uhud',story:'She fought defending the Prophet at the Battle of Uhud and sustained 12 wounds. One of the bravest women in Islamic history.'}, fr:{name:'Nusaybah bint Ka\'b',role:'Guerriere courageuse a la Bataille d\'Uhud',story:'Elle a combattu pour defendre le Prophete a la Bataille d\'Uhud et a subi 12 blessures. L\'une des femmes les plus courageuses de l\'histoire islamique.'}},
  {emoji:'🕊️', ar:{name:'فاطمة الزهراء',role:'سيدة نساء أهل الجنة',story:'ابنة النبي ﷺ وأحب الناس إليه. عُرفت بالزهد والعبادة والبلاغة. دافعت عن حقها بفصاحة.'}, en:{name:'Fatimah az-Zahra',role:'Leader of the women of Paradise',story:'Daughter of the Prophet and dearest to him. Known for her piety, worship, and eloquence. She defended her rights with clarity.'}, fr:{name:'Fatimah az-Zahra',role:'Maitresse des femmes du Paradis',story:'Fille du Prophete et la plus chere a son coeur. Connue pour sa piete, son adoration et son eloquence. Elle a defendu ses droits avec clarte.'}},
  {emoji:'🏛️', ar:{name:'الشفاء بنت عبد الله',role:'أول وزيرة في الإسلام — ولّاها عمر على السوق',story:'عيّنها عمر بن الخطاب على حسبة سوق المدينة. كانت معلمة وكاتبة ومسؤولة إدارية.'}, en:{name:'Ash-Shifa bint Abdullah',role:'First female minister — appointed by Umar to oversee the market',story:'Umar ibn al-Khattab appointed her to oversee the market of Medina. She was a teacher, writer, and administrative official.'}, fr:{name:'Ash-Shifa bint Abdullah',role:'Premiere ministre feminine — nommee par Omar pour superviser le marche',story:'Omar ibn al-Khattab l\'a nommee pour superviser le marche de Medine. Elle etait enseignante, ecrivaine et responsable administrative.'}}
];

// ═══════════════ HABITS DATA ═══════════════
const HABITS = [
  {emoji:'📚', ar:{label:'اقرئي شيئاً مفيداً اليوم',source:'طلب العلم فريضة'}, en:{label:'Read something useful today',source:'Seeking knowledge is obligatory'}, fr:{label:'Lisez quelque chose d\'utile aujourd\'hui',source:'Chercher le savoir est obligatoire'}},
  {emoji:'🤲', ar:{label:'ادعي لأمك أو لامرأة صالحة',source:'بر الوالدين'}, en:{label:'Pray for your mother or a righteous woman',source:'Honoring parents'}, fr:{label:'Priez pour votre mere ou une femme pieuse',source:'Honorer les parents'}},
  {emoji:'💬', ar:{label:'شاركي معلومة مفيدة مع شخص',source:'الدال على الخير كفاعله'}, en:{label:'Share useful knowledge with someone',source:'Guiding to good is like doing it'}, fr:{label:'Partagez un savoir utile avec quelqu\'un',source:'Guider vers le bien est comme le faire'}},
  {emoji:'🌹', ar:{label:'قولي كلمة طيبة لأحد أفراد أسرتك',source:'خيركم خيركم لأهله'}, en:{label:'Say a kind word to a family member',source:'The best of you are best to their family'}, fr:{label:'Dites un mot gentil a un membre de votre famille',source:'Les meilleurs sont les meilleurs envers leur famille'}},
  {emoji:'📖', ar:{label:'اقرئي آية وتدبري معناها',source:'أفلا يتدبرون القرآن'}, en:{label:'Read a verse and reflect on its meaning',source:'Do they not reflect upon the Quran?'}, fr:{label:'Lisez un verset et reflechissez a son sens',source:'Ne meditent-ils pas sur le Coran ?'}},
  {emoji:'🤝', ar:{label:'ساعدي شخصاً محتاجاً اليوم',source:'والله في عون العبد ما كان العبد في عون أخيه'}, en:{label:'Help someone in need today',source:'God helps the servant as long as the servant helps others'}, fr:{label:'Aidez quelqu\'un dans le besoin aujourd\'hui',source:'Dieu aide le serviteur tant que le serviteur aide les autres'}},
  {emoji:'🙏', ar:{label:'سامحي شخصاً أخطأ في حقك',source:'وأن تعفوا أقرب للتقوى'}, en:{label:'Forgive someone who wronged you',source:'To pardon is closer to righteousness'}, fr:{label:'Pardonnez a quelqu\'un qui vous a fait du tort',source:'Pardonner est plus proche de la piete'}},
  {emoji:'🌟', ar:{label:'تأملي في نعمة واحدة واشكري الله',source:'لئن شكرتم لأزيدنكم'}, en:{label:'Reflect on one blessing and thank God',source:'If you are grateful, I will give you more'}, fr:{label:'Reflechissez a une benediction et remerciez Dieu',source:'Si vous etes reconnaissants, Je vous donnerai plus'}}
];

// ═══════════════ QUIZ DATA ═══════════════
const QUIZ = [
  {ar:'هل أعطى الإسلام المرأة حق التعليم؟', en:"Did Islam give women the right to education?", fr:"L'Islam a-t-il donne aux femmes le droit a l'education ?"},
  {ar:'هل يجوز إجبار المرأة على الزواج في الإسلام؟', en:'Is it permissible to force a woman into marriage in Islam?', fr:"Est-il permis de forcer une femme au mariage en Islam ?"},
  {ar:'هل للمرأة ذمة مالية مستقلة في الإسلام؟', en:'Does a woman have independent financial rights in Islam?', fr:'La femme a-t-elle des droits financiers independants en Islam ?'},
  {ar:'هل منع المرأة من المسجد من السنة النبوية؟', en:"Is banning women from mosques part of the Prophet's tradition?", fr:'Interdire les femmes dans les mosquees fait-il partie de la tradition prophetique ?'},
  {ar:'هل كانت خديجة رضي الله عنها سيدة أعمال؟', en:'Was Khadijah (may God be pleased with her) a businesswoman?', fr:'Khadijah etait-elle une femme d\'affaires ?'},
  {ar:'هل الحجاب قمع للمرأة في الإسلام؟', en:'Is hijab oppression of women in Islam?', fr:'Le hijab est-il une oppression de la femme en Islam ?'},
  {ar:'هل للمرأة حق طلب الطلاق في الإسلام؟', en:'Does a woman have the right to seek divorce in Islam?', fr:'La femme a-t-elle le droit de demander le divorce en Islam ?'},
  {ar:'هل القوامة تعني سيطرة الرجل على المرأة؟', en:"Does qiwamah mean man's control over woman?", fr:'La qiwamah signifie-t-elle le controle de l\'homme sur la femme ?'},
  {ar:'هل ترث المرأة دائماً نصف ما يرثه الرجل؟', en:'Does a woman always inherit half of what a man inherits?', fr:'La femme herite-t-elle toujours de la moitie de ce qu\'herite l\'homme ?'},
  {ar:'هل شاركت النساء في البيعة في عهد النبي ﷺ؟', en:"Did women participate in pledges of allegiance during the Prophet's time?", fr:'Les femmes ont-elles participe aux serments d\'allegeance a l\'epoque du Prophete ?'}
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء للأم',text:'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',tr:'My Lord, have mercy on them as they raised me when I was small'}, en:{label:'Prayer for Parents',text:'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',tr:'My Lord, have mercy on them as they raised me when I was small'}, fr:{label:'Priere pour les Parents',text:'رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',tr:'Seigneur, fais-leur misericorde comme ils m\'ont eleve quand j\'etais petit'}},
  {ar:{label:'دعاء الهداية',text:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',tr:'Our Lord, grant us from our spouses and children comfort of eyes'}, en:{label:'Prayer for Family',text:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',tr:'Our Lord, grant us from our spouses and children comfort of eyes'}, fr:{label:'Priere pour la Famille',text:'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ',tr:'Seigneur, accorde-nous de nos epoux et descendants la fraicheur des yeux'}},
  {ar:{label:'دعاء العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge'}, en:{label:'Prayer for Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge'}, fr:{label:'Priere pour le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Seigneur, augmente-moi en savoir'}},
  {ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Our Lord, pour patience upon us and plant our feet firmly'}, en:{label:'Prayer for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Our Lord, pour patience upon us and plant our feet firmly'}, fr:{label:'Priere pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Seigneur, donne-nous la patience et affermis nos pas'}},
  {ar:{label:'دعاء التوكل',text:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',tr:'Sufficient for us is God, and He is the best Disposer of affairs'}, en:{label:'Prayer of Trust',text:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',tr:'Sufficient for us is God, and He is the best Disposer of affairs'}, fr:{label:'Priere de Confiance',text:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',tr:'Dieu nous suffit, Il est le meilleur Garant'}},
  {ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, inspire me to be grateful for Your blessings'}, en:{label:'Prayer of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'My Lord, inspire me to be grateful for Your blessings'}, fr:{label:'Priere de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ',tr:'Seigneur, inspire-moi la reconnaissance de Tes bienfaits'}}
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('qm-lang') || 'ar';
let theme = localStorage.getItem('qm-theme') || 'rose';
const themes = ['rose','night','garden'];
const themeNames = {rose:'🌹 Rose',night:'🌙 Night',garden:'🌿 Garden'};
const themeIcons = ['🌹','🌙','🌿'];
let currentConceptIdx = -1;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initSplash();
  initTabs();
  initScrollTop();
  initTicker();
  renderHome();
  renderConcepts();
  renderHeroines();
  renderHabits();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('qm-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabConcepts', t.tabConcepts); set('tabHeroines', t.tabHeroines);
  set('tabHabits', t.tabHabits); set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('conceptsTitle', t.conceptsTitle); set('conceptsDesc', t.conceptsDesc);
  set('heroinesTitle', t.heroinesTitle); set('heroinesDesc', t.heroinesDesc);
  set('habitsTitle', t.habitsTitle); set('habitsDesc', t.habitsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  set('habitsReset', t.resetBtn);
  renderHome(); renderConcepts(); renderHeroines(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('qm-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ TICKER ═══════════════
function initTicker() {
  const el = document.getElementById('tickerText');
  if (!el) return;
  const msgs = {
    ar: ['🌹 قضايا المرأة بين التقاليد الراكدة والوافدة — الشيخ محمد الغزالي','📖 ٢٠ قضية عن حقوق المرأة في الإسلام','👑 نساء خالدات صنعن التاريخ'],
    en: ["🌹 Women's Issues Between Stagnant and Imported Traditions — Sheikh al-Ghazali",'📖 20 issues on women\'s rights in Islam','👑 Heroines who shaped Islamic history'],
    fr: ['🌹 Questions de la Femme entre Traditions Stagnantes et Importees — Sheikh al-Ghazali','📖 20 questions sur les droits de la femme en Islam','👑 Heroines qui ont faconne l\'histoire islamique']
  };
  const items = (msgs[lang] || msgs.en).map(m => `<span class="tc">&nbsp;&nbsp;&nbsp;${m}&nbsp;&nbsp;&nbsp;</span>`).join('');
  el.innerHTML = items + items;
  el.style.animation = `tickerMarquee ${(msgs[lang] || msgs.en).length * 12}s linear infinite`;
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CONCEPTS.length;
  const c = CONCEPTS[dayIdx];
  const cd = c[lang];
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${cd.title}</div>
    <div class="daily-body">${cd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=concepts]').click()">${t.tabConcepts} &#8594;</div>
  `;
  const sections = [
    {icon:'🌹',tab:'concepts',title:t.tabConcepts,desc:lang==='ar'?'٢٠ قضية إسلامية':lang==='fr'?'20 questions islamiques':'20 Islamic issues'},
    {icon:'👑',tab:'heroines',title:t.tabHeroines,desc:lang==='ar'?'نساء صنعن التاريخ':lang==='fr'?'Femmes qui ont fait l\'histoire':'Women who shaped history'},
    {icon:'📋',tab:'habits',title:t.tabHabits,desc:lang==='ar'?'تتبع يومي':lang==='fr'?'Suivi quotidien':'Daily tracking'},
    {icon:'🤔',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبري نفسك':lang==='fr'?'Testez-vous':'Test yourself'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  document.getElementById('homeGrid').innerHTML = sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: CONCEPTS ═══════════════
function renderConcepts() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="conceptsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterConcepts(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CONCEPTS.map((c, i) => {
    const d = c[lang];
    return `
    <div class="principle-card scroll-reveal" id="concept-${c.id}" data-search="${d.title.toLowerCase()}">
      <div class="principle-head" onclick="toggleCard('concept-${c.id}')">
        <span class="principle-num">${c.id}</span>
        <span class="principle-emoji">${c.emoji}</span>
        <span class="principle-title">${d.title}</span>
        <span class="principle-chev">&#9660;</span>
      </div>
      <div class="principle-body">
        <div class="principle-inner">
          <p class="principle-desc">${d.desc}</p>
          <div class="comparison-box">
            <div class="comparison-side carnegie-side">
              <div class="comp-label">✅ ${t.truth}</div>
              <div class="comp-text">${d.truth}</div>
            </div>
            <div class="comparison-side ghazali-side">
              <div class="comp-label">❌ ${t.myth}</div>
              <div class="comp-text">${d.myth}</div>
            </div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareConcept(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('conceptsContainer').innerHTML = searchBar + cards;
}

function filterConcepts(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.principle-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.principle-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

async function shareConcept(idx) {
  const c = CONCEPTS[idx];
  const d = c[lang];
  const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n💡 ${d.action}\n\n— قضايا المرأة | Women's Issues`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try { await navigator.clipboard.writeText(text); showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copie !' : 'Copied!'); } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: HEROINES ═══════════════
function renderHeroines() {
  document.getElementById('heroinesContainer').innerHTML = HEROINES.map(h => {
    const d = h[lang];
    return `
    <div class="anxiety-card scroll-reveal">
      <div class="anxiety-header">
        <span class="anxiety-emoji">${h.emoji}</span>
        <span class="anxiety-title">${d.name}</span>
      </div>
      <div class="anxiety-problem" style="border-color:var(--primary)">
        <span class="anxiety-label" style="color:var(--primary)">${d.role}</span>
      </div>
      <div class="anxiety-solution">
        <span class="anxiety-label" style="color:var(--accent)">${d.story}</span>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: HABITS ═══════════════
function renderHabits() {
  const today = new Date().toDateString();
  let habitsState = JSON.parse(localStorage.getItem('qm-habits') || '{}');
  if (habitsState.date !== today) {
    updateStreak(habitsState);
    habitsState = { date: today, done: [] };
    localStorage.setItem('qm-habits', JSON.stringify(habitsState));
  }
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  document.getElementById('habitsContainer').innerHTML = HABITS.map((h, i) => {
    const d = h[lang];
    const isDone = habitsState.done.includes(i);
    return `
    <div class="habit-item ${isDone ? 'done' : ''}" onclick="toggleHabit(${i})">
      <span class="habit-check">${isDone ? '&#10003;' : ''}</span>
      <span class="habit-emoji">${h.emoji}</span>
      <div><div class="habit-label">${d.label}</div><div class="habit-source">${d.source}</div></div>
    </div>`;
  }).join('');
  const streakEl = document.getElementById('streakBadge');
  if (streakEl) streakEl.innerHTML = streakHTML;
  updateHabitsProgress(habitsState);
}

function toggleHabit(i) {
  const today = new Date().toDateString();
  let hs = JSON.parse(localStorage.getItem('qm-habits') || '{}');
  if (hs.date !== today) hs = { date: today, done: [] };
  const idx = hs.done.indexOf(i);
  if (idx > -1) hs.done.splice(idx, 1); else hs.done.push(i);
  localStorage.setItem('qm-habits', JSON.stringify(hs));
  renderHabits();
  playSound(idx > -1 ? 'click' : 'success');
  if (hs.done.length === HABITS.length) { launchConfetti(); showToast(T[lang].allDone); }
}
function resetHabits() {
  localStorage.setItem('qm-habits', JSON.stringify({ date: new Date().toDateString(), done: [] }));
  renderHabits();
  showToast(lang === 'ar' ? 'تم إعادة التعيين' : lang === 'fr' ? 'Reinitialise' : 'Reset');
}
function updateHabitsProgress(hs) {
  const done = hs.done.length, total = HABITS.length, pct = total > 0 ? (done / total * 100) : 0;
  const fill = document.getElementById('habitsFill'), txt = document.getElementById('habitsText');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = `${done}/${total}`;
}
function updateStreak(prevState) {
  let streakData = JSON.parse(localStorage.getItem('qm-streak') || '{"count":0,"lastDate":""}');
  if (prevState && prevState.done && prevState.done.length === HABITS.length && prevState.date) {
    const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
    if (prevState.date === yesterday.toDateString()) streakData.count++;
    else if (prevState.date !== new Date().toDateString()) streakData.count = prevState.done.length === HABITS.length ? 1 : 0;
    streakData.lastDate = prevState.date;
  } else if (prevState && prevState.date) { streakData.count = 0; streakData.lastDate = prevState.date; }
  localStorage.setItem('qm-streak', JSON.stringify(streakData));
}
function getStreak() { return JSON.parse(localStorage.getItem('qm-streak') || '{"count":0}').count; }

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#AD1457','#E91E63','#F48FB1','#CE93D8','#FFD54F','#66BB6A','#4FC3F7'];
  for (let i = 0; i < 120; i++) particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,w:Math.random()*10+5,h:Math.random()*6+3,color:colors[Math.floor(Math.random()*colors.length)],vx:(Math.random()-0.5)*4,vy:Math.random()*3+2,rot:Math.random()*360,rotSpeed:(Math.random()-0.5)*10});
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI / 180); ctx.fillStyle = p.color; ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.style.display = 'none'; }
  }
  draw();
}

// ═══════════════ RENDER: QUIZ ═══════════════
function renderQuiz() {
  const t = T[lang];
  // Questions 1(no),3(yes),5(yes) are "correct=yes"; 2(no),4(no),6(no),8(no),9(no) are "correct=no"
  const correctAnswers = [2, 0, 2, 0, 2, 0, 2, 0, 0, 2]; // 2=yes,0=no
  document.getElementById('quizContainer').innerHTML = QUIZ.map((q, i) => `
    <div class="quiz-question scroll-reveal" id="quiz-q-${i}">
      <div class="quiz-q-text">${i+1}. ${q[lang]}</div>
      <div class="quiz-options">
        <button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${lang==='ar'?'نعم':lang==='fr'?'Oui':'Yes'}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${lang==='ar'?'أحياناً':lang==='fr'?'Parfois':'Sometimes'}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${lang==='ar'?'لا':lang==='fr'?'Non':'No'}</button>
      </div>
    </div>
  `).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden');
  window._quizAnswers = {};
  window._correctAnswers = correctAnswers;
}

function selectQuizOpt(qi, val) {
  window._quizAnswers[qi] = val;
  document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`).forEach((o, oi) => {
    o.classList.toggle('selected', [2,1,0][oi] === val);
  });
  playSound('click');
}

function submitQuiz() {
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length < QUIZ.length) {
    showToast(lang === 'ar' ? 'أجب على جميع الأسئلة' : lang === 'fr' ? 'Repondez a toutes les questions' : 'Answer all questions');
    return;
  }
  const correct = window._correctAnswers;
  let score = 0;
  Object.entries(answers).forEach(([qi, v]) => { if (v === correct[parseInt(qi)]) score++; });
  const pct = Math.round(score / QUIZ.length * 100);
  let emoji, title, desc;
  if (pct >= 80) {
    emoji = '🌟'; title = lang==='ar'?'ممتاز!':lang==='fr'?'Excellent !':'Excellent!';
    desc = lang==='ar'?'معرفتك بحقوق المرأة في الإسلام رائعة! استمري في نشر الوعي.':lang==='fr'?'Votre connaissance des droits de la femme en Islam est remarquable !':'Your knowledge of women\'s rights in Islam is remarkable! Keep spreading awareness.';
  } else if (pct >= 50) {
    emoji = '🌹'; title = lang==='ar'?'جيد':lang==='fr'?'Bien':'Good';
    desc = lang==='ar'?'لديك معرفة جيدة لكن هناك المزيد لتتعلميه. راجعي القضايا.':lang==='fr'?'Vous avez de bonnes connaissances mais il y a plus a apprendre.':'You have good knowledge but there\'s more to learn. Review the issues.';
  } else {
    emoji = '📚'; title = lang==='ar'?'تحتاجين للمراجعة':lang==='fr'?'Revision necessaire':'Review Needed';
    desc = lang==='ar'?'ابدئي بقراءة القضايا في هذا التطبيق لتعرفي حقوق المرأة الحقيقية في الإسلام.':lang==='fr'?'Commencez par lire les questions dans cette application.':'Start by reading the issues in this app to learn true women\'s rights in Islam.';
  }
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `<div class="qr-emoji">${emoji}</div><div class="qr-score">${pct}%</div><div class="qr-title">${title}</div><div class="qr-desc">${desc}</div><button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم', disclaimer: 'لست عالماً ولا مفتياً. هذا جهد متواضع لنشر فكر الشيخ الغزالي عن حقوق المرأة. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة.',
      authorName: 'الشيخ محمد الغزالي', authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري. من أبرز المدافعين عن حقوق المرأة في الإسلام. ألّف أكثر من ٩٤ كتاباً. درّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر).',
      bookTitle: 'عن الكتاب',
      bookDesc: '"قضايا المرأة بين التقاليد الراكدة والوافدة" يدافع فيه الغزالي عن حقوق المرأة كما جاءت في الإسلام الصحيح. ينتقد التقاليد المتحجرة التي ظلمت المرأة باسم الدين، وينتقد أيضاً الأفكار الغربية المستوردة. يوضح الموقف الوسطي العادل للإسلام.',
      sourcesTitle: 'المصادر', sources: ['كتاب "قضايا المرأة" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم'], contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice', disclaimer: "I am not a scholar. This is a humble effort to share Sheikh al-Ghazali's thought on women's rights. Content is derived from the book and trusted Islamic sources.",
      authorName: 'Sheikh Mohammed al-Ghazali', authorDates: '1917 — 1996',
      authorBio: "Egyptian Islamic scholar and thinker. One of the most prominent defenders of women's rights in Islam. Author of 94+ books. Taught at the University of Emir Abdelkader in Constantine, Algeria.",
      bookTitle: 'About the Book',
      bookDesc: '"Women\'s Issues Between Stagnant and Imported Traditions" — Al-Ghazali defends women\'s rights as they truly exist in Islam. He criticizes rigid traditions that oppressed women in the name of religion, and also criticizes imported Western ideas. He presents Islam\'s just and balanced position.',
      sourcesTitle: 'Sources', sources: ['"Women\'s Issues" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim'], contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important', disclaimer: "Je ne suis ni savant ni mufti. C'est un effort humble pour partager la pensee du Sheikh al-Ghazali sur les droits de la femme.",
      authorName: 'Sheikh Mohammed al-Ghazali', authorDates: '1917 — 1996',
      authorBio: "Savant et penseur islamique egyptien. L'un des plus grands defenseurs des droits de la femme en Islam. Auteur de plus de 94 livres. Professeur a l'Universite Emir Abdelkader de Constantine (Algerie).",
      bookTitle: 'A Propos du Livre',
      bookDesc: "\"Questions de la Femme entre Traditions Stagnantes et Importees\" — Al-Ghazali defend les droits de la femme tels qu'ils existent vraiment en Islam. Il critique les traditions rigides qui ont opprime les femmes au nom de la religion, et aussi les idees occidentales importees.",
      sourcesTitle: 'Sources', sources: ['"Questions de la Femme" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim'], contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  document.getElementById('aboutContainer').innerHTML = `
    <div class="about-disclaimer"><div class="about-disclaimer-title">${a.disclaimerTitle}</div><p>${a.disclaimer}</p></div>
    <div class="about-author"><span class="about-author-icon">📚</span><div class="about-author-info"><div class="about-author-name">${a.authorName}</div><div class="about-author-dates">${a.authorDates}</div><div class="about-author-bio">${a.authorBio}</div></div></div>
    <div class="about-section"><div class="about-section-title">${a.bookTitle}</div><p class="about-text">${a.bookDesc}</p></div>
    <div class="about-section"><div class="about-section-title">${a.sourcesTitle}</div>${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}</div>
    <div class="about-section"><p class="about-text">${a.contact}</p></div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [{title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي عن المرأة.'},{title:'📚 المصادر',body:'كتاب "قضايا المرأة" للشيخ محمد الغزالي.'},{title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٠ قضية، نساء خالدات، عادات، اختبار، أدعية.'},{title:'⌨️ اختصارات',body:'الأسهم للتنقل. Escape لإغلاق اللوحات.'}],
    en: [{title:'⚠️ Disclaimer',body:"I am not a scholar. This is a humble effort to share Sheikh al-Ghazali's wisdom on women."},{title:'📚 Sources',body:'"Women\'s Issues" by Sheikh Mohammed al-Ghazali.'},{title:'✨ Features',body:'Three languages, 3 themes, 20 issues, heroines, habits, quiz, duas.'},{title:'⌨️ Shortcuts',body:'Arrow keys to navigate. Escape to close panels.'}],
    fr: [{title:'⚠️ Avertissement',body:"Je ne suis pas un savant. C'est un effort humble pour partager la sagesse du Sheikh al-Ghazali."},{title:'📚 Sources',body:'"Questions de la Femme" par Sheikh Mohammed al-Ghazali.'},{title:'✨ Fonctionnalites',body:'Trois langues, 3 themes, 20 questions, heroines, habitudes, quiz, duas.'},{title:'⌨️ Raccourcis',body:'Fleches pour naviguer. Echap pour fermer.'}]
  };
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `<div class="help-item"><div class="help-item-title">${h.title}</div><div>${h.body}</div></div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item"><div class="dua-item-label">${dd.label}</div><div class="dua-item-ar">${dd.text}</div><div class="dua-item-tr">${dd.tr}</div></div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); } });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  function observeAll() { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el)); }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => setTimeout(observeAll, 100)); });
}

// ═══════════════ KEYBOARD NAV ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel'); if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel'); if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-concepts');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'conceptsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.principle-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentConceptIdx >= 0 && currentConceptIdx < cards.length) cards[currentConceptIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentConceptIdx = Math.max(0, Math.min(cards.length - 1, currentConceptIdx + dir));
      cards[currentConceptIdx].classList.add('open');
      cards[currentConceptIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) { const card = document.getElementById(id); if (card) { card.classList.toggle('open'); playSound('click'); } }
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) { const t = document.getElementById('toast'), m = document.getElementById('toastMsg'); if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); } }
function initScrollTop() { const btn = document.getElementById('scrollTop'); window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); }); }

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator(), gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}
