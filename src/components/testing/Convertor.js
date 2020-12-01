var fs = require('fs');
var value = "";
fs.readFile("./before.txt",function(err,data){
    if(err){
        console.log(err);
    } else {

        fs.writeFile("./after.js","const history = [\n", (err) => {
            if(err){console.log(err);}
        });

        value = data.toString();
        let [ first , last ] = [ 0 ,0 ] ;
        while(value.indexOf("\n") !== -1){

            last = value.indexOf("\n");

            // value = value.replace("\n","");
            // nextLast = value.indexOf("\n");
            // let nextChat = value.slice(last+1,nextLast-1);
            // console.log( nextChat );
            // if((/\n?\d{2}\/\d{2}\/\d{2},.(\d)?\d:\d{2}.(a|p)m.-./.test(nextChat)) ){
            //     console.log(nextChat);
            // }

            let singleChat = value.slice(first,last-1);

            // let pattern = /\n?\d{2}\/\d{2}\/\d{2},.(\d)?\d:\d{2}.(a|p)m.-./;
            // console.log( singleChat + " : " + pattern.test(singleChat) );
            console.log(singleChat);

            let dateEnd    = singleChat.indexOf(",",0        );
            let timeEnd    = singleChat.indexOf("-",dateEnd+1);
            let nameEnd    = singleChat.indexOf(":",timeEnd+1);

            let date = '{\n\tDate : "' + singleChat.slice(0,dateEnd) ;
            let time = '",\n\tTime : "' + singleChat.slice(dateEnd+1,timeEnd) ;
            let name = '",\n\tName : "' + singleChat.slice(timeEnd+1,nameEnd) ;
            let chat = '",\n\tChat : "' + singleChat.slice(nameEnd+1) + '"\n},' ; 

            fs.appendFile("./after.js", date + "" + time + "" + name + "" + chat + "\n" ,function(err){
                if(err){console.log(err);}
            });

            value = value.replace("\n","");
            first = last ;
        }

        fs.appendFile("./after.js","\n];\n\nexport default history;", (err) => {
            if(err){console.log(err);}
        });
    }
});