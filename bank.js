/* Echo 英語 — 內建句庫
   欄位說明：
   id   唯一編號
   en   英文句子
   zh   中文意思
   cat  daily(日常會話) / travel(旅遊英文)
   sc   情境
   lv   難度 1~3
   note 句型或用法重點（可省略）
*/
window.BANK = [
/* ===== 日常會話 ===== */
{id:"d001",en:"How's it going?",zh:"最近怎麼樣？",cat:"daily",sc:"寒暄",lv:1,note:"最自然的日常招呼，比 How are you 口語"},
{id:"d002",en:"Long time no see. What have you been up to?",zh:"好久不見，你最近在忙什麼？",cat:"daily",sc:"寒暄",lv:2,note:"be up to = 在做（某事）"},
{id:"d003",en:"I'm doing pretty well, thanks for asking.",zh:"我過得還不錯，謝謝關心。",cat:"daily",sc:"寒暄",lv:1},
{id:"d004",en:"Sorry, I didn't catch that. Could you say it again?",zh:"抱歉我沒聽清楚，可以再說一次嗎？",cat:"daily",sc:"寒暄",lv:1,note:"catch = 聽懂、聽清楚"},
{id:"d005",en:"Nice to finally meet you in person.",zh:"很高興終於見到你本人。",cat:"daily",sc:"寒暄",lv:2,note:"in person = 本人、當面"},
{id:"d006",en:"I'd better get going. Talk to you later.",zh:"我該走了，之後再聊。",cat:"daily",sc:"寒暄",lv:2,note:"had better + 原形動詞"},
{id:"d007",en:"Say hi to your family for me.",zh:"幫我跟你家人問好。",cat:"daily",sc:"寒暄",lv:1},
{id:"d008",en:"What have you been doing these days?",zh:"你這陣子都在做什麼？",cat:"daily",sc:"寒暄",lv:2,note:"現在完成進行式：持續到現在"},

{id:"d009",en:"Could we get a table for two, please?",zh:"請問有兩人的位子嗎？",cat:"daily",sc:"點餐",lv:1},
{id:"d010",en:"What do you recommend?",zh:"你推薦什麼？",cat:"daily",sc:"點餐",lv:1},
{id:"d011",en:"I'll have the steak, medium rare, please.",zh:"我要牛排，三分熟，謝謝。",cat:"daily",sc:"點餐",lv:1,note:"I'll have = 點餐時的「我要」"},
{id:"d012",en:"Does this come with a side?",zh:"這個有附配菜嗎？",cat:"daily",sc:"點餐",lv:2,note:"come with = 附帶"},
{id:"d013",en:"Could I have the dressing on the side?",zh:"醬料可以另外放嗎？",cat:"daily",sc:"點餐",lv:2,note:"on the side = 另外裝"},
{id:"d014",en:"I'm allergic to peanuts, so please make sure there's none in it.",zh:"我對花生過敏，請確保裡面沒有。",cat:"daily",sc:"點餐",lv:3,note:"be allergic to = 對…過敏"},
{id:"d015",en:"Could we get the check, please?",zh:"可以買單嗎？",cat:"daily",sc:"點餐",lv:1,note:"美式 check，英式 bill"},
{id:"d016",en:"Can I get this to go?",zh:"這個可以外帶嗎？",cat:"daily",sc:"點餐",lv:1,note:"to go = 外帶"},
{id:"d017",en:"Excuse me, I think there's a mistake on the bill.",zh:"不好意思，帳單好像有問題。",cat:"daily",sc:"點餐",lv:2},
{id:"d018",en:"We're still deciding. Could you give us a few more minutes?",zh:"我們還在看，可以再給我們幾分鐘嗎？",cat:"daily",sc:"點餐",lv:2},

{id:"d019",en:"I'm just looking around, thanks.",zh:"我只是看看，謝謝。",cat:"daily",sc:"購物",lv:1},
{id:"d020",en:"Do you have this in a smaller size?",zh:"這個有小一號的嗎？",cat:"daily",sc:"購物",lv:1},
{id:"d021",en:"Where can I try this on?",zh:"哪裡可以試穿？",cat:"daily",sc:"購物",lv:1,note:"try on = 試穿"},
{id:"d022",en:"How much is it after the discount?",zh:"折扣後是多少錢？",cat:"daily",sc:"購物",lv:1},
{id:"d023",en:"Can I pay by credit card?",zh:"可以刷卡嗎？",cat:"daily",sc:"購物",lv:1},
{id:"d024",en:"Is it possible to return this if it doesn't fit?",zh:"如果不合身可以退嗎？",cat:"daily",sc:"購物",lv:3,note:"Is it possible to + 原形：委婉詢問"},
{id:"d025",en:"Do you have this in another color?",zh:"這個有其他顏色嗎？",cat:"daily",sc:"購物",lv:1},
{id:"d026",en:"I'll take it. Could you wrap it as a gift?",zh:"我買了，可以包裝成禮物嗎？",cat:"daily",sc:"購物",lv:2},

{id:"d027",en:"Excuse me, how do I get to the nearest subway station?",zh:"不好意思，最近的地鐵站怎麼走？",cat:"daily",sc:"問路",lv:2,note:"how do I get to = 怎麼去"},
{id:"d028",en:"Is it within walking distance?",zh:"走路可以到嗎？",cat:"daily",sc:"問路",lv:2},
{id:"d029",en:"Am I going the right way?",zh:"我走的方向對嗎？",cat:"daily",sc:"問路",lv:1},
{id:"d030",en:"Could you show me on the map?",zh:"可以在地圖上指給我看嗎？",cat:"daily",sc:"問路",lv:1},
{id:"d031",en:"It's about a ten-minute walk from here.",zh:"從這裡走過去大約十分鐘。",cat:"daily",sc:"問路",lv:2,note:"ten-minute 當形容詞時不加 s"},
{id:"d032",en:"Go straight and turn left at the second light.",zh:"直走，在第二個紅綠燈左轉。",cat:"daily",sc:"問路",lv:2},

{id:"d033",en:"Hi, this is Jerry. Is Mark available?",zh:"嗨，我是 Jerry，Mark 在嗎？",cat:"daily",sc:"電話",lv:1,note:"電話上說「我是」用 this is"},
{id:"d034",en:"Could you speak up a little? The line is breaking up.",zh:"可以講大聲一點嗎？訊號斷斷續續的。",cat:"daily",sc:"電話",lv:3,note:"speak up = 說大聲點；break up = 收訊不良"},
{id:"d035",en:"Can I leave a message?",zh:"我可以留言嗎？",cat:"daily",sc:"電話",lv:1},
{id:"d036",en:"I'll call you back in ten minutes.",zh:"我十分鐘後回電給你。",cat:"daily",sc:"電話",lv:1,note:"in + 時間 = 多久之後"},

{id:"d037",en:"It's supposed to rain later, so bring an umbrella.",zh:"等一下應該會下雨，帶把傘吧。",cat:"daily",sc:"閒聊",lv:2,note:"be supposed to = 據說會、應該會"},
{id:"d038",en:"The weather has been all over the place lately.",zh:"最近天氣很反覆。",cat:"daily",sc:"閒聊",lv:3,note:"all over the place = 很不穩定"},
{id:"d039",en:"I can't stand this humidity.",zh:"我受不了這種濕度。",cat:"daily",sc:"閒聊",lv:2,note:"can't stand = 受不了"},
{id:"d040",en:"Did you catch the game last night?",zh:"你昨晚有看那場比賽嗎？",cat:"daily",sc:"閒聊",lv:2},

{id:"d041",en:"Are you free sometime next week?",zh:"你下週有空嗎？",cat:"daily",sc:"約時間",lv:1},
{id:"d042",en:"Does Friday at seven work for you?",zh:"週五七點你方便嗎？",cat:"daily",sc:"約時間",lv:2,note:"work for you = 對你可行"},
{id:"d043",en:"Something came up, so can we reschedule?",zh:"我臨時有事，可以改時間嗎？",cat:"daily",sc:"約時間",lv:2,note:"something came up = 臨時有事"},
{id:"d044",en:"I'll text you the address later.",zh:"我等等把地址傳給你。",cat:"daily",sc:"約時間",lv:1},
{id:"d045",en:"Let's meet up in front of the station at noon.",zh:"我們中午在車站前面碰面吧。",cat:"daily",sc:"約時間",lv:1},

{id:"d046",en:"I've had a sore throat for three days.",zh:"我喉嚨痛三天了。",cat:"daily",sc:"看醫生",lv:2,note:"現在完成式 + for + 一段時間"},
{id:"d047",en:"It hurts when I press here.",zh:"我按這裡會痛。",cat:"daily",sc:"看醫生",lv:1},
{id:"d048",en:"Do I need to take this with food?",zh:"這個需要飯後吃嗎？",cat:"daily",sc:"看醫生",lv:2},
{id:"d049",en:"As far as I know, I'm not allergic to any medication.",zh:"就我所知，我對任何藥物都不過敏。",cat:"daily",sc:"看醫生",lv:3,note:"as far as I know = 就我所知"},
{id:"d050",en:"I've been feeling dizzy since this morning.",zh:"我從今天早上開始就一直頭暈。",cat:"daily",sc:"看醫生",lv:3,note:"since + 時間點"},

{id:"d051",en:"I'd like to open an account.",zh:"我想開戶。",cat:"daily",sc:"辦事",lv:1,note:"I'd like to = 我想要（禮貌）"},
{id:"d052",en:"How long does it take to arrive?",zh:"大概多久會寄到？",cat:"daily",sc:"辦事",lv:1,note:"It takes + 時間"},
{id:"d053",en:"Is there a fee for that?",zh:"那個要收手續費嗎？",cat:"daily",sc:"辦事",lv:1},
{id:"d054",en:"Could you help me fill out this form?",zh:"可以幫我填這張表格嗎？",cat:"daily",sc:"辦事",lv:2,note:"fill out = 填寫"},

{id:"d055",en:"I see your point, but I'd do it differently.",zh:"我懂你的意思，但我會用別的做法。",cat:"daily",sc:"表達意見",lv:3,note:"禮貌表達不同意見的萬用句"},
{id:"d056",en:"That makes sense to me.",zh:"這對我來說很合理。",cat:"daily",sc:"表達意見",lv:1,note:"make sense = 合理"},
{id:"d057",en:"I'm not really into that kind of thing.",zh:"我不太喜歡那種東西。",cat:"daily",sc:"表達意見",lv:2,note:"be into = 熱衷於"},
{id:"d058",en:"To be honest, I'm a little nervous about it.",zh:"老實說，我有點緊張。",cat:"daily",sc:"表達意見",lv:2},
{id:"d059",en:"Would you mind if I opened the window?",zh:"你介意我開窗嗎？",cat:"daily",sc:"表達意見",lv:3,note:"Would you mind if + 過去式：最禮貌的請求"},
{id:"d060",en:"I really appreciate you helping me out.",zh:"很感謝你幫我。",cat:"daily",sc:"表達意見",lv:2,note:"appreciate + 人 + Ving"},
{id:"d061",en:"Let me think about it and get back to you.",zh:"讓我想想再回覆你。",cat:"daily",sc:"表達意見",lv:2,note:"get back to you = 之後回覆你"},
{id:"d062",en:"I couldn't agree more.",zh:"我完全同意。",cat:"daily",sc:"表達意見",lv:2,note:"字面是「不能更同意」＝非常同意"},

{id:"d063",en:"I need to do laundry before I run out of clean shirts.",zh:"我得洗衣服了，不然乾淨襯衫要用完了。",cat:"daily",sc:"生活瑣事",lv:3,note:"run out of = 用完"},
{id:"d064",en:"Could you keep an eye on my bag for a second?",zh:"可以幫我看一下包包嗎？",cat:"daily",sc:"生活瑣事",lv:2,note:"keep an eye on = 看顧"},
{id:"d065",en:"I'm running a bit late, but I'm on my way.",zh:"我有點遲到，但我在路上了。",cat:"daily",sc:"生活瑣事",lv:2,note:"on my way = 在路上"},
{id:"d066",en:"I forgot to charge my phone last night.",zh:"我昨晚忘記幫手機充電。",cat:"daily",sc:"生活瑣事",lv:1,note:"forget to + 原形 = 忘記要做"},
{id:"d067",en:"Do you mind giving me a hand with this?",zh:"你介意幫我一下嗎？",cat:"daily",sc:"生活瑣事",lv:2,note:"give someone a hand = 幫忙"},

/* ===== 句型強化 ===== */
{id:"d068",en:"I was wondering if you could help me with something.",zh:"不知道你能不能幫我一個忙。",cat:"daily",sc:"句型",lv:3,note:"I was wondering if… 最委婉的請求開場"},
{id:"d069",en:"The sooner we leave, the better seats we'll get.",zh:"我們越早出發，位子越好。",cat:"daily",sc:"句型",lv:3,note:"The + 比較級, the + 比較級"},
{id:"d070",en:"If I were you, I'd book it in advance.",zh:"如果我是你，我會提前訂。",cat:"daily",sc:"句型",lv:3,note:"與現在事實相反的假設語氣"},
{id:"d071",en:"I'm not sure whether to take the bus or the train.",zh:"我不確定要搭公車還是火車。",cat:"daily",sc:"句型",lv:3,note:"whether to + 原形"},
{id:"d072",en:"It's not as expensive as I thought it would be.",zh:"這沒有我想的那麼貴。",cat:"daily",sc:"句型",lv:3,note:"not as … as = 不如…那麼"},
{id:"d073",en:"That's why I always keep a copy of my passport.",zh:"所以我才總是留一份護照影本。",cat:"daily",sc:"句型",lv:2,note:"That's why = 那就是為什麼"},
{id:"d074",en:"By the time we got there, it had already closed.",zh:"我們到的時候它已經關了。",cat:"daily",sc:"句型",lv:3,note:"By the time + 過去式，主句用過去完成式"},
{id:"d075",en:"I'd rather stay in tonight than go out.",zh:"我今晚寧願待在家而不是出去。",cat:"daily",sc:"句型",lv:3,note:"would rather A than B（皆用原形）"},
{id:"d076",en:"There's no point in worrying about it now.",zh:"現在擔心也沒有用。",cat:"daily",sc:"句型",lv:3,note:"There's no point in + Ving"},
{id:"d077",en:"It took me almost an hour to get here.",zh:"我花了快一小時才到這裡。",cat:"daily",sc:"句型",lv:2,note:"It takes 人 時間 to 原形"},
{id:"d078",en:"You should have told me earlier.",zh:"你應該早點告訴我的。",cat:"daily",sc:"句型",lv:3,note:"should have + 過去分詞＝當初應該卻沒做"},
{id:"d079",en:"The more I practice, the more confident I feel.",zh:"我越練習就越有自信。",cat:"daily",sc:"句型",lv:3},
{id:"d080",en:"I'm used to getting up early now.",zh:"我現在習慣早起了。",cat:"daily",sc:"句型",lv:3,note:"be used to + Ving（習慣於）"},

/* ===== 旅遊英文 ===== */
{id:"t001",en:"I'd like a window seat, if possible.",zh:"可以的話我想要靠窗的位子。",cat:"travel",sc:"機場",lv:1},
{id:"t002",en:"How many bags can I check in?",zh:"我可以託運幾件行李？",cat:"travel",sc:"機場",lv:2,note:"check in（託運）／carry-on（隨身）"},
{id:"t003",en:"Is this within the carry-on size limit?",zh:"這個有超過隨身行李的尺寸嗎？",cat:"travel",sc:"機場",lv:3},
{id:"t004",en:"Which gate does the flight leave from?",zh:"這班飛機從哪個登機門起飛？",cat:"travel",sc:"機場",lv:2},
{id:"t005",en:"My connecting flight is in two hours.",zh:"我的轉機航班在兩小時後。",cat:"travel",sc:"機場",lv:2,note:"connecting flight = 轉機航班"},
{id:"t006",en:"I'm here on vacation for ten days.",zh:"我來這裡度假十天。",cat:"travel",sc:"機場",lv:1,note:"入境時最常被問的答案"},
{id:"t007",en:"I'm staying at a hotel downtown.",zh:"我住在市中心的飯店。",cat:"travel",sc:"機場",lv:1},
{id:"t008",en:"Do I need to declare this?",zh:"這個需要申報嗎？",cat:"travel",sc:"機場",lv:2,note:"declare = 申報"},
{id:"t009",en:"My luggage didn't come out. Where do I report it?",zh:"我的行李沒出來，要去哪裡申報？",cat:"travel",sc:"機場",lv:3},
{id:"t010",en:"Could you put this in the overhead compartment for me?",zh:"可以幫我把這個放到上面的置物櫃嗎？",cat:"travel",sc:"機場",lv:3,note:"overhead compartment = 機艙上方置物櫃"},

{id:"t011",en:"Could I get a glass of water, please?",zh:"可以給我一杯水嗎？",cat:"travel",sc:"飛機上",lv:1},
{id:"t012",en:"Would you mind switching seats with me?",zh:"你介意跟我換位子嗎？",cat:"travel",sc:"飛機上",lv:2,note:"Would you mind + Ving"},
{id:"t013",en:"Excuse me, I think that's my seat.",zh:"不好意思，那好像是我的位子。",cat:"travel",sc:"飛機上",lv:1},
{id:"t014",en:"Could you wake me up when they serve the meal?",zh:"送餐的時候可以叫醒我嗎？",cat:"travel",sc:"飛機上",lv:2},

{id:"t015",en:"I have a reservation under the name Chen.",zh:"我有訂房，姓陳。",cat:"travel",sc:"飯店",lv:2,note:"under the name = 用…的名字訂的"},
{id:"t016",en:"Is breakfast included?",zh:"有含早餐嗎？",cat:"travel",sc:"飯店",lv:1},
{id:"t017",en:"What time is check-out?",zh:"幾點退房？",cat:"travel",sc:"飯店",lv:1},
{id:"t018",en:"Could I get a late check-out?",zh:"可以延後退房嗎？",cat:"travel",sc:"飯店",lv:2},
{id:"t019",en:"The air conditioning in my room isn't working.",zh:"我房間的冷氣壞了。",cat:"travel",sc:"飯店",lv:2,note:"isn't working = 故障了"},
{id:"t020",en:"Could you keep my luggage until the afternoon?",zh:"可以幫我寄放行李到下午嗎？",cat:"travel",sc:"飯店",lv:2},
{id:"t021",en:"Is there a laundry service in the hotel?",zh:"飯店裡有洗衣服務嗎？",cat:"travel",sc:"飯店",lv:2},
{id:"t022",en:"Could I have a wake-up call at six?",zh:"可以幫我六點叫醒服務嗎？",cat:"travel",sc:"飯店",lv:2},
{id:"t023",en:"The room next door is really noisy. Could we switch rooms?",zh:"隔壁房間很吵，我們可以換房嗎？",cat:"travel",sc:"飯店",lv:3},
{id:"t024",en:"Could I have the Wi-Fi password?",zh:"可以給我 Wi-Fi 密碼嗎？",cat:"travel",sc:"飯店",lv:1},

{id:"t025",en:"Could you take me to this address, please?",zh:"可以載我到這個地址嗎？",cat:"travel",sc:"交通",lv:1},
{id:"t026",en:"How much is it to the airport, roughly?",zh:"到機場大概多少錢？",cat:"travel",sc:"交通",lv:2,note:"roughly = 大約"},
{id:"t027",en:"Which line should I take to get to the museum?",zh:"去博物館要搭哪一條線？",cat:"travel",sc:"交通",lv:2},
{id:"t028",en:"Do I need to transfer?",zh:"需要轉車嗎？",cat:"travel",sc:"交通",lv:1,note:"transfer = 轉乘"},
{id:"t029",en:"Could you let me know when we get there?",zh:"到的時候可以跟我說嗎？",cat:"travel",sc:"交通",lv:2},
{id:"t030",en:"Where can I buy a day pass?",zh:"哪裡可以買一日券？",cat:"travel",sc:"交通",lv:1},
{id:"t031",en:"I'd like to rent a car for three days.",zh:"我想租三天的車。",cat:"travel",sc:"交通",lv:2},
{id:"t032",en:"Is insurance included in the price?",zh:"保險有含在價格裡嗎？",cat:"travel",sc:"交通",lv:2},
{id:"t033",en:"Does this bus stop near the old town?",zh:"這班公車有停在舊城區附近嗎？",cat:"travel",sc:"交通",lv:2},
{id:"t034",en:"How often do the trains run?",zh:"火車多久一班？",cat:"travel",sc:"交通",lv:2,note:"How often = 多久一次"},

{id:"t035",en:"What time do you close today?",zh:"你們今天幾點關門？",cat:"travel",sc:"觀光",lv:1},
{id:"t036",en:"Is there a student discount?",zh:"有學生優惠嗎？",cat:"travel",sc:"觀光",lv:1},
{id:"t037",en:"Could you take a picture of us?",zh:"可以幫我們拍張照嗎？",cat:"travel",sc:"觀光",lv:1},
{id:"t038",en:"Is photography allowed inside?",zh:"裡面可以拍照嗎？",cat:"travel",sc:"觀光",lv:2,note:"被動語態：be allowed"},
{id:"t039",en:"How long does the tour usually take?",zh:"導覽大概要多久？",cat:"travel",sc:"觀光",lv:2},
{id:"t040",en:"Is it worth going all the way up there?",zh:"特地上去那裡值得嗎？",cat:"travel",sc:"觀光",lv:3,note:"be worth + Ving = 值得做"},
{id:"t041",en:"Do we need to book tickets in advance?",zh:"我們需要提前訂票嗎？",cat:"travel",sc:"觀光",lv:2,note:"in advance = 事先"},
{id:"t042",en:"What's the best time of day to visit?",zh:"一天當中什麼時候來最好？",cat:"travel",sc:"觀光",lv:2},

{id:"t043",en:"I'd like to book a table for four at seven.",zh:"我想訂七點四個人的位子。",cat:"travel",sc:"訂位",lv:2},
{id:"t044",en:"Do you have anything available earlier?",zh:"有更早一點的時段嗎？",cat:"travel",sc:"訂位",lv:2},
{id:"t045",en:"We'd prefer to sit outside if that's possible.",zh:"可以的話我們想坐外面。",cat:"travel",sc:"訂位",lv:3,note:"would prefer to + 原形"},
{id:"t046",en:"I'm sorry, we need to cancel our reservation.",zh:"抱歉，我們需要取消訂位。",cat:"travel",sc:"訂位",lv:2},

{id:"t047",en:"Can I get a tax refund for this?",zh:"這個可以退稅嗎？",cat:"travel",sc:"退稅購物",lv:2},
{id:"t048",en:"Where is the tax refund counter?",zh:"退稅櫃檯在哪裡？",cat:"travel",sc:"退稅購物",lv:1},
{id:"t049",en:"Could I have a receipt, please?",zh:"可以給我收據嗎？",cat:"travel",sc:"退稅購物",lv:1},
{id:"t050",en:"Do you accept foreign credit cards?",zh:"你們收外國信用卡嗎？",cat:"travel",sc:"退稅購物",lv:2},

{id:"t051",en:"I lost my passport. What should I do?",zh:"我護照掉了，該怎麼辦？",cat:"travel",sc:"緊急狀況",lv:2},
{id:"t052",en:"Could you call the police for me?",zh:"可以幫我報警嗎？",cat:"travel",sc:"緊急狀況",lv:1},
{id:"t053",en:"My phone was stolen on the train.",zh:"我的手機在火車上被偷了。",cat:"travel",sc:"緊急狀況",lv:2,note:"被動語態：was stolen"},
{id:"t054",en:"I don't feel well. Is there a pharmacy nearby?",zh:"我不太舒服，附近有藥局嗎？",cat:"travel",sc:"緊急狀況",lv:2},
{id:"t055",en:"Does anyone here speak Chinese?",zh:"這裡有人會說中文嗎？",cat:"travel",sc:"緊急狀況",lv:1},
{id:"t056",en:"I missed my flight. Can I get on the next one?",zh:"我錯過班機了，可以搭下一班嗎？",cat:"travel",sc:"緊急狀況",lv:2},
{id:"t057",en:"Can you help me? I think I'm lost.",zh:"可以幫我嗎？我好像迷路了。",cat:"travel",sc:"緊急狀況",lv:1},
{id:"t058",en:"I need to contact my embassy.",zh:"我需要聯絡我的大使館。",cat:"travel",sc:"緊急狀況",lv:2},
{id:"t059",en:"Could you write it down for me?",zh:"可以幫我寫下來嗎？",cat:"travel",sc:"緊急狀況",lv:1,note:"write down = 寫下來"},
{id:"t060",en:"I'm afraid I don't understand. Could you speak more slowly?",zh:"我恐怕聽不懂，可以說慢一點嗎？",cat:"travel",sc:"緊急狀況",lv:2,note:"I'm afraid… = 委婉表示「恐怕」"}
];
