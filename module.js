const $ = require('jquery')

const speech = require('../../speech/recognition')

const renderer = require('../../renderer')

const c = () => {renderer.showVoiceOverlay(false)}

module.exports = function (data) {
  speech.addCommands({
    "Licht an": () => {
      $.get(data.Url_On).then(c, c)
    },
    "Licht aus": () => {
      $.get(data.Url_Off).then(c, c)
    }
  })
}
