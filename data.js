var wordsData = [
    // "一"
    {answer: "いちばん", question: "一番", hint: "number one", sound: "いち", kanji:"一"},
    {answer: "いっしょ", question: "一緒", hint: "together", sound: "いっ", kanji:"一"},
    {answer: "ひとり", question: "一人", hint: "one person", sound: "ひと", kanji:"一"},
    {answer: "ゆいいつ", question: "唯一", hint: "only one", sound: "いつ", kanji:"一"},
    // "七"
    {answer: "なな", question: "七", hint: "seven", sound: "なな", kanji:"七"},
    {answer: "しちめんどう", question: "七面倒", hint: "very troublesome", sound: "しち", kanji:"七"},
    {answer: "なのか", question: "七日", hint: "seventh day", sound: "なの", kanji:"七"},
    // "万"
    {answer: "ばんぜん", question: "万全", hint: "perfection", sound: "ばん", kanji:"万"},
    {answer: "まんがいち", question: "万が一", hint: "once in a million", sound: "まん", kanji:"万"},
    {answer: "やおよろずのかみ", question: "八百万の神", hint: "all the gods and goddessses", sound: "よろず", kanji:"万"},
    // "三"
    {answer: "さんかく", question: "三角", hint: "triangle", sound: "さん", kanji:"三"},
    {answer: "みつどもえ", question: "三つ巴", hint: "triplet", sound: "み", kanji:"三"},
    {answer: "みつびし", question: "三菱", hint: "mitsubishi", sound: "みっ", kanji:"三"},
    // "上"
    {answer: "いじょう", question: "以上", hint: "more than", sound: "じょう", kanji:"上"},
    {answer: "まうえ", question: "真上", hint: "right above", sound: "うえ", kanji:"上"},
    {answer: "あがる", question: "上がる", hint: "raise", sound: "あ", kanji:"上"},
    {answer: "うわまわる", question: "上回る", hint: "to exceed", sound: "うわ", kanji:"上"},
    {answer: "のぼる", question: "上る", hint: "climb", sound: "のぼ", kanji:"上"},
    {answer: "おかみ", question: "御上", hint: "empress", sound: "かみ", kanji:"上"},
    {answer: "うりあげ", question: "売上", hint: "sale(improved)", sound: "あげ", kanji:"上"},
    // "下"
    {answer: "いか", question: "以下", hint: "less than", sound: "か", kanji:"下"},
    {answer: "したぎ", question: "下着", hint: "underwear", sound: "した", kanji:"下"},
    {answer: "みくだす", question: "見下す", hint: "look down", sound: "くだ", kanji:"下"},
    {answer: "さがる", question: "下がる", hint: "decrease", sound: "さ", kanji:"下"},
    {answer: "しもねた", question: "下ネタ", hint: "dirty joke", sound: "しも", kanji:"下"},
    {answer: "とびおろす", question: "飛び下す", hint: "jump down", sound: "お", kanji:"下"},
    {answer: "げひん", question: "下品", hint: "vulgar", sound: "げ", kanji:"下"},
    {answer: "しどうのもとに", question: "指導の下に", hint: "under the guidance", sound: "もと", kanji:"下"},
    // "中"
    {answer: "なかみ", question: "中身", hint: "inside", sound: "なか", kanji:"中"},
    {answer: "とちゅう", question: "途中", hint: "on the way", sound: "ちゅう", kanji:"中"},
    {answer: "みないうち", question: "見ない中", hint: "while", sound: "うち", kanji:"中"},
    // "九"
    {answer: "きゅうび", question: "九尾", hint: "nine tail", sound: "きゅう", kanji:"九"},
    {answer: "だいく", question: "第九", hint: "ninth", sound: "く", kanji:"九"},
    {answer: "ここのか", question: "9日", hint: "ninth day", sound: "ここの", kanji:"九"},
    // "二"
    {answer: "にどと", question: "二度と", hint: "never twice again", sound: "に", kanji:"二"},
    {answer: "ふたり", question: "二人", hint: "two person", sound: "ふた", kanji:"二"},
    {answer: "しんどふじ", question: "身土不二", hint: "you are what you eat", sound: "じ", kanji:"二"},
    // "五"
    {answer: "ごかん", question: "五", hint: "five", sound: "ご", kanji:"五"},
    {answer: "いそじ", question: "五十路", hint: "age fifty", sound: "い", kanji:"五"},
    {answer: "いつか", question: "五日", hint: "fifth day", sound: "いつ", kanji:"五"},
    {answer: "さつき", question: "五月", hint: "fifth month", sound: "い", kanji:"五"},
    // "人"
    {answer: "こいびと", question: "恋人", hint: "lover", sound: "ひと", kanji:"人"},
    {answer: "にんげん", question: "人間", hint: "human", sound: "にん", kanji:"人"},
    {answer: "じんせい", question: "人生", hint: "life", sound: "じん", kanji:"人"},
    {answer: "ひとり", question: "一人", hint: "alone", sound: "り", kanji:"人"},
    {answer: "すけっと", question: "助っ人", hint: "helper", sound: "と", kanji:"人"},
    // "今"
    {answer: "いまさら", question: "今更", hint: "too late now", sound: "いま", kanji:"今"},
    {answer: "こんど", question: "今度", hint: "this time", sound: "こん", kanji:"今"},
    // "休"
    {answer: "ひるやすみ", question: "昼休み", hint: "lunch break", sound: "やす", kanji:"休"},
    {answer: "きゅうけい", question: "休憩", hint: "break", sound: "きゅう", kanji:"休"},
    // "会"
    {answer: "かいしゃ", question: "会社", hint: "company", sound: "かい", kanji:"会"},
    {answer: "であい", question: "出会い", hint: "meeting", sound: "あ", kanji:"会"},
    {answer: "いちごいちえ", question: "一期一会", hint: "once in a lifetime", sound: "え", kanji:"会"},
    // "何"
    {answer: "なにげなく", question: "何気なく", hint: "casually", sound: "なに", kanji:"何"},
    {answer: "なんばいも", question: "何倍も", hint: "manyfold", sound: "なん", kanji:"何"},
    {answer: "きかがく", question: "幾何学", hint: "geometry", sound: "か", kanji:"何"},
    // "先"
    {answer: "せんぱい", question: "先輩", hint: "senior", sound: "せん", kanji:"先"},
    {answer: "ゆびさき", question: "指先", hint: "fingertip", sound: "さき", kanji:"先"},
    {answer: "まず", question: "先ず", hint: "first", sound: "ま", kanji:"先"},
    // "入"
    {answer: "おそれいる", question: "恐れ入る", hint: "sorry", sound: "い", kanji:"入"},
    {answer: "はいりこむ", question: "入り込む", hint: "go into", sound: "はい", kanji:"入"},
    {answer: "しんにゅうしゃいん", question: "新入社員", hint: "new employee", sound: "にゅう", kanji:"入"},
    {answer: "たちいりきんし", question: "立入禁止", hint: "prohibited area", sound: "いり", kanji:"入"},
    // "八"
    {answer: "しゃくはち", question: "尺八", hint: "blowjob", sound: "はち", kanji:"八"},
    {answer: "やおや", question: "八百屋", hint: "green grocer", sound: "や", kanji:"八"},
    {answer: "しほうはっぽう", question: "四方八方", hint: "all direction", sound: "はっ", kanji:"八"},
    // "六"
    {answer: "ろく", question: "六", hint: "six", sound: "ろく", kanji:"六"},
    {answer: "ろっかん", question: "六感", hint: "six sense", sound: "ろっ", kanji:"六"},
    {answer: "むっつ", question: "六つ", hint: "six things", sound: "むっ", kanji:"六"},
    // "円"
    {answer: "えんしゅうりつ", question: "円周率", hint: "PI", sound: "えん", kanji:"六"},
    // "出"
    {answer: "おもいで", question: "思い出", hint: "memories", sound: "で", kanji:"出"},
    {answer: "おもいだす", question: "思い出す", hint: "realized", sound: "だ", kanji:"出"},
    {answer: "しゅっぱつ", question: "出発", hint: "departure", sound: "しゅっ", kanji:"出"},
    // "分"
    {answer: "ぶんせき", question: "分析", hint: "analysis", sound: "ぶん", kanji:"分"},
    {answer: "やまわけ", question: "山分け", hint: "equal division", sound: "わ", kanji:"分"},
    // "前"
    {answer: "うでまえ", question: "腕前", hint: "ability", sound: "まえ", kanji:"前"},
    {answer: "ちょくぜん", question: "直前", hint: "immediately", sound: "ぜん", kanji:"前"},
    // "北"
    {answer: "ほくとう", question: "北東", hint: "northeast", sound: "ほく", kanji:"北"},
    {answer: "ほくせい", question: "北西", hint: "northwest", sound: "ほく", kanji:"北"},
    {answer: "きたかぜ", question: "北風", hint: "north wind", sound: "きた", kanji:"北"},
    {answer: "ほっかいどう", question: "北海道", hint: "city", sound: "ほっ", kanji:"北"},
    // "十"
    {answer: "じゅうぶｎ", question: "十分", hint: "enough", sound: "じゅう", kanji:"十"},
    {answer: "じゅっかい", question: "十回", hint: "ten times", sound: "じゅっ", kanji:"十"},
    {answer: "とおか", question: "十日", hint: "tenth day", sound: "とお", kanji:"十"},
    {answer: "みそじ", question: "三十路", hint: "age thirty", sound: "そ", kanji:"十"},
    // "千"
    {answer: "せん", question: "千", hint: "thousand", sound: "せん", kanji:"千"},
    {answer: "ちばけん", question: "千葉県", hint: "city", sound: "ち", kanji:"千"},
    // "午"
    {answer: "ごはん", question: "午飯", hint: "lunch", sound: "ご", kanji:"午"},
    {answer: "ひのえうま", question: "丙午", hint: "fire horse", sound: "うま", kanji:"午"},
    // "半"
    {answer: "かはんしん", question: "下半身", hint: "lower body", sound: "はん", kanji:"半"},
    {answer: "なかば", question: "半ば", hint: "half", sound: "なか", kanji:"半"},
    // "南"
    {answer: "なんとう", question: "南東", hint: "southeast", sound: "なん", kanji:"南"},
    {answer: "なんせい", question: "南西", hint: "southwest", sound: "なん", kanji:"南"},
    {answer: "みなみはんきゅう", question: "南半球", hint: "southern hemisphere", sound: "みなみ", kanji:"南"},
    {answer: "なむあみだぶつ", question: "南無阿弥陀仏", hint: "god bless", sound: "な", kanji:"南"},
    // "友"
    {answer: "ともだち", question: "友達", hint: "friend", sound: "とも", kanji:"友"},
    {answer: "ゆうじん", question: "友人", hint: "best friend", sound: "ゆう", kanji:"友"},
    // "口"
    {answer: "くちぶえ", question: "口笛", hint: "whistle", sound: "くち", kanji:"口"},
    {answer: "こうざ", question: "口座", hint: "bank account", sound: "こう", kanji:"口"},
    {answer: "くどく", question: "口説く", hint: "persuade", sound: "く", kanji:"口"},
    // "古"
    {answer: "こだい", question: "古代", hint: "ancient time", sound: "こ", kanji:"古"},
    {answer: "ふるぎ", question: "古着", hint: "old clothes", sound: "ふる", kanji:"古"},
    // "右"
    {answer: "みぎきき", question: "右利き", hint: "right handed", sound: "みぎ", kanji:"右"},
    {answer: "うよく", question: "右翼", hint: "right dominant", sound: "う", kanji:"右"},
    {answer: "じょうげさゆう", question: "上下左右", hint: "up down left right", sound: "ゆう", kanji:"右"},
    // "名"
    {answer: "なごや", question: "名古屋", hint: "city", sound: "な", kanji:"名"},
    {answer: "ゆうめい", question: "有名", hint: "famous", sound: "めい", kanji:"名"},
    {answer: "ほんみょう", question: "本名", hint: "real name", sound: "みょう", kanji:"名"},
    // "四"
    {answer: "よん", question: "四", hint: "four", sound: "よん", kanji:"四"},
    {answer: "しき", question: "四季", hint: "four season", sound: "し", kanji:"四"},
    {answer: "よにん", question: "四人", hint: "four peoples", sound: "よ", kanji:"四"},
    {answer: "しゅうよっか", question: "週四日", hint: "four days a week", sound: " よっ", kanji:"四"},
    // "国"
    {answer: "ていこく", question: "帝国", hint: "empire", sound: "こく", kanji:"国"},
    {answer: "くに", question: "国", hint: "country", sound: "くに", kanji:"国"},
    // "士"
    {answer: "しんし", question: "紳士", hint: "gentleman", sound: "し", kanji:"士"},
    {answer: "しかん", question: "士官", hint: "officer", sound: "し", kanji:"士"},
    // "外"
    {answer: "いがい", question: "意外", hint: "unexpected", sound: "がい", kanji:"外"},
    {answer: "そとまわり", question: "外回り", hint: "work outside", sound: "そと", kanji:"外"},
    {answer: "はずれ", question: "外れ", hint: "miss", sound: "はず", kanji:"外"},
    {answer: "げか", question: "外科", hint: "surgery", sound: "げ", kanji:"外"},
    // "多"
    {answer: "おおい", question: "多い", hint: "a lot", sound: "おお", kanji:"多"},
    {answer: "たぶん", question: "多分", hint: "maybe", sound: "た", kanji:"多"},
    // "大"
    {answer: "たいかい", question: "大会", hint: "tournament", sound: "たい", kanji:"大"},
    {answer: "おおさか", question: "大阪", hint: "city", sound: "おお", kanji:"大"},
    {answer: "おとな", question: "大人", hint: "adult", sound: "お", kanji:"大"},
    // "天"
    {answer: "てんさい", question: "天才", hint: "", sound: "てん", kanji:"天"},
    {answer: "あまのがわ", question: "天の川", hint: "", sound: "あま", kanji:"天"},
    // "女"
    {answer: "かのじょ", question: "彼女", hint: "girlfriend", sound: "じょ", kanji:"女"},
    {answer: "おんな", question: "女", hint: "woman", sound: "おんな", kanji:"女"},
    {answer: "おとめ", question: "乙女", hint: "maiden", sound: "め", kanji:"女"},
    {answer: "にょごのしま", question: "女護の島", hint: "virgin island", sound: "にょ", kanji:"女"},
    // "子"
    {answer: "こども", question: "子供", hint: "child", sound: "こ", kanji:"子"},
    {answer: "でんしおん", question: "電子音", hint: "electronic sound", sound: "し", kanji:"子"},
    {answer: "ようすみ", question: "様子見", hint: "wait and see", sound: "す", kanji:"子"},
    // "学"
    {answer: "かがく", question: "科学", hint: "science", sound: "がく", kanji:"学"},
    {answer: "まなび", question: "学び", hint: "learning", sound: "まな", kanji:"学"},
    // "安"
    {answer: "あんしん", question: "安心", hint: "safe", sound: "あん", kanji:"安"},
    {answer: "やすうり", question: "安売り", hint: "bergain sale", sound: "やす", kanji:"安"},
    // "小"
    {answer: "しょうがく", question: "小学", hint: "elementary class", sound: "しょう", kanji:"小"},
    {answer: "こゆび", question: "小指", hint: "pinky", sound: "こ", kanji:"小"},
    {answer: "ちいさい", question: "小さい", hint: "small", sound: "ちい", kanji:"小"},
    {answer: "おがわまち", question: "小川町", hint: "-town name-", sound: "お", kanji:"小"},
    // "少"
    {answer: "すこし", question: "少し", hint: "few", sound: "すこ", kanji:"少"},
    {answer: "たしょう", question: "多少", hint: "little", sound: "しょう", kanji:"少"},
    {answer: "すくない", question: "少ない", hint: "not enough", sound: "すく", kanji:"少"},
    // "山"
    {answer: "やまおく", question: "山奥", hint: "deep in the mountains", sound: "やま", kanji:"山"},
    {answer: "かざん", question: "火山", hint: "vocalno", sound: "さん", kanji:"山"},
    // "川"
    {answer: "かわ", question: "川", hint: "river", sound: "かわ", kanji:"川"},
    {answer: "かせん", question: "河川", hint: "rivers", sound: "せん", kanji:"川"},
    // "左"
    {answer: "ひだりきき", question: "左利き", hint: "left-handed", sound: "ひだり", kanji:"左"},
    {answer: "さほう", question: "左方", hint: "left side", sound: "さ", kanji:"左"},
    // "年"
    {answer: "としごろ", question: "年頃", hint: "appropriate age", sound: "とし", kanji:"年"},
    {answer: "ねんれい", question: "年齢", hint: "age", sound: "ねん", kanji:"年"},
    // "店"
    {answer: "ひゃっかてん", question: "百貨店", hint: "department store", sound: "てん", kanji:"店"},
    {answer: "みせばん", question: "店番", hint: "salesperson", sound: "みせ", kanji:"店"},
    {answer: "おたなもの", question: "お店者", hint: "store employee", sound: "たな", kanji:"店"},
    // "後"
    {answer: "ほうかご", question: "放課後", hint: "after school", sound: "ご", kanji:"後"},
    {answer: "のちほど", question: "後ほど", hint: "", sound: "のち", kanji:"後"},
    {answer: "こうかい", question: "後悔", hint: "", sound: "こう", kanji:"後"},
    {answer: "うしろ", question: "後ろ", hint: "", sound: "うし", kanji:"後"},
    {answer: "あとまわし", question: "後回し", hint: "", sound: "あと", kanji:"後"},
    {answer: "たちおくれ", question: "立ち後れ", hint: "", sound: "おく", kanji:"後"},
    // "時"
    {answer: "じきしょうそう", question: "時期尚早", hint: "premature", sound: "じ", kanji:"時"},
    {answer: "ときおり", question: "時折", hint: "sometimes", sound: "とき", kanji:"時"},
    {answer: "とけい", question: "時計", hint: "clock", sound: "と", kanji:"時"},
    // "書"
    {answer: "らくがき", question: "落書き", hint: "scribble", sound: "か", kanji:"書"},
    {answer: "しょるい", question: "書類", hint: "document", sound: "しょ", kanji:"書"},
    {answer: "はがき", question: "葉書", hint: "postcard", sound: "かき", kanji:"書"},
    // "母"
    {answer: "はは", question: "母", hint: "mother", sound: "はは", kanji:"母"},
    {answer: "そぼ", question: "祖母", hint: "grandmother", sound: "ぼ", kanji:"母"},
    // "毎"
    {answer: "まいにち", question: "毎日", hint: "everyday", sound: "まい", kanji:"毎"},
    // "気"
    {answer: "きもち", question: "気持ち", hint: "feeling", sound: "き", kanji:"気"},
    {answer: "けはい", question: "気配", hint: "atmosphere", sound: "け", kanji:"気"},
    // "水"
    {answer: "しおみず", question: "塩水", hint: "salt water", sound: "みず", kanji:"水"},
    {answer: "すいえい", question: "水泳", hint: "swimming", sound: "すい", kanji:"水"},
    // "火"
    {answer: "はなび", question: "花火", hint: "firework", sound: "ひ", kanji:"火"},
    {answer: "ほてり", question: "火照り", hint: "glow", sound: "ほ", kanji:"火"},
    // "父"
    {answer: "ちち", question: "父", hint: "father", sound: "ちち", kanji:"父"},
    {answer: "そふ", question: "祖父", hint: "grandfather", sound: "ふ", kanji:"父"},
    // "生"
    {answer: "せんせい", question: "先生", hint: "teacher", sound: "せい", kanji:"生"},
    {answer: "いきる", question: "生きる", hint: "live", sound: "せい", kanji:"生"},
    {answer: "うまれる", question: "生まれる", hint: "born", sound: "う", kanji:"生"},
    {answer: "いっしょう", question: "一生", hint: "forever", sound: "しょう", kanji:"生"},
    {answer: "なまいき", question: "生意気", hint: "imputent", sound: "なま", kanji:"生"},
    {answer: "はえる", question: "生える", hint: "grow", sound: "は", kanji:"生"},
    // "男"
    {answer: "おとこ", question: "男", hint: "man", sound: "おとこ", kanji:"男"},
    {answer: "だんせい", question: "男性", hint: "male", sound: "だん", kanji:"男"},
    {answer: "ちょうなん", question: "長男", hint: "eldest son", sound: "なん", kanji:"男"},
    // "白"
    {answer: "おもしろい", question: "面白い", hint: "amusing", sound: "しろ", kanji:"白"},
    {answer: "こくはく", question: "告白", hint: "confession", sound: "はく", kanji:"白"},
    {answer: "しらゆきひめ", question: "白雪姫", hint: "snow white", sound: "しら", kanji:"白"},
    {answer: "びゃくや", question: "白夜", hint: "midnight sun", sound: "びゃく", kanji:"白"},
    {answer: "はっきん", question: "白金", hint: "platinum", sound: "はっ", kanji:"白"},
    // "百"
    {answer: "ひゃく", question: "百", hint: "hundred", sound: "ひゃく", kanji:"百"},
    {answer: "ひゃっか", question: "百科", hint: "encyclopedia", sound: "ひゃっ", kanji:"百"},
    {answer: "やおや", question: "八百屋", hint: "green grocer", sound: "お", kanji:"百"},
    // "目"
    {answer: "めざす", question: "目指す", hint: "aim", sound: "め", kanji:"目"},
    {answer: "もくてき", question: "目的", hint: "goal", sound: "もく", kanji:"目"},
    {answer: "めんぼく", question: "面目", hint: "face", sound: "ぼく", kanji:"目"},
    // "社"
    {answer: "しゃかい", question: "社会", hint: "society", sound: "しゃ", kanji:"社"},
    // "空"
    {answer: "あおそら", question: "青空", hint: "blue sky", sound: "そら", kanji:"空"},
    {answer: "くうはく", question: "空白", hint: "blank", sound: "くう", kanji:"空"},
    {answer: "おなかすく", question: "お腹空く", hint: "hungry", sound: "す", kanji:"空"},
    {answer: "からまわり", question: "空回り", hint: "going circle", sound: "から", kanji:"空"},
    {answer: "あきべや", question: "空き部屋", hint: "empty room", sound: "あ", kanji:"空"},
    // "立"
    {answer: "たつ", question: "立つ", hint: "stand up", sound: "た", kanji:"立"},
    {answer: "せいりつ", question: "成立", hint: "formed", sound: "りつ", kanji:"立"},
    {answer: "たちば", question: "立場", hint: "position", sound: "たち", kanji:"立"},
    {answer: "こんだて", question: "献立", hint: "menu", sound: "たて", kanji:"立"},
    // "耳"
    {answer: "みみ", question: "耳", hint: "ear", sound: "みみ", kanji:"耳"},
    {answer: "じび", question: "耳鼻", hint: "ear and nose", sound: "じ", kanji:"耳"},
    // "聞"
    {answer: "きく", question: "聞く", hint: "hear", sound: "き", kanji:"聞"},
    {answer: "しんぶん", question: "新聞", hint: "newspaper", sound: "ぶん", kanji:"聞"},
    // "花"
    {answer: "はな", question: "花", hint: "flower", sound: "はな", kanji:"花"},
    {answer: "かふんしょう", question: "花粉症", hint: "hay fever", sound: "か", kanji:"花"},
    // "行"
    {answer: "いく", question: "行く", hint: "go", sound: "い", kanji:"行"},
    {answer: "りょこう", question: "旅行", hint: "travel", sound: "こう", kanji:"行"},
    {answer: "おこなう", question: "行う", hint: "perform", sound: "おこな", kanji:"行"},
    {answer: "しゅぎょう", question: "修行", hint: "training", sound: "ぎょう", kanji:"行"},
    // "西"
    {answer: "にし", question: "西", hint: "west", sound: "にし", kanji:"西"},
    {answer: "かんさい", question: "関西", hint: "kansai", sound: "さい", kanji:"西"},
    {answer: "せいれき", question: "西暦", hint: "calendar", sound: "せい", kanji:"西"},
    // "見"
    {answer: "みる", question: "見る", hint: "look", sound: "み", kanji:"見"},
    {answer: "はっけん", question: "発見", hint: "discovery", sound: "けん", kanji:"見"},
    // "言"
    {answer: "いう", question: "言う", hint: "say", sound: "い", kanji:"言"},
    {answer: "ことば", question: "言葉", hint: "word", sound: "こと", kanji:"言"},
    {answer: "げんご", question: "言語", hint: "language", sound: "げん", kanji:"言"},
    {answer: "でんごん", question: "伝言", hint: "message", sound: "ごん", kanji:"言"},
    // "話"
    {answer: "はなし", question: "話し", hint: "speak", sound: "はな", kanji:"話"},
    {answer: "でんわ", question: "電話", hint: "phone call", sound: "わ", kanji:"話"},
    // "語"
    {answer: "えいご", question: "英語", hint: "language", sound: "ご", kanji:"語"},
    {answer: "かたりあう", question: "語り合う", hint: "discussion", sound: "かた", kanji:"語"},
    // "買"
    {answer: "かう", question: "買う", hint: "buy", sound: "か", kanji:"買"},
    {answer: "ばいしゅう", question: "買収", hint: "bribe", sound: "ばい", kanji:"買"},
    // "足"
    {answer: "あし", question: "足", hint: "foot", sound: "あし", kanji:"足"},
    {answer: "たりる", question: "足りる", hint: "sufficient", sound: "た", kanji:"足"},
    {answer: "えんそく", question: "遠足", hint: "trip", sound: "そく", kanji:"足"},
    // "車"
    {answer: "でんしゃ", question: "電車", hint: "train", sound: "しゃ", kanji:"車"},
    {answer: "くるま", question: "車", hint: "car", sound: "くるま", kanji:"車"},
    // "週"
    {answer: "しゅうかん", question: "週間", hint: "week", sound: "しゅう", kanji:"週"},
    // "道"
    {answer: "みち", question: "道", hint: "road", sound: "みち", kanji:"道"},
    {answer: "ほっかいどう", question: "北海道", hint: "city name", sound: "どう", kanji:"道"},
    // "金"
    {answer: "きん", question: "金", hint: "gold", sound: "きん", kanji:"金"},
    {answer: "おかね", question: "お金", hint: "money", sound: "かね", kanji:"金"},
    {answer: "おうごん", question: "黄金", hint: "golden", sound: "ごん", kanji:"金"},
    {answer: "かなもの", question: "金物", hint: "metal", sound: "かな", kanji:"金"},
    // "長"
    {answer: "しゃちょう", question: "社長", hint: "company president", sound: "ちょう", kanji:"長"},
    {answer: "ながい", question: "長い", hint: "long", sound: "なが", kanji:"長"},
    // "間"
    {answer: "なかま", question: "仲間", hint: "ally", sound: "ま", kanji:"間"},
    {answer: "じかん", question: "時間", hint: "time", sound: "かん", kanji:"間"},
    {answer: "にんげん", question: "人間", hint: "human", sound: "げん", kanji:"間"},
    {answer: "とうぶんのあいだ", question: "当分の間", hint: "for a while", sound: "あいだ", kanji:"間"},
    // "雨"
    {answer: "あめ", question: "雨", hint: "rain", sound: "あめ", kanji:"雨"},
    {answer: "あまやどり", question: "雨宿り", hint: "shelter", sound: "あま", kanji:"雨"},
    {answer: "らいう", question: "雷雨", hint: "thunder rain", sound: "う", kanji:"雨"},
    {answer: "こさめ", question: "小雨", hint: "light rain", sound: "さめ", kanji:"雨"},
    // "電"
    {answer: "でんき", question: "電気", hint: "electric", sound: "でん", kanji:"電"},
    // "食"
    {answer: "たべる", question: "食べる", hint: "eat", sound: "た", kanji:"食"},
    {answer: "くう", question: "食", hint: "eat", sound: "く", kanji:"食"},
    {answer: "しょくじ", question: "食事", hint: "food", sound: "しょく", kanji:"食"},
    {answer: "こじき", question: "乞食", hint: "beg", sound: "じき", kanji:"食"},
    // "飲"
    {answer: "のむ", question: "飲む", hint: "drink", sound: "の", kanji:"飲"},
    {answer: "いんしょくてん", question: "飲食店", hint: "restaurant", sound: "いん", kanji:"飲"},
    // "駅"
    {answer: "えき", question: "駅", hint: "station", sound: "えき", kanji:"駅"},
    // "高"
    {answer: "さいこう", question: "最高", hint: "best", sound: "こう", kanji:"高"},
    {answer: "たかい", question: "高い", hint: "high", sound: "たか", kanji:"高"},
    // "魚"
    {answer: "さかな", question: "魚", hint: "fish", sound: "さかな", kanji:"魚"},
    {answer: "にんぎょ", question: "人魚", hint: "mermaid", sound: "ぎょ", kanji:"魚"},
    {answer: "うおざ", question: "魚座", hint: "pisces", sound: "うお", kanji:"魚"},
    // "不"
    {answer: "ふかのう", question: "不可能", hint: "impossible", sound: "ふ", kanji:"不"},
    // "世"
    {answer: "せかい", question: "世界", hint: "world", sound: "せ", kanji:"世"},
    {answer: "よのなか", question: "世の中", hint: "society", sound: "よ", kanji:"世"},
    {answer: "じんせい", question: "人世", hint: "this world", sound: "せい", kanji:"世"},
    // "主"
    {answer: "しゅじん", question: "主人", hint: "lord", sound: "しゅ", kanji:"主"},
    {answer: "あるじ", question: "主", hint: "lord", sound: "あるじ", kanji:"主"},
    {answer: "もちぬし", question: "持ち主", hint: "owner", sound: "ぬし", kanji:"主"},
    {answer: "ぼうず", question: "坊主", hint: "monk", sound: "ず", kanji:"主"},
    // "乗"
    {answer: "のる", question: "乗る", hint: "ride", sound: "の", kanji:"乗"},
    {answer: "じょうきゃく", question: "乗客", hint: "passenger", sound: "じょう", kanji:"乗"},
    // "事"
    {answer: "だいじ", question: "大事", hint: "important", sound: "じ", kanji:"事"},
    {answer: "しごと", question: "仕事", hint: "work", sound: "こと", kanji:"事"},
    // "京"
    {answer: "とうきょう", question: "東京", hint: "city name", sound: "きょう", kanji:"京"},
    {answer: "なんきんまち", question: "南京町", hint: "chinatown", sound: "きん", kanji:"京"},
    // "仕"
    {answer: "しかた", question: "仕方", hint: "method", sound: "し", kanji:"仕"},
    {answer: "つかえる", question: "仕える", hint: "serve", sound: "つか", kanji:"仕"},
    // "代"
    {answer: "じだい", question: "時代", hint: "generation", sound: "だい", kanji:"代"},
    {answer: "かわり", question: "代わり", hint: "replacement", sound: "か", kanji:"代"},
    {answer: "ちよだ", question: "千代田", hint: "city name", sound: "よ", kanji:"代"},
    {answer: "しろもの", question: "代物", hint: "prostitute", sound: "しろ", kanji:"代"},
    // "以"
    {answer: "いがい", question: "以外", hint: "except", sound: "い", kanji:"以"},
    // "低"
    {answer: "さいてい", question: "最低", hint: "worst", sound: "てい", kanji:"低"},
    {answer: "ひくい", question: "低い", hint: "low", sound: "ひく", kanji:"低"},
    // "住"
    {answer: "じゅうしょ", question: "住所", hint: "address", sound: "じゅう", kanji:"住"},
    {answer: "すむ", question: "住む", hint: "live", sound: "す", kanji:"住"},
    // "体"
    {answer: "たいりょく", question: "体力", hint: "stamina", sound: "たい", kanji:"体"},
    {answer: "からだ", question: "体", hint: "body", sound: "からだ", kanji:"体"},
    // "作"
    {answer: "せいさく", question: "制作", hint: "work", sound: "さく", kanji:"作"},
    {answer: "つくる", question: "作る", hint: "make", sound: "つく", kanji:"作"},
    {answer: "さぎょう", question: "作業", hint: "work", sound: "さ", kanji:"作"},
    {answer: "さっか", question: "作家", hint: "author", sound: "さっ", kanji:"作"},
    // "使"
    {answer: "つかう", question: "使う", hint: "use", sound: "つかう", kanji:"使"},
    {answer: "しよう", question: "使用", hint: "use", sound: "し", kanji:"使"},
    // "元"
    {answer: "げんき", question: "元気", hint: "wellness", sound: "げん", kanji:"元"},
    {answer: "みみもと", question: "耳元", hint: "whisper", sound: "もと", kanji:"元"},
    // "兄"
    {answer: "あに", question: "兄", hint: "brother", sound: "あに", kanji:"兄"},
    {answer: "きょうだい", question: "兄弟", hint: "siblings", sound: "きょう", kanji:"兄"},
    {answer: "けいまい", question: "兄妹", hint: "siblings", sound: "けい", kanji:"兄"},
    // "光"
    {answer: "ひかりとかげ", question: "光と影", hint: "rise and fall", sound: "ひかり", kanji:"光"},
    {answer: "えいこう", question: "栄光", hint: "glory", sound: "こう", kanji:"光"},
    // "写"
    {answer: "しゃしん", question: "写真", hint: "photo", sound: "しゃ", kanji:"写"},
    {answer: "うつる", question: "写る", hint: "photographed", sound: "うつ", kanji:"写"},
    // "冬"
    {answer: "ふゆ", question: "冬", hint: "winter", sound: "ふゆ", kanji:"冬"},
    {answer: "とうみん", question: "冬眠", hint: "hibernation", sound: "とう", kanji:"冬"},
    // "切"
    {answer: "きる", question: "切る", hint: "cut", sound: "き", kanji:"切"},
    {answer: "たいせつ", question: "大切", hint: "precious", sound: "せつ", kanji:"切"},
    {answer: "いっさい", question: "一切", hint: "not at all", sound: "さい", kanji:"切"},
    {answer: "きり", question: "切", hint: "cut", sound: "きり", kanji:"切"},
    {answer: "きっぷ", question: "切符", hint: "ticket", sound: "きっ", kanji:"切"},
    // "勉"
    {answer: "べんきょう", question: "勉強", hint: "study", sound: "べん", kanji:"勉"},
    // "動"
    {answer: "こうどう", question: "行動", hint: "action", sound: "どう", kanji:"動"},
    {answer: "うごく", question: "動く", hint: "movement", sound: "うご", kanji:"動"},
    // "区"
    {answer: "くやくしょ", question: "区役所", hint: "ward office", sound: "く", kanji:"区"},
    // "医"
    {answer: "いしゃ", question: "医者", hint: "doctor", sound: "い", kanji:"医者"},
    // "去"
    {answer: "つれさる", question: "連れ去る", hint: "take away", sound: "さる", kanji:"去"},
    {answer: "かこ", question: "過去", hint: "past", sound: "こ", kanji:"去"},
    {answer: "きょねん", question: "去年", hint: "last year", sound: "きょ", kanji:"去"},
    // "台"
    {answer: "だい", question: "台", hint: "table", sound: "だい", kanji:"台"},
    // "合"
    {answer: "であい", question: "出会い", hint: "meeting", sound: "あい", kanji:"会"},
    {answer: "しあい", question: "試合", hint: "match", sound: "あい", kanji:"会"},
    {answer: "ごうかく", question: "合格", hint: "exam passed", sound: "ごう", kanji:"合"},
    {answer: "がったい", question: "合体", hint: "fusion", sound: "がっ", kanji:"合"},
    // "同"
    {answer: "どうじ", question: "同時", hint: "same time", sound: "どう", kanji:"同"},
    {answer: "おなじ", question: "同じ", hint: "same", sound: "おな", kanji:"同"},
    // "味"
    {answer: "いみ", question: "意味", hint: "meaning", sound: "み", kanji:"味"},
    {answer: "あじ", question: "味", hint: "taste", sound: "あじ", kanji:"味"},
    // "品"
    {answer: "しょうひん", question: "商品", hint: "products", sound: "ひん", kanji:"品"},
    {answer: "しなもの", question: "品物", hint: "products", sound: "しな", kanji:"品"},
    // "員"
    {answer: "てんいん", question: "店員", hint: "shop employee", sound: "いん", kanji:"員"},
    // "問"
    {answer: "もんだい", question: "問題", hint: "questions", sound: "もん", kanji:"問"},
    {answer: "といあわせ", question: "問い合わせ", hint: "inquire", sound: "と", kanji:"問"},
    // "回"
    {answer: "こんかい", question: "今回", hint: "this time", sound: "かい", kanji:"回"},
    {answer: "まわる", question: "回る", hint: "turn", sound: "まわ", kanji:"回"},
    // "図"
    {answer: "ちず", question: "地図", hint: "map", sound: "ず", kanji:"図"},
    {answer: "としょかん", question: "図書館", hint: "library", sound: "と", kanji:"図"},
    {answer: "はかる", question: "図る", hint: "plan", sound: "はか", kanji:"図"},
    // "地"
    {answer: "ちきゅう", question: "地球", hint: "earth", sound: "ち", kanji:"地"},
    {answer: "じめん", question: "地面", hint: "ground", sound: "じ", kanji:"地"},
    // "堂"
    {answer: "しょくどう", question: "食堂", hint: "diner hall", sound: "どう", kanji:"堂"},
    // "場"
    {answer: "ばしょう", question: "場所", hint: "place", sound: "ば", kanji:"場"},
    {answer: "とうじょう", question: "登場", hint: "entry", sound: "じょう", kanji:"場"},
    // "声"
    {answer: "こえ", question: "声", hint: "voice", sound: "こえ", kanji:"声"},
    {answer: "せいゆう", question: "声優", hint: "voice actor", sound: "せい", kanji:"声"},
    // "売"
    {answer: "うる", question: "売る", hint: "sell", sound: "う", kanji:"売"},
    {answer: "しょうばい", question: "商売", hint: "trade", sound: "ばい", kanji:"売"},
    {answer: "うりあげ", question: "売上", hint: "sales", sound: "うり", kanji:"売"},
    // "夏"
    {answer: "なつ", question: "夏", hint: "summer", sound: "なつ", kanji:"夏"},
    {answer: "げちゅう", question: "夏中", hint: "summer period", sound: "げ", kanji:"夏"},
    {answer: "かき", question: "夏季", hint: "summer season", sound: "か", kanji:"夏"},
    // "夕"
    {answer: "ゆうひ", question: "夕日", hint: "evening sun", sound: "ゆう", kanji:"夕"},
    {answer: "こんせき", question: "今夕", hint: "this evening", sound: "せき", kanji:"夕"},
    // "夜"
    {answer: "よる", question: "夜", hint: "night", sound: "よる", kanji:"夜"},
    {answer: "こんや", question: "今夜", hint: "tonight", sound: "や", kanji:"夜"},
    {answer: "よぞら", question: "夜空", hint: "night sky", sound: "よ", kanji:"夜"},
    // 駐
    {answer: "ちゅうしゃじょう", question: "駐車場", hint: "parking lot", sound: "ちゅう", kanji:"駐"},
    // 無
    {answer: "むり", question: "無理", hint: "impossible", sound: "む", kanji:"無"},
    {answer: "ぶじ", question: "無事", hint: "safely", sound: "ぶ", kanji:"無"},
    {answer: "だいなし", question: "台無し", hint: "waste", sound: "な", kanji:"無"},
    // 満
    {answer: "まんぞく", question: "満足", hint: "sastisfied", sound: "まん", kanji:"満"},
    {answer: "みちる", question: "満ちる", hint: "overflow", sound: "み", kanji:"満"},
    // 向
    {answer: "むかう", question: "向かう", hint: "headed", sound: "む", kanji:"向"},
    {answer: "ほうこう", question: "方向", hint: "direction", sound: "こう", kanji:"向"},
    // 禁
    {answer: "きんし", question: "禁止", hint: "prohibition", sound: "きん", kanji:"禁"},
    // 関
    {answer: "かんけい", question: "関係", hint: "relation", sound: "かん", kanji:"関"},
    {answer: "かかわる", question: "関わる", hint: "affected", sound: "かか", kanji:"関"},
    {answer: "せきしょ", question: "関所", hint: "barrier", sound: "せき", kanji:"関"},
    // 係
    {answer: "かんけい", question: "関係", hint: "relation", sound: "けい", kanji:"係"},
    {answer: "がかり", question: "係", hint: "in charge of", sound: "がかり", kanji:"係"},
    // 断
    {answer: "はんだん", question: "判断", hint: "decision", sound: "だん", kanji:"断"},
    {answer: "ことわる", question: "断る", hint: "refuse", sound: "ことわ", kanji:"断"},
    {answer: "しょくをたつ", question: "食を断つ", hint: "fast", sound: "た", kanji:"断"},
    // 横
    {answer: "よこ", question: "横", hint: "horizontal", sound: "よこ", kanji:"横"},
    {answer: "おうだん", question: "横断", hint: "crossing", sound: "おう", kanji:"横"},
    // 押
    {answer: "おす", question: "押す", hint: "push", sound: "お", kanji:"押"},
    // 式
    {answer: "しき", question: "式", hint: "ceremony", sound: "しき", kanji:"式"},
    // 信
    {answer: "しんじる", question: "信じる", hint: "believe", sound: "しん", kanji:"信"},
    // 号
    {answer: "ごう", question: "号", hint: "number", sound: "ごう", kanji:"号"},
    // 確
    {answer: "たしか", question: "確か", hint: "sure", sound: "たし", kanji:"確"},
    {answer: "かくにん", question: "確認", hint: "confirmation", sound: "かか", kanji:"確"},
    // 認
    {answer: "かくにん", question: "確認", hint: "confirmation", sound: "にん", kanji:"認"},
    {answer: "みとめる", question: "認める", hint: "approve", sound: "みと", kanji:"認"},
    // 飛
    {answer: "とぶ", question: "飛ぶ", hint: "fly", sound: "と", kanji:"飛"},
    {answer: "ひこうき", question: "飛行機", hint: "airplane", sound: "ひ", kanji:"飛"},
    // 非
    {answer: "ぜひ", question: "是非", hint: "certainly", sound: "ひ", kanji:"非"},
    // 常
    {answer: "ひじょう", question: "非常", hint: "extremly", sound: "じょう", kanji:"常"},
    {answer: "つねに", question: "常に", hint: "always", sound: "つね", kanji:"常"},
    {answer: "とこやみ", question: "常闇", hint: "ever dark", sound: "とこ", kanji:"常"},
    {answer: "ときわぎ", question: "常盤木", hint: "evergreen tree", sound: "とき", kanji:"常"},
    // 階
    {answer: "２かい", question: "2階", hint: "2nd floor", sound: "かい", kanji:"階"},
    // 段
    {answer: "かいだん", question: "階段", hint: "staircase", sound: "だん", kanji:"段"},
    // 箱
    {answer: "はこ", question: "箱", hint: "box", sound: "はこ", kanji:"箱"},
    // 危
    {answer: "きけん", question: "危険", hint: "danger", sound: "き", kanji:"危"},
    {answer: "あやうく", question: "危うく", hint: "near death", sound: "あや", kanji:"危"},
    {answer: "あぶない", question: "危ない", hint: "dangerous", sound: "あぶ", kanji:"危"},
    // 険
    {answer: "ぼうけん", question: "冒険", hint: "adventure", sound: "けん", kanji:"険"},
    {answer: "けわしい", question: "険しい", hint: "steep", sound: "けわ", kanji:"険"},
    // 捨
    {answer: "すてる", question: "捨てる", hint: "throw", sound: "す", kanji:"捨"},
    {answer: "しゅしゃせんたく", question: "取捨選択", hint: "elimination selection", sound: "しゃ", kanji:"捨"},
    // 線
    {answer: "せん", question: "線", hint: "line", sound: "せん", kanji:"線"},
    // 面
    {answer: "かめん", question: "仮面", hint: "mask", sound: "めん", kanji:"面"},
    {answer: "おもしろい", question: "面白い", hint: "funny", sound: "おも", kanji:"面"},
    {answer: "えずら", question: "絵面", hint: "appearance", sound: "ずら", kanji:"面"},
    // 普
    {answer: "ふつう", question: "普通", hint: "normal", sound: "ふ", kanji:"普"},
    // 名
    {answer: "なまえ", question: "名前", hint: "name", sound: "な", kanji:"名"},
    {answer: "ゆうめい", question: "有名", hint: "famous", sound: "めい", kanji:"名"},
    {answer: "ほんみょう", question: "本名", hint: "real name", sound: "みょう", kanji:"名"},
    // 次
    {answer: "つぎ", question: "次", hint: "next", sound: "つぎ", kanji:"次"},
    {answer: "じかい", question: "次回", hint: "next time", sound: "じ", kanji:"次"},
    {answer: "つぐ", question: "次ぐ", hint: "follow", sound: "つ", kanji:"次"},
    // 快
    {answer: "ゆかい", question: "愉快", hint: "pleasure", sound: "かい", kanji:"快"},
    {answer: "こころよい", question: "快い", hint: "pleasant", sound: "こころよ", kanji:"快"},
    // 速
    {answer: "さっそく", question: "早速", hint: "at once", sound: "そく", kanji:"速"},
    {answer: "はやさ", question: "速さ", hint: "speed", sound: "はや", kanji:"速"},
    {answer: "すみやか", question: "速やか", hint: "quick", sound: "すみ", kanji:"速"},
    // 過
    {answer: "かこ", question: "過去", hint: "past", sound: "か", kanji:"過"},
    {answer: "すごす", question: "過ごす", hint: "spend time", sound: "す", kanji:"過"},
    {answer: "あやまち", question: "過ち", hint: "mistake", sound: "あやま", kanji:"過"},
    // 鉄
    {answer: "てつ", question: "鉄", hint: "iron", sound: "てつ", kanji:"鉄"},
    {answer: "てっぽう", question: "鉄砲", hint: "gun", sound: "てっ", kanji:"鉄"},
    // 指
    {answer: "しじ", question: "指示", hint: "instruction", sound: "し", kanji:"指"},
    {answer: "さす", question: "指す", hint: "point", sound: "さ", kanji:"指"},
    {answer: "ゆび", question: "指", hint: "finger", sound: "ゆび", kanji:"指"},
    // 定
    {answer: "よてい", question: "予定", hint: "plan", sound: "てい", kanji:"定"},
    {answer: "じょうぎ", question: "定規", hint: "ruler", sound: "じょう", kanji:"定"},
    {answer: "さだめ", question: "定め", hint: "destiny", sound: "さだ", kanji:"定"},
    // 席
    {answer: "せき", question: "席", hint: "seat", sound: "せき", kanji:"席"},
    // 由
    {answer: "じゆう", question: "自由", hint: "freedom", sound: "ゆう", kanji:"由"},
    {answer: "ゆゆしき", question: "由々しき", hint: "serious", sound: "ゆ", kanji:"由"},
    // 番
    {answer: "ばん", question: "番", hint: "number", sound: "ばん", kanji:"番"},
    // 窓
    {answer: "まど", question: "窓", hint: "window", sound: "まど", kanji:"窓"},
    {answer: "どうそうかい", question: "同窓会", hint: "alumini association", sound: "そう", kanji:"窓"},
    // 側
    // 路
    // 停
    // 整
    // 券
    // 現
    // 両
    // 替
    // 優
    // 座
    // 降
    // 準
    // 備
    // 営
    // 閉
    // 案
    // 内
    // 予
    // 約
    // 煙
    // 当
    // 全
    // 客
    // 様
    // 解
    // 協
    // 願
    // 観
    // 園
    // 港
    // 遊
    // 美
    // 術
    // 神
    // 寺
    // 役
    // 郵
    // 局
    // 交
    // 差
    // 点
    // 橋
    // 公
    // 受
    // 付
    // 科
    // 鼻
    // 婦
    // 形
    // 骨
    // 折
    // 困
    // 消
    // 防
    // 救
    // 経
    // 故
    // 伝
    // 要
    // 冷
    // 蔵
    // 凍
    // 庫
    // 召
    // 保
    // 存
    // 必
    // 費
    // 期
    // 限
    // 製
    // 造
    // 賞
    // 法
    // 販
    // 機
    // 増
    // 減
    // 量
    // 氷
    // 返
    // 湯
    // 材
    // 卵
    // 乳
    // 粉
    // 袋
    // 混
    // 焼
    // 表
    // 裏
    // 留
    // 守
    // 濃
    // 薄
    // 部
    // 数
    // 件
    // 再
    // 接
    // 続
    // 示
    // 戻
    // 完
    // 了
    // 登
    // 録
]
