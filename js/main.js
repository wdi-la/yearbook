function StudentCtrl($scope) {

  $scope.students = [

    { "first":'Tiffany', "last":'Andrews', "linkedin":'pub/tiffany-andrews/9/a14/446/', "github":'TiffanyAndrews', "twitter":'TiffiAndrews', "portfolio":'tiffany-andrews.com', "angellist":'tiffany-andrews', "imgURL":'images/andrews.png', "bio":'Tiffany is a full stack web developer and results- orientated project manager with over 8 years in government and partnership management. She is a Co-Organizer for Women Who Code-LA Chapter and enjoys working on open-source projects in Javascript and Rails.' },
    { "first":'Michael', "last":'Azarian', "linkedin":'in/mazarian/', "github":'mazarian', "twitter":'mazarian', "portfolio":'www.devshop.la', "angellist":'https://angel.co/mazarian', "imgURL":'images/azarian.png', "bio":'With a background in IT consulting for small businesses, Michael is able to quickly apply business logic to the software he develops.  Coupled with his passion for backend development, Michael is able to create software that enhances efficiency and user/customer experience.' },
    { "first":'Rachel', "last":'Bailin', "linkedin":'in/rachelbailin', "github":'Rbailin', "twitter":'rachelbailin', "portfolio":'grappple.herokuapp.com/', "angellist":'rachel-bailin', "imgURL":'images/bailin.png', "bio":'Rachel is an accomplished Senior Marketing/PR Manager with full stack developer experience. She has over 5 years leading innovative marketing strategies in startup and digital marketing agency environments and is looking to join another startup or any business focused on rapid growth and solving complex problems.' },
    { "first":'Kate', "last":'Bankert', "linkedin":'pub/kate-bankert/4/528/11a/', "github":'kbankert', "twitter":'katebankert', "portfolio":'katebankert.com', "angellist":'', "imgURL":'images/bankert.png', "bio":'Kate is interested in building interactive software applications that make people happier and healthier. She has an MBA from Stanford Graduate School of Business and previous experience in strategy, operations and business development serving General Motors, Microsoft, Hulu, Syfy, Match.com, Drugstore.com, Exercise.com and Spot Runner.' },
    { "first":'Scott', "last":'Bigbee', "linkedin":'pub/scott-bigbee/b/935/721', "github":'sunchaser33', "twitter":'ScottBigbee', "portfolio":'www.OurLocationsDept.com', "angellist":'', "imgURL":'images/bigbee.png', "bio":'Scott is a veteran of the Film Industry with 18 years experience as a union Location Manager and Scout.  He is currently using his training at GA to create “Our Locations Dept.”, a web app designed to better manage the location scouting and selection process for film productions.' },
    { "first":'Jay', "last":'Bittner', "linkedin":'pub/jay-bittner/20/57a/b32/', "github":'jtbitt', "twitter":'', "portfolio":'www.jaybittner.com', "angellist":'', "imgURL":'images/bittner.png', "bio":'A highly motivated, new developer in the industry, Jay is inspired by the power of coding, and the possibilities to effect the lives of millions of people. What he loves most about coding is "having the ability to create something beautiful, that can be shared with many people, to change the world".' },
    { "first":'James', "last":'Calhoun', "linkedin":'in/jamesfadm/', "github":'macaroni92', "twitter":'', "portfolio":'', "angellist":'james-calhoun', "imgURL":'images/calhoun.png', "bio":'Former film maker and life time entrepreneur, James decided to shift his focus to tech where he could explore his curiosity and overcome challenges through the art of coding.' },
    { "first":'Kyle', "last":'Chadha', "linkedin":'in/kylechadha/', "github":'kylechadha', "twitter":'kylechadha', "portfolio":'kylechadha.com', "angellist":'', "imgURL":'images/chadha.png', "bio":'Kyle is a UC Berkeley grad with a background in management consulting. After working on a few of his own entrepreneurial projects, he fell in love with coding and is now looking to gain experience working as a developer full time.' },
    { "first":'Hamilton', "last":'Chan', "linkedin":'pub/hamilton-chan/0/649/ba6', "github":'hamiltonchan', "twitter":'hamiltonchan', "portfolio":'', "angellist":'', "imgURL":'images/chan.png', "bio":'' },
    { "first":'Tanya', "last":'Contreras', "linkedin":'in/tanyacontreras/', "github":'tanyacontreras', "twitter":'_tanyacontreras', "portfolio":'tanyacontreras.com', "angellist":'tanya-contreras', "imgURL":'images/contreras.png', "bio":'Tanya\'s passion for creating beautiful things intrigued her into the web world about 2 years ago. As a .NET developer, she was interested in learning RoR and the never ending journey of learning has brought her to create great products and hopes to share her knowledge with those eager to learn as well. ' },
    { "first":'Bita', "last":'Djaghouri', "linkedin":'in/bitadj', "github":'bitadj', "twitter":'bitadj', "portfolio":'bitadj.com', "angellist":'bitadj', "imgURL":'images/djaghouri.png', "bio":'Bita dabbled in programming for years before honing in on web development in the WDI program at GA. Since fully committing to coding, she has developed a passion for data and back-end development.' },
    { "first":'Alexandra', "last":'Estrada', "linkedin":'in/estradaalexandra', "github":'estrada88', "twitter":'', "portfolio":'', "angellist":'', "imgURL":'images/estrada.png', "bio":'' },
    { "first":'Patricia', "last":'Ho', "linkedin":'pub/patricia-ho/29/352/a0a/', "github":'patriciaho', "twitter":'', "portfolio":'peekachu.herokuapp.com', "angellist":'', "imgURL":'images/ho.png', "bio":'A consummate student, Patricia enjoys the challenges of web development across the full stack. She is currently employed as a junior engineer at an amazing company and rocks an equally awesome freelance gig on the side.' },
    { "first":'Ryan', "last":'Holstein', "linkedin":'pub/ryan-holstein/41/923/488/', "github":'RyanHolstein', "twitter":'ryanholstein', "portfolio":'ryanholstein.com', "angellist":'', "imgURL":'images/holstein.png', "bio":'Ryan is Junior Web Developer with an interest in front-end JavaScript / Web 2.0 development. Has a background in Avation and has a B.s from Embry Riddle Aeronautical Univeristy. Fun fact Ryan is a pilot!' },
    { "first":'Ellie', "last":'Hoshizaki', "linkedin":'in/elliehoshizaki', "github":'elliehoshi', "twitter":'ehoshizaki', "portfolio":'elliehoshizaki.com/', "angellist":'elena-hoshizaki', "imgURL":'images/hoshizaki.png', "bio":'Ellie is a UX/UI designer and front end web developer with a BA in Architecture from UCLA. She builds clean code to create interactive and intuitive designs with the end user always in mind.' },
    { "first":'Matt', "last":'Hwang', "linkedin":'pub/matt-hwang/45/477/452', "github":'mhwang206', "twitter":'', "portfolio":'lifehack.herokuapp.com/', "angellist":'', "imgURL":'images/hwang.png', "bio":'Matt is a full stack developer who is very obsessed with product and UX. He loves rapid prototyping and getting user feedback for anything he builds.' },
    { "first":'Jonathan', "last":'Igner', "linkedin":'pub/jonathan-igner/5/77b/50a/', "github":'iggyigner', "twitter":'iggyigner', "portfolio":'grappple.herokuapp.com/', "angellist":'squiiid', "imgURL":'images/igner_2.png', "bio":'Jonathan aka, "Iggy" is a startup founder, designer, web developer and car geek who matches his shoes and sweatpants. Born in LA with NY roots, his creative work includes jobs for rapper Mac Miller, Suspend Magazine, and Bentley Motors. He once chased down his favorite his favorite fashion designer in Chinatown just for a high five.' },
    { "first":'Dan', "last":'Iwao', "linkedin":'pub/daniel-iwao/a/650/71a', "github":'diwao11', "twitter":'daniwao', "portfolio":'www.daniwao.com', "angellist":'', "imgURL":'images/iwao.png', "bio":'Dan believes that all programming should be centered around a user\'s experience. His background as a life-coach and teacher give him the experience needed to create thoughtful web apps. ' },
    { "first":'Damon', "last":'Jacoby', "linkedin":'pub/damon-jacoby/22/7b3/486', "github":'DamonJJ', "twitter":'damonjj', "portfolio":'movie-db.herokuapp.com', "angellist":'damon-jacoby', "imgURL":'images/jacoby.png', "bio":'Damon is a Junior Full Stack Developer, with ten years of coordinating experience in TV. Damon is well versed in knowing how to take a project from inception to completion, enjoys people greatly, and has excellent wisdom in situations involving zombies.' },
    { "first":'Charles', "last":'Julius', "linkedin":'pub/charles-julius/56/a7/591', "github":'cjulius', "twitter":'', "portfolio":'purohealth.com/demo', "angellist":'', "imgURL":'images/julius.png', "bio":'Charles is a full Stack developer and health care professional with more than 9 years of experience with health systems and health law. Currently, he hopes to continue to use his previous experience in health care to enhance medical processes and generate measurable outcomes.' },
    { "first":'Adam', "last":'Kaplan', "linkedin":'in/kaplanadam/', "github":'adamhkaplan', "twitter":'', "portfolio":'', "angellist":'', "imgURL":'images/kaplan.png', "bio":'Adam comes from three years of on-and-off programming experience: his weapons of choice include Javascript and Objective-C.  Quick on the draw, he knows how to feel the pulse of any application thrown his way.  He enjoys dissecting difficult concepts, and making users smile.' },
    { "first":'Andy', "last":'Kwong', "linkedin":'in/andyk314/', "github":'andyk314', "twitter":'andyk314', "portfolio":'andy-kwong.com', "angellist":'', "imgURL":'images/kwong.png', "bio":'Andy is an accountant turned developer, looking for an opportunity to make great products and designs.' },
    { "first":'Justin', "last":'Lalezarian', "linkedin":'in/jlalezarian', "github":'justinlala', "twitter":'', "portfolio":'justinlala.com', "angellist":'', "imgURL":'images/lalezarian.png', "bio":'Justin is a motivated full stack developer with a passion for front-end development and UX design. He uses his technical skills as well as his passion to help others to craft responsive, unique and clean user experiences that often solve complex problems. ' },
    { "first":'Michele', "last":'Larson', "linkedin":'in/michelelarson', "github":'mnicole', "twitter":'', "portfolio":'michelelarson.com', "angellist":'', "imgURL":'images/larson.png', "bio":'Michele\'s passion for thoughtful UX design has her excited about creating web apps that help others. Her background in television production and marketing has developed her skills in project and account management.' },
    { "first":'Hai', "last":'Nguyen', "linkedin":'pub/hai-nguyen/46/655/67a', "github":'howhai', "twitter":'how_hai', "portfolio":'howhai.net/', "angellist":'', "imgURL":'images/h_nguyen.png', "bio":'Hai is a full-stack web developer that loves to explore different web technologies. He has created web applications using Ruby on Rails, NodeJS, and AngularJS. ' },
    { "first":'Jack', "last":'Nguyen', "linkedin":'pub/jack-nguyen/13/7b8/218/', "github":'jnguyen85', "twitter":'allidoisjack', "portfolio":'mumblr.herokuapp.com/', "angellist":'', "imgURL":'images/nguyen.png', "bio":'' },
    { "first":'Kendrick', "last":'Parks', "linkedin":'pub/kendrick-parks/53/8bb/317', "github":'kparks29', "twitter":'', "portfolio":'peekachu.herokuapp.com', "angellist":'', "imgURL":'images/parks.png', "bio":'Kendrick is a serial entrepreneur who loves technology! He will continue to persue the latest and greatest technology and be a part of these innovations. His love of the 80\'s and 90\'s definitely shows up in his work. He loves challenges and problem solving. Great team player and his rapid execution makes his a valuable asset in any team.' },
    { "first":'Peter', "last":'Phan', "linkedin":'pub/peter-phan/48/abb/744/', "github":'pphan98', "twitter":'', "portfolio":'peter-phan.com/', "angellist":'', "imgURL":'images/phan.png', "bio":'As a former engineer, Peter has taken his analytical talents to the world of web development. Learning, growing, and building killer apps are his passionate new goals in life.' },
    { "first":'Bez', "last":'Reyhan', "linkedin":'pub/bez-reyhan/10/aa2/a08', "github":'bezreyhan', "twitter":'', "portfolio":'bezreyhan.com/', "angellist":'', "imgURL":'images/reyhan.png', "bio":'A graduate from UC Berkely\'s business school, as well as having startup marking experience, Bez is excited about turning ideas into products. He\'s particularly interested in JavaScript and loves crafting great user experiences.' },
    { "first":'Alexander', "last":'Saldivar', "linkedin":'pub/alexander-saldivar/86/806/958', "github":'asaldivar', "twitter":'', "portfolio":'xyz-app.herokuapp.com/', "angellist":'', "imgURL":'images/saldivar.png', "bio":'Excited to join the world of web development, Alex brings a background of Economics and marketing to every project he undertakes. He enjoys writing clean code that is fully functional while also keeping user experience in mind.' },
    { "first":'Allan', "last":'Smith', "linkedin":'pub/allan-smith/91/b53/36', "github":'imprecation', "twitter":'', "portfolio":'', "angellist":'', "imgURL":'images/smith.png', "bio":'' },
    // { "first":'Domen', "last":'Vajevec', "linkedin":'in/domenvajevec/', "github":'domenvajevec', "twitter":'domenvajevec', "portfolio":'', "angellist":'', "imgURL":'images/vajevec.png', "bio":'' },
    { "first":'Fernando', "last":'Villasenor', "linkedin":'in/fernandovillasenor/', "github":'fernvilla', "twitter":'fernvillasenor', "portfolio":'fernvillasenor.com', "angellist":'', "imgURL":'images/villasenor.png', "bio":'After 8 years in the sports industry, Fernando is excited for his new career as a full-stack web developer specializing in Rails and JavaScript. He’s quickly learned that being able to take any idea and build it from scratch through code, is one of the most rewarding experiences as a developer.' },
    { "first":'Eugene', "last":'Wen', "linkedin":'pub/eugene-wen/7/b43/310', "github":'newenegue', "twitter":'newenegue', "portfolio":'newenegue.com/', "angellist":'eugene-wen', "imgURL":'images/wen.png', "bio":'With a background in Computer Science and Engineering, as well as 3D Animation Artistry and Photography, Eugene combines his logic and his analytical skills with a keen eye and design sense that results in web applications that are both visually and functionally innovative. His technique and creativity can be applied to UI/UX, front end as well as back end development.' },
    { "first":'Maren', "last":'Woodruff', "linkedin":'in/marenwoodruff', "github":'marenwoodruff', "twitter":'marenwoodruff', "portfolio":'marenwoodruff.com', "angellist":'maren-woodruff', "imgURL":'images/woodruff.png', "bio":'Maren\'s front-end skills and interest in UX is supported by 9 years of experience in the theatre industry, as well as her love of drawing, music and photography. These pursuits strengthen her ability to design attractive, responsive, user-friendly web experiences.' }
  ];


    $scope.images = new Array(24);
    $scope.loadComplete = false;



    $scope.showPage = function(){
      setTimeout(function(){
        $(".new-circle").css("transform","translate(45px, 45px)");
      }, 20);

      setTimeout(function(){
        // $(".new-circle").css("transform","translate(45px, 45px)");
        $(".new-circle").css("transform","translate(15px, -45px)");
        $(".new-circle").animate({'width':365,'height':365,'margin-left':'10','margin-top':'205'}, 200);

        // $(".new-circle").css("transform","scale(5.5) translate(-225px, -213px)");
        // $(".loadimage").css("transform","rotate(18000deg)");
      },1000);
     
      setTimeout(function(){

        $(".loadimage").css("transform","rotate(18000deg)");
        $(".loadimage").css("opacity","1");

        $(".new-circle").css("opacity","0");
      },1800);
      setTimeout(function(){
        $(".loadimage").attr("src","images/GA_LA_logo.png");
      },3500);

      setTimeout(function(){
        $("#loadScreen").css("opacity","1");
        $("#loadScreen").css("background","none");
        $(".main").css("opacity","1");
      },4500);

      setTimeout(function(){
        $("#loadScreen").css("opacity","0");
        $scope.$apply(function(){
          $scope.loadComplete = true;
        });
      },5500);

      // typewriter effect

      var txt = $('.writer').text();
      var timeOut;
      var txtLen = txt.length;
      var char = 0;
      $('.writer').text('|');
      (function typeIt() {   
          var humanize = Math.round(Math.random() * (200 - 30)) + 30;
          timeOut = setTimeout(function() {
              char++;
              var type = txt.substring(0, char);
              $('.writer').text(type + '|');
              typeIt();

              if (char == txtLen) {
                  $('.writer').text($('.writer').text().slice(0, -1)); // remove the '|'
                  clearTimeout(timeOut);
              }

          }, humanize);
      }());

    };

    $scope.makeBright = function(id){
      $(event.target).css("background-image","url(images/"+id+".gif)")
      var x = event.target
      setTimeout(function(){
        $(x).css("background-image","url(images/image"+id+".png)")
      },3000);
    };
}; //close StudentCtrl
// typewriter effect

var txt = $('.writer').text();
var timeOut;
var txtLen = txt.length; 
var char = 0;
$('.writer').text('|');
(function typeIt() {   
    var humanize = Math.round(Math.random() * (200 - 30)) + 30;
    timeOut = setTimeout(function() {
        char++;
        var type = txt.substring(0, char);
        $('.writer').text(type + '|');
        typeIt();

        if (char == txtLen) {
            $('.writer').text($('.writer').text().slice(0, -1)); // remove the '|'
            clearTimeout(timeOut);
        }
    }, humanize);
}());

    














