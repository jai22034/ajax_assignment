$(document).ready(function () {
    $.ajax({
        url: " https://jsonplaceholder.typicode.com/posts", success: function (data) {
            let arr_of_obj = data;
            function createTable() {
                let previousTable = document.getElementById('dynamicTable');
                if (!!previousTable) {
                    previousTable.remove();
                }
                let table = document.createElement('table');
                table.setAttribute('id', 'dynamicTable');
                let header = Object.keys(arr_of_obj[0]);
                let tr = document.createElement('tr');
                

                let myhead = header.map((myarr) => {
                    var th = document.createElement('th');
                    th.innerHTML = myarr;
                    th.setAttribute('class', 'tableClass1');
                    th.setAttribute('id', myarr)
                    tr.appendChild(th);
                })
                table.appendChild(tr);
              

                let arr = arr_of_obj.map((arr1) => {
                    var tr = document.createElement('tr');
                   

                    var arr2 = header.map((myarr3) => {
                        var td = document.createElement('td');
                        td.innerHTML = arr1[myarr3];
                        td.setAttribute('class', 'tableClass');
                        tr.appendChild(td);
                    })
                    table.appendChild(tr);
                })
                document.body.appendChild(table);
                addEventsToColumns();
            }
            createTable();
            function addEventsToColumns() {
                var header = Object.keys(arr_of_obj[0]);
               
                let head = header.map((myarr4) => {
                    document.getElementById(myarr4).addEventListener('click', function (event) {
                        console.log(event);
                        sortTable(event.target.innerText)
                    })
                })
            }
            let flag = true;
            function sortTable(value) {
                arr_of_obj.sort(compare);
                function compare(a, b) {
                    if (a[value] > b[value] && flag)
                        return 1;
                    else
                        return -1;
                }
                flag = !flag;
                createTable();
            }
        }
    });
});