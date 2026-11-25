/* Echo 英語 — 學測英文模擬題（原創題，仿 108 課綱學測題型，非歷屆試題）
   題組格式：
   {id, type, title?, p?:[段落], bank?:[選項], qs:[...]}
   type：vocab 詞彙 / cloze 綜合測驗 / fill 文意選填 / struct 篇章結構 / read 閱讀測驗 / mixed 混合題 / trans 中譯英 / essay 英文作文
   段落裡的 __1__、__2__ … 是空格（題組內的題號，從 1 開始）。
   選擇題：{q?, o:[選項], a:正解索引(0 起算) 或 [多選索引…], ex:解析}
   簡答題（混合題）：{q, ans:[可接受答案…], ex}
   文意選填／篇章結構：選項放在 bank，題目只有 {a, ex}
   中譯英：qs:[{zh, ref:[參考譯文…], tip}]
   作文：{id, type:'essay', title, prompt, tips:[…]}
   id 一旦發布就不要改（作答紀錄用 id 記）。新增題組請接在同題型最大號碼之後。 */
window.GSAT=[

/* ===================== 詞彙題 ===================== */
{id:"gv01",type:"vocab",title:"第 1 回",qs:[
 {q:"The new policy was so ____ that even experts could not agree on what it actually meant.",o:["abundant","ambiguous","authentic","adequate"],a:1,ex:"ambiguous 模稜兩可的。abundant 豐富的；authentic 真正的；adequate 足夠的。連專家都看不懂意思 → 模稜兩可。"},
 {q:"After hours of negotiation, the two companies finally reached a ____ that satisfied both sides.",o:["conflict","contribution","complaint","compromise"],a:3,ex:"reach a compromise 達成妥協。conflict 衝突；contribution 貢獻；complaint 抱怨。"},
 {q:"The museum guard asked visitors not to touch the ancient vases because they are extremely ____.",o:["fragile","flexible","fertile","frequent"],a:0,ex:"fragile 易碎的。flexible 有彈性的；fertile 肥沃的；frequent 頻繁的。"},
 {q:"Jenny was ____ about her test results; she kept checking the website every ten minutes.",o:["ashamed","awkward","anxious","absurd"],a:2,ex:"anxious about 對…焦慮。每十分鐘查一次網站 → 很焦慮。ashamed 羞愧的；awkward 尷尬的；absurd 荒謬的。"},
 {q:"Thanks to modern medicine, the average human life ____ has increased greatly over the past century.",o:["span","scale","spot","shift"],a:0,ex:"life span 壽命。scale 規模；spot 地點；shift 轉變。"},
 {q:"The singer's voice was so ____ that the whole audience fell silent and listened carefully.",o:["monotonous","enchanting","offensive","fierce"],a:1,ex:"enchanting 迷人的。monotonous 單調的；offensive 冒犯的；fierce 兇猛的。"},
 {q:"To ____ energy, please turn off the lights when you leave the classroom.",o:["consume","conserve","confirm","conceal"],a:1,ex:"conserve energy 節約能源。consume 消耗（意思相反）；confirm 確認；conceal 隱藏。"},
 {q:"The police are still trying to find out the ____ of the fire; some suspect it was started by a cigarette.",o:["origin","outcome","orbit","option"],a:0,ex:"origin 起源、起因。outcome 結果；orbit 軌道；option 選擇。"},
 {q:"Mark ____ the invitation politely because he had already made other plans for the weekend.",o:["delivered","deserved","declined","devoted"],a:2,ex:"decline an invitation 婉拒邀請。deliver 遞送；deserve 應得；devote 奉獻。"},
 {q:"The heavy rain caused the river to ____, flooding several villages nearby.",o:["overlook","overcome","overhear","overflow"],a:3,ex:"overflow 氾濫、溢出。overlook 忽略；overcome 克服；overhear 無意中聽到。"}
]},
{id:"gv02",type:"vocab",title:"第 2 回",qs:[
 {q:"Smartphones have become ____ in modern life; it is hard to imagine a day without one.",o:["invisible","indispensable","incredible","inevitable"],a:1,ex:"indispensable 不可或缺的。後半句「很難想像沒有它的一天」是關鍵。invisible 看不見的；incredible 難以置信的；inevitable 無法避免的。"},
 {q:"The volunteers ____ food and blankets to the victims of the earthquake.",o:["distributed","disturbed","discouraged","dismissed"],a:0,ex:"distribute A to B 把 A 分發給 B。disturb 打擾；discourage 使氣餒；dismiss 解散、不予理會。"},
 {q:"Although the task seemed difficult at first, Amy ____ and finished it ahead of schedule.",o:["pretended","predicted","persevered","preserved"],a:2,ex:"persevere 堅持不懈。pretend 假裝；predict 預測；preserve 保存。"},
 {q:"The ____ between the twins is so strong that even their parents sometimes mix them up.",o:["reference","resistance","reluctance","resemblance"],a:3,ex:"resemblance 相似之處。連父母都會搞混 → 長得很像。reference 參考；resistance 抵抗；reluctance 不情願。"},
 {q:"Please keep your voice down. The baby has just fallen ____.",o:["awake","asleep","alike","alert"],a:1,ex:"fall asleep 睡著。awake 醒著的；alike 相像的；alert 警覺的。"},
 {q:"The professor's lecture was so ____ that half of the students fell asleep.",o:["tedious","vivid","thrilling","precise"],a:0,ex:"tedious 冗長乏味的。一半學生睡著 → 無聊。vivid 生動的；thrilling 刺激的；precise 精確的。"},
 {q:"Doctors warn that eating too much sugar may ____ the risk of heart disease.",o:["eliminate","evaluate","elevate","evacuate"],a:2,ex:"elevate 提高（= raise）。eliminate 消除；evaluate 評估；evacuate 撤離。"},
 {q:"The company has decided to ____ fifty new workers to meet the growing demand.",o:["retire","resign","reject","recruit"],a:3,ex:"recruit 招募。需求增加 → 招募新員工。retire 退休；resign 辭職；reject 拒絕。"},
 {q:"In a ____ society, people should respect different opinions, even if they disagree.",o:["democratic","dramatic","domestic","diplomatic"],a:0,ex:"democratic 民主的。dramatic 戲劇性的；domestic 國內的、家庭的；diplomatic 外交的。"},
 {q:"The hikers were ____ by the beautiful view at the top of the mountain and stood there in silence.",o:["overheard","overwhelmed","overlooked","overcharged"],a:1,ex:"be overwhelmed by 被…深深震撼。overhear 無意中聽到；overlook 忽略；overcharge 索價過高。"}
]},
{id:"gv03",type:"vocab",title:"第 3 回",qs:[
 {q:"Lisa is a very ____ person; she always plans everything carefully before taking action.",o:["impulsive","cautious","generous","stubborn"],a:1,ex:"cautious 謹慎的。impulsive 衝動的（相反）；generous 慷慨的；stubborn 固執的。"},
 {q:"The scientist's ____ discovery changed the way people understand the universe.",o:["trivial","temporary","remarkable","reluctant"],a:2,ex:"remarkable 非凡的。改變人們對宇宙的理解 → 了不起的發現。trivial 瑣碎的；temporary 暫時的；reluctant 不情願的。"},
 {q:"Many students find it hard to ____ on their studies when their phones keep buzzing.",o:["concentrate","contribute","consult","compete"],a:0,ex:"concentrate on 專心於。contribute to 貢獻；consult 諮詢；compete 競爭。"},
 {q:"The mayor promised to take ____ action to solve the city's traffic problems.",o:["imaginary","innocent","intimate","immediate"],a:3,ex:"take immediate action 立即採取行動。imaginary 想像的；innocent 無辜的；intimate 親密的。"},
 {q:"The restaurant is so popular that you have to make a ____ at least two weeks in advance.",o:["reputation","reservation","resolution","revolution"],a:1,ex:"make a reservation 訂位。reputation 名聲；resolution 決心；revolution 革命。"},
 {q:"Regular exercise can help ____ stress and improve your mood.",o:["relieve","receive","retrieve","reveal"],a:0,ex:"relieve stress 紓解壓力。receive 收到；retrieve 取回；reveal 揭露。"},
 {q:"Looking at the old photos, Grandpa ____ the days when he was a young soldier.",o:["recycled","recalled","repaired","resembled"],a:1,ex:"recall 回想起。recycle 回收；repair 修理；resemble 像。"},
 {q:"When water is heated, it eventually turns into steam, a process known as ____.",o:["evaporation","evolution","elimination","explanation"],a:0,ex:"evaporation 蒸發。evolution 演化；elimination 消除；explanation 解釋。"},
 {q:"The two countries signed an ____ to protect the endangered whales in the area.",o:["argument","amusement","achievement","agreement"],a:3,ex:"sign an agreement 簽署協議。argument 爭論；amusement 娛樂；achievement 成就。"},
 {q:"Peter felt ____ after he accidentally broke his friend's camera.",o:["grateful","gorgeous","guilty","genuine"],a:2,ex:"feel guilty 感到內疚。grateful 感激的；gorgeous 華麗的；genuine 真誠的。"}
]},
{id:"gv04",type:"vocab",title:"第 4 回",qs:[
 {q:"Due to the ____ of rain, farmers in the south are facing a serious water shortage.",o:["absence","abundance","attendance","acceptance"],a:0,ex:"absence 缺乏、沒有。缺水 → 沒下雨。abundance 豐富（相反）；attendance 出席；acceptance 接受。"},
 {q:"The movie is ____ on a true story about a girl who survived alone in the jungle.",o:["biased","bound","based","buried"],a:2,ex:"be based on 根據…改編。biased 有偏見的；bound 必定的；buried 被埋的。"},
 {q:"Tom's ____ for being late — his alarm clock was broken — did not convince the teacher.",o:["excess","excuse","exhibit","expense"],a:1,ex:"excuse for 藉口。excess 過量；exhibit 展覽品；expense 費用。"},
 {q:"The ____ of the new bridge will make it much easier for people to travel between the two towns.",o:["consumption","confusion","conclusion","construction"],a:3,ex:"construction 建造。consumption 消耗；confusion 困惑；conclusion 結論。"},
 {q:"Online shopping is ____, but some people still prefer to see products in person.",o:["convenient","conventional","confidential","consistent"],a:0,ex:"convenient 方便的。conventional 傳統的；confidential 機密的；consistent 一致的。"},
 {q:"The teacher praised Kevin for his ____ answer, which showed deep thinking.",o:["careless","thoughtless","thoughtful","harmful"],a:2,ex:"thoughtful 經過深思的。careless 粗心的；thoughtless 欠考慮的；harmful 有害的。"},
 {q:"The firefighters risked their lives to ____ the children trapped in the burning building.",o:["resist","rescue","recover","retreat"],a:1,ex:"rescue 救援。resist 抵抗；recover 恢復；retreat 撤退。"},
 {q:"The government plans to ____ a new law that bans single-use plastic bags.",o:["interrupt","interpret","intend","introduce"],a:3,ex:"introduce a law 推行新法。interrupt 打斷；interpret 詮釋、口譯；intend 打算。"},
 {q:"Her ____ smile made everyone in the room feel welcome.",o:["hostile","sincere","fierce","jealous"],a:1,ex:"sincere 真誠的。讓大家覺得被歡迎 → 真誠的笑容。hostile 有敵意的；fierce 兇猛的；jealous 嫉妒的。"},
 {q:"Global warming is causing the ice in the Arctic to ____ at an alarming rate.",o:["melt","mend","mount","merge"],a:0,ex:"melt 融化。mend 修補；mount 登上、增加；merge 合併。"}
]},
{id:"gv05",type:"vocab",title:"第 5 回（進階）",qs:[
 {q:"The witness gave a ____ account of the accident, describing every detail clearly.",o:["vague","vivid","vacant","vulnerable"],a:1,ex:"vivid 生動清晰的。每個細節都說得清楚。vague 模糊的（相反）；vacant 空的；vulnerable 脆弱的。"},
 {q:"The new medicine has proven ____ in treating the disease, with few side effects.",o:["excessive","exclusive","effective","expensive"],a:2,ex:"effective 有效的。excessive 過度的；exclusive 獨家的；expensive 昂貴的。"},
 {q:"Children are especially ____ to the flu, so they should get vaccinated every year.",o:["visible","valuable","variable","vulnerable"],a:3,ex:"be vulnerable to 容易受到…（傷害、感染）。visible 可見的；valuable 珍貴的；variable 多變的。"},
 {q:"The athlete's ____ efforts finally paid off when she won the gold medal.",o:["persistent","permanent","pessimistic","portable"],a:0,ex:"persistent 持續不懈的。permanent 永久的；pessimistic 悲觀的；portable 可攜帶的。"},
 {q:"The CEO announced her ____ after twenty years with the company, saying she wanted to spend more time with her family.",o:["requirement","retirement","refreshment","replacement"],a:1,ex:"retirement 退休。requirement 要求；refreshment 點心、提神；replacement 替代品。"},
 {q:"Some animals ____ themselves by changing color to match their surroundings.",o:["dismiss","display","disguise","dispose"],a:2,ex:"disguise 偽裝。dismiss 解散；display 展示；dispose 處理、丟棄（常接 of）。"},
 {q:"The two leaders held a meeting to discuss how to ____ the tension between their countries.",o:["tease","seize","lease","ease"],a:3,ex:"ease the tension 緩和緊張。tease 取笑；seize 抓住；lease 租賃。"},
 {q:"It is ____ that we leave now; otherwise, we will miss the last train.",o:["essential","optional","artificial","superficial"],a:0,ex:"It is essential that S (should) V 必須…。optional 可選擇的；artificial 人造的；superficial 表面的。"},
 {q:"The novel's ____ ending surprised readers who had expected a happy conclusion.",o:["tropical","tragic","typical","tactful"],a:1,ex:"tragic 悲劇的。讀者原本期待快樂結局 → 悲劇收場。tropical 熱帶的；typical 典型的；tactful 圓滑的。"},
 {q:"Before buying a used car, you should ____ it carefully for any damage.",o:["inspire","insist","inspect","install"],a:2,ex:"inspect 檢查。inspire 激勵；insist 堅持；install 安裝。"}
]},
{id:"gv06",type:"vocab",title:"第 6 回（進階）",qs:[
 {q:"The charity relies on ____ from the public to provide meals for homeless people.",o:["donations","durations","decorations","destinations"],a:0,ex:"donation 捐款。duration 期間；decoration 裝飾；destination 目的地。"},
 {q:"The ____ of the earthquake was so strong that buildings hundreds of kilometers away shook.",o:["identity","intensity","integrity","invention"],a:1,ex:"intensity 強度。identity 身分；integrity 正直；invention 發明。"},
 {q:"He tried to ____ his anger, but his red face showed how upset he was.",o:["support","suppose","supply","suppress"],a:3,ex:"suppress 壓抑。support 支持；suppose 假定；supply 供應。"},
 {q:"Our teacher encourages us to ask questions instead of ____ accepting everything we read.",o:["passively","actively","loudly","briefly"],a:0,ex:"passively 被動地。問問題（主動）的相反 → 被動接受。"},
 {q:"The old castle has been carefully ____ so that visitors can see what it looked like 500 years ago.",o:["presented","prevented","preserved","pretended"],a:2,ex:"preserve 保存。present 呈現；prevent 防止；pretend 假裝。"},
 {q:"The prices of vegetables ____ greatly depending on the weather and the season.",o:["bury","vary","marry","carry"],a:1,ex:"vary 變動、不同。bury 埋葬；marry 結婚；carry 攜帶。"},
 {q:"Steve Jobs was known for his ____ ideas, which changed the technology industry forever.",o:["informative","intensive","inactive","innovative"],a:3,ex:"innovative 創新的。informative 資訊豐富的；intensive 密集的；inactive 不活躍的。"},
 {q:"The ____ of the survey show that most teenagers sleep less than seven hours a night.",o:["results","resorts","rescues","reserves"],a:0,ex:"results 結果。resort 度假勝地；rescue 救援；reserve 儲備。"},
 {q:"Because the road was icy, the driver had to ____ to avoid hitting the deer.",o:["swear","sweep","swerve","swell"],a:2,ex:"swerve 突然轉向。swear 發誓；sweep 掃；swell 腫脹。"},
 {q:"The patient was ____ from the hospital after a full recovery.",o:["discovered","discharged","discussed","disguised"],a:1,ex:"be discharged from the hospital 出院。discover 發現；discuss 討論；disguise 偽裝。"}
]},

/* ===================== 綜合測驗 ===================== */
{id:"gc01",type:"cloze",title:"Bubble Tea",p:[
 "Bubble tea, a drink that originated in Taiwan in the 1980s, has now become popular __1__ the world. The drink is usually made with tea, milk, sugar, and chewy tapioca balls. __2__ its sweet taste, many people enjoy it for the fun of chewing the 'pearls.' However, health experts warn that a single cup may contain more sugar __3__ an adult should eat in a whole day. Drinking too much of it __4__ lead to weight gain and other health problems. Therefore, if you can't resist a cup of bubble tea, it is a good idea to ask for less sugar, __5__ you can enjoy the drink without feeling guilty."
],qs:[
 {o:["across from","all over","in front of","on top of"],a:1,ex:"all over the world 全世界。across from 在對面；in front of 在前面；on top of 在上面。"},
 {o:["Apart from","Instead of","Because of","In spite of"],a:0,ex:"Apart from 除了…之外（還有）。除了甜味，很多人還喜歡嚼珍珠的樂趣。Instead of 而不是；In spite of 儘管。"},
 {o:["as","that","than","what"],a:2,ex:"more sugar than… 比較級搭配 than。"},
 {o:["must not","need not","can","dare not"],a:2,ex:"can 表「可能」。喝太多「可能」導致體重增加。"},
 {o:["even if","as if","unless","so that"],a:3,ex:"so that 以便、如此一來。要求少糖，「這樣」就能喝得沒有罪惡感。"}
]},
{id:"gc02",type:"cloze",title:"Teens and Sleep",p:[
 "Scientists have found that teenagers' body clocks are different from __1__ of adults. During puberty, the brain begins to release melatonin, the hormone that makes us feel sleepy, about two hours later than before. __2__, many teens find it hard to fall asleep before 11 p.m. Yet most schools start early in the morning, __3__ students to get up at six or even earlier. As a result, many of them are __4__ sleep-deprived. To deal with this problem, some schools in the United States have pushed back their starting times. Early results show that students are more alert in class, and their grades have improved __5__."
],qs:[
 {o:["that","those","them","these"],a:1,ex:"代替前面的複數名詞 body clocks → those（those of adults）。單數才用 that。"},
 {o:["However","Otherwise","Consequently","Nevertheless"],a:2,ex:"Consequently 因此。褪黑激素晚兩小時分泌 →「因此」很難在 11 點前睡著。However／Nevertheless 是轉折。"},
 {o:["forcing","forced","to force","force"],a:0,ex:"分詞構句：學校很早開始上課，（這）迫使學生六點起床。主動 → forcing。"},
 {o:["occasionally","barely","chronically","hardly"],a:2,ex:"chronically 長期地。天天早起 → 長期睡眠不足。occasionally 偶爾；barely／hardly 幾乎不。"},
 {o:["as usual","in vain","by chance","as well"],a:3,ex:"as well 也（放句尾）。上課更專心，成績「也」進步了。in vain 徒勞；by chance 碰巧。"}
]},
{id:"gc03",type:"cloze",title:"A Lost Wallet",p:[
 "Last winter, I was traveling alone in Japan when I __1__ my wallet on a train. I didn't notice until I tried to buy dinner that evening. With no money and no credit cards, I felt completely __2__. I went to the nearest police station, __3__ not expecting much. To my surprise, the officer smiled and handed me my wallet. Someone had found it and turned it in, with every yen still __4__. I wanted to thank the person, but he had left no name. Since then, whenever I find something that __5__ to someone else, I always try my best to return it."
],qs:[
 {o:["drop","dropped","had dropped","was dropping"],a:1,ex:"was V-ing… when + 過去式：「正在…的時候，突然…」。掉錢包是一個瞬間動作 → dropped。"},
 {o:["helpless","harmless","careless","restless"],a:0,ex:"helpless 無助的。沒錢沒卡 → 很無助。harmless 無害的；careless 粗心的；restless 坐立不安的。"},
 {o:["despite","because","though","unless"],a:2,ex:"though not expecting much = though I was not expecting much（連接詞後省略主詞與 be 動詞）。despite 是介系詞，後面要接名詞。"},
 {o:["intense","intact","internal","invalid"],a:1,ex:"intact 完整無缺的。每一塊日圓都還在。intense 強烈的；internal 內部的；invalid 無效的。"},
 {o:["is belonged","belonging","belonged","belongs"],a:3,ex:"belong to 屬於，沒有被動式。主詞 something 單數、現在式 → belongs。"}
]},
{id:"gc04",type:"cloze",title:"Plastic in the Ocean",p:[
 "Every year, millions of tons of plastic waste end up in the ocean. Much of it comes from items we use only once, __1__ straws, bottles, and shopping bags. Plastic does not break down easily; __2__, it slowly breaks into tiny pieces called microplastics. These pieces are often mistaken for food by fish and seabirds. __3__ the plastic enters the food chain, it may eventually reach our dinner tables. Some countries have taken steps to __4__ the problem, such as banning plastic bags or charging customers for them. But experts say real change will only come __5__ each of us is willing to use less plastic in daily life."
],qs:[
 {o:["such as","as well as","as long as","as soon as"],a:0,ex:"such as 例如，後面列舉 straws, bottles, shopping bags。"},
 {o:["besides","therefore","instead","meanwhile"],a:2,ex:"instead 反而。塑膠不會分解，「反而」是慢慢碎成微塑膠。"},
 {o:["Unless","Once","Although","Until"],a:1,ex:"Once 一旦。一旦進入食物鏈，最後可能上了我們的餐桌。"},
 {o:["tickle","tumble","tremble","tackle"],a:3,ex:"tackle the problem 處理問題。tickle 搔癢；tumble 跌倒；tremble 發抖。"},
 {o:["when","before","unless","since"],a:0,ex:"only come when… 只有當…時才會到來。"}
]},
{id:"gc05",type:"cloze",title:"Louis Braille",p:[
 "Louis Braille was born in France in 1809. At the age of three, he hurt his eye while playing in his father's workshop, and the infection soon spread to his other eye, __1__ him completely blind. At that time, blind people had very few chances to receive an education. Braille, __2__, was determined to learn. At the age of ten, he went to a special school in Paris, __3__ he learned to read books with large raised letters. These books were heavy and difficult to use. Inspired by a military code __4__ for soldiers to read at night, Braille developed a simpler system of raised dots. Today, his system __5__ by blind people all over the world."
],qs:[
 {o:["left","leaving","to leave","leaves"],a:1,ex:"分詞構句表結果：感染擴散，（結果）讓他完全失明。leave + O + adj. 使…處於某狀態。"},
 {o:["moreover","however","therefore","otherwise"],a:1,ex:"however 然而。當時盲人很難受教育，「然而」布萊爾決心學習。"},
 {o:["which","when","where","that"],a:2,ex:"關係副詞 where 修飾地點 a special school in Paris（= in which）。"},
 {o:["designing","to design","was designed","designed"],a:3,ex:"a military code (which was) designed for… 過去分詞表被動：被設計給士兵夜間閱讀的軍事密碼。"},
 {o:["is used","uses","has used","is using"],a:0,ex:"系統「被」使用 → 被動 is used；Today 用現在式。"}
]},
{id:"gc06",type:"cloze",title:"Fast Fashion",p:[
 "Fast fashion refers to clothes that are produced quickly and sold at low prices. Because these clothes are so cheap, shoppers tend to buy more __1__ they need, and many items are worn only a few times before being thrown away. The fashion industry is now one of the world's largest __2__ of pollution. Producing a single cotton T-shirt, for example, __3__ about 2,700 liters of water. In response, a growing number of young people are turning to second-hand shops. __4__ saving money, they say buying used clothes is a way to express their own style. Some brands have also started to collect old clothes from customers and __5__ them into new products."
],qs:[
 {o:["then","that","than","as"],a:2,ex:"more … than 比較級。注意 then（然後）與 than 的拼字。"},
 {o:["sources","resources","courses","forces"],a:0,ex:"source of pollution 汙染來源。resources 資源；courses 課程；forces 力量。"},
 {o:["acquires","requires","inquires","retires"],a:1,ex:"require 需要。做一件 T 恤需要約 2,700 公升的水。acquire 獲得；inquire 詢問；retire 退休。"},
 {o:["Except","Despite","Unlike","Besides"],a:3,ex:"Besides V-ing 除了…之外（還有）。省錢之外，還能表現個人風格。Except 是「除了…都不」，語意不對。"},
 {o:["recycle","recycling","recycled","to recycling"],a:0,ex:"對等連接：started to collect … and (to) recycle …，and 前後都是原形動詞。"}
]},

/* ===================== 文意選填 ===================== */
{id:"gf01",type:"fill",title:"The Story of Coffee",p:[
 "Coffee is one of the most popular drinks in the world, but few people know how it was first __1__. According to a popular legend, an Ethiopian goat herder named Kaldi noticed that his goats became unusually __2__ after eating the red berries from a certain bush. Curious, he tried the berries himself and felt full of energy. He then __3__ them to a local monk, who made a drink with them and found that it helped him stay awake during long hours of evening prayer.",
 "News of the energizing drink soon __4__ across the Arabian Peninsula. By the 15th century, coffee was being grown in Yemen, and coffee houses had become important social __5__ where people gathered to chat, listen to music, and exchange news. When coffee arrived in Europe in the 17th century, some people were __6__ of the strange black drink and called it 'the bitter invention of Satan.' However, after the Pope tasted it and gave his __7__, coffee quickly gained popularity.",
 "Today, more than two billion cups of coffee are __8__ every day. From a simple berry to a global industry worth billions of dollars, coffee has come a long way. It is hard to imagine our modern lives __9__ it — and all of this may have started with a few goats and their __10__ owner."
],bank:["spread","approval","discovered","without","lively","consumed","observant","centers","suspicious","brought"],qs:[
 {a:2,ex:"how it was first discovered 最初如何被發現。be 動詞後接過去分詞（被動）。"},
 {a:4,ex:"became + 形容詞。吃了果子後變得異常活潑 → lively。"},
 {a:9,ex:"bring A to B 把 A 帶給 B，過去式 brought。"},
 {a:0,ex:"消息傳遍阿拉伯半島 → spread（過去式同形）。"},
 {a:7,ex:"social centers 社交中心，前面 important social 需要複數名詞。"},
 {a:8,ex:"be suspicious of 對…起疑。後面說它是「撒旦的苦澀發明」→ 不信任。"},
 {a:1,ex:"gave his approval 表示認可。his 後面接名詞。"},
 {a:5,ex:"cups of coffee are consumed 被喝掉（被動）。"},
 {a:3,ex:"imagine our lives without it 想像沒有咖啡的生活。介系詞。"},
 {a:6,ex:"their observant owner 觀察力敏銳的主人——是他注意到羊的異狀。"}
]},
{id:"gf02",type:"fill",title:"Laughter Is the Best Medicine",p:[
 "Laughter is often called the best medicine, and science seems to __1__ this saying. When we laugh, our bodies release endorphins, chemicals that make us feel good and can even temporarily __2__ pain. Laughter also lowers the level of stress hormones, which helps our immune system work more __3__. In one study, patients who watched funny movies needed less pain medicine than __4__ who watched serious documentaries.",
 "Laughter has social benefits, too. People are far more likely to laugh when they are with others than when they are __5__. Sharing a laugh helps build trust and makes it easier to __6__ conflicts. This is why many successful leaders use humor to create a __7__ atmosphere at work.",
 "Interestingly, our brains cannot always tell the difference between real and fake laughter. Even if you force yourself to laugh, you may still enjoy some of its __8__. In India, there are even 'laughter clubs,' where members gather in parks and laugh together for no particular __9__. So the next time you feel down, try watching a comedy or spending time with funny friends. A good laugh might be exactly what you __10__."
],bank:["benefits","alone","support","reason","relaxed","need","those","effectively","resolve","relieve"],qs:[
 {a:2,ex:"seems to + 原形動詞。科學似乎「支持」這句俗語 → support。"},
 {a:9,ex:"can temporarily + 原形動詞。relieve pain 減輕疼痛。resolve 不能接 pain。"},
 {a:7,ex:"work more effectively 運作得更有效。修飾動詞要用副詞。"},
 {a:6,ex:"代替前面的 patients（複數）→ those who…。"},
 {a:1,ex:"with others（和別人一起）vs. alone（獨自一人）。"},
 {a:8,ex:"resolve conflicts 解決衝突。"},
 {a:4,ex:"a relaxed atmosphere 輕鬆的氣氛，冠詞與名詞之間要形容詞。"},
 {a:0,ex:"some of its benefits 它的一些好處，its 後要接名詞。"},
 {a:3,ex:"for no particular reason 沒有特別的理由。"},
 {a:5,ex:"what you need 你需要的東西，what 子句缺動詞。"}
]},
{id:"gf03",type:"fill",title:"Taiwan's Night Markets",p:[
 "Night markets are an important part of Taiwanese culture. As the sun sets, quiet streets are __1__ into lively places filled with food stalls, games, and crowds of people. For many visitors, a trip to Taiwan would not be __2__ without a visit to at least one night market.",
 "The biggest __3__ of night markets is, of course, the food. Visitors can try a wide __4__ of local snacks, such as oyster omelets, stinky tofu, and grilled sausages. Most dishes are sold at __5__ prices, so people can taste many different things without spending too much money. Besides eating, people can also play traditional games, like shooting balloons or fishing for shrimp, and win small __6__.",
 "Night markets are not just for tourists, though. For local people, they are places to __7__ after a long day of work or school. Families and friends often go there together to chat, eat, and enjoy the __8__ atmosphere. However, night markets also face some challenges. Nearby residents often __9__ about noise, garbage, and traffic. To solve these problems, local governments have been working with vendors to keep the markets clean and __10__."
],bank:["festive","variety","complain","prizes","transformed","unwind","organized","attraction","complete","reasonable"],qs:[
 {a:4,ex:"be transformed into 被轉變成。are 後接過去分詞（被動）。"},
 {a:8,ex:"would not be complete without… 少了…就不完整。"},
 {a:7,ex:"The biggest attraction 最大的吸引力，形容詞最高級後接名詞。"},
 {a:1,ex:"a wide variety of 各式各樣的。"},
 {a:9,ex:"at reasonable prices 以合理的價格。"},
 {a:3,ex:"win prizes 贏得獎品。"},
 {a:5,ex:"places to unwind 放鬆的地方，不定詞 to 後接原形動詞。"},
 {a:0,ex:"the festive atmosphere 熱鬧歡樂的氣氛。"},
 {a:2,ex:"complain about 抱怨。主詞 residents 後缺動詞。"},
 {a:6,ex:"clean and organized 乾淨又有秩序，and 連接兩個形容詞。"}
]},

/* ===================== 篇章結構 ===================== */
{id:"gs01",type:"struct",title:"Why Do We Yawn?",p:[
 "Everyone yawns, from newborn babies to the elderly. __1__ Yet scientists still do not fully understand why we do it.",
 "One popular theory is that yawning helps bring more oxygen into the body. __2__ However, experiments have shown that breathing extra oxygen does not reduce how often people yawn, so this explanation seems unlikely.",
 "A newer theory suggests that yawning cools down the brain. __3__ Researchers found that people yawn more often in spring and fall than in hot summer, when the outside air is too warm to have a cooling effect.",
 "Yawning is also contagious. __4__ Some scientists believe this is related to empathy, our ability to understand others' feelings, since people tend to catch yawns more easily from family and friends than from strangers."
],bank:[
 "Simply seeing, hearing, or even reading about someone yawning can make you yawn.",
 "Even animals such as dogs, cats, and snakes do it.",
 "Just as a computer works better when it is not overheating, our brains may also need to stay cool to function well.",
 "When we are tired or bored, we breathe more slowly, so a deep yawn might make up for the lack of air."
],qs:[
 {a:1,ex:"前句說「從嬰兒到老人都會打哈欠」，接著補充「連動物也會」，再用 Yet 轉折「但科學家還不清楚原因」。"},
 {a:3,ex:"說明「補充氧氣」理論的推論：疲倦時呼吸變慢，打哈欠可以補足空氣；下一句 However 才推翻它。"},
 {a:2,ex:"用電腦過熱來比喻「大腦降溫」理論，後句的季節研究是佐證。"},
 {a:0,ex:"contagious（會傳染的）的具體說明：看到、聽到甚至讀到別人打哈欠都會跟著打。"}
]},
{id:"gs02",type:"struct",title:"The Theft That Made the Mona Lisa Famous",p:[
 "The Mona Lisa is perhaps the most famous painting in the world. __1__ In fact, it was not especially well known outside the art world until it was stolen in 1911.",
 "On the evening of August 20 that year, Vincenzo Peruggia, an Italian man who had once worked at the Louvre, hid inside the museum overnight. __2__ Surprisingly, no one noticed the painting was missing until the following day.",
 "The theft became front-page news around the world. __3__ Thousands of people even lined up at the Louvre just to stare at the empty space on the wall where it had once hung.",
 "Two years later, Peruggia tried to sell the painting to an art dealer in Florence and was arrested. __4__ By the time the Mona Lisa returned to Paris, it had become a true international star."
],bank:[
 "Newspapers printed pictures of the painting, so people who had never heard of it suddenly knew what it looked like.",
 "He claimed that he had taken it to return it to Italy, its 'true home,' and many Italians saw him as a hero.",
 "However, it has not always enjoyed such fame.",
 "The next morning, when the museum was closed, he simply took the painting off the wall, hid it under his coat, and walked out."
],qs:[
 {a:2,ex:"前句「最有名」，此句用 However 轉折「並非一直這麼有名」，後句 In fact 再具體說明。"},
 {a:3,ex:"依時間順序：前一晚躲在館內 → 隔天早上拿走畫 → 再隔一天才被發現。"},
 {a:0,ex:"front-page news 的延伸：報紙刊出畫作照片，大家都知道它長什麼樣子。"},
 {a:1,ex:"被捕後的說法：他說要把畫送回義大利，很多義大利人視他為英雄——讓這幅畫更出名。"}
]},
{id:"gs03",type:"struct",title:"The Bilingual Brain",p:[
 "For a long time, people believed that learning two languages at a young age would confuse children. __1__ Today, however, many studies suggest the opposite is true.",
 "Bilingual people constantly switch between languages, and this practice seems to train the brain. __2__ As a result, they often perform better at tasks that require focusing on important information while ignoring distractions.",
 "The benefits may last a lifetime. __3__ Researchers think that using two languages every day helps keep the brain active and healthy.",
 "Of course, it is never too late to start. __4__ Even if you never become perfectly fluent, the effort itself is good exercise for your mind."
],bank:[
 "Adults who pick up a new language can still enjoy many of these benefits.",
 "Each time they speak, their brains must choose one language and block out the other.",
 "Parents were often told to speak only one language at home so that their kids would not mix up words.",
 "Some studies have found that bilingual seniors show signs of memory loss several years later than those who speak only one language."
],qs:[
 {a:2,ex:"延續「以前認為雙語會讓小孩混亂」：所以父母被建議在家只說一種語言。"},
 {a:1,ex:"說明「切換語言如何訓練大腦」：每次說話都要選一種、壓下另一種，因此（As a result）更擅長忽略干擾。"},
 {a:3,ex:"「好處持續一輩子」的例證：雙語長者記憶衰退延後好幾年。"},
 {a:0,ex:"呼應「永遠不嫌晚」：成人學新語言也能享受這些好處。"}
]},
{id:"gs04",type:"struct",title:"The Dance of the Honeybees",p:[
 "Honeybees are amazing communicators. When a worker bee finds a good source of food, she flies back to the hive to tell the others. __1__",
 "If the flowers are close to the hive, the bee performs a 'round dance,' moving in small circles. __2__ The other bees touch her with their antennae to smell the flowers she has visited, which helps them know what kind of flower to look for.",
 "If the food is farther away, the bee does a 'waggle dance.' __3__ The direction of the straight run shows the direction of the food in relation to the sun, and the length of the waggle tells how far away it is.",
 "This remarkable behavior was first explained by Austrian scientist Karl von Frisch. __4__"
],bank:[
 "His discovery earned him a Nobel Prize in 1973 and changed the way we think about animal communication.",
 "This dance simply tells her sisters that there is food nearby.",
 "She moves forward in a straight line while shaking her body from side to side, then circles back and repeats the movement.",
 "But instead of using sounds, she uses a special kind of dance."
],qs:[
 {a:3,ex:"回巢「告訴」其他蜜蜂——但不是用聲音，而是用舞蹈。引出下面兩種舞。"},
 {a:1,ex:"圓舞的意思：只是告訴同伴附近有食物（沒有方向資訊）。"},
 {a:2,ex:"描述搖擺舞的動作：直線前進並左右擺動。下一句的 straight run、waggle 正是承接這句。"},
 {a:0,ex:"His 指 Karl von Frisch，說明他的發現帶來的影響。"}
]},

/* ===================== 閱讀測驗 ===================== */
{id:"gr01",type:"read",title:"The Overview Effect",p:[
 "When astronauts look back at Earth from space, many of them describe a sudden and powerful change in how they see the world. This experience, known as the 'Overview Effect,' was named by writer Frank White in 1987 after he interviewed dozens of astronauts.",
 "From hundreds of kilometers above, Earth appears as a small, shining ball floating in the darkness of space. National borders, which cause so many wars and arguments on the ground, are invisible. Many astronauts say that at this moment they realize how fragile our planet is, protected only by a thin layer of atmosphere. Some describe feeling deeply connected to all of humanity.",
 "This feeling often stays with astronauts long after they return home. Several have become active in environmental protection or peace movements. One astronaut said that after his trip, he could never again think of himself as belonging to just one country; he was a citizen of the planet.",
 "Today, as space tourism becomes possible, some people hope that more ordinary citizens will experience the Overview Effect. If world leaders could see Earth from space, they wonder, would they make different decisions about war and the environment?"
],qs:[
 {q:"What is the passage mainly about?",o:["How astronauts are trained for long space trips","A change in perspective that many astronauts experience","The dangers of traveling into outer space","Why space tourism is becoming popular"],a:1,ex:"主旨題。全文都在說太空人從太空看地球後「看世界的方式改變」。"},
 {q:"According to the passage, which of the following is NOT something astronauts notice from space?",o:["Earth looks small in the dark space.","The atmosphere looks very thin.","Borders between countries cannot be seen.","Big cities are covered with smog."],a:3,ex:"細節題（NOT）。第二段提到地球很小、大氣很薄、看不到國界；文中沒提到城市霧霾。"},
 {q:"What does the word 'fragile' in the second paragraph most likely mean?",o:["Easily damaged","Extremely large","Full of energy","Hard to reach"],a:0,ex:"字義題。「只被一層薄薄的大氣保護」→ 很脆弱、容易受損。"},
 {q:"What can be inferred from the last paragraph?",o:["World leaders have already traveled to space.","Some people believe seeing Earth from space could lead to wiser choices.","Space tourism will soon replace traditional travel.","The Overview Effect only happens to professional astronauts."],a:1,ex:"推論題。「如果領袖看到太空中的地球，會不會做出不同的決定？」→ 有人相信會讓人做出更明智的選擇。"}
]},
{id:"gr02",type:"read",title:"Summer Reading Challenge",p:[
 "Join the Riverside Library Summer Reading Challenge! Open to all students aged 12 to 18.",
 "How it works: Sign up at the front desk or on our website between June 20 and July 5. Read any books you like — novels, comics, biographies, and science books all count. Record each book in your free Reading Passport and write two or three sentences about it.",
 "Rewards: 5 books — a free bookmark. 10 books — the bookmark plus a coupon for a free drink at the library café. 20 books or more — all of the above, and your name will be entered into a draw for a tablet computer.",
 "Special events: Every Saturday afternoon in July, local authors will visit the library to talk about their work. Book Swap Day will be held on August 10: bring a book you no longer need and take home one you would like to read. Passports must be returned by August 25. Winners of the draw will be announced on our website on September 1."
],qs:[
 {q:"Who can take part in the challenge?",o:["Students between 12 and 18 years old","Anyone who lives in the city","Only students who are good at writing","Teachers and librarians"],a:0,ex:"第一段：Open to all students aged 12 to 18。"},
 {q:"What must participants do for each book they read?",o:["Take a test at the front desk","Bring the book to the café","Write a short comment in their passport","Meet the author of the book"],a:2,ex:"第二段：記在 Reading Passport 並寫兩三句心得。"},
 {q:"Amy read 12 books this summer. What will she receive?",o:["A bookmark only","A bookmark and a drink coupon","A chance to win a tablet","Nothing, because comics do not count"],a:1,ex:"12 本達到 10 本門檻（書籤＋飲料券），但沒到 20 本，不能抽平板。"},
 {q:"Which of the following is true?",o:["The challenge starts on August 10.","Winners will be told by phone on August 25.","Participants must buy their own Reading Passports.","Authors will visit the library every Saturday afternoon in July."],a:3,ex:"8/10 是換書日；得獎者 9/1 在網站公布；護照是免費的（free Reading Passport）。"}
]},
{id:"gr03",type:"read",title:"The Clever Octopus",p:[
 "With eight arms, three hearts, and blue blood, the octopus already sounds like an alien. But what truly amazes scientists is its intelligence. Octopuses can solve puzzles, open jars to get the food inside, and even escape from tanks by squeezing through tiny holes.",
 "What makes the octopus's intelligence so unusual is how its brain is organized. An octopus has about 500 million neurons, similar to a dog. However, around two-thirds of these neurons are located not in its head but in its arms. This means each arm can, in a sense, 'think' for itself — it can taste, touch, and react to the environment without waiting for orders from the central brain.",
 "Octopuses are also masters of disguise. Special cells in their skin allow them to change color and texture in less than a second, helping them hide from enemies or sneak up on prey. Strangely, scientists believe most octopuses are color-blind, and they are still trying to figure out how the animals match their surroundings so perfectly.",
 "Despite their intelligence, octopuses live short lives — most species survive only one or two years. Some researchers wonder how much more they might achieve if they lived longer and could pass knowledge on to their young, as humans do."
],qs:[
 {q:"Why does the author say the octopus 'sounds like an alien'?",o:["Because it was first discovered in space","Because its body has features very different from most animals","Because it can communicate with humans","Because it lives in the deepest part of the ocean"],a:1,ex:"八隻手、三顆心臟、藍色血液——身體構造和一般動物差很多。"},
 {q:"According to the passage, what is special about the octopus's nervous system?",o:["It has more neurons than a human.","Most of its neurons are in its head.","Its arms contain a large share of its neurons.","It has no central brain at all."],a:2,ex:"第二段：約三分之二的神經元在觸手裡，不在頭部。"},
 {q:"What remains a mystery to scientists?",o:["How color-blind octopuses blend into their surroundings","How octopuses open jars","Why octopuses have three hearts","Where octopuses hide from enemies"],a:0,ex:"第三段：大多數章魚是色盲，科學家還在研究牠們如何完美融入環境。"},
 {q:"What does the last paragraph suggest?",o:["Octopuses teach their young many skills.","Octopuses are smarter than humans.","Scientists have found ways to extend octopuses' lives.","A short life span may limit what octopuses can achieve."],a:3,ex:"「如果活得更久、能把知識傳給下一代，能達到多少成就？」→ 壽命短限制了牠們。"}
]},
{id:"gr04",type:"read",title:"Phubbing",p:[
 "Have you ever been talking to a friend who keeps looking at his phone? If so, you have been 'phubbed.' The word 'phubbing,' a combination of 'phone' and 'snubbing,' describes the act of ignoring the people around you in favor of your phone. The term was created in 2012 as part of a campaign for an Australian dictionary, and it quickly spread around the world.",
 "Phubbing may seem harmless, but research suggests otherwise. In one experiment, pairs of strangers were asked to have a ten-minute conversation. When a phone was simply placed on the table — even if no one touched it — the participants reported feeling less close to each other and rated the conversation as less meaningful.",
 "Phubbing can also damage romantic relationships. Partners who feel phubbed often say they feel less important and are more likely to argue. Over time, this can lower their satisfaction with the relationship.",
 "So what can we do? Experts suggest simple habits, such as putting phones away during meals or setting 'phone-free' times at home. After all, the people sitting right in front of us deserve our full attention more than the ones on our screens."
],qs:[
 {q:"What is the main purpose of the passage?",o:["To introduce a new type of smartphone","To explain a bad habit and its effects","To teach readers how to make new friends","To compare different dictionaries"],a:1,ex:"寫作目的題。介紹 phubbing 這個壞習慣、它的影響和改善方法。"},
 {q:"Where does the word 'phubbing' come from?",o:["It was used in an old Australian song.","It was invented by a famous scientist.","It comes from a Chinese expression.","It is a mix of two English words."],a:3,ex:"第一段：phone + snubbing（冷落）組合而成。"},
 {q:"What did the experiment in the second paragraph show?",o:["The presence of a phone can make conversations feel less close.","Strangers enjoy talking about their phones.","People talk longer when phones are on the table.","Most people check their phones every ten minutes."],a:0,ex:"光是手機放在桌上（沒人碰），受試者就覺得彼此比較不親近。"},
 {q:"Which of the following would the author most likely agree with?",o:["Phones should be banned in all restaurants.","Phubbing is only a problem for young people.","We should pay more attention to the people we are with.","Online friends are more important than real ones."],a:2,ex:"最後一句：眼前的人比螢幕裡的人更值得我們全心關注。"}
]},
{id:"gr05",type:"read",title:"The Woman Who Planted Trees",p:[
 "In 1977, a Kenyan woman named Wangari Maathai noticed that the streams near her home were drying up and that women had to walk farther and farther to find firewood. She realized that the cause was deforestation: large areas of forest had been cut down to make room for farms.",
 "Her solution was simple — plant trees. Maathai started the Green Belt Movement, which paid women a small amount of money for each tree they planted that survived. The program not only restored forests but also gave rural women an income and a sense of independence. Over the following decades, the movement planted more than 50 million trees across Kenya.",
 "Maathai's work was not always welcomed. Because she criticized government plans to build on public land, she was arrested and even beaten several times. Still, she refused to give up. In 2004, she became the first African woman to receive the Nobel Peace Prize, honored for her contribution to 'sustainable development, democracy and peace.'",
 "Maathai once told a story about a hummingbird that tried to put out a forest fire by carrying drops of water in its tiny beak. When the larger animals laughed, the bird replied, 'I am doing the best I can.' For Maathai, this was the lesson: no matter how small, everyone can make a difference."
],qs:[
 {q:"What problem did Maathai notice in 1977?",o:["Farmers could not sell their crops.","Forests were disappearing and water was becoming scarce.","Children in her village could not go to school.","Wild animals were attacking villages."],a:1,ex:"第一段：溪流乾涸、要走更遠撿柴，原因是森林砍伐。"},
 {q:"How did the Green Belt Movement help women?",o:["It gave them free land to farm.","It taught them how to build houses.","It paid them for planting trees that survived.","It sent them to study abroad."],a:2,ex:"第二段：每種活一棵樹就付一點錢，讓婦女有收入。"},
 {q:"Why was Maathai arrested?",o:["She opposed some government plans.","She cut down trees illegally.","She refused to pay taxes.","She started a fire in the forest."],a:0,ex:"第三段：她批評政府在公有地上蓋建築的計畫。"},
 {q:"What is the message of the hummingbird story?",o:["Small animals are smarter than large ones.","Fires should be left to experts.","It is important to ask others for help.","Every effort counts, however small."],a:3,ex:"最後一句：無論多渺小，每個人都能帶來改變。"}
]},
{id:"gr06",type:"read",title:"Why We Procrastinate",p:[
 "Almost everyone procrastinates from time to time. We put off writing a report, cleaning our room, or studying for an exam, even though we know we will regret it later. For years, procrastination was seen as a sign of laziness or poor time management. Recent research, however, offers a different explanation.",
 "According to psychologists, procrastination is mainly a problem of managing emotions, not time. When a task makes us feel bored, anxious, or unsure of ourselves, our brains look for a quick way to escape these unpleasant feelings. Checking social media or watching a video provides instant relief. The problem is that the relief is only temporary — the task is still waiting, and now we also feel guilty.",
 "Interestingly, studies have found that people who forgive themselves for procrastinating are less likely to do it again. Being hard on ourselves only adds more negative feelings, which makes us want to avoid the task even more.",
 "Experts suggest several strategies. One is to break a large task into small, easy steps, so that getting started feels less frightening. Another is the 'two-minute rule': tell yourself you will work on the task for just two minutes. Once you begin, it is often easier to keep going than you expected."
],qs:[
 {q:"According to recent research, procrastination is mainly caused by ____.",o:["laziness","poor planning skills","a desire to avoid negative feelings","a lack of intelligence"],a:2,ex:"第二段：拖延主要是「情緒管理」的問題——想逃避不愉快的感覺。laziness 是舊觀念。"},
 {q:"Why does the author mention social media in the second paragraph?",o:["To show how people make friends online","To give an example of a quick escape from unpleasant tasks","To explain how to manage time better","To prove that technology is harmful"],a:1,ex:"滑社群、看影片是「立即解脫」的例子。"},
 {q:"What did the studies in the third paragraph find?",o:["Self-forgiveness can reduce future procrastination.","People who procrastinate are usually very strict with themselves.","Feeling guilty helps people finish tasks faster.","Procrastination cannot be changed."],a:0,ex:"原諒自己的人比較不會再拖延；對自己太嚴厲反而更想逃避。"},
 {q:"Which of the following best describes the 'two-minute rule'?",o:["Taking a two-minute break every hour","Finishing every task within two minutes","Starting a task by committing to only a short time","Spending two minutes planning before work"],a:2,ex:"告訴自己只做兩分鐘，降低開始的門檻，開始後通常就能繼續。"}
]},
{id:"gr07",type:"read",title:"Why Is English Spelling So Strange?",p:[
 "Why is 'knight' spelled with a 'k' and a 'gh' that no one pronounces? Why do 'though,' 'through,' and 'tough' look so similar but sound so different? English spelling can seem completely illogical, but there are historical reasons behind it.",
 "Hundreds of years ago, most of these letters were actually pronounced. In Old English, 'knight' sounded something like 'k-nikht.' Over time, the way people spoke changed, but the spelling did not. One reason is the printing press, which arrived in England in the 1470s. Printers began to fix spellings in place, just as the pronunciation of many words was shifting.",
 "English has also borrowed words from many other languages, often keeping their original spellings. 'Ballet' comes from French, which is why its final 't' is silent. 'Psychology' comes from Greek, explaining the silent 'p.' Each borrowed word brought its own spelling rules with it.",
 "Over the years, some people have tried to reform English spelling. In the 19th century, Noah Webster successfully changed American spellings such as 'colour' to 'color' and 'centre' to 'center.' Most attempts at more dramatic changes, however, have failed. It seems that English speakers, despite their complaints, are deeply attached to their strange spelling system."
],qs:[
 {q:"What is the main idea of the passage?",o:["English is the most difficult language in the world.","The odd spelling of English has historical causes.","Noah Webster invented American English.","French and Greek are similar to English."],a:1,ex:"第一段最後一句點出主旨：英文拼字看似不合邏輯，但背後有歷史原因。"},
 {q:"How did the printing press affect English spelling?",o:["It made spelling fixed while pronunciation kept changing.","It added many silent letters on purpose.","It made all words easier to spell.","It replaced English words with French ones."],a:0,ex:"第二段：印刷把拼字固定下來，偏偏那時發音正在改變。"},
 {q:"Why is the 'p' in 'psychology' silent?",o:["Because Webster removed its sound","Because printers made a mistake","Because the word came from Greek","Because it was shortened over time"],a:2,ex:"第三段：psychology 來自希臘文，保留了原本的拼法。"},
 {q:"What can be inferred from the last paragraph?",o:["Most people want English spelling to be changed completely.","Webster's changes were rejected in America.","British English now uses American spelling.","Large-scale spelling reform is unlikely to succeed."],a:3,ex:"大幅度的改革大多失敗，說英語的人雖然抱怨卻離不開它 → 大規模改革不太可能成功。"}
]},
{id:"gr08",type:"read",title:"Losing the Night Sky",p:[
 "For most of human history, people could look up at night and see thousands of stars. Today, however, about 80 percent of the world's population lives under skies polluted by artificial light. In many big cities, children have never seen the Milky Way.",
 "Light pollution is more than just a problem for stargazers. Many animals depend on natural patterns of light and darkness. Baby sea turtles, for example, find their way to the ocean by moving toward the brightest horizon, which is usually the moonlit sea. Bright lights from buildings and roads can confuse them, leading them away from the water. Every year, millions of migrating birds also die after crashing into brightly lit buildings.",
 "Humans are affected too. Exposure to bright light at night can disturb our body clocks and reduce the production of melatonin, a hormone that helps us sleep. Some studies have linked poor sleep caused by nighttime light to health problems such as obesity and depression.",
 "Unlike many other kinds of pollution, light pollution is relatively easy to fix. Using shielded lights that point downward, turning off unnecessary lights, and choosing warmer-colored bulbs can greatly reduce the problem. Some places have even been named 'Dark Sky Parks,' where strict lighting rules allow visitors to enjoy the night sky as our ancestors did."
],qs:[
 {q:"What is the passage mainly about?",o:["How to take photos of stars","The causes and effects of too much artificial light at night","Why sea turtles are endangered","The history of electric lighting"],a:1,ex:"主旨：光害對動物、人類的影響以及改善方法。"},
 {q:"Why are baby sea turtles mentioned?",o:["To show how light pollution can mislead animals","To explain why turtles prefer cities","To describe how turtles find food","To prove that turtles can see stars"],a:0,ex:"小海龜朝最亮的方向爬，人造光會讓牠們迷路——舉例說明光害誤導動物。"},
 {q:"According to the passage, which is a possible effect of light at night on humans?",o:["Better eyesight","Increased melatonin","Disturbed sleep","Lower electricity bills"],a:2,ex:"第三段：夜間強光擾亂生理時鐘、減少褪黑激素（不是增加）→ 睡不好。"},
 {q:"What is the author's attitude toward solving light pollution?",o:["Hopeless","Indifferent","Angry","Optimistic"],a:3,ex:"「光害相對容易解決」，還舉出具體方法 → 樂觀。"}
]},

/* ===================== 混合題 ===================== */
{id:"gm01",type:"mixed",title:"School Uniforms: Yes or No?",p:[
 "Kevin: I think school uniforms should be required. First, they save time in the morning — I never have to worry about what to wear. Second, uniforms reduce peer pressure. When everyone dresses the same, students from poorer families won't be judged by their clothes. Finally, uniforms create a sense of belonging. When I wear my school's uniform at competitions, I feel proud to represent my school.",
 "Mia: I disagree. Clothing is a way for teenagers to express their personality, and uniforms take that freedom away. Also, uniforms are not always comfortable. Our winter jackets are too thin, and in summer the shirts are too hot. Some people say uniforms are cheaper, but parents often have to buy several sets, which can be expensive. In my opinion, schools should let students choose their own clothes, as long as they are neat and appropriate."
],qs:[
 {q:"What is the main topic of the two passages?",o:["How to design a school uniform","Whether students should have to wear school uniforms","Why uniforms are expensive","How to deal with peer pressure"],a:1,ex:"兩人針對「該不該規定穿制服」各自表達看法。"},
 {q:"Which of the following are reasons Kevin gives to support uniforms?",o:["They save time.","They are comfortable in all seasons.","They reduce peer pressure.","They make students feel they belong.","They are cheaper than regular clothes."],a:[0,2,3],ex:"Kevin 提三點：省時間、減少同儕壓力、有歸屬感。「舒適」是 Mia 反駁的點；「便宜」是 Mia 提到別人的說法。"},
 {q:"Mia believes clothing is a way for teenagers to express their ________. (填入文中一個單字)",ans:["personality"],ex:"Mia 第一句：express their personality。"},
 {q:"According to Mia, students' own clothes should be neat and ________. (填入文中一個單字)",ans:["appropriate"],ex:"Mia 最後一句：as long as they are neat and appropriate。"},
 {q:"Which statement would Mia most likely agree with?",o:["Uniforms help students feel proud.","Students should not have any dress rules at all.","Uniforms may cost families more than people think.","Uniforms reduce bullying."],a:2,ex:"Mia 說家長常得買好幾套，其實不便宜。她仍主張要整潔得體，所以不是完全沒規定。"}
]},
{id:"gm02",type:"mixed",title:"How Teens Spend Their Free Time",p:[
 "A recent survey asked 1,000 high school students how they spend their free time after school. Students could choose more than one activity. The results are as follows: using social media, 68%; playing video games, 45%; doing sports or exercise, 32%; reading for pleasure, 18%; volunteering, 6%.",
 "Students were also asked how they feel about their free time. Nearly half (47%) said they wished they had more time to rest, while 35% said they felt they spent too much time on their phones. Only 12% said they were completely satisfied with how they used their free time.",
 "Experts are concerned that so few students read for pleasure or exercise regularly. 'Teenagers need balance,' says a sports psychologist. 'An hour of exercise a day can improve both physical and mental health, and reading builds imagination and concentration.'"
],qs:[
 {q:"Which activity is the most popular among the students surveyed?",o:["Playing video games","Using social media","Doing sports","Reading for pleasure"],a:1,ex:"使用社群媒體 68% 最高。"},
 {q:"About ________ percent of the students said they were completely satisfied with how they used their free time. (填數字)",ans:["12","twelve"],ex:"第二段：Only 12% said they were completely satisfied。"},
 {q:"According to the psychologist, which are benefits of exercise or reading?",o:["Better physical health","Better mental health","Higher income","Stronger imagination","More friends online"],a:[0,1,3],ex:"運動改善身心健康；閱讀培養想像力與專注力。收入、網友都沒提到。"},
 {q:"Which of the following is true according to the survey?",o:["Fewer than one in ten students volunteer after school.","Most students are satisfied with their free time.","More students read than play video games.","About half of the students exercise every day."],a:0,ex:"做志工 6%，不到十分之一。滿意的只有 12%；閱讀 18% 少於電玩 45%；運動 32%。"},
 {q:"The psychologist says that teenagers need ________. (填入文中一個單字)",ans:["balance"],ex:"'Teenagers need balance.'"}
]},
{id:"gm03",type:"mixed",title:"Two Museums",p:[
 "City Science Museum — Open Tuesday to Sunday, 9 a.m. to 5 p.m. Tickets: adults NT$200, students NT$100. Highlights: a 4D theater showing films about space and dinosaurs; hands-on experiments for children; a robot exhibition (until March 31). Guided tours in English are available at 10 a.m. on weekends.",
 "Harbor History Museum — Open every day, 10 a.m. to 6 p.m. Tickets: free on Wednesdays; otherwise NT$150 for everyone. Highlights: a 300-year-old shipwreck found off the coast; old maps and photos of the harbor; a rooftop café with a view of the sea. Audio guides are available in Chinese, English, and Japanese."
],qs:[
 {q:"Tina wants to visit a museum on a Monday. Which can she go to?",o:["Only the City Science Museum","Only the Harbor History Museum","Both museums","Neither museum"],a:1,ex:"科學館週二到週日開放（週一休館）；歷史館每天開放。"},
 {q:"A high school student would pay NT$________ to visit the City Science Museum. (填數字)",ans:["100"],ex:"科學館學生票 NT$100。"},
 {q:"Which of the following can visitors enjoy at the Harbor History Museum?",o:["A 4D theater","An old shipwreck","A café with a sea view","Robots","Audio guides in Japanese"],a:[1,2,4],ex:"歷史館：三百年沉船、海景咖啡廳、日語語音導覽。4D 劇院和機器人在科學館。"},
 {q:"Mr. Chen wants to join a guided tour in English. When should he go?",o:["Wednesday at 10 a.m. at the Harbor History Museum","Saturday at 10 a.m. at the City Science Museum","Monday at 9 a.m. at the City Science Museum","Any day at the Harbor History Museum"],a:1,ex:"英語導覽只有科學館週末早上 10 點；歷史館只有語音導覽。"},
 {q:"Which museum would be better for a family with young children who love science, and why?",o:["Harbor History Museum, because it is free every day","Harbor History Museum, because it has a café","City Science Museum, because it offers hands-on experiments","City Science Museum, because it is open on Mondays"],a:2,ex:"科學館有給小孩的動手做實驗。歷史館只有週三免費；科學館週一不開。"}
]},

/* ===================== 中譯英 ===================== */
{id:"gt01",type:"trans",title:"社群媒體",qs:[
 {zh:"近年來，越來越多年輕人花大量時間在社群媒體上與朋友互動。",ref:["In recent years, more and more young people have spent a lot of time interacting with their friends on social media.","In recent years, an increasing number of young people spend a great deal of time interacting with friends on social media."],tip:"spend + 時間 + V-ing；In recent years 常搭配現在完成式。"},
 {zh:"然而，專家警告，過度使用手機可能會影響他們的睡眠品質與學業表現。",ref:["However, experts warn that overusing cell phones may affect their sleep quality and academic performance.","However, experts warn that excessive use of smartphones might affect the quality of their sleep and their academic performance."],tip:"過度使用 overuse / excessive use；學業表現 academic performance。"}
]},
{id:"gt02",type:"trans",title:"夜市",qs:[
 {zh:"夜市是體驗台灣在地文化最好的地方之一。",ref:["Night markets are one of the best places to experience Taiwan's local culture.","Night markets are among the best places to experience local Taiwanese culture."],tip:"one of the + 最高級 + 複數名詞。"},
 {zh:"遊客不但可以品嚐各式各樣的小吃，還可以玩傳統遊戲。",ref:["Tourists can not only taste a wide variety of snacks but also play traditional games.","Not only can visitors taste all kinds of snacks, but they can also play traditional games."],tip:"not only… but also…；Not only 放句首要倒裝（Not only can visitors…）。"}
]},
{id:"gt03",type:"trans",title:"減塑",qs:[
 {zh:"為了減少塑膠垃圾，許多人開始自備購物袋和環保杯。",ref:["To reduce plastic waste, many people have started bringing their own shopping bags and reusable cups.","In order to reduce plastic waste, many people have begun to carry their own shopping bags and eco-friendly cups."],tip:"為了 (In order) to V；自備 bring one's own；環保杯 reusable / eco-friendly cup。"},
 {zh:"如果每個人都願意做出一點改變，我們的環境將會變得更好。",ref:["If everyone is willing to make a small change, our environment will become better.","If each of us is willing to make a little change, our environment will be much better."],tip:"If 條件句用現在式，主要子句用 will；be willing to V 願意。"}
]},
{id:"gt04",type:"trans",title:"運動",qs:[
 {zh:"規律運動不僅能讓我們保持健康，也能幫助我們紓解壓力。",ref:["Regular exercise not only keeps us healthy but also helps us relieve stress.","Exercising regularly can not only keep us healthy but also help us reduce stress."],tip:"keep + O + adj.；help + O + V；紓解壓力 relieve stress。"},
 {zh:"專家建議青少年每天至少運動一小時。",ref:["Experts suggest that teenagers exercise for at least one hour every day.","Experts recommend that teenagers should work out for at least an hour a day."],tip:"suggest / recommend that + S + (should) + 原形動詞。"}
]},
{id:"gt05",type:"trans",title:"閱讀",qs:[
 {zh:"閱讀是增廣見聞最簡單也最便宜的方式之一。",ref:["Reading is one of the simplest and cheapest ways to broaden our horizons.","Reading is one of the easiest and least expensive ways to expand our knowledge."],tip:"增廣見聞 broaden one's horizons；動名詞當主詞用單數動詞。"},
 {zh:"透過書本，我們可以認識不同的文化，甚至了解別人的想法。",ref:["Through books, we can learn about different cultures and even understand how others think.","By reading books, we can get to know different cultures and even understand other people's thoughts."],tip:"透過 through / by V-ing；認識 learn about / get to know。"}
]},
{id:"gt06",type:"trans",title:"颱風",qs:[
 {zh:"颱風來襲前，政府提醒民眾儲備足夠的食物和飲用水。",ref:["Before the typhoon hit, the government reminded people to store enough food and drinking water.","Before the typhoon struck, the government reminded the public to stock up on enough food and drinking water."],tip:"remind + O + to V；來襲 hit / strike；儲備 stock up on。"},
 {zh:"許多學校和公司也宣布停課停班，以確保大家的安全。",ref:["Many schools and companies also announced that they would close to ensure everyone's safety.","Many schools and offices also announced closures in order to ensure the safety of everyone."],tip:"以確保 to ensure；停課停班可譯 close / suspend classes and work。"}
]},
{id:"gt07",type:"trans",title:"志工經驗",qs:[
 {zh:"擔任志工讓我學會如何與不同背景的人合作。",ref:["Being a volunteer has taught me how to work with people from different backgrounds.","Volunteering taught me how to cooperate with people from various backgrounds."],tip:"teach + O + how to V；不同背景 different backgrounds。"},
 {zh:"這段經驗也讓我明白，幫助別人其實就是幫助自己。",ref:["This experience also made me realize that helping others is actually helping ourselves.","The experience also made me understand that helping others is in fact helping oneself."],tip:"make + O + 原形動詞（realize / understand）。"}
]},
{id:"gt08",type:"trans",title:"人工智慧",qs:[
 {zh:"隨著人工智慧的發展，許多工作的方式已經大幅改變。",ref:["With the development of artificial intelligence, the way many jobs are done has changed greatly.","As artificial intelligence develops, the way we do many jobs has changed dramatically."],tip:"隨著 With + N / As + 子句；主詞 the way 是單數 → has changed。"},
 {zh:"學生應該學習善用這些工具，而不是完全依賴它們。",ref:["Students should learn to make good use of these tools instead of relying on them completely.","Students should learn to use these tools wisely rather than depend on them entirely."],tip:"make good use of 善用；instead of + V-ing；rather than + 原形動詞。"}
]},

/* ===================== 英文作文 ===================== */
{id:"gw01",type:"essay",title:"一次失敗帶給我的一課",prompt:"你是否曾經因為一次失敗而學到寶貴的一課？請寫一篇英文作文，文分兩段。第一段描述那次失敗的經過；第二段說明你從中學到什麼，以及這個經驗如何影響你之後的想法或做法。",tips:["第一段用過去式敘事：時間、地點、發生什麼事、當時的心情。","第二段轉向反思：學到什麼 → 之後怎麼改變，最好舉一個具體例子。","好用句型：Looking back, I realize that… / It was not until… that I… / From then on, I…","心情字彙：frustrated, disappointed, embarrassed, determined, grateful"]},
{id:"gw02",type:"essay",title:"要不要補習？",prompt:"許多高中生放學後會去補習班。請寫一篇英文作文，文分兩段。第一段說明你認為上補習班的優點與缺點；第二段說明你自己會不會選擇上補習班，並提出理由。",tips:["第一段可以用 On the one hand… On the other hand… 平衡呈現優缺點。","優點：systematic review, exam skills, peer motivation；缺點：expensive, exhausting, less time to think on your own。","第二段立場要清楚：As for me, I would (not) choose to… because…","結尾可以回到自己的學習習慣或目標。"]},
{id:"gw03",type:"essay",title:"高中生每天用手機多久？",prompt:"某高中調查學生每天使用手機的時間：少於 1 小時 10%、1～3 小時 35%、3～5 小時 40%、5 小時以上 15%。請寫一篇英文作文，文分兩段。第一段描述這份調查結果並說明你觀察到的現象；第二段說明你自己每天使用手機的情形，以及你認為合理的使用時間與原因。",tips:["圖表題第一段：先總述（The survey shows that…），再挑重點數字，不用每個數字都寫。","描述比例：account for, make up, the largest / smallest group, more than half (55%)","3～5 小時（40%）加上 5 小時以上（15%）超過一半，這是很好的觀察重點。","第二段把焦點拉回自己：use my phone for about… hours a day, mainly to…"]},
{id:"gw04",type:"essay",title:"完全自由的一天",prompt:"如果你有一整天可以完全自由安排，不必上學、也不用寫作業，你會怎麼度過？請寫一篇英文作文，文分兩段。第一段描述你這一天的計畫；第二段說明這樣安排的原因，以及你希望從這一天得到什麼。",tips:["假設語氣：If I had a whole day to myself, I would…","第一段可以照時間順序：In the morning… After lunch… In the evening…","第二段說原因：放鬆、陪家人、培養興趣、做平常沒時間做的事。","避免只列清單，每個活動多寫一句感受或細節。"]},
{id:"gw05",type:"essay",title:"校園空地怎麼用？",prompt:"學校打算重新規劃校園裡的一塊空地，候選方案有三個：(1) 自習室 (2) 運動場 (3) 小型花園。請寫一篇英文作文，文分兩段。第一段說明你支持哪一個方案及理由；第二段說明你為什麼不選另外兩個方案。",tips:["第一段開頭直接表態：If I could decide, I would turn the empty space into…","理由給兩個，每個附具體情境或例子。","第二段逐一說明另外兩個方案的缺點，或為什麼校內已經足夠。","轉折用語：Although…, / While it is true that…, / However,"]},
{id:"gw06",type:"essay",title:"影響我最深的人",prompt:"在你成長的過程中，誰是對你影響最大的人？請寫一篇英文作文，文分兩段。第一段介紹這個人，並描述他或她做過哪些讓你印象深刻的事；第二段說明這個人如何影響你，以及你從中學到什麼。",tips:["第一段：這個人是誰、和你的關係、一兩件具體事件（用過去式）。","避免只寫形容詞（kind, hard-working），要用事件來證明。","第二段：influence / inspire me to…, Thanks to him/her, I have learned…","結尾可以寫你希望未來也成為什麼樣的人。"]}
];
