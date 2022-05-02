<template>
    <div class="container">
        <section>
            <h1>饿了么后台管理系统</h1>
            <el-form :rules="rules" :model="userInfo">
                <el-form-item prop="username">
                    <el-input
                        placeholder="用户名"
                        v-model="userInfo.username"
                    ></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        placeholder="密码"
                        v-model="userInfo.password"
                    ></el-input>
                </el-form-item>
                <el-form-item style="margin-bottom: 8px">
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
                <el-checkbox v-model="userInfo.rememberMe">记住我</el-checkbox>
                <div class="tip_box">
                    <p class="tip">温馨提示：</p>
                    <p class="tip">未登录过的新用户，自动注册</p>
                    <p class="tip">注册过的用户可凭账号密码登录</p>
                </div>
            </el-form>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {
                username: "",
                password: "",
                rememberMe: false,
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur",
                    },
                    {
                        min: 2,
                        max: 8,
                        message: "长度在 2 到 8 个字符",
                        trigger: "blur",
                    },
                ],
                password: [
                    { required: true, message: "请输入密码", trigger: "blur" },
                    {
                        min: 6,
                        max: 16,
                        message: "长度在 6 到 16 个字符",
                        trigger: "blur",
                    },
                ],
            },
        };
    },
    methods: {
        login() {
            if (this.userInfo.username === "eric") {
                if (this.userInfo.password === "123456") {
                    // 存值
                    if (this.userInfo.rememberMe == true) {
                        localStorage.setItem(
                            "userInfo",
                            JSON.stringify(this.userInfo)
                        );
                    } else {
                        if (localStorage.getItem('userInfo')) {
                            localStorage.removeItem("userInfo");
                        }
                    }
                    this.$message({
                        message: "登录成功",
                        type: "success",
                    });
                    setTimeout(() => {
                        this.$router.push({
                            path: "/home/homeContent",
                        });
                    }, 1000);
                } else if (this.userInfo.password === "") {
                    this.$message({
                        message: "密码不能为空",
                        type: "warning",
                    });
                } else {
                    this.$message({
                        message: "密码错误",
                        type: "error",
                    });
                }
            } else {
                if (this.userInfo.username === "") {
                    this.$message({
                        message: "用户名不能为空",
                        type: "warning",
                    });
                } else {
                    this.$message({
                        message: "用户名错误",
                        type: "error",
                    });
                }
            }
        },
    },
    mounted() {
        if (localStorage.getItem("userInfo")) {
            const userData = JSON.parse(localStorage.getItem("userInfo"));
            this.userInfo.username = userData.username;
            this.userInfo.password = userData.password;
            this.userInfo.rememberMe = userData.rememberMe;
        }
    },
};
</script>

<style scoped>
.container {
    background-color: #324057;
    color: white;
    /* height: 100vh; */
    height: 100%;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    box-sizing: border-box;
}
.el-form {
    box-sizing: border-box;
    width: 440px;
    height: 320px;
    background: #fff;
    padding: 30px;
    border-radius: 10px;
}
h1 {
    text-align: center;
}
.el-input {
    border: 0px;
    outline-style: none;
}
.el-button {
    width: 100%;
    font-size: 16px;
    margin-top: 10px;
}
.el-checkbox {
    margin-bottom: 10px;
}
.tip {
    color: #409eff;
    font-size: 13px;
    margin: 4px auto;
    text-align: center;
}
</style>
