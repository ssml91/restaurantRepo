

       

    
    let storeInfo = [
                { 'image': '../../images/cucumberRoll.png', 'item': 'California Roll',     'price' : '10.50', 'description': 'avocado, mango, crab'},
                { 'image': 'https://via.placeholder.com/400x200.png','item': 'Caterpillar Roll ',   'price' : '12.95', 'description': 'avocado, tuna, eel sauce'},
                { 'image': 'https://via.placeholder.com/400x200.png','item': 'Crunchy Roll',   'price' : '12.50', 'description': 'tempura crusted, salmon'},
                { 'image': 'https://via.placeholder.com/400x200.png', 'item': 'Eel Roll', 'price' : '10.95', 'description': 'eel, cucumber, jalapeno'},
                { 'image': 'https://via.placeholder.com/400x200.png','item': 'Shrimp Tempura Roll',    'price' : '10.25', 'description': 'shrimp, daikon'},
                {'image': 'https://via.placeholder.com/400x200.png','item': 'Spicy Tuna Roll',   'price' : '8.00', 'description': 'tuna, cream cheese, spicy sauce'},
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
                    var description = data[i].description.toLowerCase();
                    var item = data[i].item.toLowerCase();
                    if (description.includes(value)){
                        filterData.push(data[i])
                    } else if (item.includes(value)) {
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
                if(dataType == 'image') {
                    console.log('your cannot sort this');
                    return;

                }
              
                if(order == 'desc') {
                    $(this).data('order', 'asc')
                    $(this).addClass('asc');
                    $(this).removeClass('desc');
                    if(dataType == 'number'){
                        storeInfo = storeInfo.sort((a,b) => parseFloat( a[column]) > parseFloat(b[column]) ? 1: -1)
                        console.log('price was clicked');
                    } else {
                        storeInfo = storeInfo.sort((a,b) => a[column] > b[column] ? 1: -1)
                        console.log('something else was clicked');

                    }
                   
                    text += '&#9650'
                }else {

                    $(this).data('order', 'desc')
                    $(this).addClass('desc');
                    $(this).removeClass('asc');
                    if(dataType == 'number'){
                        storeInfo = storeInfo.sort((a,b) => parseFloat( a[column]) < parseFloat(b[column]) ? 1: -1)
                        console.log('price was clicked');
                    } else {
                        console.log('something else was clicked');
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
                                    <td>${info.item}</td>
                                    <td>${info.price}</td>
                                    <td>${info.description}</td>
                                </tr>`;
                }
                console.log(dataHtml);

                tableBody.innerHTML= dataHtml;
            } 


            