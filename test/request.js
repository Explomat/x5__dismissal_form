
var http = require('http');

function ping(){
    // An object of options to indicate where to post to
    var post_options = {
        host: '192.168.190.237',
        port: '80',
        path: '/custom_web_template.html?object_id=6426564961292851360&server_id=6426559944368726663&server_name=dismissal_form&action_name=Ping',
        method: 'GET'
    };

    // Set up the request
    var post_req = http.request(post_options, function(res) {
        res.setEncoding('utf8');
        console.log(res.statusCode, res.statusMessage);
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });
     post_req.end();
}

function post(){
    var post_data = JSON.stringify({
    	"we__less_3_months": true,
    	"we__3_to_6_months": true,
    	"we__half_to_1_year": true,
    	"we__1_to_1_5_years": true,
    	"we__1_5_to_3_years": true,
    	"we__3_to_6_years": true,
    	"we__more_6_years": true,
    	"position__cashier_seller": true,
    	"position__cashier_cook": true,
    	"position__cashier_baker": true,
    	"position__cashier_other": true,
    	"nl__team_attitude": true,
    	"nl__payment": true,
    	"nl__disrespect": true,
    	"nl__living_conditions": true,
    	"nl__equipment": true,
    	"nl__organization": true,
    	"nl__long_to_go_work": true,
    	"nl__location": true,
    	"nl__schedule": true,
    	"nl__load": true,
    	"nl__reprocessing": true,
    	"nl__reprocessing_not_paid": true,
    	"nl__heavy": true,
    	"nl__low_salary": true,
    	"nl__conditions_salary": true,
    	"nl__buy_products": true,
    	"nl__not_in_time_payment": true,
    	"nl__social_package": true,
    	"nl__monotony": true,
    	"nl__not_independence": true,
    	"nl__not_career": true,
    	"ttw__not_planned": true,
    	"ttw__more_than_month": true,
    	"ttw__in_month": true,
    	"leaving_company": "5. Если у вас есть желание, опишите, пожалуйста, более подробно, почему вы уходите из Компании.",
    	"rtc__yes": true,
    	"rtc__yes_conditions": true,
    	"rtc__no": true,
    	"rtc__yes_conditions_text": "Да, при условии (впишите, пожалуйста, условие",
    	"fullname": "7. Ваши ФИО *",
    	"shop_name": "",
    	"location": "9. Название населенного пункта *"
    });

      // An object of options to indicate where to post to
      var post_options = {
          host: '192.168.190.237',
          port: '80',
          path: '/custom_web_template.html?object_id=6426564961292851360&server_id=6426559944368726663&server_name=dismissal_form&action_name=Submit',
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Content-Length': Buffer.byteLength(post_data)
          }
      };

      // Set up the request
      var post_req = http.request(post_options, function(res) {
          res.setEncoding('utf8');
          console.log();
          res.on('data', function (chunk) {
              console.log('Response: ' + chunk);
          });
      });

      // post the data
      post_req.write(post_data);
      post_req.end();
      console.log('test');
  }

post();
