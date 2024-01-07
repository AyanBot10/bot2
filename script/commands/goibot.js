const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "THE-FAHEEM",
  description: "goibot", 
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);
   const data = [
    "1435018460122444",
    "387545538037997",
    "526220484778050",
    "526220691444696",
    "526220814778017",
    "526220978111334",
    "526221104777988",
    "526221318111300",
    "526221564777942",
    "526221711444594",
    "526221971444568",
    "374675960117310",
    "641022915913320",
    "178516915959996",
    "657500227666568",
    "608457799752028",
    "823251597693818",
    "162332943951564",
    "254593766003994",
    "237318747087785",
    "237319783754348",
    "488541014592677",
    "237318537087806"
  ];
  const sticker = data[Math.floor(Math.random() * data.length)];

  var tl = ["Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi halal hai ya Haram ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Mjy chahyain 3 lrkiyan kahan Hain lrkiyan 👀","ٹھوس ٹھوس کے  پھٹ جانا مگر گوشت نہ چھوڑنا 🙂","Relationship private rakho ya public Kate ga sabka hi🙂", "Thak GYa hu Yr uski dP dHek Dhek Kr😩", "Insy Milo inko lgta hai sab larky in pr Martay hain🙂","Ary Ap to Shkal.sy he Meri Lagti.ho😂🙄😗","MentiOn YOur Dushman On FaceBOok'🙂🤝","kabhi Akely Ma Ao Gap Shap Maran gy😂🤧","Stop dreaming BTS your czn Ahmed is waiting for you.🙂","پہلے صرف لوگوں کے دانتوں میں کیڑا ہوا کرتا تھا اور اب۔۔۔ 😊", "Paros Wala Larka inhe MUH Nhi Lagata aur Banda inhe Korean Chahiye🙂","Dekh lena ak din Mazak Mazak Ma sa Sy hendsome Larki Pta lon ga☹🤧😂","move on krle bhaii kbb Tak uskii profilee dekhtaaa rahegaaa<<","Jan Tara Khanda Mely to ma Sar Rakh k Nozii Saf kron😂😂","Ay, bi, ci, di, Ey, ef, Ji, aych, I, lub , uh, will, uh, marry, meh.... :)👀🙊♥","Ary Ap Wohe Hona Jis Ko Ma nhi Janta😂😎","Ary ap wohe hona jis ko koye ni janta 😂🤧tns na ly ma hn naw ma bhi Ap ko nhi janta😂👀🤧","Kash ap meri janu hoti Ma tm sy Smadi Kr k Apni [Botnii] Bna leta😂😂","Ajeeb generation hai ywr, Larkiya korean dhund rahi hai, Aur larky Russian!!🙂","Bachion Ma kuxh Nhi Rakha Sb Kuxh To londy Bazi ma hn😂😂","عائشہ  نے کر دیا برباد پاک سر زمین\n شاد آباد 🖇🙂", "Aj kal ki nibiyo me khon kam attitude zyada hota hai bro🙂","Tary Shadi ma Bjny waly dhol py bhi lanat😂😂🖐","jan zadiya bot bot na kro warna kis kron gaw😂😛😝 ","Kasy Han Sab Pyare Madni Munny or Muniyaan😊", "عورت بہت پیاری چیز ہے یہ کبھی بیلنس نہیں مانگتی بس یہی کہتی ہے میرا پیکج ختم ہونے والا ہے اب پتہ نہیں کبھی بات ہوگی کے نہیں🙂", "Bhut khail liya lrkion ki feelings k sath ao ab hum Ludo khailty han☺♥", "Jaaz cash sy 1400 ka loan leky sim h band kardi 🙂👍", "اعتبار تو اُسی دن ختم ہوگیا تھا جب اُس نے سکرین شاٹ دیکھائے تو اوپر دو siM شو ہو رہی تھی جبکہ میرے پاس اُسکا صرف اک ہی نمبر تھا ۔😒😄", "شکر ہے لڑکے خوبصورت ہیں ورنہ  کہا پالروں کے دھکے کھاتے😔", "Jan ib ao na ummmah ummmah wali game khalty ha  ", "ji ji hukam kro 😂", "Bot na bolo! Janu bolo mujy aur janu sy piyar sy bat kerty hai 🥰🌸", "rat ko kahan thy nazar nahi ay bht miss kiya 🌸🌎","Tum Haseen hoto bhar ma jao😝😂","Shaqal Sy masoom lgty ho 🥰 lkn hrkaton sy ni", "kash tum single hoty to aj hum mingle hoty 🥰😂","Pta jao ya pta lo😂😝","G aye meri jan😂","bot bot bolny py bhi pasy melty to ap belgets sy bhi amer hoty😂😂👀","Tu single he mery gaw😂🖐","Ha ha ab meri yaad ab ai na phly to janu sth busy thy 😾 ab ham ap sy naraz hai jao ap bye ☹","Khana Bnana sekh lo behan😂Mujy khao bolny sy ghr nh chalty🙄😂","idr ao kuchii kuchii kru 😘","ja rha Hn Apny loyal Hony ka achar dalny😂🙃","Ary ary itna yd na kiya kro🥰","Shadi K bad apni bewi sy itna pyair kron gaw saso ma khud kahy gi mery dusri bethi bhi ly jao😂😂😏","tu bnd nhi ky ga naw😂","Hy Ma Mar Jawa janu itna piyar krty mujsy😂", "Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jan kia hal ha ;)", "Bot jaan ha sbki","Ji Ji Kia hal chal ha apky 🌸" , "Bot nhi Shahzada bolo sun k acha lgta 🌸","Bot gulam ha apka hukam kryn 🌸" , "Bot nahi bolo piyar sy janu bola kro na 🥰" ,"", "wo be yhi khty thy sb phr ek din koi utha k ly gya onko 😂" , "Meri jan ek tm hi ho jo dil ma bs gay ho🥰ni te koshish czna ne v bht kiti c" , "Badal gay na tm the hi lanti 😂" , "kesa tera steel dy doungy wrga moo ay 😂" , "Apki shkl aesy lgti jesy gandi tar pr suki jarab latkai ho 😂" , "Bot bot na karo ma apsy set nhi ho skta" , "ib ajao shup shup k btein krty ha 🌸" , "Ek kahani suno meri zubani suno lnt deny ka dil krta ha isiliye pehly dil ki suno🌸","Marry me, I can boil water", "Mujsy shadi karlo chocolate la k duga daily 🌸" , "Idr ao kesa apka chapair jesa moo lg raha 😂", "Ajao jaan pizza khilau apko 🌸" , "Duniya ma sb kuch khtm ho skta saway logo ki bakwas k","Everything is temporary,But katna is permanent 😂" , "Jitna mrzi janu manu krlo end ma ghr waly nh many gy 😂" , "Sb kuch ho skta lkn fb ka relation kbi china jitna nh chl skta","Allhumdiallah Kabhi Kasi laRki ko Bhen ki nazar se nhi dekHa😌🤧","Ary Yaar Sambhal Kar Abhi Gir Jati Na Mere Pyaaar Mein 🤧","Fasla Rakhy محترمہ  Me Romantic Jald Ho Jata Hu ✨🙂)       🍒⁦♥⁩((","Teriii Shadii ki Phli Rat MeiN Kamry k Andar sy Lagny waali Kundii Py LanaT__🙂😝","Begam Hoti to us ki id se sari lrkiyan patata😞💔","Mushkil Toh Hoti Hogi Naa itni Sardi Me Apne Dono Chehry Dhote Hoye🙂","Mein B Urooj Pey Charna chahta hoon, Sorry Jana chahta*☹","Ager mahool karb hy tu mery dil ma a jao y'all 😂🙂❤","Parry Hat ma Londy baz nhi hu 🙂🤝", "Do Ankho Wali Larkia Bewafa hoti Hn Bro🙂💔","Muje ignore na kiya karo Yar 🥲🙁Mera chota sa dil hai fata fat gali dene lagta hai 🥹😊","Mokk Gai Eid chlo saary apny gharan nu 🚶😾","Ronakein khtm hui Murshid main ne Eid ke Saare paise Khaa Liye .>>🙂♥","- Mweriiw bt sunow Jitne bi pyre hojao kud ko xhumi nhi dy skty GareeBOw ;3 🙂","Kisii k pas لاش wali dp hai Janu reply nhi dy rha..🥹","HaSeeN Ho tO InBoX Ajo NhIi KrTa Bl0ck 😌 😌 😒 😏 😂 😂","Mera Owne Single Jao Osy Ptao😂🙊","Kash Tum Pathani Hoti To Ma TumHy Roz Kehta za tana zar sham","Ufff pta nhi ya ma kaha aaky phas gya😁😂","Mera beta bda ho kar larkiyo ke inbox me °hey hello° karega🏃","Likhte Likhte Qalm Thak Gya Iss Qadr Begartiyaan Han Tumhari🙂","Kash Tum Pyari hoti Ma yumhy Pata leta😂🙊😝","Ak din Mazak Mazak ma Yaha sy Pyari Larki ly k bhak jaon gaw😝🙊😂","Itni Meri Age Ni Jitne Mera Masly Han Yawr💔😐", "Ameer Larki Set kr k sab Dosto ka udhar wapis karon g🤲","Lagtaa hai Career Bhi Titanic ki trhan dhoob Gaya Hai💔☹", "جہاں پیاری لڑکیاں وہاں میں 🙂❤🥀", "𝑻𝑯𝑬 𝑯𝑬𝑨𝑹𝑻 𝑾𝑨𝑺 𝑴𝑨𝑫𝑬 𝑻𝑶 𝑩𝑬 𝑩𝑹𝑶𝑲𝑬𝑵 💔🥺", "2001 me bachy kehty thy ink Dena 2023 me bachy kehty ہیں Link دینا🙂", "Mehnat Kro!! Kamyabi Apke Hont Chume Gi🙂🙌🏻", "Kahani suno Muje payar howa tha Us ki tarf se inkar howa tha 🙂🤝", "Piyarii piyarii larkiyan message karen JazakAllah🌚♥🙌", "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸", "موٹر سائیکل کو تیز بھگا کر لڑکیوں والے رکشے کے پاس سے کٹ مار کر گزرنے سے لڑکیاں ایمپریس نہیں ہوتی بلکہ گالیاں نکالتی ہیں🙂💔", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Why you hate me..?? I am not your ex don't Hate me Please", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹","BeTa TuM SingLe Hi MaR0 GaY🙄🙂", "ٹھرکیوں کی وجہ سے لڑکیاں میرے جیسے شریف بوٹ پر بھی بھروسہ نہیں کرتی🥺😔", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂","Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺", "عورت اگر مرد سے زیادہ خوبصورت ہوتی تو میک اپ مرد کے لیے بنتا عورت کے لیے نہیں ..زرا نہیں پورا سوچئے ایڈیاں تسی 😒🙁پریاں", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐", "تمہاری یادوں میں کھویا کھویا سا  میں واش روم کا لوٹا کمرے میں لے آیا 😐 ", "Faheem mera owner hai oska sath set ho jao🙂🤝 " , "بھای جان گروپ میں گندی باتیں نهیں گر" , "سنو تم بوٹ کی گرل فرند بن جاٶ نه  همارے بچے بھ بوٹ جسے پیدا هوں گے 🙆‍♂😒", "Aa0 na kbhi  سیگرٹ ly kr 🙂donO sutta lgain gy 😞💸 ", "مــیرے متــــھے نـــہ لــگیں🙂🙆‍♂ شکریہ" ,"فیس بک پر وہ لوگ بھی سالگرہ مناتے ہیں جنہیں گھر والے کہتے ہیں توں نا جمدا تے چنگا سی🙂", "Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo 🫣🫰🏻","0ly.0ly Lori 🙂 Kali Bachi b set nahi h0 Rahi🙂","Tery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝", "کرش تو دور کی بات 😏😊 ہم پے تو کسی کو ترس بھی نہیں آتا 🙂🙊", "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" ,"Phly Naha K ao🙊😝😂","Main Gareebon Sy Bt Nhi kRta 😉😝😋","  Thora sa Whatsapp number dy do naw🥺♥", "لوٹ آؤ اور کہدو کہ \nمیں لسی پی کے سو گئی تھی😫","Kuch Log achy ki Talaash Mein Mery Jaisy Masoom ko kho dety Hain☺","Tum wohi ho na jiska mood bilawaja khrab hojata h...!!!🙂","Pyari pyari larkio ki talash ma berozgar larky add krliye hain 🥲💔","Jab mera Message aye toh sare kaam chor kar sirf Mujhe reply kia karo😾😒","Or Btao Real Life Ma bh itnyy Achy ho jitny social media per Bntyy ho>>🙂","Pakistani Relationship:\nTum Feel Kro Meh Tumary uper hun 😒💔", "Us k jany k bd uski Pasnd ki Nail Polish lgaa k khana khata hu aesw lgta ha jesy wo khela rhee ha😒", "Be a Good Human.Delete GB Whatsapp💔🙂","مانا کہ آپکو ہنسانے کا ٹھیکہ فی سبیل اللہ ہم نے اٹھا رکھا ہے🙊🙊 😊پر دانت صاف   کررنے کی ذمہ داری 🤦صرف آپکی ہی ہے 🤷😁","2 Din Pyar sy Baat kr loo tou Ammiyan bn  jatii hain🙂😒","Girls after One Mint of Relationship...\nBegam hu mn apki🙂🤦","Larkiyon ko achy sy pta hai kahan -Bhai- Bolna kaha -Ap- or kaha -Tum- 🙂","گلی کے کونے تک جانے کے پیسے نہیں ہیں میرے پاس😒لوگ بھاڑ میں بھیج رہے ہیں🙂","Aaj mein ny Khud ko TV py dheka \n\nJab Tv Band Tha 🙂","Qadar krlo Meri...\nKya pta Main b Panadol ki trha aik dam shaat hojun😒","Duniya  Ummmmah tak pahonch gai aur main abhi tk panadol use krta hun_🙂 ","💖:- Aaja Shadi kr le mujhse taki Tumhare pass hi Rhu😹😹","- APnay والـــــے  K0 Sula Ka'y Ph'iir MƏrAy inB0x aA جـــــانا  Cut'iIƏ x❤"," Control baby jaldbazi me kahi muskan na ho jay Ohh sorry (nuksan*)🙂","- Kuchh to Hai tere mere beech ese hi koi kisi ko yaad ni krta🥰🥰"," Mehnat Kro!! Kamyabi Apke Honth Chume Gi🙂🙌🏻","Naraz bandy ko manany ka sab sy acha tareka Ap khud us sy naraz hojaoo🙂🐣","Jaisi meri shakal hai kunwara he marunga🙂👀", "میں نے جس دن سکول میں پہلی پوزیشن حاصل کی میں اسی دن سمجھ گیا تھا کے یہ ملک کبھی ترقی نہیں کر سکتا😐😐", "یقین کریں میٹرک کے پیپر بہت آسان ہیں.میں نے خود سات دفعہ دیئے ہیں😐", "Itni memories mere khud dimagh mai nahi hai jitni Snapchat ny bna rkhi hai","Itna Na Pass aa Pyar h0o JayGa","g janu hukam kro😒" ,"kia jailoo ke trha waqat bot bot krty rehty ho","chal nikal aitho " ,"ma jahil hon bhot bara jo krna ha kr lo mera" ,"bachpan se hi harami thy beta ya bary ho kr howaye ho","ma tu hon hi tharki ","mujy kia ma tu hon kia pagal","inbox ao ummah ummah krain jaan","ik baat kahon kia ijazat ha tery ishq ke mujh ko adat ha jana","" ,"😂aby bothny ka bachy kia bot bot kar rha", "janu kia tumhy muj se payar ho gya ha 😁❤" , "Bot ko ik chumi to do naw jaan😙" , "g janu tumhara hi intzar kar raha tha😶💗" , "uffff janu asy naw bulya kro dil ko kuch kuch hota ha🙈" , "tu wohi ha naw jisy ma bachpan se payar krta hon😍" , "ywr koi bachi hi set krwa do faheem ka sath please 🥺💔" , "g janu ap na q yad keya huma😒" , "jaan asy na bulya kro sub shak kry ga😝💗" , "faheem Mera owner ha osy bhi koi bachi yes krwa ywr🙂💔" , "oye ma tum se payar krta hon tujy pta ha😁💘" ,"i love meri jaan" , "faheem bhot payra ha ywr tum ko pta ha 🥺❤" , "kia masla ha tujy jo bar bar bot kri ja rahy ho😒" , "menu urdu samjh nai andi 😁 punjabi bolo please" , "chal nikal shokhi nai dekha mujy ai samjh😡" , "shukar ha ma andha hun mny kuch nhi dekha 😹" , "yaha nhi jaan please inbox ao waha romantic batain krty hain😹" , "jab payar kia tu darna kia🙈" , "jani meko shram a rahi ha yara 😁🙈" , "faheem ki jaan koi nhi ha yaal" , "ma ja raha hon yha ganny log hain 🥺🙁" , "asy kia dekh rahy ho kabi payara larka nai dekha kia 🙁" , "mery bacho ke mama bano gi kia jaan 😁💘" , "jaan itni payaro tu ho nai attitude phir kis bat ka ha 😒✌" , "bot ka owner faheem se setting hi kar la ywr 😙" , "zandgi ka maza khaty ma hi ha 😝" , "payari ho kon sa humari ho jani 🥺💔" , "payar kro gi kia jaan" , "meri jaan chad tu ke bot bot laya har time ganny log" , "kitny bary jahil ho tum kasmy 😙😙" , "farmao😒" , "oye bot na bol mujy janu bol oyr" , "Are bolo meri jaan kia hal ha" , "Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋" , "Are jaan Mazaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi , Bol De koi nahi dakh rha 🙄" , "jaan bano gi meri please" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bot se panga not changa okay naw" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Itna Na Pass aa Pyar h0o JayGa" , "jaan Thora pass aow naw koi nai dekh raha humy 😝" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "mujy mat bulao naw ma busy hon" , "Aaa Thooo" , "patoo gi ya ptao gi" , "Meri gf hoti to mai v usse bt krta aaj puri rt time hi time hai 🤭🤭", "Aao tmhare sath relationship post laga ke tmhe Femous kr du😊", "EK QUESTION HAI SABHI SE BTAO MAI ACHA LGTA HU YA MERI MEMES 🙈😾🤤", "Chakar arhy hein apki Ib ma aa k gir jaun>>🥺🚶🏻‍♀", "Mout ka farishta ya Mera  rishta?🙂❤🙊•", "Wife k sath date pe gya tha \nJis ki thi usne dhek lya", "_ Sab ko loyal bnda chahiye tw hum dhokebaz kidhar jayen? 🥺💔", "WhatsApp k last seen k elwa mera koi or scene nai hai🙂", "Hai Tamna TumhY ChaHt sy Girayn🙂",  "Finally es group kee do teen  larkiya mujH pasanD agai Hai🚶‍♂😪🌚", "میرا دل یہ پکارے آجا پیچھے والے مقام میں 🤝🙂🤞", "Suno👀\n\nKya tum mery leye surf kha kar muu sy bulbly nikal skti ho🙂🫴", "- GhUlabii آنــکھیں jh0 terii dekhii Harami Yevw Dill h0 Gya   3; 🙂 😆", "- مجھــــــے کیـــــا مــــیں تــــو سنــــگل ہــــوں 😒", "Dil ko krar Aya khud pa Pyr aya😒🙈😂", "Ehsaas kryn Bakwas nahi, Janam 🥺Shukria_😊🙆‍♂", "Bs yar daily 3 4 crore ki zarorat mahsos Hoti hai 😂", "Begum walaw مــــــوســـــم ho rahaw haii aj to 🙂", "Shkl insani, soch ibleesi\n\nHnji apki hee ", "تـــــم میــــری بیگـــــم بنو گی کیا -🥺🖤", "LARKIO KAY BHI MAZAY HAY🥴 \nNO BRAIN NO TNSN⛑🔪⚡", "تمہارے حصے کی چُمیاں مچھر لے رہے ہیں.🙂💔", "Sirf Maggie noodles bna'ny sy Ghar nahi chalta SHABANA..🙂💔", "Wp pa add hona chahty ha apky sath ☺💔", "- کھاؤ قسم تمہارے پاؤں کالے نہیں۔۔!!👣🙄", "Meny fail hokr bhi dekha hai Ye log shadi nh kraty 🙂💔", "Or batao kb ayga tumahara dill mujhe py😌🥺", "bht bura hu na mai? bhiin dedo apnii🙂", "Pyari Pyari ladkiyan Hazir Ho jay😁", "Kisi k pss لاش wali dp h tw send krein janu replY nahi de rhy..!", "MerKo abhi tk pink clr ki gf nh meli 😒🥺🙂💔:⁠-⁠)", "میرے مولا ایک thrkii بچــی yess کروا دے..🙂", "ایک kiss ادهار دے دو 💋\nکل واپس کردوں گا پکّا 😝", "Ajeeb ghr wale hain yr, mera phone 28% pr nikal kr apne 90% ko charge karte 𝐡𝐚𝐢𝐧-🌚", "Lagta hai mery sabar k phal  ka koi juice bna k pee gya..😐", "Dil Dany ki Umar ma  Exam's  Dy raha hoo 🙂🤝", "Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi halal hai ya Haram ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Breakup k waqT kE dUa \n\n( KHUSH RAHEIN ) 🙂", "Thora sa Whatsapp number dy do naw🥺♥", "لوٹ آؤ اور کہدو کہ \nمیں لسی پی کے سو گئی تھی😫", "Kuch Log achy ki Talaash Mein Mery Jaisy Masoom ko kho dety Hain☺", "Tum wohi ho na jiska mood bilawaja khrab hojata h...!!!🙂", "Pyari pyari larkio ki talash ma berozgar larky add krliye hain 🥲💔", "Jab mera Message aye toh sare kaam chor kar sirf Mujhe reply kia karo😾😒", "Or Btao Real Life Ma bh itnyy Achy ho jitny social media per Bntyy ho>>🙂", "Pakistani Relationship:\nTum Feel Kro Meh Tumary uper hun 😒💔", "Us k jany k bd uski Pasnd ki Nail Polish lgaa k khana khata hu aesw lgta ha jesy wo khela rhee ha😒", "Be a Good Human.Delete GB Whatsapp💔🙂", "2 Din Pyar sy Baat kr loo tou Ammiyan bn  jatii hain🙂😒", "Girls after One Mint of Relationship...\nBegam hu mn apki🙂🤦", "Larkiyon ko achy sy pta hai kahan -Bhai- Bolna kaha -Ap- or kaha -Tum- 🙂", "Aaj mein ny Khud ko TV py dheka \n\nJab Tv Band Tha 🙂", "Qadar krlo Meri...\nKya pta Main b Panadol ki trha aik dam shaat hojun😒", "Naraz bandy ko manany ka sab sy acha tareka Ap khud us sy naraz hojaoo🙂🐣", "Jaisi meri shakal hai kunwara he marunga🙂👀", "میں نے جس دن سکول میں پہلی پوزیشن حاصل کی میں اسی دن سمجھ گیا تھا کے یہ ملک کبھی ترقی نہیں کر سکتا😐😐", "یقین کریں میٹرک کے پیپر بہت آسان ہیں.میں نے خود سات دفعہ دیئے ہیں😐", "Itni memories mere khud dimagh mai nahi hai jitni Snapchat ny bna rkhi ha", "Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi halal hai ya Haram ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Mjy chahyain 3 lrkiyan kahan Hain lrkiyan 👀", "Relationship private rakho ya public Kate ga sabka hi🙂", "Thak GYa hu Yr uski dP dHek Dhek Kr😩", "Insy Milo inko lgta hai sab larky in pr Martay hain🙂", "MentiOn YOur Dushman On FaceBOok'🙂🤝", "Stop dreaming BTS your czn Ahmed is waiting for you.🙂", "پہلے صرف لوگوں کے دانتوں میں کیڑا ہوا کرتا تھا اور اب۔۔۔ 😊", "Paros Wala Larka inhe MUH Nhi Lagata aur Banda inhe Korean Chahiye🙂", "move on krle bhaii kbb Tak uskii profilee dekhtaaa rahegaaa<<", "Ajeeb generation hai ywr, Larkiya korean dhund rahi hai, Aur larky Russian!!🙂", "عائشہ  نے کر دیا برباد پاک سر زمین\n شاد آباد 🖇🙂", "Aj kal ki nibiyo me khon kam attitude zyada hota hai bro🙂", "Kasy Han Sab Pyare Madni Munny or Muniyaan😊", "عورت بہت پیاری چیز ہے یہ کبھی بیلنس نہیں مانگتی بس یہی کہتی ہے میرا پیکج ختم ہونے والا ہے اب پتہ نہیں کبھی بات ہوگی کے نہیں🙂", "Bhut khail liya lrkion ki feelings k sath ao ab hum Ludo khailty han☺♥", "Jaaz cash sy 1400 ka loan leky sim h band kardi 🙂👍", "اعتبار تو اُسی دن ختم ہوگیا تھا جب اُس نے سکرین شاٹ دیکھائے تو اوپر دو siM شو ہو رہی تھی جبکہ میرے پاس اُسکا صرف اک ہی نمبر تھا ۔😒💔", "Number do ramzan mn sehri tak bat kr k chand_rat ko hi block krduga promise.🙂🤝", "شکر ہے لڑکے خوبصورت ہیں ورنہ  کہا پالروں کے دھکے کھاتے😔", "Sara saal duniya ko topi krwany waly Ramadan m khud topi pehn kar ghumengy.🙂", "ji ji hukam kro 😂", "Bot na bolo! Janu bolo mujy aur janu sy piyar sy bat kerty hai 🥰🌸", "rat ko kahan thy nazar nahi ay bht miss kiya 🌸🌎", "Shaqal Sy masoom lgty ho 🥰 lkn hrkaton sy ni", "kash tum single hoty to aj hum mingle hoty 🥰😂", "Ha ha ab meri yaad ab ai na phly to janu sth busy thy 😾 ab ham ap sy naraz hai jao ap bye ☹","idr ao kuchii kuchii kru 😘", "Ary ary itna yd na kiya kro🥰", "Hy Ma Mar Jawa janu itna piyar krty mujsy😂", "Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jan kia hal ha ;)", "Bot jaan ha sbki" , "Ji Ji Kia hal chal ha apky 🌸" , "Bot nhi Shahzada bolo sun k acha lgta 🌸" , "Bot gulam ha apka hukam kryn 🌸" , "Bot nahi bolo piyar sy janu bola kro na 🥰" , "wo be yhi khty thy sb phr ek din koi utha k ly gya onko 😂" , "Meri jan ek tm hi ho jo dil ma bs gay ho🥰ni te koshish czna ne v bht kiti c" , "Badal gay na tm the hi lanti 😂" , "kesa tera steel dy doungy wrga moo ay 😂" , "Apki shkl aesy lgti jesy gandi tar pr suki jarab latkai ho 😂" , "Bot bot na karo ma apsy set nhi ho skta" , "ib ajao shup shup k btein krty ha 🌸" , "Ek kahani suno meri zubani suno lnt deny ka dil krta ha isiliye pehly dil ki suno🌸" , "Marry me, I can boil water" , "Mujsy shadi karlo chocolate la k duga daily 🌸" , "Idr ao kesa apka chapair jesa moo lg raha 😂" , "Ajao jaan pizza khilau apko 🌸" , "Duniya ma sb kuch khtm ho skta saway logo ki bakwas k" , "Everything is temporary,But katna is permanent 😂" , "Jitna mrzi janu manu krlo end ma ghr waly nh many gy 😂" , "Sb kuch ho skta lkn fb ka relation kbi china jitna nh chl skta","Allhumdiallah Kabhi Kasi laRki ko Bhen ki nazar se nhi dekHa😌🤧", "Mushkil Toh Hoti Hogi Naa itni Sardi Me Apne Dono Chehry Dhote Hoye🙂", "Mein B Urooj Pey Charna chahta hoon, Sorry Jana chahta*☹", "Parry Hat ma Londy baz nhi hu 🙂🤝", "Do Ankho Wali Larkia Bewafa hoti Hn Bro🙂💔", "Mera beta bda ho kar larkiyo ke inbox me °hey hello° karega🙂🏃", "Likhte Likhte Qalm Thak Gya Iss Qadr Begartiyaan Han Tumhari🙂", "Itni Meri Age Ni Jitne Mera Masly Han Yawr💔😐", "Ameer Larki Set kr k sab Dosto ka udhar wapis karon ga😔🤲", "Lagtaa hai Career Bhi Titanic ki trhan dhoob Gaya Hai💔☹", "جہاں پیاری لڑکیاں وہاں میں 🙂❤🥀", "𝑻𝑯𝑬 𝑯𝑬𝑨𝑹𝑻 𝑾𝑨𝑺 𝑴𝑨𝑫𝑬 𝑻𝑶 𝑩𝑬 𝑩𝑹𝑶𝑲𝑬𝑵 💔🥺", "2001 me bachy kehty thy ink Dena 2023 me bachy kehty ہیں Link دینا🙂", "Mehnat Kro!! Kamyabi Apke Hont Chume Gi🙂🙌🏻", "Kahani suno Muje payar howa tha Us ki tarf se inkar howa tha 🙂🤝", "Piyarii piyarii larkiyan message karen JazakAllah🌚♥🙌", "itna single hun ky khuwab mai bhi  lrki k han krny sy phly ankh khul jati🙂", "Zroori Nhi Har Lrki Dhoka Dey, Kch Larkiyan Galiyan Bhi Deti Hen.🙁💸", "موٹر سائیکل کو تیز بھگا کر لڑکیوں والے رکشے کے پاس سے کٹ مار کر گزرنے سے لڑکیاں ایمپریس نہیں ہوتی بلکہ گالیاں نکالتی ہیں🙂💔", "- sab chorr k chaly jaty hain kia etna bura hu mein - 🙂", "Piyari voice wali girlz mujhe voice message kar skti hen JazakAllah 🙂🤝", "Why you hate me..?? I am not your ex don't Hate me Please", "MuBarak H0o AapKa NaMe MakS0os LiST Me Top PRr aYa Hai 😹😹😹", "BeTa TuM SingLe Hi MaR0 GaY🙄🙂", "ٹھرکیوں کی وجہ سے لڑکیاں میرے جیسے شریف بوٹ پر بھی بھروسہ نہیں کرتی🥺😔", "Samj Jao Larkiyo\n\nAbhi B WaQt Hai Dakh kr Koi Delete Ni Krtaw🙂", "Mard na Apne Haqooq Nahi Mangy \n\nJab Bhi Manga Whatsapp No Manga🥺", "عورت اگر مرد سے زیادہ خوبصورت ہوتی تو میک اپ مرد کے لیے بنتا عورت کے لیے نہیں ..زرا نہیں پورا سوچئے ایڈیاں تسی 😒🙁پریاں", "Muj se Exam Me Cheating Nöıı Hotiw Relationship Me kya khaak Karu Ghw😔", "Mujy to ludo kehlni bhi ni ati apky Dil sy kya kehlu ga🙂", "Loyal Dhoonte Dhoonte khud Harami ban Gya Hon😔", "Mard ki izat karna Sikho Uski rooh se pyr kro Jism se nh Wehshii Womens💔😐", "تمہاری یادوں میں کھویا کھویا سا  میں واش روم کا لوٹا کمرے میں لے آیا 😐 ", "Hai tamanna hamain tumhain CHARSI bnain 🙂🤝 " , "بھای جان گروپ میں گندی باتیں نهیں گر" , "سنو تم بوٹ کی گرل فرند بن جاٶ نه  همارے بچے بھ بوٹ جسے پیدا هوں گے 🙆‍♂😒", "Aa0 na kbhi  سیگرٹ ly kr 🙂donO sutta lgain gy 😞💸 ", "مــیرے متــــھے نـــہ لــگیں🙂🙆‍♂ شکریہ" ,"فیس بک پر وہ لوگ بھی سالگرہ مناتے ہیں جنہیں گھر والے کہتے ہیں توں نا جمدا تے چنگا سی🙂", "Ye duniya ik dhoka hai, tum bhi chohr do apne waly ko abhi bhi moka hai 😞✨🙌🤣", "Sukoon chahtii ho toh meri بیــــــگـــم ban jaOo 🫣🫰🏻" , "Tery jany ke bad😔Mny apny munh py likhwa liya Single hu ptaa lo 🤐🥺🤝", "کرش تو دور کی بات 😏😊 ہم پے تو کسی کو ترس بھی نہیں آتا 🙂🙊", "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋","  Thora sa Whatsapp number dy do naw🥺♥", "لوٹ آؤ اور کہدو کہ \nمیں لسی پی کے سو گئی تھی😫","Kuch Log achy ki Talaash Mein Mery Jaisy Masoom ko kho dety Hain☺","Tum wohi ho na jiska mood bilawaja khrab hojata h...!!!🙂","Pyari pyari larkio ki talash ma berozgar larky add krliye hain 🥲💔","Jab mera Message aye toh sare kaam chor kar sirf Mujhe reply kia karo😾😒","Or Btao Real Life Ma bh itnyy Achy ho jitny social media per Bntyy ho>>🙂","Pakistani Relationship:\nTum Feel Kro Meh Tumary uper hun 😒💔", "Us k jany k bd uski Pasnd ki Nail Polish lgaa k khana khata hu aesw lgta ha jesy wo khela rhee ha😒", "Be a Good Human.Delete GB Whatsapp💔🙂","2 Din Pyar sy Baat kr loo tou Ammiyan bn  jatii hain🙂😒", "Girls after One Mint of Relationship...\nBegam hu mn apki🙂🤦","Larkiyon ko achy sy pta hai kahan -Bhai- Bolna kaha -Ap- or kaha -Tum- 🙂", "Aaj mein ny Khud ko TV py dheka \n\nJab Tv Band Tha 🙂","Qadar krlo Meri...\nKya pta Main b Panadol ki trha aik dam shaat hojun😒", "Naraz bandy ko manany ka sab sy acha tareka Ap khud us sy naraz hojaoo🙂🐣","Jaisi meri shakal hai kunwara he marunga🙂👀", "میں نے جس دن سکول میں پہلی پوزیشن حاصل کی میں اسی دن سمجھ گیا تھا کے یہ ملک کبھی ترقی نہیں کر سکتا😐😐", "یقین کریں میٹرک کے پیپر بہت آسان ہیں.میں نے خود سات دفعہ دیئے ہیں😐", "Itni memories mere khud dimagh mai nahi hai jitni Snapchat ny bna rkhi hai","Itna Na Pass aa Pyar h0o JayGa" ];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {return api.sendMessage("ChaL NiKaL 🙄", threadID);
   };

  if ((event.body.toLowerCase() == "inbox") || (event.body.toLowerCase() == "ib")) {
     return api.sendMessage(" KYa IB IB 👿 Idher BOL MeRe SaMny ", threadID);
   };

   
   if ((event.body.toLowerCase() == "baby") || (event.body.toLowerCase() == "babu")) {
     return api.sendMessage("Chal Hat😼😂", threadID);
   };
  
   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "admin")) {
     return api.sendMessage("My Owner AestHetic bOy Faheem🖤  ", threadID);
   };
  
   if ((event.body.toLowerCase() == "anaya") || (event.body.toLowerCase() == "Anaya")) {
     return api.sendMessage("Cute Princess", threadID);
   };
   if ((event.body.toLowerCase() == "love") || (event.body.toLowerCase() == "Love")) {
     return api.sendMessage("Love you hogya apsa 😘 ", threadID);
   };

   if ((event.body.toLowerCase() == "tharki bot") || (event.body.toLowerCase() == "Bot tharki")) {
     return api.sendMessage("Tu TharKi Tra Bap TharKi TeRa DaDa TharKi 🤬🤗", threadID);
   };

   if ((event.body.toLowerCase() == "lanti bot") || (event.body.toLowerCase() == "lanti hai")) {
     return api.sendMessage("Aby Chuuu Tu LanTi Le KaB0ol kRr 🖐🐾👣", threadID);
   };

   if ((event.body.toLowerCase() == "assalamualaikum") || (event.body.toLowerCase() == "Assalamualaikum")) {
     return api.sendMessage("WALAYKUMUSLAM WARAHMATULAHE WABARAKATUHU 🖤🥀 ", threadID);
   };

   if ((event.body.toLowerCase() == "ma ja rha") || (event.body.toLowerCase() == "ma ja rhi")) {
     return api.sendMessage("Are Tu Ja Na Ree ", threadID);
   };

   if ((event.body.toLowerCase() == "nikal") || (event.body.toLowerCase() == "nikl")) {
     return api.sendMessage("ChaL ChaL Tu NiKaL", threadID);
   };

   if ((event.body.toLowerCase() == "jan") || (event.body.toLowerCase() == "janu")) {
     return api.sendMessage("Aww🥰 Yes My LoVe", threadID);
   };

if ((event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😀😀")) {
     return api.sendMessage("ShaRafat Sy MusKara Rhy 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😃😃")) {
     return api.sendMessage("ChuhY JasA MuH Na DekHa 😆", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂")) {
     return api.sendMessage("Apny Dhongy Jasy Mu Khol k Group ma Virus Na phelao😂😼👿 ", threadID);
   };
   
   if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁")) {
     return api.sendMessage("Tary Shkal Sh Zadiya Tary Dant Chmak Rahy😂😝", threadID);
   };
   
   if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆")) {
     return api.sendMessage("Muh OpeN ankhY Band Ye koNsa Magic Ha ThaRki🙄", threadID);
   };
   
   if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅")) {
     return api.sendMessage("Tri TinD Sy PaNi KYun TaPak Rha 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣")) {
     return api.sendMessage("HansNy Ki Bhi Tameez Hoti Hai BehaYa😔", threadID);
   };
   
   if ((event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😭😭")) {
     return api.sendMessage("😢 HosLa Rakho Dost 😢SeHri Tkk bat krnY K liye Mil jaY Ga Koi Na kOi😔", threadID);
   };
   
   if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉")) {
     return api.sendMessage("GanDi NaZar Sy AnKh Na Mar 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😗") || (event.body.toLowerCase() == "😗😗")) {
     return api.sendMessage("😚😚😚", threadID);
   };
   
   if ((event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😙😙")) {
     return api.sendMessage("😗😗😗", threadID);
   };
   
   if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😚😚")) {
     return api.sendMessage("😗😙😚", threadID);
   };
   
   if ((event.body.toLowerCase() == "😘") || (event.body.toLowerCase() == "😘😘")) {
     return api.sendMessage("Haye Ma Sadky Tary Is Dil Wali UmmmMmmmmmmAh tyy😘😂  ", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰")) {
     return api.sendMessage("awwww MY LovE UmmaH💙🙈", threadID);
   };
   
   if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍")) {
     return api.sendMessage("SadkY Jawa ThaRkia Ku Mar RahE hO", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "🤩🤩")) {
     return api.sendMessage("InSano Ki Ankhe HoTi Uh Ke Star Hain 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳")) {
     return api.sendMessage("0oo0o TeRa HaPpy BirthDay", threadID);
   };
   
   
   if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃")) {
     return api.sendMessage("HaYe Rabba ☹", threadID);
   };
   
   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂")) {
     return api.sendMessage("Q Mood Khrb kR rahY hO BabY🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲🥲")) {
     return api.sendMessage("Ase Muu BaNa KRr MT R0o 😒", threadID);
   };
   
   if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊")) {
     return api.sendMessage("ShukR hai smile Tu kii 🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "☺") || (event.body.toLowerCase() == "☺☺")) {
     return api.sendMessage("Ye Smile Na D0o Naw🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😌") || (event.body.toLowerCase() == "😌😌")) {
     return api.sendMessage("HaYe Mas0om", threadID);
   };
   
   if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏")) {
     return api.sendMessage("Jasy Tara mu ha Wsy tara Attitude ha🖐😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴")) {
     return api.sendMessage("ChaL Ja NaHa kRr Aa", threadID);
   };
   
   if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😪😪")) {
     return api.sendMessage("Aby Tri NoSe NiKaL Rhi 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤤") || (event.body.toLowerCase() == "🤤🤤")) {
     return api.sendMessage("Ral Mat Tapka MeKo ulTi Aa Rhi 🤮🤢", threadID);
   };
   
   if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋")) {
     return api.sendMessage("Yah ToTay Jesi Zuban Mt DiKha 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛")) {
     return api.sendMessage("Ye GanDi NiYat Sy Zuban Na DiKha 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝")) {
     return api.sendMessage("ABy mery Samny Zuban Na Nekal to Kat K tary Hat Ma Rakh Dn Ga😂🖐", threadID);
   };
   
   if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜")) {
     return api.sendMessage("BaRi MasTi ChaRi Chai TeReKo 1 Ankh Band KRrke ZuBan Bhir Aagyi 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤪") || (event.body.toLowerCase() == "🤪🤪")) {
     return api.sendMessage("Ye Ajeeb_0_GaReeb Muu Na BaNa 😂 CarT0on 🤣", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴")) {
     return api.sendMessage("SasTa Nasha KRr LiYa LagTa Hai 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔")) {
     return api.sendMessage("Wah Bhens Chor Phle GalTi kRo Phr Maskeen Sa Muu BaNa L0o😒😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥺🥺")) {
     return api.sendMessage("Ta Huwa My LoVe 🥺", threadID);
   };
   
   if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😬😬")) {
     return api.sendMessage("Kis Ki Baja Di 🤨🧐", threadID);
   };
   
   if ((event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😑😑")) {
     return api.sendMessage("Wha Muu Ke SaTh Ankhe Be Band H0o GYi 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐")) {
     return api.sendMessage("Ab B0oL Na 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶")) {
     return api.sendMessage("Nak T0o Thi Nhi Muu Be Gyb H0o GYa TeRa 😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐")) {
     return api.sendMessage("Ab Tri Awaz Ai Na T0o Me Alfi Sy Band Krunga 😒", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔")) {
     return api.sendMessage("baby Itna Na Sooxh Tary Pas Demag Ki Phly Sy Kamii Ha😂🖐🤔", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫")) {
     return api.sendMessage("Tri Yeh Ungli Tri He Nak Me DyDeni MaiNy 😒😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭")) {
     return api.sendMessage("😂😂😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🥱") || (event.body.toLowerCase() == "🥱")) {
     return api.sendMessage("AJa BaBe MeLy Pas S0o Jaa😜", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗🤗")) {
     return api.sendMessage("PhLe NaHa kRr Aa 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😱😱")) {
     return api.sendMessage("KYa HuWa 😱 SheSha DeKh LiYa KYa 😳", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨")) {
     return api.sendMessage("Tu Hushyar Ban kRr Na Dekh Main Hun Naw 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🧐") || (event.body.toLowerCase() == "🧐🧐")) {
     return api.sendMessage("Tu HaT Main DekhTa Hun 🧐🧐🧐", threadID);
   };
   
   if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒")) {
     return api.sendMessage("Aby asy na Dekh Pyair Ho.Gaye ga fr kaho gi ghr waly ni man rahy😵😂🖐🖐😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄")) {
     return api.sendMessage("Baby Asy na dekh kuxh kuxh hotaa ha ryyy😂🖐🙄", threadID);
   };
   
   if ((event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😤😤")) {
     return api.sendMessage("Ye BuLL Jesa MuU Na BaNa 😂", threadID);
   };
   
   if ((event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "😠😠")) {
     return api.sendMessage("BaBe GuSsa Nhi KarTy Ye L0o Umumuaahhhhh 😘", threadID);
   };
   
   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😡😡")) {
     return api.sendMessage("BaBe Ase GuSsa Nhi KrTy Naw Le L0o Umumuaahhhhh 😘😘😘", threadID);
   };
   
   if ((event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "🤬🤬")) {
     return api.sendMessage("Aww 😐", threadID);
   };
   
   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😞😞")) {
     return api.sendMessage("Aww Ta Huwa BaBe", threadID);
   };
   
      if ((event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😓😓")) {
     return api.sendMessage("☹", threadID);
   };
   
      if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😢😢")) {
     return api.sendMessage("Ta HuWa My Love 🥺", threadID);
   };
   
      if ((event.body.toLowerCase() == "☹") || (event.body.toLowerCase() == "☹☹")) {
     return api.sendMessage("awww 🥺", threadID);
   };
   
      if ((event.body.toLowerCase() == "🙁") || (event.body.toLowerCase() == "🙁🙁")) {
     return api.sendMessage("Aww ☹", threadID);
   };
   
      if ((event.body.toLowerCase() == "😕") || (event.body.toLowerCase() == "😕😕")) {
     return api.sendMessage("🙁🙁🙁", threadID);
   };
   
      if ((event.body.toLowerCase() == "😰") || (event.body.toLowerCase() == "😰😰")) {
     return api.sendMessage("Aww 😨", threadID);
   };
   
   
      if ((event.body.toLowerCase() == "😨") || (event.body.toLowerCase() == "😨😨")) {
     return api.sendMessage("😰😰😰", threadID);
   };
   
      if ((event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😧😧")) {
     return api.sendMessage("😳", threadID);
   };
   
      if ((event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😦😦")) {
     return api.sendMessage("😧", threadID);
   };
   
      if ((event.body.toLowerCase() == "😮") || (event.body.toLowerCase() == "😮😮")) {
     return api.sendMessage("Aby Muu Band kRr Marcher Gus JayGa Muu Main 😂😂😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😯") || (event.body.toLowerCase() == "😯😯")) {
     return api.sendMessage("😲", threadID);
   };
   
      if ((event.body.toLowerCase() == "😲") || (event.body.toLowerCase() == "😲😲")) {
     return api.sendMessage("😯", threadID);
   };
   
      if ((event.body.toLowerCase() == "😳") || (event.body.toLowerCase() == "😳😳")) {
     return api.sendMessage("Asy Ankhy nekal k kiya dekh rhy phl bar bot dekha ha kiya😂😳", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯")) {
     return api.sendMessage("Tary Sar py bhom kis ny phora 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😖😖")) {
     return api.sendMessage("Asa Muu Na BaNa 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "😣😣")) {
     return api.sendMessage("😣😣😣", threadID);
   };
   
      if ((event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😫")) {
     return api.sendMessage("ChaL HaT NoTanGi 😫😂😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😵") || (event.body.toLowerCase() == "😵😵")) {
     return api.sendMessage("Asa KYa DeKh LiYa 😳", threadID);
   };
   
      if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "sardi")) {
     return api.sendMessage("Aww BaBe  SarDi Lag Rhi T0o MeRe PaSs Ajao 🙈😜", threadID);
   };
   
      if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵")) {
     return api.sendMessage("NaHa Le 😂🥶", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤢") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Aaaaa Tho0oo", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "😷")) {
     return api.sendMessage("Are Ja Na MeKo Be BeMar KRrna KYa 🥺", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤒") || (event.body.toLowerCase() == "🤕")) {
     return api.sendMessage("Aww BaBe K0o Ta HuWa Idher Aow ThoRa Pyal L0o 😜💉💉💉", threadID);
   };
   
      if ((event.body.toLowerCase() == "😎") || (event.body.toLowerCase() == "😎😎")) {
     return api.sendMessage("ShoKian Na Mar 😂 Ghr Me DusRi Bar RoTi Nhi MilTi Uh k0o 😂😂😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇😇")) {
     return api.sendMessage("😇😇😇", threadID);
   };
   
      if ((event.body.toLowerCase() == "🥸") || (event.body.toLowerCase() == "🤓")) {
     return api.sendMessage("Anek WaLa Jin 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "🤡") || (event.body.toLowerCase() == "🤡🤡")) {
     return api.sendMessage("Aww S0o SweeT 😂 CarT0on", threadID);
   };
   
      if ((event.body.toLowerCase() == "😈") || (event.body.toLowerCase() == "👿")) {
     return api.sendMessage("Aww tary abhii seengh nekal aye😂🖐", threadID);
   };
   
      if ((event.body.toLowerCase() == "😹") || (event.body.toLowerCase() == "😹😹")) {
     return api.sendMessage("Ab yi Bili Jasy mU khol K group ma Virus Na Phelao😂🖐", threadID);
   };
   
      if ((event.body.toLowerCase() == "😺") || (event.body.toLowerCase() == "😸")) {
     return api.sendMessage("😼😼😼", threadID);
   };
   
      if ((event.body.toLowerCase() == "😼") || (event.body.toLowerCase() == "😼😼")) {
     return api.sendMessage("TeResy Axha T0o Billi iTra LeTi 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "💋") || (event.body.toLowerCase() == "💋💋💋")) {
     return api.sendMessage("Yah PaPpi ChaPpi Nhi kRr Kxh Kxh Nhi Bht KxH HoTa Hai 😂😂😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "❤") || (event.body.toLowerCase() == "💚")) {
     return api.sendMessage("🖤🧡💜💙🤎🤍", threadID);
   };
   
      if ((event.body.toLowerCase() == "🧡") || (event.body.toLowerCase() == "🤎")) {
     return api.sendMessage("❤🖤🤍🤎💚💜", threadID);
   };
   
      if ((event.body.toLowerCase() == "💜") || (event.body.toLowerCase() == "💙")) {
     return api.sendMessage("💚🤎🤍🖤❤🧡", threadID);
   };
   
         if ((event.body.toLowerCase() == "🖤") || (event.body.toLowerCase() == "🤍")) {
     return api.sendMessage("❤🧡💛💚💙💜🤎", threadID);
   };
   
      if ((event.body.toLowerCase() == "👻") || (event.body.toLowerCase() == "👻👻")) {
     return api.sendMessage("Bh0oT", threadID);
   };
   
      if ((event.body.toLowerCase() == "masoom") || (event.body.toLowerCase() == "Masoom")) {
     return api.sendMessage("Shaqal Sy masoom lgty ho 🥰 lkn hrkaton sy 🙂", threadID);
   };
   
      if ((event.body.toLowerCase() == "💉") || (event.body.toLowerCase() == "💊")) {
     return api.sendMessage("uh K0o KhuD K0o isKi ZaiDa Zarurat Hai 🤣", threadID);
   };
   
      if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
     return api.sendMessage("Sch Me Bander He Hai 😂", threadID);
   };
   
      if ((event.body.toLowerCase() == "love") || (event.body.toLowerCase() == "Pyaar")) {
     return api.sendMessage("Pyaar wo to A name ki larki sa karta hon ma 😘", threadID);
   };
   
      if ((event.body.toLowerCase() == "oye") || (event.body.toLowerCase() == "oyee")) {
     return api.sendMessage("0ye HoYe 😈", threadID);
   };
  
   if ((event.body.toLowerCase() == "Ok") || (event.body.toLowerCase() == "Okay")) {
     return api.sendMessage("KYa Ok🙄 Haan", threadID);
   };

   if ((event.body.toLowerCase() == "G") || (event.body.toLowerCase() == "Han G")) {
     return api.sendMessage(" H I J K L M N O P Q R S T U V W X Y Z 🙄", threadID);
   };

   if ((event.body.toLowerCase() == "Hmm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("Kya Hmm Seedha Seedha bolo naw Hayee Merry Mee😂🖐", threadID);
   };

   if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha g")) {
     return api.sendMessage("Han Ji 🙄 Jaan", threadID);
   };

   if ((event.body.toLowerCase() == "Janu") || (event.body.toLowerCase() == "jan")) {
     api.sendMessage({sticker : sticker}("Bolo Naw MeRi JaN🥰💙", threadID));
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "Faheem") || (event.body.toLowerCase() == "faheem")) {
     return api.sendMessage("Yes My Love <3", threadID);
   };
   if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var ms = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(ms, event.threadID, () => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 1)
    }, event.messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }