new Vue({
    el:'#app',
    data: {
        health:100,
        ended: false
    },
    methods: {
        punch:function(){
            this.health -= 10;
            if(this.health<1){
                this.ended=true;
            }
        },
        restart:function(){
            this.health=100;
            this.ended=false;
        }
    }
});