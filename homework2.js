// 1 String.prototype.charCodeAt()
{
    function mycharCodeAt(str, index) {
      const symbols = [
        ' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')',
        '*', '+', ',', '-', '.', '/', '0', '1', '2', '3',
        '4', '5', '6', '7', '8', '9', ':', ';', '<', '=',
        '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
        'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[',
        '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
        'z', '{', '|', '}', '~'
      ]
      const result = str[index];
      if (index < 0 || index >= str.length) {
        return NaN;
      }
      for (let i = 0; i < symbols.length; i++) {
        if (symbols[i] === result) {
          return (i + 32);
        }
      }
      return -1;
    }
    console.log(mycharCodeAt("Arsenal", 4));
  }



  // 2 String.prototype.concat()
  {
    function myconcat() {
      let string = '';
      for (i = 0; i < arguments.length; i++) {
        string += arguments[i]
      }
      return string
    }
    console.log(myconcat('Arsenal', ',', 'Arsenal'))
  }


  // 3 String.prototype.endsWith()
  {
    function myendsWith(str, sub, position = str.length) {
      for (let i = 0; i < sub.length; i++) {
        if (str[position - sub.length] !== sub[i]) {
          return false
        }
        return true
      }
    }
    console.log(myendsWith('Ars Tot Che Mu', 'tot', 7))
  
  }

  // 4  String.prototype.lastIndexOf()
  {
    function mylastIndexOf(str, search, position) {
      if (typeof position === 'undefined' || position >= str.length) {
        position = str.length - 1;
      } else if (position < 0) {
        position = 0;
      }
  
      for (let i = position; i >= 0; i--) {
        let match = true;
        for (let j = 0; j < search.length; j++) {
          if (str[i + j] !== search[j]) {
            match = false;
            break;
          }
        }
        if (match) {
          return i;
        }
      }
      return -1;
    }
    console.log(mylastIndexOf('Arsenal in win APL 2024', 'win', 16));
  }

  // 5 String.prototype.repeat()
  {
    function repeat(str, count) {
      let str1 = ''
      for (let i = 0; i < Math.floor(count); i++) {
        str1+= str
      }
      return str1
    }
    console.log(repeat('Arsenal', 3.5))
  }

  // 6 String.prototype.replace()
  {
    function myreplace(str, search, replaceValue) {
      let result = '';
      let index = 0;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === search[index]) {
          index++;
          if (index === search.length) {
            result += replaceValue;
            index = 0;
          }
        } else {
          result += str[i];
          index = 0;
        }
      }
      return result;
    }
    console.log(myreplace('Arsenal', 'Ars', 'sen'));
  }

  // 7 String.prototype.slice()
  {
    function myslice(str, start, end) {
      if (start < 0) {
        start = str.length + start, 0;
      }
      if (end === undefined || end > str.length) {
        end = str.length;
      } else if (end < 0) {
        end = str.length + end, 0;
      }
      if (end < start) {
        return "";
      }
  
      let result = "";
      for (let i = start; i < end; i++) {
        result += str[i];
      }
      return result;
    }
    console.log(myslice('Arsenal, Arsenal', 7, 12));
  
  }


  // 8 String.prototype.split()
  {
    function mysubstring(str, start = 0, end = str.length) {
      if (start < end) {
        let sub = '';
        for (let i = start; i < end; i++) {
          sub += str[i];
        }
        return sub;
      }
    }
  
    function mysplit(input, limit) {
      let result = [];
      let start = 0;
      for (let i = 0; i < input.length; i++) {
        if (input[i] === limit) {
          result.push(mysubstring(input, start, i));
          start = i + 1;
        }
      }
      result.push(mysubstring(input, start, input.length));
      return result;
    }
    console.log(mysplit("Arsenal, Milan, Real", ","));
  }
  
  // 9 String.prototype.startsWith()
  {
    function mystartsWith(str, sub, position = 0) {
      for (let i = sub.length; i > 0; i--) {
        if (str[position - sub.length] !== sub[i]) {
          return false
        }
        return true
      }
    }
    console.log(mystartsWith('Ars Tot Che Mu', 'tot', 1))
  }

  // 10 String.prototype.substring() 
  {
    function mysubstring(str, start = 0, end = str.length) {
      if (start < end) {
        let sub = '';
        for (let i = start; i < end; i++) {
          sub += str[i];
        }
        return sub;
      }
    }
    console.log(mysubstring('Arsenal', 4));
  }