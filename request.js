
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
    	"work_experience__less_3_months": true,
    	"work_experience__3_to_6_months": true,
    	"work_experience__half_to_1_year": true,
    	"work_experience__1_to_1_5_years": true,
    	"work_experience__1_5_to_3_years": true,
    	"work_experience__3_to_6_years": true,
    	"work_experience__more_6_years": true,
    	"position__cashier_seller": true,
    	"position__cashier_cook": true,
    	"position__cashier_baker": true,
    	"position__cashier_other": true,
    	"not_like__team_attitude": true,
    	"not_like__payment": true,
    	"not_like__disrespect": true,
    	"not_like__living_conditions": true,
    	"not_like__equipment": true,
    	"not_like__organization": true,
    	"not_like__long_to_go_work": true,
    	"not_like__location": true,
    	"not_like__schedule": true,
    	"not_like__load": true,
    	"not_like__reprocessing": true,
    	"not_like__reprocessing_not_paid": true,
    	"not_like__heavy": true,
    	"not_like__low_salary": true,
    	"not_like__conditions_salary": true,
    	"not_like__buy_products": true,
    	"not_like__not_in_time_payment": true,
    	"not_like__social_package": true,
    	"not_like__monotony": true,
    	"not_like__not_independence": true,
    	"not_like__not_career": true,
    	"time_to_work__not_planned": true,
    	"time_to_work__more_than_month": true,
    	"time_to_work__in_month": true,
    	"leaving_company": "5. Если у вас есть желание, опишите, пожалуйста, более подробно, почему вы уходите из Компании.",
    	"return_to_company__yes": true,
    	"return_to_company__yes_conditions": true,
    	"return_to_company__no": true,
    	"return_to_company__yes_conditions_text": "Да, при условии (впишите, пожалуйста, условие",
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

ping();
