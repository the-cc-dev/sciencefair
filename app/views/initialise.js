const html = require('choo/html')
const css = require('csjs-inject')

const prettyms = require('pretty-ms')
const numeral = require('numeral')

const style = css`

.initialising {
  position: absolute;
  bottom: 400px;
  left: 50px;
  font-size: 1,2em;
  font-family: Aleo-Regular;
  color: ${C.MIDBLUE};
  pointer-events: none;
  flex-direction: column;
}

.remaining {
  height: 30px;
}

.outerbar {
  width: 600px;
  height: 50px;
  position: relative;
  justify-content: flex-start;
  background: RGBA(49, 95, 105, 1.00);
}

.innerbar {
  height: 100%;
  background: RGBA(72, 132, 145, 1.00);
}

`

let start

module.exports = (state, prev, send) => {
  if (!state.initialising) return null
  if (!state.datasources.loaded) return null
  if (!state.datasources.list[0]) return null

  if (!start) {
    start = new Date()
  }

  const metastat = state.datasources.list[0].stats.metadataSync
  if (metastat.finished) {
    send('initialising_stop')
    return null
  }

  const syncdone = metastat.done / metastat.total
  const synced = metastat.finished
    ? '100%'
    : numeral(`${syncdone}`).format('0%')
  const elapsed = new Date() - start
  const estimate = (syncdone == 1) ? 0 : (elapsed * (metastat.total / metastat.done))
  const estimatetxt = estimate === Infinity || isNaN(estimate)
    ? 'calculating estimated time'
    : 'estimated ' + prettyms(estimate, { compact: true })

  const remaining = html`

  <div class="${style.remaining}">
    ${estimatetxt} remaining (${synced})
  </div>

  `

  const bar = html`

  <div class="${style.outerbar}">
    <div class="${style.innerbar}" style="width: ${synced};" />
  </div>

  `

  return html`

  <div class="${style.initialising}">
    ${remaining}
    ${bar}
  </div>

  `
}
