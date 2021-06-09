
/*  The Welcome To The Game II Assistant is built to help players of WTTG2
    Copyright (C) 2021 Fierce Thunder

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.  */

//==========================================================================Static Data
{
var sitedata = {
    "Bug Friendly":       {id:100,sub:["Store","FAQ","Noid","Join"]},
    "Cleaning Services":  {id:105,sub:["Burial","Freezing"]},
    "Cry Bitch":          {id:108,sub:["Login"]},
    "Don't Waste it":     {id:110,sub:["No","Yes"]},
    "Drone Spy":          {id:113,sub:["Videos","SpyForMe"]},
    "EnCrave":            {id:116,sub:["GateOpen"]},
    "Evidence Locker":    {id:118,sub:["Leaked","Confiscated","Contribute","Purchase"]},
    "Evil Collection":    {id:123,sub:["Pics","CreepyPics","RandomPics","Memes","Link","AB","AB2","Baby","Chat"]},
    "Eye":                {id:133},
    "Father Donald":      {id:134,sub:["Join"]},
    "Foot Doctor":        {id:136,sub:["MyFavoriteFeet","HomeMade","SendMePics"]},
    "Forgive Me":         {id:140,sub:["Confess"]},
    "Fortune Cookie":     {id:142},
    "Grandmas Fantasy":   {id:143,sub:["Older"]},
    "Heirloom":           {id:145,sub:["Quality","Specials","Containers","Order","PGPKey","WalletID","Error"]},
    "Hidden Pleasures":   {id:153,sub:["RequestSale","Range1","Range2","Range3","Range4","Range5","Message","Buy","SignIn"]},
    "I Love Cats":        {id:163,sub:["MyCats","Contact"]},
    "Is Evil":            {id:166},
    "Keep Sake":          {id:167},
    "Kill For Me":        {id:168,sub:["Targets","Instructions"]},
    "Milk Supply":        {id:171,sub:["MilkPictures"]},
    "Mortal Masks":       {id:173,sub:["Order","How"]},
    "Mutilation":         {id:176,sub:["Login","Join","NoWallet"]},
    "My Gut":             {id:180,sub:["Shop","Buy","Special","Contact"]},
    "Myriad":             {id:185},
    "Oneless":            {id:186},
    "Order Of Nine":      {id:187,sub:["Join"]},
    "Panty Sales":        {id:189},
    "Pay To Rape":        {id:190,sub:["FAQ","Pay"]},
    "Red Triangle":       {id:193},
    "Scream Bitch":       {id:194},
    "Share Your Genitals":{id:195},
    "St Louis Arch":      {id:196,sub:["Arch","Aliens","WhyDie"]},
    "Thanks For Visiting":{id:200,sub:["DontTalkToMe","Slide","BabyShrimp","Posture","Bar","EvilMonster","Slide2","Creepy","Face","FakeMain","Black","Numbers"]},
    "The Black Waves":    {id:213},
    "The Bomb Maker":     {id:214},
    "The Doll Maker":     {id:215,sub:["Enter"]},
    "The End Of NY":      {id:217},
    "The Granddaddy":     {id:218,sub:["Contact","Gallery","Error"]},
    "The Grey":           {id:222,sub:["Interius","Latus","Centrum","Inanis"]},
    "The Hall":           {id:227},
    "The Light Within":   {id:228,sub:["Saved"]},
    "The Loogaroo":       {id:230},
    "THE MAGISTRI":       {id:231,sub:["Enter","Join","Walk"]},
    "The Prey":           {id:235},
    "The Rule Of Three":  {id:236},
    "Vacation":           {id:237},
    "Warehouse 33":       {id:238,sub:["Warehouse1","Warehouse2","Warehouse4"]},
    "We Rock":            {id:242},
    "IAMHERE":            {id:243,times:":00 - :14"},
    "Borrow My Daughter": {id:244,times:":00 - :29"},
    "Deep Journal":       {id:245,times:":00 - :29",sub:["Page 2","Page 3"]},
    "YOU THERE?":         {id:248,times:":00 - :29"},
    "Ave Satan":          {id:249,times:":30 - :44"},
    "Fifty Seven":        {id:250,times:":30 - :44"},
    "Number Station":     {id:251,times:":30 - :44"},
    "Your Data":          {id:252,times:":30 - :44"},
    "THANATOS":           {id:253,times:":45 - :59"},
    "Little Friends":     {id:254,times:":45 - :59",sub:["Error"]},
    "Brutal Underground": {id:256,times:":30 - :59",sub:["Sign Up"]}
  }, wifidata = [
    {"position":0,"range":1,"level":0,"track":{"time":[960,660],"chance":["88","100"]},"channel":"1","name":"TP-LINK_8907_5G"},
    {"position":1,"range":1,"level":0,"track":{"time":[420,300],"chance":["82","100"]},"channel":"10","name":"TC8717T10"},
    {"position":1,"range":1,"level":0,"track":{"time":[480,330],"chance":["89","100"]},"channel":"1","name":"DDW35363"},
    {"position":1,"range":2,"level":0,"track":{"time":[510,360],"chance":["75","100"]},"channel":"3","name":"FreeWifi7899"},
    {"position":2,"range":1,"level":0,"track":{"time":[630,420],"chance":["70","100"]},"channel":"8","name":"doody"},
    {"position":3,"range":1,"level":0,"track":{"time":[300,210],"chance":["95","100"]},"channel":"7","name":"FreeWifiNoVirus"},
    
    {"position":0,"range":1,"level":1,"track":{"time":[360,240],"chance":["83","100"]},"channel":"8","probe":{"port":"260 - 300"},"name":"SSWIFI"},
    {"position":0,"range":1,"level":1,"track":{"time":[300,210],"chance":["65","100"]},"channel":"8","probe":{"port":"600 - 750"},"name":"D59709"},
    {"position":1,"range":1,"level":1,"track":{"time":[540,360],"chance":["65","100"]},"channel":"12","probe":{"port":"500 - 675"},"name":"PWF1382445"},
    {"position":1,"range":3,"level":1,"track":{"time":[450,330],"chance":["70","100"]},"channel":"5","probe":{"port":"350 - 550"},"name":"Chanyia"},
    {"position":2,"range":1,"level":1,"track":{"time":[540,390],"chance":["85","100"]},"channel":"3","probe":{"port":"900 - 975"},"name":"Flter"},
    {"position":2,"range":1,"level":1,"track":{"time":[720,480],"chance":["60","100"]},"channel":"3","probe":{"port":"485 - 715"},"name":"SuddenLink990"},
    {"position":3,"range":1,"level":1,"track":{"time":[660,450],"chance":["85","100"]},"channel":"7","probe":{"port":"455 - 520"},"name":"WIFIAF1A5D"},
    {"position":3,"range":3,"level":1,"track":{"time":[660,450],"chance":["69","100"]},"channel":"6","probe":{"port":"145 - 210"},"name":"tedata"},
    {"position":3,"range":3,"level":1,"track":{"time":[690,480],"chance":["74","100"]},"channel":"6","probe":{"port":"375 - 830"},"name":"mycci7471"},
    
    {"position":0,"range":1,"level":2,"track":{"time":[390,270],"chance":["48","100"]},"channel":"4","inject":{"count":"99","wait":"7","crash":"61","total":"450 - 670"},"name":"DA3CHICKZ"},
    {"position":0,"range":1,"level":2,"track":{"time":[480,330],"chance":["49","100"]},"channel":"6","inject":{"count":"96","wait":"11","crash":"39","total":"620 - 745"},"name":"UAPPY-FI"},
    {"position":0,"range":1,"level":2,"track":{"time":[540,360],"chance":["63","100"]},"channel":"7","inject":{"count":"42","wait":"8","crash":"41","total":"100 - 360"},"name":"Khaled"},
    {"position":1,"range":1,"level":2,"track":{"time":[810,570],"chance":["40","100"]},"channel":"4","inject":{"count":"100","wait":"3","crash":"58","total":"510 - 675"},"name":"NetflxnChillByMyself"},
    {"position":1,"range":1,"level":2,"track":{"time":[720,480],"chance":["44","100"]},"channel":"11","inject":{"count":"170","wait":"5","crash":"62","total":"650 - 950"},"name":"DevShareTWO"},
    {"position":1,"range":2,"level":2,"track":{"time":[540,360],"chance":["63","100"]},"channel":"12","inject":{"count":"146","wait":"7","crash":"58","total":"855 - 980"},"name":"WIRELESSNET2"},
    {"position":2,"range":1,"level":2,"track":{"time":[630,450],"chance":["65","100"]},"channel":"1","inject":{"count":"61","wait":"9","crash":"43","total":"220 - 475"},"name":"FBI Survellance Van"},
    {"position":2,"range":1,"level":2,"track":{"time":[780,540],"chance":["50","100"]},"channel":"7","inject":{"count":"78","wait":"9","crash":"47","total":"230 - 530"},"name":"Ataua"},
    {"position":2,"range":3,"level":2,"track":{"time":[600,420],"chance":["56","100"]},"channel":"12","inject":{"count":"63","wait":"7","crash":"41","total":"275 - 320"},"name":"swsecure"},
    {"position":3,"range":1,"level":2,"track":{"time":[450,300],"chance":["46","100"]},"channel":"5","inject":{"count":"79","wait":"5","crash":"72","total":"540 - 800"},"name":"ali"},
    {"position":3,"range":1,"level":2,"track":{"time":[630,420],"chance":["54","100"]},"channel":"9","inject":{"count":"78","wait":"6","crash":"78","total":"87 - 660"},"name":"SENDemo"},

    {"position":0,"range":1,"level":3,"track":{"time":[1020,720],"chance":["29","100"]},"channel":"2","inject":{"count":"83","wait":"3","crash":"66","total":"660 - 840"},"name":"Ethical_Hacker"},
    {"position":0,"range":1,"level":3,"track":{"time":[840,600],"chance":["29","100"]},"channel":"7","inject":{"count":"67","wait":"6","crash":"37","total":"797 - 971"},"name":"YDidIOrderThisWater"},
    {"position":0,"range":1,"level":3,"track":{"time":[1170,810],"chance":["26","100"]},"channel":"1","inject":{"count":"64","wait":"12","crash":"29","total":"600 - 808"},"name":"SnuffBox"},
    {"position":0,"range":1,"level":3,"track":{"time":[690,480],"chance":["43","100"]},"channel":"1","inject":{"count":"29","wait":"10","crash":"32","total":"300 - 450"},"name":"MaxiumBlack"},
    {"position":0,"range":1,"level":3,"track":{"time":[960,660],"chance":["36","100"]},"channel":"4","inject":{"count":"78","wait":"3","crash":"53","total":"890 - 990"},"name":"Bring Beer to 504"},
    {"position":1,"range":1,"level":3,"track":{"time":[720,510],"chance":["35","100"]},"channel":"7","inject":{"count":"4","wait":"4","crash":"51","total":"50 - 98"},"name":"KPN Fon"},
    {"position":1,"range":2,"level":3,"track":{"time":[750,510],"chance":["43","100"]},"channel":"7","inject":{"count":"85","wait":"7","crash":"30","total":"820 - 950"},"name":"SilenceOfTheLANS"},
    {"position":1,"range":3,"level":3,"track":{"time":[870,600],"chance":["35","100"]},"channel":"12","inject":{"count":"54","wait":"10","crash":"29","total":"432 - 790"},"name":"DrAdelDink"},
    {"position":2,"range":1,"level":3,"track":{"time":[840,570],"chance":["26","100"]},"channel":"5","inject":{"count":"19","wait":"8","crash":"47","total":"100 - 300"},"name":"TellMyWifiLoveHer"},
    {"position":2,"range":1,"level":3,"track":{"time":[1020,720],"chance":["30","100"]},"channel":"3","inject":{"count":"63","wait":"7","crash":"57","total":"500 - 708"},"name":"PHATCLOUD5"},
    {"position":2,"range":3,"level":3,"track":{"time":[1500,1050],"chance":["5","100"]},"channel":"5","inject":{"count":"49","wait":"15","crash":"80","total":"950 - 999"},"name":"DOSNET"},
    {"position":2,"range":3,"level":3,"track":{"time":[750,540],"chance":["28","100"]},"channel":"10","inject":{"count":"74","wait":"10","crash":"34","total":"477 - 945"},"name":"RideThisCrazyWave"},
    {"position":3,"range":1,"level":3,"track":{"time":[570,390],"chance":["45","100"]},"channel":"10","inject":{"count":"19","wait":"4","crash":"41","total":"154 - 249"},"name":"WINSLOWS"},
    {"position":3,"range":1,"level":3,"track":{"time":[720,510],"chance":["41","100"]},"channel":"6","inject":{"count":"33","wait":"11","crash":"36","total":"250 - 477"},"name":"JonesLaw"},
    {"position":3,"range":3,"level":3,"track":{"time":[780,540],"chance":["32","100"]},"channel":"4","inject":{"count":"34","wait":"8","crash":"37","total":"273 - 506"},"name":"Big Dave Network"},
  
    {"position":3,"range":1,"level":2,"track":{"time":[810,570],"chance":["65","100"]},"channel":"5","inject":{"count":"29","wait":"12","crash":"46","total":"55 - 180"},"name":"DonaldsWifi","secret":1},
    {"position":2,"range":1,"level":3,"track":{"time":[720,510],"chance":["21","100"]},"channel":"4","inject":{"count":"27","wait":"8","crash":"76","total":"400 - 556"},"name":"Hidden Network","secret":1}
  ], tenantdata = [
    {"doll":0,"sex":0,"age":32,"name":"Addyson Pearson","note":"Has very LOUD dog. Barks a lot."},
    {"doll":0,"sex":0,"age":56,"name":"Alden Chambers","note":"Always wears gloves"},
    {"doll":0,"sex":0,"age":51,"name":"Alfred Crosby","note":"You can hear the sounds of his mistress beating him into submission every Sunday and Thursday from 7pm-10pm. Would recommend ear plugs for those days."},
    {"doll":1,"sex":1,"age":18,"name":"Alice Shaw","note":"Is a flute player"},
    {"doll":0,"sex":0,"age":34,"name":"Alonso Frost","note":"Argues with wife"},
    {"doll":1,"sex":1,"age":27,"name":"Ashlynn Rangel","note":"Studying for PHD, always pays on time."},
    {"doll":1,"sex":1,"age":29,"name":"Ayana Armstrong","note":"Always wears black, very mysterious. Guy named Adam visits her often."},
    {"doll":0,"sex":0,"age":41,"name":"Brayden Kelly","note":"Way too noisy, cops called several times for disturbances."},
    {"doll":0,"sex":0,"age":52,"name":"Brendan Davenport","note":"Complaints from members staying at this apartment complex due to hearing strange noises. Final warning."},
    {"doll":0,"sex":0,"age":43,"name":"Brenden Fox","note":"Has severe body odor."},
    {"doll":0,"sex":0,"age":43,"name":"Brennan Mcgee","note":"Is clean"},
    {"doll":1,"sex":1,"age":35,"name":"Bria Lozano","note":"Often comes drunk at night. Has a lot of bruises."},
    {"doll":1,"sex":1,"age":42,"name":"Carissa Whitehead","note":"Has teenage kids, one is a typical teen and causes problems."},
    {"doll":0,"sex":0,"age":64,"name":"Carlos Moon","note":"Creeps out female tenants"},
    {"doll":1,"sex":1,"age":18,"name":"Clare Holloway","note":"Works late nights and always pays rent with cash."},
    {"doll":0,"sex":0,"age":31,"name":"Cristian Ross","note":"Always smells peculiar (formaldehyde?)"},
    {"doll":0,"sex":0,"age":21,"name":"Dale Jackson","note":"Has track marks"},
    {"doll":0,"sex":0,"age":33,"name":"Damon Sullivan","note":"Performs local volunteer work"},
    {"doll":1,"sex":1,"age":38,"name":"Dana Steele","note":"Clean freak, really werid. Leaves shoes outside door. "},
    {"doll":0,"sex":0,"age":37,"name":"Darren Alexander","note":"Is a registered sex offender"},
    {"doll":0,"sex":0,"age":48,"name":"Dawson Blevins","note":"Often has nieces visit him."},
    {"doll":0,"sex":0,"age":40,"name":"Deacon Woodward","note":"Usually late on rent"},
    {"doll":1,"sex":1,"age":37,"name":"Delilah Walters","note":"Havent seen in weeks. No response, mail is piling up."},
    {"doll":1,"sex":1,"age":24,"name":"Diya Marquez","note":"Always has shady people around."},
    {"doll":1,"sex":0,"age":60,"name":"Drake Clay","note":"Has one child. Female."},
    {"doll":1,"sex":1,"age":19,"name":"Emma Everett","note":"Plumbing clogged again. Think she's doing it on purpose."},
    {"doll":0,"sex":0,"age":51,"name":"Erik Tucker","note":"Currently overseas"},
    {"doll":0,"sex":0,"age":38,"name":"Fletcher Salazar","note":"Probably a meth addict."},
    {"doll":1,"sex":1,"age":22,"name":"Hallie Nicholson","note":"Is a night owl."},
    {"doll":1,"sex":1,"age":39,"name":"Haylie Morris","note":"Has the consistency to talk everyones ear off."},
    {"doll":1,"sex":1,"age":40,"name":"Hillary Rocha","note":"Works out a lot, alway takes early morning jobs."},
    {"doll":0,"sex":0,"age":25,"name":"Hudson Raymond","note":"Divorced"},
    {"doll":0,"sex":0,"age":51,"name":"Jack Ferguson","note":"Wants to move two flights up"},
    {"doll":1,"sex":1,"age":23,"name":"Janiah Osborn","note":"Recently made redundant. May be late on payment this month."},
    {"doll":1,"sex":1,"age":35,"name":"Jenny Sutton","note":"Is a late payer... Likely an alcoholic apartment smells of strong liquor"},
    {"doll":0,"sex":0,"age":21,"name":"Jordyn Dalton","note":"Is currently out of town for family matters. Will be back at the end of the month. Rent payment expected to be made on schedule."},
    {"doll":0,"sex":0,"age":46,"name":"Keith Cooke","note":"Keeps some interesting \"surprises\" underneath the bathroom floorboards."},
    {"doll":1,"sex":1,"age":26,"name":"Kellen Blake","note":"Works night shifts."},
    {"doll":1,"sex":1,"age":37,"name":"Kylie Hogan","note":"Has two daughters."},
    {"doll":1,"sex":1,"age":19,"name":"Larissa Clay","note":"Carries her chihuahua in her purse."},
    {"doll":1,"sex":1,"age":28,"name":"Lea Chen","note":"Always orders take out, never leaves apartment."},
    {"doll":1,"sex":1,"age":21,"name":"Lilia Holder","note":"Hair smells like lavender"},
    {"doll":1,"sex":1,"age":21,"name":"Lilian Tyler","note":"Typical college drunk."},
    {"doll":1,"sex":1,"age":41,"name":"Londyn Morales","note":"Very nice, always brings down cookies."},
    {"doll":0,"sex":0,"age":29,"name":"Lucas Holmes","note":"I hear strange noises coming from the apartment at odd hours. I have received no complaints yet so it seems there is nothing to be concerned about at the moment but... the noises... I have never heard anything like it before."},
    {"doll":1,"sex":1,"age":18,"name":"Marie Downs","note":"Parents visit often, worried about her. Not sure about this one."},
    {"doll":0,"sex":0,"age":73,"name":"Mason Santiago","note":"Walks with a limp."},
    {"doll":0,"sex":0,"age":59,"name":"Micah Patel","note":"Sleep walks"},
    {"doll":1,"sex":1,"age":29,"name":"Miriam Schwartz","note":"Neglects house maintenance"},
    {"doll":0,"sex":0,"age":83,"name":"Nash Huynh","note":"Veteran"},
    {"doll":1,"sex":1,"age":33,"name":"Noe Willis","note":"Aspiring singer, plays piano all day and signs."},
    {"doll":1,"sex":1,"age":25,"name":"Reese Beasley","note":"Has a pet turtle, works as a nurse in the nearby hospital"},
    {"doll":0,"sex":0,"age":21,"name":"Richard Vincent","note":"for sure not getting their security deposit back"},
    {"doll":0,"sex":0,"age":29,"name":"Ronnie Park","note":"In last 3 years he has a friendly beautiful wife that i ever met, but since his wife's death he never gooes outside."},
    {"doll":1,"sex":1,"age":36,"name":"Rosemary Holt","note":"Watches adult films very loudly."},
    {"doll":0,"sex":0,"age":23,"name":"Shawn Green","note":"Always pays rent 1 day early, and deathly silent, nice man though."},
    {"doll":1,"sex":1,"age":45,"name":"Shea Holden","note":"Reeks of cigarettes, avid chain smoker."},
    {"doll":1,"sex":1,"age":27,"name":"Skylar Pennington","note":"Is out on vacation for 3 months"},
    {"doll":0,"sex":0,"age":36,"name":"Tommy Mata","note":"Rarely comes out of apartment and is socially awkward."},
    {"doll":1,"sex":0,"age":43,"name":"Tommy Ryan","note":"Has 2 kids, boy, girl."},
    {"doll":0,"sex":0,"age":18,"name":"Walker Johnston","note":"Constant problems with police"}
  ], tips = [
    "Remember to check in the source code",
    "You shouldnt check the peep hole",
    "Hacks are the best way to gain DosCoin",
    "Zonewall will not give you DosCoin for backdoors",
    "Listen for the door",
    "The game includes a lot of dead websites that will never be open",
    "More secure networks are faster and safer",
    "Dont forget to log off when you leave the PC",
    "Remember to switch your wifis",
    "Dont forget the Breather",
    "If possible, you should save up for key cue",
    "Remember to practice your hacking skills",
    "Press up and down in console to view command history",
    "You can't force hacks in 1337 mode",
    "Dont run through doors, you don't know who might be there",
    "Dont forget your friend in the window",
    "Remember to grab the flashlight",
    "Say hi to Lucas for me",
    "The Noir are not good at hugs",
    "Avoid the alley later in the game",
    "HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAH",
    "Dont look behind you",
    "Move your router to change your wifi list",
    "Dont underestimate the Doll Maker",
    "Dont worry about the noises behind you, they mean nothing... probably",
	"Be quiet when hiding or he will find you",
	"Dont waste the flashlight, you dont want to be stuck in the dark",
	"Error 418 I am a teapot"
  ], guidedata = [
    {"name":`<i class="fa fa-info-circle fa-lg"></i> About`,"content":`
    <h1>About</h1>
      <p>Created by: FierceThundr_</p>
      <p>Sounds and images used are property of reflect studios<br>Welcome to The Game II is property of reflect studios</p>
      <p><i>Started July 5th 2020</i><br><i>Updated May 18th 2021</i></p>
	  <p><a href="https://github.com/FierceThundr/wttg2-assistant" target="_blank" rel="noreferrer">Github Page</a></p>
    <h3>Information Sources</h3>
      <p>
        <a href="https://cdn.discordapp.com/attachments/572088008723922954/572089747649069056/Welcome_to_the_Game_II_WiFi_Table.xlsx" target="_blank" rel="noreferrer">Wifi data ~Nasko222</a><br>
        <a href="https://welcometothegame.fandom.com/wiki/Sound_Files_(WTTG2)" target="_blank" rel="noreferrer">Sound Files</a><br>
        <a href="https://www.speedrun.com/wttg2/guide/h2pkg" target="_blank" rel="noreferrer">Website and Key information ~Insym</a><br>
		<a href="https://www.speedrun.com/wttg2/resources" target="_blank" rel="noreferrer">Original Click Point Locations ~Shadowk222</a><br>
		<a target="_blank" rel="noreferrer">Improved Click Point Locations ~Nasko222</a><br>
        <a target="_blank" rel="noreferrer">Wttg2 Tenant Data ~Lutonite</a><br>
        <a target="_blank" rel="noreferrer">Information Assistance ~Nasko222</a>
      </p>
      <p>
        <a href="https://fontawesome.com/v4.7.0/" target="_blank" rel="noreferrer">Symbols</a><br>
        <a href="https://www.svgbackgrounds.com" target="_blank" rel="noreferrer">Website Background</a><br>
        <a href="http://grsmto.github.io/simplebar/" target="_blank" rel="noreferrer">Custom Scrollbars</a>
      </p> 
    <h3>Special Thanks</h3> 
      <p>
        <a href="https://www.twitch.tv/divineshadow_18" target="_blank" rel="noreferrer"><i class="fa fa-twitch fa-lg"></i>DivineShadow_18</a><br>
        <a href="https://www.twitch.tv/chexparty" target="_blank" rel="noreferrer"><i class="fa fa-twitch fa-lg"></i>ChexParty</a><br>
        <a href="https://www.twitch.tv/insym" target="_blank" rel="noreferrer"><i class="fa fa-twitch fa-lg"></i>Insym</a><br>
        <a href="https://www.twitch.tv/nasko222n" target="_blank" rel="noreferrer"><i class="fa fa-twitch fa-lg"></i>Nasko222n</a><br>
        <a href="https://www.twitch.tv/superfreshness" target="_blank" rel="noreferrer"><i class="fa fa-twitch fa-lg"></i>Superfreshness</a>
      </p>`},
    {"name":`<i class="fa fa-circle fa-lg"></i> Tutorial`,"content":`
    <h1>Tutorial</h1>
      <p>Thank you for using my welcome to the game assistant, I will try to make this section as straight to the point so anyone reading can get on their way.</p>
    <details>
      <summary><h3>The Wiki Block</h3></summary>
      <p>The wiki block is the primary note taking tool and can be immensely helpful if you know how to use it. To begin, copy the website list from a wiki page in the game by using Ctrl+A and Ctrl+C, then paste the contents into the textarea at the top of the block. It will then scan and determine the websites on your wiki. Once your wiki sites are processed you will see their names, sub-pages, availability, and multiple markers. The markers can be used to indicate that you've searched a site so that you never forget where you need to search in the end-game for remaining keys. The buttons provided are for <i class="fa fa-search fa-lg"></i> manual searches, <i class="fa fa-search-plus fa-lg"> key cue aided searches, and whether a <i class="fa fa-key fa-lg"></i> key or <i class="fa fa-link fa-lg"></i> link has been found respectively. The final feature that may need explaining is the <i class="fa fa-mouse-pointer fa-lg"></i> mouse button, clicking on it will show you a copy of the site you've clicked on with multiple indicators that show the game's predetermined key click points.</p> 
    </details>
    <details>
      <summary><h3>The Notes Block</h3></summary>
      <p>The notes block is quite self-explanatory. The main purpose of this is that of a basic notepad that you can use to store keys, wiki links, and anything else you deem important. However, an additional feature is that any keys pasted into the textarea will be saved and compiled into the master key as you progressively find and enter the eight hidden keys.</p>
    </details>
    <details>
      <summary><h3>The Wifi Block</h3></summary>
      <p>The wifi block allows you to survey the many wifi networks present in the game. It will also information useful for cracking and accessing such wifis. Along with this, the block has password fields and an inbuilt tracking timer that will play a warning when you have one minute remaining to get off a network before the cops trace you.</p>
    </details>
    <details>
      <summary><h3>The Tenant Block</h3></summary>
      <p>The tenant block can be used to view a database of tenants of Clint's apartment. It provides their ages, names, and their notes from the lobby computer. Along with this, it will also tell you if the tenant is a valid victim for the Doll Maker.</p>
    </details>
    <details>
      <summary><h3>The Info Block</h3></summary>
      <p>The information block is the background of this tool and provides various features. These include project credits and resources, guides for threats and important skills, customization settings, and an area in which you can find ways provide feedback on this project.</p>
    </details>
    <p><b>With that, you have everything you need to know to use this tool, get on out there and beat this game!</b></p>`},
    {"name":`<i class="fa fa-circle fa-lg"></i> The Basics`,"content":`
    <h1>The Basics</h1> 
      <p>Welcome to the Game II has what seems to be a very simple task at first, just search the Deep Web for 8 hidden hashes and generate 250 DosCoin in the process. But there is a reason the achievement for beating the game is named "The 1%". But I don't want to get ahead of myself, Let's start from the bottom.</p>
      
      <details>
        <summary><h3>The Computer</h3></summary>
        <p>For the majority of the game, you will be stationed at your computer completing various tasks related to DosCoin generation and hash searching. To aid in this task, you have many files and programs on your desktop.</p>
        
        <details>
          <summary><h4>A.N.N</h4></summary>
          <p>A.N.N (Anonymous Node Network) is your Deep Web browser which you will be utilizing to find keys and navigate the web. It is mostly self explainatory to operate... You have the arrows to go forward or back a page, the home button to jump to wiki #1, the refresh button, and there is one more button on the right of the URL bar that opens the source code of the current website as well. In addition to wiki #1, two more can be found via searching pages. If you wish to know how to search the Deep Web, it will be covered in a separate section below.</p>
        </details>
          
        <details>
          <summary><h4>ZeroDay Market</h4></summary>
          <p>The ZeroDay Market can be used throughout the game to buy critical software and tools to aid in defending yourself or searching the Deep Web. The following list includes all available items...</p>
          <ul>
            <li>Skybreak is a wifi cracking tool. The basic installation only allows for WEP cracking, but can be upgraded</li>
            <li>Skybreak WPA lib is a library that can be added to Skybreak to allow the cracking of WPA networks</li>
            <li>Skybreak WPA2 lib is a library that can be added to Skybreak to allow the cracking of WPA2 networks</li>
            <li>Backdoor Hacks are cheap consumables that reward DosCoin for successfully defending against hacks (Excluding ZoneWall)</li>
            <li>Motion Alert is a simple tool that pairs with an item purchasable from the Shadow Market. It will create an auditory alert when a motion sensor is tripped.</li>
            <li>VPNs can be used to suppress hacks and can be toggled at will to control whether hacks can occur. Additionally, buying more levels makes it more effective.</li>
            <li>Key Cue is a straightforward, but important tool for searching. It is an add-on to A.N.N that will put a key symbol on the bottom right corner of the browser if it detects a key on the current page (or sub-page).</li>
            <li>VWipes can be used to scan for viruses and remove them. Viruses can be obtained when hacks are failed and can be very problematic.</li>
          </ul>
        </details>
          
        <details>
          <summary><h4>Shadow Market</h4></summary>
          <p>The Shadow Market can be used throughtout the game to buy important hardware items that will be useful throughout the game. The items sold are as follows...</p>
          <ul>
            <li>Wifi Dongle Level 2 is a more capable wifi dongle that allows faster browsing and access to additional wifi networks.</li>
            <li>Wifi Dongle Level 3 is the most capable wifi dongle in the game that allows faster browsing and access to all wifi networks.</li>
            <li>Motion Sensors are tools that can be used to detect movement outside of your apartment. These items are only effective on the hitman.</li>
            <li>Remote VPNs are DosCoin generators that can be placed around the building.</li>
            <li>Police Scanner is a device that allows you to listen in on police communications. If you know what to listen for it can help predict when the police may attempt to raid you.</li>
            <li>LOLPY Disc is a tool that can be used to hack the lobby computer to access the tenant database. It is used soley for the Doll Maker side quest.</li>
            <li>Blue Whisper is a device that allows you to remotely hear sounds produced by your PC. Examples being the Motion Alert warning and website sounds.</li>
          </ul>
        </details>
          
        <details>
          <summary><h4>Notes</h4></summary>
          <p>This section is quite self-explanatory. It is the in-game note taking program that can be used to store keys, passwords, or wiki addresses.</p>
        </details>
          
        <details>
          <summary><h4>Noir Tunnel</h4></summary>
          <p>The Noir Tunnel is your ultimate goal at the end of the game. To beat the game, you must enter the compiled master key into the tunnel and pay 250 DosCoin. At which point ███ ████ ████ ████ ███ ███ ████ ██ █████ ████ ███ █████ ██████.</p>
        </details>
        
        <details>
          <summary><h4>Skybreak</h4></summary>
          <p>Skybreak is a wifi cracking tool that can be purchased from the ZeroDay Market to hack into additional wifi networks. Additionally, libraries can be purchased to allow cracking of better networks. If you want to know how to crack networks, visit the cracking guide.</p>
        </details>
          
        <details>
          <summary><h4>The Status Bar</h4></summary>
          <p>The Status Bar at the top of the computer screen includes many menus and buttons you will use to be able to utilize throughout the game. Going from left to right you have...</p>
          <ul>
            <li>The DosCoin icon shows you your current balance of DosCoin. Additionally, clicking on it will allow you to view information about placed remote VPNs and their performance. It lists each VPNs yield and time between yields.</li>
            <li>The Backdoor Hack label lists how many backdoor hacks you currently have installed.</li>
            <li>In the center you can see the in-game time displayed. It runs two times faster than real life time.</li>
            <li>The VPN Icon allows you to view and manage purchased any VPNs.</li>
            <li>The Motion Alert icon can be used to view and monitor any placed motion sensors. In addition, the icon will blink if a motion sensor is triggered and Sound Alert is pruchased.</li>
            <li>The Wifi Icon will be quite familiar to those who use PCs. It allows you to view nearby networks and log into them.</li>
            <li>The Sound Icon allows you to mute your PCs volume. An important note, doing this will mute ALL SOUND produced by your PC at the same time.</li>
            <li>The Power Icon can be clicked to shutdown your PC.</li>
          </ul>
        </details>
        <br>
      </details>
      <details>   
        <summary><h3>The Apartment</h3></summary>
        <p>When inside the computer you can right click to exit the computer where you will be able to look around and see your desk. Here you can reboot your pc by interacting with your PC on the right of your desk. By right clicking again you will be able to get up and travel around your room. While there is not much to see, there are some important things to note. First, your bedside table has a flashlight which you will need later in the game. Second, the four corners of your room each have different sets of lights with their own switch. While their purpose will not be discussed here, you should keep note of them. Third, if you look on the left of your desk you will see your basic wifi dongle. It can be picked up and moved between 4 spots in your room, these spots include the window, the desk, the bedside table, and the table on your balcony. Moving your dongle to a new location will change the list of networks available on your PC, this can be used to refresh your list with new networks. Finally, the closet next to the balcony and the bathroom shower can be used as hiding places. Be mindful if you have not turned off your mic in your game settings as the game will listen to it and will deem you not truly hidden if you are making noise. These hiding places are relevant for a threat called the hitman that is discussed in another guide.</p>
      </details>
      <details>
        <summary><h3>The Building</h3></summary>
        <p>Once you exit your apartment you will be in a hallway located on the 8th floor. Upon entering the stairwell, you will be able to freely travel up and down to other floors. The various other floors are relevant to the Doll Maker side quest and the placement of Remote VPNs. The most important location you can access via the stairwell is the lobby which can be found on the bottom floor. There you can access the lobby computer and exit the front doors to visit the alley. All Shadow Market purchases will be shipped by drone to the end of the alley. Additionally, there is a small closet located on the right side of the alleyway, it can be used in the event a threat called the Breather becomes active.</p>
      </details>
      <details>
        <summary><h3>Basic Skills</h3></summary>
        <br>
        <details>
          <summary><h4>Searching for Keys</h4></summary>
          <p>Searching for hashes and additional Wikis is a very important skill you will need to learn to beat this game. Keys always have a number followed by a dash and a random string of 12 alphanumeric characters. 1 - aWNrIGJyb3du It is quite easy to these once you know where to look. Firstly, keys can be hidden in plain sight, this of course is the easiest and most straightforward method of which they can be hidden on a page. Secondly, keys and the link to Deep Wiki 2 can be hidden in a pages source code. This method can be more unpredictable, but can be quite easy if you know what to look for. <i>(Additionally, the link to wiki 2 can only be found on the first page of every website)</i> All keys or links hidden in this way will be hidden inside of an HTML comment which looks like the following. &lt;!-- 1 - aWNrIGJyb3du --&gt; Finally, keys may be hidden in a site behind a click point. This method is the hardest as it requires you to find and click on a certain word or picture in a site to reveal keys. To do this, you may either memorize the locations or use a guide. Once you find a functional clickpoint a sound will be played and either the key will appear on the page or as a file on your desktop.</p>
        </details>
        <br>
      </details>
      <details>
        <summary><h3>Events</h3></summary>
        <p>Finally, there are two events that you may encounter during the time you play. The first is hacks, these are small minigames you will be given at random. They have dedicated sections in this guide. The second is blackouts, during these events your PC will shut down and your lights will go off. To fix the lights you must navigate to the staiwell and enter the red door on the left to flip the breaker back on.</p>
      </details>
        `},
    {"name":`<i class="fa fa-circle fa-lg"></i> The Police`,"content":`
    <h1>The Police</h1>
      <p>The police are the easiest threat in the game to avoid. To avoid them you must switch wifi networks before you exceed their respective tracking timers. Though if you forget to switch, the game only has a certain chance to trigger the swat team to break down your door based on the network you stayed on. <i>(If they are triggered, they will wait until you approach your front door or the stairwell door of floor eight before causing a game over.)</i> Despite this, you should avoid gambling on that chance.</p> <p>The task of avoiding the cops can be made easier by purchasing skybreak from the ZeroDay Market and cracking higher security networks. Not only will they give you more time to breath, they often perform better.</p>
      <p><i>(In 1337 mode the tracking rates are shortened which allow the police to find you faster and with a garunteed chance of success)</i></p>
      <details>
        <summary><b>Notes</b></summary>
        <ul>
          <li>Remember to switch wifi often</li>
          <li>Hacking into more secure networks using skybreak will allow you more time between switching networks</li>
        </ul>
      </details>`},
    {"name":`<i class="fa fa-circle fa-lg"></i> The Hitman`,"content":`
    <h1>The Hitman</h1>
      <p>The Hitman (Also known as Lucas Kumiega) is an enemy that becomes active deeper into the game, they will become active after you have gone into three pages that have keys or after you accrue a certain amount of difficulty points by other methods. You can check whether or not they are active by checking if the window to the left of your desk is open. <i>(Please note that this is simplified for brevity, go to the bottom of this quide for a full explaination)</i></p>
      <p><i>(In 1337 mode the Hitman will be active immediately)</i></p>
      <p>The Hitman is a very difficult enemy to beat due to various reasons, but let's start from the bottom.</p>
      <ol>
        <li>Remember to always lock your door. The Hitman is the only threat this mechanic is relevant to, but you should practice doing this regularly.</li>
        <li>Make sure that you can hear the lockpicking sound cue. <i>(Which can be found below)</i> Normally this is the only way to identify that the hitman is at your door and preparing to break in.</li>
        <li>Purchase and place motion sensors in addition to buying sound alert. This will give you a more effective method to know when the hitman is coming to your door in addition to giving you more time to hide. <i>(The motion sensors should be placed on the wall on both ends of the hallway, as the hitman can approach from both sides of the hallway)</i></li>
      </ol>
      <p>When you know the Hitman is currently preparing to barge in you must turn of your computer and hide in either the shower in the bathroom or the closet near your balcony. In both cases you must be quiet as to not alert the hitman. <i>(This is only relevant if you have the mic enabled in your settings)</i> Also note that if you do not turn off the computer the hitman can erase notes saved into the games internal notepad in addition to stealing portions of your DosCoin balance. During the time he is in your apartment, stay in your hiding place until you hear him leave. <i>(Sound can be found below)</i> You can affect the time he is in your apartment by turning off more lights in the seconds before you hide and prior.</p>
	  <p>In addition to encountering the Hitman as he pays a visit to your apartment it is possible for them to kill you when returning to your apartment if they spawn when you are not at the apartment. Unfortunately, if this rare event occurs it is impossible to mitigate and you will die the next time you open a hallway door.</p>
      <details>
        <summary><b>Hitman Activation</b></summary>
        <p>The Hitman activates based off of a system of difficulty points in the game, this system has a couple of factors that feed into it. For every key you find, you gain one difficulty point. If you are after 1 AM you get another. Lastly, you can gain a difficulty point for every 3 forced hacks. <i>(Force hacking can be found in the exploits section)</i> Whenever you get 3 difficulty points in total, the Hitman will activate and the window of your apartment will open. However, in 1337 mode you automatically start with 8 difficulty points.</p>
      </details>
      <details>
        <summary><b>Hitman Simulater</b></summary>
        <p>If you want to work on improving your ability to hear the Hitmans lockpicking sound cue, I have created a web version of a tool created by a Welcome to the Game modder named Nasko. This tool can be found on the left side of the info block in the guide list.</p>
      </details>
      <details>
        <summary><b>Hitman Sound Cues</b></summary>
        <h4>Lockpicking</h4>
          <audio controls><source src="Assets/Doorknob.wav" type="audio/ogg">Your browser does not support the audio element.</audio>
        <h4>Hitman Leaving</h4>
          <audio controls><source src="Assets/Softdoorshut.ogg" type="audio/ogg">Your browser does not support the audio element.</audio>
        <br><br>
      </details>
      <details>
        <summary><b>Notes</b></summary>
        <ul>
          <li>The default sound cue for the hitman is very faint, you should set up your sound options to mitigate this</li>
          <li>The hitman can erase the in-game notepad if the PC is not turned off during an encounter with him</li>
          <li>Your apartment lights affect how long the hitman stays during his visits, the more off the faster he leaves</li>
          <li>If the Hitman is at the door he can kill you if you use the peep hole</li><li>It is a good investment to buy a pair of motion sensors and a sound alert</li>
        </ul>
      </details>`},
    {"name":`<i class="fa fa-circle fa-lg"></i> The Noir`,"content":`
    <h1>The Noir</h1>
      <p>The Noir are a threat prevalent in the game. They appear randomly in various places such as in the apartment, the apartment window, the hallway, behind doors, and in rare cases behind the gate in back of the alley.</p>
      <p>They are a basic threat to mitigate, but can quite easily catch those unfamiliar with them. To make them go away, turn around as soon as you see them and count to ten. After this they should be gone. If not, repeat the process. However, they pose a more active threat when they spawn behind doorways. This often catches players who are attempting to rush to and from the alley/lobby and back as fast as possible. In addition, the Noir have a chance to instantly kill you if you have at least two lights turned off in your apartment. <i>(For more details of the Noir insta-kill, check below)</i>
      <details>
        <summary><b>Noir insta-kill</b></summary>
        <p>The noir insta-kill is one of the most dangerous aspects of the Noir. It allows the Noir to instantly kill the player if a few criteria are met.</p>
        <ul>
          <li>At least two lights in the apartment are off</li>
          <li>You have at least 4 difficulty points</li>
          <li>No other threat is currently active</li>
        </ul>
        <p>Noir will check if these criteria are met every 120 seconds, and if they are met you will be killed the next time you stand from your desk.</p>
        <details>
          <summary><h4>Difficulty Points</h4></summary>
          <p>The game has a system of difficulty points that affect how aggressive enemies are. For every key you find, you gain one difficulty point. If you are after 1 AM you get another. Lastly, you can gain a difficulty point for every 3 forced hacks you perform. However, in 1337 mode you automatically start with 8 difficulty points which forces killers to start at maximum aggression.</p>
        </details>
        <br>
      </details>
      </details>
      <details>
        <summary><b>Notes</b></summary>
        <ul>
          <li>It is advised that you do not run through doors</li>
          <li>The Noir are more active in darkness, be careful if you turn your lights off or if the power goes out</li>
          <li>Make sure to occasionally check for the Noir in the window, on the balcony, and in the apartment</li>
        </ul>
      </details>`},
    {"name":`<i class="fa fa-circle fa-lg"></i> The Breather`,"content":`
    <h1>The Breather</h1>
      <p>The Breather is by far the most annoying threat you can encounter in the game. While he is only active in the alley, it is very difficult to ward him off. The difficulty is also aided by the relative rarity of encountering them in the first place.</p>
      <p>Normally, it is unlikely for the Breather to spawn on a visit to the alley. However, as you get more keys throughout the game, the chance for him to spawn will go up. To know if he is active on a visit to the alley, listen for any abnormal sounds when passing the dumpster. If you hear a sound (or you are not sure) you should go into the nearby door and prepare to brace the door. You can look through the window in an attempt to see him, but you should not let him see you. If he begins to push the door, immediately hold the doorknob. (Keep in mind that this minigame is very strict and will result in death upon failure) After he gives up, you should stop holding to prepare for his next attempt. Repeat this process until he leaves.</p>
      <details>
        <summary><b>Breather spawnrate</b></summary>
        <p>For those interested in the specifics of the Breathers spawnrate, the breather has percentage chance to be spawned which depends on how many keys you've discovered. <i>(This does not require actually finding them)</i> When you have zero or one keys, the Breather will spawn 20% of the times you visit the alley. Upon discovering any keys after your first, he will gain 5% to his chance of spawning up to a maximum of 55%. <i>(When playing in 1337 mode, the Breather will always have a fixed 55% chance of spawning.)</i></p>
      </details>
      <details>
        <summary><b>Notes</b></summary>
        <ul>
          <li>Listen for the Breather when you enter the alley</li>
          <li>Pay close attention to the movement of the door handle as you brace it</li>
          <li>You should avoid visiting the alley later in the game to avoid meeting the Breather</li>
        </ul>
      </details>`},
    {"name":`<i class="fa fa-circle fa-lg"></i> The Doll Maker`,"content":`
	<h1>The Dollmaker</h1>
      <p>The Dollmaker is an optional threat that is activated upon entering the site by the same name. After a certain amount of time, the Dollmaker will ██████ ██ ████ ████ and force you to ████ ████ ███ ████-████. Then the power will ██ ███ ███ █ ████████ ████ ██ █████████.</p>
      <p>After you have been given the marker on your doorknob you have a limited amount of time to place it on a suitable door. If you fail to do so, he will return disappointed and kill you wherever he happens to find you. There are two routes you can take in the Dollmakers task. You can attempt to randomly select a correct door or you can buy the Lolpy Disk item off the Shadow Market to have certainty of your selection. Once you have the Lolpy Disk, you can go to the lobby computer and hack it with the disk. Once it is finished, you will have access to a database of all tenants in the building. Simply select a suitable female target and place the marker on their door. Keep in mind that the Dollmaker will always request five targets during your encounter with him, remember to listen for him returning the marker.</p>
      <details>
        <summary><b>Extra Information</b></summary>
        <p>The following are specific timers and information for the Doll Makers various events.</p>
        <p>When you activate the Doll Maker they will spawn after 3:20 to 7:10 minutes. Once you recieve the door marker from the Doll Maker he will check your selection after 14:00 to 19:00 minutes. After the Doll Maker claims your selection he will wait 7:05 to 14:20 minutes to return the door marker.</p>
      </details>
      <details>
        <summary><b>Notes</b></summary>
        <ul>
          <li>If possible, you should avoid triggering the Dollmaker in a run going for completion</li>
          <li>If you want to complete the quest, go for it AFTER you have sufficient funds for a better chance of success</li>
          <li>While the time the Dollmaker quest provides is generous, it should be completed as soon as you can manage</li>
        </ul>
      </details>`},
    {"name":`<i class="fa fa-circle fa-lg"></i> Hacking`,"content":`
    <h1>Hacking</h1>
      <p>Occasionally throughout the game you can get hacked and face up against various minigames. While at first they are an annoying hinderance, they can be used to help you complete the game after you learn how to beat them.</p>
      <details>
        <summary><h3>ZoneWall</h3></summary>
        <p>Zonewall is always the first hack you will encounter upon being presented with a hack. ZoneWall consists of multiple lines with randomly selected target areas on each. In addition, you will see a moving bar on the topmost line. The goal is to left click when the bar is hovering over the red section, whether you succeed or not you will then be moved to the next bar down in the sequence. If you successfully time and complete a certain amount of bars, the hack will be instantly blocked. If you fail too many however, you will be randomly given one of the following hacks...</p>
      </details>
      <details>
        <summary><h3>StackPUSHER</h3></summary>
        <p>StackPUSHER consists of a randomly sized grid with a randomly generated layout. To successfully defend against this hack you must drop all stack nodes <img class="help_photo" src="Assets/stack3.png"> into the center where the popper node <img class="help_photo" src="Assets/stack1.png"> is located. You can only interact with stack nodes which are adjacent to the pusher node <img class="help_photo" src="Assets/stack2.png">. You can move the pusher node to any location on the board by clicking on it and clicking a destination. At higher levels, you will also need to avoid clicking on skull nodes that will start being generated. Clicking on them will result in an immediate failure of the hack.</p>
      </details>
      <details>
        <summary><h3>NodeH3X3R</h3></summary>
        <p>NodeH3X3R is often regarded as the hardest hack by the greater majority of players. It consists of a randomly sized grid of nodes. Which can each either be Alpha or Beta. <img class="help_photo" src="Assets/node3.png"><img class="help_photo" src="Assets/node2.png"> Your goal is to connect the starting node to all corrupted nodes (indicated by a bright green outline) <img class="help_photo" src="Assets/node1.png"> via a continuous line from the indicated starting node. However, when making this path you must be cautious to make every connection to the alternative node type. Connecting a node to another of the same type will not result in a failure until the hack attempts to verify your route through the nodes. Make sure to check your work and remember that you cant pass through the same node twice.</p>
      </details>
      <details>
        <summary><h3>MemD3FR4G3R</h3></summary>
        <p>MemD3FR4G3R is by far the easiest hack, at least at lower levels. You will be shown a sequence of letters and numbers in a box that you will be required to remember and reproduce with the buttons that will be provided by the hack. In addition, you may replay the pattern by clicking on the block in the center if you need a second chance to see a pattern. Keep in mind that you may be required to complete multiple levels of MemD3fr4g3r to pass the hack. Also, in 1337 mode or in the late game of a normal run, you may want to have a piece of paper at the ready as the sequence generated can be excessively long if given the right conditions.</p>
      </details>
	  <br>
      <p>When presented with ZoneWall, you may either fail this to get a secondary hack or succeed to instantly block the hack. While instantly blocking hacks sounds better, if you buy backdoors you can get DosCoin by failing ZoneWall and beating the secondary hack. The difficulty of hacks gradually increases based on the games duration, but you can effect the difficulty by the amount of levels succeeded during ZoneWall. Keep in mind, failing hacks can result in losing your in-game notes and a randomly selected amount of DosCoin. In addition, failing can cause you to get a virus which can hinder you from beating the game by causing random shutdowns and stealing DosCoin.</p>
      <p><i>(In 1337 mode all hacks will be given at max level despite zonewall performace or duration of the run)</i></p>
      <p>If you want to avoid getting hacked, you can buy VPN levels on the ZeroDay Market to supress the chance of a hack occuring for the remainder of the game. The supression depends on how many VPN levels you purchase from the ZeroDay market with each lowering the chance a hack will go through by 20%. VPNs can also be disabled by accessing their section on the right side of the taskbar.</p>
      <!--<details>
        <summary><b>Hack difficulty</b></summary>
        <p>If you want specific values about the difficulty of hacks a player named Lutonite has created a <a href="Assets/wttg2hacks.txt" target="_blank" rel="noreferrer">file</a> containing that information.</p>
      </details>-->
      <details>
        <summary><b>Notes</b></summary>
        <ul>
          <li>Backdoors bought from the ZeroDay Market will give you DosCoin for succeeding hacks other than ZoneWall</li>
          <li>Your success on zonewall affects the difficulty of secondary hacks</li>
          <li>VPNs can allow you to optionally suppress hacks</li>
        </ul>
      </details>
	`},
    {"name":`<i class="fa fa-circle fa-lg"></i> Miscellaneous`,"content":`
    <h1>Miscellaneous</h1>
      <h2>Miscellaneous Info</h2>
        <p>The Wiki 1 link and a key can be on the same page, however there can never be a key on Rule of Three.</p>
        <p>Contrary to many popular myths, there are only one naturally occuring ambient sound cue that has meaning. This sound cue is the Hitman lockpicking your door.</p>
        <p>Keys or key clickpoints can never appear inside PGP blocks, but they can be in the opening or closing text.</p>
        <p>Forgive me will never contain keys.</p>
        <p>It is not possible to hide from the police. Once they are at your door they will stay there until you approach them.</p>
        <p>In the result that your flashlight runs out of power, you can never use the flashlight again. It is reccomended you restart if this happens.</p>
        <p>When placing remote VPNs, both walls of each hallway have identical color zones.</p>
      <h2>Fun Facts</h2>
        <p>There is actually a page on Bug Friendly in which nudity is shown because it was improperly programmed.</p>
        <p>YOU THERE? uses minimal text despite it's appearance.</p>
        <p>The center photo on ISEVIL is a picture of an untreated snake bite.</p>
        <p>On the yellow sub-page of Don't waste it, the boy located on the left of the photo moves a few seconds after the page is loaded.</p>
        <p>The name for the Hitman is a reference to a moderater in Adam's twitch channel. In addition, the brand name for the police scanner is a direct reference to their username.</p>
        <p>There is a bug in the game where if you lean into certain walls or run up against an elevator, you may trigger an easter egg where you are teleported inside an elevator. This is believed to be a form of noclip or glitch protection.</p>
        <p>The landing page photo on I Love Cats was sourced from a popular furry site named furaffinity and modified before being used inside the game. The user who posted the orginal photo was named MethLab.</p>
      `},
    {"name":`<i class="fa fa-dot-circle-o fa-lg"></i> Hitman Simulator`,"content":`
    <h1>Hitman Simulator</h1>
      <p>The button below will open a simulator for the Hitmans lockpicking noise. Once you hear it, you should go to the widget for the simulator and click 'I heard that'. It will then tell you if you correct or incorrect. It will play five seconds after you start the simulation as a test, after that you must pay attention for when it plays. If you fail to catch a noise it plays, it will tell you that you have died and will continue the simulator as normal.</p>
      <button onclick="simulatorlaunch()">Launch Simulator</button>`},
    {"name":`<i class="fa fa-cog fa-lg"></i> Settings`,"content":`
    <h1>Settings</h1>
      <p>
        <div><span>Primary Color</span><b>:</b><span><input oninput="setcolor(0,this.value)" type="range" min="0" max="360" value="120" id="primary"></span></div>
        <div><span>Secondary Color</span><b>:</b><span><input oninput="setcolor(1,this.value)" type="range" min="0" max="360" value="0" id="secondary"></span></div>
      </p>`},
    {"name":`<i class="fa fa-question-circle fa-lg"></i> Feedback`,"content":`
    <h1>Feedback</h1>
    <p>If you wish to provide feedback or report a bug, please message leave a comment on the <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2211437048" target="_blank" rel="noreferrer">steam guide</a> for the helper or open an issue on the <a href="https://github.com/FierceThundr/wttg2-assistant/issues" target="_blank" rel="noreferrer">github page</a>!</p>`}
  ]
}

//==========================================================================Variable Data
var data = {
  "note":{
    "keys":["","????????????","????????????","????????????","????????????","????????????","????????????","????????????","????????????"],
    "content":""},
  "wiki":{
    "current":1,
    "keys":[null,0,0,0],
    "total":[null,2,3,3]},
  "wifi":{
    "active":0,
    "reference":0,
    "timer":[-1,0,""],
    "passwords":Full_array(100,"")},
  "tenant":{
    "rooms":Full_array(100,""),
    "availability":Full_array(100,1)},
  "simulator":{
    "soundplayed":0,
    "active":0,
    "reference":0,
    "visible":1,
    "sound":new Audio('Assets/Doorknob.wav')}
}

window.temp = 100

//==========================================================================Functions

function Full_array(i,v) {var a = [];for (var i = i;i > 0;i--) {a.push(v);};return a;}

//=============================
//=============================Wiki Functions
//=============================
function wikiinput(content) {//Update wiki data from input field
  var table = document.getElementById("wiki" + data.wiki.current + "list");
  document.getElementById("wikidata").value = "";
  if (content.length == 1) {return;}
  for (var y = table.rows.length - 1; y > 0; y--) {table.deleteRow(-1);}
  var sites = content.match(/(?=^)[\w ]+[!?]?(?= -)/gm)
  
  if (sites !== null) {sites.forEach(function (name) {var i = sitedata[name];if (i == undefined) {buttons(name,i,0,0,0,1)} else {var o = i.id;buttons(name,i,0,0,o,2);if (i.sub !== undefined) {i.sub.forEach(function (name,m,n) {o++;buttons(name,i,m,n,o,3)})}}})}
  function buttons(name,i,m,n,o,v) {
    var a = document.getElementById("wiki" + data.wiki.current + "list").insertRow(-1);
    var b = a.insertCell(0);
    var c = a.insertCell(1);
    var d = a.insertCell(2);
    b.innerHTML = (v !== 3) ? (name):((n.length - 1 == m) ? '⠀└─ ' + name:'⠀├─ ' + name);
    c.innerHTML = (v == 3) ? ('<i class="child">⠀Subpage</i>'):(v == 2) ? ((i.times == undefined) ? 'Always Available':i.times):('<i class="secondary">Dead Site</i>'); 
    d.innerHTML = `<button class="${(v == 1) ? "disabled":""}" ${(v !== 1) ? 'onclick="sitepreview(' + o + ')"':""}><i class="fa fa-mouse-pointer fa-lg"></i></button> <button class="${(v == 1) ? "disabled":"secondary"}" ${(v !== 1) ? 'onclick="toggle(this)"':""}><i class="fa fa-search fa-lg"></i></button><button class="${(v == 1) ? "disabled":"secondary"}" ${(v !== 1) ? 'onclick="toggle(this)"':""}><i class="fa fa-search-plus fa-lg"></i></button><button class="${(v == 1) ? "disabled":"secondary"}" ${(v !== 1) ? 'onclick="toggle(this,1)"':""}><i class="fa fa-key fa-lg"></i></button><button class="${(v == 1) ? "disabled":"secondary"}" ${(v !== 1) ? 'onclick="toggle(this)"':""}><i class="fa fa-link fa-lg"></i></button>`
  }
}

function wikiupdate(m) {//Change wiki page
  click()
  document.getElementById("wiki" + data.wiki.current).style.display = "none";
  data.wiki.current += m
  if (data.wiki.current == 4) {data.wiki.current = 1;};
  if (data.wiki.current == 0) {data.wiki.current = 3;};
  document.getElementById("wiki" + data.wiki.current).style.display = "block";
  document.getElementById("wikititle").innerHTML = "Wiki " + "III".slice(0,data.wiki.current);
  keysupdate()
}

function toggle(element,k) {//Toggle color of note taking buttons (Update key count)
  click()
  if (k == 1) {data.wiki.keys[data.wiki.current] += (element.classList.contains("secondary")) ? 1:-1;keysupdate()}
  element.classList.toggle("secondary")
}

function keysupdate() {//Update key count display
  document.getElementById("keycount").innerHTML = '<b>Keys remaining: ' + Math.max((data.wiki.total[data.wiki.current] - data.wiki.keys[data.wiki.current]),0) + '</b>';
}

function guideload() {
  try {
	document.getElementById("preview").contentDocument.addEventListener('click', function(e) {sitepreview(-1)})
  } catch (e) {
	sitepreview(-1)
	console.log("Clickpoint Guide Failure: " + e)
  }
}

function sitepreview(i) {//Update and display key clickpoints popup
  click()
  if (i == -1) {
    document.getElementById("preview_div").style.display = "none";
    document.body.classList.remove("noscroll");
    return;
  }
  document.getElementById("preview").src = 'Clickpoint Guides/' + i + '.html'
  document.getElementById("preview_div").style.display = "block"
  document.body.classList.add("noscroll");
}

function wikidemo() {//Force update of wiki data
  click()
  wikiinput("BathRoom Cams - \n\rBrutal Underground - \n\rCheap Surgery - \n\rChosen Awake - \n\rCorpses For Sell - \n\rCry Bitch - \n\rDeep Journal - \n\rDEEPDOTWEB - \n\rDream Place - \n\rEvil Collection - \n\rEye - \n\rForgive Me - \n\rHot Burners - \n\rIAMHERE - \n\rKeep Sake - \n\rLittle Friends - \n\rScream Bitch - \n\rSecure Drop - \n\rSKYWEB - \n\rSt Louis Arch - \n\rThe 8th Sin - \n\rThe Doll Maker - \n\rThe Light Within - \n\Vacation - \n\rYOU THERE? - ")
}

//=============================
//=============================Note Functions
//=============================
function noteinput(content) {//Attempt to find and save keys in note block input
  var lkeys = content.match(/[1-8] - [\w]{12}/g)
  if (lkeys !== null) {lkeys.forEach(function (a) {data.note.keys[a.slice(0,1)] = a.slice(4,16)});}
  document.getElementById("keyoutput").innerHTML = `<b>Key Data</b><br>${data.note.keys.join("").substr(0,48)}<br>${data.note.keys.join("").substr(48,48)}`;
  if (data.note.keys.indexOf("????????????") == -1) {document.getElementById("keyoutput").innerHTML = `<b>Master Key</b><br>${data.note.keys.join("")}`;}
}

//=============================
//=============================Wifi Functions
//=============================
function passwordinput(i,p) {//Update wifi label if password is provided (Save modification)
  data.wifi.passwords[i] = p
  document.getElementById("wifibutton" + i).innerHTML = "<i class='fa " + ((data.wifi.passwords[i] !== "") ? 'fa-check-square':'fa-square') + " fa-lg'></i> " + wifidata[i]["name"];
}
 
function timerupdate() {//Update wifi timer every second
  if (data.wifi.timer[0] == -1) {
    clearTimeout(data.wifi.reference)
    data.wifi.reference = -1
    return}
  var string = "###########################"
  var a = "[" + data.wifi.timer[2] + string.slice(data.wifi.timer[2].length) + String(Math.floor(data.wifi.timer[0]/60)).padStart(2,'0') + ":" + String(Math.floor(data.wifi.timer[0]%60)).padStart(2,'0') + string + "]";
  var b = Math.ceil((data.wifi.timer[0]/data.wifi.timer[1]*100)/(100/a.length))
  if (data.wifi.timer[0] == 60) {var audio = new Audio('Assets/MotionSensorAlert.oga');audio.play();};
  document.getElementById("wifitimer").innerHTML = '<span class="secondary">' + a.slice(0,a.length - b) + '</span>' + a.slice(a.length - b)
  data.wifi.timer[0] -= 1
}

function timerset(i,n) {//Update wifi timer
  click();
  data.wifi.timer = [i,i,n]
  if (data.wifi.reference !== -1) {
    clearTimeout(data.wifi.reference)
    data.wifi.reference = -1
  }
  data.wifi.reference = setInterval(timerupdate,1000);
  timerupdate();
}

function timerpause() {
  if (data.wifi.reference == -1) {
    data.wifi.reference = setInterval(timerupdate,1000);
  } else {
    clearTimeout(data.wifi.reference)
    data.wifi.reference = -1
  }
}

function wifiupdate(i) {//Change wifi page
  console.log(data.wifi.passwords[i])
  click()
  var v = wifidata[i]
  document.getElementById("wifidata").innerHTML = `
<h2>${v.name}</h2>
<table>
  <tbody>
    <tr><td>Position</td><td>${["Desk","Window","Bedside","Balcony"][v.position]}</td></tr>
    <tr><td>Dongle level</td><td>Level ${v.range} required</td></tr>
    <tr><td>Security</td><td>${["Unsecured","WEP","WPA","WPA2"][v.level]}</td></tr>
    <tr><td>Track Rate (Normal)</td><td>${String(Math.abs(Math.floor(v.track.time[0]/60))).padStart(2,'0') + ":" + String(Math.abs(Math.floor(v.track.time[0]%60))).padStart(2,'0')}</td></tr>
    <tr><td>Track Rate (1337)</td><td>${String(Math.abs(Math.floor(v.track.time[1]/60))).padStart(2,'0') + ":" + String(Math.abs(Math.floor(v.track.time[1]%60))).padStart(2,'0')}</td></tr>
    <tr><td>Track Chance (Normal)</td><td>${v.track.chance[0]}%</td></tr>
    <tr><td>Track Chance (1337)</td><td>${v.track.chance[1]}%</td></tr>
    <tr><td>Channel</td><td>${v.channel}</td></tr>
    
    ${(v.level == 1) ? `<tr><td>Port Range</td><td>${v.probe.port}</td></tr>`:``}
    ${(v.level >= 2) ? `<tr><td>Inject Limit</td><td>${v.inject.count}</td></tr>`:``}
    ${(v.level >= 2) ? `<tr><td>Inject Cooldown</td><td>${v.inject.wait}s</td></tr>`:``}
    ${(v.level >= 2) ? `<tr><td>Inject Success Range</td><td>${v.inject.total}</td></tr>`:``}
    ${(v.level >= 2) ? `<tr><td>Inject Crash Time</td><td>${v.inject.crash}s</td></tr>`:``}
    ${(v.secret) ? `<tr><td colspan="2">This wifi is not available by normal means as it is not listed when the scan command is run at its location</td></tr>`:``}
  </tbody>
</table>

<textarea oninput="passwordinput(${i},this.value)" class="blockinput" placeholder="${(v.level == 0) ? `Unsecured Network...`:`Password...`}" style="bottom:90px;"${(v.level == 0) ? `disabled`:``}>${data.wifi.passwords[i]}</textarea><br>
<button onclick='timerset(${v.track.time[0]},"${v.name}")' class="blockbutton" style="bottom:60px;">Start Wifi Timer</button>
<button onclick='timerset(${v.track.time[1]},"${v.name}")' class="blockbutton" style="bottom:30px;">Start 1337 Timer</button>`
}

//=============================
//=============================Tenant Functions
//=============================
function tenantinput(i,p) {//Update tenant label if password is provided (Save modification)
  data.tenant.rooms[i] = p
  document.getElementById("tenantbutton" + i).innerHTML = "<i class='fa " + ((data.tenant.availability[i] == 0) ? 'fa-odnoklassniki-square':(data.tenant.rooms[i] == "") ? 'fa-square':'fa-check-square') + " fa-lg'></i> " + tenantdata[i]["name"];
}

function tenanttoggle(i) {//Update tenant label if toggle is used (Save modification)
  click()
  data.tenant.availability[i] = (data.tenant.availability[i]) ? 0:1;
  document.getElementById("tenantbutton").innerHTML = (data.tenant.availability[i]) ? `Mark Tenant Unavailable`:`Mark Tenant Available`
  document.getElementById("tenantbutton" + i).innerHTML = "<i class='fa " + ((data.tenant.availability[i] == 0) ? 'fa-odnoklassniki-square':(data.tenant.rooms[i] == "") ? 'fa-square':'fa-check-square') + " fa-lg'></i> " + tenantdata[i]["name"];
}

function tenantupdate(i) {//Change tenant page
  click()
  var v = tenantdata[i]
  document.getElementById("tenantdata").innerHTML = `
<h2>${v.name}</h2>
<table>
  <tbody>
    <tr><td>Age</td><td>${v.age}</td></tr>
    <tr><td>Sex</td><td>${["Male","Female"][v.sex]}</td></tr>
    <tr><td>Doll Maker</td><td>${["Invalid","Valid"][v.doll]}</td></tr>
    <tr><td colspan="2">Note: ${v.note}</td></tr>
  </tbody>
</table>

<textarea oninput="tenantinput(${i},this.value)" class="blockinput" placeholder="Tenant room number..." style="bottom:230px;" ${(v.doll == 0) ? `disabled`:``}>${data.tenant.rooms[i]}</textarea><br>
<button onclick='tenanttoggle(${i})' class="blockbutton" id="tenantbutton" style="bottom:200px;" ${(v.doll == 0) ? `disabled`:``}>${(v.doll == 0) ? `Invalid Doll Maker Target`:data.tenant.availability[i] ? `Mark Tenant Unavailable`:`Mark Tenant Available`}</button>`
}

//=============================
//=============================Info Block Functions
//=============================
function guideupdate(i) {//Change info page
  click()
  document.getElementById("guidedata").innerHTML = guidedata[i].content
}

function setcolor(i,c) {//Update site color settings in memory
  localStorage.setItem(`color${i}`,c)
  document.getElementById("dom_color").innerHTML = `body {color:hsl(${localStorage.getItem('color0')},100%,50%)} .simplebar-scrollbar::before {background-color:hsl(${localStorage.getItem('color0')},100%,50%)} .child {color:hsl(${localStorage.getItem('color0')},100%,30%)} .secondary {color:hsl(${localStorage.getItem('color1')},100%,50%)} .disabled {color:hsl(${localStorage.getItem('color1')},100%,20%)}`
}


//==================Lucas Simulator
function simulatorlaunch() {
  click()
  document.getElementById("sim_wrapper").style.display = "block"
}

function simulatortoggle() {
  click()
  if (data.simulator.active) {
    document.getElementById("sim_start").innerHTML = "Start Simulation"
    clearTimeout(data.simulator.reference)
  } else {
    document.getElementById("sim_start").innerHTML = "End Simulation"
    data.simulator.reference = setTimeout(simulatorplaysound,5000)
  }
  data.simulator.active = (data.simulator.active) ? 0:1;
}

function simulatorplaysound() {
  data.simulator.sound.play();
  data.simulator.soundplayed = 1
  data.simulator.reference = setTimeout(simulatorevaluate,10000)
}

function simulatorevaluate() {
  if (data.simulator.soundplayed == 1) {
    data.simulator.soundplayed = 0
    document.getElementById("sim_title").innerHTML = `<span class="secondary"><i class="fa fa-times"></i> You have died</span>`
    setTimeout(function () {document.getElementById("sim_title").innerHTML = "Hitman Trainer"},180000)
  }
  data.simulator.reference = setTimeout(simulatorplaysound,(Math.floor(Math.random() * 11) * 30000) + 600000)
}

function simulatorverify() {
  if (data.simulator.soundplayed == 1) {var a = `<i class="fa fa-check"></i> Correct`;data.simulator.soundplayed = 0;
  } else {var a = `<span class="secondary"><i class="fa fa-times"></i> Incorrect</span>`;};
  document.getElementById("sim_title").innerHTML = a
  setTimeout(function () {document.getElementById("sim_title").innerHTML = "Hitman Trainer"},10000)
}

function simulatorhide() {
  click()
  document.getElementById("sim_div").style.visibility = (data.simulator.visible) ? "hidden":"visible"
  data.simulator.visible = (data.simulator.visible) ? 0:1;
}

//=============================
//=============================Other
//=============================
function tunnelsecret() {
  return "3 - mv2gq5lomrza"
}

function tipupdate() {//Update displayed tip
  document.getElementById("tips").innerHTML = '[Tip] ' + tips[Math.floor(Math.random() * tips.length)]
}
setInterval(tipupdate,10000);

function setup() {//Prepare website lists and appearance
  wifidata.forEach(function (data,index) {
    var button = document.createElement("button")
    document.getElementById("wifilist").appendChild(button)
    button.outerHTML = `<button id="wifibutton${index}" onclick="wifiupdate(${index})">${"<i class='fa " + ((data["level"] == 0) ? 'fa-square-o':'fa-square') + " fa-lg'></i> " + data.name}</button>`
  })
  guidedata.forEach(function (data,index) {
    var button = document.createElement("button")
    document.getElementById("guidelist").appendChild(button)
    button.outerHTML = `<button onclick="guideupdate(${index})">${data.name}</button>`
  })
  tenantdata.forEach(function (data,index) {
    var button = document.createElement("button")
    document.getElementById("tenantlist").appendChild(button)
    button.outerHTML = `<button id="tenantbutton${index}" onclick="tenantupdate(${index})">${"<i class='fa " + ((data["doll"] == 0) ? 'fa-square-o':'fa-square') + " fa-lg'></i> " + data.name}</button>`
  })
  if (localStorage.getItem('color0') == undefined) {localStorage.setItem('color0',120)}
  if (localStorage.getItem('color1') == undefined) {localStorage.setItem('color1',0)}
  document.getElementById("dom_color").innerHTML = `body {color:hsl(${localStorage.getItem('color0')},100%,50%)} .simplebar-scrollbar::before {background-color:hsl(${localStorage.getItem('color0')},100%,50%)} .child {color:hsl(${localStorage.getItem('color0')},100%,30%)} .secondary {color:hsl(${localStorage.getItem('color1')},100%,50%)} .disabled {color:hsl(${localStorage.getItem('color1')},100%,20%)}`
  document.getElementById("animated").style = "animation:slide 1s 0.3s forwards"
}

function click() {//Play click sound
  var audio = new Audio('Assets/MouseClick.oga');audio.play();
}

function sitecycle() {//Temporary dev function (Cycle through clickpoint guides)
  sitepreview(window.temp)
  window.temp++
}