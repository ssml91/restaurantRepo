

       

   
    let storeInfo = [
                { 'image': 'https://via.placeholder.com/400x200.png', 'address': 'Miramar Store, 97 Gates Road',     'phone' : '(301)378-2630', 'hours': '9:00am-5:00pm'},
                { 'image': 'https://via.placeholder.com/400x200.png','address': 'Mira Mesa Store, 202-B Laffey Circle',   'phone' : '(301)863-6278', 'hours': '6:00am-3:00pm'},
                { 'image': 'https://via.placeholder.com/400x200.png','address': 'Kearny Mesa Store, 1540 D Lovell Ct',   'phone' : '(619)851-4153', 'hours': '4:00pm-11:00pm'},
                { 'image': 'https://via.placeholder.com/400x200.png', 'address': 'Clairemont Store, 4545 La Jolla Village Square', 'phone' : '(619)453-8562', 'hours': '9:00am-5:00pm'},
                { 'image': 'https://via.placeholder.com/400x200.png','address': 'University City Store, 2267 Lago Ventana',    'phone' : '(858)256-2044', 'hours': '9:00am-5:00pm'},
                {'image': 'https://via.placeholder.com/400x200.png','address': 'San Diego Store, 1570 Iris Avenue',   'phone' : '(858)256-9651', 'hours': '4:00pm-11:00pm'},
            ];

            window.onload = () => {
                loadTableData(storeInfo);
            }

            
            //search
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
                    var address = data[i].address.toLowerCase();
                    var phone = data[i].phone.toLowerCase();
                    if (address.includes(value)){
                        filterData.push(data[i])
                    } else if (phone.includes(value)) {
                        filterData.push(data[i])
                    }
                } return filterData
            }

            //sort function
            $('th').on('click', function(column){

                
                var column = $(this).data('column');
                var order = $(this).data('order');
                var text = $(this).html();
                text = text.substring(0, text.length -1)
                var dataType = $(this).data('type');

                console.log('column was clicked', column, order, dataType);
                if( (dataType == 'image') || (dataType =='time')) {
                   
                    return;

                }
              
                if(order == 'desc') {
                    $(this).data('order', 'asc')
                    $(this).addClass('asc');
                    $(this).removeClass('desc');
                    if(dataType == 'number'){
                        storeInfo = storeInfo.sort((a,b) => parseFloat( a[column]) > parseFloat(b[column]) ? 1: -1)
                        
                    } else {
                        storeInfo = storeInfo.sort((a,b) => a[column] > b[column] ? 1: -1)
                        
                    }
                   
                    text += '&#9650'
                }else {

                    $(this).data('order', 'desc')
                    $(this).addClass('desc');
                    $(this).removeClass('asc');
                    if(dataType == 'number'){
                        storeInfo = storeInfo.sort((a,b) => parseFloat( a[column]) < parseFloat(b[column]) ? 1: -1)
                        
                    } else {
                        
                        storeInfo = storeInfo.sort((a,b) => a[column] < b[column] ? 1: -1)
                    }

                    
                    text += '&#9660'
                }
                $(this).html(text)

                loadTableData(storeInfo)
            })

//END SORT



            //table data load
            //     window.onload = () => {
            //     loadTableData(storeInfo);
            // }
             function loadTableData(storeInfo) {
                const tableBody = document.getElementById('tableData');
                let dataHtml = '';

                
                for(let info of storeInfo) {
                    dataHtml += `<tr>
                                    
                                    <td>${'<img src="' + info.image +'">'}</td>
                                    <td>${info.address}</td>
                                    <td>${info.phone}</td>
                                    <td>${info.hours}</td>
                                </tr>`;
                }
                console.log(dataHtml);

                tableBody.innerHTML= dataHtml;
            } 


            

            