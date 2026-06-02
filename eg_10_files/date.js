var mydate=new Date()
var year=mydate.getYear()
if (year < 1000)
year+=1900
var day=mydate.getDay()
var month=mydate.getMonth()
var daym=mydate.getDate()
if (daym<10)
daym="0"+daym
var dayarray=new Array("РІРѕСЃРєСЂРµСЃРµРЅСЊРµ","РїРѕРЅРµРґРµР»СЊРЅРёРє","РІС‚РѕСЂРЅРёРє","СЃСЂРµРґР°","С‡РµС‚РІРµСЂРі","РїСЏС‚РЅРёС†Р°","СЃСѓР±Р±РѕС‚Р°")
var montharray=new Array("СЏРЅРІР°СЂСЏ","С„РµРІСЂР°Р»СЏ","РјР°СЂС‚Р°","Р°РїСЂРµР»СЏ","РјaСЏ","РёСЋРЅСЏ","РёСЋР»СЏ","Р°РІРіСѓСЃС‚Р°","СЃРµРЅС‚СЏР±СЂСЏ","РѕРєС‚СЏР±СЂСЏ","РЅРѕСЏР±СЂСЏ","РґРµРєР°Р±СЂСЏ")
document.write("РЎРµРіРѕРґРЅСЏ "+daym+" "+montharray[month]+"  "+year+ " РіРѕРґР°,   "+dayarray[day]+".")
