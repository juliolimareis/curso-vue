<template>
    <div>
        <!-- console -->
        <div class="div-console" v-if="consoleOn">
            <div class="console" id="console" v-html="consoleApp"></div>
            <input class="inp-cmd" 
                v-model="cmd" 
                @keyup.enter="comand()" 
                type="text" 
                placeholder="comand line"/>
        </div>
    </div>
</template>
<script>
    export default {
        created(){
            this.title = "Hi Vue CDN"
        },
        mounted(){
            this.console("app iniciado com sucesso.")
        },
        data(){
            return {
                consoleOn:true,
                clear:false,
                cmd:"",
                title:"sem titulo",  
                link:"https://duckduckgo.com/",
                html:'<p>hi console</p><br><p>app vue js</p>',
                styleConsoleVue:"<span style='color:rgb(87, 197, 137)'>Vue:</span>",
                consoleWorn:"<span style='color:rgb(236, 234, 110)'>",
                consoleErr:"<span style='color:rgb(228, 110, 110)'>",
                consoleApp:"<span style='color:rgb(87, 197, 137)'>Vue:</span>~$ app Vue JS<br>",
                consoleCount:0,
                num:0,
                valueSum:1,
                x:0,
                y:0
            }
        },
        watch:{
            num(numNew,numOld){
                this.console("num has been changed from "+(numOld+" to "+numNew))
            }
        },

        methods:{
            comand(){
                this.console(this.cmd,"")
                this.cmd = ""
            },
            setTitle(){
                this.title = "Titulo alterado"
            },
            minus(){
                this.num = (this.num - parseInt(this.valueSum))
            },
            sum(){
                this.num = (this.num + parseInt(this.valueSum))
            },
            refreshXY(event){
                this.x = event.clientX
                this.y = event.clientY
            },
            stopEventThisElement(event){
                event.stopPropagation()
                // console.log("Mouse event stopped by first method.")
                this.console("Mouse event stopped by first method.","worn")
            },
            msgStop(){
                // console.log("Mouse event stopped by second method.")
                this.console("Mouse event stopped by first method.","err")
            },
            consoleDefault(){
                if(this.consoleOn){
                    this.consoleOn = false;
                    return
                }this.consoleOn = true
            },
            consoleClear(){
                this.clear = true;
                this.consoleApp = this.styleConsoleVue+"~$"
                this.consoleCount = 0
            },
            verifyReservedWord(word){
                switch (word) {
                    case "clear":
                        this.consoleClear()
                    break;
                    case "exit":
                        this.consoleDefault()
                    break;
                    default:
                        return false
                }
                return true;
            },
            console(msg,type){
                if(this.verifyReservedWord(msg)){
                    return
                }

                if(this.consoleCount > 5 ){
                    this.consoleClear()
                    return
                }
                this.consoleCount++
                let sty = "<span>";
                if(!(type === undefined)){
                    sty = this.consoleErr;
                    if(type.toLowerCase() === "worn"){
                        sty = this.consoleWorn
                    }
                } 

                if(this.clear){
                    this.consoleApp=this.styleConsoleVue+"~$ "+sty+msg+"</span><br>"
                }else{
                this.consoleApp+=this.styleConsoleVue+"~$ "+sty+msg+"</span><br>"
                    document.getElementById('console').scrollTop = 500
                }
                this.clear = false;
            }
        }
    }
</script>

<style scoped>
    .div-console{
        position: absolute;
        top:15px;
        left:300px;
        width:500px;
    }

    .inp-cmd{
        width:inherit;
        background-color: black;
        border:none;
        color:white;
        border-bottom:3px;
    }

    .console{
        overflow-y: auto;
        width:inherit;
        height:100px;
        border:solid 3px rgb(183, 184, 183);
        background-color: rgb(20, 19, 19);
        padding:auto;
        color:rgb(248, 248, 244);
        font-size: 12;
        border:none;
    }

    .stop-mousemove{
        cursor: not-allowed;
        border:solid 3px red
    }
</style>