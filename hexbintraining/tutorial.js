var hexadecimals = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
var binaries = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"];

var app = new Vue({
    el: "#app",
    data: {
        hex_to_bin: true,
        bytes: 1,
        current_val: "",
        total_counter: 0,
        right_counter: 0,
        wrong_counter: 0
    },
    methods: {
        restart: function() {
            this.reset();
            this.generateValue();
        },
        reset: function() {
            this.current_val = "";
            this.total_counter = 0;
            this.right_counter = 0;
            this.wrong_counter = 0; 
        },
        generateValue: function() {
            let val = "";
            for(let i = 0; i < this.bytes*2; i++){
                if(this.hex_to_bin){
                    val += hexadecimals[Math.floor(Math.random() * 16)];
                }
                else{
                    val += binaries[Math.floor(Math.random() * 16)];
                }
            }
            this.current_val = val;
        },
        submitAns: function() {
            if(this.$refs.ans_field.value == this.getAnswer) {
                console.log("Correct!");
                this.right_counter += 1;
                this.total_counter += 1;
                this.$refs.ans_field.value = "";
                this.generateValue();
            }
            else {
                console.log("Wrong :(");
                this.wrong_counter += 1;
            }
        },
        switchMode: function() {
            this.hex_to_bin = !this.hex_to_bin;
            this.reset();
        }
    },
    computed: {
        getAnswer: function() {
            let ans = "";
            if(this.hex_to_bin){
                for(let i = 0; i < this.bytes*2; i++){
                    ans += binaries[hexadecimals.indexOf(this.current_val[i])];
                }
            }
            else{
                for(let i = 0; i < this.bytes*2; i++){
                    ans += hexadecimals[binaries.indexOf(this.current_val.substring(i*4,i*4+4))];
                }
            }
            return ans;
        }
    }
});
