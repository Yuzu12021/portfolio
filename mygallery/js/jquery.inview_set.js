
//main h2が画面内にきたら、スタイルlinestyleを適用する
$('main h2').on('inview', function() {
	$(this).addClass('linestyle');
});

//upスタイルが画面内にきたら、スタイルupstyleを適用する
$('.up').on('inview', function() {
	$(this).addClass('upstyle');
});

//downスタイルが画面内にきたら、スタイルdownstyleを適用する
$('.down').on('inview', function() {
	$(this).addClass('downstyle');
});

//leftスタイルが画面内にきたら、スタイルleftstyleを適用する
$('.left').on('inview', function() {
	$(this).addClass('leftstyle');
});

//rightスタイルが画面内にきたら、スタイルrightstyleを適用する
$('.right').on('inview', function() {
	$(this).addClass('rightstyle');
});

//transform1スタイルが画面内にきたら、スタイルtransform1styleを適用する
$('.transform1').on('inview', function() {
	$(this).addClass('transform1style');
});

//transform2スタイルが画面内にきたら、スタイルtransform2styleを適用する
$('.transform2').on('inview', function() {
	$(this).addClass('transform2style');
});

//transform3スタイルが画面内にきたら、スタイルtransform3styleを適用する
$('.transform3').on('inview', function() {
	$(this).addClass('transform3style');
});

//blurスタイルが画面内にきたら、スタイルblurstyleを適用する
$('.blur').on('inview', function() {
	$(this).addClass('blurstyle');
});

//crackerスタイルが画面内にきたら、クラッカーアニメーションを実行する
$('.cracker').on('inview', function() {
	$('.cracker').append('<span class="crackerstyle"><img src="images/cracker.gif" alt=""><img src="images/cracker.gif" alt=""></span>');
});

　　　　<form>
          <input type="text" id="input_message" value="">
          <input type="button" onclick="func1()" value="ジャンプ">
        </form>

        <script language="javascript" type="text/javascript">
        　　function func1() {
　　　　　　　var input_message = document.getElementById("input_message").value;
           　if(input_message == '自分が決めた言葉'){ 
          　　　window.location.href="飛んでほしいページのリンク";
         　　}　　
        　　}
        </script>

