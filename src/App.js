import React from 'react';
import Table from './components/table/table'
import { getPricing } from './api/pricing'
import './App.css';

function App() {

  const pricing = getPricing();
  const assetTableDefinition = [{ label: 'Ticker', dataType: 'text', sortType: 'alpha', dataField: 'ticker' },
  { label: 'Price', dataType: 'currency', sortType: 'number', dataField: 'price' },
  { label: 'Asset Class', dataType: 'asset', sortType: 'assetClass', 'dataField': 'assetClass' }]
  return (
    <div className="App">
      <div className ='main'>
        <Table tableData={pricing} columnDefinition={assetTableDefinition} />
      </div>
    </div>
  );
}

export default App;
