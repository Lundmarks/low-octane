// German Day.js locale, from https://github.com/iamkun/dayjs/blob/dev/src/locale/de.js

const texts = {
  s: 'några sekunder',
  m: ['en minut', 'en minut'],
  mm: '%d minuter',
  h: ['en timme', 'en timme'],
  hh: '%d timmar',
  d: ['en dag', 'en'],
  dd: ['%d dagar', '%d dagar'],
  M: ['en månad', 'en månad'],
  MM: ['%d månader', '%d månader'],
  y: ['ett år', 'ett år'],
  yy: ['%d år', '%d år']
}

dayjs.locale({
  name: 'se',
  weekdays: 'Söndag_Måndag_Tisdag_Onsdag_Torsdag_Fredag_Lördag'.split('_'),
  weekdaysShort: 'Sön._Mån._Tis._Ons._Tors._Fre._Lör.'.split('_'),
  weekdaysMin: 'Sö_Må_Ti_On_To_Fr_Lö'.split('_'),
  months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
  monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
  ordinal: n => `${n}.`,
  weekStart: 1,
  formats: {
    LTS: 'HH:mm:ss',
    LT: 'HH:mm',
    L : 'YYYY-MM-DD',
    LL : 'D MMMM YYYY',
    LLL : 'D MMMM YYYY [kl.] HH:mm',
    LLLL : 'dddd D MMMM YYYY [kl.] HH:mm'
  },
  relativeTime: {
    future: 'om %s',
    past: 'för %s sedan',
    s : 'några sekunder',
    m : 'en minut',
    mm : '%d minuter',
    h : 'en timme',
    hh : '%d timmar',
    d : 'en dag',
    dd : '%d dagar',
    M : 'en månad',
    MM : '%d månader',
    y : 'ett år',
    yy : '%d år'
  }
})
