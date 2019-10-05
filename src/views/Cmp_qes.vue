<template>
  <div>
    <center>
      <div class="input-box">
        <b-col sm="3">
          <b-form-input
            v-model="input_num"
            placeholder="輸入您的答案(為一個4位數)"
            class="ans"
            id="ans"
            maxlength="4"
            @keyup.13="send"
            type="tel"
          ></b-form-input>
        </b-col>
        <br />
        <b-button variant="outline-primary" class="btn" @click="send">確定</b-button>
        <b-button variant="outline-danger" class="btn" @click="clear">清除</b-button>
      </div>
      <b-col sm="6">
        <b-form-textarea
          id="textarea-auto-height"
          :value="info_text"
          rows="3"
          max-rows="8"
          readonly
          v-if="count==0"
        ></b-form-textarea>

        <b-form-textarea
          id="textarea-auto-height"
          :value="all_outome"
          rows="3"
          max-rows="5"
          readonly
          v-if="count!=0"
          style="overflow:scroll;"
        ></b-form-textarea>
      </b-col>

      <div class="num-helper"  v-if="count!=0">
        <b-form-group label="解題小幫手(可將不可能的數字勾選起來)">
          <b-form-checkbox-group  :options="options" size="lg"></b-form-checkbox-group>
        </b-form-group>
      </div>
    </center>
    <i class="fas fa-info-circle" @click="showTip"></i>
  </div>
</template>

<script>
import { parse } from "path";
export default {
  metaInfo: {
    title: "1A2B 猜數字-電腦出題"
  },
  data() {
    return {
      count: 0,
      input_num: "",
      numArray: [],
      info_text: `遊戲說明:
    1.猜出電腦設定的4位數字。
    2.數字0不可置於最前面。
    3.當使用者輸入的數字&位置與答案相符時，便會顯示A
    4.當使用者輸入的數字與答案相符，但位置不符時，便顯示B
    5.例如，答案為1234 ，使用者輸入1048，提示框則會輸出1A1B`,
      ans: Number,
      ansArray: [],
      all_outome: "",
      options: [
        { text: "0" },
        { text: "1" },
        { text: "2" },
        { text: "3" },
        { text: "4" },
        { text: "5" },
        { text: "6" },
        { text: "7" },
        { text: "8" },
        { text: "9" }
      ]
    };
  },
  methods: {
    send() {
      if (this.checkNum()) {
        this.verify(this.numArray);
      }
    },
    checkNum() {
      if (this.input_num == "") {
        alert("請輸入數字!");
        this.focusInputBox();
        return false;
      } else if (this.input_num.length != 4) {
        alert("請輸入4位數字!");
        this.focusInputBox();
        return false;
      } else {
        this.numArray = this.input_num.split("");
        this.numArray.forEach(element => {
          if (isNaN(element)) {
            alert("四位需皆為數字!");
            this.input_num = "";
            return false;
          }
        });
        if (this.numArray[0] == 0) {
          alert("首位不可為0!");
          return false;
        }
        return true;
      }
    },
    verify(user_ans) {
      // 判斷使用者是否輸入了一樣的輸字
      for (var i = 0; i < 4; i++) {
        for (var j = i + 1; j < 4; j++) {
          if (user_ans[i] == user_ans[j]) {
            alert("數字重複!");
            this.focusInputBox();
            return;
          }
        }
      }

      var u = 0;
      for (i = 0; i < 4; i++) {
        //判斷有幾A
        if (this.ansArray[i] == user_ans[i]) {
          u++;
        }
      }

      if (u == 4) {
        var res = confirm(
          `恭喜破解! 答案是「${this.ans}」。\n是否重玩一次，選擇取消，則回到主頁。`
        );
        if (res == true) {
          location.reload();
        } else {
          this.$router.push("/");
        }
      } else if (u != 4) {
        var u1 = 0;
        for (i = 0; i < 4; i++) {
          //判斷有幾B
          for (j = 0; j < 4; j++) {
            if (this.ansArray[i] == user_ans[j]) {
              u1++;
            }
          }
        }

        this.count++;
        this.all_outome +=
          "您第" +
          this.count.toString() +
          "次輸入:" +
          this.input_num +
          "   [" +
          u.toString() +
          "A" +
          (u1 - u).toString() +
          "B]\n";
        this.input_num = "";
        this.focusInputBox();
      }
    },
    clear() {
      this.input_num = "";
      this.focusInputBox();
    },
    generateAns() {
      var rannum = Math.floor(Math.random() * 9001) + 1000; //亂數範圍從 1000~10000中取得
      this.ans = rannum;
      this.ansArray[0] = parseInt((rannum / 1000) % 10); //取答案千位的數字
      this.ansArray[1] = parseInt((rannum / 100) % 10); //取答案百位的數字
      this.ansArray[2] = parseInt((rannum / 10) % 10); //取答案十位的數字
      this.ansArray[3] = parseInt(rannum % 10); //取答案個位的數字

      //確保答案的4個位數皆不會重複
      for (var i = 0; i < 4; i++) {
        for (var j = i + 1; j < 4; j++) {
          if (this.ansArray[i] == this.ansArray[j]) {
            this.generateAns();
          }
        }
      }
    },
    focusInputBox() {
      document.getElementById("ans").focus();
    },
    showTip() {
      alert(this.info_text);
    }
  },
  mounted() {
    this.generateAns();
    //   window.onunload = ()=>{alert(`下次再見囉！`)}
    //   document.addEventListener("onunload",()=>{alert(`下次再見囉！`)})
  }
};
</script>

<style scoped>
.input-box {
  margin: 20px;
}
.ans {
  /* width: 25%; */
  display: inline;
}
.btn {
  margin-left: 10px;
}
.textarea {
  width: 40%;
  border: 1.5px black solid;
  height: 30%;
}
.fa-info-circle {
  float: right;
  color: rgb(235, 198, 48);
  font-size: 40px;
  padding: 15px;
}
.num-helper {
  margin: 10px;
}
</style>