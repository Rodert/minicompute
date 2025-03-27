Page({
  data: {
    result: '0',
    operator: '',
    firstNum: '',
    waitingForSecondNum: false
  },

  // 添加数字
  appendNum(e) {
    const num = e.currentTarget.dataset.num;
    let { result, waitingForSecondNum } = this.data;

    if (waitingForSecondNum) {
      this.setData({
        result: num,
        waitingForSecondNum: false
      });
    } else {
      this.setData({
        result: result === '0' ? num : result + num
      });
    }
  },

  // 清除
  clear() {
    this.setData({
      result: '0',
      operator: '',
      firstNum: '',
      waitingForSecondNum: false
    });
  },

  // 正负号转换
  changeSign() {
    const { result } = this.data;
    this.setData({
      result: result.charAt(0) === '-' ? result.substr(1) : '-' + result
    });
  },

  // 百分比
  percentage() {
    const { result } = this.data;
    this.setData({
      result: String(parseFloat(result) / 100)
    });
  },

  // 运算符
  operate(e) {
    const operator = e.currentTarget.dataset.type;
    const { result } = this.data;
    
    this.setData({
      operator,
      firstNum: result,
      waitingForSecondNum: true
    });
  },

  // 计算结果
  calculate() {
    const { firstNum, operator, result } = this.data;
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(result);
    let finalResult = 0;

    switch(operator) {
      case '+':
        finalResult = num1 + num2;
        break;
      case '-':
        finalResult = num1 - num2;
        break;
      case '×':
        finalResult = num1 * num2;
        break;
      case '÷':
        finalResult = num1 / num2;
        break;
    }

    this.setData({
      result: String(finalResult),
      operator: '',
      firstNum: '',
      waitingForSecondNum: false
    });
  }
}) 