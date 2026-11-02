/* Echo 英語 — 長文章閱讀庫
   每篇格式：
   {id, title, zh:中文標題, genre:類型, lv:1-3,
    paras:[ [ [英文句, 中文句], ... ], ... ],    ← 段落 → 句子，逐句對照，方便點句朗讀／跟讀
    vocab:[ [單字或片語, 中文], ... ],
    qs:[ {q:英文題目, zh:中文題目, o:[選項...], a:正確選項索引} ] }
   新聞類為練習用的「新聞風格」文章，人物與地名皆為虛構。
*/
window.ARTICLES = (window.ARTICLES||[]).concat([

{id:"a01",title:"A Library Where You Can Borrow a Drill",zh:"可以借電鑽的圖書館",genre:"新聞",lv:1,
paras:[
 [["The public library in the town of Maplewood has started lending something new: tools.","楓木鎮的公立圖書館開始出借一樣新東西：工具。"],
  ["Along with books and movies, people can now borrow drills, ladders, and even sewing machines.","除了書和電影，民眾現在還可以借電鑽、梯子，甚至縫紉機。"]],
 [["The idea came from a librarian named Grace Holt.","這個點子來自一位名叫葛蕾絲・霍特的圖書館員。"],
  ["She noticed that many people buy a tool, use it once, and then leave it in a closet for years.","她發現很多人買了一樣工具，用過一次，就把它丟在櫃子裡好幾年。"],
  ["\"Why should every family buy the same drill?\" she asked.","「為什麼每個家庭都要買一樣的電鑽？」她問。"]],
 [["The library started with about fifty tools, most of them donated by local residents.","圖書館一開始大約有五十件工具，大多是當地居民捐的。"],
  ["Borrowing is free, and each tool can be kept for one week.","借用是免費的，每件工具可以借一個禮拜。"]],
 [["So far, the program has been very popular.","到目前為止，這個計畫非常受歡迎。"],
  ["The most borrowed item is a small carpet cleaner.","最常被借走的是一台小型地毯清洗機。"],
  ["The library now hopes to add gardening tools in the spring.","圖書館現在希望春天時能再加入園藝工具。"]]
],
vocab:[["lend","借出"],["borrow","借入"],["drill","電鑽"],["ladder","梯子"],["donate","捐贈"],["resident","居民"],["so far","到目前為止"]],
qs:[
 {q:"What is new at the Maplewood library?",zh:"楓木鎮圖書館有什麼新東西？",o:["It sells tools.","It lends tools.","It repairs tools.","It teaches classes about tools."],a:1},
 {q:"Where did most of the tools come from?",zh:"大部分的工具是從哪裡來的？",o:["The government bought them.","A tool company gave them.","Local residents donated them.","The librarian made them."],a:2},
 {q:"How long can people keep a tool?",zh:"工具可以借多久？",o:["One day","Three days","One week","One month"],a:2},
 {q:"What does the library want to add next?",zh:"圖書館接下來想增加什麼？",o:["Gardening tools","Kitchen tools","Carpet cleaners","Sewing machines"],a:0}
]},

{id:"a02",title:"The Wrong Train",zh:"搭錯車",genre:"故事",lv:1,
paras:[
 [["Mia was on her first trip alone.","米亞正在進行她第一次的獨自旅行。"],
  ["She wanted to go to a small town by the sea, so she bought a ticket and got on the train.","她想去一個海邊的小鎮，所以買了票就上了火車。"]],
 [["After an hour, she looked out the window and saw mountains, not the sea.","一個小時後，她往窗外看，看到的是山，不是海。"],
  ["Her heart started to race.","她的心跳開始加速。"],
  ["She was on the wrong train.","她搭錯車了。"]],
 [["An old man sitting across from her noticed her worried face.","坐在她對面的一位老先生注意到她一臉擔心。"],
  ["\"Are you lost?\" he asked kindly.","「你迷路了嗎？」他親切地問。"],
  ["Mia showed him her ticket, and he laughed.","米亞把車票給他看，他笑了。"],
  ["\"Don't worry. Get off at the next stop, and there's a bus to the sea.\"","「別擔心。下一站下車，那裡有公車到海邊。」"]],
 [["Mia followed his advice.","米亞照著他的建議做。"],
  ["The bus took her along a beautiful road through the hills.","公車載著她沿著一條穿過山丘的美麗道路前進。"],
  ["She arrived two hours late, but she saw views she would never have seen on the right train.","她晚了兩個小時才到，但看到了搭對車永遠看不到的風景。"],
  ["Sometimes, she thought, the wrong train takes you to the right place.","她心想，有時候搭錯的車反而會帶你到對的地方。"]]
],
vocab:[["alone","獨自"],["race（心跳）","狂跳"],["across from","在……對面"],["kindly","親切地"],["get off","下車"],["advice","建議"],["view","景色"]],
qs:[
 {q:"Where did Mia want to go?",zh:"米亞想去哪裡？",o:["To the mountains","To a big city","To a town by the sea","To her friend's house"],a:2},
 {q:"How did Mia know she was on the wrong train?",zh:"米亞怎麼知道自己搭錯車？",o:["The conductor told her.","She saw mountains instead of the sea.","Her ticket was wrong.","Her phone showed the map."],a:1},
 {q:"What did the old man tell her to do?",zh:"老先生叫她怎麼做？",o:["Go back home","Stay on the train","Take a taxi","Get off and take a bus"],a:3},
 {q:"What is the main idea of the story?",zh:"這個故事的主旨是什麼？",o:["Always check your ticket twice.","Mistakes can sometimes lead to good things.","Old people know everything.","Buses are better than trains."],a:1}
]},

{id:"a03",title:"My Slow Morning",zh:"我的慢早晨",genre:"生活",lv:1,
paras:[
 [["For years, my mornings were a mess.","好幾年來，我的早晨都一團亂。"],
  ["I woke up late, checked my phone in bed, and ran out the door without breakfast.","我很晚起床，躺在床上滑手機，然後沒吃早餐就衝出門。"]],
 [["Last year, I decided to change one small thing: I started waking up thirty minutes earlier.","去年，我決定改變一件小事：我開始提早三十分鐘起床。"],
  ["At first, it was hard.","一開始很難。"],
  ["But after two weeks, my body got used to it.","但兩個禮拜後，我的身體就習慣了。"]],
 [["Now I use those thirty minutes for myself.","現在我把這三十分鐘留給自己。"],
  ["I make coffee, eat a simple breakfast, and read a few pages of a book.","我泡咖啡、吃一份簡單的早餐，再讀幾頁書。"],
  ["I don't look at my phone until I leave the house.","出門之前我都不看手機。"]],
 [["It sounds like a small change, but it makes a big difference.","這聽起來是個小改變，但差別很大。"],
  ["I feel calmer, and I'm less stressed at work.","我覺得比較平靜，工作時壓力也比較小。"],
  ["If your mornings feel rushed, maybe try starting a little earlier.","如果你的早晨總是很趕，或許可以試試早一點開始。"]]
],
vocab:[["a mess","一團亂"],["get used to","習慣"],["simple","簡單的"],["make a difference","造成差別"],["calm","平靜的"],["rushed","匆忙的"]],
qs:[
 {q:"What was the writer's morning like before?",zh:"作者以前的早晨是怎樣？",o:["Calm and slow","Messy and rushed","Busy with exercise","Full of reading"],a:1},
 {q:"What small change did the writer make?",zh:"作者做了什麼小改變？",o:["Stopped drinking coffee","Went to bed later","Woke up thirty minutes earlier","Worked from home"],a:2},
 {q:"When does the writer look at the phone now?",zh:"作者現在什麼時候才看手機？",o:["Right after waking up","During breakfast","While reading","After leaving the house"],a:3}
]},

{id:"a04",title:"Old Train Station Becomes a Community Café",zh:"舊火車站變身社區咖啡館",genre:"新聞",lv:2,
paras:[
 [["An old train station that sat empty for nearly twenty years has been given a second life.","一座閒置將近二十年的老火車站，獲得了第二次生命。"],
  ["Last weekend, the building in the village of Eastbrook reopened as a café and community space.","上週末，東溪村的這棟建築重新開放，成為一間咖啡館兼社區空間。"]],
 [["The station closed when the railway line was shut down in the early 2000s.","這座車站在兩千年代初期鐵路線停駛時關閉。"],
  ["Since then, the building had slowly fallen apart, with broken windows and a leaking roof.","從那之後，這棟建築慢慢破敗，窗戶破了，屋頂也在漏水。"]],
 [["A group of local volunteers decided to save it.","一群當地志工決定拯救它。"],
  ["They raised money through online donations and spent almost two years repairing the building themselves.","他們透過網路募款，並花了將近兩年親手修復這棟建築。"],
  ["\"Everyone had a memory of this place,\" said Tom Reyes, one of the organizers.","「每個人對這裡都有回憶，」其中一位發起人湯姆・雷耶斯說。"],
  ["\"We didn't want to lose it.\"","「我們不想失去它。」"]],
 [["The café keeps many of the station's original features, including the old ticket window and a large clock above the door.","咖啡館保留了許多車站原本的特色，包括舊售票窗口和門上的一座大時鐘。"],
  ["The ticket window is now where customers order their drinks.","那個售票窗口現在是客人點飲料的地方。"]],
 [["Besides serving coffee, the space will host art classes, book clubs, and a weekly farmers' market.","除了賣咖啡，這個空間也會舉辦藝術課、讀書會，以及每週一次的農夫市集。"],
  ["Any profits will go toward maintaining the building.","所有盈餘都會用來維護這棟建築。"],
  ["For a village with no other public meeting place, many residents say the new café has quickly become the heart of the community.","對一個沒有其他公共聚會場所的村子來說，很多居民說這間新咖啡館很快就成了社區的核心。"]]
],
vocab:[["sit empty","閒置"],["second life","第二次生命"],["shut down","關閉、停止營運"],["fall apart","破敗、瓦解"],["raise money","募款"],["organizer","發起人、主辦人"],["original features","原有的特色"],["host","舉辦"],["profit","盈餘、利潤"]],
qs:[
 {q:"How long was the station empty?",zh:"這座車站閒置了多久？",o:["About two years","Nearly twenty years","About fifty years","Only a few months"],a:1},
 {q:"How did the volunteers get money for the repairs?",zh:"志工怎麼籌到修繕的錢？",o:["From the railway company","From the government","Through online donations","By selling the land"],a:2},
 {q:"What is the old ticket window used for now?",zh:"舊售票窗口現在拿來做什麼？",o:["Selling train tickets","Ordering drinks","Displaying art","Storing books"],a:1},
 {q:"Where will the café's profits go?",zh:"咖啡館的盈餘會用在哪裡？",o:["To the volunteers","To a new railway","To maintaining the building","To a local school"],a:2},
 {q:"Why is the café especially important to the village?",zh:"為什麼這間咖啡館對村子特別重要？",o:["It's the only public meeting place.","It's the only place to buy coffee.","It brings many tourists.","It's the oldest building."],a:0}
]},

{id:"a05",title:"Why Do We Yawn?",zh:"我們為什麼會打哈欠？",genre:"科普",lv:2,
paras:[
 [["Everyone yawns, from babies to grandparents.","每個人都會打哈欠，從嬰兒到爺爺奶奶都一樣。"],
  ["Even many animals, like dogs and cats, do it.","甚至很多動物，像狗和貓，也會打哈欠。"],
  ["But surprisingly, scientists still aren't completely sure why we yawn.","但令人意外的是，科學家到現在還不完全確定我們為什麼會打哈欠。"]],
 [["For a long time, people believed that yawning helped us get more oxygen.","很長一段時間，人們相信打哈欠能幫我們吸進更多氧氣。"],
  ["However, experiments have not supported this idea very well.","不過，實驗並沒有很支持這個說法。"],
  ["People don't seem to yawn more when there's less oxygen in the air.","空氣中的氧氣變少時，人們似乎並不會打更多哈欠。"]],
 [["One popular theory today is that yawning helps cool down the brain.","現在一個很受歡迎的理論是，打哈欠有助於讓大腦降溫。"],
  ["When we take a deep breath and stretch our jaw, cooler air and blood may flow to the head.","當我們深吸一口氣、把下巴張開時，較涼的空氣和血液可能會流向頭部。"],
  ["Some studies found that people yawn less often when the weather is very hot, which fits this idea.","有些研究發現天氣很熱時人們比較少打哈欠，這跟這個理論相符。"]],
 [["Another interesting fact is that yawning is contagious.","另一個有趣的事實是，打哈欠會傳染。"],
  ["Seeing, hearing, or even reading about yawning can make you yawn.","看到、聽到，甚至只是讀到打哈欠，都可能讓你也打哈欠。"],
  ["Some researchers think this may be connected to empathy, since we tend to catch yawns more easily from people we are close to.","有些研究者認為這可能跟同理心有關，因為我們比較容易被親近的人傳染哈欠。"]],
 [["So, did you yawn while reading this?","那麼，你讀這篇的時候有打哈欠嗎？"],
  ["If you did, you're completely normal.","如果有，你完全正常。"]]
],
vocab:[["yawn","打哈欠"],["oxygen","氧氣"],["experiment","實驗"],["theory","理論"],["jaw","下巴、顎"],["contagious","會傳染的"],["researcher","研究者"],["empathy","同理心"],["tend to","往往會"]],
qs:[
 {q:"What did people believe about yawning for a long time?",zh:"長期以來人們認為打哈欠有什麼作用？",o:["It helps us sleep.","It helps us get more oxygen.","It shows we are hungry.","It keeps us warm."],a:1},
 {q:"According to one popular theory, what does yawning do?",zh:"根據一個熱門理論，打哈欠有什麼作用？",o:["Cools down the brain","Makes us stronger","Cleans the lungs","Wakes up the stomach"],a:0},
 {q:"What does \"contagious\" mean in this article?",zh:"文中 contagious 是什麼意思？",o:["Dangerous","Easily spread to others","Very tiring","Hard to stop"],a:1},
 {q:"From whom do we catch yawns more easily?",zh:"我們比較容易被誰傳染哈欠？",o:["Strangers","Animals","People we are close to","Children only"],a:2}
]},

{id:"a06",title:"How Sleep Helps You Remember",zh:"睡眠如何幫助記憶",genre:"科普",lv:2,
paras:[
 [["Many students stay up late before an exam, trying to learn as much as possible.","很多學生在考試前熬夜，想盡量多讀一點。"],
  ["But research suggests that this may actually hurt their memory.","但研究顯示，這樣做其實可能會傷害記憶。"]],
 [["While we sleep, the brain is surprisingly busy.","我們睡覺時，大腦其實忙得驚人。"],
  ["It replays and organizes the information we took in during the day.","它會重播並整理我們白天吸收的資訊。"],
  ["Scientists believe this process helps move new memories into long-term storage.","科學家相信這個過程能幫助新的記憶轉入長期儲存。"]],
 [["Different stages of sleep seem to help with different kinds of memory.","睡眠的不同階段似乎有助於不同類型的記憶。"],
  ["Deep sleep appears to be important for remembering facts, such as vocabulary or dates.","深層睡眠似乎對記住事實很重要，例如單字或日期。"],
  ["Dream sleep may help with skills and creative problem-solving.","作夢階段的睡眠則可能有助於技能和創意解決問題。"]],
 [["This is good news for language learners.","這對學語言的人來說是好消息。"],
  ["Reviewing new words before bed, and then getting a full night's sleep, can help you remember them better the next day.","睡前複習新單字，接著好好睡一整晚，可以幫助你隔天記得更牢。"],
  ["Short naps can also help, especially after a learning session.","短暫的小睡也有幫助，特別是在一段學習之後。"]],
 [["So next time you're tempted to study all night, remember: sleep is not wasted time.","所以下次你想熬夜讀書時，記住：睡覺不是浪費時間。"],
  ["It's part of the learning process.","它是學習過程的一部分。"]]
],
vocab:[["stay up late","熬夜"],["replay","重播"],["organize","整理"],["long-term","長期的"],["storage","儲存"],["stage","階段"],["nap","小睡"],["be tempted to","忍不住想"]],
qs:[
 {q:"What does the brain do while we sleep?",zh:"我們睡覺時大腦在做什麼？",o:["It completely rests.","It replays and organizes information.","It forgets unimportant words.","It stops working."],a:1},
 {q:"Which stage of sleep seems important for remembering facts?",zh:"哪個睡眠階段對記住事實特別重要？",o:["Deep sleep","Dream sleep","Light naps","Waking up"],a:0},
 {q:"What advice does the article give language learners?",zh:"文章給語言學習者什麼建議？",o:["Study all night before a test","Review before bed and sleep well","Only study in the morning","Avoid naps"],a:1}
]},

{id:"a07",title:"The Note in the Library Book",zh:"圖書館書裡的紙條",genre:"故事",lv:2,
paras:[
 [["Daniel borrowed an old novel from the library on a rainy Tuesday.","丹尼爾在一個下雨的星期二，從圖書館借了一本舊小說。"],
  ["When he opened it at home, a folded piece of paper fell onto the floor.","他在家打開書時，一張摺起來的紙掉到了地上。"]],
 [["It was a handwritten note.","那是一張手寫的紙條。"],
  ["\"To whoever finds this: this book got me through the hardest year of my life. I hope it helps you too. Please leave a note for the next reader.\"","「給發現這張紙條的人：這本書陪我度過人生中最難熬的一年。希望它也能幫到你。請為下一位讀者留一張紙條。」"]],
 [["Daniel smiled, but he didn't think much of it at first.","丹尼爾笑了笑，但一開始沒想太多。"],
  ["He had just lost his job, and he wasn't in the mood for anything, not even reading.","他剛失業，對什麼事都提不起勁，連閱讀也是。"],
  ["Still, that night he read the first chapter, and then the second.","不過那天晚上，他還是讀了第一章，接著又讀了第二章。"]],
 [["The story was about a man who kept starting over after every failure.","故事講的是一個在每次失敗後都重新開始的男人。"],
  ["Somehow, it felt like it had been written just for him.","不知怎麼的，他覺得這本書好像是專門為他寫的。"],
  ["He finished it in three days.","他三天就把它讀完了。"]],
 [["Before returning the book, Daniel sat down and wrote his own note.","在還書之前，丹尼爾坐下來，寫了自己的紙條。"],
  ["He wrote about losing his job and how the book had given him hope.","他寫了自己失業的事，以及這本書如何給了他希望。"],
  ["He folded it carefully and placed it next to the first note.","他小心地把紙條摺好，放在第一張紙條旁邊。"]],
 [["A week later, he got a call about a new job.","一個禮拜後，他接到了一通新工作的電話。"],
  ["He never found out who wrote the first note, but he often wondered how many notes the book would collect over the years.","他始終不知道第一張紙條是誰寫的，但他常常好奇這些年來這本書會收集到多少張紙條。"]]
],
vocab:[["folded","摺起來的"],["handwritten","手寫的"],["get someone through","幫某人撐過"],["not think much of it","沒放在心上"],["in the mood for","有心情做"],["start over","重新開始"],["failure","失敗"],["wonder","好奇、想知道"]],
qs:[
 {q:"What fell out of the book?",zh:"書裡掉出了什麼？",o:["A photo","A handwritten note","A bookmark","A library card"],a:1},
 {q:"What was happening in Daniel's life at that time?",zh:"丹尼爾當時的生活發生了什麼事？",o:["He was moving to a new city.","He had just lost his job.","He had just gotten married.","He was studying for an exam."],a:1},
 {q:"What was the novel about?",zh:"那本小說在講什麼？",o:["A man who kept starting over after failures","A librarian who wrote notes","A trip around the world","A famous writer's life"],a:0},
 {q:"What did Daniel do before returning the book?",zh:"丹尼爾還書前做了什麼？",o:["He removed the note.","He bought his own copy.","He wrote his own note.","He called the library."],a:2}
]},

{id:"a08",title:"Tips for Your First Trip Abroad",zh:"第一次出國的小建議",genre:"生活",lv:2,
paras:[
 [["Traveling abroad for the first time can be exciting and a little scary.","第一次出國旅行可能很興奮，也有點可怕。"],
  ["With some simple preparation, though, you can avoid most common problems.","不過只要做些簡單的準備，就能避開大部分常見的問題。"]],
 [["First, make copies of your important documents.","首先，把重要證件影印備份。"],
  ["Take a photo of your passport and keep it on your phone and in your email.","把護照拍照，存在手機和電子信箱裡。"],
  ["If you lose the original, a copy will make things much easier at the embassy.","如果正本弄丟了，有影本在大使館辦事會容易很多。"]],
 [["Second, tell your bank that you're traveling.","第二，告訴你的銀行你要出國。"],
  ["Some banks block cards when they see payments from another country, because they think it might be fraud.","有些銀行看到來自其他國家的付款會把卡片鎖住，因為他們以為可能是盜刷。"],
  ["It's also smart to carry a small amount of local cash for places that don't take cards.","另外，身上帶一點當地現金，以備不收卡的地方使用，也是聰明的做法。"]],
 [["Third, learn a few basic phrases in the local language.","第三，學幾句當地語言的基本用語。"],
  ["Even simple words like \"hello,\" \"thank you,\" and \"excuse me\" can make people much friendlier toward you.","就算只是「你好」、「謝謝」、「不好意思」這樣簡單的詞，也能讓人們對你友善許多。"]],
 [["Finally, don't plan every minute of your trip.","最後，不要把旅程的每分每秒都排滿。"],
  ["Leave some free time to wander around and discover things on your own.","留一些空檔隨意逛逛，自己去發現新事物。"],
  ["Often, the moments you didn't plan become the ones you remember most.","往往那些沒計畫到的時刻，才是你最難忘的。"]]
],
vocab:[["abroad","在國外"],["preparation","準備"],["document","文件、證件"],["original","正本"],["embassy","大使館"],["block","封鎖、凍結"],["fraud","詐騙、盜刷"],["phrase","片語、用語"],["wander around","四處閒逛"]],
qs:[
 {q:"Why should you take a photo of your passport?",zh:"為什麼要把護照拍照？",o:["To post it online","In case you lose the original","To show at restaurants","Because hotels require it"],a:1},
 {q:"Why might a bank block your card?",zh:"銀行為什麼可能鎖住你的卡？",o:["It thinks the payment might be fraud.","You spent too much money.","The card is too old.","You forgot your password."],a:0},
 {q:"What does the writer say about planning?",zh:"作者對行程規劃有什麼看法？",o:["Plan every minute carefully.","Don't plan at all.","Leave some free time.","Only plan the first day."],a:2},
 {q:"How many main tips does the article give?",zh:"文章主要給了幾個建議？",o:["Two","Three","Four","Five"],a:2}
]},

{id:"a09",title:"Cities Open Cooling Centers as Heat Wave Continues",zh:"熱浪持續，各城市開放避暑中心",genre:"新聞",lv:2,
paras:[
 [["As temperatures stayed above 38 degrees for a fifth straight day, the city of Riverton opened a dozen cooling centers on Monday.","氣溫連續第五天維持在 38 度以上，河頓市在星期一開放了十幾處避暑中心。"],
  ["The centers, located in libraries and community halls, offer air conditioning, drinking water, and a place to rest.","這些避暑中心設在圖書館和社區活動中心，提供冷氣、飲用水和休息的地方。"]],
 [["Health officials warned that extreme heat can be dangerous, especially for older adults, young children, and people who work outdoors.","衛生官員警告，極端高溫可能很危險，尤其是對長者、幼童和戶外工作者。"],
  ["Signs of heat illness include dizziness, headaches, and nausea.","中暑的徵兆包括頭暈、頭痛和噁心。"],
  ["Anyone with these symptoms is advised to move to a cool place and drink water immediately.","任何有這些症狀的人，都建議立刻移到涼爽的地方並喝水。"]],
 [["The city also changed the schedule for outdoor workers.","市政府也調整了戶外工作者的工時。"],
  ["Road crews will now start at 5 a.m. and finish before noon, when the heat is at its worst.","道路施工人員現在改成早上五點開工，在最熱的中午之前收工。"]],
 [["Volunteers have been checking on elderly neighbors who live alone.","志工們一直在探望獨居的年長鄰居。"],
  ["\"A lot of older people don't want to bother anyone,\" said one volunteer.","「很多長輩不想麻煩別人，」一位志工說。"],
  ["\"So we just knock on their door and make sure they're okay.\"","「所以我們就去敲敲門，確認他們沒事。」"]],
 [["Forecasters expect the heat to ease by the end of the week, when a band of storms is predicted to move through the region.","氣象預報員預期熱浪會在週末前緩解，屆時預計會有一波雷雨帶通過這個地區。"]]
],
vocab:[["straight（連續）","連續的"],["a dozen","十幾個、一打"],["extreme","極端的"],["dizziness","頭暈"],["nausea","噁心"],["symptom","症狀"],["crew","工作人員、隊伍"],["check on","探望、查看狀況"],["forecaster","氣象預報員"],["ease","緩解"]],
qs:[
 {q:"Where are the cooling centers located?",zh:"避暑中心設在哪裡？",o:["In shopping malls","In libraries and community halls","In hospitals","In schools only"],a:1},
 {q:"Which is NOT mentioned as a sign of heat illness?",zh:"下列哪一項「不是」文中提到的中暑徵兆？",o:["Dizziness","Headaches","Nausea","Fever"],a:3},
 {q:"Why did road crews change their schedule?",zh:"道路施工人員為什麼調整工時？",o:["To avoid the worst heat","To finish the road faster","Because of the storms","To save money"],a:0},
 {q:"What are volunteers doing?",zh:"志工們在做什麼？",o:["Selling water","Fixing air conditioners","Checking on elderly neighbors","Driving people to the hospital"],a:2},
 {q:"What is expected to end the heat wave?",zh:"預計什麼會結束這波熱浪？",o:["Snow","Storms","Strong winds","Nothing, it will continue"],a:1}
]},

{id:"a10",title:"The Four-Day Workweek: Dream or Future?",zh:"一週工作四天：夢想還是未來？",genre:"新聞",lv:3,
paras:[
 [["The idea of working four days a week instead of five used to sound like a fantasy.","一週工作四天而不是五天，這個想法過去聽起來像是天方夜譚。"],
  ["In recent years, however, a growing number of companies around the world have been testing it.","然而近年來，世界各地越來越多公司開始試行這種制度。"]],
 [["In most trials, employees keep the same salary while working fewer hours.","在大部分的試行中，員工工時減少，但薪水維持不變。"],
  ["The goal is not simply to work less, but to work smarter: fewer unnecessary meetings, fewer distractions, and more focus.","目標不只是少做一點，而是更聰明地工作：減少不必要的會議、減少分心、更加專注。"]],
 [["Supporters point to encouraging results.","支持者指出了令人振奮的結果。"],
  ["Many companies that took part in trials reported that productivity stayed the same or even improved.","許多參與試行的公司表示，生產力維持不變甚至有所提升。"],
  ["Employees often said they felt less stressed, slept better, and had more time for family and hobbies.","員工們常說自己壓力變小、睡得更好，也有更多時間陪家人和從事興趣。"],
  ["Some employers also found it easier to attract and keep talented workers.","有些雇主也發現，這樣更容易吸引並留住優秀人才。"]],
 [["Critics, however, argue that the model doesn't work for every industry.","不過批評者認為，這種模式並不適用於所有產業。"],
  ["Hospitals, restaurants, and shops need people available every day, so reducing hours may simply mean hiring more staff, which raises costs.","醫院、餐廳和商店每天都需要人手，所以減少工時可能只代表要多請人，進而增加成本。"],
  ["Others worry that squeezing five days of work into four could make each day longer and more exhausting.","也有人擔心，把五天的工作塞進四天，可能會讓每一天變得更長、更累。"]],
 [["For now, the four-day week remains an experiment rather than the norm.","目前，一週四天仍是一種實驗，而非常態。"],
  ["But as more data comes in, the debate is shifting from \"Is it possible?\" to \"Who is it right for?\"","但隨著越來越多數據出爐，爭論的焦點正從「這可能嗎？」轉向「這適合誰？」"]]
],
vocab:[["fantasy","幻想"],["trial","試行、試驗"],["distraction","使人分心的事物"],["encouraging","令人鼓舞的"],["productivity","生產力"],["attract","吸引"],["critic","批評者"],["industry","產業"],["squeeze","擠壓、塞進"],["exhausting","令人筋疲力盡的"],["norm","常態、標準"],["shift","轉移"]],
qs:[
 {q:"In most trials, what happens to employees' salaries?",zh:"在大多數試行中，員工的薪水會怎樣？",o:["They go down.","They stay the same.","They go up.","They are paid by the hour."],a:1},
 {q:"According to supporters, what happened to productivity?",zh:"根據支持者，生產力發生了什麼變化？",o:["It dropped sharply.","It stayed the same or improved.","Nobody measured it.","It only improved on Fridays."],a:1},
 {q:"Why might the model be difficult for hospitals and shops?",zh:"為什麼這個模式對醫院和商店可能比較難？",o:["They need people available every day.","Their workers don't want it.","They are closed on weekends.","They already work four days."],a:0},
 {q:"What concern do some people have about working four longer days?",zh:"有些人對「四天長工時」有什麼擔心？",o:["It could be more exhausting.","It would be too boring.","It would reduce salaries.","It would cause more meetings."],a:0},
 {q:"How is the debate changing, according to the last paragraph?",zh:"根據最後一段，這場爭論如何轉變？",o:["People now think it's impossible.","It is moving to who it suits best.","Governments have made it the law.","Companies have stopped testing it."],a:1}
]},

{id:"a11",title:"The Surprising Minds of Octopuses",zh:"章魚驚人的大腦",genre:"科普",lv:3,
paras:[
 [["With eight arms, three hearts, and blue blood, the octopus looks like something from another planet.","有八隻手臂、三顆心臟和藍色的血液，章魚看起來像是來自另一個星球的生物。"],
  ["But what truly amazes scientists is not its body, but its intelligence.","但真正讓科學家驚嘆的不是牠的身體，而是牠的智慧。"]],
 [["Octopuses have been observed solving puzzles, opening jars, and escaping from tanks.","人們曾觀察到章魚解開謎題、打開罐子，還從水族箱裡逃脫。"],
  ["Some have even learned to recognize individual people, reacting differently to keepers they like and those they don't.","有些章魚甚至學會辨認不同的人，對自己喜歡和不喜歡的飼養員有不同的反應。"]],
 [["Part of what makes the octopus so unusual is how its nervous system is organized.","章魚之所以如此特別，部分原因在於牠神經系統的組織方式。"],
  ["A large share of its neurons are located not in its brain but in its arms.","牠有很大一部分的神經元不在大腦，而是在手臂裡。"],
  ["This means each arm can, to some extent, sense and react to its surroundings on its own.","這表示每一隻手臂在某種程度上，都能自己感知並回應周遭環境。"]],
 [["Octopuses are also masters of disguise.","章魚也是偽裝大師。"],
  ["Special cells in their skin allow them to change color and even texture in a fraction of a second, helping them hide from predators or sneak up on prey.","牠們皮膚裡的特殊細胞，讓牠們能在一瞬間改變顏色，甚至改變皮膚紋理，幫助牠們躲避掠食者或悄悄接近獵物。"]],
 [["Yet despite their remarkable abilities, most octopuses live surprisingly short lives, often only a year or two.","然而，儘管能力非凡，大部分章魚的壽命卻短得驚人，通常只有一兩年。"],
  ["Scientists are still trying to understand how such a complex mind developed in an animal that lives so briefly and mostly alone.","科學家仍在試圖了解，這麼複雜的心智是如何在一種壽命短暫、大多獨居的動物身上發展出來的。"]]
],
vocab:[["intelligence","智慧、智力"],["observe","觀察"],["recognize","認出"],["individual","個別的"],["nervous system","神經系統"],["neuron","神經元"],["to some extent","在某種程度上"],["disguise","偽裝"],["texture","質地、紋理"],["a fraction of a second","一瞬間"],["predator","掠食者"],["prey","獵物"],["remarkable","非凡的"]],
qs:[
 {q:"What amazes scientists most about octopuses?",zh:"章魚最讓科學家驚嘆的是什麼？",o:["Their blue blood","Their intelligence","Their size","Their speed"],a:1},
 {q:"Where are a large share of an octopus's neurons?",zh:"章魚有很大一部分神經元位在哪裡？",o:["In its hearts","In its skin","In its arms","In its eyes"],a:2},
 {q:"What can special skin cells help octopuses do?",zh:"皮膚裡的特殊細胞能幫章魚做什麼？",o:["Breathe out of water","Change color and texture","Grow new arms","Make sounds"],a:1},
 {q:"What puzzle do scientists still want to solve?",zh:"科學家仍想解開什麼謎題？",o:["Why octopuses have three hearts","How a complex mind developed in a short-lived, solitary animal","Why octopuses like certain people","How octopuses open jars"],a:1}
]},

{id:"a12",title:"In Defense of Boredom",zh:"為無聊說句話",genre:"觀點",lv:3,
paras:[
 [["When was the last time you were truly bored?","你上一次真正感到無聊是什麼時候？"],
  ["For many of us, it's hard to remember.","對我們很多人來說，這已經很難想起來了。"],
  ["The moment we have nothing to do, whether we're waiting in line or riding the bus, we reach for our phones.","只要一沒事做，不管是在排隊還是搭公車，我們就伸手拿手機。"]],
 [["At first glance, this seems harmless, even efficient.","乍看之下，這似乎無傷大雅，甚至很有效率。"],
  ["Why waste time staring at a wall when you could be catching up on news or messages?","既然可以看新聞、回訊息，何必浪費時間盯著牆壁發呆？"],
  ["But I've come to believe that by eliminating boredom, we may be losing something valuable.","但我漸漸相信，把無聊消滅掉，我們可能正在失去某種珍貴的東西。"]],
 [["Boredom, uncomfortable as it is, pushes the mind to wander.","無聊雖然讓人不舒服，卻會推動思緒四處漫遊。"],
  ["And a wandering mind is often a creative one.","而漫遊的思緒往往富有創意。"],
  ["Many people report that their best ideas come to them in the shower, on a long walk, or just before falling asleep, precisely the moments when there's nothing else to focus on.","很多人說他們最好的點子是在洗澡、長時間散步或快睡著時冒出來的，正好都是沒有其他事可專注的時刻。"]],
 [["Boredom can also be a signal.","無聊也可能是一種訊號。"],
  ["If we constantly feel the need to escape it, it might be telling us that something in our lives needs to change, perhaps our job, our habits, or the way we spend our free time.","如果我們一直想逃離它，它或許在告訴我們生活中有些東西需要改變，也許是工作、習慣，或我們運用空閒時間的方式。"],
  ["Filling every empty moment with a screen means we never stop long enough to hear that message.","用螢幕填滿每一個空檔，意味著我們從不停下來夠久，去聽見那個訊息。"]],
 [["I'm not suggesting we throw away our phones.","我並不是建議大家把手機丟掉。"],
  ["But the next time you find yourself with a few empty minutes, try leaving your phone in your pocket.","但下次你發現自己有幾分鐘的空檔時，試著把手機留在口袋裡。"],
  ["Let yourself be bored for a while, and see where your mind takes you.","讓自己無聊一下，看看你的思緒會帶你去哪裡。"]]
],
vocab:[["reach for","伸手去拿"],["at first glance","乍看之下"],["harmless","無害的"],["efficient","有效率的"],["catch up on","補上、趕上（進度）"],["eliminate","消除"],["wander","漫遊、閒晃"],["precisely","正好、恰恰"],["signal","訊號"],["constantly","不斷地"]],
qs:[
 {q:"What do many people do the moment they have nothing to do?",zh:"很多人一沒事做就會做什麼？",o:["Take a nap","Reach for their phones","Start a conversation","Read a book"],a:1},
 {q:"According to the writer, what can boredom lead to?",zh:"根據作者，無聊可能帶來什麼？",o:["Creative ideas","Better sleep","More money","Faster work"],a:0},
 {q:"What might constant boredom be telling us?",zh:"持續的無聊可能在告訴我們什麼？",o:["We need a new phone.","Something in our lives needs to change.","We should sleep more.","We are working too hard."],a:1},
 {q:"What does the writer suggest?",zh:"作者建議什麼？",o:["Throw away your phone","Never be bored","Sometimes leave your phone in your pocket","Use apps to avoid boredom"],a:2},
 {q:"What is the writer's overall attitude toward boredom?",zh:"作者對無聊的整體態度是什麼？",o:["It is always harmful.","It can be valuable.","It should be avoided.","It is only for children."],a:1}
]},

/* ============ 2026-11 新增長篇文章 a13～a18 ============ */

{id:"a13",title:"The Town That Turned Off Its Streetlights",zh:"把路燈關掉的小鎮",genre:"新聞",lv:2,
paras:[
 [["Last spring, the small mountain town of Larkfield did something that surprised its neighbors: it turned off most of its streetlights after midnight.","去年春天，山中小鎮拉克菲爾德做了一件讓鄰近城鎮都很驚訝的事：午夜過後，它把大部分路燈都關了。"],
  ["The decision was made after a long and sometimes heated town meeting.","這個決定是在一場冗長、有時還吵得很激烈的鎮民大會之後做出的。"],
  ["Some residents worried about safety, while others were tired of paying high electricity bills.","有些居民擔心安全問題，另一些人則受夠了高昂的電費。"]],
 [["The idea came from a retired science teacher named Walter Briggs.","這個點子來自一位名叫華特・布里格斯的退休自然老師。"],
  ["For years, he had taken his students to a nearby hill to look at the stars.","多年來，他都會帶學生到附近的山丘上看星星。"],
  ["\"Every year, we could see fewer of them,\" he explained.","「每一年，我們看得到的星星都更少了。」他解釋。"],
  ["\"The lights from town were slowly stealing the night sky from us.\"","「鎮上的燈光正一點一點把夜空從我們身邊偷走。」"]],
 [["Before the change, the town hired an expert to study where light was really needed.","在改變之前，鎮上請了一位專家研究哪裡真正需要燈光。"],
  ["She found that many lights were shining on empty fields, parking lots, and even the sky itself.","她發現很多燈照的是空地、停車場，甚至直接照向天空。"],
  ["Lights near crossroads, the clinic, and the bus station were kept on all night.","十字路口、診所和公車站附近的燈則整晚都保持開著。"],
  ["The rest were switched to motion sensors or turned off after twelve.","其他的燈則換成感應式，或在十二點後關掉。"]],
 [["The results have been better than many expected.","結果比很多人預期的還要好。"],
  ["The town now saves about forty percent on its lighting costs, and that money is being used to repair old roads.","鎮上現在省下大約四成的照明費用，這筆錢正用來修理老舊的道路。"],
  ["According to the local police, crime has not gone up at all.","根據當地警方的說法，犯罪率完全沒有上升。"]],
 [["There have been other, less expected benefits as well.","另外還有一些比較意想不到的好處。"],
  ["Several residents say they sleep better now that their bedrooms are truly dark.","好幾位居民說，現在臥室真的暗下來了，他們睡得比較好。"],
  ["Birdwatchers have also noticed more owls in the area.","賞鳥人士也發現這一帶的貓頭鷹變多了。"]],
 [["Not everyone is happy, however.","不過，並不是每個人都滿意。"],
  ["A few shop owners say the dark streets make the town center feel empty and a little scary.","有幾位店家老闆說，暗暗的街道讓鎮中心感覺空蕩蕩的，還有點可怕。"],
  ["The town has promised to review the plan every six months and listen to complaints.","鎮公所承諾每六個月檢討一次這個計畫，並傾聽大家的意見。"]],
 [["Meanwhile, Larkfield has become something of a tourist attraction.","同時，拉克菲爾德也成了某種觀光景點。"],
  ["On clear nights, visitors drive up from the city just to see the Milky Way.","在晴朗的夜晚，遊客會特地從城市開車上來，只為了看銀河。"],
  ["\"I didn't know the sky could look like this,\" said one visitor.","「我不知道天空可以長這樣。」一位遊客說。"],
  ["Mr. Briggs, now seventy-two, still leads a free stargazing walk every Friday.","現年七十二歲的布里格斯先生，每週五仍會帶一場免費的觀星散步。"]]
],
vocab:[["heated","激烈的"],["resident","居民"],["retired","退休的"],["crossroads","十字路口"],["motion sensor","動作感應器"],["benefit","好處"],["review","檢討、重新評估"],["tourist attraction","觀光景點"],["the Milky Way","銀河"],["stargazing","觀星"]],
qs:[
 {q:"What did Larkfield decide to do?",zh:"拉克菲爾德決定做什麼？",o:["Build more streetlights","Turn off most streetlights after midnight","Close the town at night","Make streetlights brighter"],a:1},
 {q:"Why did Walter Briggs suggest the idea?",zh:"華特・布里格斯為什麼提出這個點子？",o:["He wanted to save his own money.","The town lights were hiding the stars.","He was afraid of bright lights.","His students asked him to."],a:1},
 {q:"Which lights were kept on all night?",zh:"哪些燈整晚都開著？",o:["Lights in parking lots","Lights near crossroads, the clinic and the bus station","Lights on empty fields","All lights in shops"],a:1},
 {q:"What is the saved money being used for?",zh:"省下來的錢拿去做什麼？",o:["Repairing old roads","Building a new clinic","Paying the police","Buying telescopes"],a:0},
 {q:"Who is NOT happy with the change?",zh:"誰對這個改變不滿意？",o:["Birdwatchers","Some shop owners","The local police","Visitors from the city"],a:1},
 {q:"What does the town plan to do about complaints?",zh:"鎮公所打算怎麼處理抱怨？",o:["Ignore them","Turn all the lights back on","Review the plan every six months","Ask Mr. Briggs to decide"],a:2}
]},

{id:"a14",title:"The Umbrella Exchange",zh:"雨傘交換",genre:"故事",lv:2,
paras:[
 [["It had been raining for three days when Mia finally lost her patience with her old umbrella.","雨已經下了三天，米亞終於對她那把舊傘失去耐心。"],
  ["One of its metal ribs had snapped, and every time the wind blew, it turned inside out.","其中一根傘骨斷了，每次風一吹，傘就整個翻過去。"],
  ["She arrived at the train station soaked and in a bad mood.","她全身濕透、心情很差地到了火車站。"]],
 [["Next to the ticket machines stood a large wooden box she had never noticed before.","售票機旁邊放著一個她從沒注意過的大木箱。"],
  ["Inside were about twenty umbrellas of every color and size.","裡面大約有二十把各種顏色、大小的雨傘。"],
  ["A handwritten sign said: \"Take one if you need it. Leave one when you can.\"","一張手寫的牌子寫著：「需要就拿一把，有能力時就留一把。」"]],
 [["Mia hesitated.","米亞猶豫了。"],
  ["It felt strange to take something that belonged to strangers.","拿陌生人的東西感覺有點怪。"],
  ["But the rain was getting heavier, so she quietly picked a dark green umbrella and hurried to her train.","但雨越下越大，於是她悄悄挑了一把深綠色的傘，匆匆趕上火車。"]],
 [["That evening, she noticed something tied to the handle: a small paper tag.","那天晚上，她注意到傘柄上綁著一樣東西：一張小紙條。"],
  ["On it, someone had written, \"This umbrella walked my daughter to her first job interview. Good luck with wherever it takes you.\"","上面有人寫著：「這把傘陪我女兒走去她第一次工作面試。祝你不論它帶你去哪裡都順利。」"],
  ["Mia read it twice and smiled for the first time all day.","米亞讀了兩遍，露出了一整天來的第一個笑容。"]],
 [["For the next few weeks, the green umbrella went everywhere with her.","接下來幾個禮拜，那把綠傘跟著她到處走。"],
  ["It went to the hospital when she visited her grandmother, and to the café where she met an old friend after many years.","她去醫院探望奶奶時帶著它，和多年不見的老朋友在咖啡館碰面時也帶著它。"],
  ["She started to feel that the umbrella was carrying more than just her.","她開始覺得，這把傘承載的不只是她。"]],
 [["When the rainy season ended, Mia bought a new umbrella of her own.","雨季結束時，米亞替自己買了一把新傘。"],
  ["Then she took the green one back to the station.","然後她把那把綠傘帶回車站。"],
  ["Before she put it in the box, she added a second tag under the first one.","放進箱子之前，她在第一張紙條下面又加了一張。"]],
 [["\"This umbrella helped me through a grey month,\" she wrote.","「這把傘陪我度過灰暗的一個月，」她寫道。"],
  ["\"It visited my grandmother and found me an old friend. Now it's your turn.\"","「它探望了我的奶奶，還幫我找回一位老朋友。現在輪到你了。」"],
  ["As she walked away, the sun came out, and for once she didn't need an umbrella at all.","她走開時，太陽出來了，這一次，她完全不需要傘。"]]
],
vocab:[["lose one's patience","失去耐心"],["rib","傘骨"],["snap","啪地斷掉"],["inside out","裡外翻過來"],["soaked","濕透的"],["hesitate","猶豫"],["handle","把手"],["tag","標籤、紙條"],["rainy season","雨季"],["for once","就這一次"]],
qs:[
 {q:"What was wrong with Mia's old umbrella?",zh:"米亞的舊傘有什麼問題？",o:["It was too small.","A rib was broken and it turned inside out.","It had a hole in it.","She had left it on the train."],a:1},
 {q:"What did the sign on the box say?",zh:"箱子上的牌子寫什麼？",o:["Umbrellas for sale","Lost and found","Take one if you need it, leave one when you can","Do not touch"],a:2},
 {q:"Why did Mia finally take an umbrella?",zh:"米亞最後為什麼拿了傘？",o:["The rain was getting heavier.","A station worker told her to.","She wanted a green umbrella.","Her friend recommended it."],a:0},
 {q:"What was written on the first tag?",zh:"第一張紙條寫了什麼？",o:["The owner's phone number","A story about someone's job interview","The price of the umbrella","A warning about the weather"],a:1},
 {q:"Where did Mia take the umbrella?",zh:"米亞帶著傘去了哪裡？",o:["To a job interview","To the hospital and a café","To another city","To her office only"],a:1},
 {q:"What did Mia do at the end of the story?",zh:"故事最後米亞做了什麼？",o:["She kept the green umbrella.","She threw the umbrella away.","She returned it with a new tag.","She gave it to her grandmother."],a:2}
]},

{id:"a15",title:"Why We Forget Our Dreams",zh:"為什麼我們會忘記夢",genre:"科普",lv:3,
paras:[
 [["Most people dream several times every night, yet by breakfast, almost all of those dreams have disappeared.","大多數人每晚都會做好幾次夢，但到了吃早餐的時候，幾乎所有的夢都消失了。"],
  ["You might wake up with a strong feeling or a single strange image, and then, within minutes, even that fades away.","你可能醒來時帶著一種強烈的感覺或一個奇怪的畫面，然後幾分鐘內，連那個也淡掉了。"],
  ["Scientists have spent decades trying to understand why dreams are so hard to hold on to.","科學家花了數十年試著了解，為什麼夢這麼難留住。"]],
 [["One explanation has to do with chemistry.","其中一種解釋跟化學物質有關。"],
  ["During the stage of sleep when we dream most vividly, the brain releases very little of a chemical called noradrenaline.","在我們做夢最鮮明的睡眠階段，大腦釋放的一種叫正腎上腺素的化學物質非常少。"],
  ["This chemical plays an important role in turning experiences into long-term memories.","這種物質在把經歷轉成長期記憶的過程中扮演重要角色。"],
  ["Without enough of it, the brain may simply fail to save what it experiences in a dream.","少了它，大腦可能就沒辦法把夢裡經歷的事存下來。"]],
 [["Another explanation focuses on a part of the brain called the hippocampus, which helps us store new information.","另一種解釋聚焦在大腦中一個叫海馬迴的部位，它幫助我們儲存新資訊。"],
  ["Research suggests that the hippocampus is one of the last areas of the brain to fully \"wake up\" in the morning.","研究顯示，海馬迴是早上最晚完全「醒來」的大腦區域之一。"],
  ["By the time it is ready to record memories again, the dream may already be gone.","等它準備好再次記錄記憶時，夢可能早就不見了。"]],
 [["Some researchers think forgetting our dreams might actually be useful.","有些研究者認為，忘記夢其實可能是有用的。"],
  ["Dreams are often illogical, mixing real people with impossible events.","夢常常不合邏輯，把真實的人和不可能發生的事混在一起。"],
  ["If we remembered every dream as clearly as real life, it could become difficult to tell the two apart.","如果我們把每個夢都記得跟真實生活一樣清楚，可能會很難分辨兩者。"]],
 [["Interestingly, people who remember their dreams more often tend to wake up more during the night.","有趣的是，比較常記得夢的人，夜裡也往往比較常醒來。"],
  ["These short awakenings, which usually last less than a minute, may give the brain a chance to store part of a dream.","這些通常不到一分鐘的短暫清醒，也許讓大腦有機會存下部分的夢。"],
  ["In other words, remembering a lot of dreams is not necessarily a sign of good sleep.","換句話說，記得很多夢不一定代表睡得好。"]],
 [["If you want to remember more of your dreams, there are a few simple tricks.","如果你想記得更多夢，有幾個簡單的小技巧。"],
  ["Keep a notebook by your bed and write down anything you recall as soon as you open your eyes.","在床邊放一本筆記本，一睜開眼睛就把想得起來的東西寫下來。"],
  ["Try not to move or check your phone first, because even small distractions can erase a fragile memory.","試著先不要動、也不要先看手機，因為就算是小小的干擾，也可能抹掉脆弱的記憶。"]],
 [["Of course, no method will help you remember everything.","當然，沒有任何方法能讓你記住所有的夢。"],
  ["But with a little practice, many people find that their nights become much more interesting than they ever imagined.","但只要稍加練習，很多人會發現，自己的夜晚比想像中精彩得多。"]]
],
vocab:[["vividly","鮮明地"],["release","釋放"],["long-term memory","長期記憶"],["hippocampus","海馬迴"],["illogical","不合邏輯的"],["tell apart","分辨"],["awakening","醒來"],["not necessarily","不一定"],["distraction","使人分心的事物"],["fragile","脆弱的"]],
qs:[
 {q:"What is the main topic of the article?",zh:"這篇文章的主題是什麼？",o:["How to sleep longer","Why dreams are hard to remember","What dreams mean","Why people have nightmares"],a:1},
 {q:"What happens to noradrenaline during vivid dreaming?",zh:"做鮮明的夢時，正腎上腺素會怎樣？",o:["The brain releases a lot of it.","The brain releases very little of it.","It turns into a new chemical.","It helps us remember dreams."],a:1},
 {q:"Why does the hippocampus matter?",zh:"海馬迴為什麼重要？",o:["It creates dreams.","It controls breathing.","It helps store new information and wakes up late.","It makes us feel tired."],a:2},
 {q:"Why might forgetting dreams be useful?",zh:"忘記夢為什麼可能有好處？",o:["It saves energy.","It helps us tell dreams from real life.","It makes us sleep faster.","It stops nightmares."],a:1},
 {q:"What is true about people who remember many dreams?",zh:"常記得夢的人有什麼特點？",o:["They always sleep well.","They tend to wake up more during the night.","They never use phones.","They sleep fewer hours."],a:1},
 {q:"Which tip does the article give?",zh:"文章給了哪個建議？",o:["Check your phone right away","Drink coffee before bed","Write down what you recall as soon as you wake up","Sleep with the lights on"],a:2}
]},

{id:"a16",title:"Living with Less: My One-Year Experiment",zh:"少一點生活：我的一年實驗",genre:"生活",lv:2,
paras:[
 [["A year ago, I counted everything I owned, and the number shocked me: more than two thousand items.","一年前，我把自己擁有的東西全數了一遍，數字嚇到我：超過兩千件。"],
  ["I lived in a small apartment, but it was full of things I hardly ever used.","我住在一間小公寓，但裡面塞滿了我幾乎從來不用的東西。"],
  ["So I made a simple rule for the next twelve months: for every new thing I bought, two old things had to go.","所以我替接下來的十二個月訂了一條簡單的規則：每買一樣新東西，就要送走兩樣舊東西。"]],
 [["The first month was surprisingly easy.","第一個月出乎意料地簡單。"],
  ["I gave away clothes that no longer fit, cables for devices I didn't have anymore, and three identical coffee mugs.","我送掉了穿不下的衣服、早就沒有的裝置的線材，還有三個一模一樣的馬克杯。"],
  ["Every bag I took to the donation center made the apartment feel a little bigger.","每拿一袋去捐贈中心，公寓就感覺大了一點。"]],
 [["By the third month, things became harder.","到了第三個月，事情變難了。"],
  ["What remained were items with memories attached: letters from old friends, a broken watch from my grandfather, ticket stubs from concerts.","剩下的都是有回憶的東西：老朋友寫的信、爺爺留下的壞手錶、演唱會的票根。"],
  ["I realized I wasn't keeping the objects themselves; I was afraid of losing the memories.","我發現我留著的不是東西本身，而是害怕失去那些回憶。"]],
 [["My solution was to take photos of the things I didn't really need and keep only a small box of the most important ones.","我的辦法是把其實不需要的東西拍照留念，只留一小盒最重要的。"],
  ["To my surprise, looking at the photos brought back the same feelings.","讓我驚訝的是，看照片也能喚起一樣的感覺。"]],
 [["The rule also changed the way I shop.","這條規則也改變了我購物的方式。"],
  ["Before buying anything, I had to ask myself which two things I would give up for it.","買任何東西之前，我都得先問自己要為它放棄哪兩樣東西。"],
  ["Most of the time, the answer was \"nothing,\" and I walked away without buying.","大多數時候答案是「什麼都不想放棄」，於是我就沒買走了。"],
  ["I spent about thirty percent less than the year before, without feeling that I was missing out.","我比前一年少花了大約三成，卻不覺得自己錯過了什麼。"]],
 [["Not everything went smoothly.","並不是每件事都很順利。"],
  ["Twice I gave away something I later needed, including a ladder that I had to borrow from my neighbor two weeks later.","我有兩次送掉了後來需要的東西，包括一把梯子，兩週後只好跟鄰居借。"],
  ["But even that turned out well, because my neighbor and I now share several tools instead of each buying our own.","但連這件事最後也是好的，因為我和鄰居現在共用好幾樣工具，不用各自買。"]],
 [["Today I own about eight hundred items, and I don't plan to stop here.","現在我擁有大約八百件東西，而且我不打算就此停下。"],
  ["The biggest change isn't my tidier apartment, though.","不過最大的改變不是我比較整齊的公寓。"],
  ["It's that I spend less time looking after my things and more time actually living.","而是我花在照顧東西上的時間變少了，真正在生活的時間變多了。"]]
],
vocab:[["hardly ever","幾乎從不"],["give away","送掉"],["identical","一模一樣的"],["donation","捐贈"],["attached","附帶的"],["ticket stub","票根"],["give up","放棄"],["miss out","錯過"],["turn out","結果是"],["look after","照顧"]],
qs:[
 {q:"What was the writer's rule?",zh:"作者的規則是什麼？",o:["Buy nothing for a year","For every new thing, give away two old things","Give away one thing every day","Only buy things on sale"],a:1},
 {q:"Why did things get harder by the third month?",zh:"為什麼到了第三個月變難了？",o:["The donation center closed.","The remaining items had memories attached.","The writer moved to a bigger home.","The writer started buying more."],a:1},
 {q:"How did the writer deal with sentimental items?",zh:"作者怎麼處理有感情的東西？",o:["Threw them all away","Sold them online","Took photos and kept a small box of the most important ones","Gave them to friends"],a:2},
 {q:"How did the rule affect the writer's spending?",zh:"這條規則對作者的花費有什麼影響？",o:["Spent about 30% less","Spent twice as much","Spent the same","Stopped spending completely"],a:0},
 {q:"What happened with the ladder?",zh:"梯子發生了什麼事？",o:["It broke.","The writer bought a new one.","The writer later borrowed one from a neighbor.","The neighbor stole it."],a:2},
 {q:"According to the writer, what is the biggest change?",zh:"作者認為最大的改變是什麼？",o:["A tidier apartment","Saving money","Spending more time living instead of looking after things","Making new friends"],a:2}
]},

{id:"a17",title:"Should Homework Be Banned?",zh:"該禁止回家作業嗎？",genre:"觀點",lv:3,
paras:[
 [["Few topics make parents, teachers, and students argue as passionately as homework.","很少有話題能像回家作業一樣，讓家長、老師和學生吵得這麼激烈。"],
  ["Some schools have recently decided to eliminate it entirely, especially for younger children.","最近有些學校決定完全取消作業，尤其是對年紀比較小的孩子。"],
  ["Others insist that homework is essential for learning.","也有學校堅持作業是學習不可或缺的。"],
  ["The truth, as is often the case, is probably somewhere in between.","事實就跟很多時候一樣，大概落在兩者之間。"]],
 [["Supporters of homework make several reasonable points.","支持作業的人提出了幾個合理的論點。"],
  ["Practice helps students remember what they learned in class, and working alone teaches them to manage their time.","練習能幫學生記住課堂上學的東西，獨自完成作業也教他們管理時間。"],
  ["Homework also gives parents a window into what their children are studying.","作業也讓家長有機會看到孩子在學什麼。"]],
 [["Critics, however, point out that the benefits are far from guaranteed.","然而，批評者指出，這些好處絕對不是保證的。"],
  ["Studies of primary school students have found little connection between the amount of homework and how well children perform.","針對小學生的研究發現，作業量和孩子的表現之間幾乎沒什麼關聯。"],
  ["Meanwhile, too much homework can cause stress, reduce sleep, and take away time for play, which is important for development.","同時，太多作業可能造成壓力、減少睡眠，還會佔掉對成長很重要的玩耍時間。"]],
 [["There is also a question of fairness.","這還牽涉到公平的問題。"],
  ["A child with a quiet room, a computer, and educated parents has a clear advantage over a child who shares a small space with siblings or must help with family work after school.","一個有安靜房間、電腦和受過教育的父母的孩子，比起和兄弟姊妹擠在小空間、放學後還得幫忙家裡工作的孩子，有明顯的優勢。"],
  ["In this way, homework can quietly widen the gap between students.","這樣一來，作業可能會悄悄擴大學生之間的差距。"]],
 [["In my view, the problem is not homework itself, but bad homework.","在我看來，問題不在作業本身，而是不好的作業。"],
  ["Copying the same exercise twenty times teaches little except patience.","把同一個練習抄二十遍，除了耐心之外學不到什麼。"],
  ["On the other hand, reading a book of one's choice, interviewing a grandparent, or observing the moon for a week can be genuinely meaningful.","另一方面，讀一本自己挑的書、訪問祖父母，或連續一週觀察月亮，都可能真正有意義。"]],
 [["The amount matters too.","份量也很重要。"],
  ["Many educators recommend a simple guideline: about ten minutes per night for each grade level.","很多教育工作者建議一個簡單的原則：每個年級每晚大約十分鐘。"],
  ["A first grader would have ten minutes, while a sixth grader would have about an hour.","一年級學生大概十分鐘，六年級大概一小時。"]],
 [["Banning homework completely may feel like a bold solution, but it throws away something that can be valuable.","完全禁止作業或許感覺是個大膽的解決方案，但它也丟掉了可能很有價值的東西。"],
  ["Instead, schools should ask a better question: not \"How much homework?\" but \"What kind of homework is worth a child's evening?\"","學校應該問一個更好的問題：不是「要多少作業？」，而是「什麼樣的作業值得占用孩子的一個晚上？」"]]
],
vocab:[["passionately","激烈地、熱情地"],["eliminate","消除、取消"],["essential","不可或缺的"],["far from","絕非"],["guarantee","保證"],["perform","表現"],["sibling","兄弟姊妹"],["widen the gap","擴大差距"],["genuinely","真正地"],["guideline","指導原則"]],
qs:[
 {q:"What is the writer's main opinion?",zh:"作者的主要觀點是什麼？",o:["Homework should be banned.","Students need more homework.","The problem is bad homework, not homework itself.","Parents should do the homework."],a:2},
 {q:"Which is a point made by homework supporters?",zh:"下列哪一個是支持作業者的論點？",o:["It helps students manage their time.","It reduces stress.","It makes all students equal.","It gives children more playtime."],a:0},
 {q:"What did studies of primary school students find?",zh:"小學生的研究發現了什麼？",o:["More homework means better grades.","There is little connection between homework amount and performance.","Homework improves sleep.","Students prefer more homework."],a:1},
 {q:"Why can homework be unfair?",zh:"作業為什麼可能不公平？",o:["Teachers grade it differently.","Some children have better conditions at home.","Some students copy answers.","It is too easy for some students."],a:1},
 {q:"According to the guideline, how much homework would a sixth grader have?",zh:"依照那個原則，六年級學生每晚大概多少作業？",o:["Ten minutes","Thirty minutes","About an hour","Two hours"],a:2},
 {q:"Which homework does the writer consider meaningful?",zh:"作者認為哪種作業有意義？",o:["Copying an exercise twenty times","Interviewing a grandparent","Memorizing a dictionary","Doing extra math sheets"],a:1}
]},

{id:"a18",title:"The Last Lighthouse Keeper",zh:"最後的燈塔看守人",genre:"故事",lv:3,
paras:[
 [["For forty-one years, Elias Moran climbed the one hundred and twelve steps of the Gull Point lighthouse every evening at sunset.","四十一年來，伊萊亞斯・莫蘭每天傍晚日落時，都會爬上海鷗岬燈塔的一百一十二級階梯。"],
  ["He cleaned the great glass lens, checked the lamp, and wrote the weather in a thick leather notebook.","他擦拭巨大的玻璃透鏡、檢查燈具，再把天氣寫進一本厚厚的皮革筆記本。"],
  ["Then he watched the beam sweep across the dark water until morning.","然後他看著光束掃過黑暗的海面，直到天亮。"]],
 [["The letter arrived on a grey Tuesday in October.","那封信在十月一個灰濛濛的星期二寄到。"],
  ["The lighthouse would become fully automatic by the end of the year, it said, and his services would no longer be required.","信上說，燈塔將在年底前改成全自動，不再需要他的服務。"],
  ["It thanked him politely for his years of dedication, as if four decades could fit into a single sentence.","信裡客氣地感謝他多年來的奉獻，彷彿四十年可以裝進一句話裡。"]],
 [["Elias did not tell anyone at first.","伊萊亞斯一開始沒有告訴任何人。"],
  ["He continued his routine, but now he noticed things he had long stopped seeing: the smell of salt on the stairs, the way the lens split the light into tiny rainbows, the sound of the foghorn echoing off the cliffs.","他照常做例行的事，但現在他注意到很久沒留意的東西：階梯上的鹹味、透鏡把光折成細小彩虹的樣子、霧笛在懸崖間迴盪的聲音。"]],
 [["In November, a young engineer named Priya came to install the new equipment.","十一月，一位名叫普莉亞的年輕工程師來安裝新設備。"],
  ["She expected the old keeper to be bitter, but instead he made her tea and showed her every corner of the tower.","她以為這位老看守人會滿腹怨氣，沒想到他泡了茶給她，還帶她看塔裡的每個角落。"],
  ["He explained which window leaked in winter storms and which step creaked so loudly that it once woke him from a nap.","他說明哪扇窗在冬天暴風雨時會漏水，哪一級階梯嘎吱聲大到曾經把他從午睡中吵醒。"]],
 [["\"The machine will do my job,\" he told her one evening, \"but it won't notice when a fishing boat is coming home late, or when the sea looks wrong before a storm.\"","「機器會做我的工作，」某天晚上他對她說，「但它不會注意到有漁船晚歸，也不會在暴風雨前察覺海看起來不對勁。」"],
  ["Priya thought about this for a long time.","普莉亞想了很久。"],
  ["Before she left, she asked if she could copy his weather notebooks, all forty-one of them.","離開前，她問能不能把他的天氣筆記本全部抄下來，總共四十一本。"]],
 [["Months later, Elias received a package.","幾個月後，伊萊亞斯收到一個包裹。"],
  ["Inside was a report showing how Priya's team had used his records to improve storm warnings for the entire coast.","裡面是一份報告，說明普莉亞的團隊如何用他的紀錄改善整個海岸的暴風雨預警。"],
  ["Four decades of careful notes had revealed patterns that no modern instrument had captured.","四十年來仔細的筆記，揭露了任何現代儀器都沒有捕捉到的規律。"]],
 [["Elias now lives in a small house in the village below.","伊萊亞斯現在住在山下村子裡的一間小房子。"],
  ["Every evening at sunset, he still sits by his window and watches the light come on by itself.","每天傍晚日落時，他仍會坐在窗邊，看著燈自己亮起來。"],
  ["He no longer climbs the stairs, but he knows that part of him is still up there, keeping watch over the sea.","他不再爬那些階梯了，但他知道自己的一部分還在上面，守望著大海。"]]
],
vocab:[["lighthouse keeper","燈塔看守人"],["lens","透鏡"],["beam","光束"],["automatic","自動的"],["dedication","奉獻"],["routine","例行公事"],["foghorn","霧笛"],["bitter","怨恨的、苦澀的"],["creak","嘎吱作響"],["reveal","揭露"],["pattern","規律、模式"]],
qs:[
 {q:"What did the letter tell Elias?",zh:"那封信告訴伊萊亞斯什麼？",o:["He would get a raise.","The lighthouse would be closed forever.","The lighthouse would become automatic and his job would end.","He had to repair the lens."],a:2},
 {q:"How did Elias react at first?",zh:"伊萊亞斯一開始的反應是什麼？",o:["He told everyone immediately.","He kept his routine and noticed small details.","He left the lighthouse.","He wrote an angry reply."],a:1},
 {q:"How did Elias treat Priya?",zh:"伊萊亞斯怎麼對待普莉亞？",o:["He refused to talk to her.","He made her tea and showed her around.","He asked her to leave.","He complained about her work."],a:1},
 {q:"What did Elias say the machine could NOT do?",zh:"伊萊亞斯說機器做不到什麼？",o:["Turn the light on","Clean the lens","Notice a late boat or a strange-looking sea","Work at night"],a:2},
 {q:"How were Elias's notebooks used?",zh:"伊萊亞斯的筆記本被拿來做什麼？",o:["They were put in a museum.","They helped improve storm warnings.","They were sold to collectors.","They were thrown away."],a:1},
 {q:"How does the story end?",zh:"故事怎麼結束？",o:["Elias returns to work at the lighthouse.","Elias moves to the city.","Elias watches the light from his window in the village.","Priya becomes the new keeper."],a:2}
]}

]);
