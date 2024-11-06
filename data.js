var wordsData = [
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
    {answer: "うちがわ", question: "内側", hint: "inside side", sound: "がわ", kanji:"側"},
    {answer: "そくめん", question: "側面", hint: "aspect", sound: "そく", kanji:"側"},
    // 路
    {answer: "めいろ", question: "迷路", hint: "maze", sound: "ろ", kanji:"路"},
    {answer: "ながみち", question: "長路", hint: "long road", sound: "みち", kanji:"路"},
    {answer: "たびじ", question: "旅路", hint: "journey", sound: "じ", kanji:"路"},
    // 停
    {answer: "ていし", question: "停止", hint: "cease", sound: "てい", kanji:"停"},
    // 整
    {answer: "せいり", question: "整理", hint: "sorting", sound: "せい", kanji:"整"},
    {answer: "ととのえる", question: "整える", hint: "in order", sound: "ととの", kanji:"整"},
    // 券
    {answer: "ていきけん", question: "定期券", hint: "commuter ticket", sound: "けん", kanji:"券"},
    // 現
    {answer: "げんじつ", question: "現実", hint: "reality", sound: "げん", kanji:"現"},
    {answer: "あらわれる", question: "現れる", hint: "appear", sound: "あらわ", kanji:"現"},
    // 両
    {answer: "りょうしん", question: "両親", hint: "parents", sound: "りょう", kanji:"両"},
    // 替
    {answer: "かえる", question: "替える", hint: "change", sound: "か", kanji:"替"},
    {answer: "だいたい", question: "代替", hint: "spare part", sound: "たい", kanji:"替"},
    // 優
    {answer: "ゆうしゅう", question: "優秀", hint: "excellant", sound: "ゆう", kanji:"優"},
    {answer: "やさしい", question: "優しい", hint: "kind", sound: "やさ", kanji:"優"},
    {answer: "すぐれる", question: "優れる", hint: "outstanding", sound: "すぐ", kanji:"優"},
    // 座
    {answer: "どげざ", question: "土下座", hint: "bow", sound: "ざ", kanji:"座"},
    {answer: "すわる", question: "座る", hint: "sit", sound: "すわ", kanji:"座"},
    // 降
    {answer: "ふる", question: "降る", hint: "fall", sound: "ふ", kanji:"降"},
    {answer: "こうさん", question: "降参", hint: "surrender", sound: "こう", kanji:"降"},
    // 準
    {answer: "じゅんび", question: "準備", hint: "preparation", sound: "じゅん", kanji:"準"},
    // 備
    {answer: "そうび", question: "装備", hint: "equipment", sound: "び", kanji:"備"},
    {answer: "そなえて", question: "備えて", hint: "prepare", sound: "そな", kanji:"備"},
    // 営
    {answer: "うんえい", question: "運営", hint: "admin", sound: "えい", kanji:"営"},
    {answer: "いとなみ", question: "営み", hint: "activity", sound: "いとな", kanji:"営"},
    // 閉
    {answer: "とじる", question: "閉じる", hint: "close", sound: "と", kanji:"閉"},
    {answer: "へいてん", question: "閉店", hint: "closed shop", sound: "へい", kanji:"閉"},
    {answer: "しまる", question: "閉まる", hint: "close", sound: "し", kanji:"閉"},
    // 案
    {answer: "ていあん", question: "提案", hint: "proposal", sound: "あん", kanji:"案"},
    // 内
    {answer: "あんない", question: "案内", hint: "guide", sound: "ない", kanji:"内"},
    {answer: "うち", question: "内", hint: "inside", sound: "うち", kanji:"内"},
    // 予
    {answer: "よてい", question: "予定", hint: "plan", sound: "よ", kanji:"予"},
    {answer: "あらかじめ", question: "予め", hint: "in advance", sound: "あらかじ", kanji:"予"},
    // 約
    {answer: "やくそく", question: "約束", hint: "promise", sound: "やく", kanji:"約"},
    // 煙
    {answer: "けむり", question: "煙", hint: "smoke", sound: "けむり", kanji:"煙"},
    {answer: "きつえんしつ", question: "喫煙室", hint: "smoking room", sound: "えん", kanji:"煙"},
    // 当
    {answer: "ほんとう", question: "本当", hint: "really", sound: "とう", kanji:"当"},
    {answer: "あたり", question: "当たり", hint: "target", sound: "あ", kanji:"当"},
    // 全
    {answer: "ぜんぶ", question: "全部", hint: "everything", sound: "ぜん", kanji:"全"},
    {answer: "すべて", question: "全て", hint: "all", sound: "すべ", kanji:"全"},
    {answer: "まったく", question: "全く", hint: "not at all", sound: "まった", kanji:"全"},
    // 客
    {answer: "きゃく", question: "客", hint: "customer", sound: "きゃく", kanji:"客"},
    // 様
    {answer: "ようす", question: "様子", hint: "appearance", sound: "よう", kanji:"様"},
    {answer: "かみさま", question: "神様", hint: "god", sound: "さま", kanji:"様"},
    // 解
    {answer: "りかい", question: "理解", hint: "understood", sound: "かい", kanji:"解"},
    {answer: "とく", question: "解く", hint: "untie", sound: "と", kanji:"解"},
    {answer: "げどく", question: "解毒", hint: "antidote", sound: "げ", kanji:"解"},
    // 協
    {answer: "きょうりょく", question: "協力", hint: "cooperation", sound: "きょう", kanji:"協"},
    // 願
    {answer: "ねがい", question: "願い", hint: "wish", sound: "ねが", kanji:"願"},
    {answer: "がんぼう", question: "願望", hint: "desire", sound: "がん", kanji:"願"},
    // 観
    {answer: "かんきゃく", question: "観客", hint: "tourist", sound: "かん", kanji:"観"},
    {answer: "はなをみる", question: "花を観る", hint: "sightseeing", sound: "み", kanji:"観"},
    // 園
    {answer: "こうえん", question: "公園", hint: "park", sound: "えん", kanji:"園"},
    {answer: "はなぞの", question: "花園", hint: "flower garden", sound: "ぞの", kanji:"園"},
    // 港
    {answer: "みなと", question: "港", hint: "port", sound: "みなと", kanji:"港"},
    {answer: "くうこう", question: "空港", hint: "airport", sound: "こう", kanji:"港"},
    // 遊
    {answer: "あそび", question: "遊び", hint: "play", sound: "あそ", kanji:"遊"},
    {answer: "ゆうえんち", question: "遊園地", hint: "amusement park", sound: "ゆう", kanji:"遊"},
    {answer: "ゆさん", question: "遊山", hint: "hiking", sound: "ゆ", kanji:"遊"},
    // 美
    {answer: "びじん", question: "美人", hint: "pretty", sound: "び", kanji:"美"},
    {answer: "うつくしい", question: "美しい", hint: "pretty", sound: "うつく", kanji:"美"},
    {answer: "みそら", question: "美空", hint: "beautiful sky", sound: "み", kanji:"美"},
    // 術
    {answer: "じゅつ", question: "術", hint: "technique", sound: "じゅつ", kanji:"術"},
    // 神
    {answer: "かみ", question: "神", hint: "god", sound: "かみ", kanji:"神"},
    {answer: "じんじゃ", question: "神社", hint: "temple", sound: "じん", kanji:"神"},
    // 寺
    {answer: "てら", question: "寺", hint: "temple", sound: "てら", kanji:"寺"},
    {answer: "じんぐうじ", question: "神宮寺", hint: "buddist temple", sound: "じ", kanji:"寺"},
    // 役
    {answer: "やく", question: "役", hint: "role", sound: "やく", kanji:"役"},
    {answer: "げんえき", question: "現役", hint: "active duty", sound: "えき", kanji:"役"},
    // 郵
    {answer: "ゆうびんきょく", question: "郵便局", hint: "post", sound: "ゆう", kanji:"郵"},
    // 局
    {answer: "けっきょく", question: "結局", hint: "after all", sound: "きょく", kanji:"局"},
    {answer: "おつぼね", question: "お局", hint: "OTBN", sound: "つぼね", kanji:"局"},
    // 交
    {answer: "こうばん", question: "交番", hint: "police box", sound: "こう", kanji:"交"},
    {answer: "かわす", question: "交わす", hint: "transfer", sound: "か", kanji:"交"},
    {answer: "まじる", question: "交じる", hint: "mix", sound: "ま", kanji:"交"},
    // 差
    {answer: "ひざし", question: "日差し", hint: "sunlight", sound: "さ", kanji:"ひざし"},
    {answer: "さべつ", question: "差別", hint: "discriminate", sound: "さ", kanji:"差"},
    {answer: "さしいれ", question: "差し入れ", hint: "sender", sound: "さ", kanji:"差"},
    // 点
    {answer: "２てん", question: "2点", hint: "score", sound: "てん", kanji:"点"},
    // 橋
    {answer: "はし", question: "橋", hint: "bridge", sound: "はし", kanji:"橋"},
    {answer: "ほどうきょう", question: "歩道橋", hint: "pedestrian bridge", sound: "きょう", kanji:"橋"},
    // 公
    {answer: "こうえん", question: "公園", hint: "park", sound: "こう", kanji:"公"},
    {answer: "おおやけ", question: "公", hint: "public", sound: "おおやけ", kanji:"公"},
    // 受
    {answer: "うける", question: "受ける", hint: "take", sound: "う", kanji:"受"},
    {answer: "じゅけん", question: "受験", hint: "exam", sound: "じゅ", kanji:"受"},
    // 付
    {answer: "つける", question: "付ける", hint: "attach", sound: "つ", kanji:"付"},
    // 科
    {answer: "かがく", question: "科学", hint: "science", sound: "か", kanji:"科"},
    // 鼻
    {answer: "はな", question: "鼻", hint: "nose", sound: "はな", kanji:"鼻"},
    {answer: "じび", question: "耳鼻", hint: "nose and ears", sound: "び", kanji:"鼻"},
    // 婦
    {answer: "ふうふ", question: "夫婦", hint: "married couple", sound: "ふ", kanji:"婦"},
    // 形
    {answer: "かたち", question: "形", hint: "shape", sound: "かたち", kanji:"形"},
    {answer: "へんけい", question: "変形", hint: "transformation", sound: "けい", kanji:"形"},
    {answer: "にんぎょう", question: "人形", hint: "doll", sound: "ぎょう", kanji:"形"},
    {answer: "はながた", question: "花形", hint: "flower pattern", sound: "がた", kanji:"形"},
    // 骨
    {answer: "ほね", question: "骨", hint: "bone", sound: "ほね", kanji:"骨"},
    {answer: "こっせつ", question: "骨折", hint: "bone fracture", sound: "こっ", kanji:"骨"},
    // 折
    {answer: "ざせつ", question: "挫折", hint: "setback", sound: "せつ", kanji:"折"},
    {answer: "おれる", question: "折れる", hint: "break", sound: "お", kanji:"折"},
    // 困
    {answer: "こまる", question: "困る", hint: "confused", sound: "こま", kanji:"困"},
    {answer: "こんなん", question: "困難", hint: "diificulty", sound: "こん", kanji:"困"},
    // 消
    {answer: "きえる", question: "消える", hint: "disappear", sound: "き", kanji:"消"},
    {answer: "しょうか", question: "消火", hint: "extinguish", sound: "しょう", kanji:"消"},
    {answer: "けす", question: "消す", hint: "erase", sound: "け", kanji:"消"},
    // 防
    {answer: "ふせぐ", question: "防ぐ", hint: "avoid", sound: "ふせ", kanji:"防"},
    {answer: "ぼうぎょ", question: "防御", hint: "defense", sound: "ぼう", kanji:"防"},
    // 救
    {answer: "すくう", question: "救う", hint: "resuce", sound: "すく", kanji:"救"},
    {answer: "きゅうしゅつ", question: "救出", hint: "rescue", sound: "きゅう", kanji:"救"},
    // 経
    {answer: "けいけん", question: "経験", hint: "experience", sound: "けい", kanji:"経"},
    {answer: "じかんがたって", question: "時間が経って", hint: "time passed", sound: "た", kanji:"経"},
    // 故
    {answer: "じこ", question: "事故", hint: "accident", sound: "こ", kanji:"故"},
    {answer: "なにゆえ", question: "何故", hint: "why", sound: "ゆえ", kanji:"故"},
    // 伝
    {answer: "つたわる", question: "伝わる", hint: "convey", sound: "つた", kanji:"伝"},
    {answer: "でんごん", question: "伝言", hint: "message", sound: "でん", kanji:"伝"},
    {answer: "てつだう", question: "手伝う", hint: "help", sound: "つだ", kanji:"伝"},
    // 要
    {answer: "ひつよう", question: "必要", hint: "necessary", sound: "よう", kanji:"要"},
    {answer: "いる", question: "要る", hint: "need", sound: "い", kanji:"要"},
    // 冷
    {answer: "れいぞうこ", question: "冷蔵庫", hint: "refrigerator", sound: "れい", kanji:"冷"},
    {answer: "つめたい", question: "冷たい", hint: "cold", sound: "つめ", kanji:"冷"},
    {answer: "ひえる", question: "冷える", hint: "cool", sound: "ひ", kanji:"冷"},
    {answer: "さめる", question: "冷める", hint: "cool", sound: "さ", kanji:"冷"},
    // 蔵
    {answer: "くら", question: "蔵", hint: "storage", sound: "くら", kanji:"蔵"},
    {answer: "れいぞうこ", question: "冷蔵庫", hint: "refridgerator", sound: "ぞう", kanji:"蔵"},
    // 凍
    {answer: "れいとう", question: "冷凍", hint: "freezing", sound: "とう", kanji:"凍"},
    {answer: "こおる", question: "凍る", hint: "freezed", sound: "こお", kanji:"凍"},
    {answer: "こごえる", question: "凍える", hint: "freeze", sound: "こご", kanji:"凍"},
    // 庫
    {answer: "れいぞうこ", question: "冷蔵庫", hint: "fridge", sound: "こ", kanji:"庫"},
    {answer: "くら", question: "庫", hint: "storage", sound: "くら", kanji:"庫"},
    // 召
    {answer: "しょうかん", question: "召喚", hint: "summoned", sound: "召", kanji:"召"},
    {answer: "めしあがって", question: "召し上がって", hint: "eat", sound: "め", kanji:"召"},
    // 保
    {answer: "ほしょう", question: "保証", hint: "warrenty", sound: "ほ", kanji:"保"},
    {answer: "たもつ", question: "保つ", hint: "keep", sound: "たも", kanji:"保"},
    // 存
    {answer: "そんざい", question: "存在", hint: "existance", sound: "そん", kanji:"存"},
    {answer: "ぞんじる", question: "存じる", hint: "know", sound: "ぞん", kanji:"存"},
    // 必
    {answer: "ひつよう", question: "必要", hint: "necessary", sound: "ひつ", kanji:"必"},
    {answer: "かならず", question: "必ず", hint: "definately", sound: "かなら", kanji:"必"},
    // 費  
    {answer: "がくひ", question: "学費", hint: "school fee", sound: "ひ", kanji:"費"},
    {answer: "ついえる", question: "費える", hint: "spend", sound: "つい", kanji:"費"},
    // 期
    {answer: "きげん", question: "期限", hint: "limited time", sound: "き", kanji:"期"},
    {answer: "さいご", question: "最期", hint: "last moment", sound: "ご", kanji:"期"},
    // 限
    {answer: "きげん", question: "期限", hint: "limited time", sound: "けん", kanji:"限"},
    {answer: "かぎり", question: "限り", hint: "as long as", sound: "かぎ", kanji:"限"},
    // 製
    {answer: "せいさく", question: "制作", hint: "manufacture", sound: "せい", kanji:"制"},
    // 造
    {answer: "かいぞう", question: "改造", hint: "modeling", sound: "ぞう", kanji:"造"},
    {answer: "つくる", question: "造る", hint: "made", sound: "つく", kanji:"造"},
    // 賞
    {answer: "しょうひん", question: "賞品", hint: "prize", sound: "しょう", kanji:"賞"},
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
