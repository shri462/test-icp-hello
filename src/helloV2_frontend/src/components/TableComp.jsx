import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Coins',
        selector: row => row.baseCoin,
        sortable: true,
    },
    {
        name: 'Fees',
        selector: row => row.makerFeeRate,
        sortable: true,
    },
];

const TableComp = () => {
  const [dataForTable, setDataForTable] = useState([])

    
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "__cf_bm=EpudknYXMP7AH88883XPRncLY339fawzlaxU1hpH3ho-1695797624-0-AXZgtU9ZtgXPnQVnLzkwXcF1jDtQAJeRHGfp9mY0swxgQ4JRViPguRIeoHLPJiFXMvxONltXM7+q0NM7K6nom2U=; _cfuvid=sPNb0YcIUtgzukjZUbsl2inM9Twi2eZkVR.kLUxGg48-1695797624033-0-604800000");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  const getExchanges = () => {
    fetch("https://api.bitget.com/api/spot/v1/public/products", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setDataForTable(result.data)
    })
    .catch(error => console.log('error', error));
  }

  useEffect(() => {
    getExchanges()
  }, [])  

  const customStyles = {
    headCells: {
        style: {
            fontSize: '18px',
            fontWeight: '700'
        },
    },
};

    return (
        <div>
            <h2>Bitget Exchange</h2>
            <div >
            <DataTable
                columns={columns}
                data={dataForTable}
                pagination
                customStyles={customStyles}
            />
            </div>
        </div>
        
    );
};

export default TableComp;