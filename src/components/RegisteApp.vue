<template>
    <div id="App" class="hello">
        <h1>{{ msg }}</h1>
        <span>{{ input1 }}</span>
        <input type="text" placeholder="" v-model='mailbox' class="input1">
        <button class="button">获取验证码</button><br>
        <span>{{ input2 }}</span>
        <input type="text" placeholder="" v-model="password" class="input2"><br>
        <span>{{ input3 }}</span>
        <input type="text" placeholder="" v-model="vertify" @keyup.enter="TryRegiste" class="input3"><br>
        <a>已有账号?直接登录!</a>
        <hr>
    </div>
</template>


<script>
export default {
    // name: 'RegisteApp',
    props: {
        msg: {
            String,
            default:'默认msg'
        },
    },
    data(){
        return {
            mailbox:'',
            password:'',
            input1:'邮箱: ',
            input2:'密码: ',
            input3:'验证码: '
        }
    },

    methods:{
        TryRegiste(){
            console.log(this.mailbox, this.password)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        margin: 20px 0 0;
    }
    a {
        margin: 20px 0 0;
        color: #42b983;
    }
    input {
        margin: 30px 0 0;
        height: 20px;
        width: 300px;
    }
    button{
        margin: 10px 0 0;
        height: 30px;
        width: 120px;
    }
</style>
