module.exports = function toReadable(number) {
  if (number === 0) return 'zero';

  let hundredCount = Math.floor(number / 100);
  let tenCount = Math.floor((number - hundredCount * 100) / 10);
  let oneCount = number - hundredCount * 100 - tenCount * 10;

  if (tenCount === 1) {
    tenCount = 0;
    oneCount = number - hundredCount * 100;
  }

  const onesReadableString = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  const tensReadableString = [
    '', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ',
    'seventy ', 'eighty ', 'ninety '
  ];

  const hundredReadableString = hundredCount ? onesReadableString[hundredCount] + ' hundred ' : '';
    return (hundredReadableString + tensReadableString[tenCount] + onesReadableString[oneCount]).trim()
};
