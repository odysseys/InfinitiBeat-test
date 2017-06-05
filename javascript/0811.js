var lucas_num = [2, 1];
var pell_num = [0, 1];
for (var i = 2; i < 15; i++) {
  lucas_num.push(lucas_num[i - 2] + lucas_num[i - 1]);
  pell_num.push(pell_num[i - 2] + pell_num[i - 1] * 2);
}

$(".webpage").append("<p> Lucas number for previous 15 terms: " + lucas_num.join(", ") + "</p>");
$(".webpage").append("<p> Pell number for previous 15 terms: " + pell_num.join(", ") + "</p>");

function calc_nth_term(end_value) {
  var lucas_num = [2, 1];
  var pell_num = [0, 1];
  for (var i = 2; i < end_value; i++) {
    lucas_num.push(lucas_num[i - 2] + lucas_num[i - 1]);
    pell_num.push(pell_num[i - 2] + pell_num[i - 1] * 2);
  }
  //return [lucas_num[end_value - 1], pell_num[end_value - 1]];
  return [lucas_num, pell_num];
}
$(".submit-b").click(function() {
                        var lucas_pell = [];
                        lucas_pell = calc_nth_term($(".input-term").val());
                        $(".answer").text("Answer: " + lucas_pell[0][$(".input-term").val() - 1] + ", " + lucas_pell[1][$(".input-term").val() - 1]);
                        for(var i = 0; i < $(".input-term").val(); i++){
                          $("#table-head").append("<th scope='col'>" + i + "</th>");
                          $("#lucas-row").append("<td>" + lucas_pell[0][i] + "</td>");
                          $("#pell-row").append("<td>" + lucas_pell[1][i] + "</td>");
                        }
                      }
                      )