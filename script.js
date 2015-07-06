(function() {

    document.getElementById('calculator').addEventListener('submit', function(event){
        event.preventDefault();

    var cost = document.getElementById('cost').value,
        tax = document.getElementById('tax').value,
        total;

        cost = parseInt(cost);
    	tax = parseInt(tax);

    	total = (cost * (1 + tax/100));

        console.log(cost, tax, total);

        document.getElementById('results').textContent = total;
    });

})();