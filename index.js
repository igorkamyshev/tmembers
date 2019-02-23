const axios = require('axios')

const tmembers = (channel, fallback) =>
  axios
    .get(`http://t.me/${channel}`)
    .then(response => response.data)
    .then(data =>
      /<div class="tgme_page_extra">(.*)? members?<\/div>/gi.exec(data),
    )
    .then(matches => matches[1])
    .then(members => members.replace(' ', ''))
    .then(members => parseInt(members, 10))
    .catch(() => fallback)

module.exports = tmembers
