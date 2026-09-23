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
]}

]);
