console.log("________________________________________TYPESCRIPT__________________________________________")
interface Version{
    Name:string,
    Version:string,
   Release_date:string,
    Bugs:string,
    Feature:string,
    Author:string[]|string,
    Type:string
}
interface Bugs{
    BugID:string,
    Name:string,
    Version:string,
   Release_date:string,
    Bugs:string,
    Feature:string,
    Author:string[]|string,
    Type:string
}


const software_UPDATES:Version[]=[
    {
    Name:'spotify',
    Version:'2.1',
   Release_date:'21.12.2021',
    Bugs:"crashing",
    Feature:"karaoke mode",
    Author:["spotify"],
    Type:"major"

},
{      Name:'truecaller',
       Version:'3.1',
       Release_date:'28.06.2022',
       Bugs:"UPI bug",
       Feature:"introducing to action calls",
       Author:["truecaller"],
       Type:"major"

},
{
Name:'netflix',
Version:'4.1',
Release_date:'12.09.2022',
Bugs:"video freeze",
Feature:"icons get new look",
Author:["netflix"] ,
Type:"major"  
},
{
Name:'whatsapp',
Version:'4.3',
Release_date:'25.04.2021',
Bugs:'voice call error',
Feature:"admin msg control",
Author:["Jan Koum"],
Type:"match enhancement"
},
{   Name:'whatsapp',
Version:'4.5',
Release_date:'07.08.2022',
Bugs:'crashing',
Feature:"react over msg",
Author:["Brian"],
Type:"match enhancement"
},
{   Name:'whatsapp',
Version:'4.7',
Release_date:'05.10.2022',
Bugs:'crashing',
Feature:"more reaction over msg",
Author:["Brian", "Acton" ,"Jan Koum"],
Type:"match enhancement"
}]
console.log(software_UPDATES)
const Bugs:Bugs[]=[
{
    BugID:'101',
    Name:'spotify',
    Version:'2.1',
   Release_date:'21.12.2021',
    Bugs:"crashing",
    Feature:"karaoke mode",
    Author:["spotify"],
    Type:"major"
},
{BugID:'102',
    Name:'truecaller',
    Version:'3.1',
    Release_date:'28.06.2022',
    Bugs:"UPI bug",
    Feature:"introducing to action calls",
    Author:["truecaller"],
    Type:"major"
},
{
    BugID:'103',
    Name:'netflix',
    Version:'4.1',
    Release_date:'12.09.2022',
    Bugs:"video freeze",
    Feature:"icons get new look",
    Author:["netflix"] ,
    Type:"major"
},

{BugID:'104',
Name:'whatsapp',
Version:'4.3',
Release_date:'25.04.2021',
Bugs:'voice call error',
Feature:"admin msg control",
Author:["Jan Koum"],
Type:"match enhancement"
},

{
 BugID:'105',
 Name:'whatsapp',
Version:'4.5',
Release_date:'07.08.2022',
Bugs:'crashing',
Feature:"react over msg",
Author:["Brian"],
Type:"match enhancement"
},

{
    BugID:'106',
    Name:'whatsapp',
    Version:'4.7',
    Release_date:'05.10.2022',
    Bugs:'crashing',
    Feature:"more reaction over msg",
    Author:["Brian", "Acton" ,"Jan Koum"],
    Type:"match enhancement"

}
]

function searchByYear(year:string){
var count_UPDATES=software_UPDATES.filter(n=>n.Release_date.includes(year))
console.log(`${count_UPDATES.length} "versions came in the year of ${year}`)
console.log(count_UPDATES)
}
searchByYear('2021')
console.log('__________________________________________________________________________________________________________________________')


function searchBySpecificbug(BugID:string){
   var count_bug=Bugs.filter(n=>n.BugID.includes(BugID))
    console.log(`"this is the ${BugID} bug occured for the below release `)
    console.log(count_bug)
}
searchBySpecificbug('101')
console.log('__________________________________________________________________________________________________________________________')

function searchByauthor(name:string){
   var count_AUTHOR=software_UPDATES.filter(n=>n.Author.includes(name))
    console.log(`"${name} is the one who is part of software updates for  ${count_AUTHOR.length} times `)
    console.log(count_AUTHOR)
}
searchByauthor("Jan Koum")

console.log('__________________________________________________________________________________________________________________________')

var authors_OFSOFTWARES=["spotify","truecaller","netflix","Jan Koum","Brian","Brian", "Brian" ,"Jan Koum"]
var majorauthor=1;
var timeOfauthor=0;
for(let Author=0;Author< authors_OFSOFTWARES.length;Author++){
    for(let Times=1;Times< authors_OFSOFTWARES.length;Times++){
        if(authors_OFSOFTWARES[Author]===authors_OFSOFTWARES[Times])
     timeOfauthor++;
    
    if(majorauthor<timeOfauthor){
        majorauthor=timeOfauthor;
       var person:any= authors_OFSOFTWARES[Author]
    }
}
timeOfauthor=0;
}
console.log(`${person} is the one who is an  major author of performing ,${majorauthor} times`)

console.log('__________________________________________________________________________________________________________________________')


function searchByVersion(Version:string){
    
   var version_FORSOFTWARE=software_UPDATES.filter(n=>n.Version.includes(Version))
   
    console.log(`"the software which having  ${Version}Version  `)
    console.log(version_FORSOFTWARE)
  
    
}

searchByVersion('4.1')

console.log('__________________________________________________________________________________________________________________________')


function searchByType(Type:string){
   var type_OFSOFTWARE=software_UPDATES.filter(n=>n.Type.includes(Type))
    console.log(`"the software which having  ${Type} type  `)
    console.log(type_OFSOFTWARE)
}
console.log('__________________________________________________________________________________________________________________________')
searchByType('match enhancement')
console.log('__________________________________________________________________________________________________________________________')
searchByType('major')
