// 游戏逻辑：系统随机抽取 i, ir, igh 3个音素中的一个，开始游戏后，玩家通过左右键移动basket去接下落的单词，如果basket上的tag和单词的phoneme对应，则加分，否则掉血；



(function(window, undefined){
  /**
   * Fruit game initialization object
   */
  var wordGame = function(args){
      /* Word Types */
      this.WordList = [
        // /i/ (short i) words
        { ID: 'W1', WordName: 'slip', Phoneme: 'i', Cent: 50 },
        { ID: 'W2', WordName: 'flip', Phoneme: 'i', Cent: 50 },
        { ID: 'W3', WordName: 'skin', Phoneme: 'i', Cent: 50 },
        { ID: 'W4', WordName: 'trim', Phoneme: 'i', Cent: 50 },
        { ID: 'W5', WordName: 'split', Phoneme: 'i', Cent: 50 },
        { ID: 'W6', WordName: 'drink', Phoneme: 'i', Cent: 50 },
        { ID: 'W7', WordName: 'swift', Phoneme: 'i', Cent: 50 },
        { ID: 'W8', WordName: 'brick', Phoneme: 'i', Cent: 50 },
        { ID: 'W9', WordName: 'spirit', Phoneme: 'i', Cent: 50 },
        { ID: 'W10', WordName: 'insist', Phoneme: 'i', Cent: 50 },
        { ID: 'W11', WordName: 'switch', Phoneme: 'i', Cent: 50 },
        { ID: 'W12', WordName: 'picnic', Phoneme: 'i', Cent: 50 },
        { ID: 'W13', WordName: 'fitness', Phoneme: 'i', Cent: 50 },
        { ID: 'W14', WordName: 'dismiss', Phoneme: 'i', Cent: 50 },
        { ID: 'W15', WordName: 'cricket', Phoneme: 'i', Cent: 50 },
        { ID: 'W16', WordName: 'dimming', Phoneme: 'i', Cent: 50 },
        { ID: 'W17', WordName: 'drifting', Phoneme: 'i', Cent: 50 },
        { ID: 'W18', WordName: 'visiting', Phoneme: 'i', Cent: 50 },
        { ID: 'W19', WordName: 'scribble', Phoneme: 'i', Cent: 50 },
        { ID: 'W20', WordName: 'splitting', Phoneme: 'i', Cent: 50 },
        { ID: 'W21', WordName: 'scripting', Phoneme: 'i', Cent: 50 },
        { ID: 'W22', WordName: 'beginning', Phoneme: 'i', Cent: 50 },
        { ID: 'W23', WordName: 'twitching', Phoneme: 'i', Cent: 50 },
      
        // /igh/ (long i) words
        { ID: 'W24', WordName: 'bike', Phoneme: 'igh', Cent: 50 },
        { ID: 'W25', WordName: 'bite', Phoneme: 'igh', Cent: 50 },
        { ID: 'W26', WordName: 'dime', Phoneme: 'igh', Cent: 50 },
        { ID: 'W27', WordName: 'dine', Phoneme: 'igh', Cent: 50 },
        { ID: 'W28', WordName: 'slide', Phoneme: 'igh', Cent: 50 },
        { ID: 'W29', WordName: 'drive', Phoneme: 'igh', Cent: 50 },
        { ID: 'W30', WordName: 'shine', Phoneme: 'igh', Cent: 50 },
        { ID: 'W31', WordName: 'write', Phoneme: 'igh', Cent: 50 },
        { ID: 'W32', WordName: 'beside', Phoneme: 'igh', Cent: 50 },
        { ID: 'W33', WordName: 'provide', Phoneme: 'igh', Cent: 50 },
        { ID: 'W34', WordName: 'excited', Phoneme: 'igh', Cent: 50 },
        { ID: 'W35', WordName: 'rewrite', Phoneme: 'igh', Cent: 50 },
        { ID: 'W36', WordName: 'decline', Phoneme: 'igh', Cent: 50 },
        { ID: 'W37', WordName: 'sideline', Phoneme: 'igh', Cent: 50 },
        { ID: 'W38', WordName: 'timeline', Phoneme: 'igh', Cent: 50 },
        { ID: 'W39', WordName: 'override', Phoneme: 'igh', Cent: 50 },
        { ID: 'W40', WordName: 'lifetime', Phoneme: 'igh', Cent: 50 },
        { ID: 'W41', WordName: 'guideline', Phoneme: 'igh', Cent: 50 },
        { ID: 'W42', WordName: 'sightline', Phoneme: 'igh', Cent: 50 },
        { ID: 'W43', WordName: 'terrified', Phoneme: 'igh', Cent: 50 },
      
        // /ir/ words
        { ID: 'W44', WordName: 'stir', Phoneme: 'ir', Cent: 50 },
        { ID: 'W45', WordName: 'gird', Phoneme: 'ir', Cent: 50 },
        { ID: 'W46', WordName: 'bird', Phoneme: 'ir', Cent: 50 },
        { ID: 'W47', WordName: 'shirt', Phoneme: 'ir', Cent: 50 },
        { ID: 'W48', WordName: 'third', Phoneme: 'ir', Cent: 50 },
        { ID: 'W49', WordName: 'swirl', Phoneme: 'ir', Cent: 50 },
        { ID: 'W50', WordName: 'birth', Phoneme: 'ir', Cent: 50 },
        { ID: 'W51', WordName: 'thirst', Phoneme: 'ir', Cent: 50 },
        { ID: 'W52', WordName: 'circle', Phoneme: 'ir', Cent: 50 },
        { ID: 'W53', WordName: 'firmer', Phoneme: 'ir', Cent: 50 },
        { ID: 'W54', WordName: 'virtual', Phoneme: 'ir', Cent: 50 },
        { ID: 'W55', WordName: 'circuit', Phoneme: 'ir', Cent: 50 },
        { ID: 'W56', WordName: 'divert', Phoneme: 'ir', Cent: 50 },
        { ID: 'W57', WordName: 'twirl', Phoneme: 'ir', Cent: 50 },
        { ID: 'W58', WordName: 'swirl', Phoneme: 'ir', Cent: 50 },
        { ID: 'W59', WordName: 'stirrable', Phoneme: 'ir', Cent: 50 },
        { ID: 'W60', WordName: 'squirt', Phoneme: 'ir', Cent: 50 },
        { ID: 'W61', WordName: 'chirp', Phoneme: 'ir', Cent: 50 },
      ];
      


      /* Global references for generating and moving words */
      this.BuilderWord = null;
      this.WordMove = null;

      /* Global settings */
      this.Setting = $.extend({
          // Game container
          GameBox: $('div#game_box'),
          // Basket
          CarBox: $('div#carBox'),
          // Basket movement width
          CarMoveWidth: 30,
          // Basket width
          CarBoxWidth: $('div#carBox').width(),
          // Game container width
          BoxWidth: 400,
          // Game container height
          BoxHeight: 500,
          // Word width
          WordWidth: 30,
          // Current total score
          CountCent: 0,
          // Current level
          LevelNum: 1,
          // Current level - level-up listener variable
          ListenerLevelNum: 1,
          // Player name
          UserName: 'Alex',
          // Pause flag
          Pause: false,
          // Start flag
          Start: false,
          // Basket tag
          BasketTag: '',
      }, args);
  };

  /**
   * Randomly assigns a tag to the basket from ['ir', 'i', 'igh']
   */
  wordGame.prototype.AssignRandomTag = function(){
    var tags = ['ir', 'i', 'igh'];
    var randomTagIndex = Math.floor(Math.random() * tags.length);
    this.Setting.BasketTag = tags[randomTagIndex];
    // Update the basket tag display in the game
    // Assuming you have an element to show the tag, update it here
    // $('#basketTag').text(this.Setting.BasketTag);
  
    // Update the basket's background image based on the randomly selected tag
    var basketImageUrl = 'images/basket-' + this.Setting.BasketTag + '.svg'; // Construct the image URL based on the tag
    $('#carBox').css('background-image', 'url(' + basketImageUrl + ')'); // Update the basket's background image
  };
  
  


  /**
   * Randomly gets a word, could be any phoneme type
   */
  wordGame.prototype.GetRandomWord = function(){
      var _this = this,
          _wordCount = _this.WordList.length,
          _wordIndex = Math.floor(Math.random() * _wordCount);
      return _this.WordList[_wordIndex];
  };


/**
* 单词的X位置
*/
wordGame.prototype.BuilderWordPosition = function(){
  var _setting = this.Setting,
      _left = Math.floor(Math.random() * (_setting.BoxWidth - _setting.WordWidth));
  return _left;
}



// 在 wordGame 构造函数中添加初始化控制的逻辑
wordGame.prototype.BindControlMove = function() {
  var _this = this;
  $(document).keydown(function(e) {
    switch (e.which) {
      case 37: // left
        var currentLeft = parseInt(_this.Setting.CarBox.css('left'), 10);
        if (currentLeft > 0) {
          _this.Setting.CarBox.css('left', (currentLeft - _this.Setting.CarMoveWidth) + 'px');
        }
        break;

      case 39: // right
        var currentRight = parseInt(_this.Setting.CarBox.css('left'), 10);
        if (currentRight < (_this.Setting.BoxWidth - _this.Setting.CarBoxWidth)) {
          _this.Setting.CarBox.css('left', (currentRight + _this.Setting.CarMoveWidth) + 'px');
        }
        break;

      case 83: // 'S' key for switching basket tag
        _this.SwitchBasketTag(); // 调用切换篮子标签的函数
        break;

      default:
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });
};




// 添加一个函数来切换篮子标签和背景图像
wordGame.prototype.SwitchBasketTag = function() {
  var _this = this;
  var tags = ['ir', 'i', 'igh']; // 所有可能的标签
  var currentIndex = tags.indexOf(_this.Setting.BasketTag); // 当前标签的索引
  var nextIndex = (currentIndex + 1) % tags.length; // 下一个标签的索引
  _this.Setting.BasketTag = tags[nextIndex]; // 更新当前标签

  // 更新篮子的背景图像以反映新的标签
  var basketImageUrl = 'images/basket-' + _this.Setting.BasketTag + '.svg'; // 根据新标签构造图像URL
  $('#carBox').css('background-image', 'url(' + basketImageUrl + ')'); // 更新篮子的背景图像
};



  /**
   * Starts the game, overwriting the original Start method
   */
  // 开始游戏，设置60秒定时器自动结束游戏
  wordGame.prototype.Start = function() {
    var _this = this;
    _this.AssignRandomTag(); // 随机分配篮子标签
    _this.BindControlMove(); // 绑定控制移动

    // 每隔一段时间生成并下落一个单词
    _this.BuilderWord = setInterval(function() {
      _this.DropWord();
    }, 2000); // 从3000毫秒增加到12000毫秒
    

    // 设置60秒后自动结束游戏
      // 初始化或重置游戏结束倒计时的剩余时间
    _this.GameEndTimeRemaining = 60000; // 60秒

    // 开始或恢复游戏结束倒计时
    _this.GameEndTimeout = setTimeout(function() {
      _this.EndGame(); // 调用 EndGame 方法结束游戏
    }, _this.GameEndTimeRemaining);

    // Add a countdown property to your wordGame settings
    this.Setting.Countdown = 60; // 60 seconds for the countdown

    // Display the initial countdown value
    $('#Countdown').text(this.Setting.Countdown);

    // Update the countdown every second
    this.CountdownInterval = setInterval(function() {
      _this.Setting.Countdown--;
      $('#Countdown').text(_this.Setting.Countdown);
      
      if (_this.Setting.Countdown <= 0) {
        clearInterval(_this.CountdownInterval);
        _this.EndGame(); // End the game when the countdown reaches 0
      }
    }, 1000);

  };


  wordGame.prototype.PauseGame = function() {
    var self = this; // 保留对wordGame实例的引用
  
    if (self.Setting.Pause) {
      // 恢复游戏
      self.Setting.Pause = false;
  
      // 更改按钮文本为 "Pause"
      $('#btnPause').text('Pause');
  
      // 恢复倒计时
      self.CountdownInterval = setInterval(function() {
        self.Setting.Countdown--;
        $('#Countdown').text(self.Setting.Countdown);
  
        if (self.Setting.Countdown <= 0) {
          clearInterval(self.CountdownInterval);
          self.EndGame();
        }
      }, 1000);
  
      // 恢复游戏结束倒计时
      self.GameEndTimeout = setTimeout(function() {
        self.EndGame();
      }, self.GameEndTimeRemaining);
  
      // 恢复单词生成
      self.BuilderWord = setInterval(function() {
        self.DropWord();
      }, 2000); // 使用与开始单词下落时相同的间隔
  
      // 恢复屏幕上每个单词的移动
      $('.thing').each(function() {
        var $element = $(this);
        var moveInterval = setInterval(function() {
          var _top = $element.position().top;
          $element.css({ top: (_top + 20) + 'px' });
          // 可能需要在这里包含WordCatchCheck逻辑
        }, 200);
        $element.data('moveInterval', moveInterval);
      });
  
    } else {
      // 暂停游戏
      clearInterval(self.BuilderWord); // 停止生成新单词
      clearInterval(self.CountdownInterval); // 停止倒计时
      clearTimeout(self.GameEndTimeout); // 停止游戏结束倒计时
  
      // 更改按钮文本为 "Resume"
      $('#btnPause').text('Resume');
  
      // 保存游戏结束倒计时的剩余时间
      self.GameEndTimeRemaining -= new Date() - self.GameStartTime;
      self.Setting.Pause = true;
  
      // 停止屏幕上每个单词的移动
      $('.thing').each(function() {
        var $element = $(this);
        var moveInterval = $element.data('moveInterval');
        clearInterval(moveInterval);
      });
    }
  };
  
  
  


  wordGame.prototype.DropWord = function() {
    var self = this,
        _wordObj = self.GetRandomWord(),
        _domDiv = $('<div class="thing"></div>');
  
    _domDiv.text(_wordObj.WordName);
    _domDiv.attr('data-phoneme', _wordObj.Phoneme);
    _domDiv.css({
      left: self.BuilderWordPosition() + 'px',
      top: '0px'
    });
  
    self.Setting.GameBox.append(_domDiv);
    self.WordDownMove(_domDiv[0]);
  };
  
  /**
   * Word falling logic
   */
  wordGame.prototype.WordDownMove = function(element) {
    var self = this,
        _setting = self.Setting;
  
    var _move = setInterval(function() {
      var _$element = $(element),
          _top = _$element.position().top;
      _$element.css({ top: (_top + 20) + 'px' }); // 单词下移20px
      self.WordCatchCheck(_$element, _move);
    }, 200);
  
    $(element).data('moveInterval', _move); // 存储每个单词移动的间隔ID
  };

  wordGame.prototype.ShowFeedback = function(isPositive) {
    var feedbackClass = isPositive ? 'positive-feedback' : 'negative-feedback';
    var feedbackText = isPositive ? 'Good!' : 'Oops!';
    var feedbackElement = $('<div class="' + feedbackClass + '">' + feedbackText + '</div>');
  
    // Get the position and dimensions of the basket (carBox)
    var basketPosition = this.Setting.CarBox.position();
    var basketWidth = this.Setting.CarBox.width();
    var basketHeight = this.Setting.CarBox.height();
  
    // Calculate the position for the feedback to appear above the basket
    var feedbackTop = basketPosition.top + 400; // 10px above the basket
    var feedbackLeft = basketPosition.left + (basketWidth / 2) - (feedbackElement.width() / 2); // Centered above the basket
  
    // Apply calculated positions to the feedback element
    feedbackElement.css({
      left: feedbackLeft + 'px',
      top: feedbackTop + 'px',
      position: 'absolute' // Ensure the feedback is positioned absolutely within the game container
    });
  
    // Append the feedback element to the game box and set it to fade out after a short duration
    this.Setting.GameBox.append(feedbackElement);
    setTimeout(function() {
      feedbackElement.fadeOut(300, function() {
        $(this).remove(); // Remove the feedback element after fading out
      });
    }, 2000);
  };
  


  wordGame.prototype.WordCatchCheck = function(element, moveInterval) {
    var _this = this,
        _setting = _this.Setting,
        _basketLeft = _setting.CarBox.position().left,
        _basketRight = _basketLeft + _setting.CarBoxWidth,
        _wordLeft = element.position().left,
        _wordRight = _wordLeft + _setting.WordWidth,
        _wordBottom = element.position().top + element.height(),
        _basketTop = _setting.GameBox.height() - _setting.CarBox.height();

    if (_wordBottom >= _basketTop && _wordRight >= _basketLeft && _wordLeft <= _basketRight) {
      clearInterval(moveInterval);
      element.remove();

      // 获取单词的当前位置，用于显示反馈
      var position = { X: _wordLeft, Y: _wordBottom - element.height() };


      var wordPhoneme = element.attr('data-phoneme'); // 使用 attr 方法获取 data-phoneme 属性

      if (wordPhoneme === _setting.BasketTag) {
        _setting.CountCent += 50; // 正确接住单词，得分增加
        _this.ShowFeedback(true, position); // 显示正面反馈
      } else {
        _setting.CountCent -= 50; // 接住错误的单词，得分减少
        _this.ShowFeedback(false, position); // 显示负面反馈
      }
      $('#gameCent').text(_setting.CountCent); // 更新显示的得分
    } else if (_wordBottom > _setting.GameBox.height()) {
      clearInterval(moveInterval);
      element.remove();
      // 没有接住单词不改变得分，不显示反馈
    }
  };

  

  
  // 结束游戏逻辑
  wordGame.prototype.EndGame = function() {
    clearInterval(this.BuilderWord);
    alert('Game Over! Your score: ' + this.Setting.CountCent);
    location.reload(); // 刷新页面
  };



  /**
   * Game initialization
   */
  wordGame.prototype.Init = function(){
    var _this = this;
    //new fruitGame().Start();
  }

  window.wordGame = function(){
      return new wordGame();
  }();



})(window);
