<template>
  <div>
    <el-container>
      <el-header>
        <el-steps :active=currentStep simple>
          <el-step title="背景"></el-step>
          <el-step title="徽章"></el-step>
          <el-step title="称号"></el-step>
        </el-steps>
      </el-header>

      <el-main v-show="backShowFlag">
        <el-row :gutter="20" justify="center">
          <el-col :span="6" v-for="(item, index) in background" :key="index">
            <el-card shadow="hover" @click.native="backSelected(item)" :class="{'select': item.fileName==backName}">
              <el-image :src=item.path class="image"></el-image>
              <div style="padding: 14px;">
                <div>{{item.fileName}}</div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>

      <el-main v-show="badgeShowFlag">
        <el-select v-model="badge1Value" placeholder="徽章1" filterable>
          <el-option
            v-for="item in badge"
            :key="item.fileName"
            :label="item.label"
            :value="item.fileName">
            <span>{{item.label}}</span>
            <el-image :src=item.path class="image" style="height:32px; float: left; margin-right: 8px;"></el-image>
          </el-option>
        </el-select>

        <el-select v-model="badge2Value" placeholder="徽章2" filterable>
          <el-option
            v-for="item in badge"
            :key="item.fileName"
            :label="item.label"
            :value="item.fileName">
            <span>{{item.label}}</span>
            <el-image :src=item.path class="image" style="height:32px; float: left; margin-right: 8px;"></el-image>
          </el-option>
        </el-select>

        <el-select v-model="badge3Value" placeholder="徽章3" filterable>
          <el-option
            v-for="item in badge"
            :key="item.fileName"
            :label="item.label"
            :value="item.fileName">
            <span>{{item.label}}</span>
            <el-image :src=item.path class="image" style="height:32px; float: left; margin-right: 8px;"></el-image>
          </el-option>
        </el-select>
      </el-main>

      <el-main v-show="titleShowFlag">
        <el-select v-model="adjectiveValue" placeholder="Adjectives" filterable>
          <el-option
            v-for="item in adjective"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div>的</div>
        <el-select v-model="subjectiveValue" placeholder="Subjectives" filterable>
          <el-option
            v-for="item in subjective"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-main>

    </el-container>

    <el-dialog :visible.sync="dialogFormVisible" center>
      <p>
        使用此功能，视同使用者同意以下内容：
      </p>
      <ul>
        <li>
          我不会将生成的内容商用或谋利;
        </li>
        <li>
          我不会用生成的内容来欺骗他人;
        </li>
        <li>
          我不会生成违反公序良俗的内容;
        </li>
      </ul>
      <p>
        若同意，请输入显示在名片上的用户名及id
      </p>

      <el-form :model="form">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="用户名">
              <el-input v-model="form.name" autocomplete="off" style="width:250px" placeholder="名片正中心的用户名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="id">
              <el-input v-model="form.id" autocomplete="off" style="width:250px" placeholder="名片左下角的一串数字"
              oninput ="value=value.replace(/[^\d]/g,'')"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="getSplatag">确定</el-button>
        <el-button type="danger" @click="dialogFormVisible = false">拒绝</el-button>
      </div>
    </el-dialog>

    <div class="d1">
      <el-button v-show="backShowFlag&&backSelectedFlag" class="button-footer" @click="toBadge">使用该背景</el-button>
      <el-button v-show="badgeShowFlag" class="button-footer" @click="toTitle">使用该徽章</el-button>
      <el-button v-show="titleShowFlag" class="button-footer" @click="toGenerate">使用该称号</el-button>
    </div>

  </div>
</template>

<script>
import {getTag} from "../api/api"

export default {
  name: 'splatag',
  data () {
    return {
      backSelectedFlag: false,
      badgeSelectedFlag: false,
      titleSelectedFlag: false,
      dialogFormVisible: true,

      backShowFlag: true,
      badgeShowFlag: false,
      titleShowFlag: false,

      backName: "",
      badgeName: "",
      titleName: "",

      currentStep: 0,
      msg: "www",
      background: [],
      badge: [],
      subjective: [],
      adjective: [],

      badge1Value: [],
      badge2Value: [],
      badge3Value: [],
      subjectiveValue: "",
      adjectiveValue: "",
      prefixBase64: 'data:image/png;base64,',

      form: {
        name: "",
        id: ""
      },
    }
  },

  created() {
    const path = require("path")
    const files = require.context("@/assets/background", false, /\.(webp)$/)
    const badges = require.context("@/assets/badge", false, /\.(webp)$/)
    const badge_mapper = require("@/assets/badge/badge_mapper.json")
    const subjectives = require("@/assets/title/subjectives.json")
    const adjectives = require("@/assets/title/adjectives.json")

    files.keys().forEach(file => {
      const name = path.basename(file)
      this.background.push({fileName: name, path: require("@/assets/background/" + name)})
    })

    badges.keys().forEach(badge => {
      const badgeName = path.basename(badge)
      var label = "暂无说明"
      badge_mapper.forEach(mapper => {
        if(badgeName == mapper.fileName) {
          label = mapper.label
          return
        }
      })
      this.badge.push({fileName: badgeName, path: require("@/assets/badge/" + badgeName), label: label})
    })

    subjectives.forEach(item => {
      this.subjective.push({value: item.chinese, label: item.chinese})
    })

    
    adjectives.forEach(item => {
      this.adjective.push({value: item.chinese, label: item.chinese})
    })
  },

  methods: {
    toBadge() {
      this.currentStep = 1
      this.backShowFlag = false
      this.badgeShowFlag = true
      this.titleShowFlag = false
    },

    toTitle() {
      this.currentStep = 2
      this.backShowFlag = false
      this.badgeShowFlag = false
      this.titleShowFlag = true
    },

    toGenerate() {
      if(this.subjectiveValue == "" || this.adjectiveValue == "") {
        this.$message.error('称号未填写完整')
        return
      }
      
      this.dialogFormVisible = true
    },

    getSplatag() {
      getTag(this.backName, 
      this.badge1Value, 
      this.badge2Value, 
      this.badge3Value, 
      this.adjectiveValue, 
      this.subjectiveValue).then(res => {
        console.log(res)
      })
    },

    backSelected(item) {
      this.backName = item.fileName;
      this.backSelectedFlag = true;
    },
  }

  
}
</script>

<style>
.button-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  line-height: var(--footer-height);
  background: #42b983;
  color: #fff;
}
.d1 {
   min-width: 100%;
    height: 40px;
    position: relative;
    display:flex;
    justify-content:flex-end;
}
.select {
  background-color: #42faa752;
}
</style>
