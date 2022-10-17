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
      <el-form :model="form">
        
        <el-row>
          <el-col :span="12">
            <el-form-item label="用户名">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="id">
              <el-input v-model="form.id" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">拒绝</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
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
        this.$message.error('称号未填写完整');
        return
      }
      
      this.dialogFormVisible = true
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
