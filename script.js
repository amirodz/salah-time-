// get location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        console.log("Geo location is not supported by this browser");
    }
	
	function success(pos) {
		var lat = pos.coords.latitude;
		var long = pos.coords.longitude;

		console.log(lat);
		console.log(long);
        var lat = toFixed(lat,7);
        var long = toFixed(long,7);
		updateprayer(lat, long);
	document.getElementById("latitude").value = lat;
    document.getElementById("longitude").value = long;

	};
	
	function error() {
		console.log('greska');
         switch(error.code) {
		case error.PERMISSION_DENIED:
		var message = "User denied the request for Geolocation."
		  break;
		  case error.POSITION_UNAVAILABLE:
		  var message = "Location information is unavailable."
		  break;
		  case error.TIMEOUT:
		  var message = "The request to get user location timed out."
		  break;
		case error.UNKNOWN_ERROR:
		var message = "An unknown error occurred."
		break;
	             }
   document.getElementById("notification_message").innerHTML = "<strong>Warning!</strong> "+message+"";
   document.getElementById("notification_panel").style.display = 'block';
	var lat ='37.0066244';
	var long = '6.5700192';
	updateprayer(lat,long);
	document.getElementById("latitude").value = lat;
    document.getElementById("longitude").value = long;

	 }; 
	
moment.locale('ar', {
    months : 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsParseExact : true,
    weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact : true,
    longDateFormat : {
        LT : 'HH:mm',
        LTS : 'HH:mm:ss',
        L : 'DD/MM/YYYY',
        LL : 'D MMMM YYYY',
        LLL : 'D MMMM YYYY HH:mm',
        LLLL : 'dddd D MMMM YYYY HH:mm'
    },
    calendar : {
        sameDay: '[اليوم على الساعة] LT',
        nextDay: '[غدا على الساعة] LT',
        nextWeek: 'dddd [على الساعة] LT',
        lastDay: '[أمس على الساعة] LT',
        lastWeek: 'dddd [على الساعة] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : 'في %s',
        past : 'منذ %s',
        s : 'ثوان',
        m : 'دقيقة',
        mm : '%d دقائق',
        h : 'ساعة',
        hh : '%d ساعات',
        d : 'يوم',
        dd : '%d أيام',
        M : 'شهر',
        MM : '%d أشهر',
        y : 'سنة',
        yy : '%d سنوات'
    },
    dayOfMonthOrdinalParse : /\d{1,2}(er|e)/,
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : 'e');
    },
    meridiemParse : /PD|MD/,
    isPM : function (input) {
        return input.charAt(0) === 'مساء';
    },
    // In case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example).
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
    // },
    meridiem : function (hours, minutes, isLower) {
        return hours < 12 ? 'صباحا' : 'مساءا';
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // Used to determine first week of the year.
            }
        });	
	
        var tzone = moment.tz.guess(true);
        var now = moment();
		var datemoment = moment(now, "DD/MM/YYYY").format('dddd  DD MMMM YYYY  HH:mm:ss a');
        var isDST = moment([now]).isDST(); // false, March 12 2011 is not DST
        var summergmtoffset = moment.tz(now, tzone).utcOffset()/60;
		
     if (isDST == false) {
		isDST = "0"; // daylight savings time is NOT observed
	  } else {
		isDST = "1"; // daylight savings time is observed
	   }
	 document.getElementById("timezone").value = summergmtoffset;
     document.getElementById("dst").value = isDST;
	 document.getElementById("datemoment").innerHTML = datemoment;
	 	
	
	
	function toFixed( num, precision ) {
    return (+(Math.round(+(num + 'e' + precision)) + 'e' + -precision)).toFixed(precision);
}
	
	function currentPrayer(date,times) {
            if (date >= times.isha) {
                //return 'العشاء';
				return times.isha;
            } else if (date >= times.maghrib) {
                return times.maghrib;				
                //return 'المغرب';
            } else if (date >= times.asr) {
                //return 'العصر';
                return times.asr;
            } else if (date >= times.dhuhr) {
                //return 'الظهر';
			   return times.dhuhr;
            } else if (date >= times.sunrise) {
                //return 'الشروق';
				return times.fajr;
            } else if (date >= times.fajr) {
                //return 'الفجر';
		        return times.fajr;
            } 
        }	

 function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
 }

 function myday() {
  var d = new Date();
  var h = addZero(d.getHours());
  var m = addZero(d.getMinutes());
  //var s = addZero(d.getSeconds());
  var timenow = h + ":" + m;
   return timenow;
      }


const options = {
     weekday: "long",
     year: "numeric",
     month:"long",
     day:"numeric"
};


  function updateprayer(lat, long) {

		var lat = document.getElementById('latitude').value;
		var lng = document.getElementById('longitude').value;
		var timeZone = document.getElementById('timezone').value;
		var dst = document.getElementById('dst').value;
		var method = document.getElementById('method').value;
		var jurisdiction = document.getElementById('jurisdiction').value;
	
    var prayTimes = new PrayTimes();
	
	prayTimes.adjust({asr: jurisdiction});
	prayTimes.setMethod(method);
	
	
	var date = new Date(); // today
	
     console.log(date.toLocaleDateString());
	console.log(date.toDateString());
	console.log(date.toGMTString());

	// prayTimes.tune({ fajr:'Fajr', sunrise:'Sunrise'});

	var times = prayTimes.getTimes(date, [lat,lng], 'auto');
	
              var nextprayer;
			  var nexttimes;
			  
            if (myday() > times.fajr && myday() < times.dhuhr) {
                 nextprayer = 'الظهر';
				 nexttimes = moment(times.dhuhr, 'hh:mm a');

				//return times.dhuhr;
            } else if (myday() > times.dhuhr && myday() < times.asr) {
                 nextprayer = 'العصر';
				 nexttimes = moment(times.asr, 'hh:mm a');
                //return times.asr;				

            } else if (myday() > times.asr && myday() < times.maghrib) {
                 nextprayer = 'المغرب';
				 nexttimes = moment(times.maghrib, 'hh:mm a');

                //return times.maghrib;
            } else if (myday() > times.maghrib && myday() < times.isha) {
                 nextprayer = 'العشاء';
				 nexttimes = moment(times.isha, 'hh:mm a');
				 
				 //return times.isha;

            } else if (myday() > times.isha) {
                 nextprayer = 'الفجر';
                 nexttimes = moment(times.fajr, 'hh:mm a').add(1, 'day');

		        //return times.fajr;
            } 

			
var from = new Date();
var to = new Date(nexttimes);
var diff = datediff(from,to);
//alert(JSON.stringify(diff));
	  
 	$("#nextprayer").text(nextprayer);	
    $("#days").text(diff.days);
    $("#hours").text(diff.hours);
    $("#seconds").text(diff.seconds);
    $("#minutes").text(diff.minutes);
 
    
		
	//alert(currentPrayer(myday(),times))
	//	alert(myday())

	
	var list = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr','Sunset', 'Maghrib', 'Isha', 'Midnight'];
	var listar = ['الفجر', 'الشروق', 'الظهر', 'العصر', 'الغروب', 'المغرب', 'العشاء', 'منتصف الليل'];

	var html = '<table id="timetable" class="table table-bordered">';
	html += '<tr><th colspan="3">'+ date.toLocaleDateString("ar-DZ",options)+ '</th></tr>';
	for(var i in list)	{
		
		if (myday() == times[list[i].toLowerCase()]) {
		html += '<tr class="success">';
		} else if (currentPrayer(myday(),times)== times[list[i].toLowerCase()]){
		html += '<tr class="danger">';
            }
		html += '<td>'+ list[i]+ '</td>';
		
		html += '<td>'+ times[list[i].toLowerCase()]+ '</td>';
            
		html += '<td>'+ listar[i]+ '</td></tr>';
	}
	html += '</table>';
	document.getElementById('table').innerHTML = html;

	    return times;

	}
	

