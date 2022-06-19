function calc(){
    var totalemployees = document.getElementById("employees").value;
    var totalemployees = parseInt(totalemployees,10);
    var totalWorkdays = document.getElementById("workdays").value;
    var totalWorkdays = parseInt(totalWorkdays,10);
    var totalDaysAbsent = document.getElementById("absent").value;
    var totalDaysAbsent = parseInt(totalDaysAbsent,10);

    var multiplication = (totalemployees*totalWorkdays );
    var absenceRate = (totalDaysAbsent/multiplication )*100;

    document.getElementById("rate").value = absenceRate;
}