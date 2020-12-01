var fs = require('fs');
fs.readFile("./before.txt",function(err,data){
    if(err){
        console.log(err);
    } else {
        let val = data.toString();

        let lines = val.split("\r\n") ;
        let back = "" ;
        for ( let i=0; i<lines.length-1 ; i++){
            if ( (/\n?\d{2}\/\d{2}\/\d{2},.(\d)?\d:\d{2}.(a|p)m.-./).test(lines[i+1]) ){
                back = back.concat(lines[i] +"\n");
            } else {
                back = back.concat(lines[i] + "&1001;");
            }
        }
        let value = back.split("\n");
        fs.writeFile("./after.js","const history = [\n", (err) => {
            if(err){console.log(err);}
        });
        for ( let i=0;i<value.length; i++){

            let dateEnd    = value[i].indexOf(",",0        );
            let timeEnd    = value[i].indexOf("-",dateEnd+1);
            let nameEnd    = value[i].indexOf(":",timeEnd+1);

            let unFormatedChat = value[i].slice(nameEnd+1) ;
            while( unFormatedChat.indexOf("'")!==-1 ){                 // Changing all ' to &1002;
                unFormatedChat = unFormatedChat.replace("'","&1002;");
            }
            while( unFormatedChat.indexOf('"')!==-1 ){                 // Changing all " to &1003;
                unFormatedChat = unFormatedChat.replace('"','&1003;');
            }
 
            let date = "{\n\tDate : '" + value[i].slice(0,dateEnd).trim() ;
            let time = "',\n\tTime : '" + value[i].slice(dateEnd+1,timeEnd).trim() ;
            let name = "',\n\tName : '" + value[i].slice(timeEnd+1,nameEnd).trim() ;
            let chat = "',\n\tChat : '" + unFormatedChat.trim() + "'\n}," ; 

            fs.appendFile("./after.js", date + "" + time + "" + name + "" + chat + "\n" ,function(err){
                if(err){console.log(err);}
            });
        }
        fs.appendFile("./after.js","\n];\n\nexport default history;", (err) => {
            if(err){console.log(err);}
        });
    }
});