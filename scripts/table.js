let sortDirection = false;
            let storeInfo = [
                {'address': 'Miramar Store, 97 Gates Road',     'phone' : '(301)378-2630', 'hours': '9:00am-5:00pm'},
                {'address': 'Mira Mesa Store, 202-B Laffey Circle',   'phone' : '(301)863-6278', 'hours': '6:00am-3:00pm'},
                {'address': 'Kearny Mesa Store, 1540 D Lovell Ct',   'phone' : '(619)851-4153', 'hours': '4:00pm-11:00pm'},
                {'address': 'Clairemont Store, 4545 La Jolla Village Square', 'phone' : '(619)453-8562', 'hours': '9:00am-5:00pm'},
                {'address': 'University City Store, 2267 Lago Ventana',    'phone' : '(858)256-2044', 'hours': '9:00am-5:00pm'},
                {'address': 'San Diego Store, 1570 Iris Avenue',   'phone' : '(858)256-9651', 'hours': '4:00pm-11:00pm'},
            ];

            $('#search-input').on('keyup', function(){
                var value = $(this).val()
                console.log('value:',value)
                var data= searchTable(value, storeInfo)
                loadTableData(data)
            })

          

            function searchTable(value, data) {
                var filterData=[];

                for(var i=0; i< data.length; i++ ){
                    value = value.toLowerCase()
                    var address = data[i].address.toLowerCase()

                    if (address.includes(value)){
                        filterData.push(data[i])
                    }
                } return filterData
            }

            //sort function
            $('th').on('click', function(){
                var column = $(this).data('column');
                var order = $(this).data('order');
                var text = $(this).html();
                text = text.substring(0, text.length -1)

                console.log('column was clicked', column, order);

                if(order == 'desc') {
                    $(this).data('order', 'asc')
                    storeInfo = storeInfo.sort((a,b) => a[column] > b[column] ? 1: -1)
                    text += '&#9660'
                }else {
                    $(this).data('order', 'desc')
                    storeInfo = storeInfo.sort((a,b) => a[column] < b[column] ? 1: -1)
                    text += '&#9650'
                }
                $(this).html(text)

                loadTableData(storeInfo)
            })


            //table data load
                window.onload = () => {
                loadTableData(storeInfo);
            }
             function loadTableData(storeInfo) {
                const tableBody = document.getElementById('tableData');
                let dataHtml = '';

                for(let info of storeInfo) {
                    dataHtml += `<tr>
                                    <td>${info.address}</td>
                                    <td>${info.phone}</td>
                                    <td>${info.hours}</td>
                                </tr>`;
                }
                console.log(dataHtml);

                tableBody.innerHTML= dataHtml;
            } 

            