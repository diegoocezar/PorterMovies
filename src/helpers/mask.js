import bignumber from 'bignumber.js'
import moment from 'moment'

export const mask = {
  money: (unformatedValue) => {
    let newMoney = new bignumber(unformatedValue); /* Unmask if needed */
        newMoney = newMoney.toFixed(2); /* Fixing two fraction digits */
        newMoney = newMoney.replace('.', ','); /* replacing dot with comma */
        newMoney = newMoney.replace(/\B(?=(\d{3})+(?!\d))/g, "."); /* including dot after every 3 digits */
        newMoney = '$ '+ newMoney; /* Adding "$" */
    return newMoney;
  },
  date: (unformatedDate) => {
    let formatedDate = moment(unformatedDate).format('MM/DD/YY'); /** Format date */
    return formatedDate;
  },
  time: (unformatedTime) => {
    let formatedTime = moment.utc().startOf('day').add({ minutes: unformatedTime }).format('HH:mm'); /** Format hour using a moment hack*/
    return formatedTime;
  }
}