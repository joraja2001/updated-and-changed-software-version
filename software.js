console.log('____________________________________________JAVASCRIPT_______________________________')
software_UPDATES=[
        {

        Version:'2.1',
       Release_date:'2021',
        Bugs:"crashing",
        Feature:"karaoke mode",
        Author:"spotify",
        Type:"major"
    
    },
    {
           Version:'3.1',
           Release_date:'2022',
           Bugs:"UPI bug",
           Feature:"introducing to action calls",
           Author:"truecaller",
           Type:"major"
    
    },
    {
    Version:'4.1',
    Release_date:'2022',
    Bugs:"video freeze",
    Feature:"icons get new look",
    Author:"netflix" ,
    Type:"major"  
    },
{
    Version:'4.3',
    Release_date:'2021',
    Bugs:'voice call error',
    Feature:"admin msg control",
    Author:"whatsapp",
    Type:"match enhancement"
},
{
    Version:'4.5',
    Release_date:'2022',
    Bugs:'crashing',
    Feature:"react over msg",
    Author:"whatsapp",
    Type:"match enhancement"
},
{ Version:'4.7',
    Release_date:'2022',
    Bugs:'crashing',
    Feature:"more reaction over msg",
    Author:"whatsapp",
    Type:"match enhancement"

}]
console.table(software_UPDATES)
Bugs=[
    {BugID:'101',
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

    function searchbyyear(year){

    count_UPDATES=software_UPDATES.filter(n=>n.Release_date.includes(year))
    console.log(`${count_UPDATES.length} "versions came in the year of ${year}`)
    console.table(count_UPDATES)
    }

    searchbyyear('2022')


    console.log('__________________________________________________________________________________________________________________________')
   

    function searchbyspecificbug(BugID){
        count_bug=Bugs.filter(n=>n.BugID.includes(BugID))
        console.log(`"this is the ${BugID} bug occured for the below release `)
        console.table(count_bug)
    }
    searchbyspecificbug('101')
    console.log('__________________________________________________________________________________________________________________________')
   


    function searchbyauthor(Name){

        count_AUTHOR=software_UPDATES.filter(n=>n.Author.includes(Name))
        console.log(`${Name} is the one who launched  ${count_AUTHOR.length} times software updates `)
        console.log(count_AUTHOR)
    }
    searchbyauthor('whatsapp')

    console.log('__________________________________________________________________________________________________________________________')
   

    authors_OFSOFTWARES=["spotify","truecaller","netflix","Jan Koum","Brian","Brian", "Brian" ,"Jan Koum"]
    majorauthor=1;
    time0fAuthor=0;
    for(author=0;author< authors_OFSOFTWARES.length;author++){
        for(authors=1;authors< authors_OFSOFTWARES.length;authors++){
            if(authors_OFSOFTWARES[author]===authors_OFSOFTWARES[authors])
            time0fAuthor++;
        
        if(majorauthor<time0fAuthor){
            majorauthor=time0fAuthor;
            Author= authors_OFSOFTWARES[author]
        }
    }
    time0fAuthor=0;
}
console.table(`${ Author} is the one who is an  major author of performing ,${majorauthor} times`)

    console.log('__________________________________________________________________________________________________________________________')
   

    function searchbyversion(version){

        version_FORSOFTWARE=software_UPDATES.filter(n=>n.Version.includes(version))
        console.log(`"the software which having  ${version}version  `)
        console.table(version_FORSOFTWARE)    
    }
    
    searchbyversion('4.1')
    console.log('__________________________________________________________________________________________________________________________')
    
   
    function searchbytype(type){
        type_OFSOFTWARE=software_UPDATES.filter(n=>n.Type.includes(type))
        console.log(`"the software which having  ${type} type  `)
        console.table(type_OFSOFTWARE)
    }
    console.log('__________________________________________________________________________________________________________________________')
    searchbytype('match enhancement')
    console.log('__________________________________________________________________________________________________________________________')
    searchbytype('major')



