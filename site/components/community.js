const html = require('choo/html')

const aclass = 'no-underline bg-animate hover-bg-light-blue silver hover-dark-gray'

const a = (href, txt) => html`
  <a class=${aclass} href="${href}" target="_blank">
    ${  txt}
  </a>
`

module.exports = () => html`

<section id="community" class="w-100 center bg-near-white pa3 mv3 tl avenir">
  <h1 class="dark-gray f2 tc bt bw2 pt5 fw4 ttu">Community</h1>
  <p class="f3 w-80-ns lh-copy ph5-ns mid-gray center">
    ScienceFair v1 was developed by ${a('https://codeforscience.org', 'Code for Science')}
    and ${a('http://fathomlabs.io', 'FathomLabs')} along with ${a('https://github.com/codeforscience/sciencefair/graphs/contributors', 'other contributors')}
    with support from ${a('https://science.mozilla.org', 'Mozilla Science Lab')},
    ${a('https://elifesciences.org', 'eLife')} and the ${a('https://datproject.org', 'Dat')} project.
  </p>
  <p class="f3 w-80-ns lh-copy ph5-ns mid-gray center">
    If you find a bug in ScienceFair please report it on the ${a('https://github.com/codeforscience/sciencefair/issues', 'issue tracker')}.
    You can chat with us any time on ${a('https://webchat.freenode.net/?channels=sciencefair', 'IRC (#sciencefair on freenode.net)')}.
  </p>
  <p class="f3 w-80-ns lh-copy ph5-ns mid-gray center">
    ScienceFair is an Open Source project. Code is licensed under the ${a('https://github.com/codeforscience/sciencefair/blob/master/LICENSE', 'MIT license')}
    and hosted ${a('https://github.com/codeforscience/sciencefair', 'on Github')}.
    We ${a('https://github.com/codeforscience/sciencefair/blob/master/CONTRIBUTING.md', 'welcome contributions')}
    of any kind from anyone, provided you follow our ${a('https://github.com/codeforscience/sciencefair/blob/master/CODE_OF_CONDUCT.md', 'code of conduct')}.
  </p>
  <div class="w-80 ph3-ns pv4 tc center">
    <div class="cf w-50-ns ph2-ns tc center">
      <div class="dib fl w-100 w-50-ns tc">
        <img src="assets/codeforscience_logo.png" alt="Code for Science"/>
      </div>
      <div class="dib fl w-100 w-50-ns tc">
        <img src="assets/fathomlabs_logo.png" alt="Fathom Labs"/>
      </div>
    </div>
    <div class="cf w-two-thirds-ns ph2-ns pv2 tc center">
      <div class="dib fl w-100 w-third-ns tc">
        <img src="assets/sciencelab_logo.png" alt="Mozilla Science Lab"/>
      </div>
      <div class="dib fl w-100 w-third-ns tc">
        <img src="assets/dat_logo.png" alt="Dat data"/>
      </div>
      <div class="dib fl w-100 w-third-ns tc">
        <img src="assets/elife_logo.png" alt="eLife Sciences"/>
      </div>
    </div>
  </div>
</section>

`
