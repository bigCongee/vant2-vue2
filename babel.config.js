module.exports = {
  // 按需引入
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ],
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
